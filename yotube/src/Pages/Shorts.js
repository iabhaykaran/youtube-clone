import React from "react";
// import Reel from "../components/ShortsCard";
import Short from "../components/ShortsCard";
const Shorts = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{ display: "flex", margin: "auto", justifyContent: "center" }}
      >
        <Short />
      </div>
    </div>
  );
};

export default Shorts;
