import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-3 shadow-md  ">
      <div className="container mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          <Link to="/">PORTFOLIO-<span className="text-2xl text-yellow-200">MR.MAYANK JAIN</span></Link>
        </h1>

        <ul className="flex space-x-6 text-lg">
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/project" className="hover:text-yellow-300">Projects</Link></li>
          <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;