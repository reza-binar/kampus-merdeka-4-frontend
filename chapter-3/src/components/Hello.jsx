import React from "react";

function Hello({ type, victor }) {
  return (
    <div>
      <h1>Hello World</h1>
      <p>The type is {type}</p>
      <p>{victor}</p>
    </div>
  );
}

export default Hello;
