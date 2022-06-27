import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';

import 'bootstrap/dist/css/bootstrap.css';


import {CardGroup,ListGroup,Col,Form,Row,Button} from 'react-bootstrap'; 

function monitorExam() {
  
  return (
    <div className="Container"> 
      
      <div style={{ display: 'block', 
                  width: 700, 
                  height :500,
                  

                  
                  padding: 100 }}></div> 
            <Dropdown align="center">
            <Dropdown.Toggle variant="success">
            exams
            </Dropdown.Toggle>
            <Dropdown.Menu>
          <Dropdown.Item href="#">
           Year End
          </Dropdown.Item>
         <Dropdown.Item href="#">
           Mid Sem
         </Dropdown.Item>
         <Dropdown.Item href="#">
           Unit Exam
         </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
      

       <Container className='p-4'>
       <CardGroup>  
 
        <Card >  
           <Card.Body>  
             <Card.Title></Card.Title>  
              <Card.Text>  
               some more content with Lorem Ipsum is simply dummy text of the printing and typesetting industry  
             </Card.Text>  
    
  </Card.Body>  
</Card>  


<Col md="4">  
<div style={{ display: 'block', 
                  width: 100, 
                  height :100,
                  
                  padding: 50 }}></div> 
  <Card>  
     <ListGroup variant="flush">  
    <ListGroup.Item>
    <Row>
         <Form.Label column="lg" lg={2} md={4}>
          
         </Form.Label>
       
         <Col>
         <Form.Control size="lg" type="text" placeholder="Student" />
         </Col>
         <Col xs={6} md={4}>
         <Dropdown>
         <Dropdown.Toggle>
         
         </Dropdown.Toggle>
         <Dropdown.Menu>
          <Dropdown.Item href="#">
           Cpmplete
          </Dropdown.Item>
          </Dropdown.Menu>
          <Dropdown.Menu>
          <Dropdown.Item href="#">
           Draft
          </Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
          
         </Col>
         </Row>
        
    </ListGroup.Item>  
    <ListGroup.Item>
    <Row>
         <Form.Label column="lg" lg={2}>
          
         </Form.Label>
         <Col>
         <Form.Control size="lg" type="text" placeholder="Student" />
         </Col>
         </Row>
    </ListGroup.Item>  
    <ListGroup.Item>
    <Row>
         <Form.Label column="lg" lg={2}>
          
         </Form.Label>
         <Col>
         <Form.Control size="lg" type="text" placeholder="Student" />
         </Col>
         </Row>
    </ListGroup.Item>  
    <ListGroup.Item>
    <Row>
         <Form.Label column="lg" lg={2}>
          
         </Form.Label>
         <Col>
         <Form.Control size="lg" type="text" placeholder="Student" />
         </Col>
         </Row>
    </ListGroup.Item>  
  </ListGroup>  
</Card>  
    </Col> 
  
</CardGroup>
</Container> 
<Container className='p-4'>

       <CardGroup>  
        
 
        <Card className= "w-25 p-3" >  
           <Card.Body>  
            
              <Card.Text>  
              <Row>
               <Form.Label column="lg" lg={2}>
               start time
               </Form.Label>
               <Col>
               <Form.Control size="sm" type="text" placeholder="" />
               </Col>
               </Row>
               <Row>
               <Form.Label column="lg" lg={2}>
               start time
               </Form.Label>
               <Col>
               <Form.Control size="sm" type="text" placeholder="" />
               </Col>
               </Row>
               


             </Card.Text>
               
        
      
    
  </Card.Body>  
</Card> 
</CardGroup>
</Container> 
<div class="text-right">
<Button as="input"  type="submit" value="Submit" />{' '}
        </div>
            
      
    
  </div>
  );
}

export default monitorExam;