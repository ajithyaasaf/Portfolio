import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <motion.footer
      className="bg-primary py-8 px-4 sm:px-8 md:px-16 lg:px-24"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Brand / Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-gray-200 font-bold text-2xl">Ajith Kannan</h2>
          <p className="text-gray-400 mt-2">
            © {new Date().getFullYear()} Ajith Kannan. All rights reserved.
          </p>
        </div>

        {/* Column 2: Links / Navigation */}
        <div className="flex flex-col items-center md:items-center text-center">
          <h3 className="text-gray-200 font-semibold text-lg">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>
              <a href="#about" className="hover:text-gray-300 transition-colors duration-300">About Me</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-300 transition-colors duration-300">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300 transition-colors duration-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Links */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-gray-200 font-semibold text-lg">Follow Me</h3>
          <div className="mt-2 flex space-x-6 justify-center md:justify-end">
            <a
              href="https://www.linkedin.com/in/ajith-kannan-ab4175213/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-cyan-400 hover:text-cyan-500 transition-colors duration-300"
            >
              <AiFillLinkedin size={28} />
            </a>
            <a
              href="https://github.com/ajithyaasaf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-gray-400 transition-colors duration-300"
            >
              <AiFillGithub size={28} />
            </a>
            <a
              href="https://www.instagram.com/ajithkannan__"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-pink-600 hover:text-pink-700 transition-colors duration-300"
            >
              <AiFillInstagram size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom: Centered for small screens */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        Built with 💻 by Ajith Kannan
      </div>
    </motion.footer>
  );
};

export default Footer;
