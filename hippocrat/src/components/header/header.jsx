import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="logo">
      <div className="logo">
        <img src="../assets/img.jpg" alt="Logo" />
      </div>
      <div>
        <nav className="navbar">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          <a href="/#contact-us">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
