import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
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

  return (
    <div className="glass-panel p-6 space-y-6">
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

      <Button onClick={downloadQR} className="w-full" disabled={isProcessing}>
        Download QR Code
      </Button>
    </div>
  );
};

export default QRCodeForm;