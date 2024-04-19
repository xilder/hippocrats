import React, { useState, useEffect } from "react";
import "./clock.scss";

const Clock = ({ time, showResult, setShowResult }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(time % 60);
  const [hours, setHours] = useState(Math.floor(time / 60));

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      } else if (hours > 0) {
        setMinutes(59);
        setHours(hours - 1);
      } else {
        setShowResult(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, minutes, hours, setShowResult]);

  return (
    <div className="clock-component">
      {showResult ? (
        <h2>
          <span className="hours">00</span> :{" "}
          <span className="minutes">00</span> :{" "}
          <span className="seconds">00</span>
        </h2>
      ) : (
        <h2>
          <span className="hours">
            {hours < 10 ? "0" : ""}
            {hours}
          </span>{" "}
          :{" "}
          <span className="minutes">
            {minutes < 10 ? "0" : ""}
            {minutes}
          </span>{" "}
          :{" "}
          <span className="seconds">
            {seconds < 10 ? "0" : ""}
            {seconds}
          </span>
        </h2>
      )}
    </div>
  );
};
export default Clock;
