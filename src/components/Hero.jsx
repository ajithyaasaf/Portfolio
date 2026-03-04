import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import profileImg from "../assets/Profile.jpg";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const imgVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.3 },
  },
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-12 lg:mb-8">
      <div className="flex flex-wrap items-center">
        {/* Left — Text Content */}
        <div className="w-full lg:w-3/5">
          <div className="flex flex-col items-center lg:items-start">
            {/* Available badge */}
            <motion.div
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="mb-4 flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400"
            >
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Open to new opportunities
            </motion.div>

            <motion.h1
              variants={container(0.1)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-5xl font-bold tracking-tight lg:mt-4 lg:text-7xl"
            >
              Ajith Kannan
            </motion.h1>

            <motion.span
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-2xl font-semibold tracking-tight text-transparent"
            >
              Full Stack Developer · React · Next.js · Node.js
            </motion.span>

            <motion.p
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="my-6 max-w-xl py-2 font-light leading-relaxed tracking-tight text-neutral-400"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://drive.google.com/file/d/19yBbeOdj0x2NMz51ym_zQ35x84Zc9m3z/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
              >
                <FaDownload className="text-xs" />
                Download Resume
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-lg border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-300 transition-all hover:border-cyan-500 hover:text-cyan-400"
              >
                View Projects
                <FaArrowRight className="text-xs" />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="mt-6 flex gap-5"
            >
              <a
                href="https://www.linkedin.com/in/ajith-kannan-ab4175213/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-400 transition hover:text-blue-400"
              >
                <FaLinkedin className="text-lg" /> LinkedIn
              </a>
              <a
                href="https://github.com/ajithyaasaf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white"
              >
                <FaGithub className="text-lg" /> GitHub
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right — Profile Photo */}
        <motion.div
          variants={imgVariant}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-2/5 flex justify-center mt-12 lg:mt-0"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 blur-2xl opacity-30 scale-110" />
            <img
              src={profileImg}
              alt="Ajith Kannan — Full Stack Developer"
              className="relative z-10 w-56 h-56 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-neutral-800 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
