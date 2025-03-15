import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import { Link } from "react-router-dom";
import Trending from "../Pages/Trending";
import Shorts from "../Pages/Shorts";
import Subscription from "../Pages/Subscription";
import { TiHome } from "react-icons/ti";
import Profile from "../Pages/Profile";
import { SiYoutubeshorts } from "react-icons/si";
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
      {/* <hr /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "12px",
          paddingTop: "18px",
        }}
        className="nav"
      >
        <div style={{ textAlign: "center" }}>
          <Link to="home">
            <div>
              <TiHome style={{ fontSize: "25px" }} />
            </div>
            {/* <span>Home</span> */}
          </Link>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link to="Shorts">
            <div>
              <SiYoutubeshorts style={{ fontSize: "25px" }} />
            </div>
            {/* <div>Shorts</div> */}
          </Link>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link to="uploads">
            <FaPlus style={{ fontSize: "25px" }} />
            {/* Upload */}
          </Link>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link to="subscription">
            <MdOutlineSubscriptions style={{ fontSize: "25px" }} />
          </Link>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link to="profile">
            <CgProfile style={{ fontSize: "25px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
