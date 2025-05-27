import React from "react";
import { FaReact, FaAngular, FaWordpress, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaGithub, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMui, SiPostman, SiJson, SiMongodb, SiMysql, SiStrapi, SiApollographql } from "react-icons/si";
import "./Experience.scss";

const experiences = [
  {
    title: "React.js",
    description: `With over 5 years of hands-on experience in React.js, I have built dynamic, high-performance web applications.`,
    icon: <FaReact />,
    className: "shape-react",
  },
  {
    title: "Angular",
    description: `Experienced in developing enterprise-grade applications using Angular with RxJS, modular architecture, routing, and form handling.`,
    icon: <FaAngular />,
    className: "shape-angular",
  },
  {
    title: "WordPress",
    description: `Specialized in building custom WordPress themes, plugins. Integrating headless CMS with React or Angular. Skilled in ACF & SEO optimization.`,
    icon: <FaWordpress />,
    className: "shape-wordpress",
  },
  {
    title: "HTML5",
    description: `Proficient in writing semantic, accessible HTML5 markup and structuring content for modern responsive web experiences.`,
    icon: <FaHtml5 />,
    className: "shape-html",
  },
  {
    title: "CSS3",
    description: `Skilled in advanced CSS techniques including Flexbox, Grid, transitions, and animations to create fluid and modern designs.`,
    icon: <FaCss3Alt />,
    className: "shape-css",
  },
  {
    title: "Sass/SCSS",
    description: `Experienced with Sass for creating modular, maintainable styles using mixins, variables, and nested rules.`,
    icon: <FaSass />,
    className: "shape-sass",
  },
  {
    title: "Tailwind CSS",
    description: `Expert in Tailwind CSS for utility-first styling with speed and consistency across responsive layouts.`,
    icon: <SiTailwindcss />,
    className: "shape-tailwind",
  },
  {
    title: "Bootstrap",
    description: `Built multiple responsive UIs using Bootstrap’s grid system and components, enhancing speed and consistency across devices.`,
    icon: <FaBootstrap />,
    className: "shape-bootstrap",
  },
  {
    title: "JavaScript",
    description: `Strong foundation in JavaScript ES6+, proficient in DOM manipulation, event handling, closures, async/await, and modern tooling.`,
    icon: <FaJsSquare />,
    className: "shape-js",
  },
  {
    title: "TypeScript",
    description: `Developed large-scale apps with TypeScript for type safety, better tooling, and scalability in both React and Angular projects.`,
    icon: <SiTypescript />,
    className: "shape-ts",
  },
  {
    title: "Material UI",
    description: `Implemented modern, responsive UIs using Material UI components and custom theming for consistency and accessibility.`,
    icon: <SiMui />,
    className: "shape-mui",
  },
  {
    title: "Postman",
    description: `Used Postman extensively for API testing, environment management, and automation with collections and scripting.`,
    icon: <SiPostman />,
    className: "shape-postman",
  },
  {
    title: "GitHub",
    description: `Version control and collaboration using GitHub: PRs, branching strategies, issues, CI/CD workflows.`,
    icon: <FaGithub />,
    className: "shape-github",
  },
  {
    title: "REST API",
    description: `Proficient in building and consuming RESTful APIs, including methods, headers, status codes, and integration.`,
    icon: <SiApollographql />,
    className: "shape-rest",
  },
  {
    title: "JSON",
    description: `Expert in working with JSON for data exchange between client and server, parsing, and schema structuring.`,
    icon: <SiJson />,
    className: "shape-json",
  },
  {
    title: "MongoDB",
    description: `Experience in designing NoSQL schemas, querying, and aggregating data with MongoDB in MERN stack projects.`,
    icon: <SiMongodb />,
    className: "shape-mongodb",
  },
  {
    title: "MySQL",
    description: `Skilled in relational database design, SQL queries, joins, indexing, and data normalization using MySQL.`,
    icon: <SiMysql />,
    className: "shape-mysql",
  },
  {
    title: "Strapi",
    description: `Used Strapi as a headless CMS to create customizable content APIs with authentication and media management.`,
    icon: <SiStrapi />,
    className: "shape-strapi",
  },
];

const Experience = () => {
  return (
    <div className="experience-section bg-white dark:bg-black text-black dark:text-white">
      <div className="experience-content text-neutral-700 dark:text-neutral-400">5+ Years Of Experience</div>
      <div className="experience-wrapper">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item max-w-xl text-sm md:text-lg text-neutral-700 dark:text-neutral-400">
            <div className={`experience-icon ${exp.className}`}>
              {exp.icon}
            </div>
            <p>
              <strong>{exp.title}</strong> — {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
