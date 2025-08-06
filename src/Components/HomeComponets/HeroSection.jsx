// src/components/HeroSection.jsx
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import ThemeBtn from "../ThemeBtn";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import Title from "../Title";
import image1 from '../../assets/images/main.png';


function HeroSection() {
  const { controls, animationVariants } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true });

  const icons = [
    {
      name: "Linkedin",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/santhoshkumar-a-m-85a46627a/",
    },
    {
      name: "Gmail",
      icon: BiLogoGmail,
      link: "mailto:amsanthoshkumar2@gmail.com",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/A-M-Santhoshkumar",
    },
  ];

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (

    
     <section>

  


    <div className="container mx-auto layout-wrapper">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        {/* Left column */}
     <motion.div
            ref={ref}
            variants={animationVariants.fadeInLeft}
            initial="hidden"
            animate={controls}
            className="w-full md:w-1/2 text-center md:text-left"
          >
                <Title 
         smallTitle="Hy! I am SanthoshKumar A M"
         mainTitle="Frontend & React Developer "
        />

<p className="text-gray-600 max-w-md py-3">
I'm a passionate web developer with experience in WordPress, HTML, CSS, JavaScript, Bootstrap, and React. I love building responsive and modern websites that deliver great user experiences.
</p>

            <div className="flex flex-col gap-4 md:flex-row md:items-center mt-1">
              <a
                href="/resume/SANTHOSHKUMAR.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <ThemeBtn icon={true} isActive={true}>
                  Download CV
                </ThemeBtn>
              </a>

            </div>

            <div className="flex flex-col md:flex-row gap-3 py-6 items-center">
              <h5>Check out my:</h5>
              <div className="flex gap-4">
                {icons.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon
                      size={24}
                      className="hover:scale-110 transition-all duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={animationVariants.fadeInRight}
            initial="hidden"
            animate={controls}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <img
              src={image1}
              alt="Main"
              className="max-w-full h-auto"
            />
          </motion.div>
      </div>
    </div>
      </section>
  );
}

export default HeroSection;











