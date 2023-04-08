import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddPost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const userId = 1;

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        title,
        body,
        userId,
      };

      const response = await axios.post(
        "https://sadsadas.typicode.com/posts",
        data
      );

      toast.success("Add post success!");

      return navigate("/");
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <Container className="p-4">
      <Row>
        <Col>
          <h1 className="text-center">Add Post</h1>

          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="body">
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type={"submit"}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddPost;
