import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPostDetails } from "../redux/actions/post";

function PostDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { postDetails } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [dispatch, id]);

  return (
    <Container className="p-4">
      <Row>
        <Col>
          <h1 className="text-center">{postDetails?.title}</h1>
          <p style={{ textAlign: "justify" }}>{postDetails?.body}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button as={Link} variant="primary" to={"/posts"}>
            Back
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PostDetails;
