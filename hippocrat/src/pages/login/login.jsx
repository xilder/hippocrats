import React, { useState } from "react";
import httpClient from "../../utils/httpClient";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./login.scss";

const Login = () => {
  const [data, setData] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    try {
      const response = await httpClient.post("//localhost:5000/api/v1/login", {
        data,
        password,
      });
      console.log(response)
    } catch (e) {
      alert(e.response.data.error);
    }
  };

  return (
    <div className="login">
      <Header />
      <div className="login-form">
        <form>
          <fieldset>
            <legend>Login</legend>
            <label>
              <span>Username/Email:</span>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Lagbaja Tamedu"
                onChange={(e) => setData(e.target.value)}
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
            <button type="button" className="submit" onClick={loginUser}>
              Login
            </button>
          </fieldset>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
