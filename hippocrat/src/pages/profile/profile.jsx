import React, { useState, useEffect } from "react";
import Header from "../../components/header/header";
import httpClient from "../../utils/httpClient";
import "./profile.scss";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await httpClient.get("//localhost:5000/api/v1/@me");
        setUser(response.data);
        // console.log(response.data)
      } catch (e) {
        // alert("Not signed in");
        // console.log(e)
        window.location.href = "/login";
      }
    })();
  }, []);

  const logoutUser = async () => {
    try {
      await httpClient.get("//localhost:5000/api/v1/logout");
      // console.log(response);
      window.location.href = "/login";
    } catch (e) {
      window.location.href = "/home";

    }
  };

  return (
    <div>
      <Header />
      <div className="major-div">
        <div className="user-text">
          <h3>Hello, {user.user_name}</h3>
          <p>Delve into the quizzes prepared for you - fun and challenging</p>
          <button type="button" className="submit" onClick={logoutUser}>
            Logout
          </button>
        </div>
        <div className="options-div">
          <div className="options">
            <h3>Subject</h3>
            <p>100 questions</p>
            <p>1 hour</p>
            <button>Take quiz</button>
          </div>
          <div className="options">
            <h3>Subject</h3>
            <p>100 questions</p>
            <p>1 hour</p>
            <button>Take quiz</button>
          </div>
          <div className="options">
            <h3>Subject</h3>
            <p>100 questions</p>
            <p>1 hour</p>
            <button>Take quiz</button>
          </div>
          <div className="options">
            <h3>Subject</h3>
            <p>100 questions</p>
            <p>1 hour</p>
            <button>Take quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
