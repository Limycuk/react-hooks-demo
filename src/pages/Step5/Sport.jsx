import React from "react";

const Sport = ({ sport, handleClickSport, isSelected }) => {
  console.log("[Sport] RENDER!");

  return (
    <div style={{ textAlign: "left" }}>
      <button
        style={{
          marginTop: "20px",
          border: isSelected ? "1px solid green" : "1px solid red",
          padding: "10px"
        }}
        onClick={() => handleClickSport(sport.treeId)}
      >
        {sport.name}
      </button>
      {isSelected && (
        <span style={{ paddingLeft: "20px" }}>{"<- SELECTED"}</span>
      )}
    </div>
  );
};

export default Sport;
