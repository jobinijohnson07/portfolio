import React from "react";
import { FaReact, FaAngular, FaWordpress } from "react-icons/fa";
import './Experience.scss';

const experiences = [
  {
    title: "React.js Development",
    description: `With over 5 years of hands-on experience in React.js, I have built dynamic, high-performance web applications. I specialize in component-based architecture, state management with Redux or Context API, hooks, and RESTful API integration. My expertise ensures scalable and maintainable codebases that align with modern development best practices.`,
    icon: <FaReact className="text-cyan-500" />,
  },
  {
    title: "Angular Development",
    description: `I have extensive experience developing scalable enterprise-grade applications using Angular. From routing and form handling to RxJS for reactive programming and modular code structure, my Angular projects are optimized for performance and maintainability. I've worked across Angular versions and kept up-to-date with best practices.`,
    icon: <FaAngular className="text-red-600" />,
  },
  {
    title: "WordPress Development",
    description: `My WordPress expertise spans from custom theme and plugin development to full-site builds for businesses and blogs. I excel in PHP, ACF (Advanced Custom Fields), and optimizing for SEO and speed. I also have experience integrating headless WordPress with React or Angular frontends for modern solutions.`,
    icon: <FaWordpress className="text-blue-800" />,
  },
];

const Experience = () => {
  return (
    <div className="experience-section bg-gradient-to-b from-white to-neutral-100 dark:from-black dark:to-neutral-900 text-black dark:text-white">
      <h2 className="experience-content max-w-xl text-sm md:text-lg text-neutral-700 dark:text-neutral-400">
        5+ Years Of Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto animate-fade-in">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="experience-card group relative bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-400 p-6 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-5xl mb-4">{exp.icon}</div>
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

export default Experience;
