import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import WhatsApp from "./pages/WhatsApp";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Index />} />
            <Route path="/whatsapp" element={<WhatsApp />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;