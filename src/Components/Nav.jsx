// src/components/Nav.jsx
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeToggle from "./ThemeToggle"; // <-- import it
import { Link } from "react-router-dom";
import Logo from '../assets/images/minilogo.png'

function Nav() {
  const navData = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },

    { id: 4, title: "projects", link: "/projects" },
    { id: 5, title: "Contact", link: "/contact" },

  ];

  return (
  
<div className="sticky top-0 z-50 flex justify-between items-center py-4 container mx-auto layout-wrapper bg-white border-b-2 border-[##d8d7d3] dark:border-black">
  <div className="absolute bottom-0 left-0 w-full h-0.5 hidden dark:block ">
    <div
      className="w-full h-full  "
      style={{
        background: 'linear-gradient(329deg, #FF91FA 13.55%, #FA6490 48.54%, #F7D86A 86.44%)',
      }}
    />
  </div>  

      {/* Logo */}
      <div>
      
     <Link to="/">
  <img src={Logo} alt="logo" className="w-2/3" />
</Link>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="hidden md:flex gap-6 ">
          {navData.map((item) => (
            <li 
              key={item.id}
              className="text-black dark:text-white  transition "
            >
             
             <span className="hover:border-b-2 hover:border-yellow-300 dark:border-white">
              <Link  to={item.link}>{item.title}  </Link>
             </span>

            </li>
          ))}
        </ul>
      </nav>

      {/* Right Side: Hamburger + Toggle */}
      <div className="flex items-center gap-6">
        <div className="md:hidden text-2xl text-black dark:text-white">
          <RxHamburgerMenu />
        </div>
        <ThemeToggle /> {/* <-- here is your toggle */}
      </div>

      
    </div>
  );
}

export default Nav;
