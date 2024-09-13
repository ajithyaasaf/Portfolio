import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl text-white">Experience</h1>
      <div className="space-y-12">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative rounded-lg bg-neutral-900 shadow-lg p-8"
          >
            <div className="absolute top-4 right-4 text-xs text-neutral-400">
              {experience.Month || experience.year}
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-white">
                {experience.role}
              </h2>
              <h3 className="text-xl text-neutral-400">{experience.company}</h3>
            </div>
            <ul className="list-disc list-inside mb-6 text-neutral-300">
              {experience.description.split("\n").map((line, i) => (
                <li key={i} className="mb-2">
                  {line}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {experience.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="rounded bg-neutral-800 px-3 py-1 text-sm text-neutral-300 border border-cyan-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
