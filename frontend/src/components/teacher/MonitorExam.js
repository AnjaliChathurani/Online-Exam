import React from "react";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.css";

import {
  CardGroup,
  ListGroup,
  Col,
  Form,
  Row,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";

class MonitorExam extends React.Component {
  constructor(props) {
    super(props);
    this.state = [{ isComplete: "Complete", student: "aaa" }];
  }

  render() {
    return (
      <div className="align-items-center justify-content-center">
        <div
          style={{
            margin: "0 auto",
            padding: "30px",
            border: "5px solid rgba(0, 0, 0.5, 0.05)",
            backgroundColor: "transparent",
          }}
        >
          <CardGroup style={{ padding: "20px" }}>
            <Card
              style={{
                margin: "auto",
                width: "50%",
                height: "calc(100vh - 400px)",
              }}
            >
              <h4
                style={{
                  padding: "30px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                Exam Complete
              </h4>
              <h1 style={{ textAlign: "center", paddingTop: "70px" }}>15/20</h1>
              <h5 style={{ textAlign: "center" }}>Time Left 00.15min</h5>
            </Card>
            <Card>
              <h4
                style={{
                  padding: "20px",
                  fontWeight: "bolder",
                  paddingTop: "30px",
                }}
              >
                Attending Student List
              </h4>

              <ListGroup style={{ textAlign: "center" }}>
                {this.state.map((data, index) => {
                  return (
                    <>
                      <div key={index}></div>

                      <ListGroup.Item style={{ paddingTop: "70px" }}>
                        {data.student} <span style={{ paddingLeft: "290px" }} />
                        {data.isComplete}
                      </ListGroup.Item>

                      <ListGroup.Item>
                        {data.student} <span style={{ paddingLeft: "290px" }} />
                        {data.isComplete}
                      </ListGroup.Item>

                      <ListGroup.Item>
                        {data.student}
                        <span style={{ paddingLeft: "290px" }} />
                        {data.isComplete}
                      </ListGroup.Item>
                    </>
                  );
                })}
              </ListGroup>
            </Card>
          </CardGroup>

          <CardGroup style={{ padding: "20px" }}>
            <Card
              style={{
                border: "5px solid rgba(0, 0, 0.5, 0.05)",
                fontWeight: "bold",
              }}
            >
              <ListGroup>
                <ListGroupItem>Exam Start Time</ListGroupItem>
                <ListGroupItem>Exam End Time</ListGroupItem>
              </ListGroup>
              <Button
                style={{
                  padding: "10px",
                  width: "100px",
                  float: "right !important",
                }}
                size={"lg"}
                variant="secondary"
              >
                End Exam
              </Button>
            </Card>
          </CardGroup>
        </div>
      </div>
    );
  }
}
export default MonitorExam;
