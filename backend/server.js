const express = require("express");
const app = express();
//const teachertable = require("./teachertable.js");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const _ = require("lodash");
const { result } = require("lodash");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "anjali123",
  database: "mydb",
});
db.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM login WHERE LoginUsername =? AND password =? ",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log("DB DATA", result);
        // res.send(result);
        const role = result[0].role;
        if (role === "teacher") {
          console.log("teacher");
          db.query(
            "SELECT * FROM teacher WHERE LoginId =?",
            [result[0].LoginId],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                // console.log("teacher ", result);
                res.json({ user: result, role: role });
              }
            }
          );
        } else {
          console.log("student");
          db.query(
            "SELECT * FROM student WHERE LoginId =?",
            [result[0].LoginId],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.json({ user: result, role: role });
              }
            }
          );
        }
      }
    }
  );
});

app.post("/teachersingle", (req, res) => {
  const { examname, duration, datetime, quesArray, idteacher } = req.body;
  console.log("body: " + quesArray);
  const questionsAnsers = [];
  console.log("ddg", idteacher);
  quesArray.map((array) => {
    const question = {
      question: array.Question,
      answers: [
        {
          answer: array.answer1.answer,
          CorrectAns: array.answer1.CorrectAns,
        },
        {
          answer: array.answer2.answer,
          CorrectAns: array.answer2.CorrectAns,
        },
        {
          answer: array.answer3.answer,
          CorrectAns: array.answer3.CorrectAns,
        },
        {
          answer: array.answer4.answer,
          CorrectAns: array.answer4.CorrectAns,
        },
      ],
    };

    questionsAnsers.push(question);
  });

  console.log("qLIST ", questionsAnsers);

  db.query(
    "INSERT INTO exam (exam,status,startingtime,duration,idteacher)VALUES(?,?,?,?,?)",
    [examname, true, datetime, duration, idteacher.user[0].idteacher],

    (err, result) => {
      if (!err) {
        saveQuestions(result.insertId, questionsAnsers);
        res.send({ message: "Save Success" });
      } else {
        console.log(err);
      }
    }
  );
});

const saveQuestions = (exmId, questionsAnsers) => {
  questionsAnsers.forEach((quiz) => {
    db.query(
      "INSERT INTO question(Question,exam_IdExam) VALUES(?,?)",
      [quiz.question, exmId],
      (err, result) => {
        if (!err) {
          saveAnswers(result.insertId, quiz.answers);
        } else {
          console.log(err);
        }
      }
    );
  });
};

const saveAnswers = (quizId, answers) => {
  answers.forEach((ans) => {
    db.query(
      "INSERT INTO answer(answer,CorrectAns,Question_idQuestion)VALUES(?,?,?)",

      [ans.answer, ans.CorrectAns, quizId],

      (err, result) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });
};

//teacher single update button
app.put("/teachersingleupdate/:IdExam", (req, res) => {
  // const examname = req.body.examname;
  // const datetime = req.body.datetime;
  // const duration = req.body.duration;
  // const quesArray = req.body.quesArray;
  const IdExam = req.params.IdExam;
  const { examname, duration, datetime, quesArray } = req.body;
  console.log("body: " + quesArray);
  // console.log("bodyex" + examname);
  // const questionsAnsers = [];

  // quesArray.map((array) => {
  //   const question = {
  //     question: array.Question,
  //     answers: [
  //       {
  //         answer: array.answer1.answer,
  //         CorrectAns: array.answer1.CorrectAns,
  //       },
  //       {
  //         answer: array.answer2.answer,
  //         CorrectAns: array.answer2.CorrectAns,
  //       },
  //       {
  //         answer: array.answer3.answer,
  //         CorrectAns: array.answer3.CorrectAns,
  //       },
  //       {
  //         answer: array.answer4.answer,
  //         CorrectAns: array.answer4.CorrectAns,
  //       },
  //     ],
  //   };

  //   questionsAnsers.push(question);
  // });

  // console.log("qLIST ", questionsAnsers);

  // db.query(
  //   "UPDATE exam SET exam = ?, startingtime= ? , duration =? WHERE IdExam = ?",
  //   [examname, datetime, duration, IdExam],
  //   (err, result) => {
  //     if (!err) {
  //       saveUpdatedQuestions(result.insertId, questionsAnsers);
  //       res.send({ message: "Update Success" });
  //     } else {
  //       console.log(err);
  //     }
  //   }
  // );
});
const saveUpdatedQuestions = (exmId, questionsAnsers) => {
  questionsAnsers.forEach((quiz) => {
    db.query(
      "UPDATE question SET Question=? WHERE exam_IdExam=? ",
      [quiz.question, exmId],
      (err, result) => {
        if (!err) {
          saveUpdatedAnswers(result.insertId, quiz.answers);
        } else {
          console.log(err);
        }
      }
    );
  });
};
const saveUpdatedAnswers = (quizId, answers) => {
  answers.forEach((ans) => {
    db.query(
      "UPDATE answer SET answer =? , CorrectAns =? Question_idQuestion =? WHERE answerId=?",
      [ans.answer, ans.CorrectAns, quizId],

      (err, result) => {
        if (err) {
          console.log(err);
        }
      }
    );
  });
};
// Teacher Main
app.get("/teachertable", (req, res) => {
  const idteacher = req.query.idteacher;
  //console.log("teacherid", JSON.parse(idteacher).user[0].idteacher);

  // const examm = req.body.examm;
  // const stat = req.body.stat;
  // const startingtime = req.body.startingtime;
  // const duration = req.body.duration;
  db.query(
    "SELECT Idexam,exam,status,startingtime,duration FROM exam WHERE idteacher =? ",
    [JSON.parse(idteacher).user[0].idteacher],

    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log("te result", results);
        res.send(results);
      }
    }
  );
});

app.get("/QuestionAns/:examId", (req, res) => {
  //const examId = req.params.IdExam;
  const examId = req.params.examId;
  db.query(
    `SELECT q.*, a.* FROM question q JOIN answer a ON q.idQuestion = a.Question_idQuestion WHERE q.exam_IdExam = ${examId}`,
    (err, result) => {
      if (!err) {
        let questions = _.groupBy(result, "idQuestion");
        let quetionsDtso = [];
        let quetionDto;

        for (const question in questions) {
          //console.log(questions[question]);

          // db.query(
          //   `SELECT * FROM answer WHERE Question_idQuestion = ${questions[question][0].Question_idQuestion}`,
          //   (err, result) => {
          //     if (!err) {
          quetionDto = {
            questionId: questions[question][0].Question_idQuestion,
            Question: questions[question][0].Question,

            answer1: {
              answerID: result[0].answerId,
              answer: result[0].answer,
              CorrectAns: result[0].CorrectAns,
            },
            answer2: {
              answerID: result[1].answerId,
              answer: result[1].answer,
              CorrectAns: result[1].CorrectAns,
            },
            answer3: {
              answerID: result[2].answerId,
              answer: result[2].answer,
              CorrectAns: result[2].CorrectAns,
            },
            answer4: {
              answerID: result[3].answerId,
              answer: result[3].answer,
              CorrectAns: result[3].CorrectAns,
            },
          };
          console.log("question ", quetionDto);
          //     }
          //   }
          // );
          quetionsDtso.push(quetionDto);
        }

        console.log("q Array ", quetionsDtso);
        res.status(200).json(quetionsDtso);
      } else {
        console.log(err);
      }
    }
  );
});

//student single

//student table
app.get("/studenttable", (req, res) => {
  //console.log("st", req.body);
  //const LoginId = req.query.loginid;

  // const examm = req.body.examm;
  // const stat = req.body.stat;
  // const startingtime = req.body.startingtime;
  // const duration = req.body.duration;
  db.query(
    "SELECT Idexam,exam,status,startingtime,duration FROM exam WHERE idteacher = ?",
    [1],

    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        //console.log("student  ", results);
        res.send(results);
      }
    }
  );
});

// student exam infor
app.post("/studentsingle", (req, res) => {
  // console.log("qlist", req.body.questionList);
  // console.log("exid", req.body.exmId);

  const idstudent = req.body.idstudent;
  const exmId = req.body.exmId;
  //const questionId = req.body.questionId;
  const questionList = req.body.questionList;
  const studentid = idstudent.user[0].idstudent;
  //console.log("idstudent", idstudent);

  const qli = [];
  questionList.map((array) => {
    const question = {
      idQuestion: array.questionId,
      answers: [
        {
          answer: array.answer1.answer,
          CorrectAns: array.answer1.CorrectAns,
        },
        {
          answer: array.answer2.answer,
          CorrectAns: array.answer2.CorrectAns,
        },
        {
          answer: array.answer3.answer,
          CorrectAns: array.answer3.CorrectAns,
        },
        {
          answer: array.answer4.answer,
          CorrectAns: array.answer4.CorrectAns,
        },
      ],
    };
    qli.push(question);
    db.query(
      "SELECT * FROM studentexam WHERE IdExam =? AND idstudent= ? ",
      [exmId, studentid],
      (err, result) => {
        if (err) {
          console.log(err);
        } else if (result.length === 0) {
          studentexam(exmId, studentid, qli);
        } else {
          saveAnswers(exmId, studentid, qli);
        }
      }
    );
  });
  const studentexam = (exmId, studentid, qli) => {
    db.query(
      "INSERT INTO studentexam (IdExam,idstudent,score)VALUES(?,?,?)",
      [exmId, studentid, 55],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          saveAnswers(exmId, studentid, qli);
        }
      }
    );
  };

  const saveAnswers = (exmId, studentid, qli) => {
    qli.map((q) => {
      //console.log("qli 1", q);
      db.query(
        "SELECT * FROM student_answer WHERE IdExam=? AND idstudent=? AND idQuestion=?",
        [exmId, studentid, q.idQuestion],
        (err, result) => {
          if (err) {
            console.log(err);
          } else if (result.length === 0) {
            q.answers.map((an) => {
              db.query(
                "INSERT INTO student_answer (answer,idQuestion,idstudent,IdExam,CorrectAns) VALUES(?,?,?,?,?)",
                [an.answer, q.idQuestion, studentid, exmId, an.CorrectAns],
                (err, result) => {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log("answ", result);

                    //updateAnswers(exmId, studentid, an.answers);
                    // db.query(
                    //   "UPDATE student_answer SET answer = ?,idQuestion=?,CorrectAns=?, idstudent=? WHERE idstudentAnswer= ?",
                    //   [
                    //     (an.answer,
                    //     q.idQuestion,
                    //     an.CorrectAns,
                    //     studentid,
                    //     exmId),
                    //   ],

                    //   (err, result) => {
                    //     if (err) {
                    //       console.log(err);
                    //     } else {
                    //       console.log("DB students", result);
                    //       res.send(result);
                    //     }
                    //   }
                    // );
                  }
                }
              );
            });
          }
          //else {

          //   //updateAnswers(exmId, studentid, q.answers);
          // }
        }
      );
    });
  };

  // const addAnswers = (exmId, studentid, qli) => {
  // qli.forEach((ans) => {
  // db.query(
  //   "INSERT INTO student_answer (answer,idQuestion,idstudent,IdExam,CorrectAns) VALUES(?,?,?,?,?)",
  //   [answer, idQuestion, studentid, exmId, CorrectAns],

  //   (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log("an", result);
  //       //updateAnswers(exmId, studentid, ans.answers);
  //     }
  //   }
  // );
  // });
  // };

  // const updateAnswers = (exmId, studentid, answers, qli) => {
  //   answers.forEach((answ) => {
  //     console.log("answer", answ);
  //     db.query(
  //       "UPDATE student_answer SET answer = ?,idQuestion=?,CorrectAns=?, idstudent=? WHERE idstudentAnswer= ?",
  //       [(answ.answer, answ.idQuestion, answ.CorrectAns, studentid, exmId)],

  //       (err, result) => {
  //         if (err) {
  //           console.log(err);
  //         } else {
  //           console.log("DB students", result);
  //           res.send(result);
  //         }
  //       }
  //     );
  //   });
  // };
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
