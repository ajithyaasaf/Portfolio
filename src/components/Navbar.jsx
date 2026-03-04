import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="mb-16 flex flex-col sm:flex-row items-center justify-between py-6 border-b border-neutral-900">
      {/* Left — Nav Links */}
      <div className="flex flex-wrap items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-neutral-400 transition-colors duration-200 hover:text-cyan-400"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right — Social Icons + Email */}
      <div className="mt-4 sm:mt-0 flex items-center gap-5">
        <a
          href="mailto:ajithkannan.ag@gmail.com"
          className="hidden sm:block text-sm text-neutral-400 hover:text-cyan-400 transition-colors duration-200"
        >
          ajithkannan.ag@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/ajith-kannan-ab4175213/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-xl text-blue-500 hover:text-blue-400 transition-colors duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ajithyaasaf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-xl text-neutral-300 hover:text-white transition-colors duration-200"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
