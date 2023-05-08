import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../redux/actions/postActions";

function PostDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { postDetails } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostDetails(id));
  }, [dispatch, id]);

  return (
    <Container>
      <Row className="p-4 text-center">
        <Col>
          <h1>{postDetails?.title}</h1>
          <p>{postDetails?.body}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default PostDetails;
