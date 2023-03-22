import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import students from "../data/students.json";

function Student() {
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            {students &&
              students.length > 0 &&
              students.map((student) => (
                <ListGroup.Item>
                  {student.id} - {student.name}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Student;
