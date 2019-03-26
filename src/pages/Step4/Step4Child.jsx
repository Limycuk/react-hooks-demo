import React from "react";

import useFormatCurrency from "./useFormatCurrency";

const Step4Child = () => {
  console.log("[Step4] CHILDREN RENDER");

  return (
    <div
      style={{ marginTop: "20px", border: "1px solid red", padding: "10px" }}
    >
      <p style={{ marginTop: 0 }}>price: {useFormatCurrency(20)}</p>
    </div>
  );
};

export default Step4Child;
