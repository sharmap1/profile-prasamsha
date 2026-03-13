import React from "react";
import "./Expertise.css";

function Expertise({ onNavigate }) {
  return (
    <section id="skills-page" className="page enter">
      <h2 className="hello-text">Technical Expertise</h2>

      <div className="skills-container-card">
        <div className="skills-grid">
          {/* QA Category */}
          <div className="skill-category">
            <h3>QA & Test Management</h3>
            <div className="tag-container">
              <span className="tag">Azure DevOps</span>
              <span className="tag">VSTS</span>
              <span className="tag">JIRA</span>
              <span className="tag">Defect Triage</span>
            </div>
          </div>

          {/* Enterprise Category */}
          <div className="skill-category">
            <h3>Enterprise Ecosystems</h3>
            <div className="tag-container">
              <span className="tag">SAP Hybris</span>
              <span className="tag">D365</span>
              <span className="tag">Smart Edit</span>
              <span className="tag">Coveo AI</span>
            </div>
          </div>

          {/* Infrastructure Category */}
          <div className="skill-category">
            <h3>Infrastructure</h3>
            <div className="tag-container">
              <span className="tag">Microsoft Azure</span>
              <span className="tag">SQL</span>
              <span className="tag">WMS</span>
              <span className="tag">PuTTY</span>
            </div>
          </div>

          {/* Web & API Category */}
          <div className="skill-category">
            <h3>Web & API</h3>
            <div className="tag-container">
              <span className="tag">JavaScript</span>
              <span className="tag">JSON</span>
              <span className="tag">Postman</span>
              <span className="tag">SOAP UI</span>
            </div>
          </div>
        </div>
      </div>
      {/* BUTTON CONTAINER */}
      <div className="expertise-actions">
        <button 
          className="btn btn-back" 
          onClick={() => onNavigate("/")}
        >
          BACK
        </button>

        <button
          className="btn btn-journey"
          onClick={() => onNavigate("/journey")}
        >
          PROFESSIONAL JOURNEY
        </button>
      </div>

      {/* RE-ORGANIZED BUTTONS: Clean and Responsive
      <div className="expertise-actions">
        <button className="btn btn-back" onClick={() => onNavigate("/")}>
          BACK
        </button>

        <button
          className="btn btn-journey"
          onClick={() => onNavigate("/journey")}
        >
          PROFESSIONAL JOURNEY
        </button>
      </div> */}
    </section>
  );
}

export default Expertise;
