import "../App.css";
import React, { useState } from "react";
import VideoCard from "../components/VideoCard";
import Nav from "./Nav";
import videoData from "../Data";
// import BottomNav from "./BtmNav";
// import { FaHome, FaFire, FaPlayCircle, FaHeart, FaBars } from "react-icons/fa";

import Side from "./Side";
// import BottomNav from "./BtmNav";

const categories = [
  "All",
  "Education",
  "Entertainment",
  "Gaming",
  "Health",
  "Music",
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos =
    selectedCategory === "All"
      ? videoData
      : videoData.filter((video) => video.category === selectedCategory);

  return (
    <>
      <div style={{ padding: "0px" }} className="App scroll-none">
        <div style={{ padding: "8px" }}>
          <Nav />
        </div>
        <div
          style={{ marginLeft: "5px" }}
          className="category-buttons  scroll-none"
        >
          <Side />

          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div style={{ padding: "0px" }} className="home">
          <div style={{ padding: "0px" }} className="video-list">
            {filteredVideos.map((video) => (
              <a href={video.vdourl}>
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
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* <BottomNav /> */}
    </>
  );
}

export default Home;
