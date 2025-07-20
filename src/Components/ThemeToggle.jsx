// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative flex gap-3 items-center bg-gray-300 dark:bg-gray-700 rounded-full px-1 py-1 w-20"
    >
      {/* Slider circle */}
      <div
        className={`absolute top-1 left-1 w-8 h-8 rounded-full bg-white dark:bg-black shadow-md transition-all duration-300 ${
          darkMode ? "translate-x-[44px]" : "translate-x-0"
        }`}
      ></div>

      {/* Light mode icon */}
      <button
        onClick={() => setDarkMode(false)}
        className={`z-10 p-1 text-xl ${
          !darkMode ? "text-yellow-500" : "text-gray-500"
        } transition`}
      >
        <IoSunnyOutline />
      </button>

      {/* Dark mode icon */}
      <button
        onClick={() => setDarkMode(true)}
        className={`z-10 p-1 text-xl ${
          darkMode ? "text-blue-400" : "text-gray-500"
        } transition`}
      >
        <FiMoon />
      </button>
    </div>
  );
}
{
  
  /* 
  Add This to index.html (optional but recommended)
  
  <script>
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark');
  }
</script> */}

export default ThemeToggle;
