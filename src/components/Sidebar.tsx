import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  FolderKanban,
  Home,
  Mail,
  UserRound,
} from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'About', icon: UserRound, href: '#about' },
  { name: 'Certs', icon: Award, href: '#certifications' },
  { name: 'Projects', icon: FolderKanban, href: '#projects' },
  { name: 'Contact', icon: Mail, href: '#contact' },
];

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Sidebar: React.FC = () => {
  return (
    <motion.aside
      initial={{ x: -32, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.65 }}
      className="portfolio-sidebar hidden md:flex"
      aria-label="Section navigation"
    >
      {navItems.map((item, index) => (
        <button
          key={item.name}
          onClick={() => scrollToSection(item.href)}
          className={`portfolio-nav-button ${index === 0 ? 'is-active' : ''}`}
          aria-label={item.name}
          title={item.name}
        >
          <item.icon size={23} strokeWidth={2} />
        </button>
      ))}
    </motion.aside>
  );
};

export default Sidebar;
