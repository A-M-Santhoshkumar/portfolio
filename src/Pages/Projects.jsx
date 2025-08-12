import { motion } from "framer-motion";
import Title from "../Components/Title";


import image1 from '../assets/images/Project/unibox.png';
import image2 from '../assets/images/Project/electwin.png';
import image3 from '../assets/images/Project/dental.png';
import image4 from '../assets/images/Project/letcook.png';
import image5 from '../assets/images/Project/velan.png';
import image6 from '../assets/images/Project/astro.png';
import image7 from '../assets/images/Project/business_tamizha_news_blog.png';
import image8 from '../assets/images/Project/bt_componey.png';
import image9 from '../assets/images/Project/automindinfotech.png';
import image10 from '../assets/images/Project/ecommerce.png';
import image11 from '../assets/images/Project/spotify_clone.png';
import image12 from '../assets/images/Project/react_portfolio.png';



const Projects = () => {
  const data = [
    { id: 1, name: "Unibox", tool: "Wordpress", link: "https://unibox.live", img: image1 },
    { id: 2, name: "Electwin", tool: "Wordpress", link: "https://electwin.jicate.solutions/", img: image2 },
    { id: 3, name: "JKKN DENTAL COLLEGE & HOSPITAL", tool: "Wordpress", link: "https://dental.jkkn.ac.in/", img: image3 },
    { id: 4, name: "Letscookacademy", tool: "Html", link: "https://letscookacademy.com/", img: image4 },
    { id: 5, name: "Velanmedias", tool: "Html", link: "https://velanmedias.com/", img: image5 },
    { id: 6, name: "Astro Tamizha", tool: "Php", link: "https://astrotamizha.com/", img: image6 },
    { id: 7, name: "Business Tamizha News Blog", tool: "Php", link: "https://businesstamizha.com/", img: image7 },
    { id: 8, name: "Business Tamizha", tool: "Php", link: "https://businesstamizha.in/", img: image8 },
    { id: 9, name: "Automind Infotech", tool: "Html", link: "https://automindinfotech.com/", img: image9 },
    { id: 10, name: "React Ecommerce", tool: "React", link: "https://sitedesign-ecommerce.vercel.app/", img: image10},
      { id: 11, name: "Spotify Clone", tool: "React", link: "https://saitify-spotify-clone.vercel.app/", img: image11},
        { id: 12, name: "React portfolio", tool: "React", link: "https://www.sitedesign.in/projects", img: image12},
  
  ];

  const renderProjects = (tool) =>
    data
      .filter((item) => item.tool.toLowerCase() === tool.toLowerCase())
      .map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-700 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all group"
        >
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </a>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">Tool: {item.tool}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="mt-3 px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-full text-sm hover:scale-105 transition-transform">
                View
              </button>
            </a>
          </div>
        </motion.div>
      ));

  return (
    <section className="py-16 px-4 md:px-20 bg-gray-50 layout-wrapper">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">Our Services</h2>

      <Title smallTitle="Tool" mainTitle="PHP & MySQL" mainTitleClass="font-medium" topSideAccess="mt-3 mb-10 text-center" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">{renderProjects("Php")}</div>
       
        <Title smallTitle="Tool" mainTitle="React " mainTitleClass="font-medium" topSideAccess="py-16 text-center" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">{renderProjects("React")}</div>

      <Title smallTitle="Tool" mainTitle="WordPress" mainTitleClass="font-medium" topSideAccess="py-16 text-center" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">{renderProjects("Wordpress")}</div>

      <Title smallTitle="Tool" mainTitle="Front-End" mainTitleClass="font-medium" topSideAccess="py-16 text-center" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">{renderProjects("Html")}</div>
    </section>
  );
};

export default Projects;
