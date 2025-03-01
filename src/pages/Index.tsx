
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import RecoveryPath from "@/components/RecoveryPath";
import CommunitySupport from "@/components/CommunitySupport";
import EmergencySupport from "@/components/EmergencySupport";
import TrackingPreview from "@/components/TrackingPreview";
import JournalPreview from "@/components/JournalPreview";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <RecoveryPath />
        <TrackingPreview />
        <CommunitySupport />
        <JournalPreview />
        <EmergencySupport />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
