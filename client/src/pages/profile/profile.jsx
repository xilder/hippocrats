import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import httpClient from "../../utils/httpClient";
import "./profile.scss";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [time, setTime] = useState(15);
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const type = "SBA";
  const course = "PLAB";

  useEffect(() => {
    (async () => {
      try {
        const response = await httpClient.get("/api/v1/@me");
        setUser(response.data);
        // console.log(response.data)
      } catch (e) {
        navigate("/login");
      }
    })();
  }, [navigate]);

  const submitData = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const response = await httpClient.get(
          `/api/v1/questions/${course}/${type}/${numberOfQuestions}`
        );
        const questions = response.data;
        navigate("/quiz", { state: { questions, type, time } });
      } catch (e) {
        alert("Server down. Try again at another time");
      }
    })();
  };

  const logoutUser = async () => {
    try {
      await httpClient.get("/logout");
      // console.log(response);
      navigate("/login");
    } catch (e) {
      navigate("/");
    }
  };

  return (
    <div>
      <Header />
      <div className="major-div">
        <div className="user-text">
          <h3>Hello, {user.username}</h3>
          <p>Get started with a quiz</p>
          <button type="button" className="logout-btn" onClick={logoutUser}>
            Logout
          </button>
        </div>
        <div className="courses-div">
          <div className="courses">
            <form onSubmit={submitData}>
              <h3>PLAB</h3>
              <div>
                {/* <input type="radio" name="type" value="SBA" onChange={(e) => {setType(e.target.value)}} defaultChecked/>
              <input type="radio" name="type" value="MCQ" onChange={(e) => {setType(e.target.value)}}/> */}
              </div>
              <div className="quiz-parameters">
                <h5 className="quiz-param">
                  Quiz:{" "}
                  <input
                    type="number"
                    min="10"
                    max="100"
                    required
                    value={numberOfQuestions}
                    onChange={(e) => setNumberOfQuestions(e.target.value)}
                  />{" "}
                  questions
                </h5>
                <h5 className="quiz-param">
                  Time:{" "}
                  <input
                    type="number"
                    value={time}
                    min="10"
                    max="100"
                    required
                    onChange={(e) => setTime(e.target.value)}
                  />{" "}
                  minutes
                </h5>
              </div>
              <input className="quiz-btn" type="submit" value="Take the quiz" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
