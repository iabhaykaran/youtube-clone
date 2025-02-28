import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import { Link } from "react-router-dom";
// import  Side  from "../Pages/Side";
import Trending from "../Pages/Trending";
// import Nav from "../Pages/Nav";
import Shorts from "../Pages/Shorts";
import Subscription from "../Pages/Subscription";
import Uploads from "./Uploads";
import Profile from "../Pages/Profile";
// import VideoCard from "../components/VideoCard";

export default function R() {
  return (
    <div>
      {/* <Nav/> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/uploads" element={<Uploads />} />

        <Route path="/shorts" element={<Shorts />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<Trending />} />

        {/* <Route path="*" element={ ""} /> */}
      </Routes>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "15px",
        }}
        className="nav"
      >
        <p>
          <Link to="home">
            {/* <SiYoutubeshorts /> */}

            <span>Home</span>
          </Link>
        </p>
        <p>
          <Link to="Shorts">
            {/* <SiYoutubeshorts /> */}

            <span>Shorts</span>
          </Link>
        </p>
        <p>
          <Link to="uploads">
            {/* <SiYoutubeshorts /> */}

            <span>Upload</span>
          </Link>
        </p>
        <p>
          <Link to="subscription">
            {/* <SiYoutubeshorts /> */}

            <span>Subscribed</span>
          </Link>
        </p>
        <p>
          <Link to="profile">
            {/* <SiYoutubeshorts /> */}

            <span>You</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
