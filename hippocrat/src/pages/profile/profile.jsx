import React from "react";
import Header from "../../components/header/header";
import "./profile.scss";

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="major-div">
        <div className="user-text">
          <h3>Hello, User</h3>
          <p>Delve into the quizzes prepared for you - fun and challenging</p>
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
