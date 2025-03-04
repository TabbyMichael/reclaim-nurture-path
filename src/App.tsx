
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "./pages/Index";
import Community from "./pages/Community";
import JoinCommunity from "./pages/JoinCommunity";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // Changed from SignUp to Signup
import ContactUs from "./pages/ContactUs"; // Changed from Contact to ContactUs
import About from "./pages/About";
import NotFound from "./pages/NotFound"; // Changed from PageNotFound to NotFound
import PasswordReset from "./pages/PasswordReset"; // Will create this
import TermsOfService from "./pages/TermsOfService"; // Changed from Terms to TermsOfService
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Changed from Privacy to PrivacyPolicy
import { Toaster } from "@/components/ui/toaster"
import PageTransition from "@/components/PageTransition";

function App() {
  return (
    <>
      <BrowserRouter>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/community" element={<Community />} />
            <Route path="/join-community" element={<JoinCommunity />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/reset-password" element={<PasswordReset />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
