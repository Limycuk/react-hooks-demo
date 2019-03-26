import React, { useContext } from "react";

import CounterContext from "./CounterContext";

const Step3Child = () => {
  console.log("[Step3] CHILDREN RENDER");
  const counter = useContext(CounterContext);

  return (
    <div
      style={{ marginTop: "20px", border: "1px solid red", padding: "10px" }}
    >
      <p style={{ marginTop: 0 }}>context counter: {counter}</p>
    </div>
  );
};

export default Step3Child;
