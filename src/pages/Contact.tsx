import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Coffee, CreditCard, DollarSign } from "lucide-react";
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

  const handleBuyMeACoffee = () => {
    window.open('https://www.buymeacoffee.com/khalilksa33', '_blank');
    toast({
      title: "Thank you!",
      description: "Redirecting to Buy Me a Coffee",
    });
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
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
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input placeholder="Your name" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input type="email" placeholder="your@email.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
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
          <h2 className="text-xl font-semibold mb-4">Other Ways to Reach Us</h2>
          <p className="text-gray-600">Email: info@kamysoft.com</p>
          <p className="text-gray-600">Phone: +966 50 716 3166</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 space-y-6"
        >
          <h2 className="text-xl font-semibold mb-6 text-center">Support Our Work</h2>
          
          <div className="bg-card rounded-lg p-6 border shadow-sm">
            <h3 className="text-lg font-medium mb-4">Make a PayPal Donation</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Select Amount</label>
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

          <div className="bg-card rounded-lg p-6 border shadow-sm">
            <h3 className="text-lg font-medium mb-4">Buy Me a Coffee</h3>
            <Button
              variant="outline"
              className="w-full"
              onClick={handleBuyMeACoffee}
            >
              <Coffee className="w-5 h-5 mr-2" />
              Buy me a coffee
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;