import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      role: "",
      idstudent: "",
      LoginId: "",
    };
  }
  handleEmailChange(value) {
    this.setState({
      email: value,
    });
  }
  handlePasswordChange(value) {
    this.setState({
      password: value,
    });
  }

  handleLogin = () => {
    const { LoginId, email, password, role } = this.state;

    if (this.state.email === "") {
      alert("enter email");
    } else if (this.state.password === "") {
      alert("enter password ");
    }

    axios
      .post("http://localhost:3001/login", {
        LoginId: LoginId,
        email: email,
        password: password,
        role: role,
      })
      .then((res) => {
        res.data[0].role === "teacher"
          ? this.props.history.push("/TeacherMain")
          : this.props.history.push("/StudentMainView");

        // console.log("login", res.data[0].LoginId);
      });
  };

  render() {
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div
          style={{
            justifyContent: "center",
            margin: "0 auto",
            padding: "50px",
            border: "2px solid rgba(0, 0, 0.5, 0.05)",
            backgroundColor: "transparent",
          }}
        >
          <Card
            style={{
              margin: "auto",
              width: "100%",
              height: "calc(100vh - 300px)",
            }}
          >
            <Form
              id="sign-in-form"
              className="form_login text-center p-4 w-300"
            >
              <div
                style={{
                  display: "block",
                  marginTop: "40px",
                  marginLeft: "20px",
                  padding: "5px",
                }}
              >
                <h1 className="mb-5">sign in</h1>
              </div>
              <div className="form_input">
                <div
                  style={{
                    display: "block",
                    marginTop: "5px",
                    marginLeft: "55px",

                    width: 300,
                    padding: "5px",

                    height: 100,
                  }}
                >
                  <Form.Group controlId="sign-in-email-address">
                    <Form.Control
                      style={{ padding: "5px" }}
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={(e) =>
                        this.handleEmailChange(e.target.value, "email")
                      }
                      size="lg"
                      placeholder="name@example.com"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="sign-in-password">
                    <Form.Control
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={(e) =>
                        this.handlePasswordChange(e.target.value, "password")
                      }
                      size="lg"
                      placeholder="Password"
                      className="position-relative"
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="d-lex">
                <div style={{ display: "block", marginLeft: 28 }}>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => {
                      this.handleLogin();
                    }}
                  >
                    Sign in
                  </Button>
                </div>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
