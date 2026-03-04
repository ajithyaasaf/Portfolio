import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-16" id="projects">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Featured <span className="text-neutral-500">Projects</span>
      </motion.h1>

      <div className="max-w-5xl mx-auto space-y-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col lg:flex-row gap-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm transition-all hover:border-neutral-700"
          >
            {/* Project image */}
            <div className="w-full lg:w-48 flex-shrink-0">
              {project.projectlink ? (
                <a href={project.projectlink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-36 lg:h-32 rounded-xl object-cover transition-transform group-hover:scale-[1.02]"
                  />
                </a>
              ) : (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-36 lg:h-32 rounded-xl object-cover"
                />
              )}
            </div>

            {/* Project info */}
            <div className="flex flex-1 flex-col justify-between">
              <div>
                {/* Title + badge */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${project.badge === "Client Project"
                      ? "bg-purple-500/15 text-purple-400 border border-purple-500/30"
                      : project.badge === "Personal Project"
                        ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                        : "bg-neutral-700/60 text-neutral-400 border border-neutral-600"
                    }`}>
                    {project.badge}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-neutral-400 mb-4">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-300 border border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action links */}
              <div className="mt-4 flex gap-4">
                {project.projectlink && (
                  <a
                    href={project.projectlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <FiExternalLink className="text-base" />
                    Live Demo
                  </a>
                )}
                {project.githublink && (
                  <a
                    href={project.githublink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                  >
                    <FiGithub className="text-base" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
