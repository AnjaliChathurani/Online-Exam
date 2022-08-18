import {CardGroup,ListGroup,Col,Form,Row,Button,Card,Container, Stack} from 'react-bootstrap'; 



function Table({tableData}){
   
   
   
    
    return(
        <Container style={{border:"5px solid rgba(0, 0, 0.5, 0.05)" , borderspacing:"35px",padding:"25px"}}>
          <CardGroup>
            <Card>
             <Card.Body>
                <Card.Title style={{fontWeight:"bold",fontSize:"20px"}}>Question List</Card.Title>
                <Card.Text>
                  <table className="table" >
                    <thead>
                    <tr>
                    <th style={{fontWeight:"bold",fontSize:"20px"}}>Question</th>
                    <th style={{fontWeight:"bold",fontSize:"20px"}}>Answer</th>
                    </tr>
                    </thead>
                    
                    <tbody>
                     {
                        tableData.map((data,index)=>{
                            return( 
                                    <tr key={index}>
                                            
                                    <td>{data.Question}</td>
                                    <td>{data.answer1.answerVal}</td>
                                    <td>{data.answer2.answerVal}</td>
                                    <td>{data.answer3.answerVal}</td>
                                    <td>{data.answer4.answerVal}</td>
                                    </tr>   
                            );    
                        })      
                     }                
                        
                    </tbody>
                  </table>
                    
                </Card.Text>
             </Card.Body>
            </Card>
   
          </CardGroup>
         
      
          
        </Container>
    );
}

export default Table;