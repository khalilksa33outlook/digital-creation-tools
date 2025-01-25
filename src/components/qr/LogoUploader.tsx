import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

interface LogoUploaderProps {
  logo: string | null;
  setLogo: (logo: string | null) => void;
  removeLogoBackground: boolean;
  setRemoveLogoBackground: (remove: boolean) => void;
  isProcessing: boolean;
  setIsProcessing: (processing: boolean) => void;
}

const LogoUploader = ({
  logo,
  setLogo,
  removeLogoBackground,
  setRemoveLogoBackground,
  isProcessing,
  setIsProcessing
}: LogoUploaderProps) => {
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
  }, [removeLogoBackground, setLogo, setIsProcessing]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
    disabled: isProcessing,
  });

  return (
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
  );
};

export default LogoUploader;