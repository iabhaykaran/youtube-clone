import React from "react";

const SmallvdoFlex = (props) => {
  return (
    <div>
      <div className="flex-small-vdo-box">
        <div className="flex-vdo"></div>

        <div className="flex-small-vdo-content">
          <p className="">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallvdoFlex;
