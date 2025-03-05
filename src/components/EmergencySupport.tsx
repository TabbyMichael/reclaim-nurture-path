
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, User, Clock, ExternalLink, Bell, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const EmergencySupport = () => {
  return (
    <section id="support" className="py-16 md:py-24 bg-reclaim-charcoal text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white mb-4 inline-block">
            Emergency Support
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Always Here When You Need Help
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Recovery has difficult moments. Our emergency support features are designed to provide immediate help when you need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-reclaim-teal/20 flex items-center justify-center mr-4">
                <Bell className="w-6 h-6 text-reclaim-teal" />
              </div>
              <h3 className="text-2xl font-bold">Panic Button</h3>
            </div>
            
            <p className="text-white/70 mb-6">
              Our panic button provides immediate access to coping strategies, distraction techniques, and direct contact with support resources.
            </p>
            
            <Link to="/emergency">
              <Button className="w-full bg-reclaim-teal hover:bg-reclaim-teal/90 text-white mb-4 h-14 text-lg">
                <AlertCircle className="mr-2 h-5 w-5" />
                Access Emergency Support
              </Button>
            </Link>
            
            <p className="text-white/50 text-sm">
              In life-threatening situations, please call emergency services immediately by dialing 911 (US) or your local emergency number.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <div className="flex items-start md:items-center flex-col md:flex-row">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Crisis Hotlines</h4>
                  <p className="text-white/70 mb-3">
                    Immediate phone support from trained professionals, available 24/7.
                  </p>
                  <Link to="/emergency" className="inline-flex items-center text-reclaim-teal hover:text-reclaim-teal/80 transition-colors">
                    View Directory <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              <div className="flex items-start md:items-center flex-col md:flex-row">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Professional Resources</h4>
                  <p className="text-white/70 mb-3">
                    Vetted directory of therapists and support groups specializing in addiction recovery.
                  </p>
                  <Link to="/emergency" className="inline-flex items-center text-reclaim-teal hover:text-reclaim-teal/80 transition-colors">
                    Find Support <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <div className="flex items-start md:items-center flex-col md:flex-row">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">Immediate Coping Strategies</h4>
                  <p className="text-white/70 mb-3">
                    Quick exercises and techniques to help manage cravings and difficult moments.
                  </p>
                  <Link to="/emergency" className="inline-flex items-center text-reclaim-teal hover:text-reclaim-teal/80 transition-colors">
                    View Strategies <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySupport;
