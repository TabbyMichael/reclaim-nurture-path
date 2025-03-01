
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HelpCenter from "./pages/HelpCenter";
import EmergencyResources from "./pages/EmergencyResources";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Blog from "./pages/Blog";
import Community from "./pages/Community";
import Journal from "./pages/Journal";
import Emergency from "./pages/Emergency";
import FreeTrial from "./pages/FreeTrial";
import StartTracking from "./pages/StartTracking";
import StartPath from "./pages/StartPath";
import LearnMore from "./pages/LearnMore";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/emergency-resources" element={<EmergencyResources />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/free-trial" element={<FreeTrial />} />
          <Route path="/start-tracking" element={<StartTracking />} />
          <Route path="/start-path" element={<StartPath />} />
          <Route path="/learn-more" element={<LearnMore />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
