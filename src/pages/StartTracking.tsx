import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Activity, BarChart2, LineChart, CheckCircle2, Clock, Calendar, Sparkles, Award, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import DailyCheckInCalendar from "@/components/DailyCheckInCalendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const StartTracking = () => {
  const [showDailyCheckIn, setShowDailyCheckIn] = useState(false);

  const handleStartTracking = () => {
    // Scroll to check-in calendar and show the daily check-in interface
    setShowDailyCheckIn(true);
    
    // Smooth scroll to the tracking section
    const trackingSection = document.getElementById('active-tracking');
    if (trackingSection) {
      trackingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header with animated background */}
          <div className="text-center mb-16 relative overflow-hidden rounded-2xl bg-gradient-to-r from-reclaim-blue/10 to-reclaim-teal/10 p-8 shadow-soft animate-fade-up">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(78,205,196,0.1),transparent)] animate-pulse-light"></div>
            <div className="inline-flex items-center justify-center bg-reclaim-blue/20 w-16 h-16 rounded-full mb-4 backdrop-blur-sm">
              <TrendingUp className="h-8 w-8 text-reclaim-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-reclaim-charcoal mb-4">
              Track Your Recovery Journey
            </h1>
            <p className="text-reclaim-charcoal/70 max-w-2xl mx-auto">
              Monitor your progress, set goals, and celebrate milestones as you move forward in your recovery journey.
            </p>
            <Button 
              className="mt-6 bg-reclaim-blue hover:bg-reclaim-blue/90 text-white font-medium flex items-center gap-2 px-6 py-2 h-auto"
              onClick={handleStartTracking}
            >
              Start Tracking Now <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Active Tracking Section */}
          <div id="active-tracking" className="mb-20">
            {showDailyCheckIn ? (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold text-reclaim-charcoal mb-6 flex items-center">
                  <Calendar className="h-6 w-6 text-reclaim-blue mr-2" />
                  Your Daily Check-In
                </h2>
                <DailyCheckInCalendar />
              </div>
            ) : (
              <DailyCheckInCalendar />
            )}
          </div>

          {/* Tracking Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="overflow-hidden border-reclaim-blue/10 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-reclaim-blue to-reclaim-teal"></div>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-reclaim-blue" />
                </div>
                <CardTitle className="text-xl font-semibold">Daily Check-ins</CardTitle>
                <CardDescription>Record your daily mood, triggers, and accomplishments</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-reclaim-teal mr-2" />
                    <span>Quick 2-minute daily check-in</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-reclaim-teal mr-2" />
                    <span>Mood and trigger tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-reclaim-teal mr-2" />
                    <span>Daily achievements log</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-reclaim-blue/10 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-reclaim-teal to-reclaim-blue"></div>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-reclaim-blue" />
                </div>
                <CardTitle className="text-xl font-semibold">Streak Milestones</CardTitle>
                <CardDescription>Build and maintain your recovery streaks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-reclaim-teal mr-2" />
                    <span>Visual streak counter</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-reclaim-teal mr-2" />
                    <span>Achievement badges</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-reclaim-teal mr-2" />
                    <span>Milestone celebrations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-reclaim-blue/10 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-reclaim-blue to-reclaim-teal"></div>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-4">
                  <BarChart2 className="h-6 w-6 text-reclaim-blue" />
                </div>
                <CardTitle className="text-xl font-semibold">Progress Analytics</CardTitle>
                <CardDescription>Gain insights from your tracking data</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-reclaim-teal mr-2" />
                    <span>Detailed progress charts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-reclaim-teal mr-2" />
                    <span>Pattern identification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-reclaim-teal mr-2" />
                    <span>Personalized insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Tracking Dashboard Preview with enhanced design */}
          <div className="mb-20 animate-fade-up">
            <div className="bg-gradient-to-br from-white to-reclaim-sand/50 overflow-hidden rounded-2xl border border-reclaim-blue/10 shadow-medium">
              <div className="p-6 md:p-8 bg-gradient-to-r from-reclaim-blue to-reclaim-teal text-white">
                <div className="flex items-center">
                  <Sparkles className="mr-3 h-5 w-5 text-white/90" />
                  <h3 className="text-xl font-bold">Your Recovery Dashboard</h3>
                </div>
                <p className="mt-2">Track all aspects of your recovery journey in one place</p>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-4 border border-reclaim-blue/10 shadow-soft hover:shadow-medium transition-all duration-200">
                    <div className="flex items-center mb-3">
                      <Calendar className="text-reclaim-blue mr-2 h-5 w-5" />
                      <h4 className="font-medium">Current Streak</h4>
                    </div>
                    <div className="text-3xl font-bold text-reclaim-blue mb-2">28 Days</div>
                    <div className="text-sm text-reclaim-charcoal/60 flex items-center">
                      <Award className="h-4 w-4 text-reclaim-teal mr-1" />
                      Next milestone: 30 Days
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-reclaim-teal/10 shadow-soft hover:shadow-medium transition-all duration-200">
                    <div className="flex items-center mb-3">
                      <Activity className="text-reclaim-teal mr-2 h-5 w-5" />
                      <h4 className="font-medium">Weekly Completion</h4>
                    </div>
                    <div className="text-3xl font-bold text-reclaim-teal mb-2">86%</div>
                    <div className="text-sm text-reclaim-charcoal/60">
                      Completed 6/7 days
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-reclaim-charcoal/10 shadow-soft hover:shadow-medium transition-all duration-200">
                    <div className="flex items-center mb-3">
                      <Clock className="text-reclaim-charcoal mr-2 h-5 w-5" />
                      <h4 className="font-medium">Total Sober Time</h4>
                    </div>
                    <div className="text-3xl font-bold text-reclaim-charcoal mb-2">672 Hours</div>
                    <div className="text-sm text-reclaim-charcoal/60">
                      4 weeks of progress
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-reclaim-charcoal/10 shadow-soft mb-8 h-64 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-reclaim-sand/30 to-transparent opacity-50"></div>
                  <div className="text-center relative z-10">
                    <LineChart className="h-10 w-10 text-reclaim-blue mx-auto mb-4" />
                    <p className="text-reclaim-charcoal/70">Progress visualization charts will appear here</p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    className="bg-gradient-to-r from-reclaim-blue to-reclaim-teal hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2"
                    onClick={handleStartTracking}
                  >
                    Start Your Daily Check-in <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits Section with enhanced styling */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 inline-block relative">
              Benefits of Regular Tracking
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-reclaim-blue to-reclaim-teal"></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-panel rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-reclaim-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Increased Motivation</h3>
                <p className="text-reclaim-charcoal/70">
                  Seeing your progress visually helps maintain motivation during challenging times.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-reclaim-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Accountability</h3>
                <p className="text-reclaim-charcoal/70">
                  Regular tracking creates a sense of responsibility for your recovery journey.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-reclaim-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Pattern Recognition</h3>
                <p className="text-reclaim-charcoal/70">
                  Identify triggers and patterns that might otherwise go unnoticed.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-reclaim-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Celebrate Progress</h3>
                <p className="text-reclaim-charcoal/70">
                  Regular tracking helps you acknowledge and celebrate even small victories.
                </p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Call to Action */}
          <div className="text-center bg-gradient-to-r from-reclaim-blue/10 to-reclaim-teal/10 p-10 rounded-2xl shadow-soft animate-fade-up">
            <h3 className="text-2xl font-bold mb-4">Ready to Take Control of Your Recovery?</h3>
            <p className="text-reclaim-charcoal/70 mb-6 max-w-xl mx-auto">
              Start tracking your progress today and see the difference consistent monitoring can make in your recovery journey.
            </p>
            <Button 
              className="bg-gradient-to-r from-reclaim-blue to-reclaim-teal hover:opacity-90 text-white text-lg px-8 py-6 h-auto rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 flex items-center mx-auto gap-2"
              onClick={handleStartTracking}
            >
              Start Tracking Your Journey <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StartTracking;
