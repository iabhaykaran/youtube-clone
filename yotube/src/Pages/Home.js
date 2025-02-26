import "../App.css";
import React, { useState } from "react";
import VideoCard from "../components/VideoCard";
import Nav from "./Nav";
// import { FaHome, FaFire, FaPlayCircle, FaHeart, FaBars } from "react-icons/fa";

import Side from "./Side";

const videoData = [
  {
    id: 1,
    title: "React Tutorial",
    category: "Education",
    views: `233K`,
    chname: "Tech Burner",
  },

  {
    id: 2,
    title: "Top 10 Movies",
    category: "Entertainment",
    views: `100M`,
    chname: "Royal Me",
  },

  { id: 2, title: "Top 10 Movies", category: "Entertainment" },
  { id: 2, title: "Top 10 Movies", category: "Entertainment" },
  { id: 2, title: "Top 10 Movies", category: "Entertainment" },
  { id: 2, title: "Top 10 Movies", category: "Entertainment" },
  { id: 2, title: "Top 10 Movies", category: "Entertainment" },
  { id: 3, title: "JavaScript Crash Course", category: "Education" },
  { id: 3, title: "JavaScript Crash Course", category: "Education" },
  { id: 3, title: "JavaScript Crash Course", category: "Education" },
  { id: 3, title: "JavaScript Crash Course", category: "Education" },
  { id: 4, title: "Live Gaming Stream", category: "Gaming" },
  { id: 4, title: "Live Gaming Stream", category: "Gaming" },
  { id: 4, title: "Live Gaming Stream", category: "Gaming" },
  { id: 4, title: "Live Gaming Stream", category: "Gaming" },
  { id: 4, title: "Live Gaming Stream", category: "Gaming" },
  { id: 5, title: "Fitness Tips", category: "Health" },
  { id: 5, title: "Fitness Tips", category: "Health" },
  { id: 5, title: "Fitness Tips", category: "Health" },
  { id: 5, title: "Fitness Tips", category: "Health" },
  { id: 5, title: "Fitness Tips", category: "Health" },
  { id: 5, title: "Fitness Tips", category: "Health" },
  { id: 5, title: "Fitness Tips", category: "Health" },
  { id: 5, title: "Fitness Tips", category: "Health" },
  { id: 5, title: "Fitness Tips", category: "Health" },
  { id: 5, title: "Fitness Tips", category: "Music" },
];

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
    <div className="App">
      <Nav />
      <div className="category-buttons">
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
