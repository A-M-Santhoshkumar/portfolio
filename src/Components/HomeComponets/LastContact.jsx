import Title from "../Title";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMail } from "react-icons/io5";

function LastContact() {
  return (
    <section className="layout-wrapper mx-auto py-4  px-4 md:py-8">
      <div className= " container flex flex-col md:flex-row items-start  justify-between gap-8">
        {/* Left div */}
   <div className="w-full md:w-1/2 space-y-6">
  <Title smallTitle="Contact Us" mainTitle="Get in touch" />

  {/* Phone */}
  <a href="tel:9629140160" className="flex items-center gap-4 text-blue-400 hover:text-blue-500 transition">
    <div>
   
      <PiPhoneCallFill className="w-7 h-7 object-cover"/>
    </div>
    <div>
      <h4 className="font-semibold">Phone Number</h4>
      <h5 className="text-gray-600">9629140160</h5>
    </div>
  </a>

  {/* Email */}
  <a href="mailto:amsanthoshkumar2@gmail.com" className="flex items-center gap-4 text-red-500 hover:text-red-700 transition">
    <div>
      <IoMail className="w-7 h-7 object-cover" />
    </div>
    <div>
      <h4 className="font-semibold">Email</h4>
      <h5 className="text-gray-600">amsanthoshkumar2@gmail.com</h5>
    </div>
  </a>
</div>


        {/* Right div */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-xl font-semibold">Let’s get in touch with us</h2>
           <form action="" className="flex flex-col gap-4 w-full">
  <input
    type="text"
    placeholder="Name"
    className="border p-2 rounded-md w-full"
    required
  />
  <input
    type="email"
    placeholder="Email"
    className="border p-2 rounded-md w-full"
    required
  />
  <input
    type="tel"
    placeholder="Phone Number"
    className="border p-2 rounded-md w-full"
    required
  />
  <input
    type="text"
    placeholder="City"
    className="border p-2 rounded-md w-full"
  />
  <textarea
    placeholder="Message"
    className="border p-2 rounded-md w-full"
    rows="4"
    required
  ></textarea>

<button
  className="relative inline-block py-2 px-4 rounded-md text-white bg-primary hover:text-black hover:bg-white border-2 border-transparent transition"
  onMouseEnter={(e) => {
    e.currentTarget.style.borderColor =
      'transparent'; // Keep it clean on enter
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderImage =
      'linear-gradient(329deg, #FF91FA 13.55%, #FA6490 48.54%, #F7D86A 86.44%) 1';
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
