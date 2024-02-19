import React, { useState } from "react";
import Header from "../../components/header/header";
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
          "//localhost:5000/api/v1/register",
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
            <legend>Register</legend>
            <label>
              <span>First Name:</span>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Lagbaja Tamedu"
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
                placeholder="Lagbaja Tamedu"
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label>
              <span>Username:</span>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Lagbaja Tamedu"
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
                placeholder="Lagbaja Tamedu"
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
            <input type="submit" className="submit" value="Register" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
