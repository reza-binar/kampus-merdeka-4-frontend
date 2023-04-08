import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, ListGroup, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostsAPI = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        alert(error);
      }
    };

    fetchPostsAPI();
  }, []);

  return (
    <Container className="p-4">
      <Row>
        <Col>
          <div className="mb-2">
            <Button variant="primary" as={Link} to={"/posts/add"}>
              Add Post
            </Button>
          </div>
          <ListGroup>
            {posts &&
              posts.length > 0 &&
              posts.map((post) => (
                <ListGroup.Item as={Link} to={`/posts/${post.id}`}>
                  {post.title}
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
