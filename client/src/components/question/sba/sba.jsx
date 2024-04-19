import React from "react";
import updateSBAChoice from "../../../utils/quizFunctions/updateSBAchoice";
import "./sba.scss";

const SBAOption = ({
  quizAnswers,
  showAnswers,
  highlightOption,
  setHighlightOption,
  setHighlightQuestion,
  option,
  id,
  myAnswers,
  setMyAnswers,
}) => {
  const updateChoice = (e) => {
    const newAnswers = updateSBAChoice(myAnswers, id, option.id);
    setMyAnswers(newAnswers);
    setHighlightQuestion(false);
    setHighlightOption(prev => option.id);

  };
  return (
    <div
      className={`options ${
        showAnswers && highlightOption === option.id ? "red-background" : ""
      } ${
        showAnswers && Object.values(quizAnswers).includes(option.id)
          ? "green-background"
          : ""
      }`}
    >
      <div className="option-input">
        <input
          id={option.id}
          type="radio"
          name={id}
          value={option.option}
          onClick={updateChoice}
        />
      </div>
      <div className="option-text">
        <p>{option.text}</p>
      </div>
    </div>
  );
};

export default SBAOption;
