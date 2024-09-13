import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiFigma } from "react-icons/si";
import { FaNodeJs, FaServer } from "react-icons/fa"; 
import { DiNodejsSmall } from "react-icons/di"; // Using node server icon for Express.js
import { motion } from 'framer-motion';

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Tech Stacks</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        
        {/* MongoDB */}
        <motion.div
          variants={iconVarients(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <SiMongodb className="text-7xl text-green-500" />
          <p className="mt-2 text-lg font-medium">MongoDB</p>
        </motion.div>
        
        {/* Express.js (Node.js icon as placeholder) */}
        <motion.div
          variants={iconVarients(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <DiNodejsSmall className="text-7xl text-gray-600" />
          <p className="mt-2 text-lg font-medium">Express.js</p>
        </motion.div>

        {/* React.js */}
        <motion.div
          variants={iconVarients(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="mt-2 text-lg font-medium">React.js</p>
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVarients(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <FaNodeJs className="text-7xl text-green-400" />
          <p className="mt-2 text-lg font-medium">Node.js</p>
        </motion.div>

        {/* Figma */}
        <motion.div
          variants={iconVarients(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <SiFigma className="text-7xl text-pink-600" />
          <p className="mt-2 text-lg font-medium">Figma</p>
        </motion.div>

        {/* Server (General Icon) */}
        <motion.div
          variants={iconVarients(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
        >
          <FaServer className="text-7xl text-gray-500" />
          <p className="mt-2 text-lg font-medium">Server</p>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Technologies;
