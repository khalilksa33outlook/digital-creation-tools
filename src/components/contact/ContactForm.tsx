import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">Name</label>
        <Input placeholder="Your name" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
        <Input type="email" placeholder="your@email.com" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-2">Message</label>
        <Textarea placeholder="How can we help you?" className="min-h-[150px]" required />
      </div>
      <Button type="submit" className="w-full bg-[#0066cc] hover:bg-[#0052a3]">Send Message</Button>
    </motion.form>
  );
};

export default ContactForm;