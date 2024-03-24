import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Feature from "../../components/feature/feature";
import features from "../../components/feature/features";
import Footer from "../../components/footer/footer";
import "./home.scss";
import httpClient from "../../utils/httpClient";

const Home = () => {
  // const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const submitSuggestion = (e) => {
    e.preventDefault();
    const data = { name, email, suggestion };
    (async () => {
      try {
        await httpClient.post("//localhost:5000/api/v1/reviews", data);
        setName("");
        setEmail("");
        setSuggestion("");
        // navigate("/");
      } catch (e) {
        alert("Suggestion not submitted");
      }
    })();
  };

  return (
    <div className="home">
      <Header />
      <main>
        <section className="sections" id="hero">
          <div>
            <div id="hero-text" className="hero-child">
              <h2 className="title">Preparing for your PLAB exams?</h2>
              <p className="text">
                Check out our vast question bank of question..
              </p>
              <button>Take the test</button>
            </div>
            <div id="hero-image" className="hero-child">
              <img alt="Big brain" />
            </div>
          </div>
        </section>
        <section className="sections" id="features">
          <div>
            <div className="feature-box">
              {features.map((feature) => (
                <Feature feature={feature} />
              ))}
            </div>
          </div>
        </section>
        <section className="sections" id="contact-us">
          <div>
            <div className="contact-text">
              <h2>Want to contribute?</h2>
              <hr />
              <p>
                Do you have any ideas on how to improve our service or are
                interested in contributing to this project?
                <br />
                Let us know by filling the form
              </p>
            </div>
            <div className="form">
              <form onSubmit={submitSuggestion}>
                <fieldset>
                  <legend>Reach us</legend>
                  <div>
                    {" "}
                    <label for="name">
                      <span>Name:</span>
                      <input
                        type="text"
                        value={name}
                        placeholder="Lagbaja Tamedu"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </label>
                    <label for="email">
                      <span>Email:</span>
                      <input
                        type="text"
                        value={email}
                        placeholder="lagbajatamedu@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </label>
                    <label for="suggestion">
                      <span>Suggestion:</span>
                      <textarea
                        value={suggestion}
                        cols="30"
                        rows="5"
                        onChange={(e) => setSuggestion(e.target.value)}
                        required
                      ></textarea>
                    </label>
                    <input type="submit" name="submit" className="button" />
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
