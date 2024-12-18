import React from "react";

const ShinyEffect = ({ left, right, top, size = 500 }) => {
  const positionsStyles = {
    top:`${top}px`,
    width:`${size}px`,
    height:`${size}px`,
    zIndex: -1
  };

  if (left !== undefined) {
    positionsStyles.left = `${left}px`;
  }

  if (right !== undefined) {
    positionsStyles.rigth = `${right}px`;
  }

  return (
    <div className="shiny-effect" style={positionsStyles}>

    </div>
  );
};

export default ShinyEffect;
