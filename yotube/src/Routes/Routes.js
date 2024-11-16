import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import VideoCard from "../components/VideoCard";

export default function R() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<VideoCard />} />
        <Route path="/home" element={<Home />} />
        {/* <Route index element={""} /> */}
        {/* <Route path="blogs" element={""} /> */}
        {/* <Route path="contact" element={""} /> */}
        {/* <Route path="*" element={ ""} /> */}
      </Routes>
    </div>
  );
}
