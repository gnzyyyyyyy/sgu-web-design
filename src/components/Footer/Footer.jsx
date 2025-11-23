import React from "react";
import "./Footer.css";

import WhatsApp from "../../assets/images/WhatsApp.png";
import instagram from "../../assets/images/ig.png";
import tiktok from "../../assets/images/tiktok.png";
import sguWhite from "../../assets/images/WHITE-SGU-LOGO.png";
import map from "../../assets/images/map.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left column */}
        <div className="footer-info">
          <h3 className="footer-title">SWISS GERMAN UNIVERSITY</h3>

          <p className="footer-address">
            Alam Sutera Campus:<br />
            The Prominence Tower Alam Sutera, Jl. Jalur Sutera Barat. No. 15, RT.003/RW.006,
            Panunggangan Tim., Kec. Pinang, Kota Tangerang, Banten 15143
            <br /><br />
            Phone: +6221 2977 9596/9597<br />
            Fax +6221 2977 9598
          </p>
        </div>

        {/* Center Map */}
        <div className="footer-map-wrapper">
          <img
            className="footer-map"
            src={map}
            alt="Map location"
            onClick={() =>
              window.open("https://maps.app.goo.gl/KwLUAd66MYDND8d8A", "_blank")
            }
          />
        </div>

        {/* Right side */}
        <div className="footer-right">
          <img className="footer-logo" src={sguWhite} alt="SGU Logo" />

          <nav className="footer-links">
            <a href="#">FAQ</a>
            <span>|</span>
            <a href="#">Privacy & Policy</a>
            <span>|</span>
            <a href="#">Index</a>
          </nav>

          <div className="footer-buttons">
            <button>Contact Us</button>
            <button>Career With Us</button>
            <button>Research</button>
            <button>Alumni</button>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="footer-divider"></div>

      {/* Social + copyright */}
      <div className="footer-bottom">
        <p className="footer-copy">©2025 Swiss German University All rights reserved</p>

        <div className="footer-socials">
            <img src={instagram} alt="Instagram" />
            <img src={tiktok} alt="Tiktok" />
            <img src={WhatsApp} alt="WhatsApp" />
        </div>
    </div>
    </footer>
  );
};

export default Footer;
