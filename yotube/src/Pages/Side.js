import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { FaHome, FaFire, FaPlayCircle, FaHeart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import "../App.css";
import { Link } from "react-router-dom";

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

              {/* <li>
                <Link to="home">
              <FaHome />
               {<span>Home</span>}
                </Link> 
            </li> */}
              <li>
              <FaHome />
               {<span>Home</span>}
            </li>
            <li>
                <Link to="trending">
              <FaFire />
              <span>Trending</span>
                </Link> 
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
