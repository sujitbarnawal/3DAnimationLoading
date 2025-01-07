import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-14 h-8 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="green-gradient_text">SUJIT</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        {/* <NavLink className={({isActive})=>isActive? 'green-gradient_text': 'text-black'} to="/">Home</NavLink> */}
        <NavLink className={({isActive})=>isActive? 'green-gradient_text': 'text-black'} to="/about">About</NavLink>
        <NavLink className={({isActive})=>isActive? 'green-gradient_text': 'text-black'} to="/projects">Projects</NavLink>
        <NavLink className={({isActive})=>isActive? 'green-gradient_text': 'text-black'} to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
