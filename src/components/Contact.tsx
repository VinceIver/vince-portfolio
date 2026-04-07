import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Smartphone } from 'lucide-react';

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

const LinkedInIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="h-[18px] w-[18px]">
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 10.11H5.67V18H8.34V10.11ZM7 5.88A1.56 1.56 0 0 0 5.44 7.44C5.44 8.3 6.13 9 6.97 9H7C7.86 9 8.56 8.3 8.56 7.44A1.56 1.56 0 0 0 7 5.88ZM18.33 13.19C18.33 10.77 16.82 9.93 15.53 9.93C14.05 9.93 13.39 10.74 13.15 11.32V10.11H10.49C10.52 10.91 10.49 18 10.49 18H13.15V13.59C13.15 13.35 13.17 13.11 13.24 12.95C13.43 12.48 13.86 11.99 14.59 11.99C15.54 11.99 15.92 12.72 15.92 13.79V18H18.58V13.5C18.58 13.39 18.58 13.29 18.57 13.19H18.33Z" />
  </svg>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <motion.section
      id="contact"
      className="portfolio-section px-6 pb-28 md:px-10 lg:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -6 }}
          className="portfolio-contact-panel"
        >
          <h2 className="section-title max-w-md">Let&apos;s connect on cloud, security, and modern web work.</h2>
          <p className="section-copy max-w-md">
            If you&apos;re looking for someone growing in cloud computing, interested in cybersecurity,
            and capable of building polished web experiences, send a message and let&apos;s talk.
          </p>

          <div className="portfolio-contact-list mt-10">
            <motion.div whileHover={{ x: 4 }} className="portfolio-contact-item">
              <span className="portfolio-contact-icon">
                <Mail size={18} />
              </span>
              <span>vince.iver17@gmail.com</span>
            </motion.div>
            <motion.div whileHover={{ x: 4 }} className="portfolio-contact-item">
              <span className="portfolio-contact-icon">
                <Smartphone size={18} />
              </span>
              <span>+63 960 021 9382</span>
            </motion.div>
            <motion.a
              whileHover={{ x: 4 }}
              href="https://www.linkedin.com/in/vincedalwampo/"
              target="_blank"
              rel="noreferrer"
              className="portfolio-contact-item portfolio-contact-link"
            >
              <span className="portfolio-contact-icon">
                <LinkedInIcon />
              </span>
              <span>linkedin.com/in/vincedalwampo</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.form
          variants={itemVariants}
          whileHover={{ y: -4 }}
          onSubmit={handleSubmit}
          className="portfolio-form-panel"
        >
          <label className="portfolio-field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>
          <label className="portfolio-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="portfolio-field">
            <span>Project brief</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Outline the scope, stack, or problem you want solved."
              required
            />
          </label>
          <button type="submit" className="portfolio-button portfolio-button--accent w-full justify-center">
            <Send size={18} />
            <span>Send message</span>
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
