import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="text-center"
    >
      <h2 className="text-xl font-semibold mb-4 text-[#0066cc]">Other Ways to Reach Us</h2>
      <Link to="mailto:info@kamysoft.com" className="text-[#0066cc] hover:text-[#0052a3]">
        KamySoft
      </Link>
    </motion.div>
  );
};

export default ContactInfo;