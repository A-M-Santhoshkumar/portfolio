import React from "react";
import { Helmet } from "react-helmet-async";
import LastContact from "../Components/HomeComponets/LastContact";

function Contact() {
  return (
    <div>

      <Helmet>
        <title>Contact Santhosh Kumar | Web Developer in Coimbatore | SiteDesign</title>

        <meta
          name="description"
          content="Contact Santhosh Kumar for website design, React development, and digital marketing services in Coimbatore. Get your business online today."
        />

        <meta
          name="keywords"
          content="contact web developer coimbatore, hire react developer coimbatore, website design contact coimbatore, sitedesign contact"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.sitedesign.in/contact" />

        <meta property="og:title" content="Contact Web Developer in Coimbatore" />
        <meta
          property="og:description"
          content="Hire Santhosh Kumar for website development and digital marketing."
        />
        <meta property="og:url" content="https://www.sitedesign.in/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      <LastContact />
    </div>
  );
}

export default Contact;