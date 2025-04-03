import React from "react";
import "../App.css";

export default function VideoCard(props) {
  return (
    <div className="VideoCard">
      <div className="video">
        <img
          style={{ borderRadius: "10px" }}
          src={props.url}
          alt="#"
          width="100%"
          height="100%"
        />
      </div>

      <div style={{ padding: "5px 10px", display: "flex" }}>
        <div>
          <img
            style={{ borderRadius: "100%" }}
            src={props.dp}
            alt="#"
            width="40px"
            height="40px"
          />
        </div>

        <div style={{ marginLeft: "10px" }}>
          <h4 style={{ color: "white", fontWeight: "semi-bold" }}>
            {props.title}
          </h4>
          <p style={{ fontSize: "small" }}>
            {props.chname} . {props.views} views . 3 weeks ago{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
