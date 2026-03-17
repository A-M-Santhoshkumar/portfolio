import { useParams } from "react-router-dom";
import { blogData } from "../data/blogData";
import { Helmet } from "react-helmet-async";

function BlogPage() {
  const { slug } = useParams();

  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <h1 className="text-center py-20 text-gray-800 dark:text-white">
        Blog Not Found
      </h1>
    );
  }

  const url = `https://www.sitedesign.in/blog/${blog.slug}`;

  return (
    <>
      {/* ✅ SEO START */}
      <Helmet>
        {/* Basic SEO */}
        <title>{blog.title} | SiteDesign</title>
        <meta name="description" content={blog.description} />
        <meta name="keywords" content={blog.keywords} />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href={url} />

        {/* Open Graph (Facebook, WhatsApp) */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={blog.image} />

        {/* Article Structured Data (VERY IMPORTANT 🔥) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            description: blog.description,
            image: blog.image,
            author: {
              "@type": "Person",
              name: "Santhosh Kumar"
            },
            publisher: {
              "@type": "Organization",
              name: "SiteDesign",
              logo: {
                "@type": "ImageObject",
                url: "https://www.sitedesign.in/logo.png"
              }
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": url
            }
          })}
        </script>
      </Helmet>
      {/* ✅ SEO END */}

      <section className="py-12 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-4">

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            {blog.title}
          </h1>

          {/* Intro */}
          <p className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 mb-10">
            {blog.heroText}
          </p>

          {/* Blog Image */}
          <img
            src={blog.image}
            alt={blog.title}
            className="mx-auto rounded-xl mb-12 shadow-lg"
          />

          {/* Blog Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            {blog.sections.map((section, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {section.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default BlogPage;