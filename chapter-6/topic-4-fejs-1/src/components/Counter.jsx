import React from "react";
import { Button } from "react-bootstrap";

function Counter({ count, setCount }) {
  return (
    <div className="d-flex flex-row">
      <Button
        variant="primary"
        className="mx-1"
        onClick={() => setCount(count + 1)}
      >
        Add
      </Button>
      <Button
        variant="warning"
        className="mx-1"
        onClick={() => setCount(count - 1)}
      >
        Substract
      </Button>
      <Button variant="danger" className="mx-1" onClick={() => setCount(0)}>
        Reset
      </Button>
    </div>
  );
}

export default Counter;
