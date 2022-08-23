import React from "react";
import { ListGroup, Col, Form, Row, Button } from "react-bootstrap";
import "./teacher.css";
import axios from "axios";
import { withRouter, useLocation } from "react-router-dom";

class TeacherSingleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IdExam: "",
      Question: "",
      answer1: { answer: "", CorrectAns: 0 },
      answer2: { answer: "", CorrectAns: 0 },
      answer3: { answer: "", CorrectAns: 0 },
      answer4: { answer: "", CorrectAns: 0 },
      duration: "",
      date_time: "",
      examName: "",
    };
    this.questionArray = [];
  }

  componentDidMount() {
    if (this.props.quesionObj !== null) {
      console.log("handleclick", this.props.quesionObj);
      var qobj = this.props.quesionObj;

      this.setState({ ...qobj });
    }
  }

  handleValueChange(value) {
    this.setState({
      Question: value,
    });
  }

  handleAnswerChange = (value, type) => {
    var temval = this.state[type];
    temval.answer = value;

    if (type === "answer1") {
      this.setState({ answer1: temval });
    }
    if (type === "answer2") {
      this.setState({ answer2: temval });
    }
    if (type === "answer3") {
      this.setState({ answer3: temval });
    }
    if (type === "answer4") {
      this.setState({ answer4: temval });
    }
  };

  handleChangeCorrectAnswer = (e, type) => {
    var mainstateobj = this.state;
    mainstateobj.answer1.CorrectAns = 0;
    mainstateobj.answer2.CorrectAns = 0;
    mainstateobj.answer3.CorrectAns = 0;
    mainstateobj.answer4.CorrectAns = 0;

    var temval = this.state[type];
    temval.CorrectAns = true;

    if (type === "answer1") {
      this.setState({ answer1: temval });
    }
    if (type === "answer2") {
      this.setState({ answer2: temval });
    }
    if (type === "answer3") {
      this.setState({ answer3: temval });
    }
    if (type === "answer4") {
      this.setState({ answer4: temval });
    }
  };

  handleAddQuestion = (type) => {
    const { Question, answer1, answer2, answer3, answer4, exam } = this.state;
    if (this.props.quesionObj === null) {
      if (this.state.Question === "") {
        alert("enter question");
      } else if (this.state.answer1.answer === "") {
        alert("enter answer1 ");
      } else if (this.state.answer2.answer === "") {
        alert("enter answer2");
      } else if (this.state.answer3.answer === "") {
        alert("enter answer3");
      } else if (this.state.answer4.answer === "") {
        alert("enter answer4");
      } else {
        var obj = JSON.parse(JSON.stringify(this.state));
        this.props.addQuesion(obj);
      }

      this.questionArray.push(this.state);
      console.log("Qs ", this.questionArray);
      //this.props.resetForm();
    } else {
      ///
    }
  };
  handleEditQuestion = (type) => {
    if (this.props.quesionObj !== null) {
      if (this.state.Question === "") {
        alert("enter question");
      } else if (this.state.answer1.answer === "") {
        alert("enter answer1 ");
      } else if (this.state.answer2.answer === "") {
        alert("enter answer2");
      } else if (this.state.answer3.answer === "") {
        alert("enter answer3");
      } else if (this.state.answer4.answer === "") {
        alert("enter answer4");
      } else {
        var obj = JSON.parse(JSON.stringify(this.state));
        //console.log("a", this.state.Question);
        this.props.updateQuesion(obj);
        this.props.resetForm();
      }
    } else {
      ///
      //this.props.resetForm();
    }
  };

  resetQuestion = () => {
    var mainstateobj = this.state;
    mainstateobj.Question = "";
    mainstateobj.answer1.CorrectAns = 0;

    mainstateobj.answer2.CorrectAns = 0;
    mainstateobj.answer3.CorrectAns = 0;
    mainstateobj.answer4.CorrectAns = 0;
    mainstateobj.answer1.answer = "";
    mainstateobj.answer2.answer = "";
    mainstateobj.answer3.answer = "";
    mainstateobj.answer4.answer = "";
  };
  handlePublish = () => {
    this.props.history.push("/TeacherMain");
  };
  handleSave = () => {
    //console.log("new", this.questionArray);
    //console.log("idteacherte", JSON.parse(localStorage.getItem("user")));
    // console.log(this.state.examName);
    // console.log(this.state.duration);

    axios
      .post("http://localhost:3001/teachersingle", {
        examname: this.state.examName,
        datetime: this.state.date_time,
        duration: this.state.duration,
        quesArray: this.questionArray,
        idteacher: JSON.parse(localStorage.getItem("user")),
      })
      .then((res) => {
        if (res.data.message) {
          alert("Exam Save Successfully");
        }
        this.props.resetForm();
      });
  };
  handleUpdate = (IdExam) => {
    console.log("new", this.questionArray);
    //const { examName, date_time, duration } = this.state;
    const questionArray = this.questionArray;

    axios
      .put(
        `http://localhost:3001/teachersingleupdate/${IdExam}`,

        { quesArray: questionArray }
      )
      .then((res) => {
        if (res.data.message) {
          alert("Exam Update Successfully");
        }
        //this.props.resetForm();
      });
  };

  handleDuration(value) {
    this.setState({
      duration: value,
    });
  }
  handleExamName(value) {
    this.setState({
      examName: value,
    });
  }
  handledateTime(value) {
    this.setState({
      date_time: value,
    });
  }

  render() {
    return (
      // <div>
      <div className="teacher-single-exam">
        <div
          style={{
            border: "5px solid rgba(0, 0, 0.5, 0.05)",
            padding: "25px",
          }}
        >
          <Row>
            <Form.Control
              style={{
                marginLeft: "10px",
                width: "50%",
                marginBottom: "25px",
              }}
              type="text"
              placeholder="Exam Name"
              value={this.state.examName}
              onChange={(e) => this.handleExamName(e.target.value)}
            ></Form.Control>
            <Col
              xs={12}
              style={{
                paddingTop: "10px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              <Form.Label>Question</Form.Label>

              <Form.Control
                style={{ border: "5px solid rgba(0, 0, 0.5, 0.05)" }}
                type="text"
                value={this.state.Question}
                onChange={(e) => this.handleValueChange(e.target.value)}
              ></Form.Control>
            </Col>

            <Col xs={12} style={{ paddingTop: "10px" }}>
              <ListGroup>
                <ListGroup.Item className="form-inline">
                  <input
                    className="d-inline"
                    type="radio"
                    onChange={(e) =>
                      this.handleChangeCorrectAnswer(e, "answer1")
                    }
                    value={this.state.answer1.CorrectAns === true ? 1 : 0}
                    checked={this.state.answer1.CorrectAns === true ? 1 : 0}
                  />
                  <Form.Control
                    className="d-inline"
                    style={{ marginLeft: "10px", width: "95%" }}
                    type="text"
                    value={this.state.answer1.answer}
                    onChange={(e) =>
                      this.handleAnswerChange(e.target.value, "answer1")
                    }
                  ></Form.Control>
                </ListGroup.Item>

                <ListGroup.Item className="form-inline">
                  <input
                    type="radio"
                    onChange={(e) =>
                      this.handleChangeCorrectAnswer(e, "answer2")
                    }
                    value={this.state.answer2.CorrectAns === true ? 1 : 0}
                    checked={this.state.answer2.CorrectAns === true ? 1 : 0}
                  />
                  <Form.Control
                    style={{ marginLeft: "10px", width: "95%" }}
                    type="text"
                    value={this.state.answer2.answer}
                    onChange={(e) =>
                      this.handleAnswerChange(e.target.value, "answer2")
                    }
                  ></Form.Control>
                </ListGroup.Item>

                <ListGroup.Item className="form-inline">
                  <input
                    type="radio"
                    onChange={(e) =>
                      this.handleChangeCorrectAnswer(e, "answer3")
                    }
                    value={this.state.answer3.CorrectAns === true ? 1 : 0}
                    checked={this.state.answer3.CorrectAns === true ? 1 : 0}
                  />
                  <Form.Control
                    style={{ marginLeft: "10px", width: "95%" }}
                    type="text"
                    value={this.state.answer3.answer}
                    onChange={(e) =>
                      this.handleAnswerChange(e.target.value, "answer3")
                    }
                  ></Form.Control>
                </ListGroup.Item>

                <ListGroup.Item className="form-inline">
                  <input
                    type="radio"
                    onChange={(e) =>
                      this.handleChangeCorrectAnswer(e, "answer4")
                    }
                    value={this.state.answer4.CorrectAns === true ? 1 : 0}
                    checked={this.state.answer4.CorrectAns === true ? 1 : 0}
                  />
                  <Form.Control
                    style={{ marginLeft: "10px", width: "95%" }}
                    type="text"
                    value={this.state.answer4.answer}
                    onChange={(e) =>
                      this.handleAnswerChange(e.target.value, "answer4")
                    }
                  ></Form.Control>
                </ListGroup.Item>
              </ListGroup>

              {this.props.quesionObj === null ? (
                <Button
                  style={{ padding: "10px" }}
                  size={"sm"}
                  variant="secondary"
                  onClick={() => this.handleAddQuestion()}
                >
                  Add
                </Button>
              ) : (
                <Button
                  style={{ padding: "10px" }}
                  size={"sm"}
                  variant="secondary"
                  onClick={() => this.handleEditQuestion()}
                >
                  Edit
                </Button>
              )}
              <Button
                style={{ padding: "10px" }}
                size={"sm"}
                variant="success"
                onClick={() => this.handleUpdate()}
              >
                Update
              </Button>

              <Button
                style={{ padding: "10px" }}
                size={"sm"}
                variant="secondary"
                onClick={() => this.handlePublish()}
              >
                Publish
              </Button>
            </Col>
          </Row>
        </div>
        <div>
          <Form.Control
            style={{
              padding: "20px",
              display: "inline",
              float: "left",
              marginTop: "20px",
              width: "30%",
            }}
            type="text"
            placeholder="Duration"
            value={this.state.duration}
            onChange={(e) => this.handleDuration(e.target.value)}
          ></Form.Control>
          <Form.Control
            style={{
              padding: "20px",
              display: "inline",
              float: "left",
              margin: "20px",
              width: "30%",
            }}
            type="text"
            placeholder="Date time"
            value={this.state.date_time}
            onChange={(e) => this.handledateTime(e.target.value)}
          ></Form.Control>
          <Button
            style={{
              padding: "10px",
              display: "inline",
              width: "20%",
              margin: "20px",
            }}
            size={"lg"}
            variant="success"
            onClick={() => this.handleSave()}
          >
            Save
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(TeacherSingleForm);
