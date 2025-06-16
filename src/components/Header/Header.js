import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import './Header.scss';
import githubIcon from '../../assets/github.svg';    
import leetcodeIcon from '../../assets/leetcode.svg'; 

export default function Header() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  );

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'summary', 'experience', 'projects', 'blogs', 'achieve'];
      const scrollPosition = window.scrollY + 150;

      for (let id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="header-section sticky top-0 z-50 flex items-center justify-between px-6 py-3 shadow-md bg-white dark:bg-black text-black dark:text-white">
      <div className="logo flex items-center gap-1 text-2xl font-extrabold tracking-wider text-blue-600 dark:text-blue-400">
        <span className="text-4xl font-logo italic">J</span>
        <span className="font-mono text-base md:text-lg tracking-widest">obiny</span>
      </div>

      <nav className="flex items-center gap-6 text-xs md:text-sm font-semibold uppercase text-neutral-700 dark:text-neutral-400">
        <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
        <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
        <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a>
        <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
        <a href="#blogs" className={`nav-link ${activeSection === 'blogs' ? 'active' : ''}`}>Blogs</a>
        <a href="#achieve" className={`nav-link ${activeSection === 'achieve' ? 'active' : ''}`}>Achievements</a>
        <a
          href="https://leetcode.com/u/jobinijohnson981/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <img src={leetcodeIcon} alt="LeetCode" className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/jobinijohnson07"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <img src={githubIcon} alt="GitHub" className="h-5 w-5" />
        </a>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
    </header>
  );
}
