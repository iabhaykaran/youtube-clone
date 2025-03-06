import React from "react";
import SmallVideoCard from "../components/SmallVideoCard";
import videoData from "../Data";

const Profile = (props) => {
  return (
    <div style={{ height: "100%", overflowY: "scroll" }}>
      <div
        style={{
          display: "flex",
          padding: "5px 10px",
          justifyContent: "flex-end",
          gap: "10px",
        }}
      >
        {/* <a href="k">Setting</a> */}
      </div>
      <div style={{ padding: "10px", marginTop: "20px" }}>
        <div style={{ marginBottom: "30px", display: "flex" }}>
          <div>
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
            gap: "10px",
            overflowX: "scroll",
          }}
        >
          {videoData.map((video) => (
            <SmallVideoCard
              title={video.title.slice(0, 20)}
              thumburl={video.url}
              vdourl={video.vdourl}
            />
          ))}
        </div>
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
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid grey",
          borderTop: "1px solid grey",
        }}
      >
        <p style={{ color: "white", padding: "10px" }}>Your Movies</p>
        <p style={{ color: "white", padding: "10px" }}>Get YouTube Premium</p>
        {/* <p style={{ color: "white", padding: "10px" }}>Your Movies</p>
         */}
      </div>
      <div style={{ padding: "20px", borderBottom: "0px solid white" }}>
        <p style={{ color: "white", padding: "10px" }}>Time Watched</p>
        <p style={{ color: "white", padding: "10px" }}>Help and feedback</p>
        {/* <p style={{ color: "white", padding: "10px" }}>Your Movies</p>
         */}
      </div>
    </div>
  );
};

export default Profile;
