import { RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiMongodb, SiFigma, SiTypescript, SiFirebase, SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { DiNodejsSmall } from "react-icons/di";
import { motion } from "framer-motion";

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

const techs = [
  { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, label: "React.js", duration: 2.5 },
  { icon: <SiNextdotjs className="text-7xl text-white" />, label: "Next.js", duration: 3 },
  { icon: <SiTypescript className="text-7xl text-blue-500" />, label: "TypeScript", duration: 3.5 },
  { icon: <FaNodeJs className="text-7xl text-green-400" />, label: "Node.js", duration: 4 },
  { icon: <DiNodejsSmall className="text-7xl text-gray-400" />, label: "Express.js", duration: 4.5 },
  { icon: <SiFirebase className="text-7xl text-yellow-400" />, label: "Firebase", duration: 5 },
  { icon: <SiMongodb className="text-7xl text-green-500" />, label: "MongoDB", duration: 5.5 },
  { icon: <RiTailwindCssLine className="text-7xl text-sky-400" />, label: "Tailwind CSS", duration: 6 },
  { icon: <TbBrandReactNative className="text-7xl text-cyan-300" />, label: "React Native", duration: 6.5 },
  { icon: <SiFigma className="text-7xl text-pink-500" />, label: "Figma", duration: 7 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24" id="skills">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Tech <span className="text-neutral-500">Stack</span>
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVarients(tech.duration)}
            initial="initial"
            animate="animate"
            className="group rounded-2xl border-4 border-neutral-800 p-4 text-center transition-all hover:border-neutral-600"
          >
            {tech.icon}
            <p className="mt-2 text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">{tech.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
