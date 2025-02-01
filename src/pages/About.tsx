import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-[#61dafb] text-center">About KamySoft</h1>
          <p className="text-lg text-gray-600 mb-6">
            KamySoft is a pioneering digital solutions provider, dedicated to creating innovative tools that empower businesses and individuals in their digital journey.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Founded with a vision to simplify digital content creation, we specialize in developing user-friendly tools that combine powerful functionality with intuitive design.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#61dafb]">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            To provide accessible, powerful, and innovative digital tools that help businesses and individuals thrive in the digital age.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
