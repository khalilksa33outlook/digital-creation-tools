import { QRCodeSVG } from 'qrcode.react';

interface QRCodePreviewProps {
  text: string;
  size: number;
  fgColor: string;
  bgColor: string;
  logo: string | null;
}

const QRCodePreview = ({ text, size, fgColor, bgColor, logo }: QRCodePreviewProps) => {
  return (
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
  );
};

export default QRCodePreview;