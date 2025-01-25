import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            KamySoft
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/tools" className="text-gray-600 hover:text-primary transition-colors">
              Tools
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;