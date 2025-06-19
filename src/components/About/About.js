import React from "react";
import './About.scss';
import DevImg from "../../assets/about.png";

const About = () => {
  return (
    <div className="about-section bg-white dark:bg-black text-black dark:text-white">
      <div className="display-section">
        <div className="image-section">
          <img src={DevImg} alt="devImg" />
        </div>
        <div className="content-section">
          <div className="aboutheading-content text-neutral-700 dark:text-neutral-400">
            About Me
          </div>
          <div className="about-content max-w-xl text-sm md:text-lg text-neutral-700 dark:text-neutral-400">
            I'm a Senior Front-End Developer with a passion for creating seamless digital experiences using ReactJS, 
            AngularJS, JavaScript, and TypeScript. I specialize in turning complex problems into clean, scalable solutions. 
            With strong skills in API development and testing, I thrive in fast-paced, collaborative teams. I also write 
            technical blogs to share insights, best practices, and real-world challenges to help grow the dev community.
          </div>
          <a
            href="/JobinyJohnsonResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn button secondary-button mt-6 text-neutral-700 dark:text-neutral-400"
          >
            View My Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
