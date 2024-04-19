import React from "react";
import updateMCQChoice from "../../../utils/quizFunctions/updateMCQChoice";
import "./mcq.scss";

const MCQOption = ({ option, id, myAnswers, setMyAnswers }) => {
  const updateChoice = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newAnswer = updateMCQChoice(myAnswers, id, name, value);
    setMyAnswers(newAnswer);
  };
  return (
    <div>
      <div>
        <p>
          <strong>{option.option}.</strong> {option.text}
        </p>
      </div>
      <div>
        <input
          className="true"
          type="radio"
          name={option.id}
          value="T"
          onClick={updateChoice}
        />
        <input
          className="false"
          type="radio"
          name={option.id}
          value="F"
          onClick={updateChoice}
        />
        <input
          className="undefined"
          type="radio"
          name={option.id}
          value="U"
          onClick={updateChoice}
        />
      </div>
    </div>
  );
};

export default MCQOption;
