import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `A MERN Stack Developer is a versatile and valuable role in modern web development, leveraging a cohesive set of technologies to build dynamic and scalable web applications. They must possess a blend of front-end and back-end skills, a good understanding of database management, and the ability to work in a collaborative development environment.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I completed my MCA and have worked with a variety of technologies, including React, Node.js, Express.js, and MongoDB. My journey in web development began with a deep curiosity for how things work and has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    Month: "APR-24 - JUL-24",
    role: "Junior Full Stack Developer",
    company: "DATADNA,Chennai",
    description: ` Developed and launched a comprehensive website for a physiotherapy clinic and Yoga Academy, enhancing user interaction and providing vital information.
 Integrated Firebase for real-time data storage and user authentication.
 Created a user-friendly website with engaging,responsive designs.
 Integrated various animations and interactive features to enhance user experience.`,
    technologies: ["JavaScript", "React.js", "Node Js", "MongoDB","Firebase","Figma"],
  }
/*   {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "MySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "PostgreSQL"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "PayPal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "SQLite"],
  }, */
];

export const PROJECTS = [
  {
    title: "BOOK STORE",
    image: project1,
    description: " This is a Book Store MERN Stack application showcasing my skills by implementing all CRUD operations using MongoDB, Express, React,and Node.js.",
    projectlink: "https://book-store23.netlify.app/",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "PHYSIO THERAPY",
    image: project2,
    description: "This is Physio Theraphy Clinic website Build for client during Internship Program in DATADNA using HTML, CSS, javascript, React Js,Bootstrap,Node Js, Firebase.",
    projectlink: "https://physiotherapy-c42fd.web.app/",
    technologies: ["React", "Node.js", "Express.js", "Firebase"],
  },
  {
    title: "DENTA CARE CLINIC",
    image: project3,
    description: " This is Dental-care websiteBuild for client during Internship Program in DATADNA using HTML, CSS, javascript, React Js, Bootstrap, Firebase.",
    projectlink: "https://dentacareintern.web.app/", 
    technologies: ["React", "Bootstrap","Firebase"],
  },
];

export const CONTACT = {
  address: "Cumbum - Theni - Tamilnadu",
  phoneNo: "+91 8610603114",
  email: "haarissams02@gmail.com",
};
