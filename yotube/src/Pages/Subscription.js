// import videoData from "../Data";
import Data from "../Data";
import VideoCard from "../components/VideoCard";
// import React, { useState } from "react";

const categories = [
  "All",
  "Education",
  "Entertainment",
  "Gaming",
  "Health",
  "Music",
];
const Subscription = () => {
  // const [selectedCategory, setSelectedCategory] = useState("All");

  // const filteredVideos =
  //   selectedCategory === "All"
  //     ? videoData
  //     : videoData.filter((video) => video.category === selectedCategory);

  return (
    <div style={{ height: "100%" }}>
      <h2 style={{ padding: "10px" }}>Subscription</h2>

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
        style={{ padding: "10px", display: "flex", overflowX: "scroll" }}
      >
        {Data.map((video) => (
          <div
            style={{
              width: "55px",

              marginRight: "10px",

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
            <p style={{fontSize:"14px"}}>{video.cname.slice(0, 6)}</p>
          </div>
        ))}
      </div>

      <div style={{}} className="video-list">
        {Data.map((video) => (
          <div className="video-item">
            <VideoCard
              key={video.id}
              url={video.url}
              title={video.title}
              views={video.views}
              chname={video.chname}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
