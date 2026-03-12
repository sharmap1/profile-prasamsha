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
      // bullets: [
      //   "Focus: HTML5, CSS3, JavaScript, ReactJS, Node.js, Express, MongoDB",
      // ],
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
    { title: "Giving & Reveiving Feedback", provider: "Harvard Manage Mentor" },
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

        {/* COMBINED CARD: Education & Certifications */}
        <div className="exp-card education-combined-card">
          <h3 className="column-title">Education & Certifications</h3>
          <div className="edu-grid-internal">
            {educationData.map((edu, index) => (
              <div key={index} className="edu-entry">
                <h4>{edu.inst}</h4>
                <p className="exp-meta">{edu.deg}</p>
                {edu.bullets && (
                  <div className="tech-pills">
                    {edu.bullets[0]
                      .replace("Focus: ", "")
                      .split(", ")
                      .map((tech, i) => (
                        <span key={i} className="pill">
                          {tech}
                        </span>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* NEW CARD: Specialized Executive Training */}
        <div className="exp-card training-card">
          <h3 className="column-title">Specialized Executive Training</h3>
          <br></br>
          <div className="training-grid-pills">
            {executiveTrainings.map((train, index) => (
              <div key={index} className="training-pill-item">
                <span className="training-title">{train.title}</span><br></br>
                <span className="training-provider">{train.provider}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="btn" onClick={() => onNavigate("/expertise")}>
        BACK TO SKILLS
      </button>
    </section>
  );
}

export default Journey;
