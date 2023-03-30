import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonChild from "../components/ButtonChild";

function LinkState() {
  const [count, setCount] = useState(0);
  const [what, setWhat] = useState(true);

  return (
    <Container className="my-4">
      <Row className="p-4 text-center">
        <Col>
          <h3>Count The Click</h3>
          <p>Total Count: {count}</p>

          <ButtonChild count={count} editCount={setCount} setWhat={setWhat} />
        </Col>
      </Row>
    </Container>
  );
}

export default LinkState;
