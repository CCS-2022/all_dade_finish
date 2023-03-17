import React from "react";
import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './Footer.css';

function Footer() {
  return (
    <footer className="white-section__footer" id="footer">
      <div className="container-fluid">
        {/* <FontAwesomeIcon className="social-icon" icon={faTwitter} />
        <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
        <FontAwesomeIcon className="social-icon" icon={faInstagram} />
        <FontAwesomeIcon className="social-icon" icon={faEnvelope} /> */}
        {/* 
        <i class="social-icon fab fa-twitter"></i>
        <i class="social-icon fab fa-facebook-f"></i>
        <i class="social-icon fab fa-instagram"></i>
        <i class="social-icon fas fa-envelope"></i> */}
        <p>© Copyright 2022 AllDadeFinish</p>
      </div>
    </footer>
  );
}
export default Footer;
