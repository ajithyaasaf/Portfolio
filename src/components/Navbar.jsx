import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex flex-col sm:flex-row items-center justify-between py-6">
      {/* Left Side - Email and Phone Number */}
      <div className="flex flex-col sm:flex-row flex-shrink-0 items-center gap-4 sm:gap-8">
        <a
          href="mailto:ajithkannan.ag@gmail.com"
          className="text-sm sm:text-lg text-white hover:text-blue-600 transition-colors duration-300"
        >
          ajithkannan.ag@gmail.com
        </a>
        <p className="text-sm sm:text-lg text-white hover:text-blue-600 transition-colors duration-300 cursor-pointer">
          9361577742
        </p>
      </div>

      {/* Right Side - Social Icons */}
      <div className="mt-4 sm:mt-0 flex items-center justify-center gap-4 text-xl sm:text-2xl">
        <a
          href="https://www.linkedin.com/in/ajith-kannan-ab4175213/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ajithyaasaf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-white hover:text-gray-700 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/ajithkannan__/?igsh=MWF0MmEycGE0MWpl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="text-pink-600 hover:text-pink-700 transition-colors duration-300"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
