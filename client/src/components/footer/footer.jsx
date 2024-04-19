import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-div">
        <div>
          <p>&copy;2024</p>
        </div>
        <div className="sm-icons">
          <a href="https://x.com/_hippocrat" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faSquareXTwitter} />
            <p>@_hippocrat</p>
          </a>
          <a href="mailto:abel.fagbemi@med.uniben.edu">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>abel.fagbemi@med.uniben.edu</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
