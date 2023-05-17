import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Counter from "../components/Counter";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h6>Count: {count}</h6>
            <Counter count={count} setCount={setCount} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
