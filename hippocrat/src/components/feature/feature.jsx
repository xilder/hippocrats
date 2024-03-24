import React from "react";
import "./feature.scss";

const Feature = ({ feature }) => {
  return (
    <div className="feature">
      <h3 className="feature-title">{feature.title}<hr/></h3>
      <p className="feature-text">{feature.text}</p>
    </div>
  );
};

export default Feature;
