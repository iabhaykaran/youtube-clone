import React from "react";
// import Reel from "../components/ShortsCard";
import Short from "../components/ShortsCard";
const Shorts = () => {
  return (
    <div
      style={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // overflowY: "scroll",
      }}
      className="scroll-none"
    >
      <div className="shorts-box">
        <Short />
      </div>
    </div>
  );
};

export default Shorts;
