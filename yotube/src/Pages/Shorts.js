import React from "react";
import Reel from "./Reel";
const Shorts = () => {
  return (
    <div>
      <div>
        <h2>Shorts</h2>
      </div>
      <div
        style={{
          height: "100%",
          padding: "10px",
      
        }}
      >
        <Reel />
      </div>
    </div>
  );
};

export default Shorts;
