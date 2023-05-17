import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function UseSelector() {
  const { token, user } = useSelector((state) => state.auth);

  return (
    <Container className="p-3">
      {JSON.stringify(token)}, {JSON.stringify(user)}
    </Container>
  );
}

export default UseSelector;
