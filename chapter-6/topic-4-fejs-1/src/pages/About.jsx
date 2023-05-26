import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex flex-column align-items-center justify-content-center vh-100">
            <h1>About</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
