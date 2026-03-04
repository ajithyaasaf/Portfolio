import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Full Stack Developer with 1+ year of production experience building scalable web applications, internal business tools, and e-commerce platforms. At Godiva Tech Solutions I've shipped 12+ live products — including a real-time Solar CRM with geo-fencing and payroll automation, a full-stack e-commerce platform with secure checkout and a complete admin system, and multiple SEO-optimised business sites. I write clean, maintainable code with React, Next.js, Node.js, and Firebase.`;

export const ABOUT_TEXT = `I'm Ajith Kannan — a Full Stack Developer based in Chennai, focused on building production-grade web applications that are fast, scalable, and conversion-optimised.

At Godiva Tech Solutions (Oct 2024–Present), I've shipped 12+ production websites and internal business tools. My work spans real-time CRMs with geo-fencing and payroll automation, full-stack e-commerce platforms with secure payment integration and complete admin tooling, a React Native mobile app for field sales digitisation, and multiple SEO-optimised business sites with structured data and Core Web Vitals tuning.

I hold an MCA from Jamal Mohamed College and a BSc CS from MIET Arts and Science. I care deeply about the things that don't show on the surface — query performance, clean architecture, and UI/UX details that make users stick around. I enjoy turning complex business requirements into maintainable systems others can build on top of.

Outside of work — you'll find me exploring system design concepts, reading about frontend architecture patterns, and occasionally helping people build their digital presence.`;

export const STATS = [
  { value: "12+", label: "Production Websites Shipped" },
  { value: "1 yr", label: "Industry Experience" },
  { value: "MCA", label: "Jamal Mohamed College" },
  { value: "Full Stack", label: "React · Next.js · Node · Firebase" },
];

export const EXPERIENCES = [
  {
    Month: "Oct 2024 – Present",
    role: "Full Stack Developer",
    company: "Godiva Tech Solutions · Madurai",
    description: `Shipped 12+ production websites using React, Next.js, and Firebase — with consistent focus on UI/UX quality, load performance, and technical SEO.
Designed and built a Solar CRM with real-time geo-fencing, attendance tracking, payroll automation, quotation management, and invoice generation — architected for multi-branch enterprise use.
Built TNtrends, a full-stack e-commerce platform with a structured product catalog, Razorpay-integrated secure checkout, order management workflows, and a comprehensive admin dashboard designed to scale.
Implemented technical SEO across all deliverables — metadata optimisation, structured data (JSON-LD), sitemap generation, and Core Web Vitals tuning for measurable ranking improvements.
Developed and deployed a React Native mobile app to digitise field sales order entry, replacing a manual paper-based process with a real-time synced mobile workflow.`,
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Firebase", "MongoDB", "Razorpay", "React Native", "Tailwind CSS", "SEO"],
  },
  {
    Month: "Apr 2024 – Jul 2024",
    role: "Full Stack Developer Intern",
    company: "Datadna Technologies · Remote",
    description: `Built a complete physiotherapy clinic website with a real-time appointment booking system and an admin management dashboard.
Integrated Firebase Authentication and Realtime Database for persistent user sessions and live data sync across devices.
Achieved a 98% responsiveness score through mobile-first component layouts and adaptive UI structures.
Designed interactive UI with entrance animations and microinteractions to guide user attention and improve engagement.`,
    technologies: ["React", "Firebase", "Node.js", "Figma", "JavaScript", "Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "Chickmate — Shop Management System",
    image: project1,
    badge: "Personal Project",
    description:
      "End-to-end shop management platform with inventory tracking, order management, automated invoice generation, and billing workflows. Built with a scalable Node.js backend, Firebase real-time sync, and a TypeScript React frontend — designed to handle high-frequency transactions without bottlenecks.",
    projectlink: "https://chickmate.netlify.app/",
    githublink: "https://github.com/ajithyaasaf/Chickmate",
    technologies: ["React", "TypeScript", "Node.js", "Firebase", "Tailwind CSS"],
  },
  {
    title: "TNtrends — E-Commerce Platform",
    image: project2,
    badge: "Client Project",
    description:
      "Full-featured e-commerce platform built for a retail client — with a structured product catalog, Razorpay secure checkout with webhook-based order confirmation, role-based admin tooling, and SEO-optimised pages. Architected with indexed MongoDB queries and a stateless API layer for reliable performance under load.",
    projectlink: "https://tntrends.in/",
    githublink: null,
    technologies: ["Next.js", "Express.js", "MongoDB", "Razorpay", "Tailwind CSS"],
  },
  {
    title: "Physiotherapy Clinic Website",
    image: project3,
    badge: "Internship",
    description:
      "Complete clinic website with real-time appointment booking, patient record management, and an admin dashboard — built with Firebase Auth and Realtime Database for live data synchronisation. Achieved 98% responsiveness through mobile-first adaptive layouts.",
    projectlink: "https://physiotherapy-c42fd.web.app/",
    githublink: null,
    technologies: ["React", "Firebase", "Node.js", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Anna Nagar, Chennai — Tamil Nadu",
  phoneNo: "+91 93615 77742",
  email: "ajithkannan.ag@gmail.com",
};
