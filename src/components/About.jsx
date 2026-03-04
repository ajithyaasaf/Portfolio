import aboutImg from "../assets/Profile.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-16" id="about">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-wrap gap-10 lg:gap-0">
        {/* Photo */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-2/5 flex justify-center items-start lg:p-8"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500/30 via-purple-500/20 to-pink-500/10 blur-xl" />
            <img
              className="relative rounded-2xl w-full max-w-xs object-cover shadow-2xl"
              src={aboutImg}
              alt="Ajith Kannan"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-3/5 flex flex-col justify-center"
        >
          {/* Bio paragraphs */}
          {ABOUT_TEXT.split("\n\n").map((para, i) => (
            <p key={i} className={`text-neutral-300 leading-relaxed mb-4 ${i === 0 ? "text-lg font-light" : "text-base text-neutral-400"}`}>
              {para}
            </p>
          ))}

          {/* Highlight chips */}
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "React / Next.js",
              "Node.js / Express",
              "Firebase / MongoDB",
              "TypeScript",
              "Tailwind CSS",
              "Technical SEO",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
