import React from "react";
import "./Journey.css";

function Journey({ onNavigate }) {
  const experienceData = [
    {
      company: "SanMar Corporation",
      role: "Sr. Software QA Analyst",
      period: "Oct 2021 – Present",
      bullets: [
        "Spearheaded the full QA lifecycle within Azure DevOps (ADO), from initial requirement analysis and strategic test planning to complex execution and final validation.",
        "Managed high-stakes regression and integration testing for enterprise retail platforms, including SAP Commerce (Hybris), Backoffice SAP, and Smart Edit, integrated via D365, Azure, and SQL.",
        "Architected comprehensive test suites mapped to rigorous acceptance criteria, facilitating detailed technical walkthroughs with Product Managers and Business Analysts to ensure 100% requirements coverage.",
      ],
    },
    {
      company: "Wicresoft (Microsoft)",
      role: "Software DevOps Engineer",
      period: "2020",
      bullets: [
        "Orchestrating CI/CD pipelines and Build/Release management in Azure DevOps.",
        "Drove production stability through expert-level debugging, log analysis, and machine health monitoring during high-priority code deployments.",
        "Monitoring machine health and system performance during deployments.",
      ],
    },
    {
      company: "Leapfrog Technology Inc",
      role: "Software QA Analyst",
      period: "2016 - 2020",
      bullets: [
        "Executed comprehensive manual testing for critical application features, specializing in SAP Backend and Hybris Frontend integration.",
        "Validated data integrity and system communication through rigorous Web Services testing, utilizing SOAP UI to analyze and confirm XML request/response data.",
        "Engineered detailed, high-coverage test cases within Azure DevOps (ADO) and spearheaded defect lifecycle management using JIRA.",
      ],
    },
  ];

  const educationData = [
    {
      inst: "Nepal Academy of Management & Technology",
      deg: "Bachelor of Technology (B.Tech)",
    },
    {
      inst: "University of Washington | Seattle, WA",
      deg: "Full Stack Web Development",
    },
    {
      inst: "Michigan State University | East Lansing, MI",
      deg: "Human Resources Management",
    },
  ];

  const executiveTrainings = [
    {
      title: "Project Management Basics",
      provider: "Project Management Institute (PMI)",
    },
    { title: "Giving & Receiving Feedback", provider: "Harvard Manage Mentor" },
    { title: "Essentials of Management", provider: "TeliaSonera" },
  ];

  return (
    <section id="exp-page" className="page enter">
      <h2 className="hello-text">Professional Journey</h2>

      <div className="exp-scroll-container">
        {/* Work Experience Cards */}
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

        {/* Education & Certifications Card */}
        <div className="exp-card education-combined-card">
          <h3 className="section-title">
            <i className="fa-solid fa-graduation-cap"></i> Education &
            Certifications
          </h3>
          <div className="edu-grid-internal">
            {educationData.map((edu, index) => (
              <div key={index} className="edu-entry-card">
                <div className="edu-accent-line"></div>
                <div className="edu-content">
                  <h4>{edu.inst}</h4>
                  <p className="edu-degree">{edu.deg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Executive Training Card */}
        <div className="exp-card training-combined-card">
          <h3 className="section-title">
            <i className="fa-solid fa-award"></i> Executive Leadership Training
          </h3>
          <div className="training-flex-container">
            {executiveTrainings.map((train, index) => (
              <div key={index} className="training-badge">
                <div className="training-icon-box">
                  <i className="fa-solid fa-check-circle"></i>
                </div>
                <div className="training-text">
                  <span className="train-title">{train.title}</span>
                  <span className="train-provider">{train.provider}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="journey-actions">
        <button
          className="btn btn-back"
          onClick={() => onNavigate("/expertise")}
        >
          BACK TO SKILLS
        </button>
      </div>
    </section>
  );
}

export default Journey;
