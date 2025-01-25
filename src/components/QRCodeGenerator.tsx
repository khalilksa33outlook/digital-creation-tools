import React, { useState, useCallback } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

const QRCodeGenerator = () => {
  const [text, setText] = useState('https://lovable.dev');
  const [size, setSize] = useState(256);
  const [fgColor, setFgColor] = useState('#8B5CF6');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [logo, setLogo] = useState<string | null>(null);
  const [removeLogoBackground, setRemoveLogoBackground] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      try {
        setIsProcessing(true);
        const img = await loadImage(file);
        
        if (removeLogoBackground) {
          const processedBlob = await removeBackground(img);
          const processedImg = await loadImage(processedBlob);
          setLogo(processedImg.src);
          toast.success('Logo background removed successfully!');
        } else {
          const reader = new FileReader();
          reader.onload = (e) => {
            setLogo(e.target?.result as string);
          };
          reader.readAsDataURL(file);
        }
      } catch (error) {
        console.error('Error processing image:', error);
        toast.error('Failed to process the logo. Please try again.');
      } finally {
        setIsProcessing(false);
      }
    }
  }, [removeLogoBackground]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
    disabled: isProcessing,
  });

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
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">QR Code Generator</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
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

          <div className="space-y-4">
            <Label>Logo (optional)</Label>
            <div className="flex items-center space-x-2">
              <Switch
                id="remove-bg"
                checked={removeLogoBackground}
                onCheckedChange={setRemoveLogoBackground}
                disabled={isProcessing}
              />
              <Label htmlFor="remove-bg">Remove logo background</Label>
            </div>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors
                ${isDragActive ? 'border-primary bg-primary/10' : 'border-gray-300 hover:border-primary'}
                ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <input {...getInputProps()} />
              {isProcessing ? (
                <p className="text-gray-500">Processing image...</p>
              ) : logo ? (
                <div className="flex items-center justify-center">
                  <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
                </div>
              ) : (
                <p className="text-gray-500">Drag & drop a logo, or click to select</p>
              )}
            </div>
          </div>

          <Button onClick={downloadQR} className="w-full" disabled={isProcessing}>
            Download QR Code
          </Button>
        </div>

        <div className="glass-panel p-6 flex items-center justify-center">
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <QRCodeSVG
              value={text}
              size={size}
              fgColor={fgColor}
              bgColor={bgColor}
              level="H"
              imageSettings={logo ? {
                src: logo,
                width: size * 0.25,
                height: size * 0.25,
                excavate: true,
              } : undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;