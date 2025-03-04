
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, CalendarDays, User, Clock, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import LoadingSpinner from "@/components/ui/loading-spinner";

const Community = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleJoinClick = () => {
    setIsLoading(true);
    // Simulate loading for 800ms before navigating
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-r from-reclaim-blue to-reclaim-teal text-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                Join a Supportive Recovery Community
              </h1>
              <p className="text-xl text-white/80 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                Connect with others on similar journeys, share experiences, and find strength in community support.
              </p>
              <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                <Link to="/join-community" onClick={handleJoinClick}>
                  <Button className="bg-white hover:bg-white/90 text-reclaim-blue px-8 py-6 h-auto text-lg rounded-xl transition-transform hover:scale-105 active:scale-95">
                    {isLoading ? (
                      <LoadingSpinner size="sm" color="blue" />
                    ) : (
                      <Users className="mr-2 h-5 w-5" />
                    )}
                    {isLoading ? "Loading..." : "Join Now"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-4 inline-block">
                Community Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Our Community Offers
              </h2>
              <p className="text-xl text-reclaim-charcoal/70 max-w-2xl mx-auto">
                Our community provides a safe, supportive environment where members can connect, share, and grow together on their recovery journeys.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7 text-reclaim-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Discussion Forums</h3>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Topic-specific forums moderated by recovery professionals where you can share experiences and ask questions.
                </p>
                <a href="#" className="text-reclaim-blue hover:text-reclaim-blue/80 inline-flex items-center group">
                  View Forums 
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>

              <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <CalendarDays className="w-7 h-7 text-reclaim-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Virtual Meetings</h3>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Regular video meetings led by certified counselors, focused on different recovery topics and challenges.
                </p>
                <a href="#" className="text-reclaim-blue hover:text-reclaim-blue/80 inline-flex items-center group">
                  Join a Meeting
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>

              <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <User className="w-7 h-7 text-reclaim-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Accountability Partners</h3>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Connect one-on-one with a matched accountability partner who understands your specific recovery journey.
                </p>
                <a href="#" className="text-reclaim-blue hover:text-reclaim-blue/80 inline-flex items-center group">
                  Find a Partner
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 md:py-24 bg-reclaim-sand">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-4 inline-block">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stories from Our Community
              </h2>
              <p className="text-xl text-reclaim-charcoal/70 max-w-2xl mx-auto">
                Real stories from real people who have found strength, hope, and progress through our community support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-reclaim-teal/20 flex items-center justify-center mr-4">
                    <span className="text-reclaim-teal font-semibold">JD</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">James D.</h3>
                    <p className="text-reclaim-charcoal/60 text-sm">Recovery journey: 2+ years</p>
                  </div>
                </div>
                <blockquote className="text-reclaim-charcoal/80 italic mb-6">
                  "Finding this community changed everything for me. For the first time, I didn't feel alone in my struggles. The support from others who truly understand what I'm going through has been the cornerstone of my recovery journey."
                </blockquote>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-reclaim-charcoal/40 mr-1" />
                  <span className="text-sm text-reclaim-charcoal/40">Joined April 2021</span>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/20 flex items-center justify-center mr-4">
                    <span className="text-reclaim-blue font-semibold">SM</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Sarah M.</h3>
                    <p className="text-reclaim-charcoal/60 text-sm">Recovery journey: 1+ year</p>
                  </div>
                </div>
                <blockquote className="text-reclaim-charcoal/80 italic mb-6">
                  "My accountability partner has been my rock through some really difficult times. Having someone who checks in regularly and genuinely cares about my progress makes all the difference. I've grown so much through this community."
                </blockquote>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-reclaim-charcoal/40 mr-1" />
                  <span className="text-sm text-reclaim-charcoal/40">Joined August 2022</span>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                <Heart className="mr-2 h-5 w-5" />
                Read More Stories
              </Button>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="glass-panel rounded-2xl p-8 border border-reclaim-blue/20">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Our Community Guidelines
                </h2>
                <p className="text-reclaim-charcoal/70">
                  To ensure our community remains a safe, supportive space for everyone, we ask all members to adhere to these guidelines:
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex">
                  <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-3 shrink-0">
                    <span className="text-reclaim-blue font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Respect Privacy</h3>
                    <p className="text-reclaim-charcoal/70">What's shared in the community stays in the community. Never share others' personal stories or information.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-3 shrink-0">
                    <span className="text-reclaim-blue font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Be Supportive</h3>
                    <p className="text-reclaim-charcoal/70">Offer encouragement and support. Avoid criticism or judgment of others' journeys.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-3 shrink-0">
                    <span className="text-reclaim-blue font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Practice Active Listening</h3>
                    <p className="text-reclaim-charcoal/70">Listen to understand, not just to respond. Everyone's experience is valuable.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-3 shrink-0">
                    <span className="text-reclaim-blue font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Focus on Recovery</h3>
                    <p className="text-reclaim-charcoal/70">Keep discussions focused on recovery, growth, and support rather than dwelling on substance use details.</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                  View Full Guidelines
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-reclaim-blue to-reclaim-teal text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Take the first step toward a supportive recovery journey by joining our community today. Connect with others who understand what you're going through.
              </p>
              <Link to="/join-community" onClick={handleJoinClick}>
                <Button className="bg-white hover:bg-white/90 text-reclaim-blue px-8 py-6 h-auto text-lg rounded-xl transition-transform hover:scale-105 active:scale-95">
                  {isLoading ? (
                    <LoadingSpinner size="sm" color="blue" />
                  ) : (
                    <Users className="mr-2 h-5 w-5" />
                  )}
                  {isLoading ? "Loading..." : "Join Our Community"}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
