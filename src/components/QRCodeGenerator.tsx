import { useState } from 'react';
import QRCodeForm from './qr/QRCodeForm';
import QRCodePreview from './qr/QRCodePreview';

const QRCodeGenerator = () => {
  const [text, setText] = useState('https://lovable.dev');
  const [size, setSize] = useState(256);
  const [fgColor, setFgColor] = useState('#8B5CF6');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [logo, setLogo] = useState<string | null>(null);
  const [removeLogoBackground, setRemoveLogoBackground] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">QR Code Generator</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <QRCodeForm
          text={text}
          setText={setText}
          size={size}
          setSize={setSize}
          fgColor={fgColor}
          setFgColor={setFgColor}
          bgColor={bgColor}
          setBgColor={setBgColor}
          logo={logo}
          setLogo={setLogo}
          removeLogoBackground={removeLogoBackground}
          setRemoveLogoBackground={setRemoveLogoBackground}
          isProcessing={isProcessing}
          setIsProcessing={setIsProcessing}
        />
        
        <QRCodePreview
          text={text}
          size={size}
          fgColor={fgColor}
          bgColor={bgColor}
          logo={logo}
        />
      </div>
    </div>
  );
};

export default QRCodeGenerator;