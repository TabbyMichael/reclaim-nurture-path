
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[60%] rounded-full bg-reclaim-lightBlue/30 blur-3xl" />
        <div className="absolute top-[10%] right-[5%] w-[30%] h-[40%] rounded-full bg-reclaim-teal/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-6">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-6 inline-block">
                Begin Your Journey
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              Reclaim Your Life,
              <span className="text-reclaim-blue"> One Day</span> at a Time
            </h1>
            
            <p className="text-xl text-reclaim-charcoal/80 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              A supportive platform designed to help you overcome addiction
              and behavioral challenges with personalized recovery paths,
              progress tracking, and a compassionate community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <Link to="/start-path">
                <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white text-lg px-8 py-6 h-auto rounded-xl">
                  Start Recovery
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-reclaim-charcoal/20 hover:bg-reclaim-charcoal/5 text-reclaim-charcoal text-lg px-8 py-6 h-auto rounded-xl">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative animate-fade-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <div className="aspect-square md:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-reclaim-lightBlue/30 shadow-medium relative">
                <div className="absolute inset-0 bg-gradient-to-br from-reclaim-blue/10 to-reclaim-teal/10 backdrop-blur-sm">
                  {/* Placeholder for hero image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass-panel px-8 py-6 rounded-xl max-w-xs text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 rounded-full bg-reclaim-teal/20 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-reclaim-teal flex items-center justify-center">
                            <span className="text-white text-xl font-bold">30</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">You're Doing Great!</h3>
                      <p className="text-sm text-reclaim-charcoal/70">
                        Congratulations on your 30-day milestone. Keep going!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-reclaim-blue/10 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-reclaim-teal/10 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
