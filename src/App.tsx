import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ServiceLandingPage } from "./pages/LeadFocusedWebsite";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/software-development-hyderabad" element={<ServiceLandingPage />} />
          <Route path="/networking-solutions-hyderabad" element={<ServiceLandingPage />} />
          <Route path="/cctv-installation-hyderabad" element={<ServiceLandingPage />} />
          <Route path="/biometric-attendance-hyderabad" element={<ServiceLandingPage />} />
          <Route path="/smart-board-installation-hyderabad" element={<ServiceLandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
