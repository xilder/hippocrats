import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import httpClient from "../../utils/httpClient";
import "./register.scss";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const response = await httpClient.post(
          "/api/v1/register",
          {
            first_name: firstName,
            last_name: lastName,
            user_name: userName,
            email,
            password,
          }
        );
        console.log(response);
        window.location.href = "/login";
      } catch (err) {
        console.log(e);
        if (Object.hasOwn(err, "response")) alert(err.response.data.error);
        else alert("Server down. Please try again after sometime");
      }
    })();
  };

  return (
    <div>
      <Header />
      <div className="register-form">
        <form onSubmit={registerUser}>
          <fieldset>
            <label>
              <span>First Name:</span>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Lagbaja"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Last Name:</span>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Tamedu"
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label>
              <span>Username:</span>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="l_tamedu"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Email:</span>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="lagbaja@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Password:</span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <input type="submit" className="register-button" value="Register" />
          </fieldset>
        </form>
      </div>
      <Footer />
      </div>
  );
};

export default Register;
