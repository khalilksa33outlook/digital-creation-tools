import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/434cb4be-77bd-41de-b7ff-1775c1b00c83.png" 
              alt="KamySoft Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-[#61dafb]">KamySoft</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/tools" className="text-gray-600 hover:text-[#61dafb] transition-colors">
              QR Code
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-[#61dafb] transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-[#61dafb] transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#61dafb] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;