import {
  Form,
  FloatingLabel,
  Card,
  Button,
  CardGroup,
  Container,
  ListGroup,
  ListGroupItem,
  Col,
} from "react-bootstrap";
import axios from "axios";

import React from "react";
import "./student.css";
import { withRouter } from "react-router-dom";

class StudentSingleExamView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examName: "",
      examId: "",
      idstudent: "",
      questionList: [
        {
          idQuestion: "",
          Question: "",
          answer1: { answer: "", CorrectAns: false },
          answer2: { answer: "", CorrectAns: false },
          answer3: { answer: "", CorrectAns: false },
          answer4: { answer: "", CorrectAns: false },
        },
        // {
        //   id: 1,
        //   Question: "",
        //   answer1: { answer: "", isAnswer: false },
        //   answer2: { answer: "", isAnswer: false },
        //   answer3: { answer: "", isAnswer: false },
        //   answer4: { answer: "", isAnswer: false },
        // },
        // {
        //   id: 2,
        //   Question: "",
        //   answer1: { answer: "", isAnswer: false },
        //   answer2: { answer: "", isAnswer: false },
        //   answer3: { answer: "", isAnswer: false },
        //   answer4: { answer: "", isAnswer: false },
        // },
        // {
        //   id: 3,
        //   Question: " ",
        //   answer1: { answer: "", isAnswer: false },
        //   answer2: { answer: "", isAnswer: false },
        //   answer3: { answer: "", isAnswer: false },
        //   answer4: { answer: "", isAnswer: false },
        // },
      ],

      selectedIndex: 0,
    };
  }

  // getting data
  componentDidMount() {
    const idstudent = this.props.location.state.detail;
    console.log("loginnnstuexm", idstudent);
    //const questionList = this.state.questionList;
    const studentexamInfo = JSON.parse(localStorage.getItem("examInfo"));

    console.log("exstu ", studentexamInfo);

    axios

      .get(`http://localhost:3001/QuestionAns/${studentexamInfo.examId}`, {
        params: { idstudent: idstudent },
      })

      .then((response) => {
        console.log("res", response.data);
        this.setState({
          questionList: response.data,
          examName: studentexamInfo.ename,
          examId: studentexamInfo.examId,
          idstudent: idstudent,
        });
      });
  }

  changeAnswer = (type) => {
    var quislist = this.state.questionList;

    quislist[this.state.selectedIndex].answer1.CorrectAns = false;
    quislist[this.state.selectedIndex].answer2.CorrectAns = false;
    quislist[this.state.selectedIndex].answer3.CorrectAns = false;
    quislist[this.state.selectedIndex].answer4.CorrectAns = false;

    quislist[this.state.selectedIndex][type].CorrectAns = true;
    this.setState({ questionList: quislist });
    console.log(quislist);
  };

  clickNext = () => {
    var selindx = this.state.selectedIndex;
    if (selindx < this.state.questionList.length - 1) {
      this.setState({ selectedIndex: selindx + 1 });
    }
  };
  clickPrev = () => {
    var selindx = this.state.selectedIndex;
    if (selindx > 0) {
      this.setState({ selectedIndex: selindx - 1 });
    }
  };
  clickSave = () => {
    console.log("exid", this.state.examId);
    {
      console.log("questonlist", this.state.questionList);
      console.log("loginnext", JSON.parse(localStorage.getItem("user")));
      axios
        .post("http://localhost:3001/studentsingle", {
          questionList: this.state.questionList,
          exmId: this.state.examId,
          idstudent: JSON.parse(localStorage.getItem("user")),
        })

        .then((res) => {
          if (res.data.message) {
            alert("Exam Save Successfully");
          }
        });
    }
  };

  clickComplete = () => {
    //console.log("completed");
    this.props.history.push("/StudentMainView");
  };

  render() {
    return (
      <div className="align-items-center justify-content-center student-single-exam">
        <div
          style={{
            justifyContent: "center",
            margin: "0 auto",
            padding: "10px",
            border: "2px solid rgba(0, 0, 0.5, 0.05)",
            backgroundColor: "transparent",
          }}
        >
          <Card
            style={{
              margin: "auto",
              width: "100%",
              height: "calc(100vh - 100px)",
            }}
          >
            <Col xs={12} className="single-question">
              <h2
                style={{
                  padding: "20px",
                  border: "2px solid rgba(0, 0, 0.5, 0.05)",
                  width: "200px",
                }}
              >
                {this.state.examName}
              </h2>

              <p
                style={{
                  width: "55px",
                  padding: "30px",
                  fontSize: "30px",
                  fontWeight: "bold",
                  fontFamily: "inherit",
                  width: "100%",
                }}
              >
                {this.state.selectedIndex + 1}.
                {this.state.questionList[this.state.selectedIndex].Question}
              </p>

              <ListGroup
                style={{
                  width: "100%",
                  height: "500px",
                  fontSize: "20px",
                  padding: "150px",
                  fontWeight: "bold",
                }}
              >
                <ListGroupItem>
                  <input
                    type="radio"
                    style={{ width: "25px" }}
                    onChange={() => this.changeAnswer("answer1")}
                    checked={
                      this.state.questionList[this.state.selectedIndex].answer1
                        .CorrectAns === true
                        ? true
                        : false
                    }
                  />
                  {
                    this.state.questionList[this.state.selectedIndex].answer1
                      .answer
                  }
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    style={{ width: "25px" }}
                    onChange={() => this.changeAnswer("answer2")}
                    checked={
                      this.state.questionList[this.state.selectedIndex].answer2
                        .CorrectAns === true
                        ? true
                        : false
                    }
                  />
                  {
                    this.state.questionList[this.state.selectedIndex].answer2
                      .answer
                  }
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    style={{ width: "25px" }}
                    onChange={() => this.changeAnswer("answer3")}
                    checked={
                      this.state.questionList[this.state.selectedIndex].answer3
                        .CorrectAns === true
                        ? true
                        : false
                    }
                  />
                  {
                    this.state.questionList[this.state.selectedIndex].answer3
                      .answer
                  }
                </ListGroupItem>
                <ListGroupItem>
                  <input
                    type="radio"
                    style={{ width: "25px" }}
                    onChange={() => this.changeAnswer("answer4")}
                    checked={
                      this.state.questionList[this.state.selectedIndex].answer4
                        .CorrectAns === true
                        ? true
                        : false
                    }
                  />
                  {
                    this.state.questionList[this.state.selectedIndex].answer4
                      .answer
                  }
                </ListGroupItem>
              </ListGroup>
            </Col>

            <span>
              <Button
                onClick={() => this.clickPrev()}
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  width: "100px",
                  display: "inline",
                  float: "left",
                }}
                size={"sm"}
                variant="secondary"
              >
                Prev
              </Button>

              <Button
                onClick={() => this.clickNext()}
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  width: "100px",
                  display: "inline",
                  float: "right",
                }}
                size={"sm"}
                variant="secondary"
              >
                Next
              </Button>
            </span>
          </Card>

          <div className="student-single-save-button">
            <Button
              onClick={() => this.clickSave()}
              style={{
                marginTop: "60px",
                fontWeight: "bolder",
                fontSize: "20px",
                width: "200px",
                display: "inline",
                float: "right",
              }}
              size={"sm"}
              variant="primary"
            >
              Save
            </Button>
            <Button
              onClick={() => this.clickComplete()}
              style={{
                marginTop: "60px",
                fontWeight: "bolder",
                fontSize: "20px",
                width: "240px",
                display: "inline",
                float: "right",
              }}
              size={"sm"}
              variant="success"
            >
              Complete
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(StudentSingleExamView);
