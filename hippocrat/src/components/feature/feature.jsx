import React from "react";
import "./feature.scss";

const Feature = ({ feature }) => {
  return (
    <div className="feature">
      <img className="feature-img" alt="feature img" />
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-text">{feature.text}</p>
    </div>
  );
};

export default Feature;
