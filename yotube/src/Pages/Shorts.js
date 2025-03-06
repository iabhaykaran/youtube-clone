import React from "react";
// import Reel from "../components/ShortsCard";
import Short from "../components/ShortsCard";
const Shorts = () => {
  return (
    <div
      className="scroll-none"
      style={{
        height: "100%",
        maxWidth: "500px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        overflowY: "scroll",
      }}
    >
      <Short />
    </div>
  );
};

export default Shorts;
