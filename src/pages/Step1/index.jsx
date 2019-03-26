import React, { useState } from "react";

const Step1 = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState({ value: 0 });
  console.log("[Step1] RENDER!");

  return (
    <div>
      <button
        onClick={() => {
          setCounter1(counter1 - 1);
          setCounter2({ value: counter2.value - 2 });
        }}
      >
        decrease
      </button>
      <span style={{ margin: "0 20px" }}>{counter1}</span>
      <span style={{ margin: "0 20px" }}>{counter2.value}</span>
      <button
        onClick={() => {
          setCounter1(counter1 + 1);
          setCounter2({ value: counter2.value + 2 });
        }}
      >
        increase
      </button>
    </div>
  );
};

export default Step1;
