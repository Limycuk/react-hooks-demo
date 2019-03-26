import React, { useState } from "react";

import CounterContext from "./CounterContext";
import Step3Child from "./Step3Child";

const Step3 = () => {
  const [counter, setCounter] = useState(0);
  console.log("[Step3] PARENT RENDER!");

  return (
    <CounterContext.Provider value={counter}>
      <div
        style={{
          border: "1px solid green",
          width: "300px",
          padding: "10px",
          margin: "0 auto"
        }}
      >
        <button onClick={() => setCounter(counter - 1)}>decrease</button>
        <span style={{ margin: "0 20px" }}>{counter}</span>
        <button onClick={() => setCounter(counter + 1)}>increase</button>
        <Step3Child />
      </div>
    </CounterContext.Provider>
  );
};

export default Step3;
