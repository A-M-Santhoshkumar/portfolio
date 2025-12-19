import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaJs,
  FaReact,
  FaCss3Alt,
  FaBootstrap,
  FaElementor,
  FaWordpress,
  FaGithub,
} from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { TbSeo, TbBrandRedux } from "react-icons/tb";
import { GrDomain } from "react-icons/gr";
import { SiTypescript, SiPhp, SiMysql } from "react-icons/si";
import { SiGodaddy } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";



import Title from "../Title";

gsap.registerPlugin(ScrollTrigger);

const data = [
  { skillName: "React Js", icons: FaReact, color: "#61DBFB" },
  { skillName: "Redux ", icons: TbBrandRedux, color: "#764abc" },
  { skillName: "Javascript", icons: FaJs, color: "#F7DF1E" },
  { skillName: "TypeScript", icons: SiTypescript, color: "#007acc" },
  { skillName: "Tailwind CSS", icons: RiTailwindCssFill, color: "#38bdf8" },
  { skillName: "HTML", icons: IoLogoHtml5, color: "#E34C26" },
  { skillName: "CSS", icons: FaCss3Alt, color: "#264de4" },
  { skillName: "Bootstrap", icons: FaBootstrap, color: "#7952B3" },
  { skillName: "PHP", icons: SiPhp, color: "#8892BF" },
  { skillName: "MySql", icons: SiMysql, color: "#00749C" },
  { skillName: "SEO", icons: TbSeo, color: "#00A859" },
  { skillName: "Domain and Hosting", icons: GrDomain, color: "#6366F1" },
  { skillName: "WordPress ", icons: FaWordpress, color: "#00749C" },
  { skillName: "Vercel ", icons: RiVercelFill, color: "#000" },
  { skillName: "Git and Github", icons: FaGithub, color: "#000" },
  { skillName: "Godaddy", icons: SiGodaddy, color: "#1bdbdb" },
  { skillName: "Node", icons: RiNodejsLine, color: "#84bf08" },
   { skillName: "Mongodb", icons: SiMongodb, color: "#08ee69" },
];

const project = [
  {
    skillName: "Front End",
    icons: [
      { icon: IoLogoHtml5, color: "#E34C26" },
      { icon: FaCss3Alt, color: "#264de4" },
      { icon: FaBootstrap, color: "#7952B3" },
      { icon: FaJs, color: "#F7DF1E" },
    ],
  },
  {
    skillName: "React JS",
    icons: [
      { icon: FaReact, color: "#61DBFB" },
      { icon: RiTailwindCssFill, color: "#38bdf8" },
      { icon: TbBrandRedux, color: "#764abc" },
      { icon: SiTypescript, color: "#007acc" },
    ],
  },
  {
    skillName: "SEO",
    icons: [{ icon: TbSeo, color: "#00A859" }],
  },
  {
    skillName: "Domain and Hosting",
    icons: [
      { icon: SiGodaddy, color: "#1bdbdb" },
      { icon: GrDomain, color: "#6366F1" },
      { icon: RiVercelFill, color: "#000" },
      { icon: FaGithub, color: "#000" },
      
    ],
  },
  {
    skillName: "Wordpress",
    icons: [
      { icon: FaWordpress, color: "#00749C" },
      { icon: FaElementor, color: "#FF7BE5" },
    ],
  },
  {
    skillName: "Back End",
    icons: [
      { icon: SiPhp, color: "#8892BF" },
      { icon: SiMysql, color: "#00749C" },
    ],
  },
];

function Section5() {
  const containerRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        servicesRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="container dark:bg-[#0e0e0e] ">
      {/* Skills Background Layer */}
      <div className="relative min-h-screen  z-0 py-10">
        <Title
          smallTitle="My Technical Background"
          mainTitle="Development Experience"
          isWhite={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
          {data.map((item, index) => {
            const Icon = item.icons;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl p-[1px]"
                style={{
                  background:
                    "linear-gradient(329deg, #FF91FA 13.55%, #FA6490 48.54%, #F7D86A 86.44%)",
                }}
              >
                <div className="flex items-center gap-4 bg-white dark:bg-black p-5 rounded-xl group-hover:scale-105 transition-transform">
                  <Icon size={32} style={{ color: item.color }} />
                  <span className="text-lg font-medium text-black dark:text-white">
                    {item.skillName}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Services Section (no absolute, scrolls normally) */}
      <div
        ref={servicesRef}
        className="w-full bg-white dark:bg-[#111] py-10 md:px-4"
      >
        <Title
          smallTitle="Services"
          mainTitle="What I Offer"
          isWhite={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.map((item, index) => (
            <div
              key={index}
              className="gap-4 group bg-white dark:bg-black p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                {item.skillName}
              </h3>
              <div className="flex flex-wrap gap-4">
                {item.icons.map((iconItem, idx) => {
                  const Icon = iconItem.icon;
                  return (
                    <div
                      key={idx}
                      className="p-1 md:p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-125 transition-transform"
                    >
                      <Icon size={28} style={{ color: iconItem.color }} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section5;
