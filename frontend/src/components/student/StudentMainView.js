import React from "react";
import "./student.css";

import {
  Form,
  Dropdown,
  Button,
  Card,
  CardGroup,
  Col,
  Row,
  FormLabel,
  Container,
  Table,
} from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";

class StudentMainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      exam: [
        { Idexam: "", exam: "", date_time: "", duration: "", status: "0" },
      ],
    };
  }

  componentDidMount() {
    const exam = this.state.exam;
    //console.log("examination student", this.state.exam);
    axios
      .get("http://localhost:3001/studenttable")

      .then((response) => {
        //console.log("exam", response.data);
        this.setState({ exam: response.data });
      });
    // .then((err) => {
    //   console.log(err);
    // });
  }
  handleChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <div className="align-items-center justify-content-center student-main">
        <div
          style={{
            borderspacing: "35px",
            padding: "50px",
            margintop: "10px",
            border: "3px solid rgba(0, 0, 0.5, 0.05)",
            backgroundColor: "transparent",
          }}
        >
          <Card
            style={{
              margin: "auto",
              width: "90%",
              height: "calc(100vh - 100px)",
            }}
          >
            <div
              style={{
                width: "100%",
                position: "relative",
                padding: "30px 20px 20px 20px",
              }}
            >
              <input
                type="search"
                style={{
                  padding: "20px",
                  width: "150px",
                  border: "5px solid rgba(0.5, 0, 0.5, 0.05)",
                  padding: "10px",
                }}
                placeholder="Search here"
                onChange={this.handleChange}
                value={this.state.filter}
              />
            </div>

            <Card.Body>
              <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
                Student Main Table
              </Card.Title>
              <Card.Text>
                <Table className="table" bordered hover>
                  <thead>
                    <tr className="student-main-table">
                      <th style={{ fontWeight: "bold", fontSize: "20px" }}>
                        Exam Name
                      </th>
                      <th style={{ fontWeight: "bold", fontSize: "20px" }}>
                        Start Time
                      </th>
                      <th style={{ fontWeight: "bold", fontSize: "20px" }}>
                        Duration
                      </th>
                      <th style={{ fontWeight: "bold", fontSize: "20px" }}>
                        State
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.exam.map((data, index) => {
                      return (
                        <tr
                          onClick={() => {
                            console.log("examIDstu ", data.Idexam);

                            const studentexamInfo = {
                              examId: data.Idexam,
                              ename: data.exam,
                              datetime: data.startingtime,
                              exduration: data.duration,
                            };
                            console.log("stu inf", studentexamInfo);

                            localStorage.setItem(
                              "examInfo",
                              JSON.stringify(studentexamInfo)
                            );

                            data.status === 1
                              ? this.props.history.push("/ExamResultss")
                              : this.props.history.push(
                                  "/StudentSingleExamView"
                                );
                          }}
                          key={index}
                        >
                          <td>{data.exam}</td>
                          <td>{data.startingtime}</td>
                          <td>{data.duration}</td>
                          <td>
                            {data.status === 1 ? (
                              <div>Attended</div>
                            ) : (
                              <div>Pending</div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
export default withRouter(StudentMainView);
