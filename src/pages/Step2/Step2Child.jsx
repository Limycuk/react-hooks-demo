import React, { useEffect, useState } from "react";

const Step2Child = ({ counter }) => {
  const [localCounter, setCounter] = useState(0);

  useEffect(() => {
    console.log("[Step2] CHILDREN useEffect! ***", {
      parentCounter: counter,
      childCounter: localCounter
    });
    return () => {
      console.log("[Step2] CHILDREN useEffect return! *** ", {
        parentCounter: counter,
        childCounter: localCounter
      });
    };
  }, []);

  console.log("[Step2] CHILDREN RENDER");
  return (
    <div
      style={{ marginTop: "20px", border: "1px solid red", padding: "10px" }}
    >
      <p style={{ marginTop: 0 }}>parent counter: {counter}</p>

      <button onClick={() => setCounter(localCounter - 1)}>decrease</button>
      <span style={{ margin: "0 20px" }}>child counter: {localCounter}</span>
      <button onClick={() => setCounter(localCounter + 1)}>increase</button>
    </div>
  );
};

export default Step2Child;
