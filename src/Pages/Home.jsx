import { Helmet } from "react-helmet-async";

import HeroSection from "../Components/HomeComponets/HeroSection";
import Section1 from "../Components/HomeComponets/Section1";
import Section3 from "../Components/HomeComponets/Section3";
import Section4 from "../Components/HomeComponets/Section4";
import Section5 from "../Components/HomeComponets/Section5";
import LastContact from "../Components/HomeComponets/LastContact";
import Blog from "../Components/HomeComponets/Blog";

function Home() {
  return (
    <div className="layout-wrapper">

      {/* ✅ SEO START */}
      <Helmet>
        <title>Website Design in Coimbatore | Web Developer | SiteDesign</title>

        <meta
          name="description"
          content="Looking for website design in Coimbatore? We build modern, fast, SEO-friendly websites using React, Tailwind CSS and latest technologies."
        />

        <meta
          name="keywords"
          content="website design in coimbatore, web developer coimbatore, freelance web designer coimbatore, react developer coimbatore"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.sitedesign.in/" />

        {/* Open Graph */}
        <meta property="og:title" content="Website Design in Coimbatore | SiteDesign" />
        <meta
          property="og:description"
          content="Professional website design services in Coimbatore. Fast, SEO-friendly and modern websites."
        />
        <meta property="og:url" content="https://www.sitedesign.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.sitedesign.in/preview.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Website Design in Coimbatore" />
        <meta
          name="twitter:description"
          content="Modern website development services in Coimbatore."
        />
        <meta name="twitter:image" content="https://www.sitedesign.in/preview.jpg" />

        {/* Local Business Schema 🔥 */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "SiteDesign",
            image: "https://www.sitedesign.in/minilogo.png",
            "@id": "https://www.sitedesign.in/",
            url: "https://www.sitedesign.in/",
            telephone: "+91-9629140160",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Coimbatore",
              addressRegion: "Tamil Nadu",
              addressCountry: "India"
            }
          })}
        </script>
      </Helmet>
      {/* ✅ SEO END */}

      <HeroSection />
      <Section1 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Blog />
      <LastContact />
    </div>
  );
}

export default Home;