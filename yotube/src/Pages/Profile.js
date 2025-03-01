import React from "react";
import SmallVideoCard from "../components/SmallVideoCard";
// import { Link } from "react-router-dom";
// import VideoCard from "../components/VideoCard";

const Profile = (props) => {
  return (
    <div style={{ height: "93vh", overflow: "hidden" }}>
      <div style={{ padding: "10px", marginTop: "20px" }}>
        <div style={{ marginBottom: "30px", display: "flex" }}>
          <div>
            {" "}
            <img
              src="dp.jpg"
              alt="#"
              height="60px"
              width="60px"
              className="dp"
            />
          </div>
          <div>
            <h2>AbhayKaran</h2>
            <p>@iamabhaykaran . view channel</p>
          </div>
        </div>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>History</h3>
          <a className="Viewall-btn" href="watchhistory">
            View All
          </a>
        </div>

        <div
          className="scroll-none"
          style={{
            display: "flex",
            // justifyContent: "space-around",
            gap: "8px",
            overflowX: "scroll",
          }}
        >
          <SmallVideoCard title="Zindagi Ke Safar Mein Guzar Jaate | Kishor.." />
          <SmallVideoCard title="Higa tumse pyara kaon  | Arijit singh and shreya.." />
          <SmallVideoCard title="hamko hami se chura lo  | Karan Johar and shah.." />
          <SmallVideoCard title="hamko hami se chura lo  | Karan Johar and shah.." />
        </div>
        <br />
        <br />
        <br />
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3>Playlists</h3>
          {/* <button className="Viewall-btn">View All</button> */}

          <a className="Viewall-btn" href="watchhistory">
            View All
          </a>
        </div>

        <div
          className="scroll-none"
          style={{
            display: "flex",
            // justifyContent: "space-around",
            gap: "8px",
            overflowX: "scroll",
          }}
        >
          <SmallVideoCard title="Liked videos" />
          <SmallVideoCard title="Watch Later" />
          <SmallVideoCard title="Gameplay" />
          <SmallVideoCard title="Music" />
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Profile;
