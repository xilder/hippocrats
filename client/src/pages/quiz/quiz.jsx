import React, { useState } from "react";
import { Suspense } from "react";
import Loader from "../../components/loader/loader";
import { useLocation, useNavigate } from "react-router-dom";
import Question from "../../components/question/question";
import Explanation from "../../components/explanation/explanation";
import ConfirmQuiz from "../../components/confirmQuiz/confirmQuiz";
import Result from "../../components/result/result";
import Clock from "../../components/clock/clock";
import makeSBAAnswers from "../../utils/quizFunctions/makeSBAAnswers";
import markSBA from "../../utils/quizFunctions/markSBA";
import "./quiz.scss";

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  if (!location.state) {
    navigate("./profile");
  } // quiz questions // stores user's answers as each options picked
  const [total, setTotal] = useState(0); // stores the total score for a quiz
  const { type, time, questions } = location.state; // determines the type of question to be retrieved from the backend
  // const [myMCQAnswers, setMyMCQAnswers] = useState(makeMCQQuiz(questions));
  const [mySBAAnswers, setMySBAAnswers] = useState({});
  const [myAnswers, setMyAnswers] = [mySBAAnswers, setMySBAAnswers];
  const markFunction = markSBA; // marks the total number of correct answers in a quiz
  const quizAnswers = makeSBAAnswers(questions);
  const [showConfirmQuiz, setShowConfirmQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [done, setDone] = useState(true);
  const [showUnanswered, setShowUnanswered] = useState(false);

  return (
    <div className="quiz">
      {!showExplanation && (
        <div className="clock-div">
          <Clock
            time={time}
            showResult={showResult}
            setShowResult={setShowResult}
          />
          <button
            className="end-test-button"
            onClick={() => navigate("/profile")}
          >
            End Test
          </button>
        </div>
      )}
      <div className="quiz-content">
        <div className={showConfirmQuiz ? "confirm" : "hide"}>
          <ConfirmQuiz
            setShowUnanswered={setShowUnanswered}
            showConfirmQuiz={showConfirmQuiz}
            setShowConfirmQuiz={setShowConfirmQuiz}
            setShowResult={setShowResult}
          />
        </div>
        <div className={showResult ? "confirm" : "hide"}>
          <Result
            showResult={showResult}
            setShowResult={setShowResult}
            setShowExplanation={setShowExplanation}
            setDone={setDone}
            quizAnswers={quizAnswers}
            result={total}
          />
        </div>
        <Suspense fallback={<Loader />}>
          <div className="questions">
            {questions.map((question, idx) => (
              <div key={question.id} className="questions-explanations">
                <div className="q-div" id={question.id}>
                  <Question
                    showUnanswered={showUnanswered}
                    quizAnswers={quizAnswers}
                    showAnswers={showExplanation}
                    question={question}
                    type={type}
                    number={idx}
                    myAnswers={myAnswers}
                    setMyAnswers={setMyAnswers}
                  />
                </div>
                <div className="e-div">
                  {showExplanation && (
                    <Explanation explanation={question.explanation} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
      <div className="btn">
        <button
          className={done ? "button-fixed" : "hide"}
          onClick={(e) => {
            setTotal(markFunction(myAnswers, quizAnswers));
            setShowConfirmQuiz(true);
            setShowUnanswered(true);
          }}
        >
          Submit
        </button>
        <button
          className={done ? "hide" : "button-fixed"}
          onClick={() => {
            navigate("/profile");
          }}
        >
          Take another quiz
        </button>
      </div>
    </div>
  );
};

export default Quiz;
