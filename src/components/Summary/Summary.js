import React from "react";
import { FaProjectDiagram, FaPenFancy, FaBriefcase } from "react-icons/fa";
import './Summary.scss';

const experiences = [
    {
    title: "Projects",
    count: "52",
    description: `I’ve successfully delivered 52 diverse projects, ranging from interactive web apps to scalable enterprise solutions. Each project has honed my skills in modern frontend technologies, solidified my architectural approach, and deepened my understanding of real-world user needs. My work reflects a commitment to performance, aesthetics, and usability.`,
    icon: <FaProjectDiagram className="text-green-500" />,
  },
  {
    title: "Blogs",
    count: "6",
    description: `I've authored 6 insightful technical blogs on Medium, where I explore frontend development, best practices, and lessons from real-world challenges. My writing captures both the technical and human sides of being a developer. These pieces aim to educate, inspire, and spark meaningful reflection in the tech community.`,
    icon: <FaPenFancy className="text-yellow-500" />,
  },
  {
    title: "Experience",
    count: "5+",
    description: `With over 5+ years of experience as a Senior Front-End Developer, I’ve had the opportunity to shape digital experiences from the ground up blending design with functionality. My journey has been about more than just clean code; it's been about solving real problems, collaborating across teams, and building solutions that scale.`,
    icon: <FaBriefcase className="text-blue-600" />,
  }
];

const Summary = () => {
  return (
    <div className="summary-section bg-white dark:bg-black text-black dark:text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto animate-fade-in">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="summary-card group relative bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-400 p-6 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-5xl">{exp.icon}</div>
              <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-300">{exp.count}</div>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors duration-200">
              {exp.title}
            </h3>
            <p className="text-base leading-relaxed">
              {exp.description}
            </p>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;