import React, { useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const [showName, setShowName] = useState(false);
  const [evenOrOdd, setEvenOrOdd] = useState("Even");

  const handleOnClick = (event) => {
    setCount(count + 1);
  };

  function toggleShowName(event) {
    setShowName(!showName);
  }

  // This useEffect will be ran when count changed
  useEffect(() => {
    if (count % 2 === 0) {
      setEvenOrOdd("Even");
    } else {
      setEvenOrOdd("Odd");
    }
  }, [count]);

  return (
    <>
      <p>
        Total click: <strong>{count}</strong>
      </p>
      <p>Even/Odd : {evenOrOdd}</p>
      <p>{showName ? "Fahmi Alfareza" : "No Name"}</p>
      <button onClick={handleOnClick}>Add Click</button>
      <button
        onClick={toggleShowName}
        value="iamtoggle"
        id="toggle"
        name="mynametoggle"
      >
        Toogle Name
      </button>
    </>
  );
}

export default Count;
