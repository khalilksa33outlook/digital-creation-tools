import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import LogoUploader from './LogoUploader';
import { toast } from 'sonner';

interface QRCodeFormProps {
  text: string;
  setText: (text: string) => void;
  size: number;
  setSize: (size: number) => void;
  fgColor: string;
  setFgColor: (color: string) => void;
  bgColor: string;
  setBgColor: (color: string) => void;
  logo: string | null;
  setLogo: (logo: string | null) => void;
  removeLogoBackground: boolean;
  setRemoveLogoBackground: (remove: boolean) => void;
  isProcessing: boolean;
  setIsProcessing: (processing: boolean) => void;
}

const QRCodeForm = ({
  text,
  setText,
  size,
  setSize,
  fgColor,
  setFgColor,
  bgColor,
  setBgColor,
  logo,
  setLogo,
  removeLogoBackground,
  setRemoveLogoBackground,
  isProcessing,
  setIsProcessing
}: QRCodeFormProps) => {
  const downloadQR = () => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = url;
      link.click();
      toast.success('QR Code downloaded successfully!');
    }
  };

  const resetForm = () => {
    setText('https://lovable.dev');
    setSize(256);
    setFgColor('#8B5CF6');
    setBgColor('#FFFFFF');
    setLogo(null);
    setRemoveLogoBackground(false);
    toast.success('Form reset successfully!');
  };

  const handleInputType = (value: string) => {
    switch (value) {
      case 'whatsapp':
        setText('https://wa.me/');
        break;
      case 'tel':
        setText('tel:');
        break;
      case 'email':
        setText('mailto:');
        break;
      case 'sms':
        setText('sms:');
        break;
      default:
        setText('https://');
    }
  };

  return (
    <div className="glass-panel p-6 space-y-6">
      <div className="space-y-2">
        <Label>Input Type</Label>
        <Select onValueChange={handleInputType} defaultValue="url">
          <SelectTrigger>
            <SelectValue placeholder="Select input type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="url">URL</SelectItem>
            <SelectItem value="whatsapp">WhatsApp</SelectItem>
            <SelectItem value="tel">Phone</SelectItem>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="sms">SMS</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Content</Label>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter URL or text"
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label>Size: {size}px</Label>
        <Slider
          value={[size]}
          onValueChange={(value) => setSize(value[0])}
          min={128}
          max={512}
          step={8}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Foreground Color</Label>
          <Input
            type="color"
            value={fgColor}
            onChange={(e) => setFgColor(e.target.value)}
            className="w-full h-10"
          />
        </div>
        <div className="space-y-2">
          <Label>Background Color</Label>
          <Input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-full h-10"
          />
        </div>
      </div>

      <LogoUploader
        logo={logo}
        setLogo={setLogo}
        removeLogoBackground={removeLogoBackground}
        setRemoveLogoBackground={setRemoveLogoBackground}
        isProcessing={isProcessing}
        setIsProcessing={setIsProcessing}
      />

      <div className="flex gap-4">
        <Button onClick={downloadQR} className="flex-1" disabled={isProcessing}>
          Download QR Code
        </Button>
        <Button onClick={resetForm} variant="outline" className="flex-1" disabled={isProcessing}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default QRCodeForm;