import React from 'react';
import {Form,Button,Card,ListGroup,ListGroupItem,Col,CardGroup,Container} from 'react-bootstrap' ;
import './student.css';

class ExamResult extends React.Component{
            constructor(props) {
              super(props);
              this.state={
                examName: "End Exam",
                questionList:[
                {question1:{question:"What is ", isAnswer:"Correct"},question2:{question:"why they",isAnswer:"Correct"},question3:{question:"what is?",isAnswer:"Wrong"},question4:{question:"why canada is ?",isAnswer:"Wrong"}}],
                selectedIndex:0,
              
                
                

             
              }
          }
         
           
               
          

        render(){
          const exam =this.state;
          
        return (
          <div className="align-items-center justify-content-center student-result-page">
          <div style={{justifyContent:"center",margintop:"10px",padding:"50px",border:"2px solid rgba(0, 0, 0.5, 0.05)",backgroundColor: "transparent"}}>
          <Card style={{ margin:"auto",width:"100%",height:"calc(100vh - 600px)"}}>
          <div style={{width:"100%", position:"relative",padding:"30px 20px 20px 20px"}}>
            <h3>Exam Name</h3>
          </div>  
                <Col xs={12} className='single-question'>
                <p style={{width:"25px",padding:"10px",fontSize:"20px",fontWeight:"bold",fontFamily:"inherit",width:"500px"}}>Exam Completed</p>
              
                <div style={{fontSize:"40px",textAlign:"center",color: exam ==="Passed"?"green":"red"}}>Passed</div> 
                <h3 style={{textAlign:"center"}}>A-89 Points</h3>
               
                
              </Col>
            
            </Card>
          <CardGroup style={{marginTop:"20px"}}>
              
             
                  <Card style={{margin:"auto",width:"100%",height:"calc(100vh - 600px)"}}>
                      
                      <Col xs={12} className='single-question'>
                          <p style={{width:"25px",padding:"10px",fontSize:"20px",fontWeight:"bold",fontFamily:"inherit",width:"500px"}}>Questions</p>
                          
                          <ListGroup style={{width:"100",height:"300px",fontSize:"18px",padding:"10px",fontWeight:"bold"}}>
                          <div style={{width:"50%", position:"relative",padding:"30px 20px 20px 20px",justifyContent:"center",textAlign:"center"}}>
                            <ListGroupItem>
                                  {this.state.questionList[this.state.selectedIndex].question1.question}<span style={{paddingLeft:"650px"}}/>
                                  {this.state.questionList[this.state.selectedIndex].question1.isAnswer}
                            </ListGroupItem>
                            <ListGroupItem>
                                  {this.state.questionList[this.state.selectedIndex].question2.question}<span style={{paddingLeft:"650px"}}/>
                                  {this.state.questionList[this.state.selectedIndex].question2.isAnswer}
                            </ListGroupItem>
                            <ListGroupItem>
                                  {this.state.questionList[this.state.selectedIndex].question3.question}<span style={{paddingLeft:"650px"}}/>
                                  {this.state.questionList[this.state.selectedIndex].question3.isAnswer}
                            </ListGroupItem>
                            <ListGroupItem>
                                  {this.state.questionList[this.state.selectedIndex].question4.question}<span style={{paddingLeft:"590px"}}/>
                                  {this.state.questionList[this.state.selectedIndex].question4.isAnswer}
                            </ListGroupItem>
                          </div>   
                          </ListGroup>


                      </Col>
                          
                               
                           
                  </Card> 
                  
          </CardGroup>

          <Button style={{padding:"10px",marginLeft:"900px",width:"100px" ,float:"right"}} size={"lg"} variant="secondary" >close</Button>            
          </div>
          </div>



        );


    

  }   
  }

  export default ExamResult;

  