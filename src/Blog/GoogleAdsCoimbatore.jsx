import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../context/ThemeContext";
import { SiGoogleads } from "react-icons/si";

const services = [
  {
    title: "Google Ads Campaign Management",
    points: [
      "Professional setup and optimization of Google advertising campaigns.",
      "Search ads, display ads, and shopping campaigns.",
      "Conversion-focused ad creatives designed to generate leads and sales."
    ]
  },
  {
    title: "PPC Advertising Strategy",
    points: [
      "Data-driven PPC strategies for maximum ROI.",
      "Keyword research and competitive analysis.",
      "A/B testing for ad copy optimization."
    ]
  },
  {
    title: "Local Google Ads",
    points: [
      "Local search ads to reach customers in Coimbatore.",
      "Google Maps advertising for local business visibility.",
      "Location-based targeting for better conversion rates."
    ]
  },
  {
    title: "Performance Tracking & Analytics",
    points: [
      "Detailed performance monitoring and campaign optimization.",
      "Ad budget optimization for better ROI.",
      "Comprehensive reporting and analytics insights."
    ]
  }
];

function ServiceBlock({ item, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView]);

  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -60 : 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: index * 0.2 }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 mb-6"
    >
      <h2 className="text-xl font-semibold mb-3">{item.title}</h2>

      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
        {item.points.map((point, i) => (
          <li key={i}>• {point}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function GoogleAdsCoimbatore() {
  const { animationVariants } = useTheme();

  return (
    <>
      <Helmet>
        <title>Google Ads Expert in Coimbatore | PPC Advertising Services | SiteDesign</title>

        <meta
          name="description"
          content="Hire a Google Ads expert in Coimbatore. SiteDesign provides PPC advertising services to help businesses generate leads and increase sales through Google advertising."
        />

        <meta
          name="keywords"
          content="google ads coimbatore, ppc advertising coimbatore, google ads expert coimbatore, paid search coimbatore"
        />
      </Helmet>

      <div className="layout-wrapper">
        <div className="container mx-auto px-4">

          {/* Hero Section */}
          <motion.div
            variants={animationVariants.fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center py-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Google Ads Expert in Coimbatore
            </h1>

            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              Google Ads is one of the most powerful advertising platforms for 
              businesses looking to reach customers through search. With targeted 
              campaigns, businesses can increase brand awareness, generate leads, 
              and boost sales instantly.
            </p>
          </motion.div>

          {/* Featured Image */}
          <div className="flex justify-center mb-10">
            <div className="w-full max-w-md h-64 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg flex items-center justify-center">
              <SiGoogleads className="text-8xl text-white" />
            </div>
          </div>

          {/* Service Sections */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((item, index) => (
              <ServiceBlock key={index} item={item} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            variants={animationVariants.fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center py-12"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Grow Your Business with Google Ads
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If you want to reach more customers through Google advertising,
              SiteDesign can help you create powerful Google Ads campaigns 
              that deliver real results.
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

export default GoogleAdsCoimbatore;
