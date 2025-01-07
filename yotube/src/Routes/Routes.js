import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
// import  Side  from "../Pages/Side";
import Trending from "../Pages/Trending";
// import VideoCard from "../components/VideoCard";

export default function R() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/home" element={<Home/>} /> */}
        <Route path="/trending" element={<Trending />} />
        <Route path="/subscription" element={<Trending />} />
        <Route path="/liked-videos" element={<Trending />} />
        <Route path="/history" element={<Trending />} />

        {/* <Route path="*" element={ ""} /> */}
      </Routes>
    </div>
  );
}
