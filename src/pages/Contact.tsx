import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [donationAmount, setDonationAmount] = useState("10");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
    });
  };

  const handlePayPalDonation = () => {
    const baseUrl = 'https://www.paypal.com/paypalme/khalilksa33';
    const amount = donationAmount;
    window.open(`${baseUrl}/${amount}`, '_blank');
    toast({
      title: "Thank you!",
      description: `Redirecting to PayPal for $${amount} donation`,
    });
  };

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
          <Button type="submit" className="w-full">Send Message</Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Other Ways to Reach Us</h2>
          <Link to="mailto:info@kamysoft.com" className="text-[#61dafb] hover:text-[#4fa8c7]">
            KamySoft
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <div className="glass-panel p-6">
            <h3 className="text-lg font-medium mb-4 text-[#61dafb]">Please donate for needy people</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Select Amount</label>
                <Select value={donationAmount} onValueChange={setDonationAmount}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">$5</SelectItem>
                    <SelectItem value="10">$10</SelectItem>
                    <SelectItem value="20">$20</SelectItem>
                    <SelectItem value="50">$50</SelectItem>
                    <SelectItem value="100">$100</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                variant="default"
                className="w-full"
                onClick={handlePayPalDonation}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Donate with PayPal
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;