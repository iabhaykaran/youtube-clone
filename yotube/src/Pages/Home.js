import "../App.css";
import React, { useState } from "react";
import VideoCard from "../components/VideoCard";
// import { FaHome, FaFire, FaPlayCircle, FaHeart, FaBars } from "react-icons/fa";

import Side from "./Side";

const videoData = [
  {
    id: 1,
    title: "React Tutorial",
    category: "Education",
    views: 233,
    chname: "Tech Burner",
  },

  { id: 2, title: "Top 10 Movies", category: "Entertainment" },
  { id: 3, title: "JavaScript Crash Course", category: "Education" },
  { id: 4, title: "Live Gaming Stream", category: "Gaming" },
  { id: 5, title: "Fitness Tips", category: "Health" },
];

const categories = ["All", "Education", "Entertainment", "Gaming", "Health"];

function Home() {


  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos =
    selectedCategory === "All"
      ? videoData
      : videoData.filter((video) => video.category === selectedCategory);

  return (
    <div className="App">
      <h2>YouTube</h2>
      <div className="category-buttons">
        {/* <button className="toggle-button">
          <FaBars   />
          </button> */}
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

      <div className="home">
        <div>
          {/* <ul className="menu">
        <li>
          <FaHome />
          {!isSidebarCollapsed && <span>Home</span>}
        </li>
        <li>
          <FaFire />
          {!isSidebarCollapsed && <span>Trending</span>}
        </li>
        <li>
          <FaPlayCircle />
          {!isSidebarCollapsed && <span>Subscriptions</span>}
        </li>
        <li>
          <FaHeart />
          {!isSidebarCollapsed && <span>Liked Videos</span>}
        </li>
      </ul> */}
        </div>

        <div className="video-list">
          {filteredVideos.map((video) => (
            <div className="video-item">
              <VideoCard
                key={video.id}
                title={video.title}
                views={video.views}
                chname={video.chname}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
