import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">
            PORTFOLIO-<span className="text-yellow-200">MR.MAYANK JAIN</span>
          </Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/project" className="hover:text-yellow-300">Projects</Link></li>
          <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-black text-center py-4 space-y-4 text-lg">
          <li><Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/project" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Projects</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;