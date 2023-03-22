import React from "react";
import { Container } from "react-bootstrap";
import Hello from "../components/Hello";
import Count from "../components/Count";
import HelloClassComponent from "../components/HelloClassComponent";

function Home() {
  return (
    <Container className="mt-2">
      <Hello type="small" victor="Victor Arie" />

      <Count />

      <HelloClassComponent />
    </Container>
  );
}

export default Home;
