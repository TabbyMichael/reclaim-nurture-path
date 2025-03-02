
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Activity, BarChart2, LineChart, CheckCircle2, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import DailyCheckInCalendar from "@/components/DailyCheckInCalendar";

const StartTracking = () => {
  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-reclaim-blue/10 w-16 h-16 rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-reclaim-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-reclaim-charcoal mb-4">
              Track Your Recovery Journey
            </h1>
            <p className="text-reclaim-charcoal/70 max-w-2xl mx-auto">
              Monitor your progress, set goals, and celebrate milestones as you move forward in your recovery journey.
            </p>
          </div>

          {/* Active Tracking Section */}
          <div className="mb-20">
            <DailyCheckInCalendar />
          </div>

          {/* Tracking Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-panel rounded-xl p-6 shadow-soft">
              <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-reclaim-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Daily Check-ins</h3>
              <p className="text-reclaim-charcoal/70 mb-4">
                Record your daily mood, triggers, and accomplishments in just a few clicks. Build a consistent habit of self-reflection.
              </p>
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
            </div>

            <div className="glass-panel rounded-xl p-6 shadow-soft">
              <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-reclaim-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Streak Milestones</h3>
              <p className="text-reclaim-charcoal/70 mb-4">
                Build and maintain your recovery streaks. Celebrate important milestones and stay motivated through visual progress tracking.
              </p>
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
            </div>

            <div className="glass-panel rounded-xl p-6 shadow-soft">
              <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-reclaim-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Analytics</h3>
              <p className="text-reclaim-charcoal/70 mb-4">
                Gain insights from your tracking data with detailed charts and trend analysis that help you understand your recovery patterns.
              </p>
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
            </div>
          </div>

          {/* Tracking Dashboard Preview */}
          <div className="mb-20">
            <div className="glass-card bg-white overflow-hidden rounded-2xl border border-reclaim-blue/10 shadow-medium">
              <div className="p-6 md:p-8 bg-reclaim-blue text-white">
                <h3 className="text-xl font-bold mb-2">Your Recovery Dashboard</h3>
                <p>Track all aspects of your recovery journey in one place</p>
              </div>
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-reclaim-blue/5 rounded-xl p-4 border border-reclaim-blue/10">
                    <div className="flex items-center mb-3">
                      <Calendar className="text-reclaim-blue mr-2 h-5 w-5" />
                      <h4 className="font-medium">Current Streak</h4>
                    </div>
                    <div className="text-3xl font-bold text-reclaim-blue mb-2">28 Days</div>
                    <div className="text-sm text-reclaim-charcoal/60">
                      Next milestone: 30 Days
                    </div>
                  </div>
                  
                  <div className="bg-reclaim-teal/5 rounded-xl p-4 border border-reclaim-teal/10">
                    <div className="flex items-center mb-3">
                      <Activity className="text-reclaim-teal mr-2 h-5 w-5" />
                      <h4 className="font-medium">Weekly Completion</h4>
                    </div>
                    <div className="text-3xl font-bold text-reclaim-teal mb-2">86%</div>
                    <div className="text-sm text-reclaim-charcoal/60">
                      Completed 6/7 days
                    </div>
                  </div>
                  
                  <div className="bg-reclaim-charcoal/5 rounded-xl p-4 border border-reclaim-charcoal/10">
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
                
                <div className="bg-reclaim-sand/30 rounded-xl p-4 md:p-6 border border-reclaim-charcoal/10 h-64 flex items-center justify-center mb-8">
                  <div className="text-center">
                    <LineChart className="h-10 w-10 text-reclaim-blue/50 mx-auto mb-4" />
                    <p className="text-reclaim-charcoal/70">Progress visualization charts will appear here</p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                    Start Your Daily Check-in
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">
              Benefits of Regular Tracking
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
          
          {/* Call to Action */}
          <div className="text-center">
            <Link to="/signup">
              <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white text-lg px-8 py-6 h-auto rounded-xl">
                Start Tracking Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StartTracking;
