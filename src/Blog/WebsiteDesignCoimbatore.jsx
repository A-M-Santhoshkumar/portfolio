import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../context/ThemeContext";
import { CgWebsite } from "react-icons/cg";

const features = [
  {
    title: "Custom Website Design",
    desc: "We create modern and responsive websites tailored to your business needs. Our websites are designed to deliver excellent user experience and professional branding."
  },
  {
    title: "SEO Friendly Development",
    desc: "All websites are built with SEO best practices including optimized headings, meta tags, fast loading speed and mobile responsive design."
  },
  {
    title: "Business & Portfolio Websites",
    desc: "Whether you need a business website, personal portfolio, or service website, we build scalable solutions that help you attract more customers online."
  },
  {
    title: "Fast Performance & Security",
    desc: "Our websites are optimized for performance, fast loading speed, and secure hosting environments."
  }
];

function FeatureCard({ feature, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-xl font-semibold mb-3">{feature.title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
    </motion.div>
  );
}

function WebsiteDesignCoimbatore() {
  const { animationVariants } = useTheme();

  return (
    <>
      <Helmet>
        <title>Website Design Services in Coimbatore | Freelance Web Designer | SiteDesign</title>

        <meta
          name="description"
          content="Looking for website design services in Coimbatore? SiteDesign creates modern, responsive and SEO friendly websites for businesses and professionals."
        />

        <meta
          name="keywords"
          content="website design coimbatore, freelance web designer coimbatore, website development coimbatore, business website design"
        />
      </Helmet>

      <div className="layout-wrapper">
        <div className="container mx-auto px-4">

          {/* Hero */}
          <motion.div
            variants={animationVariants.fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center py-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Website Design Services in Coimbatore
            </h1>

            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              A professional website is essential for any business looking to
              establish a strong online presence. At SiteDesign, we create
              modern and SEO-friendly websites that help businesses attract
              customers and grow online.
            </p>
          </motion.div>

          {/* Image */}
          <div className="flex justify-center mb-10">
            <div className="w-full max-w-md h-64 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-lg flex items-center justify-center">
              <CgWebsite className="text-8xl text-white" />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={animationVariants.fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center py-12"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Need a Professional Website?
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If you are looking for a freelance web designer in Coimbatore,
              SiteDesign can help you create a professional website that
              represents your brand and generates business leads.
            </p>

            <a
              href="https://www.sitedesign.in/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Visit SiteDesign
            </a>
          </motion.div>

        </div>
      </div>
    </>
  );
}

export default WebsiteDesignCoimbatore;