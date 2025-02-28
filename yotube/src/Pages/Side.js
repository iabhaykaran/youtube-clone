import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { FaHome, FaFire, FaPlayCircle, FaHeart, FaMusic } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineLiveTv } from "react-icons/md";
import { Link } from "react-router-dom";
import "../App.css";

export default function Side() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Sidebar
        className="sidebar"
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <h2>YouTube</h2>

        <div className="menu">
          <ul>
            <h4>
              <li>
                <div>
                  <FaHome />
                </div>
                <div>{<span>Home</span>}</div>
              </li>
              <li>
                <Link to="Shorts">
                  <SiYoutubeshorts />

                  <span>Shorts</span>
                </Link>
              </li>
              <li>
                <Link to="trending">
                  <SiYoutubeshorts />

                  <span>Trending</span>
                </Link>
              </li>
              <li>
                <Link to="subscription">
                  <FaPlayCircle />
                  <span>Subscriptions</span>
                </Link>
              </li>
              <hr />
              <li>
                <FaHeart />
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
                <FaHeart />
                {<span>Liked Videos</span>}
              </li>
              <hr />
              <li>
                <FaFire />
                {/* <FaHeart /> */}
                {<span>Trending</span>}
              </li>
              <li>
                <FaHeart />
                {<span>Shopping</span>}
              </li>
              <li>
                <FaMusic />

                {<span>Music</span>}
              </li>
              <li>
                <MdOutlineLiveTv />
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
