import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { FaHome, FaFire, FaPlayCircle, FaHeart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
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
          <ul >
            <h4>

            <li>
              <FaHome />
               {<span>Home</span>}
            </li>
            <li>
              <FaFire />
              <span>Trending</span>
            </li>
            <li>
              <FaPlayCircle />
              <span>Subscriptions</span>
            </li>
            <li>
              <FaHeart />
              {<span>Liked Videos</span>}
            </li>
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
