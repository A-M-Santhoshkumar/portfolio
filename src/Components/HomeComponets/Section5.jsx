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
} from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbSeo } from "react-icons/tb";
import { GrDomain } from "react-icons/gr";

import Title from "../Title";

gsap.registerPlugin(ScrollTrigger);

const data = [
  { skillName: "Javascript", icons: FaJs, color: "#F7DF1E" },
  { skillName: "React Js", icons: FaReact, color: "#61DBFB" },
  { skillName: "HTML", icons: IoLogoHtml5, color: "#E34C26" },
  { skillName: "CSS", icons: FaCss3Alt, color: "#264de4" },
  { skillName: "Tailwind CSS", icons: RiTailwindCssFill, color: "#38bdf8" },
  { skillName: "Bootstrap", icons: FaBootstrap, color: "#7952B3" },
  { skillName: "SEO", icons: TbSeo, color: "#00A859" },
  { skillName: "Domain and Hosting", icons: GrDomain, color: "#6366F1" },
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
    ],
  },
  {
    skillName: "SEO",
    icons: [{ icon: TbSeo, color: "#00A859" }],
  },
  {
    skillName: "Domain and Hosting",
    icons: [{ icon: GrDomain, color: "#6366F1" }],
  },
  {
    skillName: "Wordpress",
    icons: [
      { icon: FaWordpress, color: "#00749c" },
      { icon: FaElementor, color: "#FF7BE5" },
    ],
  },
];

function Section5() {
  const containerRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(servicesRef.current, { y: "100%" }); // start off-screen

      gsap.to(servicesRef.current, {
        y: "0%",
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1000", // how much to scroll
          scrub: true,
          pin: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="container layout-wrapper">
    <div className="relative h-screen" ref={containerRef}>
        {/* Skills Background Layer */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-[#0e0e0e] z-0 px-4 py-4 overflow-hidden">
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

      {/* Services Overlay Section */}
      <div
        ref={servicesRef}
        className="container absolute top-0 left-0 w-full h-full  bg-white dark:bg-[#111] 
       py-0 md:px-4 md:py-24 z-10"
      >
      <Title
  smallTitle="Services"
  mainTitle="What I Offer"
  isWhite={false}
 
/>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-0 md:gap-6 md:py-5">
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
                      className=" p-1 md:p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-125 transition-transform"
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
    </div>
    </section>
  );
}

export default Section5;
