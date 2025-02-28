import React from "react";
import "../App.css";
const SmallShort = (props) => {
  return (
    <div>
      <div className="VideoCard">
        <div className="short-video"></div>

        <div>
          {/* <h3>{props.title}</h3> */}
          <p className="his-p">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallShort;
