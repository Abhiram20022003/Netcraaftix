import "./App.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ServicePage } from "./pages/CorporateWebsite";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cctv-installation-hyderabad" element={<ServicePage />} />
          <Route path="/networking-solutions-hyderabad" element={<ServicePage />} />
          <Route path="/computers-printers-laptops-hyderabad" element={<ServicePage />} />
          <Route path="/smart-classroom-displays-hyderabad" element={<ServicePage />} />
          <Route path="/software-development-hyderabad" element={<ServicePage />} />
          <Route path="/biometric-attendance-hyderabad" element={<ServicePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
export default App;
