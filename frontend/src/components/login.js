import React from "react";
import {Form,  Button } from "react-bootstrap";


 
class Login extends React.Component {
  render() {
    return (
        <>  
           
            
            
            <Form id="sign-in-form" className="form_login text-center p-3 w-300">
        
            <h1 className="mb-5">sign in</h1>
            <div className="form_input">
            <Form.Group controlId="sign-in-email-address">
            <Form.Control type="email" size="lg" placeholder="name@example.com"  className=" align-items-center" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="sign-in-password">
            <Form.Control type="password" size="lg" placeholder="Password"  className="position-relative" />
            </Form.Group>
        
            
            </div>
            <div className="d-lex">
            <Button variant="primary" size="lg">Sign in</Button>
            </div>
            
        </Form>
        
        </>
    )

  }
}
 
export default Login;






