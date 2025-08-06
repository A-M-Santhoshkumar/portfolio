import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png'

function Footer(){
    
  const FotterNav = [
   { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Projects", link: "/projects" },
    { id: 4, title: "Contact", link: "/contact" },
  ];
 const icons = [
    {
      name: "Linkedin",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/santhoshkumar-a-m-85a46627a/",
    },
    {
      name: "Gmail",
      icon: BiLogoGmail,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=amsanthoshkumar2@gmail.com",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/A-M-Santhoshkumar",
    },
  ];
    return(
       <footer className="layout-wrapper ">


 <div className=" bottom-0 left-0 w-full h-0.5 hidden dark:block">
    <div
      className="w-full h-full"
      style={{
        background: 'linear-gradient(329deg, #FF91FA 13.55%, #FA6490 48.54%, #F7D86A 86.44%)',
      }}
    />
  </div>
<div className="container layout-wrapper bg-white border-t-[1px] border-black  ">

         <div className="justify-between flex flex-col md:flex-row py-4 items-center">
         <div className="w-1/2 md:w-2/12 ">
            <img className="w-full" src={Logo} alt="logo" />
         </div>
             <ul className="text-center md:flex gap-4 py-4">
                {
                    FotterNav.map((item)=>{
                   return(
                    <li className="text-5 " key={item.id}>
          
                       <Link to={item.link}>{item.title}</Link>


                    </li>
                   )
                    })
                }
            </ul>

         </div>
         <div>
         <div className="justify-between flex flex-col-reverse md:flex-row items-center">
              <p className="text-center"> Copyright © {new Date().getFullYear()} Sitedesign. All Rights Reserved.</p>

              <div className="flex gap-3 py-4">
                {
                    icons.map((item,index)=>{
                    return(
                      <div className="dark:bg-black bg-white p-3 icons-fotter-bg dark:darkicons-fotter-bg mt-1" key={index}>
                         <item.icon className="text-xl dark:hover-text-black hover:text-white icons-fotter dark:darkicons-fotter "/>
                          </div>
                    
                    )
                    })
                }
              </div>
           </div>
         </div>
        </div>
       </footer>
    )
}
export default Footer;