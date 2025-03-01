
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Phone,
  AlertCircle,
  LifeBuoy,
  Clock,
  MessageSquare,
  User,
  MapPin
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Emergency = () => {
  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-r from-reclaim-blue to-reclaim-teal text-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                <AlertCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                Emergency Support
              </h1>
              <p className="text-xl text-white/80 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                Immediate help and resources for difficult moments in your recovery journey.
              </p>
              <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                <Button className="bg-white hover:bg-white/90 text-reclaim-blue px-8 py-6 h-auto text-lg rounded-xl">
                  <Phone className="mr-2 h-5 w-5" />
                  Access Crisis Support
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Hotlines */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="glass-panel rounded-2xl p-8 border-2 border-red-500/20 bg-red-50/30 mb-12">
              <div className="flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                    <AlertCircle className="w-8 h-8 text-red-500" />
                  </div>
                </div>
                <div className="md:w-5/6">
                  <h2 className="text-2xl font-bold text-red-600 mb-2">
                    In Immediate Danger?
                  </h2>
                  <p className="text-reclaim-charcoal/80 mb-4">
                    If you or someone else is in immediate danger or experiencing a life-threatening emergency, please call emergency services immediately.
                  </p>
                  <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-md font-semibold">
                    Call 911 (US) or your local emergency number
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-4 inline-block">
                24/7 Hotlines
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Crisis Support Hotlines
              </h2>
              <p className="text-xl text-reclaim-charcoal/70 max-w-2xl mx-auto">
                These hotlines are staffed by trained professionals ready to provide immediate support during difficult moments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-reclaim-blue/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-reclaim-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">SAMHSA's National Helpline</h3>
                    <p className="text-reclaim-charcoal/60">Substance Abuse and Mental Health</p>
                  </div>
                </div>
                <p className="text-reclaim-charcoal/70 mb-6">
                  Free, confidential, 24/7/365 treatment referral and information service for individuals and families facing mental and/or substance use disorders.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                    <Phone className="mr-2 h-5 w-5" />
                    1-800-662-HELP (4357)
                  </Button>
                  <Button variant="outline" className="border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10">
                    Visit Website
                  </Button>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8 border border-reclaim-blue/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-reclaim-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Crisis Text Line</h3>
                    <p className="text-reclaim-charcoal/60">Text-based Crisis Support</p>
                  </div>
                </div>
                <p className="text-reclaim-charcoal/70 mb-6">
                  Connect with a trained crisis counselor to receive free, 24/7 crisis support via text message. Available for any type of crisis.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                    Text HOME to 741741
                  </Button>
                  <Button variant="outline" className="border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10">
                    Visit Website
                  </Button>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8 border border-reclaim-blue/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-reclaim-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">National Suicide Prevention Lifeline</h3>
                    <p className="text-reclaim-charcoal/60">Suicide Prevention Support</p>
                  </div>
                </div>
                <p className="text-reclaim-charcoal/70 mb-6">
                  Provides free and confidential support for people in distress, prevention and crisis resources for you or your loved ones.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                    <Phone className="mr-2 h-5 w-5" />
                    988 or 1-800-273-8255
                  </Button>
                  <Button variant="outline" className="border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10">
                    Visit Website
                  </Button>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8 border border-reclaim-blue/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-4">
                    <LifeBuoy className="w-6 h-6 text-reclaim-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">National Domestic Violence Hotline</h3>
                    <p className="text-reclaim-charcoal/60">Relationship Abuse Support</p>
                  </div>
                </div>
                <p className="text-reclaim-charcoal/70 mb-6">
                  Offers resources for victims and survivors of domestic violence, as well as their friends and family members.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                    <Phone className="mr-2 h-5 w-5" />
                    1-800-799-SAFE (7233)
                  </Button>
                  <Button variant="outline" className="border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10">
                    Visit Website
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Immediate Coping Skills */}
        <section className="py-16 md:py-24 bg-reclaim-sand">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-4 inline-block">
                Immediate Help
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Coping Strategies for Difficult Moments
              </h2>
              <p className="text-xl text-reclaim-charcoal/70 max-w-2xl mx-auto">
                These techniques can help you manage intense cravings, anxiety, or distress in the moment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">5-4-3-2-1 Grounding Technique</h3>
                <ol className="space-y-2 text-reclaim-charcoal/80 mb-4">
                  <li><strong>5 things you can see</strong> - Look around and notice five things in your environment</li>
                  <li><strong>4 things you can touch/feel</strong> - Notice the texture of your clothing, the surface you're sitting on</li>
                  <li><strong>3 things you can hear</strong> - Listen for sounds near or far</li>
                  <li><strong>2 things you can smell</strong> - Notice scents in your environment</li>
                  <li><strong>1 thing you can taste</strong> - Notice the taste in your mouth</li>
                </ol>
                <p className="text-sm text-reclaim-charcoal/60">
                  This technique helps anchor you to the present moment when feelings of anxiety or cravings become overwhelming.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Deep Breathing Exercise</h3>
                <p className="text-reclaim-charcoal/80 mb-4">
                  Follow this simple breathing pattern:
                </p>
                <ul className="space-y-2 text-reclaim-charcoal/80 mb-4">
                  <li>Inhale slowly through your nose for 4 counts</li>
                  <li>Hold your breath for 4 counts</li>
                  <li>Exhale slowly through your mouth for 6 counts</li>
                  <li>Repeat 5-10 times</li>
                </ul>
                <p className="text-sm text-reclaim-charcoal/60">
                  Deep breathing activates your parasympathetic nervous system, helping reduce stress and anxiety responses.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">HALT Check-In</h3>
                <p className="text-reclaim-charcoal/80 mb-4">
                  When experiencing strong urges, check if you are:
                </p>
                <ul className="space-y-2 text-reclaim-charcoal/80 mb-4">
                  <li><strong>H</strong>ungry? - When did you last eat?</li>
                  <li><strong>A</strong>ngry? - Are you holding onto frustration?</li>
                  <li><strong>L</strong>onely? - Do you need connection?</li>
                  <li><strong>T</strong>ired? - Are you well-rested?</li>
                </ul>
                <p className="text-sm text-reclaim-charcoal/60">
                  Addressing these basic needs can sometimes reduce the intensity of cravings and emotional distress.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                View More Coping Strategies
              </Button>
            </div>
          </div>
        </section>

        {/* Local Resources Map */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-4 inline-block">
                Local Support
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find Help Near You
              </h2>
              <p className="text-xl text-reclaim-charcoal/70 max-w-2xl mx-auto">
                Access in-person support resources in your local area, including treatment centers, support groups, and counseling services.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 md:p-8 overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="mb-6">
                    <label className="text-reclaim-charcoal/70 block mb-2">Enter your location:</label>
                    <div className="flex">
                      <input 
                        type="text"
                        placeholder="City, State or Zip"
                        className="flex h-10 rounded-l-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                      />
                      <Button className="rounded-l-none bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                        <MapPin className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Resource Types:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input type="checkbox" id="treatment" className="mr-2" />
                        <label htmlFor="treatment">Treatment Centers</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="meetings" className="mr-2" />
                        <label htmlFor="meetings">Support Group Meetings</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="counseling" className="mr-2" />
                        <label htmlFor="counseling">Counseling Services</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="medical" className="mr-2" />
                        <label htmlFor="medical">Medical Services</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                      Find Resources
                    </Button>
                  </div>
                </div>
                
                <div className="lg:w-2/3 min-h-[300px] md:min-h-[400px] bg-reclaim-sand/50 rounded-xl flex items-center justify-center">
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-reclaim-blue/40 mx-auto mb-4" />
                    <p className="text-reclaim-charcoal/60">
                      Enter your location to view recovery resources in your area
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 24/7 Support CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-reclaim-blue to-reclaim-teal text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                24/7 Support When You Need It Most
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Recovery has difficult moments. Our emergency support features are designed to provide immediate help whenever you need it.
              </p>
              <Button className="bg-white hover:bg-white/90 text-reclaim-blue px-8 py-6 h-auto text-lg rounded-xl">
                <AlertCircle className="mr-2 h-5 w-5" />
                Access Emergency Support
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Emergency;
