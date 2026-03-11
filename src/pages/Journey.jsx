import React from "react";
import { useNavigate } from "react-router-dom"; // Essential for React navigation
import "./Journey.css";

function Journey() {
  const navigate = useNavigate();

  // 1. Moving data to an array makes the code cleaner and easier to maintain
  const experienceData = [
    {
      company: "SanMar Corporation",
      role: "Sr. Software QA Analyst",
      period: "Oct 2021 – Present",
      bullets: [
        "Bridging technical requirements and business goals via detailed test design in ADO.",
        "Ensuring platform stability for SAP Hybris ecosystems across Azure and D365.",
        "Leading high-stakes release sign-offs and search optimization with Coveo AI.",
      ],
    },
    {
      company: "Wicresoft (Microsoft)",
      role: "Software DevOps Engineer",
      period: "2020",
      bullets: [
        "Orchestrating CI/CD pipelines and Build/Release management in Azure DevOps.",
        "Monitoring machine health and system performance during deployments.",
      ],
    },
    {
      company: "Leapfrog Technology",
      role: "Software QA Analyst",
      period: "2016 - 2020",
      bullets: [
        "Orchestrating CI/CD pipelines and Build/Release management in Azure DevOps.",
        "Monitoring machine health and system performance during deployments.",
      ],
    },
  ];

  return (
    <section id="exp-page" className="page enter">
      <h2 className="hello-text">Professional Journey</h2>

      <div className="exp-scroll-container">
        {experienceData.map((job, index) => (
          <div className="exp-card" key={index}>
            <h3>{job.company}</h3>
            <p className="exp-meta">
              {job.role} | {job.period}
            </p>
            <ul>
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 2. Using navigate instead of id="backToSkills" */}
      <button className="btn" onClick={() => navigate("/expertise")}>
        BACK TO SKILLS
      </button>
    </section>
  );
}

export default Journey;
