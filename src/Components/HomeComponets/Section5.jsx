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

import Title from "../Title";

gsap.registerPlugin(ScrollTrigger);

const data = [
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

const project = [
    {
    skillName: "SEO Optimization",
    icons: [
      { icon: TbSeo, color: "#00A859" },
      { icon: SiSemrush, color: "#f14e00" },
      { icon: SiGoogleanalytics, color: "#eeb808" },
      { icon: SiGoogletagmanager, color: "#087fee" },
      { icon: SiGooglecampaignmanager360, color: "#002850e7" },
    ],
    text: "Advanced SEO services including keyword research, on-page optimization, and analytics tracking to improve rankings and organic traffic.",
  },
  {
    skillName: "Web Development",
    icons: [
      { icon: IoLogoHtml5, color: "#E34C26" },
      { icon: FaCss3Alt, color: "#264de4" },
      { icon: FaJs, color: "#F7DF1E" },
      { icon: SiGodaddy, color: "#1bdbdb" },
      { icon: GrDomain, color: "#6366F1" },
    ],
    text: "Professional Web Development services using HTML, CSS, and JavaScript to build fast, responsive, and SEO-friendly websites.",
  },



  {
    skillName: "Domain & Hosting",
    icons: [
      { icon: SiGodaddy, color: "#1bdbdb" },
      { icon: GrDomain, color: "#6366F1" },
      { icon: RiVercelFill, color: "#000" },
      { icon: FaGithub, color: "#000" },
    ],
    text: "Complete domain and hosting setup including DNS configuration, deployments, and server optimization.",
  },

  {
    skillName: "WordPress Development",
    icons: [
      { icon: FaWordpress, color: "#00749C" },
      { icon: FaElementor, color: "#FF7BE5" },
      { icon: FaShopify, color: "#95bf47" },
    ],
    text: "Custom WordPress websites using Elementor and modern design tools to create fast and SEO-optimized business websites.",
  },

  {
    skillName: "Back-End Development",
    icons: [
      { icon: SiPhp, color: "#8892BF" },
      { icon: SiMysql, color: "#00749C" },
    ],
    text: "Backend development using PHP and MySQL to build secure APIs and dynamic web applications.",
  },

  {
    skillName: "React JS Development",
    icons: [
      { icon: FaReact, color: "#61DBFB" },
      { icon: RiTailwindCssFill, color: "#38bdf8" },
      { icon: TbBrandRedux, color: "#764abc" },
      { icon: SiTypescript, color: "#007acc" },
    ],
    text: "Modern front-end development using React, Tailwind CSS, Redux, and TypeScript to build scalable applications.",
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
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="container dark:bg-[#0e0e0e]">
      {/* Skills */}
     
     
      {/* <div className="relative min-h-screen py-10">
        <Title
          smallTitle="My Technical Background"
          mainTitle="Development Experience"
          isWhite={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-xl p-[1px]"
                style={{
                  background:
                    "linear-gradient(329deg,#FF91FA 13%,#FA6490 48%,#F7D86A 86%)",
                }}
              >
                <div className="flex items-center gap-4 bg-white dark:bg-black p-5 rounded-xl group-hover:scale-105 transition">
                  <Icon size={32} style={{ color: item.color }} />
                  <span className="text-lg font-medium dark:text-white">
                    {item.skillName}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}



      {/* Services */}
      <div
        ref={servicesRef}
        className="w-full bg-white dark:bg-[#111] py-10 md:px-4"
      >
        <Title smallTitle="Services" mainTitle="What I Offer" isWhite={false} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.map((item, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-black p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                {item.skillName}
              </h3>

              <div className="flex flex-wrap gap-4">
                {item.icons.map((iconItem, idx) => {
                  const Icon = iconItem.icon;

                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-125 transition"
                    >
                      <Icon size={28} style={{ color: iconItem.color }} />
                    </div>
                  );
                })}
              </div>

              {item.text && (
                <p className="mt-4 text-gray-600 dark:text-gray-300 text-md">
                  {item.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section5;