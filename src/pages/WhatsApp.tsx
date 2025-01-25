import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const WhatsApp = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const generateWhatsAppLink = () => {
    const formattedPhone = phone.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message);
    const link = `https://wa.me/${formattedPhone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
    
    navigator.clipboard.writeText(link);
    toast.success('WhatsApp link copied to clipboard!');
    return link;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">WhatsApp Link Generator</h1>
      
      <div className="glass-panel p-6 space-y-6">
        <div className="space-y-2">
          <Label>Phone Number (with country code)</Label>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g., +1234567890"
          />
        </div>

        <div className="space-y-2">
          <Label>Pre-filled Message (optional)</Label>
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          />
        </div>

        <Button onClick={generateWhatsAppLink} className="w-full">
          Generate WhatsApp Link
        </Button>
      </div>
    </div>
  );
};

export default WhatsApp;