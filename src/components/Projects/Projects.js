import React from "react";
import "./Projects.scss";

const projects = [
  {
    company: "Temenos",
    date: "November 2024 – Present",
    details: [
      "Contributed to the development of Temenos’s digital banking platform.",
      "Designed dynamic UI with Arabic localization.",
      "Integrated core banking, payments, and wealth systems.",
      "Enhanced component reusability via Unified UX Components.",
    ],
    tech: ["React.js", "Tailwind", "Unified UX Components", "Bootstrap"],
  },
  {
    company: "iTracSys",
    date: "May 2024 – October 2024",
    details: [
      "Implemented role-based access control and Auth Guard service.",
      "Developed real-time dynamic sidebar based on user role.",
      "Responsive UI across device types.",
    ],
    tech: ["Angular.js", "Angular Material", "Bootstrap"],
  },
  {
    company: "Zimzee",
    date: "February 2023 – April 2024",
    details: [
      "Built a browser extension and web app for content organization.",
      "Integrated browser APIs and local storage.",
      "Served as Scrum Master to manage dev workflow.",
    ],
    tech: ["React.js", "Tailwind", "Bootstrap"],
  },
  {
    company: "Wakefit",
    date: "September 2021 – January 2023",
    details: [
      "Developed product listings and shopping cart modules.",
      "Implemented code-splitting and lazy loading.",
    ],
    tech: ["React.js", "Redux", "Bootstrap"],
  },
  {
    company: "Bid Management",
    date: "June 2021 – August 2021",
    details: [
      "Created revenue projection system and role-based access.",
      "Used jQuery with React for legacy migration.",
    ],
    tech: ["React.js", "Redux", "Bootstrap", "jQuery"],
  },
  {
    company: "Expense Tracker",
    date: "November 2019 – January 2021",
    details: [
      "Built UI for budget tracking and form validation.",
      "Enhanced user data accuracy and usability.",
    ],
    tech: ["React.js", "Redux", "Bootstrap", "jQuery"],
  },
];

const Projects = () => {
  return (
    <div className="projects-container bg-white dark:bg-black text-black dark:text-white">
      <h2 className="section-title max-w-xl text-sm md:text-lg text-neutral-700 dark:text-neutral-400">Professional Experience</h2>
      <div className="timeline max-w-xl text-sm md:text-lg text-neutral-700 dark:text-neutral-400">
        {projects.map((proj, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date">{proj.date}</div>
            <div className="timeline-content">
              <h3>{proj.company}</h3>
              <ul>
                {proj.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="tech-stack">
                {proj.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
