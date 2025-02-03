import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const DonationPanel = () => {
  const { toast } = useToast();
  const [donationAmount, setDonationAmount] = useState("10");

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="glass-panel p-6"
    >
      <h3 className="text-lg font-medium mb-4 text-[#0066cc]">Please donate for needy people</h3>
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
          className="w-full bg-[#0066cc] hover:bg-[#0052a3]"
          onClick={handlePayPalDonation}
        >
          <CreditCard className="w-5 h-5 mr-2" />
          Donate with PayPal
        </Button>
      </div>
    </motion.div>
  );
};

export default DonationPanel;