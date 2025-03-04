import React from "react";
import "../App.css";

export default function VideoCard(props) {
  return (
    <div className="VideoCard">
      <div className="video">
        <img src={props.url} alt="#" width="100%" height="100%" />
      </div>

      <div style={{padding:"2px 10px"}}>
        <h4>{props.title}</h4>
        <p style={{ fontSize: "small" }}>
          {props.chname} . {props.views} views . 3 weeks ago{" "}
        </p>
      </div>
    </div>
  );
}
