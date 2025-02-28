import React from "react";

const SmallvdoFlex = (props) => {
  return (
    <div>
      <div className="flex-small-vdo-box">
        <div className="flex-vdo"></div>

        <div>
          <p className="flex-small-vdo-content">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallvdoFlex;
