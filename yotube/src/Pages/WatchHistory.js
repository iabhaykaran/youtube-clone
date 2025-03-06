import React from "react";
import "../App.css";

import videoData from "../Data";
import SmallShort from "../components/SmallShort";
import SmallvdoFlex from "../components/wtachlatedSmallvdoFlex";
const WatchHistory = () => {
  return (
    <div
      className="scroll-none"
      style={{ padding: "10px", height: "100vh", overflow: "scroll" }}
    >
      <h2>History</h2>
      <br />

      <h3>Today</h3>
      <br />

      <div
        style={{
          marginBottom: "10px",
          display: "flex",

          gap: "5px",
        }}
      >
        <img src="j.jpg" width="22px" height="20px" alt="d" />
        <h3>Shorts</h3>
        {/* <a className="Viewall-btn" href="watchhistory">
          View All
        </a> */}
      </div>

      <div
        className="scroll-none"
        style={{ display: "flex", gap: "10px", overflow: "scroll" }}
      >
        {videoData.map((video) => (
          <SmallShort title={video.title.slice(0, 13)} thumburl={video.url} />
        ))}
      </div>

      <br />
      {videoData.map((video) => (
        <SmallvdoFlex
          title={video.title}
          thumburl={video.url}
          vdourl={video.vdourl}
        />
      ))}
    </div>
  );
};

export default WatchHistory;
