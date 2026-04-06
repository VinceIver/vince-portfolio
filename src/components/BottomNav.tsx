import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FolderKanban,
  Home,
  Mail,
  UserRound,
} from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'About', icon: UserRound, href: '#about' },
  { name: 'Projects', icon: FolderKanban, href: '#projects' },
  { name: 'Contact', icon: Mail, href: '#contact' },
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const BottomNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const threshold = 140;

    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        y: isVisible ? 0 : -24,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.32, ease: 'easeOut' }}
      className="portfolio-mobile-nav md:hidden"
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
      {navItems.map((item, index) => (
        <button
          key={item.name}
          onClick={() => scrollToSection(item.href)}
          className={`portfolio-mobile-button ${index === 0 ? 'is-active' : ''}`}
        >
          <item.icon size={16} />
          <span>{item.name}</span>
        </button>
      ))}
    </motion.nav>
  );
};

export default BottomNav;
