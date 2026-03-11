import React from "react";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import praImage from "../assets/pra.jpg";

function Home() {
  const navigate = useNavigate();

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
          <button className="btn" onClick={() => navigate("/expertise")}>
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
              {/* Replace the src with your actual image path when ready */}
              <div className="image-placeholder">
                <img
                  src={praImage}
                  alt="Prasamsha Profile"
                  className="main-profile-img"
                />
              </div>

              {/* DYNAMIC STATUS BADGE */}
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
