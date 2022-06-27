
import { MDBTable, MDBTableBody, MDBTableHead ,MDBCol, MDBIcon} from 'mdbreact';

function TeacherMainView() {
    
    return(
          
          
            <div className="Container"> 
           
             
             
             
                  

                    <MDBTable striped bordered extralarge searching={true}>
                    <MDBCol md="2">
                <form className="form-inline mt-4 mb-4">
                  <MDBIcon icon="search" />
                    <input className="form-control form-control-sm ml-3 w-75 " type="text" placeholder="Search" aria-label="Search" />
                </form>
              </MDBCol>
                    <div style={{ display: 'block',
                        marginTop:200,
                        marginLeft:600, 
                        marginRight:500,
                         width: 900, 
                         
                         height :500,
                         }}>

                    
                      <MDBTableHead>
                        <tr>
                        <th>Exam</th>
                        <th>Starting Time</th>
                        <th>Exam Duration</th>
                        <th>Status</th>
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
                    </div>    
                    </MDBTable>

                </div>      
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          

















    );}

    export default TeacherMainView;
