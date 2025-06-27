import './Achievements.scss';
import Achieve from "../../assets/achieve.png";

const Achievements = () => {
  return (
    <div className="achievements-section bg-white dark:bg-black text-black dark:text-white">
      <div className="display-section">
        <div className="image-section">
          <img src={Achieve} alt="Achievement Illustration" />
        </div>
        <div className="content-section">
          <div className="aboutheading-content text-neutral-700 dark:text-neutral-400">
            <div className="abouthead-content text-neutral-700 dark:text-neutral-400">
            Achievements
          </div>
            <ul className="cert-list">
              <li>
                Solved <strong>50+ problems</strong> on <span>LeetCode</span> improving problem-solving and DSA skills.
              </li>
              <li>
                Completed the <strong>Google Cloud Fundamentals: Core Infrastructure</strong> course by <span>Google</span>.
              </li>
              <li>
                Earned the <strong>Career Essentials in GitHub Professional Certificate</strong> from <span>GitHub</span>.
              </li>
              <li>
                Completed <strong>Responsive Web Design</strong> training from <span>Sololearn</span>.
              </li>
              <li>
                Finished a comprehensive <strong>C Tutorial Course</strong> from <span>Sololearn</span>.
              </li>
              <li>
                Acquired foundational knowledge through the <strong>HTML Fundamentals Course</strong> by <span>Sololearn</span>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
