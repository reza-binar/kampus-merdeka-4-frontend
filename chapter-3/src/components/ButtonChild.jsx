import React from "react";
import { Button } from "react-bootstrap";

function ButtonChild({ count, editCount, setWhat }) {
  return (
    <>
      <Button onClick={() => editCount(count + 1)} variant="primary">
        Click
      </Button>
      <br />
      <Button onClick={() => setWhat(false)} variant="primary">
        What "false"
      </Button>
    </>
  );
}

export default ButtonChild;
