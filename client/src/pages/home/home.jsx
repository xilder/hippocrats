import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Feature from "../../components/feature/feature";
import features from "../../components/feature/features";
import Footer from "../../components/footer/footer";
import hero from "../../assets/hero-image.png";
import "./home.scss";
import httpClient from "../../utils/httpClient";

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const submitSuggestion = (e) => {
    e.preventDefault();
    const data = { name, email, suggestion };
    (async () => {
      try {
        await httpClient.post("/api/v1/reviews", data);
        setName("");
        setEmail("");
        setSuggestion("");
        // navigate("/");
      } catch (e) {
        alert("Suggestion not submitted");
      }
    })();
  };

  const submitData = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const response = await httpClient.get(
          "/api/v1/questions/PLAB/SBA/10"
        );
        const questions = response.data;
        const time = 15;
        const type = "SBA";
        console.log(questions);
        navigate("/quiz", { state: { questions, type, time } });
      } catch (e) {
        alert("Server down. Try again at another time");
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
              <h2 className="title">
                Preparing for PLAB?
                <hr />
              </h2>

              <p className="text">
                We got you! Check out our vast question bank that cut across
                various topics including Epidemiology, Cardiology, Nephrology,
                Gastroenterology Infectious Diseases and lots more.
                <br />
                Click the button below to take a quick quiz
              </p>
              <button className="quiz-btn" onClick={submitData}>
                Quick quiz
              </button>
            </div>
            <div id="hero-image" className="hero-child">
              <img src={hero} alt="Big brain" />
            </div>
          </div>
        </section>
        <section className="sections" id="features">
          <div>
            <div className="feature-box">
              {features.map((feature, index) => (
                <Feature feature={feature} key={index} />
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
                    <label>
                      <h3>Name:</h3>
                      <input
                        type="text"
                        value={name}
                        placeholder="Lagbaja Tamedu"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      <h3>Email:</h3>
                      <input
                        type="text"
                        value={email}
                        placeholder="lagbajatamedu@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </label>
                    <label>
                      <h3>Suggestion:</h3>
                      <textarea
                        value={suggestion}
                        cols="30"
                        rows="5"
                        onChange={(e) => setSuggestion(e.target.value)}
                        required
                      ></textarea>
                    </label>
                    <input
                      type="submit"
                      name="submit"
                      className="button"
                      value="Submit"
                    />
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
