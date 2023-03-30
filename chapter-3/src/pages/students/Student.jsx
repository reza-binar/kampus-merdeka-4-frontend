import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import students from "../../data/students.json";

function Student() {
  return (
    <Container className="my-4">
      <Row className="mb-4">
        <Col>
          <div className="d-flex justify-content-end">
            <Button as={Link} variant="primary" to="/students/add">
              Add Student
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {students &&
              students.length > 0 &&
              students.map((student) => (
                <ListGroup.Item key={student.id}>
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
