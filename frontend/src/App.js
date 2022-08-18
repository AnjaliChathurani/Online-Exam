
//import ReactDOM from "react-dom/client";
import { Switch, Route } from "react-router-dom";

import './App.css';
//import TeacherSinglExam from './components/teacher/TeacherSinglExam';
import Login from './components/login';

//import StExamResults from './components/student/StExamResults';



//import Dashboard from './components/teacher/dashboard';
//import Addquiz from './components/teacher/Addquiz';
//import Display from './components/teacher/DisplayFormDataInTable';

 import StudentMainView from './components/student/StudentMainView';
 import MonitorExam from './components/teacher/MonitorExam';
 import ExamResult from './components/student/ExamResult';
 import TeacherSingle from './components/teacher/TeacherSingle';
 import TeacherMain from './components/teacher/TeacherMain';
 import StudentSingleExamView from './components/student/StudentSingleExamView';
 
 


function App() {
  return (
          
          
          
        
          <Switch>
            
              <Route path="/" exact><Login /></Route>
              <Route path="/StudentMainView"exact> <StudentMainView/> </Route>
              <Route path="/StudentSingleExamView" exact><StudentSingleExamView /></Route>
              <Route path="/TeacherMain" exact><TeacherMain/></Route>
              <Route path="/TeacherSingle" exact><TeacherSingle/></Route>
              <Route path="/ExamResult" exact><ExamResult/></Route>
              <Route path="/MonitorExam"  exact><MonitorExam/></Route>
              
          
          </Switch>

        
      
        
    
        
    

  );
}



export default App;