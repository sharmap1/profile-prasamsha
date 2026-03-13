import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* 1. BLUR OVERLAY: Visible only when isMenuOpen is true */}
      <div
        className={`nav-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>

      <nav>
        <div className="nav-brand">PRASAMSHA SHARMA</div>

        {/* 2. HAMBURGER TOGGLE: Visible only on mobile */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i
            className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </button>

        {/* 3. NAVIGATION DRAWER */}
        <div className={`nav-right ${isMenuOpen ? "active" : ""}`}>
          {/* Mobile Back Button (Top of drawer) */}
          <button className="mobile-back-arrow" onClick={toggleMenu}>
            <i className="fa-solid fa-arrow-left"></i>
            <span>Go Back</span>
          </button>

          <div className="nav-contact-group">
            <a href="tel:2065198877">
              <i className="fa-solid fa-phone"></i>
              <span>(206) 519-8877</span>
            </a>

            <a href="mailto:prasamshari@gmail.com">
              <i className="fa-solid fa-envelope"></i>
              <span>prasamshari@gmail.com</span>
            </a>

            <div className="status-badge">
              <div className="auth-dot"></div>
              <span>Authorized to Work (GC)</span>
            </div>

            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
