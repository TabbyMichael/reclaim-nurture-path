
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-reclaim-blue to-reclaim-teal text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-12 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[50%] -left-[10%] w-[60%] h-[100%] rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[80%] rounded-full bg-white/5 blur-3xl" />
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              Begin Your Recovery Journey Today
            </h2>
            
            <p className="text-xl text-white/80 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Take the first step toward a healthier, more balanced life. Our community is here to support you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              <Link to="/free-trial">
                <Button className="bg-white hover:bg-white/90 text-reclaim-blue text-lg px-8 py-6 h-auto rounded-xl">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/learn-more">
                <Button variant="outline" className="border-white/30 hover:bg-white/10 text-white text-lg px-8 py-6 h-auto rounded-xl">
                  <span>Take a Tour</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <p className="mt-6 text-white/60 animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              No credit card required. Start with a 14-day free trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
