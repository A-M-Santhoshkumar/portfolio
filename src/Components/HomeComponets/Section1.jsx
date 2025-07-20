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
  mainTitle="Passionate Web Developer
"
  smallTitleClass=" py-8"
  isWhite={true}
/>

<h6 className="text-white py-6">I’m a web developer with over 2 years of experience creating responsive, user-friendly websites. I work with WordPress, HTML, CSS, JavaScript, Bootstrap 5, and React, blending design and code to deliver clean, modern digital experiences
</h6>

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