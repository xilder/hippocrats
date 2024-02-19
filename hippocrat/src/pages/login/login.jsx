import React, { useState } from "react";
import httpClient from "../../utils/httpClient";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./login.scss";

const Login = () => {
  const [data, setData] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    (async () => {
      if (!data) {
        alert("please enter username or email");
      } else if (!password) {
        alert("please enter password");
      } else {
        try {
          await httpClient.post("//localhost:5000/api/v1/login", {
            data,
            password,
          });
          // console.log(response);
          window.location.href = "/profile";
        } catch (e) {
          // console.log(e)
          if (Object.hasOwn(e, "response")) alert(e.response.data.error);
          else alert("Server down. Please try again after sometime");
        }
      }
    })();
  };
  return (
    <div className="login">
      <Header />
      <div className="login-form">
        <form onSubmit={loginUser}>
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
            <input type="submit" className="submit" value="Login" />
          </fieldset>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
