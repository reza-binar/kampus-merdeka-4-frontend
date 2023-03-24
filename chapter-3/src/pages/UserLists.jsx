import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";

function UserLists() {
  const getUserListsData = async () => {
    const response = await axios.get(`https://reqres.in/api/users`);
    console.log(response);
  };

  useEffect(() => {
    getUserListsData();
  }, []);

  return (
    <Container className="my-4">
      <Row className="text-center mb-2">
        <Col>
          <h2>User Lists</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserLists;
