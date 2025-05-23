import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import './Header.scss';

export default function Header() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="header-section flex items-center justify-between p-4 shadow-md bg-white dark:bg-black text-black dark:text-white">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </header>
  );
}
