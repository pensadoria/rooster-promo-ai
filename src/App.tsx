import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Promocoes from "./pages/Promocoes";
import Fidelidades from "./pages/Fidelidades";
import SobreNos from "./pages/SobreNos";
import Calculator from "./pages/Calculator";
import Contact from "./pages/Contact";
import History from "./pages/History";
import QRRedirect from "./pages/QRRedirect";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppButton />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/promocoes" element={<Promocoes />} />
          <Route path="/fidelidades" element={<Fidelidades />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/calculadora" element={<Calculator />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/historia" element={<History />} />
          <Route path="/qr" element={<QRRedirect />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
