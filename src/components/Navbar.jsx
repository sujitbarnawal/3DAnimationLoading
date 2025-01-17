// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <header className="header">
//       <NavLink
//         to="/"
//         className="w-14 h-8 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
//       >
//         <p className="green-gradient_text">SUJIT</p>
//       </NavLink>
//       <nav className="flex text-lg gap-7 font-medium">
//         {/* <NavLink className={({isActive})=>isActive? 'green-gradient_text': 'text-black'} to="/">Home</NavLink> */}
//         <NavLink className={({isActive})=>isActive? 'green-gradient_text': 'text-black'} to="/about">About</NavLink>
//         <NavLink className={({isActive})=>isActive? 'green-gradient_text': 'text-black'} to="/projects">Projects</NavLink>
//         <NavLink className={({isActive})=>isActive? 'green-gradient_text': 'text-black'} to="/contact">Contact</NavLink>
//       </nav>
//     </header>
//   );
// }

import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <header className="header ">
      {/* Logo Section */}
      <NavLink
        to="/"
        className="w-14 h-8 rounded-lg bg-white flex self-start items-center justify-center font-bold shadow-md"
      >
        <p className="green-gradient_text ">SUJIT</p>
      </NavLink>

      {/* Desktop Navigation Links */}
      <nav className="flex text-lg gap-7 font-medium space-x-4 sm:space-x-8 lg:space-x-12">
        <div className="hidden sm:flex space-x-4">
          <NavLink
            className={({ isActive }) =>
              isActive ? "green-gradient_text" : "text-black"
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "green-gradient_text" : "text-black"
            }
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "green-gradient_text" : "text-black"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="sm:hidden flex flex-start items-center">
        <button onClick={toggleMenu} className="text-black">
          {isMenuOpen ? "" : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="sm:hidden relative mt-0  bg-white text-black text-center py-4 space-y-4 rounded-lg shadow-lg flex flex-col items-center px-6">
          {/* Links in Column */}
          <div className="flex flex-col items-start space-y-4 mr-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? "green-gradient_text" : "text-black"
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "green-gradient_text" : "text-black"
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "green-gradient_text" : "text-black"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </div>

          {/* Close Button (Cross) */}
          <button onClick={toggleMenu} className=" absolute right-0 top-0 self-end mr-4 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </header>
  );
}
          