import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, BadgeCheck, ExternalLink } from 'lucide-react';

type CredentialKind = 'Certification' | 'Badge';

type CredentialImage = {
  title: string;
  kind: CredentialKind;
  imageSrc?: string;
  href?: string;
};

const credentialImages: CredentialImage[] = [
  { title: 'AWS Cloud Practitioner', kind: 'Certification' },
  { title: 'Responsive Web Design', kind: 'Certification' },
  { title: 'JavaScript Algorithms and Data Structures', kind: 'Certification' },
  { title: 'CCNA: Introduction to Networks', kind: 'Badge' },
  { title: 'Cisco Cybersecurity Essentials', kind: 'Badge' },
  { title: 'Frontend Development Libraries', kind: 'Badge' },
];

const certifications = credentialImages.filter((item) => item.kind === 'Certification');
const badges = credentialImages.filter((item) => item.kind === 'Badge');

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

type CredentialRowProps = {
  icon: React.ReactNode;
  items: CredentialImage[];
  label: string;
  reverse?: boolean;
};

const CredentialRow: React.FC<CredentialRowProps> = ({ icon, items, label, reverse = false }) => {
  const prefersReducedMotion = useReducedMotion();
  const marqueeItems = [...items, ...items];

  return (
    <div className="space-y-4">
      <div className="portfolio-credential-row-header">
        <span className="portfolio-credential-row-icon">{icon}</span>
        <span className="portfolio-credential-row-label">{label}</span>
      </div>

      <div
        className={`portfolio-credential-marquee ${prefersReducedMotion ? 'is-reduced-motion' : ''}`}
      >
        <div
          className={`portfolio-credential-track ${reverse ? 'is-reverse' : ''}`}
        >
          {marqueeItems.map((item, index) => {
            const content = (
              <article className="portfolio-credential-image-card">
                <div className="portfolio-credential-image-frame">
                  {item.imageSrc ? (
                    <img
                      src={item.imageSrc}
                      alt={item.title}
                      className="portfolio-credential-image"
                    />
                  ) : (
                    <div className="portfolio-credential-placeholder">
                      <span className="portfolio-credential-placeholder-label">{item.kind}</span>
                      <strong>{item.title}</strong>
                    </div>
                  )}
                </div>

                <div className="portfolio-credential-image-footer">
                  <p className="portfolio-credential-image-title">{item.title}</p>
                  {item.href ? (
                    <span className="portfolio-inline-link">
                      <span>Open</span>
                      <ExternalLink size={15} />
                    </span>
                  ) : null}
                </div>
              </article>
            );

            return item.href ? (
              <a
                key={`${item.title}-${index}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={`${item.title}-${index}`} className="block">
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  return (
    <motion.section
      id="certifications"
      className="portfolio-section px-6 md:px-10 lg:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl space-y-6">
            <h2 className="section-title">Certifications and badges that reflect my learning journey.</h2>
            <p className="section-copy max-w-2xl">
              A growing collection of credentials across cloud fundamentals, cybersecurity,
              networking, and supporting development skills.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="portfolio-credential-shell mt-10 space-y-8">
          <div className="portfolio-credential-glow" aria-hidden="true" />
          <div className="relative z-10 space-y-8 py-6">
            <CredentialRow
              icon={<Award size={18} />}
              items={certifications}
              label="Certificates"
            />
            <CredentialRow
              icon={<BadgeCheck size={18} />}
              items={badges}
              label="Badges"
              reverse
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Certifications;
