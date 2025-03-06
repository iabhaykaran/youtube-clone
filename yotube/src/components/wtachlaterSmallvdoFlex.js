import React from "react";

const SmallvdoFlex = (props) => {
  return (
    <div>


      <a href={props.vdourl}>


      <div className="flex-small-vdo-box">
        <div className="flex-vdo">
          <img
            style={{ borderRadius: "5px" }}
            src={props.thumburl}
            alt="#"
            width="100%"
            height="100%"
            />
        </div>

        <div className="flex-small-vdo-content">
          <p className="">{props.title}</p>
        </div>
      </div>
            </a>
    </div>
  );
};

export default SmallvdoFlex;
