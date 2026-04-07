import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import BottomNav from './BottomNav';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Certifications from './Certifications';
import Projects from './Projects';
import Contact from './Contact';

type ThemeMode = 'light' | 'dark';

const Layout: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    return 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  return (
    <div className="portfolio-app">
      <button
        type="button"
        onClick={() => setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))}
        className="theme-toggle"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        title={theme === 'light' ? 'Dark mode' : 'Light mode'}
      >
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </button>
      <main className="portfolio-main">
        <Home theme={theme} />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
