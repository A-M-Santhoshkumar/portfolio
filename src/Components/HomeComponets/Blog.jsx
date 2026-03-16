import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { blogData } from "../../data/blogData";

function Blog() {

  const latestBlogs = blogData.slice(-3).reverse(); // last 3 blogs

  return (
    <>
      <Helmet>
        <title>Digital Marketing & Web Design Blog - Coimbatore | SiteDesign</title>

        <meta
          name="description"
          content="Explore expert insights on website design, Google Ads, and Meta Ads in Coimbatore."
        />

        <meta
          name="keywords"
          content="website design Coimbatore, Google Ads Coimbatore, Meta Ads Coimbatore, digital marketing blog"
        />
      </Helmet>

      <section className="py-16 dark:bg-[#111]">

        <div className="container mx-auto px-4">

          {/* Section Heading */}

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
              Latest <span className="text-yellow-500">Blog Articles</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-xl mx-auto">
              Learn about website design, digital marketing, and advertising
              strategies to grow your business online.
            </p>

          </div>

          {/* Blog Cards */}

          <div className="grid md:grid-cols-3 gap-8">

            {latestBlogs.map((blog, index) => (

              <article
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >

                {/* Blog Image */}

                <Link to={`/blog/${blog.slug}`}>

                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />

                </Link>

                {/* Content */}

                <div className="p-6">

                  

                  <h3 className="text-xl font-bold mb-3 dark:text-white">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {blog.description}
                  </p>

  <Link
    to={`/blog/${blog.slug}`}
    className="inline-flex items-center text-sm font-semibold text-yellow-600 transition-all duration-300 hover:text-yellow-700 dark:text-yellow-500 dark:hover:text-yellow-400 group"
  >
    Read More
    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>

                </div>

              </article>

            ))}

          </div>

          {/* View All Blogs */}

          <div className="text-center mt-12">

            {/* <Link
              to="/blog"
              className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
            >
              View All Blogs
            </Link> */}

          </div>

        </div>

      </section>
    </>
  );
}

export default Blog;