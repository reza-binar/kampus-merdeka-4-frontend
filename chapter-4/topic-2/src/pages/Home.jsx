import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, ListGroup, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import DeleteModal from "../components/DeleteModal";

function Home() {
  const [posts, setPosts] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedDeleteId, setSelectedDeleteId] = useState(0);
  const [reload, setReload] = useState(false);

  const handleCloseDeleteModal = () => {
    setSelectedDeleteId(0);
    setShowDeleteModal(false);
  };

  const fetchPostsAPI = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (error) {
      toast.error(error?.message);
    }
  };

  useEffect(() => {
    fetchPostsAPI();
  }, []);

  useEffect(() => {
    if (reload) {
      fetchPostsAPI();
      setReload(false);
    }
  }, [reload]);

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
                  <div className="d-flex justify-content-between">
                    <div>{post.title}</div>
                    <div className="d-flex justify-content-start">
                      <div className="mx-1">
                        <Button
                          as={Link}
                          to={`/posts/edit/${post.id}`}
                          variant="info"
                        >
                          Edit
                        </Button>
                      </div>
                      <div className="mx-1">
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedDeleteId(post?.id);
                            setShowDeleteModal(!showDeleteModal);
                          }}
                          variant="danger"
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </Col>
      </Row>
      <DeleteModal
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        id={selectedDeleteId}
        setReload={setReload}
      />
    </Container>
  );
}

export default Home;
