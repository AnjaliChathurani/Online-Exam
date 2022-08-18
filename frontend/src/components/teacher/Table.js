import {
  CardGroup,
  ListGroup,
  Col,
  Form,
  Row,
  Button,
  Card,
  Container,
  Table,
} from "react-bootstrap";

function TeacherTable(props) {
  return (
    <div
      style={{
        border: "5px solid rgba(0, 0, 0.5, 0.05)",
        borderspacing: "35px",
        padding: "25px",
      }}
    >
      <Card>
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold", fontSize: "20px" }}>
            Question List
          </Card.Title>
          <Card.Text>
            <Table className="table" bordered hover>
              <thead>
                <tr>
                  <th style={{ fontWeight: "bold", fontSize: "20px" }}>
                    Question
                  </th>
                  <th style={{ fontWeight: "bold", fontSize: "20px" }}>
                    Answer
                  </th>
                </tr>
              </thead>

              <tbody>
                {props.tableData.map((data, index) => {
                  return (
                    <tr
                      onClick={() => {
                        {
                          props.handleClickQuestion(data, index);
                        }
                      }}
                      key={index}
                    >
                      <td>{data.Question}</td>
                      <td>
                        {data.answer1.answer},{data.answer2.answer},
                        {data.answer3.answer},{data.answer4.answer}
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
  );
}

export default TeacherTable;
