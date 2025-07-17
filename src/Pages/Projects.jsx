import { motion } from "framer-motion";
import Title from "../Components/Title";


const Projects = () => {
  const data = [
    {id:1,name:"Unibox",tool:"Wordpress",link:"unibox.live",img:"src/assets/images/Project/unibox.png"},
    {id:2,name:"Electwin",tool:"Wordpress",link:"https://electwin.jicate.solutions/",img:"src/assets/images/Project/electwin.png"},
    {id:3,name:"JKKN DENTAL COLLEGE & HOSPITAL",tool:"Wordpress",link:"https://dental.jkkn.ac.in/",img:"src/assets/images/Project/dental.png"},
    {id:4,name:"Letscookacademy",tool:"Html",link:"https://letscookacademy.com/",img:"src/assets/images/Project/let cook.png"},
    {id:5,name:"Velanmedias",tool:"Html",link:"https://velanmedias.com/",img:"src/assets/images/Project/velan.png"},
    {id:6,name:"Astro Tamizha",tool:"Php",link:"https://astrotamizha.com/",img:"src/assets/images/Project/astro.png"},
    {id:7,name:"Business Tamizha News Blog",tool:"Php",link:"https://businesstamizha.com/",img:"src/assets/images/Project/business tamizha news blog.png"},
    {id:8,name:"Business Tamizha",tool:"Php",link:"https://businesstamizha.in/",img:"src/assets/images/Project/bt componey.png"},
    {id:9,name:"automindinfotech",tool:"Html",link:"https://automindinfotech.com/",img:"src/assets/images/Project/automindinfotech.png"},
    
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

      <Title smallTitle="Tool" mainTitle="PHP & MySQL" topSideAccess="mt-3 mb-6" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">{renderProjects("Php")}</div>

      <Title smallTitle="Tool" mainTitle="WordPress" topSideAccess="py-6" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">{renderProjects("Wordpress")}</div>

      <Title smallTitle="Tool" mainTitle="Front-End" topSideAccess="py-6" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">{renderProjects("Html")}</div>
    </section>
  );
};

export default Projects;
