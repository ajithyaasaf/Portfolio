import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";
import { FiBriefcase } from "react-icons/fi";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-24" id="experience">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Work <span className="text-neutral-500">Experience</span>
      </motion.h1>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent hidden lg:block" />

        <div className="space-y-10">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative flex gap-6 lg:gap-10"
            >
              {/* Timeline icon */}
              <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-500/50 bg-neutral-900 text-cyan-400 shadow-lg shadow-cyan-500/10">
                  <FiBriefcase className="text-lg" />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-lg backdrop-blur-sm hover:border-neutral-700 transition-all">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-white">{experience.role}</h2>
                    <h3 className="text-sm font-medium text-cyan-400 mt-0.5">{experience.company}</h3>
                  </div>
                  <span className="flex-shrink-0 rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 text-xs text-neutral-400">
                    {experience.Month || experience.year}
                  </span>
                </div>

                {/* Description */}
                <ul className="mb-5 space-y-2">
                  {experience.description.split("\n").filter(l => l.trim()).map((line, i) => (
                    <li key={i} className="flex gap-2 text-sm text-neutral-300 leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                      {line.trim()}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-300 border border-neutral-700 hover:border-cyan-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
