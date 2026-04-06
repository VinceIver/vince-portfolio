import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import heroImage from '../assets/hero.png';

const Home: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.25]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const arcShift = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      className="portfolio-section portfolio-hero flex min-h-screen items-center px-6 py-16 md:px-10 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)]">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="section-kicker"
          >
            Portfolio 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-[var(--portfolio-ink)] md:text-6xl lg:text-[5.4rem]"
          >
            Hello, I&apos;m <span className="text-[var(--portfolio-accent-strong)]">Vince Iver P. Dalwampo</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-6 max-w-2xl text-2xl font-semibold text-[var(--portfolio-ink)] md:text-4xl"
          >
            Full Stack Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-5 max-w-2xl text-base leading-8 text-[var(--portfolio-copy)] md:text-lg"
          >
            I build warm, polished web experiences with clean frontend systems,
            resilient backend logic, and interfaces that stay readable under real
            product pressure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.36 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              whileHover={{ y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              href="/cv.pdf"
              className="portfolio-button portfolio-button--accent"
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              href="#projects"
              className="portfolio-button portfolio-button--dark"
            >
              <span>View Projects</span>
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imageY, rotate: imageRotate }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-[620px] justify-center lg:justify-end"
        >
          <div className="portrait-shell">
            <motion.span style={{ y: arcShift }} className="portrait-arc portrait-arc--top" />
            <motion.span style={{ y: imageY }} className="portrait-arc portrait-arc--left" />
            <motion.span style={{ y: arcShift }} className="portrait-arc portrait-arc--bottom" />
            <span className="portrait-orbit portrait-orbit--outer" />
            <span className="portrait-orbit portrait-orbit--inner" />
            <span className="portrait-trace portrait-trace--one" />
            <span className="portrait-trace portrait-trace--two" />
            <span className="portrait-node portrait-node--one" />
            <span className="portrait-node portrait-node--two" />
            <div className="portrait-frame">
              <img
                src={heroImage}
                alt="Vince Iver P. Dalwampo portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
