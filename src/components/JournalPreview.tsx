import React from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, PencilLine, Sparkles, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const JournalPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="space-y-6 max-w-lg">
              <div className="inline-block animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue inline-block">
                  Guided Journaling
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                Document Your Thoughts and Feelings
              </h2>
              
              <p className="text-xl text-reclaim-charcoal/70 animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                Our guided journaling system helps you process emotions, identify patterns, and celebrate growth moments in your recovery journey.
              </p>
              
              <div className="space-y-4 animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                      <PencilLine className="w-4 h-4 text-reclaim-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Guided Prompts</h3>
                    <p className="text-reclaim-charcoal/70">
                      Thoughtful prompts to help you reflect on your progress and challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-reclaim-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Pattern Insights</h3>
                    <p className="text-reclaim-charcoal/70">
                      AI-powered analysis to help identify triggers and patterns over time.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                      <Lightbulb className="w-4 h-4 text-reclaim-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Reflection Highlights</h3>
                    <p className="text-reclaim-charcoal/70">
                      Revisit important moments and insights from your past entries.
                    </p>
                  </div>
                </div>
              </div>
              
            <div className="pt-4 animate-fade-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <Link to="/journal">
                <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                  Start Journaling
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <div className="aspect-square md:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-medium">
                <div className="absolute inset-0 bg-white p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <BookOpen className="w-5 h-5 text-reclaim-blue mr-2" />
                      <h3 className="text-xl font-bold">My Journal</h3>
                    </div>
                    <div className="text-sm text-reclaim-charcoal/60">
                      May 18, 2023
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-reclaim-blue">Today's Reflection Prompt:</h4>
                    <div className="p-4 bg-reclaim-blue/5 border border-reclaim-blue/20 rounded-lg">
                      <p className="text-reclaim-charcoal/80 italic">
                        What was the most challenging moment today, and how did you handle it differently than you might have in the past?
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="p-4 bg-reclaim-sand/50 border border-reclaim-sand rounded-lg min-h-[120px]">
                      <p className="text-reclaim-charcoal/80">
                        I had a difficult conversation with my boss today that would have normally triggered me to reach for a drink. Instead, I took a 5-minute walk, practiced deep breathing, and was able to return to the conversation with a clearer head. I'm proud that I recognized my trigger and used the tools I've been learning.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-reclaim-teal/5 border border-reclaim-teal/20 rounded-xl p-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-reclaim-teal/20 flex items-center justify-center mr-3 mt-1">
                        <Sparkles className="w-5 h-5 text-reclaim-teal" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Insight</h4>
                        <p className="text-sm text-reclaim-charcoal/70">
                          You've shown great progress in recognizing triggers and applying coping strategies. Your entries show this pattern has improved significantly over the past month.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 right-8">
                    <Button className="bg-reclaim-teal hover:bg-reclaim-teal/90 text-white rounded-full w-12 h-12 p-0">
                      <PencilLine className="h-5 w-5" />
                    </Button>
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

export default JournalPreview;
