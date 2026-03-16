import { createContext, useContext, useState } from "react";
import { useAnimation } from "framer-motion";

import {
  FaJs,
  FaReact,
  FaCss3Alt,
  FaBootstrap,
  FaElementor,
  FaWordpress,
  FaGithub,
  FaShopify,
} from "react-icons/fa";

import { IoLogoHtml5 } from "react-icons/io";
import { RiTailwindCssFill, RiVercelFill, RiNodejsLine } from "react-icons/ri";
import { TbSeo, TbBrandRedux } from "react-icons/tb";
import { GrDomain } from "react-icons/gr";

import {
  SiTypescript,
  SiPhp,
  SiMysql,
  SiGodaddy,
  SiMongodb,
  SiGoogleads,
  SiMeta,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGooglecampaignmanager360,
  SiSemrush,
} from "react-icons/si";

import { DiPhotoshop } from "react-icons/di";

const ThemeContext = createContext();

// GLOBAL SKILLS DATA
const iconsData = [
  { skillName: "React Js", icon: FaReact, color: "#61DBFB" },
  { skillName: "Redux", icon: TbBrandRedux, color: "#764abc" },
  { skillName: "Javascript", icon: FaJs, color: "#F7DF1E" },
  { skillName: "TypeScript", icon: SiTypescript, color: "#007acc" },
  { skillName: "Tailwind CSS", icon: RiTailwindCssFill, color: "#38bdf8" },
  { skillName: "HTML", icon: IoLogoHtml5, color: "#E34C26" },
  { skillName: "CSS", icon: FaCss3Alt, color: "#264de4" },
  { skillName: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  { skillName: "PHP", icon: SiPhp, color: "#8892BF" },
  { skillName: "MySQL", icon: SiMysql, color: "#00749C" },
  { skillName: "SEO", icon: TbSeo, color: "#00A859" },
  { skillName: "Domain & Hosting", icon: GrDomain, color: "#6366F1" },
  { skillName: "Elementor", icon: FaElementor, color: "#FF7BE5" },
  { skillName: "WordPress", icon: FaWordpress, color: "#00749C" },
  { skillName: "Vercel", icon: RiVercelFill, color: "#000" },
  { skillName: "Git & GitHub", icon: FaGithub, color: "#000" },
  { skillName: "GoDaddy", icon: SiGodaddy, color: "#1bdbdb" },
  { skillName: "Node.js", icon: RiNodejsLine, color: "#84bf08" },
  { skillName: "MongoDB", icon: SiMongodb, color: "#08ee69" },
  { skillName: "Google Ads", icon: SiGoogleads, color: "#eeb808" },
  { skillName: "Meta Ads", icon: SiMeta, color: "#087fee" },
  { skillName: "Photoshop", icon: DiPhotoshop, color: "#002850e7" },
  { skillName: "Shopify", icon: FaShopify, color: "#95bf47" },
  { skillName: "Google Analytics", icon: SiGoogleanalytics, color: "#eeb808" },
  { skillName: "Google Tag Manager", icon: SiGoogletagmanager, color: "#087fee" },
  {
    skillName: "Campaign Manager 360",
    icon: SiGooglecampaignmanager360,
    color: "#002850e7",
  },
  { skillName: "SEMrush", icon: SiSemrush, color: "#f14e00" },
];

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const controls = useAnimation();

  const animationVariants = {
    fadeInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        controls,
        animationVariants,
        icons: iconsData, // GLOBAL ACCESS
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);