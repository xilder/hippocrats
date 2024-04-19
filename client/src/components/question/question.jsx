import React, { useState } from "react";
import MCQOption from "./mcq/mcq";
import SBAOption from "./sba/sba";
import "./question.scss";

const Question = ({
  showUnanswered,
  showAnswers,
  question,
  type,
  number,
  myAnswers,
  setMyAnswers,
  quizAnswers,
}) => {
  const [highlightQuestion, setHighlightQuestion] = useState(true);
  const [highlightOption, setHighlightOption] = useState("");
  const options =
    type === "MCQ"
      ? question.options.map((option) => (
          <div key={option.id}>
            <MCQOption
              option={option}
              id={question.id}
              myAnswers={myAnswers}
              setMyAnswers={setMyAnswers}
            />
          </div>
        ))
      : type === "SBA"
      ? question.options.map((option) => (
          <SBAOption
            key={option.id}
            setHighlightQuestion={setHighlightQuestion}
            quizAnswers={quizAnswers}
            showAnswers={showAnswers}
            highlightOption={highlightOption}
            setHighlightOption={setHighlightOption}
            option={option}
            id={question.id}
            myAnswers={myAnswers}
            setMyAnswers={setMyAnswers}
          />
        ))
      : [];

  return (
    <div
      className={`question-div ${
        showUnanswered && highlightQuestion ? "red-border" : ""
      }`}
    >
      <div className="question">
        <p className="question-text">
          {number + 1}. {question.text}
        </p>
      </div>
      <div className="options-div">{options}</div>
    </div>
  );
};

export default Question;
