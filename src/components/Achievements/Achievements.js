import React from "react";
import './Achievements.scss';

const Achievements = () => {
  return (
    <div className="achievements-section bg-white dark:bg-black text-black dark:text-white">
       <div className="display-section">
        <div className="image-section">
          <img src={DevImg} alt="devImg" />
        </div>
        <div className="content-section">
          <div className="aboutheading-content text-neutral-700 dark:text-neutral-400">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;