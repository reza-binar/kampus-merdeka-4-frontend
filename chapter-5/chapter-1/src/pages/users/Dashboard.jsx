import React from "react";
import { Container } from "react-bootstrap";

function Dashboard() {
  return (
    <Container>
      <h1 className="text-center">
        This page only can be accessed by user having login
      </h1>
    </Container>
  );
}

export default Dashboard;
