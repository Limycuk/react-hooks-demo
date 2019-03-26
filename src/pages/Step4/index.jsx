import React, { useState } from "react";

import CurrencyContext from "./CurrencyContext";
import Step4Child from "./Step4Child";

const Step4 = () => {
  console.log("[Step4] PARENT RENDER!");
  const [currencyPosition, setCurrencyPosition] = useState("left");

  return (
    <CurrencyContext.Provider value={currencyPosition}>
      <div
        style={{
          border: "1px solid green",
          width: "300px",
          padding: "10px",
          margin: "0 auto"
        }}
      >
        <form>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="left"
                checked={currencyPosition === "left"}
                onChange={() => setCurrencyPosition("left")}
              />
              left
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="right"
                checked={currencyPosition === "right"}
                onChange={() => setCurrencyPosition("right")}
              />
              right
            </label>
          </div>
        </form>
        <Step4Child />
      </div>
    </CurrencyContext.Provider>
  );
};

export default Step4;
