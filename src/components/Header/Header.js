import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import './Header.scss';

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
      const sections = ['home', 'about', 'summary', 'experience', 'projects'];
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
      <div className="logo text-2xl" style={{ fontFamily: "'Great Vibes', cursive", color: "#2563eb" }}>
        Jobiny
      </div>
      <nav className="flex items-center gap-6 text-xs md:text-sm font-semibold uppercase text-neutral-700 dark:text-neutral-400">
        <a
          href="#home"
          className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
        >
          About
        </a>
        <a
          href="https://github.com/jobinijohnson07"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          GitHub
        </a>
        <a
          href="https://leetcode.com/u/jobinijohnson981/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          LeetCode
        </a>
        {/* <a
          href="#summary"
          className={`nav-link ${activeSection === 'summary' ? 'active' : ''}`}
        >
          Summary
        </a> */}
        <a
          href="#experience"
          className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
        >
          Experience
        </a>
        <a
          href="#projects"
          className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
        >
          Projects
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
