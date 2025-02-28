import React from "react";
import "../App.css";
import SmallShort from "../components/SmallShort";
import SmallvdoFlex from "../components/SmallvdoFlex";
const WatchHistory = () => {
  return (
    <div style={{ padding: "10px", height: "100vh", overflow: "scroll" }}>
      <h2>History</h2>
      <br />

      <h3>Today</h3>
      <br />

      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h3>Shorts</h3>
        {/* <a className="Viewall-btn" href="watchhistory">
          View All
        </a> */}
      </div>

      <div style={{ display: "flex", gap: "10px", overflow: "hidden" }}>
        <SmallShort />
        <SmallShort />
        <SmallShort />
        <SmallShort />
        <SmallShort />
        <SmallShort />
        <SmallShort />
        <SmallShort />
      </div>

      <br />

      <SmallvdoFlex title="Mera Yaar Lyric Video - Bhaag Milkha Bhaag|Farhan Akhtar, Sonam Kapoor|Javed Bashir" />
    </div>
  );
};

export default WatchHistory;
