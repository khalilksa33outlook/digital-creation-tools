import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Services = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-[#61dafb]">Our Services</h1>
          <p className="text-lg text-gray-600">Comprehensive digital solutions for your business needs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Digital Content Creation</CardTitle>
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
              <CardTitle>Business Solutions</CardTitle>
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