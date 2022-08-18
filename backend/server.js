const express = require("express");
const app = express();
const mysql = require ("mysql");
const cors = require("cors");


app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'anjali123',
    database: 'onlinequizexam'
});
db.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

    app.post('/login',(req,res)=>{
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
   
    
    db.query("SELECT * FROM login WHERE LoginUsername =? AND LoginPassword =? ",[email,password],
    (err,result)=>{
        if(err){
            console.log(err)
        } else{
            console.log("DB DATA",result);
          res.send(result);
          }
    }
    );
});
app.post('/teachersingle',(req,res)=>{
  console.log(req.body);
   const Question = req.body.Question;
   const answer1 = req.body.answer1;
   const answer2 = req.body.answer2;
   const answer3 = req.body.answer2;
   const answer4 = req.body.answer2;
   const ExamName = req.body.ExamName;
 
   
  db.query("INSERT INTO question(ExamName,Question, answer1,answer2,answer3,answer4) VALUES (?,?,?,?)",[Question,answer1,answer2,answer3,answer4,ExamName],

  (err,result)=>{
      if(err){
          console.log(err)
      } else{
        console.log(result);  
        res.send("value insertd");
        }
  }
  );
});

app.listen(3001, ()=>{
    console.log("server is running on port 3001");

});
