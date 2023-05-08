import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions/postActions";

function Home() {
  // To set the state of the store
  const dispatch = useDispatch();

  // Access the store
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <Container>
      <h1 className="text-center">Home</h1>

      <Row className="p-4">
        {posts &&
          posts?.length > 0 &&
          posts.map((post) => (
            <Col key={post?.id}>
              <Link to={`/posts/${post?.id}`}>
                <h1>{post?.title}</h1>
              </Link>
              <p>{post?.body}</p>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Home;
