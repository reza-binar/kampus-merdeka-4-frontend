import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditPost() {
  const navigate = useNavigate();
  const params = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        id: params?.id,
        title,
        body,
        userId,
      };

      await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${params?.id}`,
        data
      );

      toast.success("Edit post success!");

      return navigate("/");
    } catch (error) {
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${params.id}`
        );
        setTitle(response?.data?.title);
        setBody(response?.data?.body);
        setUserId(response?.data?.userId);
      } catch (error) {
        if (error?.response?.status === 404) return navigate("/");
        toast.error(error?.message);
      }
    }

    fetchPost();
  }, [params]);

  return (
    <Container className="p-4">
      <Row>
        <Col>
          <h1 className="text-center">Edit Post - {params?.id}</h1>

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

export default EditPost;
