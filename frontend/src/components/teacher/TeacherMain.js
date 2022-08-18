import React from "react";
import { withRouter } from "react-router-dom";
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
import TeacherSingleForm from "./TeacherSingleForm";

class TeacherMain extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: "",

      examination: [
        { Idexam: "", exam: "", status: "0", date_time: "", duration: "" },
      ],
      index: 0,
    };
  }

  componentDidMount() {
    const examinationstatus = this.state.examination;
    const idteacher = this.props.location.state.detail;
    console.log("teacherloginid", idteacher);
    console.log("examination status", this.state.examination);
    axios
      .get("http://localhost:3001/teachertable", {
        params: { idteacher: idteacher },
      })

      .then((response) => {
        console.log("examination", response.data);
        this.setState({ examination: response.data });
      });
    // .then((err) => {
    //   console.log(err);
    // });
  }

  handleChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  handleNewExam = () => {
    localStorage.removeItem("examInfo");
    this.props.history.push("/TeacherSingle");
  };
  handleLogout = () => {
    localStorage.removeItem("user");
    this.props.history.push("/");
  };

  render() {
    return (
      <div className=" align-items-center justify-content-center">
        <div
          style={{
            border: "5px solid rgba(0, 0, 0.5, 0.05)",
            justifyContent: "center",
            borderspacing: "35px",
            padding: "25px",
            margin: "0 auto",
            backgroundSize: "large",
            backgroundColor: "lightblue",
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
                  width: "160px",
                  border: "5px solid rgba(0.5, 0, 0.5, 0.05)",
                }}
                placeholder="Search here"
                onChange={this.handleChange}
                value={this.state.filter}
              />
              <Button
                className="float-right"
                variant="secondary"
                onClick={() => this.handleNewExam()}
                style={{
                  padding: "10px",
                  width: "140px",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                New Exam
              </Button>
              <Button
                className="float-right"
                variant="secondary"
                onClick={() => this.handleLogout()}
                style={{
                  padding: "10px",
                  width: "140px",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Logout
              </Button>
            </div>
            <Table className="table" bordered hover style={{ padding: "10px" }}>
              <thead>
                <tr>
                  <th style={{ fontWeight: "bold", fontSize: "20px" }}>
                    Exam Name
                  </th>
                  <th style={{ fontWeight: "bold", fontSize: "20px" }}>
                    State
                  </th>
                  <th style={{ fontWeight: "bold", fontSize: "20px" }}>
                    startingtime
                  </th>
                  <th style={{ fontWeight: "bold", fontSize: "20px" }}>
                    duration
                  </th>
                </tr>
              </thead>

              <tbody>
                {this.state.examination.map((dat, index) => {
                  return (
                    <tr
                      onClick={() => {
                        const idteacher = this.props.location.state.detail;
                        console.log("examID ", dat.Idexam);

                        const examInfo = {
                          examId: dat.Idexam,
                          ename: dat.exam,
                          datetime: dat.startingtime,
                          exduration: dat.duration,
                        };
                        localStorage.removeItem("examInfo");
                        localStorage.setItem(
                          "examInfo",
                          JSON.stringify(examInfo)
                        );

                        dat.status === 1
                          ? this.props.history.push({
                              pathname: "/MonitorExam",
                              state: { detail: idteacher },
                            })
                          : this.props.history.push({
                              pathname: "/TeacherSingle",
                              state: { detail: idteacher },
                            });
                      }}
                      key={index}
                    >
                      <td>{dat.exam}</td>
                      <td>
                        {dat.status === 1 ? (
                          <div>Published</div>
                        ) : (
                          <div>Draft </div>
                        )}
                      </td>
                      <td>{dat.startingtime}</td>
                      <td>{dat.duration}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(TeacherMain);
