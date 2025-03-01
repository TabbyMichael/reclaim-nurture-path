
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Shield, Users, UserPlus } from "lucide-react";

const CommunitySupport = () => {
  return (
    <section id="community" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="space-y-6 max-w-lg">
              <div className="inline-block animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue inline-block">
                  Community
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                You Don't Have to Walk This Path Alone
              </h2>
              
              <p className="text-xl text-reclaim-charcoal/70 animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                Connect with others who understand your struggles and celebrate your victories in our supportive community spaces.
              </p>
              
              <div className="space-y-4 animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-reclaim-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Anonymous Group Discussions</h3>
                    <p className="text-reclaim-charcoal/70">
                      Share experiences and insights in topic-specific forums without revealing your identity.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                      <UserPlus className="w-4 h-4 text-reclaim-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Peer Mentorship</h3>
                    <p className="text-reclaim-charcoal/70">
                      Connect with a mentor who has successfully navigated a similar recovery journey.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-reclaim-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Safe Environment</h3>
                    <p className="text-reclaim-charcoal/70">
                      Our active moderation ensures all interactions remain supportive and respectful.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 animate-fade-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
                <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                  Join Our Community
                </Button>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              <div className="aspect-square md:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-reclaim-lightBlue/20 shadow-medium">
                <div className="absolute inset-0 bg-gradient-to-br from-reclaim-blue/5 to-reclaim-teal/5">
                  {/* Community Preview */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-reclaim-blue/20 flex items-center justify-center mr-3">
                        <Users className="w-5 h-5 text-reclaim-blue" />
                      </div>
                      <h3 className="text-xl font-semibold">Anxiety & Stress Management</h3>
                    </div>
                    
                    <div className="flex-1 glass-panel rounded-xl p-4 overflow-hidden">
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-reclaim-teal/20 flex-shrink-0 flex items-center justify-center">
                            <span className="text-xs font-semibold">M</span>
                          </div>
                          <div className="bg-white/80 rounded-lg p-3 max-w-[80%]">
                            <p className="text-sm">
                              I found that meditation helped me manage my cravings during the first month. Has anyone else tried this?
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3 justify-end">
                          <div className="bg-reclaim-blue/10 rounded-lg p-3 max-w-[80%]">
                            <p className="text-sm">
                              Yes! Daily meditation made a huge difference for me too. I started with just 5 minutes each morning.
                            </p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-reclaim-blue/20 flex-shrink-0 flex items-center justify-center">
                            <span className="text-xs font-semibold">S</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-reclaim-lightBlue flex-shrink-0 flex items-center justify-center">
                            <span className="text-xs font-semibold">A</span>
                          </div>
                          <div className="bg-white/80 rounded-lg p-3 max-w-[80%]">
                            <p className="text-sm">
                              I struggled with meditation at first but found guided sessions really helpful. I can share some links if anyone's interested.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-reclaim-blue/10 flex">
                        <div className="flex-1 bg-white rounded-lg px-3 py-2 text-reclaim-charcoal/50 text-sm">
                          Type your message...
                        </div>
                        <button className="ml-2 p-2 rounded-lg bg-reclaim-blue/10 text-reclaim-blue">
                          <MessageSquare className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <span className="text-sm text-reclaim-charcoal/60">
                        12 members online • Moderated by Sarah T.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl bg-reclaim-teal/10 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-reclaim-blue/10 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySupport;
