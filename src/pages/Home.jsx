import React from "react";
import Tilt from "react-parallax-tilt";
// REMOVE useNavigate from here
import "./Home.css";
import praImage from "../assets/pra.jpg";

// DESTREUCTURE onNavigate from props
function Home({ onNavigate }) {
  return (
    <section id="landing-page" className="page enter">
      <div className="hero-container">
        {/* LEFT SIDE: TEXT CONTENT */}
        <div className="hero-text-section">
          <h1 className="hello-text">Senior Quality Assurance Engineer</h1>
          <p className="hero-description">
            Specializing in end-to-end QA lifecycles and CI/CD orchestration.
            Deep expertise in validating SAP Commerce (Hybris) and Azure
            ecosystems.
          </p>
          {/* --- NEW: TOP 3 SKILLS PILLS --- */}
          <div className="hero-skills-pills">
            <span className="skill-pill">SAP Hybris</span>
            <span className="skill-pill">Azure DevOps</span>
            <span className="skill-pill">CI/CD Pipelines</span>
          </div>

          {/* This now calls the function in App.jsx which triggers the Loader */}
          <button className="btn" onClick={() => onNavigate("/expertise")}>
            EXPLORE EXPERTISE
          </button>
        </div>

        {/* RIGHT SIDE: DYNAMIC PORTFOLIO IMAGE PLACEHOLDER */}
        <div className="hero-visual-section">
          <Tilt
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
            className="parallax-effect"
          >
            <div className="image-card">
              <div className="image-placeholder">
                <img
                  src={praImage}
                  // src="../assets/pra.jpg"
                  alt="Prasamsha Profile"
                  className="main-profile-img"
                />
              </div>

              <div className="floating-status-badge">
                <div className="pulse-dot"></div>
                <span>8+ YEARS QA EXPERIENCE</span>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default Home;
