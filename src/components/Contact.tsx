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
      className="portfolio-section px-6 py-20 pb-28 md:px-10 lg:px-16"
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
          <span className="section-kicker">Contact</span>
          <h2 className="section-title max-w-md">Let&apos;s build something useful and well-finished.</h2>
          <p className="section-copy max-w-md">
            If you want a portfolio, a product surface, or a cleaner frontend/backend handoff,
            send the brief and I&apos;ll reply with a practical next step.
          </p>

          <div className="mt-8 space-y-4">
            <motion.div whileHover={{ x: 4 }} className="portfolio-contact-item">
              <Mail size={18} />
              <span>vince.iver17@gmail.com</span>
            </motion.div>
            <motion.div whileHover={{ x: 4 }} className="portfolio-contact-item">
              <Smartphone size={18} />
              <span>+63 960 021 9382</span>
            </motion.div>
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
