import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "./pages/Index";
import Community from "./pages/Community";
import JoinCommunity from "./pages/JoinCommunity";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import PasswordReset from "./pages/PasswordReset";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/reset-password" element={<PasswordReset />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </PageTransition>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
