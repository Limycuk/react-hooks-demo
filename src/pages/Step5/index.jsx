import React, { useState } from "react";

import usePreloadSports from "./usePreloadSports";
import Sport from "./Sport";

const Step5 = () => {
  console.log("[Step5] PARENT RENDER!");
  const sports = usePreloadSports();
  const [selectedSportTreeId, setSelectedSportTreeId] = useState(-1);

  function handleClickSport(treeId) {
    const newTreeId = treeId !== selectedSportTreeId ? treeId : -1;
    setSelectedSportTreeId(newTreeId);
  }

  return (
    <div
      style={{
        border: "1px solid green",
        width: "300px",
        padding: "10px",
        margin: "0 auto"
      }}
    >
      {sports.map(sport => (
        <Sport
          key={sport.treeId}
          sport={sport}
          handleClickSport={handleClickSport}
          isSelected={sport.treeId === selectedSportTreeId}
        />
      ))}
    </div>
  );
};

export default Step5;
