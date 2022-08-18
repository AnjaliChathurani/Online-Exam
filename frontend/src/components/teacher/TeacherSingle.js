import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Table from "./Table";
import TeacherSingleForm from "./TeacherSingleForm";
import "./teacher.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

class TeacherSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginId: "",
      QuestionsList: [],
      newQuestionsList: [],
      quesionObj: null,
      isShowForm: true,
      editIndex: -1,
    };
  }

  componentDidMount() {
    //const QuestionsList = this.state.QuestionsList;
    const idteacher = JSON.parse(localStorage.getItem("user"));
    console.log("loginnnstuexm", idteacher);

    const examInfo = JSON.parse(localStorage.getItem("examInfo"));
    console.log("ex ", examInfo);
    if (examInfo) {
      axios

        .get(`http://localhost:3001/QuestionAns/${examInfo.examId}`, {
          params: { idteacher: idteacher },
        })

        .then((response) => {
          console.log("response ", response.data);

          this.setState({ QuestionsList: response.data });
        });
    } else {
      axios.get("http://localhost:3001/QuestionAns");
    }
  }
  addQuesion = (qob) => {
    var queslist = this.state.QuestionsList;
    queslist.push(qob);
    this.setState({ QuestionsList: queslist });
  };

  //update
  updateQuesion = (qo) => {
    console.log("qo", qo);
    var quelist = this.state.QuestionsList;
    quelist[this.state.editIndex] = qo;
    this.setState({ QuestionsList: quelist });
  };

  //handle click on rows
  handleClickQuestion = (obj, indx) => {
    this.setState({ isShowForm: false }, () => {
      this.setState({ quesionObj: obj, editIndex: indx, isShowForm: true });
    });
  };

  resetForm = () => {
    this.setState({ isShowForm: false }, () => {
      this.setState({ quesionObj: null, editIndex: -1, isShowForm: true });
    });
  };
  handleBack = () => {
    const idteacher = JSON.parse(localStorage.getItem("user"));
    this.props.history.push({
      pathname: "/TeacherMain",
      state: { detail: idteacher },
    });
    console.log("details check", idteacher);
  };

  render() {
    return (
      <div className="align-items-center justify-content-center teacher-table">
        <Button
          style={{ padding: "10px", width: "30%", margin: "9px" }}
          size={"lg"}
          variant="success"
          onClick={() => this.handleBack()}
        >
          Back
        </Button>
        <div
          style={{
            justifyContent: "center",
            margintop: "10px",
            padding: "50px",
            border: "2px solid rgba(0, 0, 0.5, 0.05)",
            backgroundColor: "transparent",
          }}
        >
          <Row>
            <Col
              xs={8}
              style={{
                paddingtop: "10px",
                backgroundColor: "white",
                margin: "auto",
                width: "200%",
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
                <Table
                  handleClickQuestion={this.handleClickQuestion}
                  tableData={this.state.QuestionsList}
                />
              </div>
            </Col>
            <Col
              xs={4}
              style={{
                paddingtop: "10px",
                backgroundColor: "white",
                margin: "auto",
                width: "100%",
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
                {this.state.isShowForm === true ? (
                  <TeacherSingleForm
                    quesionObj={this.state.quesionObj}
                    addQuesion={this.addQuesion}
                    resetForm={this.resetForm}
                    updateQuesion={this.updateQuesion}
                  />
                ) : (
                  <></>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default withRouter(TeacherSingle);
