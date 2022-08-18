
import React from 'react';
import Container from 'react-bootstrap/Container';


import 'bootstrap/dist/css/bootstrap.css';


import {CardGroup,ListGroup,Col,Form,Row,Button, Card, ListGroupItem} from 'react-bootstrap'; 

class MonitorExam extends React.Component {
    constructor(props) {
      super(props);
      this.state = [
       
        
        {isComplete:"Complete"},

        
        
      ]
      
  
}

     
    
       
  
render() {
    return(
        <div className="d-flex align-items-center justify-content-center">
        <Container style={{margintop:"10px",padding:"30px",border:"5px solid rgba(0, 0, 0.5, 0.05)",backgroundColor:"grey"}}>
            
            <CardGroup style={{padding:"40px"}}>
                <Card>
                    <h4 style={{padding:"20px",fontWeight:"bold",fontSize:"20px"}}>Exam Complete</h4>
                    <h1 style={{textAlign:"center"}}>15/20</h1>
                    <h5 style={{textAlign:"center"}}>Time Left 00.15min</h5>
                </Card>
                <Card>
                    <h4 style={{padding:"20px",fontWeight:"bolder"}}>Attending Student List</h4>
                    
                        <ListGroup>
                            {this.state.map((data,index)=>{
                            return(
                            <>
                            <div key={index}></div>
                            

                            
                                <ListGroup.Item>
                                
                                student1 <span style={{paddingLeft:"290px"}} />
                                {data.isComplete}
                            
                            
                                </ListGroup.Item>
                                

                                <ListGroup.Item>
                                student2 <span style={{paddingLeft:"290px"}} />
                                {data.isComplete}
                                
                                </ListGroup.Item>

                                <ListGroup.Item>
                                student3 <span style={{paddingLeft:"290px"}} />
                                {data.isComplete}
                                
                                
                                </ListGroup.Item>
                            </> 
                            );
                            })}
                        </ListGroup>
                </Card> 
            </CardGroup>

            <CardGroup>
                <Card style={{border:"5px solid rgba(0, 0, 0.5, 0.05)", padding:"25px",fontWeight:"bold"}}>
                    <ListGroup>
                        <ListGroupItem>
                                Exam Start Time
                        </ListGroupItem>
                        <ListGroupItem>
                                Exam End Time
                        </ListGroupItem>
                    </ListGroup>
                </Card>  
            </CardGroup>
            <Button style={{padding:"10px",marginLeft:"1000px",width:"100px"}} size={"lg"} variant="secondary" >End Exam</Button>
        </Container> 
        </div> 
    );
    }
}
  export default MonitorExam;















