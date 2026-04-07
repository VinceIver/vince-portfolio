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
      className="portfolio-section px-6 md:px-10 lg:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={itemVariants} className="items-center gap-12 lg:grid lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1fr)] lg:gap-14 xl:gap-20">
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

          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="section-title portfolio-about-title max-w-lg">
              About Me
            </h2>
            <p className="section-copy max-w-2xl">
              I&apos;m Vince Iver P. Dalwampo, a technology learner and builder with a primary
              interest in cloud computing, followed by cybersecurity, and then web development.
              I enjoy understanding how systems are deployed, secured, and experienced by users
              from end to end.
            </p>
            <p className="section-copy max-w-2xl">
              My current direction is centered on cloud foundations, infrastructure awareness,
              and security-minded problem solving. I&apos;m especially interested in how reliable
              services are designed, monitored, and protected in real-world environments.
            </p>
            <p className="section-copy max-w-2xl">
              Web development remains an important part of my toolkit, particularly with React,
              TypeScript, and modern frontend systems. It gives me a way to turn technical ideas
              into usable products while supporting my broader path in cloud and cybersecurity.
            </p>
            <div className="portfolio-about-meta portfolio-about-meta-spaced">
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
