import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Properties from "./pages/Properties.tsx";
import PropertyDetail from "./pages/PropertyDetail.tsx";
import MapPage from "./pages/MapPage.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import NotFound from "./pages/NotFound.tsx";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AriaAssistant from "./components/ai/AriaAssistant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:slug" element={<PropertyDetail />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <AriaAssistant />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
