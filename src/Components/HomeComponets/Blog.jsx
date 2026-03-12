import { Helmet } from "react-helmet-async";

import { RiSeoLine } from "react-icons/ri";
import { SiGoogleads } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

import { Link } from "react-router-dom";

function Blog() {
  const blogs = [
    {
      name: "Website Design in Coimbatore",
      link: "/website-design-coimbatore",
      icons: CgWebsite,
      blogCount: "Blog",
    },
    {
      name: "Google Ads in Coimbatore",
      link: "/google-ads-coimbatore",
      icons: SiGoogleads,
      blogCount: "Blog",
    },
    {
      name: "Meta Ads in Coimbatore",
      link: "/meta-ads-coimbatore",
      icons: RiSeoLine,
      blogCount: "Blog",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing & Web Design Blog - Coimbatore | SiteDesign</title>
        <meta name="description" content="Explore expert insights on website design, Google Ads, and Meta Ads in Coimbatore. Learn digital marketing strategies to grow your business." />
        <meta name="keywords" content="website design Coimbatore, Google Ads Coimbatore, Meta Ads Coimbatore, digital marketing blog, SEO services Coimbatore, web development Coimbatore" />
        <meta property="og:title" content="Digital Marketing & Web Design Blog - Coimbatore | SiteDesign" />
        <meta property="og:description" content="Explore expert insights on website design, Google Ads, and Meta Ads in Coimbatore. Learn digital marketing strategies to grow your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sitedesign.in" />
        <meta property="og:site_name" content="SiteDesign" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing & Web Design Blog - Coimbatore | SiteDesign" />
        <meta name="twitter:description" content="Explore expert insights on website design, Google Ads, and Meta Ads in Coimbatore. Learn digital marketing strategies to grow your business." />
        <link rel="canonical" href="https://sitedesign.in" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "SiteDesign Blog",
            "description": "Expert insights on website design, Google Ads, and Meta Ads in Coimbatore",
            "url": "https://sitedesign.in",
            "publisher": {
              "@type": "Organization",
              "name": "SiteDesign",
              "url": "https://sitedesign.in"
            },
            "blogPost": blogs.map((blog) => ({
              "@type": "BlogPosting",
              "headline": blog.name,
              "url": `https://sitedesign.in${blog.link}`,
              "description": `Learn more about ${blog.name} and how it can help your business grow in Coimbatore`
            }))
          })}
        </script>
      </Helmet>
      <section className="dark:bg-[#111] py-12">
        <div className="container mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center dark:text-white">
              Our <span className="text-blue-600">Blog</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
              Latest insights on digital marketing and web design
            </p>
          </header>
          <div className="grid md:grid-cols-3 gap-6">

        {blogs.map((item, index) => (
          <Link 
            key={index} 
            to={item.link}
            aria-label={`Read more about ${item.name}`}
          >
            <article className="blog-card group border-2 border-black p-6 bg-white rounded-lg transition transform hover:translate-x-2 hover:translate-y-2 h-full">
              <div className="flex items-center justify-between mb-3">
                <item.icons className="text-4xl" aria-hidden="true" />
              </div>

              <p className="text-sm text-blue-600 font-medium mb-2">Blog</p>

              <h2 className="text-2xl font-semibold">
                {item.name}
              </h2>

            </article>
          </Link>
        ))}

          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;