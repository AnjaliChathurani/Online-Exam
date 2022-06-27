import Card from 'react-bootstrap/Card';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';









import {CardGroup,Container} from 'react-bootstrap'; 

function dashboard() {
    
    return(

       
          <div className="Container"> 
      
      <div style={{ display: 'block', 
                  width: 700, 
                  height :200,
                  

                  
                  padding: 100 }}></div>
      
      

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

<Card >  
           <Card.Body>  
             <Card.Title></Card.Title>  
             
             
    
  </Card.Body>  
</Card> 

  
</CardGroup>
</Container> 
<Container className='p-4'>

       <CardGroup>  
        
       <div style={{ display: 'block', 
                  width: 700, 
                  height :200,
                  

                  
                  padding: 100 }}></div>
        <Card className= " p-3" >  
           <Card.Body>  
            
              <Card.Text>  
              <MDBTable>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableBody>
    </MDBTable>


             </Card.Text>
               
        
      
    
  </Card.Body>  
</Card> 
<Card >  
           <Card.Body>  
             <Card.Title></Card.Title>  
              <Card.Text>  
              <MDBTable>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
             </Card.Text>  
    
  </Card.Body>  
</Card> 
</CardGroup>
</Container> 
</div>

);

}
export default dashboard;
