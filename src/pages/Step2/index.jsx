import React, { useState } from "react";

import Step2Child from "./Step2Child";

const Step2 = () => {
  const [isShowBlock, setIsShowBlock] = useState(false);
  const [counter, setCounter] = useState(0);
  console.log("[Step2] PARENT RENDER!");

  return (
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
      <br />
      <button onClick={() => setIsShowBlock(!isShowBlock)}>
        {isShowBlock ? "hide" : "show"}
      </button>
      {isShowBlock && <Step2Child counter={counter} />}
    </div>
  );
};

export default Step2;
