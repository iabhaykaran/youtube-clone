import "../App.css";
import React, { useState } from "react";
import VideoCard from "../components/VideoCard";
import Topnav from "../components/Topnav";
import videoData from "../Data";
// import { FaHome, FaPlayCircle } from "react-icons/fa";
// import { SiYoutubeshorts } from "react-icons/si";
// import { FaBars } from "react-icons/fa";
// import { Sidebar } from "primereact/sidebar";
// import BottomNav from "./BtmNav";
// import { FaHome, FaFire, FaPlayCircle, FaHeart, FaBars } from "react-icons/fa";
// import BottomNav from "./BtmNav";

import Side from "./Side";
import BigSidenav from "../components/BigSidenav";

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
      <div className="App scroll-none">
        <div className="top-category-topnav">
          <div style={{ padding: "8px" }}>
            <Topnav />
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <BigSidenav />
          {/*------ home section video and categories btn start ------ */}
          <div className="home  scroll-none">
            <div className="video-section">
              <div
                style={{ marginLeft: "5px" }}
                className="category-buttons  scroll-none"
              >
                <div className="sidebtn-hidden">
                  <Side />
                </div>
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
              <div className="video-scroll  scroll-none">
                <div className="video-list">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
