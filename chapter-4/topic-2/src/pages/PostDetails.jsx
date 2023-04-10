import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function PostDetails() {
  const params = useParams();

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${params.id}`
        );
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error?.message);
      }
    }

    fetchPost();
  }, [params]);

  return (
    <Container>
      <Row className="p-4">
        <Col>
          {loading ? (
            <h1 className="text-center">Loading.....</h1>
          ) : (
            <>
              <h1 className="text-center">{post?.title}</h1>
              <p>{post?.body}</p>
            </>
          )}
        </Col>
      </Row>
      <Row className="p-4">
        <Col>
          <Link to={"/"}>Back to Home</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default PostDetails;
