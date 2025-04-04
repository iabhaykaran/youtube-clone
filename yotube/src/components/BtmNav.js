import React from "react";
import { MdOutlineLiveTv } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function BottomNav() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "12px",
        paddingTop: "18px",
      }}
      className="bottom-nav nav"
    >
      <div style={{ textAlign: "center" }}>
        <Link to="home">
          <div>
            <TiHome style={{ fontSize: "30px" }} />
          </div>
          {/* <span>Home</span> */}
        </Link>
      </div>

      <div style={{ textAlign: "center" }}>
        <Link to="Shorts">
          <div>
            <MdOutlineLiveTv style={{ fontSize: "25px" }} />
          </div>
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
  );
}
