// import videoData from "../Data";
import Data from "../Data";
import VideoCard from "../components/VideoCard";
// import React, { useState } from "react";

// const categories = [
//   "All",
//   "Education",
//   "Entertainment",
//   "Gaming",
//   "Health",
//   "Music",
// ];
const Subscription = () => {
  // const [selectedCategory, setSelectedCategory] = useState("All");

  // const filteredVideos =
  //   selectedCategory === "All"
  //     ? videoData
  //     : videoData.filter((video) => video.category === selectedCategory);

  return (
    <div style={{ height: "100%" }}>
      <h3 style={{ padding: "5px 6px" }}>Subscription</h3>

      {/* {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))} */}

      <div
        className="scroll-none"
        style={{ padding: " 16px 5px", display: "flex", overflowX: "scroll" }}
      >
        {Data.map((video) => (
          <div
            style={{
              width: "55px",

              marginRight: "12px",

              borderRadius: "100%",
            }}
          >
            <img
              style={{ borderRadius: "100%" }}
              src={video.url}
              alt="#"
              width="55px"
              height="55px"
            />
            <p style={{ fontSize: "12px", color: "white" }}>
              {video.cname.slice(0, 6)}...
            </p>
          </div>
        ))}
      </div>

      <div style={{}} className="video-list">
        {Data.map((video) => (
          <div className="video-item">
            <VideoCard
              key={video.id}
              url={video.url}
              dp={video.url}
              title={video.title}
              views={video.views}
              chname={video.cname}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
