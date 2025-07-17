import { FaArrowRightLong } from "react-icons/fa6";

function ThemeBtn({ children = "Click Me", onClick, icon = true, isActive = true }) {
  return (
    <div className="py-10 relative z-10 ">
      <button
        className={`theme-sk-btn relative inline-flex items-center justify-center px-6 md:px-10 py-0 h-12
          text-sm md:text-base leading-6 rounded-lg cursor-pointer select-none transition-all duration-200
          ${isActive
            ? 'active:bg-primary dark:bg-white dark:text-black text-white font-sans bg-primary border-2 border-primary'
            : 'text-gray-950 font-sans dark:bg-white dark:text-black bg-white border-2 border-white active:bg-white'
          }`}
        onClick={onClick}
      >
        {children}
        {icon && (
          <FaArrowRightLong
            className={`theme-sk-arrow ${isActive ? 'text-white' : 'text-gray-950'}`}
          />
        )}
      </button>
    </div>
  );
}

export default ThemeBtn;
