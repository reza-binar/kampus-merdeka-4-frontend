import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Dashboard() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <h1>Dashboard</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
