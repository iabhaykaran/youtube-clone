import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { FaHome, FaPlayCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
// import { MdOutlineLiveTv } from "react-icons/md";
// import { Link } from "react-router-dom";
import "../App.css";
import Nav from "./Nav";

export default function Side() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Sidebar
        className="sidebar"
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <Nav />

        <div className="menu">
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
      </Sidebar>

      <button className="toggle-button" onClick={() => setVisible(true)}>
        <FaBars />
      </button>
    </div>
  );
}
