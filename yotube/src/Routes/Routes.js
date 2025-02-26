import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
// import  Side  from "../Pages/Side";
import Trending from "../Pages/Trending";
// import Nav from "../Pages/Nav";
import Shorts from "../Pages/Shorts";
import Subscription from "../Pages/Subscription";
// import VideoCard from "../components/VideoCard";

export default function R() {
  return (
    <div>
      {/* <Nav/> */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/home" element={<Home/>} /> */}
        <Route path="/trending" element={<Trending />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/liked-videos" element={<Trending />} />
        <Route path="/history" element={<Trending />} />

        {/* <Route path="*" element={ ""} /> */}
      </Routes>
        <hr/>
        <div style={{display:"flex",justifyContent:"space-evenly",padding:"18px"}} className="nav">
        <p>Home</p>
        <p>Shorts</p>
        <p>Upload</p>
        <p>Subscription</p>
        <p>You</p>

        </div>
    </div>
  );
}
