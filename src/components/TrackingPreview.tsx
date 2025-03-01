
import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calendar, Activity, CheckCircle2 } from "lucide-react";

const TrackingPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-soft">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <div className="aspect-square md:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-medium">
                <div className="absolute inset-0 bg-white p-6 md:p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold">Progress Tracker</h3>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-lg bg-reclaim-blue/10 text-reclaim-blue">
                        <Calendar className="w-5 h-5" />
                      </button>
                      <button className="p-2 rounded-lg bg-reclaim-teal/10 text-reclaim-teal">
                        <TrendingUp className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Current Streak</h4>
                      <span className="text-reclaim-blue font-semibold">28 Days</span>
                    </div>
                    <div className="w-full h-3 bg-reclaim-blue/10 rounded-full overflow-hidden">
                      <div className="h-full bg-reclaim-blue rounded-full" style={{ width: "75%" }}></div>
                    </div>
                    <div className="mt-2 text-sm text-reclaim-charcoal/60 text-right">
                      Next milestone: 30 Days
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-medium mb-4">Weekly Check-in</h4>
                    <div className="grid grid-cols-7 gap-2">
                      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                        <div key={index} className="text-center">
                          <div className="text-xs text-reclaim-charcoal/60 mb-2">{day}</div>
                          <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                            index < 5 
                              ? "bg-reclaim-teal/20 text-reclaim-teal" 
                              : (index === 5 
                                ? "bg-reclaim-blue/20 text-reclaim-blue" 
                                : "bg-reclaim-charcoal/10 text-reclaim-charcoal/40")
                          }`}>
                            {index < 5 ? (
                              <CheckCircle2 className="w-5 h-5" />
                            ) : index === 5 ? (
                              <Activity className="w-5 h-5" />
                            ) : null}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-reclaim-blue/5 border border-reclaim-blue/10 rounded-xl p-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-reclaim-blue/20 flex items-center justify-center mr-3 mt-1">
                        <TrendingUp className="w-5 h-5 text-reclaim-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Progress Insight</h4>
                        <p className="text-sm text-reclaim-charcoal/70">
                          You've shown great consistency on weekdays. Weekend activities might help maintain your streak.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-reclaim-blue/10 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-reclaim-teal/10 -z-10"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 max-w-lg">
              <div className="inline-block animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue inline-block">
                  Progress Tracking
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                Visualize Your Recovery Journey
              </h2>
              
              <p className="text-xl text-reclaim-charcoal/70 animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                See your progress in real-time with intuitive charts and metrics that celebrate your successes and help identify areas for growth.
              </p>
              
              <div className="space-y-4 animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-reclaim-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Daily Check-ins</h3>
                    <p className="text-reclaim-charcoal/70">
                      Simple daily check-ins to track your mood, triggers, and accomplishments.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-reclaim-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Progress Analytics</h3>
                    <p className="text-reclaim-charcoal/70">
                      Detailed charts and insights to help you understand your recovery patterns.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                      <Activity className="w-4 h-4 text-reclaim-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Streak Milestones</h3>
                    <p className="text-reclaim-charcoal/70">
                      Celebrate your commitment with milestone badges and personalized achievements.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 animate-fade-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
                <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                  Start Tracking
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingPreview;
