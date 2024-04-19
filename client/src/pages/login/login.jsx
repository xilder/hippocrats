import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import httpClient from "../../utils/httpClient";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate()
  const [data, setData] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    (async () => {
      try {
        await httpClient.post("/api/v1/login", {
          data,
          password,
        });
        // console.log(response);
        navigate("/profile");
      } catch (e) {
        // console.log(e)
        if (Object.hasOwn(e, "response")) alert(e.response.data.error);
        else alert("Server down. Please try again after sometime");
      }
    })();
  };
  return (
    <div className="login">
      <Header />
      <div className="login-form">
        <form onSubmit={loginUser}>
          <fieldset>
            <label>
              <span>Username/Email:</span>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="lagbaja@gmail.com"
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
            <input type="submit" className="button" value="Login" />
          </fieldset>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
  