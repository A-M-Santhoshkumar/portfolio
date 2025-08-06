import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Title from "../Components/Title";
import { useTheme } from "../context/ThemeContext";
import img1 from '../assets/images/about/Front-End.png'
import img2 from '../assets/images/about/UIUX.png'
import img3 from '../assets/images/about/Tools.png'
import img4 from '../assets/images/about/Deployment.png'
import mainimage from '../assets/images/about/about-me.png'


const info = [
  {
    name: "🚀 Front-End Development",
    image: img1,
    data:[
  "Proficient in JavaScript and TypeScript, with hands-on experience in React.js, Tailwind CSS, and Vite for building fast, scalable, and modern web applications.",
  "Strong foundation in HTML, CSS, and Bootstrap, ensuring responsive and accessible web design across all devices.",
  "Skilled at creating clean, maintainable, and reusable components that align with industry best practices and modern development standards."
]
,
  },
  {
    name: "🎨 UI/UX & Design Implementation",
    image: img2,
    data: [
      "Passionate about crafting user-friendly and intuitive interfaces that enhance user experience.",
      "Adept at translating design mockups into high-quality, pixel-perfect code.",
    ],
  },
  {
    name: "🛠 Tools & Technologies",
    image: img3,
    data: [
  "Comfortable working with: PHP (basic), MySQL databases.",
  "Experienced with web hosting platforms like GoDaddy and cPanel for live deployments.",
  "Proficient in using GitHub for version control and deploying React apps to GitHub Pages and Vercel.",
  "Familiar with FileZilla for FTP deployment and basic Linux server environments."
]
,
  },
  {
    name: "🌐 Deployment & Hosting",
    image: img4,
    data:[
  "Experienced in deploying React apps to GitHub Pages, Vercel, and cPanel.",
  "Working knowledge of domain management, custom domains, and live production setups."
]
,
  },
];

function AnimatedSection({ section, idx }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const fadeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: idx * 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeVariants}
      initial="hidden"
      animate={controls}
      className={`flex flex-col ${
        idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
      } items-center justify-between gap-4 py-10`}
    >
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">{section.name}</h3>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          {section.data.map((point, i) => (
            <li key={i} className="leading-relaxed">• {point}</li>
          ))}
        </ul>
      </div>

      <motion.div
        variants={fadeVariants}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={section.image}
          alt={section.name}
          className="max-w-xs sm:max-w-sm h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
}

function About() {
  const { animationVariants } = useTheme();

  const leftControls = useAnimation();
  const [leftRef, leftInView] = useInView({ threshold: 0.2 });

  const rightControls = useAnimation();
  const [rightRef, rightInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (leftInView) leftControls.start("visible");
    else leftControls.start("hidden");
  }, [leftInView]);

  useEffect(() => {
    if (rightInView) rightControls.start("visible");
    else rightControls.start("hidden");
  }, [rightInView]);

  return (
    <div className="layout-wrapper">
      <div className="container mx-auto layout-wrapper">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left: Text Section */}
          <motion.div
            ref={leftRef}
            variants={animationVariants.fadeInLeft}
            initial="hidden"
            animate={leftControls}
            className="text-center md:text-left mb-12 w-full md:w-1/2"
          >
            <Title smallTitle="About" mainTitle="Turning Ideas Into Interactive Websites" />
            <p className="py-3">
        Hi, I’m Santhoshkumar, a passionate Web Developer based in Coimbatore, with over 2 years of experience in building responsive and user-friendly websites.
          </p>
          <ul>
            <li> WordPress development (2+ years)</li>
            <li> Frontend technologies like HTML, CSS, JavaScript, Bootstrap 5 (2 year)</li>
            <li> Modern UI building with React (1 year)</li>
          
          </ul>
          <p  className="py-3">With a strong eye for design and attention to performance, I create clean, modern interfaces that deliver seamless user experiences and real business value.</p>
          </motion.div>

          {/* Right: Image Section */}
          <motion.div
            ref={rightRef}
            variants={animationVariants.fadeInRight}
            initial="hidden"
            animate={rightControls}
            className="text-center md:text-left mb-12 w-full md:w-1/2"
          >
            <img
              src={mainimage}
              alt="about me"
             
            />
          </motion.div>
        </div>

        {/* Sections List */}
        {info.map((section, idx) => (
          <AnimatedSection key={idx} section={section} idx={idx} />
        ))}
      </div>
    </div>
  );
}

export default About;
