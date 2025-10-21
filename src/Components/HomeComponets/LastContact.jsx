import { useState } from "react";
import Title from "../Title";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";

function LastContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      alert(result.message);

      if (res.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          message: "",
        });
      }
    } catch (err) {
      alert("Something went wrong. Please try again later!");
      console.error(err);
    }
  };

  return (
    <section className="layout-wrapper mx-auto py-4 px-4 md:py-8">
      <div className="container flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left Div */}
        <div className="w-full md:w-1/2 space-y-6">
          <Title smallTitle="Contact Us" mainTitle="Get in touch" />

          {/* Phone */}
          <a
            href="tel:9629140160"
            className="flex items-center gap-4 text-blue-400 hover:text-blue-500 transition"
          >
            <div>
              <PiPhoneCallFill className="w-7 h-7 object-cover" />
            </div>
            <div>
              <h4 className="font-semibold">Phone Number</h4>
              <h5 className="text-gray-600">9629140160</h5>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:amsanthoshkumar2@gmail.com"
            className="flex items-center gap-4 text-red-500 hover:text-red-700 transition"
          >
            <div>
              <IoMail className="w-7 h-7 object-cover" />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <h5 className="text-gray-600">amsanthoshkumar2@gmail.com</h5>
            </div>
          </a>
        </div>

        {/* Right Div (Form) */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-xl font-semibold">Let’s get in touch with us</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <input 
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded-md w-full text-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded-md w-full text-black"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 rounded-md w-full text-black"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border p-2 rounded-md w-full text-black"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="border p-2 rounded-md w-full text-black"
              rows="4"
              required
            ></textarea>

            <button
              type="submit"
              className="relative inline-block py-2 px-4 rounded-md text-white bg-primary hover:text-black hover:bg-white border-2 border-transparent transition"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderImage =
                  "linear-gradient(329deg, #FF91FA 13.55%, #FA6490 48.54%, #F7D86A 86.44%) 1";
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LastContact;
