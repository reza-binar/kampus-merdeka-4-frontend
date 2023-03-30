import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import students from "../../data/students.json";

function AddStudent() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      alert("name is required!");
      return;
    }

    const studentsLength = students.length;
    students.push({
      id: studentsLength + 1,
      name,
    });

    return navigate("/students");
  };

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <div className="text-center">
            <h1>Add Student</h1>
          </div>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                required={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {name.length < 1 && (
                <Form.Text className="text-muted">
                  Enter the student name.
                </Form.Text>
              )}
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddStudent;
