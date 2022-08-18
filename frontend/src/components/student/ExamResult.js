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
        return (
          <div className="d-flex align-items-center justify-content-center student-result-page">
          <Container style={{justifyContent:"center",margintop:"10px",padding:"50px",border:"2px solid rgba(0, 0, 0.5, 0.05)",backgroundColor: "Gray",width:"790px"}}>
            <Card style={{padding:"40px",width:"700px",marginleft:"900px",backgroundColor: "Gainsboro"}}>
              <Col xs={12} className='single-question'>
                <p style={{width:"25px",padding:"10px",fontSize:"20px",fontWeight:"bold",fontFamily:"inherit",width:"500px"}}>Exam Completed</p>
               
                
              </Col>
            
            </Card>
          <CardGroup style={{padding:"40px",width:"700px",marginleft:"900px"}}>
              
             
                  <Card style={{backgroundColor: "Gainsboro"}}>
                      
                      <Col xs={12} className='single-question'>
                          <p style={{width:"25px",padding:"10px",fontSize:"20px",fontWeight:"bold",fontFamily:"inherit",width:"500px"}}>Questions</p>
                          
                          <ListGroup style={{width:"550px",fontSize:"18px",padding:"10px",fontWeight:"bold"}}>
                            <ListGroupItem>
                                  {this.state.questionList[this.state.selectedIndex].question1.question}<span style={{paddingLeft:"350px"}}/>
                                  {this.state.questionList[this.state.selectedIndex].question1.isAnswer}
                            </ListGroupItem>
                            <ListGroupItem>
                                  {this.state.questionList[this.state.selectedIndex].question2.question}<span style={{paddingLeft:"350px"}}/>
                                  {this.state.questionList[this.state.selectedIndex].question2.isAnswer}
                            </ListGroupItem>
                            <ListGroupItem>
                                  {this.state.questionList[this.state.selectedIndex].question3.question}<span style={{paddingLeft:"350px"}}/>
                                  {this.state.questionList[this.state.selectedIndex].question3.isAnswer}
                            </ListGroupItem>
                            <ListGroupItem>
                                  {this.state.questionList[this.state.selectedIndex].question4.question}<span style={{paddingLeft:"290px"}}/>
                                  {this.state.questionList[this.state.selectedIndex].question4.isAnswer}
                            </ListGroupItem>
                             
                          </ListGroup>


                      </Col>
                          
                               
                           
                  </Card> 
                  
          </CardGroup>

          <Button style={{padding:"10px",marginLeft:"600px",width:"100px"}} size={"lg"} variant="secondary" >close</Button>            
          </Container>
          </div>



        );


    

  }   
  }

  export default ExamResult;

  