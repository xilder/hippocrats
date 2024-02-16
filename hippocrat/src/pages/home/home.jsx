import React, { Component } from "react";
import Feature from "../../components/feature/feature";
import features from "../../components/feature/features";
import Footer from "../../components/footer/footer";
import "./home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
        <header className="logo">
          <img src="../assets/img.jpg" alt="Logo" />
          {/* <nav className='navbar'>
                        <a href='#'>Login/Register</a>
                        <a href='#'>About Us</a>
                        <a href='#'>Contact Us</a>
                    </nav> */}
        </header>
        <main>
          <section className="sections" id="hero">
            <div>
              <div id="hero-text" className="hero-child">
                <h2 className="title">
                  Are you ready to put your medical knowledge to the test with a
                  vast bank of engaging quizzes?
                </h2>
                <p className="text">
                  Sharpen your skills, identify your strengths, and ace your
                  studies with Hippocrat - your ultimate quiz companion!
                </p>
                <button>Pick a subject</button>
              </div>
              <div id="hero-image" className="hero-child">
                <img alt="Big brain" />
              </div>
            </div>
          </section>
          <section className="sections" id="features">
            <div>
              {features.map((feature) => (
                <Feature feature={feature} />
              ))}
            </div>
          </section>
          <section className="sections" id="contact-us">
            <div>
            <div className="contact-text">
              <h2>Want to contribute</h2>
              <p>Lorem ipsum</p>
            </div>
            <div className="form">
              <form>
                <fieldset>
                  <legend>Reach us</legend>
                  <label for="name">
                    <span>Name:</span>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Lagbaja Tamedu"
                      required
                    />
                  </label>
                  <label for="email">
                    <span>Email:</span>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="lagbajatamedu@gmail.com"
                      required
                    />
                  </label>
                  <label for="suggestion">
                    <span>Suggestion:</span>
                    <input
                      type="textarea"
                      name="suggestion"
                      id="suggestion"
                      placeholder="Write suggestion"
                      required
                    />
                  </label>
                  <input type="submit" name="submit" id="submit" />
                </fieldset>
              </form>
            </div>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    );
  }
}

export default Home;
