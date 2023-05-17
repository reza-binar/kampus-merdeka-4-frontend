import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`
        );
        setPosts(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    };

    getPosts();
  }, []);

  return (
    <Container className="p-4">
      <Row>
        {posts?.length > 0 &&
          posts.map((post) => (
            <Col key={post?.id} className="my-2">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="text-center">{post?.title}</Card.Title>
                  <Card.Text>{post?.body}</Card.Text>
                  <Card.Link as={Link} to={`/posts/${post?.id}`}>
                    Details
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Posts;
