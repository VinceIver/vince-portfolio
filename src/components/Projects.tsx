import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers3, MonitorSmartphone, ServerCog } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const projects = [
  {
    title: 'Cloud Portfolio Experience',
    description:
      'A personal platform that presents cloud, security, and development strengths through a responsive and polished interface.',
    tag: 'Web Dev',
    icon: MonitorSmartphone,
  },
  {
    title: 'Security-Focused Dashboard',
    description:
      'An internal-style dashboard concept focused on clear status visibility, operational awareness, and security-minded design decisions.',
    tag: 'Cybersecurity',
    icon: Layers3,
  },
  {
    title: 'Cloud Service Architecture',
    description:
      'A concept for reliable service delivery, deployment thinking, and backend structure shaped by cloud-oriented fundamentals.',
    tag: 'Cloud',
    icon: ServerCog,
  },
];

const Projects: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="portfolio-section px-6 md:px-10 lg:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={itemVariants} className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <motion.div variants={itemVariants}>
            <h2 className="section-title max-w-2xl">
              Projects and concepts that reflect my cloud-first direction.
            </h2>
          </motion.div>
          <motion.p variants={itemVariants} className="section-copy max-w-xl max-md:mx-auto">
            A selection of work that connects cloud thinking, cybersecurity awareness, and web
            implementation into practical portfolio-ready ideas.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="portfolio-project-card"
            >
              <div className="flex items-center justify-between">
                <div className="portfolio-icon-badge">
                  <project.icon size={22} />
                </div>
                <span className="portfolio-tag">{project.tag}</span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold leading-tight text-[var(--portfolio-ink)]">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--portfolio-copy)]">
                {project.description}
              </p>
              <motion.a whileHover={{ x: 4 }} href="#contact" className="portfolio-inline-link mt-8">
                <span>Discuss this kind of work</span>
                <ArrowUpRight size={18} />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
