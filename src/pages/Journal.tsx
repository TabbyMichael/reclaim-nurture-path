import React from "react";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  PencilLine,
  Calendar,
  BarChart,
  Smile,
  ListTodo,
  CloudLightning,
  Award,
  Lock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JournalManager from "@/components/JournalManager";

const Journal = () => {
  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-r from-reclaim-blue to-reclaim-teal text-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                Document Your Recovery Journey
              </h1>
              <p className="text-xl text-white/80 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                Our guided journaling tools help you track progress, identify patterns, and celebrate milestones along your recovery path.
              </p>
            </div>
          </div>
        </section>

        {/* Active Journaling Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <JournalManager />
          </div>
        </section>

        {/* Journal Features */}
        <section className="py-16 md:py-24 bg-reclaim-sand">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-4 inline-block">
                Journal Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powerful Tools for Self-Reflection
              </h2>
              <p className="text-xl text-reclaim-charcoal/70 max-w-2xl mx-auto">
                Our journaling system is designed specifically for recovery, with features that support your healing journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card rounded-2xl p-8">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <PencilLine className="w-7 h-7 text-reclaim-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Guided Prompts</h3>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Evidence-based journal prompts designed by addiction specialists to guide your reflection process.
                </p>
                <a href="#" className="text-reclaim-blue hover:text-reclaim-blue/80">Try a Prompt →</a>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-reclaim-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Daily Check-ins</h3>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Quick daily mood and urge tracking to help you identify patterns and triggers over time.
                </p>
                <a href="#" className="text-reclaim-blue hover:text-reclaim-blue/80">View Check-in →</a>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <BarChart className="w-7 h-7 text-reclaim-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Progress Insights</h3>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Visual representations of your journey, highlighting patterns, improvements, and areas for growth.
                </p>
                <a href="#" className="text-reclaim-blue hover:text-reclaim-blue/80">See Insights →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Journal Demo */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <div className="space-y-6 max-w-lg">
                  <div className="inline-block">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue inline-block">
                      Journal Experience
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Tailored to Your Recovery Journey
                  </h2>
                  
                  <p className="text-xl text-reclaim-charcoal/70">
                    Your journal adapts to your recovery path, providing relevant prompts and insights based on your specific goals and challenges.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="mr-4 mt-1">
                        <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                          <Smile className="w-4 h-4 text-reclaim-blue" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Emotional Tracking</h3>
                        <p className="text-reclaim-charcoal/70">
                          Record and visualize your emotional state to identify patterns and growth over time.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-4 mt-1">
                        <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                          <ListTodo className="w-4 h-4 text-reclaim-blue" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Coping Strategies Library</h3>
                        <p className="text-reclaim-charcoal/70">
                          Document what works for you and build a personalized toolkit of effective strategies.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-4 mt-1">
                        <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                          <CloudLightning className="w-4 h-4 text-reclaim-blue" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Trigger Identification</h3>
                        <p className="text-reclaim-charcoal/70">
                          Recognize and document your triggers to develop more effective prevention strategies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="aspect-[4/3] bg-white rounded-2xl shadow-medium overflow-hidden">
                    <div className="absolute inset-0 p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <BookOpen className="w-5 h-5 text-reclaim-blue mr-2" />
                          <h3 className="text-xl font-bold">My Recovery Journal</h3>
                        </div>
                        <div className="text-sm text-reclaim-charcoal/60">
                          June 12, 2023
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-reclaim-blue">Today's Guided Prompt:</h4>
                        <div className="p-4 bg-reclaim-blue/5 border border-reclaim-blue/20 rounded-lg">
                          <p className="text-reclaim-charcoal/80 italic">
                            Describe a moment this week when you felt proud of your progress. What specific actions or choices contributed to this feeling?
                          </p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="p-4 bg-reclaim-sand/50 border border-reclaim-sand rounded-lg min-h-[120px]">
                          <p className="text-reclaim-charcoal/80">
                            I felt really proud yesterday when I was invited to a work happy hour and I went, but stuck to my sparkling water with lime. In the past, I would have either avoided the event entirely or given in to peer pressure. Instead, I enjoyed the social connection without compromising my sobriety. What made it possible was planning ahead - I decided before going what I would drink and reminded myself why my recovery matters to me.
                          </p>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-reclaim-teal/5 border border-reclaim-teal/20 rounded-xl">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-reclaim-teal/20 flex items-center justify-center mr-3 mt-1">
                            <Award className="w-5 h-5 text-reclaim-teal" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Milestone Recognized</h4>
                            <p className="text-sm text-reclaim-charcoal/70">
                              This is your 5th social situation where you've successfully maintained boundaries. Significant progress in your social resilience!
                            </p>
                          </div>
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

        {/* Privacy */}
        <section className="py-16 md:py-20 bg-reclaim-sand">
          <div className="max-w-6xl mx-auto px-4">
            <div className="glass-panel rounded-2xl p-8 border border-reclaim-blue/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                    <Lock className="w-12 h-12 text-reclaim-blue" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Your Privacy Is Our Priority
                  </h2>
                  <p className="text-reclaim-charcoal/70 mb-6">
                    Your journal entries are private and encrypted. We use industry-leading security practices to ensure your personal reflections remain confidential. You control what to share and what to keep private.
                  </p>
                  <Button variant="outline" className="border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10">
                    Learn About Our Privacy Practices
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Start Journaling CTA - Removed since we now have active journaling */}
      </main>
      <Footer />
    </div>
  );
};

export default Journal;
