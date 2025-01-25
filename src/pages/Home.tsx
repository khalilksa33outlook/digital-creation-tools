import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text"
          >
            KamySoft Digital Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Empowering your digital journey with cutting-edge content creation tools and services
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/tools">
              <Button size="lg" className="mr-4">
                Explore Tools
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Digital Toolbox</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-4">QR Code Generator</h3>
              <p className="text-gray-600 mb-4">Create customized QR codes with logo integration and advanced styling options.</p>
              <Link to="/tools" className="text-primary hover:underline">Learn more →</Link>
            </div>
            <div className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-4">WhatsApp Link Creator</h3>
              <p className="text-gray-600 mb-4">Generate WhatsApp chat links with pre-filled messages for seamless communication.</p>
              <Link to="/whatsapp" className="text-primary hover:underline">Learn more →</Link>
            </div>
            <div className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
              <p className="text-gray-600 mb-4">More exciting tools are in development. Stay tuned for updates!</p>
              <span className="text-gray-400">Coming soon →</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;