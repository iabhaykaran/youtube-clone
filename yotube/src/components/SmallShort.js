import React from "react";
import "../App.css";
const SmallShort = (props) => {
  return (
    <div>
      <div className="VideoCard">
        <a href={props.vdourl}>
          <div className="short-video">
            <img
              style={{ borderRadius: "5px" }}
              src={props.thumburl}
              alt={props.title}
              width="100px"
              height="100%"
            />
          </div>

          <div>
            {/* <h3>{props.title}</h3> */}
            <p className="his-p">{props.title}...</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SmallShort;
