import React from "react";
// import { useNavigate } from "react-router-dom";
import logo from "../../assets/hippocrat_logos.png"
import "./header.scss";

const Header = () => {

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <nav className="navbar">
          <a href="/">HOME</a>
          <a href="/login">LOGIN</a>
          <a href="/register">REGISTER</a>
          <a href="/#contact-us">CONTACT US</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
