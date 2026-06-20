import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const RESUME_PATH = "/KalaiSelvan-Resume.pdf";

export const WHATSAPP_URL = "https://wa.me/919344147003";

export const NAV_LINKS = [
  { id: 1, link: "skills", name: "SKILLS" },
  { id: 2, link: "projects", name: "PROJECTS" },
  { id: 3, link: "career", name: "CAREER" },
  { id: 4, link: "contact", name: "CONTACT ME" },
];

export const SOCIAL_LINKS = [
  { id: 1, icon: FaGithub, url: "https://github.com/kalaiselvan-mern", color: "hover:bg-gray-700 shadow-cyan-500/20", neon: "border-gray-500 text-white" },
  { id: 2, icon: FaLinkedin, url: "https://www.linkedin.com/in/kalai-kalai", color: "hover:bg-blue-600 shadow-blue-500/20", neon: "border-blue-500 text-blue-400" },
  { id: 3, icon: FaFacebook, url: "https://www.facebook.com/share/18WvAZ15YF/", color: "hover:bg-blue-800 shadow-blue-700/20", neon: "border-blue-700 text-blue-500" },
  { id: 4, icon: FaInstagram, url: "https://www.instagram.com/chellakutty_kalai?igsh=ZzZ4ZmVyc2JoMnBz", color: "hover:bg-pink-600 shadow-pink-500/20", neon: "border-pink-500 text-pink-400" },
  { id: 5, icon: FaWhatsapp, url: WHATSAPP_URL, color: "hover:bg-green-500 shadow-green-500/20", neon: "border-green-500 text-green-400" },
];
