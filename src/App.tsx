
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "./pages/Index";
import Community from "./pages/Community";
import JoinCommunity from "./pages/JoinCommunity";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PasswordReset from "./pages/PasswordReset";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { Toaster } from "@/components/ui/toaster";
import PageTransition from "@/components/PageTransition";
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route 
                path="/community" 
                element={
                  <ProtectedRoute>
                    <Community />
                  </ProtectedRoute>
                } 
              />
              <Route
                path="/join-community"
                element={
                  <ProtectedRoute>
                    <JoinCommunity />
                  </ProtectedRoute>
                }
              />
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
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
