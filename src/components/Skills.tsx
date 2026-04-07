import React, { useMemo, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import Antigravity from './Antigravity';

type SkillCategory = 'Technical' | 'Programming';
type FilterKey = 'All' | SkillCategory;

type Skill = {
  name: string;
  category: SkillCategory;
  accent: string;
  logo: React.ReactNode;
  scatterX: number;
  scatterY: number;
  rotate: number;
};

const filters: FilterKey[] = ['All', 'Technical', 'Programming'];

const logoClassName = 'portfolio-skill-logo';

const skills: Skill[] = [
  {
    name: 'PostgreSQL',
    category: 'Technical',
    accent: '#336791',
    scatterX: 96,
    scatterY: -42,
    rotate: 5,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <path
          fill="#336791"
          d="M24.4 14.4c-4.2 0-7.8 3.4-7.8 7.7v8.3c0 5 2 8.8 5.8 11.2l-.9 5.2c-.2 1.2.9 2.1 2 1.6l5.8-2.7c1 .2 2 .3 3.1.3 8.2 0 14.9-5.7 14.9-12.8 0-5-3.4-9.3-8.3-11.3-1.8-4.6-7.3-7.5-14.6-7.5Z"
        />
        <path
          fill="#ffffff"
          d="M24.1 23.2c0-2.9 2.2-5.1 5.1-5.1 2.2 0 4.1 1.1 5 2.9 4.4.2 7.9 3.1 7.9 6.7 0 3.8-3.9 6.8-8.8 6.8-1.8 0-3.6-.4-5.1-1.1l-2.4 1.1.4-2.2c-1.3-1.2-2.1-2.8-2.1-4.7Z"
        />
        <circle cx="29.2" cy="24.4" r="1.25" fill="#336791" />
        <circle cx="35.7" cy="25.2" r="1.2" fill="#336791" />
        <path
          d="M39.8 28.1c0 1.9-1.5 3.3-3.4 3.3h-1v4.3c0 1.8-1.2 3-3 3-1.4 0-2.4-.6-3.2-1.8"
          stroke="#336791"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M22.5 41.6c2.6 1.6 6 2.4 9.5 2.4" stroke="#336791" strokeWidth="2" strokeLinecap="round" opacity=".9" />
      </svg>
    ),
  },
  {
    name: 'AWS',
    category: 'Technical',
    accent: '#ff9900',
    scatterX: -64,
    scatterY: -54,
    rotate: -4,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <path
          fill="#232f3e"
          d="M13.5 37.2V25.8h4l4.7 7.8 4.7-7.8h4v11.4h-3.1V30.7l-4.6 7.5h-2.2l-4.6-7.5v6.5Zm19.9 0 4.9-11.4h3.2l4.9 11.4H43l-.9-2.3h-4.8l-.9 2.3Zm4.7-4.9h2.8l-1.4-3.6Zm10.4 4.9V25.8H51v8.8h4.6v2.6Zm6.5-4.7c0-.8.6-1.4 1.5-1.4.9 0 1.5.6 1.5 1.4s-.6 1.4-1.5 1.4c-.9 0-1.5-.6-1.5-1.4Z"
        />
        <path
          fill="none"
          stroke="#ff9900"
          strokeWidth="2.4"
          strokeLinecap="round"
          d="M16.8 45.8c8.1 4.8 22.6 5.1 31.7 1"
        />
        <path fill="#ff9900" d="m45.2 44.3 5.6 1.1-4.1 3.4z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    category: 'Technical',
    accent: '#181717',
    scatterX: -104,
    scatterY: -32,
    rotate: -8,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <path
          fill="#181717"
          d="M32 9.5C19.6 9.5 9.5 19.7 9.5 32.1c0 10 6.4 18.5 15.2 21.5 1.1.2 1.5-.5 1.5-1.1v-4.3c-6.2 1.4-7.5-2.6-7.5-2.6-1-2.6-2.5-3.2-2.5-3.2-2-.9.2-.9.2-.9 2.2.1 3.4 2.3 3.4 2.3 2 3.3 5.1 2.4 6.4 1.8.2-1.4.8-2.4 1.4-2.9-5-.6-10.2-2.5-10.2-11 0-2.4.9-4.4 2.3-5.9-.2-.6-1-2.9.2-5.9 0 0 1.9-.6 6.2 2.2a21.7 21.7 0 0 1 11.2 0c4.3-2.8 6.2-2.2 6.2-2.2 1.2 3 .4 5.3.2 5.9 1.5 1.5 2.3 3.5 2.3 5.9 0 8.5-5.2 10.4-10.2 10.9.8.7 1.5 2.1 1.5 4.2v6.2c0 .6.4 1.3 1.5 1.1C48 50.6 54.5 42.1 54.5 32.1 54.5 19.7 44.4 9.5 32 9.5Z"
        />
      </svg>
    ),
  },
  {
    name: 'Figma',
    category: 'Technical',
    accent: '#a259ff',
    scatterX: -86,
    scatterY: 72,
    rotate: -10,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <rect x="20" y="8" width="12" height="16" rx="6" fill="#f24e1e" />
        <rect x="32" y="8" width="12" height="16" rx="6" fill="#ff7262" />
        <rect x="20" y="24" width="12" height="16" rx="6" fill="#a259ff" />
        <circle cx="38" cy="32" r="6" fill="#1abcfe" />
        <rect x="20" y="40" width="12" height="16" rx="6" fill="#0acf83" />
      </svg>
    ),
  },
  {
    name: 'Adobe CC',
    category: 'Technical',
    accent: '#da1f26',
    scatterX: -78,
    scatterY: 48,
    rotate: -6,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <defs>
          <linearGradient id="adobe-cc-gradient" x1="12" y1="10" x2="52" y2="54" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff5a5f" />
            <stop offset="1" stopColor="#c40018" />
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="48" height="48" rx="14" fill="url(#adobe-cc-gradient)" />
        <path
          d="M28.5 44.5c-6.3 0-11.5-5.1-11.5-11.5s5.2-11.5 11.5-11.5c3.2 0 6.2 1.3 8.3 3.5a9.8 9.8 0 0 0-4.7 1.4 6.4 6.4 0 1 0 0 13.2c2.1 0 3.9-1 5.1-2.4h3.7c-1.7 4.2-5.8 7.3-10.4 7.3Z"
          fill="none"
          stroke="#fff"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M38.7 44.5c-4.6 0-8.5-3.1-10.1-7.3h3.7c1.1 1.5 2.9 2.4 4.8 2.4a6.4 6.4 0 1 0 0-12.8c-1.9 0-3.7.9-4.8 2.4h-3.7c1.6-4.2 5.5-7.3 10.1-7.3 6.3 0 11.4 5 11.4 11.3 0 6.3-5.1 11.3-11.4 11.3Z"
          fill="none"
          stroke="#fff"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity=".95"
        />
      </svg>
    ),
  },
  {
    name: 'Firebase',
    category: 'Technical',
    accent: '#ff9100',
    scatterX: 88,
    scatterY: 58,
    rotate: 7,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <path fill="#ff9100" d="M18 50 30 12l6 11-18 27Z" />
        <path fill="#ffc400" d="m30 12 16 18-8 20-20 0 12-38Z" />
        <path fill="#ff6f00" d="m22 38 8-15 16 7-8 20z" />
      </svg>
    ),
  },
  {
    name: 'VS Code',
    category: 'Technical',
    accent: '#007acc',
    scatterX: 118,
    scatterY: 36,
    rotate: 9,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <path fill="#007acc" d="m46 8 10 5v38l-10 5-26-24z" />
        <path fill="#1f9cf0" d="M46 8 22 31l24 25V8Z" />
        <path fill="#1177bb" d="M10 22 22 31 10 42l-4-3V25z" />
      </svg>
    ),
  },
  {
    name: 'MySQL',
    category: 'Technical',
    accent: '#00758f',
    scatterX: 92,
    scatterY: -62,
    rotate: 8,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <path fill="#00758f" d="M18 42c4-8.4 10.2-17.2 18-20.8 4.1-1.9 8.3-2 12.5-.8-3.2.4-6 1.8-8.1 4.2 5.6.1 9.7 4.6 10.8 10.1-2.4-2.9-5.1-4.5-8.7-4.8 2.7 3.2 3.3 7.1 2.3 11.1-2-5.1-6-8.8-11.5-9.5 1.7 2 2.6 4.4 2.6 7.1-2.5-4.4-7.1-6.6-12.7-6.6-2 0-3.7.1-5.2 0Z" />
      </svg>
    ),
  },
  {
    name: 'QGIS',
    category: 'Technical',
    accent: '#589632',
    scatterX: -58,
    scatterY: 44,
    rotate: -6,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <circle cx="28.5" cy="29.5" r="15" fill="#589632" />
        <circle cx="28.5" cy="29.5" r="9.7" fill="#fff" />
        <path
          fill="#589632"
          d="M25.2 34.6V24.4h4.3c3.2 0 5.1 1.9 5.1 4.9 0 1.9-.8 3.2-2.1 4l2.9 3.3h-3.3l-2.2-2.5h-1.7v2.5Zm2.9-4.8h1.4c1.3 0 2-.6 2-1.7s-.7-1.7-2-1.7h-1.4Z"
        />
        <path
          fill="#589632"
          d="M39.4 39.8 50 50.3l-2.6 2.7-10.6-10.6Z"
        />
      </svg>
    ),
  },
  {
    name: 'CISCO',
    category: 'Technical',
    accent: '#2563eb',
    scatterX: 64,
    scatterY: -36,
    rotate: 5,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <g fill="#1d9bd1">
          <rect x="11" y="21" width="3.2" height="8" rx="1.6" />
          <rect x="17.5" y="16" width="3.2" height="18" rx="1.6" />
          <rect x="24" y="12" width="3.2" height="26" rx="1.6" />
          <rect x="30.5" y="9" width="3.2" height="32" rx="1.6" />
          <rect x="37" y="12" width="3.2" height="26" rx="1.6" />
          <rect x="43.5" y="16" width="3.2" height="18" rx="1.6" />
          <rect x="50" y="21" width="3.2" height="8" rx="1.6" />
        </g>
        <path
          d="M16 46.5c2.6-2.2 5.3-3.3 8.2-3.3 2.7 0 5 1 7.8 2.2 2.6 1.2 4.9 2.2 7.5 2.2 2.7 0 5.2-1 8.5-3.2"
          fill="none"
          stroke="#1d9bd1"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: 'React',
    category: 'Programming',
    accent: '#61dafb',
    scatterX: 74,
    scatterY: 82,
    rotate: 11,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <circle cx="32" cy="32" r="4.5" fill="#61dafb" />
        <ellipse cx="32" cy="32" rx="22" ry="9" fill="none" stroke="#61dafb" strokeWidth="3" />
        <ellipse cx="32" cy="32" rx="22" ry="9" fill="none" stroke="#61dafb" strokeWidth="3" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="22" ry="9" fill="none" stroke="#61dafb" strokeWidth="3" transform="rotate(120 32 32)" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    category: 'Programming',
    accent: '#3178c6',
    scatterX: 66,
    scatterY: -86,
    rotate: 10,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <rect x="10" y="10" width="44" height="44" rx="6" fill="#3178c6" />
        <path fill="#fff" d="M21 24h22v4h-9v23h-4V28h-9zm15.6 18.6c1.2 1.9 2.9 3 5.1 3 1.8 0 3-.9 3-2.2 0-1.6-1.2-2.1-3.3-3l-1.1-.5c-3.1-1.3-5.1-2.8-5.1-6 0-3 2.3-5.3 5.9-5.3 2.6 0 4.5.9 5.8 3.3l-3.2 2c-.7-1.3-1.5-1.9-2.6-1.9-1.2 0-2 .8-2 1.8 0 1.2.8 1.7 2.8 2.6l1.1.5c3.6 1.5 5.7 3 5.7 6.4 0 3.7-2.9 5.8-6.8 5.8-3.8 0-6.2-1.8-7.4-4.1z" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    category: 'Programming',
    accent: '#f7df1e',
    scatterX: -110,
    scatterY: 30,
    rotate: -7,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <rect x="10" y="10" width="44" height="44" rx="6" fill="#f7df1e" />
        <path fill="#1a1a1a" d="M27 44.2c.9 1.5 2 2.6 4.1 2.6 1.7 0 2.8-.8 2.8-2 0-1.4-1.1-1.9-3-2.7l-1-.4c-2.7-1.1-4.6-2.5-4.6-5.4 0-2.7 2.1-4.8 5.3-4.8 2.3 0 4 .8 5.2 2.9l-2.8 1.8c-.6-1.1-1.3-1.5-2.4-1.5s-1.8.7-1.8 1.5c0 1 .7 1.4 2.4 2.1l1 .4c3.2 1.4 5.1 2.7 5.1 5.8 0 3.3-2.6 5.1-6.1 5.1-3.5 0-5.8-1.7-6.9-3.9zm-12.8-.3 2.8-1.7c.5.9.9 1.7 2 1.7 1 0 1.7-.4 1.7-1.9V31.8h3.5V42c0 4-2.3 5.8-5.7 5.8-3 0-4.7-1.5-5.6-3.9z" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    category: 'Programming',
    accent: '#68a063',
    scatterX: -70,
    scatterY: -74,
    rotate: -9,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <path fill="#68a063" d="m32 8 19 11v26L32 56 13 45V19z" />
        <path fill="#fff" d="M32 17c-7.2 0-13 5.8-13 13 0 5.4 3.3 10 8.1 12l1.7-3.2c-3.3-1.2-5.6-4.4-5.6-8.1 0-4.8 3.9-8.8 8.8-8.8s8.8 4 8.8 8.8c0 3.7-2.3 6.9-5.6 8.1l1.7 3.2c4.8-2 8.1-6.6 8.1-12 0-7.2-5.8-13-13-13Z" />
      </svg>
    ),
  },
  {
    name: 'Express.js',
    category: 'Programming',
    accent: '#111111',
    scatterX: 116,
    scatterY: -26,
    rotate: 7,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <path fill="#111111" d="M12 24h40v4H12zm0 12h27v4H12zm0-6h40v4H12zm0 12h20v4H12zm31.6-4.2 8.4 8.2h-5.9l-5.4-5.4Z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'Programming',
    accent: '#06b6d4',
    scatterX: -96,
    scatterY: 60,
    rotate: -5,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <path fill="#06b6d4" d="M32 18c-8 0-13 4-15 12 3-4 6.5-5.5 10.5-4.4 2.3.6 4 2.3 5.9 4.2 3.1 3 6.7 6.5 13.6 6.5 8 0 13-4 15-12-3 4-6.5 5.5-10.5 4.4-2.3-.6-4-2.3-5.9-4.2C42.5 21.5 38.9 18 32 18Zm-15 18c-8 0-13 4-15 12 3-4 6.5-5.5 10.5-4.4 2.3.6 4 2.3 5.9 4.2 3.1 3 6.7 6.5 13.6 6.5 8 0 13-4 15-12-3 4-6.5 5.5-10.5 4.4-2.3-.6-4-2.3-5.9-4.2C27.5 39.5 23.9 36 17 36Z" />
      </svg>
    ),
  },
  {
    name: 'HTML',
    category: 'Programming',
    accent: '#e34f26',
    scatterX: 108,
    scatterY: 18,
    rotate: 6,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <path fill="#e34f26" d="M12 8h40l-4 44-16 4-16-4z" />
        <path fill="#ef652a" d="M32 52V12h16l-3.4 36z" />
        <path fill="#fff" d="m32 19 10.2.03.3-3.5H21.4l.8 9h14.8l-.5 5.5H22.7l.8 8.6 8.5 2.4v-4.8l-4.5-1.2-.3-3.5H40l1.2-12.5H32Z" />
      </svg>
    ),
  },
  {
    name: 'CSS',
    category: 'Programming',
    accent: '#1572b6',
    scatterX: -84,
    scatterY: 88,
    rotate: -12,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <path fill="#1572b6" d="M12 8h40l-4 44-16 4-16-4z" />
        <path fill="#33a9dc" d="M32 52V12h16l-3.4 36z" />
        <path fill="#fff" d="M32 19H21.8l.8 9H32v-3.7h-5.6l-.3-2.9H32Zm0 15.8-4.4-1.2-.3-3.2h-4l.6 6.1 8.1 2.2zM42.2 19H32v3.7h6.2l-.4 4.3H32v3.7h5.5l-.5 5.1-5 1.3v3.9l8.2-2.2 1.1-12.1.1-.8z" />
      </svg>
    ),
  },
  {
    name: 'Flutter',
    category: 'Programming',
    accent: '#47c5fb',
    scatterX: -72,
    scatterY: 96,
    rotate: -11,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <path fill="#47c5fb" d="M38.7 8 16 30.7l7.6 7.6L54 8z" />
        <path fill="#1ea7e1" d="M31.2 38.2 23.6 45.8 38.7 61h15.3z" />
        <path fill="#0a7ea4" d="M31.2 38.2 46.4 23h15.2L46.4 38.2 54 45.8H38.7z" />
      </svg>
    ),
  },
  {
    name: 'Dart',
    category: 'Programming',
    accent: '#0175c2',
    scatterX: 82,
    scatterY: -92,
    rotate: 12,
    logo: (
      <svg viewBox="0 0 64 64" aria-hidden="true" className={logoClassName}>
        <path fill="#00b4ab" d="M18 34 32 20h12L30 34z" />
        <path fill="#0175c2" d="M18 34h12l16 16H34z" />
        <path fill="#13b9fd" d="M30 34h16v16z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  exit: { opacity: 0, y: 14, transition: { duration: 0.22 } },
};

const getRowSizes = (count: number): number[] => {
  if (count <= 4) {
    return [count];
  }

  if (count <= 8) {
    const top = Math.ceil(count / 2);
    return [top, count - top];
  }

  if (count <= 15) {
    const top = Math.ceil(count * 0.42);
    const middle = Math.ceil((count - top) * 0.55);
    return [top, middle, count - top - middle];
  }

  const top = 7;
  const middle = 7;
  const bottom = count - top - middle;
  return [top, middle, bottom];
};

const chunkSkills = (items: Skill[]): Skill[][] => {
  const sizes = getRowSizes(items.length).filter((size) => size > 0);
  const rows: Skill[][] = [];
  let cursor = 0;

  for (const size of sizes) {
    rows.push(items.slice(cursor, cursor + size));
    cursor += size;
  }

  return rows;
};

const chunkSkillsMobile = (items: Skill[]): Skill[][] => {
  const rows: Skill[][] = [];
  const pattern = [3, 2, 1];
  let cursor = 0;
  let patternIndex = 0;

  while (cursor < items.length) {
    const remaining = items.length - cursor;
    const size = Math.min(pattern[patternIndex % pattern.length], remaining);
    rows.push(items.slice(cursor, cursor + size));
    cursor += size;
    patternIndex += 1;
  }

  return rows;
};

type SkillItemProps = {
  index: number;
  isMobile: boolean;
  skill: Skill;
  progress: MotionValue<number>;
};

const SkillItem: React.FC<SkillItemProps> = ({ index, isMobile, skill, progress }) => {
  const prefersReducedMotion = useReducedMotion();
  const shouldScatter = !prefersReducedMotion && !isMobile;
  const x = useTransform(progress, [0, 1], [shouldScatter ? skill.scatterX : 0, 0]);
  const y = useTransform(progress, [0, 1], [shouldScatter ? skill.scatterY : 0, 0]);
  const rotate = useTransform(progress, [0, 1], [shouldScatter ? skill.rotate : 0, 0]);
  const opacity = useTransform(progress, [0, 0.25, 1], shouldScatter ? [0.2, 0.75, 1] : [1, 1, 1]);
  const scale = useTransform(progress, [0, 1], [shouldScatter ? 0.9 : 1, 1]);

  return (
    <motion.article
      layout
      key={skill.name}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.28, delay: index * 0.02 }}
      whileHover={{ y: -6, scale: 1.015 }}
      style={{ x, y, rotate, opacity, scale }}
      className="portfolio-skill-card"
    >
      <div
        className="portfolio-skill-mark"
        style={{ '--skill-accent': skill.accent } as React.CSSProperties}
      >
        {skill.logo}
      </div>
      <div>
        <h3 className="portfolio-skill-name">{skill.name}</h3>
      </div>
    </motion.article>
  );
};

const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('All');
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 92%', 'center 38%'],
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const syncIsMobile = () => setIsMobile(mediaQuery.matches);

    syncIsMobile();
    mediaQuery.addEventListener('change', syncIsMobile);

    return () => mediaQuery.removeEventListener('change', syncIsMobile);
  }, []);

  const visibleSkills = useMemo(() => {
    if (activeFilter === 'All') {
      return skills;
    }

    return skills.filter((skill) => skill.category === activeFilter);
  }, [activeFilter]);

  const skillRows = useMemo(
    () => (isMobile ? chunkSkillsMobile(visibleSkills) : chunkSkills(visibleSkills)),
    [isMobile, visibleSkills],
  );

  return (
    <motion.section
      ref={sectionRef}
      id="skills"
      className="portfolio-section portfolio-skills-section px-6 py-20 md:px-10 lg:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      variants={containerVariants}
    >
      <div className="portfolio-skills-antigravity" aria-hidden="true">
        <Antigravity
          count={420}
          magnetRadius={11}
          ringRadius={10}
          waveSpeed={0.62}
          waveAmplitude={1.15}
          particleSize={1.1}
          lerpSpeed={0.085}
          color="#14b8ff"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0.26}
          depthFactor={0.95}
          pulseSpeed={3.1}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>
      <div className="mx-auto max-w-7xl">
        <motion.div variants={itemVariants} className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <h2 className="section-title mt-5">The Tech Behind My Work</h2>
          <p className="section-copy section-copy--center mt-6 w-full max-w-3xl">
            A mix of cloud, security, and development tools that support the path I&apos;m building:
            cloud computing first, cybersecurity second, and web development as a strong third lane.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`portfolio-skill-filter ${activeFilter === filter ? 'is-active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          variants={itemVariants}
          className={`portfolio-skills-pyramid relative z-10 mx-auto mt-12 max-w-6xl ${isMobile ? 'is-mobile' : ''}`}
        >
          <AnimatePresence mode="popLayout">
            {skillRows.map((row, rowIndex) => (
              <motion.div
                layout
                key={`${activeFilter}-row-${rowIndex}`}
                className={`portfolio-skills-row ${isMobile ? 'is-mobile' : ''}`}
                style={isMobile ? ({ '--skill-columns': row.length } as React.CSSProperties) : undefined}
              >
                {row.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill.name}
                    index={rowIndex * 10 + skillIndex}
                    isMobile={isMobile}
                    skill={skill}
                    progress={scrollYProgress}
                  />
                ))}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
