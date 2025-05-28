import React from "react";
import './About.scss';

const About = () => {
  return (
    <div className="about-section bg-white dark:bg-black text-black dark:text-white">
      <div className="display-section">
        <div className="image-section"></div>
        <div className="content-section max-w-xl text-sm md:text-lg text-neutral-700 dark:text-neutral-400">
          Welcome to my portfolio! I’m a Senior Front-End Developer specializing in building seamless digital 
          experiences using modern frameworks like ReactJS, AngularJS, JavaScript, and TypeScript. My passion 
          lies in transforming complex problems into elegant solutions through clean code, intuitive design, 
          and scalable architecture. With a strong foundation in API development and testing, I thrive in 
          fast-paced, collaborative environments that foster innovation and continuous learning. As part 
          of my commitment to sharing knowledge and staying current, I’ll also be writing technical 
          blogs covering development insights, best practices, and real world challenges to contribute to 
          the community and grow alongside it.</div>
        </div>
    </div>
  );
}

export default About;
