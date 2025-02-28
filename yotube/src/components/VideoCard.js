import React from "react";
import "../App.css";

export default function VideoCard(props) {
  return (
    <div className="VideoCard">
      <div className="video"></div>

      <div>
        <h4>{props.title}</h4>
        <p style={{ fontSize: "small" }}>
          {props.chname} . {props.views} views . 3 weeks ago{" "}
        </p>
      </div>
    </div>
  );
}
