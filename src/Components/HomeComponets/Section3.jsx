import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CgWebsite } from "react-icons/cg";
import { TbWorldWww } from "react-icons/tb";
import { RiSeoLine } from "react-icons/ri";

import bgimg from "../../assets/images/section3.webp";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Section3() {
  const sectionRef = useRef(null);

  const project = [
    {
      name: "Website design",
      link: "/projects",
      about: "",
      icons: CgWebsite,
      bgicon: bgimg,
      projectCount: "28 Project",
    },
    {
      name: "Hosting and Domain",
      link: "/projects",
      about: "",
      icons: TbWorldWww,
      bgicon: bgimg,
      projectCount: "17 Project",
    },
    {
      name: "SEO",
      link: "/projects",
      about: "",
      icons: RiSeoLine,
      bgicon: bgimg,
      projectCount: "17 Project",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section className="dark:bg-[#111] py-10" ref={sectionRef}>
      <div className="flex flex-col md:flex-row container justify-between gap-5">
        {project.map((item, index) => {
          return (
            <div
              key={index}
              className="z-10 relative group w-full h-auto service-card"
            >
              {/* Background animation div */}
              <div className="absolute inset-0 animation-bg-move -z-10 rounded-lg"></div>

              {/* Card content */}<Link to={item.link}>
              <div className="p-5 border-slate-900 border-2 border-solid w-full h-auto bg-white 
                            transition-transform duration-200 transform group-hover:translate-x-2 
                            group-hover:translate-y-2 rounded-lg ">
                <div
                  className="w-[18%] h-[63px] flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${item.bgicon})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <item.icons className="text-2xl animation-move" />
                </div>

                <p>{item.projectCount}</p>
                <h2 className="text-3xl font-medium dark:text-black">{item.name}</h2>
              </div>
               </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Section3;
