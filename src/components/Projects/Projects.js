import React from "react";
import "./Projects.scss";
import {
  FaReact,
  FaAngular,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiJquery,
  SiMui,
} from "react-icons/si";
import { TbComponents } from "react-icons/tb";

// Icon and color map
const iconMap = {
  "React.js": { icon: <FaReact color="#61DBFB" />, color: "#E0F7FA" },
  "Angular.js": { icon: <FaAngular color="#DD0031" />, color: "#FFEBEE" },
  "Bootstrap": { icon: <FaBootstrap color="#7952B3" />, color: "#F3E5F5" },
  "Tailwind": { icon: <SiTailwindcss color="#06B6D4" />, color: "#E0F7FA" },
  "Redux": { icon: <SiRedux color="#764ABC" />, color: "#F3E5F5" },
  "jQuery": { icon: <SiJquery color="#0769AD" />, color: "#E1F5FE" },
  "Angular Material": { icon: <SiMui color="#007FFF" />, color: "#E3F2FD" },
  "Unified UX Components": { icon: <TbComponents color="#3498db" />, color: "#E3F2FD" },
};

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
      <h2 className="section-title text-neutral-700 dark:text-neutral-400">Professional Experience</h2>
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
                {proj.tech.map((tech, i) => {
                  const data = iconMap[tech];
                  return (
                    <span
                      key={i}
                      className="tech-badge"
                      style={{ backgroundColor: data?.color || "#eee" }}
                    >
                      <span className="icon">{data?.icon}</span>
                      <span className="label">{tech}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
