import ThemeBtn from "../ThemeBtn";
import Title from "../Title";
import { Link } from "react-router-dom";


function Section1(){


return(
   <section className="py-5 layout-wrapper">

    <div className="container ">
     <div className="bg-primary p-5 pb-36 md:p-20 md:pb-40">
     <div>
         
<Title
  smallTitle="ABOUT ME"
  mainTitle="Professional Digital Marketer & Full-Stack Web Developer"
  smallTitleClass="py-8"
  isWhite={true}
/>

<p className="text-white py-6">
 Hi, I’m Santhosh Kumar, a Freelance Digital Marketer in Coimbatore specializing in Google Ads, Meta Ads, SEO, and Website Design. I help startups, local businesses, and brands improve their online presence and generate quality leads.
<br />
<br />
Along with digital marketing, I specialize in website development using Shopify, WordPress, React, HTML, CSS, and JavaScript. I create fast, responsive, and SEO-optimized websites designed to improve online visibility and help businesses generate more leads.<br /><br />
My approach combines performance marketing and modern web design to deliver measurable results for businesses.

</p>

  <div className="py-1 absolute z-10 ">

    <Link to={"/about"}>     <ThemeBtn 
  icon={true}
  isActive={false}
>About Us</ThemeBtn></Link>
     </div>
     </div>
     </div>
   

    </div>
    </section>

)
}
export default Section1;