import { motion } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import DonationPanel from "@/components/contact/DonationPanel";

const Contact = () => {
  return (
    <div className="min-h-screen pt-28 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-[#0066cc]">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with our team</p>
        </motion.div>

        <ContactForm />
        <ContactInfo />
        <DonationPanel />
      </div>
    </div>
  );
};

export default Contact;