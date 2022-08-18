import {Form,FloatingLabel,Card,Button,CardGroup,Container,ListGroup,ListGroupItem, Col} from 'react-bootstrap' ;

import React from "react";
import './student.css';

class StudentSingleExamView extends React.Component  {
            constructor(props) {
                super(props);
                this.state={
                   examName: "End Exam",
                   questionList:[
                   {id:0 ,Question:"What is ?",answer1:{answer:"urope", isAnswer:false},answer2:{answer:"asia",isAnswer:false},answer3:{answer:"swisterland",isAnswer:false},answer4:{answer:"canada",isAnswer:false}},
                   {id:1 ,Question:"How is ?",answer1:{answer:"urope", isAnswer:false},answer2:{answer:"asia",isAnswer:false},answer3:{answer:"swisterland",isAnswer:false},answer4:{answer:"canada",isAnswer:false}},
                   {id:2 ,Question:"Why is ?",answer1:{answer:"urope", isAnswer:false},answer2:{answer:"asia",isAnswer:false},answer3:{answer:"swisterland",isAnswer:false},answer4:{answer:"canada",isAnswer:false}},
                   {id:3 ,Question:"When is ?",answer1:{answer:"urope", isAnswer:false},answer2:{answer:"asia",isAnswer:false},answer3:{answer:"swisterland",isAnswer:false},answer4:{answer:"canada",isAnswer:false}}
                ],
                   

                   selectedIndex:0,
                }
            }

            changeAnswer = (type)=>{
                var quislist = this.state.questionList;

                    quislist[this.state.selectedIndex].answer1.isAnswer = false;
                    quislist[this.state.selectedIndex].answer2.isAnswer = false;
                    quislist[this.state.selectedIndex].answer3.isAnswer = false;
                    quislist[this.state.selectedIndex].answer4.isAnswer = false;

                 

                  quislist[this.state.selectedIndex][type].isAnswer = true;
                  this.setState({questionList:quislist});
                  console.log(quislist);
            }

                
            clickNext =()=>{
                var selindx = this.state.selectedIndex;
                if(selindx < this.state.questionList.length -1){
                    this.setState({selectedIndex:(selindx+1)});
                }
            }
            clickPrev=()=>{
                var selindx = this.state.selectedIndex;
                if((selindx ) > 0  ){
                    this.setState({selectedIndex:(selindx-1)});
                }

            }
            clickSave=(type)=>{
                
                }
               
            
            clickComplete=()=>{
                console.log("completed");
            }

            
            //add isanswer boolean to array object
            //add radio button to each answer
            //radio onChange -> this.changeanswer()
            //changeanswer -> get all array (var variable) -> loop and isanswer set to false -> array[state.selectedIndex].isanswer set to true
            //main array set -> setState({questionlist:array})
            //radio button checked={mainarray[selectedIndex].isanswer === true}
    

        render(){
          
            return(
                <div className="d-flex align-items-center justify-content-center student-single-exam" >
                <Container style={{justifyContent:"center",margintop:"10px",padding:"50px",border:"2px solid rgba(0, 0, 0.5, 0.05)",backgroundColor: "Gray",width:"790px"}}>
                
                <CardGroup style={{padding:"40px",width:"700px",marginleft:"900px"}}>
                   
                        <Card style={{backgroundColor: "Gainsboro"}}>
                            
                            <Col xs={12} className='single-question'>
                                <p style={{width:"25px",padding:"10px",fontSize:"20px",fontWeight:"bold",fontFamily:"inherit",width:"500px"}}>{this.state.questionList[this.state.selectedIndex].Question}</p>
                                
                                <ListGroup style={{width:"550px",fontSize:"18px",padding:"10px",fontWeight:"bold"}}>
                                    <ListGroupItem>
                                        <input type="radio" style={{ width: "25px"}} onChange={()=>this.changeAnswer("answer1")}  checked={this.state.questionList[this.state.selectedIndex].answer1.isAnswer ===true? true :false }/>
                                        {this.state.questionList[this.state.selectedIndex].answer1.answer}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <input type="radio" style={{ width: "25px"}}  onChange={()=>this.changeAnswer("answer2")}  checked={this.state.questionList[this.state.selectedIndex].answer2.isAnswer ===true? true:false }/>
                                        {this.state.questionList[this.state.selectedIndex].answer2.answer}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <input type="radio" style={{ width: "25px"}} onChange={()=>this.changeAnswer("answer3")}  checked={this.state.questionList[this.state.selectedIndex].answer3.isAnswer ===true? true:false }/>
                                        {this.state.questionList[this.state.selectedIndex].answer3.answer}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <input type="radio" style={{ width: "25px"}}  onChange={()=>this.changeAnswer("answer4")}  checked={this.state.questionList[this.state.selectedIndex].answer4.isAnswer ===true? true:false } />
                                        {this.state.questionList[this.state.selectedIndex].answer4.answer}
                                    </ListGroupItem>
                                </ListGroup>


                            </Col>
                                 
                                 <span>
                                    <Button onClick={()=>this.clickPrev()} style={{fontWeight:"bold",fontSize:"20px",width:"100px",display:"inline",float:"left"}} size={"sm"} variant="secondary">Prev</Button>
                                    
                                    <Button onClick={()=>this.clickNext()} style={{fontWeight:"bold",fontSize:"20px",width:"100px",  display:"inline",float:"right"}} size={"sm"} variant="secondary">Next</Button>
                                 </span>
                                 
                                 
                                     
                                 
                        </Card> 
                        
                </CardGroup>
                <br/>
                    <div className="student-single-save-button">
                        
                        <Button onClick={()=>this.clickSave} style={{fontWeight:"bolder",fontSize:"13px",width:"100px",display:"inline"}} size={"sm"} variant="primary">Save</Button>
                        <Button onClick={()=>this.clickComplete} style={{fontWeight:"bolder",fontSize:"11px",width:"140px",display:"inline"}} size={"sm"} variant="success">Complete</Button>     
                        
                    </div>
                           
                </Container>
               
                </div>



            );



        }    




   
}

export default StudentSingleExamView;