import React from "react";
import "./confirmQuiz.scss";

const ConfirmQuiz = ({
  setShowUnanswered,
  showConfirmQuiz,
  setShowConfirmQuiz,
  setShowResult,
}) => {
  return (
    <div className={showConfirmQuiz ? "confirm-quiz-div" : "hide"}>
      <h3>Are you sure you want to submit?</h3>
      <div className="confirm-quiz-btn">
        <button
        className="button green"
          onClick={() => {
            setShowResult(true);
            setShowConfirmQuiz(false)
            setShowUnanswered(false);
          }}
        >
          Yes, proceed
        </button>
        <button
        className="button red"
          onClick={() => {
            setShowConfirmQuiz(false);
          }}
        >
          No, review questions again
        </button>
      </div>
    </div>
  );
};
export default ConfirmQuiz;
