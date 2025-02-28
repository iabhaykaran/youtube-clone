import React from "react";
// import VideoCard from "../components/VideoCard";

const Profile = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <div style={{ marginBottom: "20px" }}>
        <h1>Abhaykaran</h1>
        <p>@iamabhaykaran. view channel</p>
        <div style={{ display: "flex" }}>
          <button>switch account</button>
          <button>switch account</button>
        </div>
      </div>
      <div style={{ padding: "" }}>
        <h4>History</h4>

        <div
          style={{ display: "flex", padding: "5px" }}
          className="history-VideoCard"
        >
          <div className="vdo">
            <div className="his-video"></div>

            <div>
              <h3>{props.title}</h3>
              <p style={{ color: "white" }}>
                Tech panda x kanzani sundown Set-Trim..
                {/* {props.chname} . {props.views} views . 3 weeks ago{" "} */}
              </p>
            </div>
          </div>
          <div className="vdo">
            <div className="his-video"></div>

            <div>
              <h3>{props.title}</h3>
              <p>
                {props.chname} . {props.views} views . 3 weeks ago{" "}
              </p>
            </div>
          </div>
          <div className="vdo">
            <div className="his-video"></div>

            <div>
              <h3>{props.title}</h3>
              <p>
                {props.chname} . {props.views} views . 3 weeks ago{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
