import React from "react";
import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer" id="footer">
      {/* <div className="container-fluid"> */}
      <div >
        {/* <FontAwesomeIcon className="social-icon" icon={faTwitter} />
        <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
        <FontAwesomeIcon className="social-icon" icon={faInstagram} />
        <FontAwesomeIcon className="social-icon" icon={faEnvelope} /> */}
        {/* 
        <i class="social-icon fab fa-twitter"></i>
        <i class="social-icon fab fa-facebook-f"></i>
        <i class="social-icon fab fa-instagram"></i>
        <i class="social-icon fas fa-envelope"></i> */}
        <p className="footer-paragraph">© Copyright 2023 AllDadeFinish</p>
        <p className="footer-subparagraph">Design By Cloud Consulting & Solutions</p>
      </div>
    </footer>
  );
}
export default Footer;
