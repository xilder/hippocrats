import React from "react";
import "./result.scss";

const Result = ({
  setShowResult,
  showResult,
  setShowExplanation,
  setDone,
  result,
  quizAnswers
}) => {
  return (
    <div className={showResult ? "show-result-div" : "hide"}>
      <h3>Your score: {result}</h3>
      <h3>{`${(result / Object.keys(quizAnswers).length * 100).toFixed()}%`}</h3>
      <button
      className="button"
        onClick={() => {
          setShowExplanation(true);
          setDone(false);
          setShowResult(false);
        }}
      >
        See Explanation
      </button>
    </div>
  );
};
export default Result;
