import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import  Side  from "../Pages/Side";
import Trending from "../Pages/Trending";
// import VideoCard from "../components/VideoCard";

export default function R() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        
        {/* <Route path="/home" element={<Home/>} /> */}
        <Route path="/trending" element={<Trending/>} />

        {/* <Route index element={""} /> */}
        {/* <Route path="blogs" element={""} /> */}
        {/* <Route path="contact" element={""} /> */}
        {/* <Route path="*" element={ ""} /> */}
      </Routes>
    </div>
  );
}
