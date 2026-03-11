// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-brand">PRASAMSHA SHARMA</div>
      <div className="nav-right">
        <div className="nav-contact-group">
          <a href="tel:2065198877">
            <i className="fa-solid fa-phone"></i> (206) 519-8877
          </a>
          <a href="mailto:prasamshari@gmail.com">
            <i className="fa-solid fa-envelope"></i> prasamshari@gmail.com
          </a>
          <div className="status-badge">
            <div className="auth-dot"></div> {/* This handles the pulse */}
            <span>Authorized to Work (Green Card)</span>
          </div>
          <a
            href="https://linkedin.com/in/prasamsha-sharma-a87169154/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/sharmap1" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
