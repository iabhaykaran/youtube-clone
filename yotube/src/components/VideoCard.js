import React from "react";
import "../App.css";

export default function VideoCard(props) {
  return (
    <div className="VideoCard">
      <div className="video"></div>

      <div>
        <h3>{props.title}</h3>
        <p>{ props.chname} . {props.views} views . 3 weeks ago </p>
      </div>
    </div>
  );
}
