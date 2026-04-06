import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="portfolio-section px-6 py-20 md:px-10 lg:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={itemVariants} className="items-center gap-10 lg:grid lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
          <motion.div
            variants={itemVariants}
            className="portfolio-about-image-wrap mx-auto mb-10 w-full max-w-[680px] lg:mb-0"
          >
            <img
              src={heroImage}
              alt="Vince Iver P. Dalwampo"
              className="portfolio-about-image"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <span className="section-kicker">About</span>
            <h2 className="section-title max-w-lg">
              About Me
            </h2>
            <p className="section-copy max-w-2xl">
              I&apos;m Vince Iver P. Dalwampo, a full stack developer who enjoys building
              clean, useful, and visually polished digital experiences. I work across
              frontend interfaces, backend logic, and database-driven features to create
              applications that feel smooth for users and practical for real-world use.
            </p>
            <p className="section-copy max-w-2xl">
              My interests are rooted in modern web development, especially React,
              TypeScript, Tailwind CSS, and building interfaces that are responsive,
              maintainable, and easy to understand. I also work with backend tools,
              APIs, and databases to support complete full-stack solutions.
            </p>
            <p className="section-copy max-w-2xl">
              Alongside software development, I also have experience with GIS and mapping
              workflows using tools like QGIS. That mix of web, data, and spatial work
              gives me a broader approach when solving technical problems and designing
              practical systems.
            </p>
            <div className="portfolio-about-meta">
              <span className="portfolio-about-meta-label">Language</span>
              <p className="portfolio-about-meta-value">English, Filipino</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
