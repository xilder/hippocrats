import React from "react";
import Header from "../../components/header/header";
import "./register.scss";

const Register = () => {
  return (
    <div>
      <Header />
      <div className="register-form">
        <form>
          <fieldset>
            <legend>Register</legend>
            <label>
              <span>First Name:</span>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Lagbaja Tamedu"
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
                required
              />
            </label>
            <label>
              <span>Username:</span>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Lagbaja Tamedu"
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
                required
              />
            </label>
            <input type="submit" name="submit" className="submit" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
