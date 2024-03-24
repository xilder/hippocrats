import React from "react";
import "./explanation.scss";

const Explanation = ({ explanation }) => {
  return (
    <div className="explanation">
      <h3>Explanation:</h3>
      <p>{explanation.text}</p>
    </div>
  );
};
export default Explanation;
