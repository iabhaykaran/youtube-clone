import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import { Link } from "react-router-dom";
import Trending from "../Pages/Trending";
import Shorts from "../Pages/Shorts";
import Subscription from "../Pages/Subscription";
import { TiHome } from "react-icons/ti";
import Profile from "../Pages/Profile";
import { MdOutlineLiveTv } from "react-icons/md";
// import { SiYoutubeshorts } from "react-icons/si";
import WatchHistory from "../Pages/WatchHistory";
import Uploads from "../Pages/Uploads";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

// import { FaHome, FaFire, FaPlayCircle, FaHeart, FaMusic } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";
// import { SiYoutubeshorts } from "react-icons/si";

export default function R() {
  return (
    <div>
      {/* <Nav/> */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/uploads" element={<Uploads />} />
        <Route path="/watchhistory" element={<WatchHistory />} />

        <Route path="/shorts" element={<Shorts />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<Trending />} />

        {/* <Route path="*" element={ ""} /> */}
      </Routes>
    </div>
  );
}
