import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const contactItems = [
  {
    icon: <FiMapPin className="text-cyan-400 text-xl flex-shrink-0 mt-0.5" />,
    label: "Location",
    value: "Anna Nagar, Chennai — Tamil Nadu",
    href: null,
  },
  {
    icon: <FiPhone className="text-cyan-400 text-xl flex-shrink-0 mt-0.5" />,
    label: "Phone",
    value: "+91 93615 77742",
    href: "tel:+919361577742",
  },
  {
    icon: <FiMail className="text-cyan-400 text-xl flex-shrink-0 mt-0.5" />,
    label: "Email",
    value: "ajithkannan.ag@gmail.com",
    href: "mailto:ajithkannan.ag@gmail.com",
  },
  {
    icon: <FiLinkedin className="text-cyan-400 text-xl flex-shrink-0 mt-0.5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/ajith-kannan-ab4175213",
    href: "https://www.linkedin.com/in/ajith-kannan-ab4175213/",
  },
];

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-24" id="contact">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get In <span className="text-neutral-500">Touch</span>
      </motion.h1>

      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* Left — Contact Info */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Let's Work Together</h2>
            <p className="text-neutral-400 leading-relaxed text-sm">
              I'm currently open to full-time roles and freelance projects. Whether you have a product to build,
              a site to improve, or just want to say hi — my inbox is always open.
            </p>
          </div>

          <div className="space-y-4">
            {contactItems.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                {item.icon}
                <div>
                  <p className="text-xs text-neutral-500 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-neutral-300">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/ajithyaasaf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:border-neutral-500 hover:text-white transition-all"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ajith-kannan-ab4175213/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:border-blue-500 hover:text-blue-400 transition-all"
            >
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right — Contact Form */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold text-white mb-5">Send a Message</h3>
          <form action="https://formspree.io/f/xpzvkbjy" method="POST" className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-cyan-500 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-cyan-500 transition-colors"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              required
              className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-cyan-500 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
