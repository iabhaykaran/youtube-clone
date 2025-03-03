import React from "react";
import Reel from "../components/ShortsCard";
const Shorts = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        padding: "10px",
      }}
    >
      <div
        style={{ display: "flex", margin: "auto", justifyContent: "center" }}
      >
        <Reel />
      </div>
    </div>
  );
};

export default Shorts;
