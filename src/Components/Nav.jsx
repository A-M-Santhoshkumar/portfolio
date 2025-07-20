import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeToggle from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom"; // <-- import useLocation
import Logo from '../assets/images/minilogo.png';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // <-- current route

  const navData = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 4, title: "Projects", link: "/projects" },
    { id: 5, title: "Contact", link: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="sticky top-0 z-50 layout-wrapper bg-white border-b-2 border-[#d8d7d3] dark:border-black">
      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 hidden dark:block">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(329deg, #FF91FA 13.55%, #FA6490 48.54%, #F7D86A 86.44%)",
          }}
        />
      </div>

      <div className="flex justify-between items-center py-4 container mx-auto">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="logo" className="w-2/3" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navData.map((item) => (
            <li
              key={item.id}
              className={`list-none transition ${
                isActive(item.link)
                  ? "text-[#f9bd3f] border-b-2 border-[#f9bd3f]" // active
                  : "text-black dark:text-white hover:border-b-2 hover:border-yellow-300 dark:hover:border-white" // inactive
              }`}
            >
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-black dark:text-white"
          >
            <RxHamburgerMenu />
          </button>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4">
            {navData.map((item) => (
              <li
                key={item.id}
                className={`pb-2 border-b ${
                  isActive(item.link)
                    ? "text-[#f9bd3f] border-[#f9bd3f]"
                    : "text-black dark:text-white border-gray-300 dark:border-gray-600"
                }`}
              >
                <Link onClick={() => setIsOpen(false)} to={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
