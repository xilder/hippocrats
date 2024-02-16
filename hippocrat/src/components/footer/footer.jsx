import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-div">
        <div>
          <p>&copy;2024</p>
        </div>
        <div className="sm-icons">
          <img alt="Twitter" className="icons" />
          <img alt="FB" className="icons" />
          <img alt="IG" className="icons" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
