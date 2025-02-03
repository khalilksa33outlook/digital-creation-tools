import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Services = () => {
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Person using MacBook Pro",
      title: "Custom Development"
    },
    {
      url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      alt: "Software code on monitor",
      title: "Code Solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      alt: "MacBook with code",
      title: "Web Development"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-[#0066cc]">Our Services</h1>
          <p className="text-lg text-gray-600">Comprehensive digital solutions for your business needs</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <div className="relative aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-[#0066cc] text-center">{image.title}</CardTitle>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0066cc]">Digital Content Creation</CardTitle>
              <CardDescription>Professional tools for content generation</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600">
                <li>QR Code Generation</li>
                <li>WhatsApp Business Integration</li>
                <li>Social Media Content Tools</li>
                <li>Custom Digital Assets</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#0066cc]">Business Solutions</CardTitle>
              <CardDescription>Enterprise-grade digital tools</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600">
                <li>Custom Tool Development</li>
                <li>API Integration</li>
                <li>Technical Consultation</li>
                <li>Support & Maintenance</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;