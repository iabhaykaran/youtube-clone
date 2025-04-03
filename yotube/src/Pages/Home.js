import "../App.css";
import React, { useState } from "react";
import VideoCard from "../components/VideoCard";
import Nav from "./Nav";
import videoData from "../Data";
import { FaHome, FaPlayCircle } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
// import { FaBars } from "react-icons/fa";
// import { Sidebar } from "primereact/sidebar";
// import BottomNav from "./BtmNav";
// import { FaHome, FaFire, FaPlayCircle, FaHeart, FaBars } from "react-icons/fa";
// import BottomNav from "./BtmNav";

import Side from "./Side";

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
        <div className="top-category-topnav">
          <div style={{ padding: "8px" }}>
            <Nav />
          </div>

          <div
            style={{ marginLeft: "5px" }}
            className="category-buttons  scroll-none"
          >
            <div className="sidebtn-hidden ">
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
        </div>

        <div style={{ display: "flex" }}>
          <div className="large-screen-sidebar scroll-none">
            <ul>
              <h4>
                <div className="side-hidden-small">
                  <li>
                    <div>
                      <FaHome />
                    </div>
                    <div>{<span>Home</span>}</div>
                  </li>
                  <li>
                    <a href="shorts">
                      <SiYoutubeshorts />

                      <span>Shorts</span>
                    </a>
                  </li>
                  <li>
                    <a href="trending">
                      <SiYoutubeshorts />

                      <span>Trending</span>
                    </a>
                  </li>
                  <li>
                    <a href="subscription">
                      <FaPlayCircle />
                      <span>Subscriptions</span>
                    </a>
                  </li>
                  <hr />
                  <li>
                    {/* <FaHeart /> */}
                    {<span>History</span>}
                  </li>
                  <li>
                    {/* <FaHeart /> */}
                    {<span>Playlists</span>}
                  </li>
                  <li>
                    {/* <FaHeart /> */}
                    {<span>Watch Later</span>}
                  </li>
                  <li>
                    {/* <FaHeart /> */}
                    {<span>Liked Videos</span>}
                  </li>
                  <hr />
                </div>
                <li>
                  {/* <FaFire /> */}
                  {/* <FaHeart /> */}
                  {<span>Trending</span>}
                </li>
                <li>
                  {/* <FaHeart /> */}
                  {<span>Shopping</span>}
                </li>
                <li>
                  {/* <FaMusic /> */}

                  {<span>Music</span>}
                </li>
                <li>
                  {/* <MdOutlineLiveTv /> */}
                  {<span>Films</span>}
                </li>
                <li>{<span>Live</span>}</li>
                <li>{<span>Gaming</span>}</li>
                <li>{<span>News</span>}</li>
              </h4>
            </ul>
          </div>
          <div className="home  scroll-none">
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

      {/* <BottomNav /> */}
    </>
  );
}

export default Home;
