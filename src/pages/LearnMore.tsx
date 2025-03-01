
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, BookOpen, HeartHandshake, Brain, ShieldCheck, Award } from "lucide-react";
import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-reclaim-blue/10 w-16 h-16 rounded-full mb-4">
              <BookOpen className="h-8 w-8 text-reclaim-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-reclaim-charcoal mb-4">
              About Reclaim
            </h1>
            <p className="text-reclaim-charcoal/70 max-w-2xl mx-auto">
              Learn how our platform helps individuals overcome addiction and behavioral challenges through personalized support, progress tracking, and community connection.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-xl text-reclaim-charcoal/70">
                    Reclaim is dedicated to empowering individuals on their recovery journey by providing accessible, evidence-based tools and a supportive community environment.
                  </p>
                  <p className="text-reclaim-charcoal/70">
                    We believe everyone deserves the opportunity to reclaim their life from addiction and behavioral challenges. Our approach combines cutting-edge technology with compassionate support to make recovery accessible, personalized, and sustainable.
                  </p>
                  <div className="pt-4">
                    <div className="flex items-center">
                      <CheckCircle2 className="text-reclaim-teal mr-3 h-6 w-6 flex-shrink-0" />
                      <span className="text-lg">Evidence-based approaches to recovery</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <CheckCircle2 className="text-reclaim-teal mr-3 h-6 w-6 flex-shrink-0" />
                      <span className="text-lg">Inclusive, non-judgmental environment</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <CheckCircle2 className="text-reclaim-teal mr-3 h-6 w-6 flex-shrink-0" />
                      <span className="text-lg">Technology that empowers rather than replaces human connection</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="rounded-2xl overflow-hidden bg-white shadow-medium">
                  <div className="aspect-video bg-reclaim-blue/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-reclaim-blue flex items-center justify-center mx-auto mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-reclaim-charcoal/60">Watch Our Story</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">The Reclaim Journey</h3>
                    <p className="text-reclaim-charcoal/70">
                      Learn about how Reclaim was founded and our commitment to supporting individuals through recovery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Approach to Recovery</h2>
              <p className="text-xl text-reclaim-charcoal/70 max-w-3xl mx-auto">
                We combine evidence-based practices with innovative technology to create a comprehensive recovery experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-panel rounded-xl p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                    <Brain className="h-6 w-6 text-reclaim-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Evidence-Based</h3>
                <p className="text-reclaim-charcoal/70">
                  Our recovery paths and tools are built on clinically proven approaches to addiction recovery and behavior change.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                    <span>Cognitive Behavioral Therapy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                    <span>Motivational Interviewing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                    <span>Mindfulness-Based Approaches</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-panel rounded-xl p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-reclaim-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized</h3>
                <p className="text-reclaim-charcoal/70">
                  We recognize that each person's recovery journey is unique, requiring individualized approaches and support.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                    <span>Tailored Recovery Paths</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                    <span>Adaptive Progress Tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                    <span>Customized Resources</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-panel rounded-xl p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                    <HeartHandshake className="h-6 w-6 text-reclaim-blue" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community-Centered</h3>
                <p className="text-reclaim-charcoal/70">
                  Connection and support are vital to recovery success, which is why community is at the heart of our platform.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                    <span>Peer Support Networks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                    <span>Moderated Discussion Groups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                    <span>Success Story Sharing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Platform Features */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Core Platform Features</h2>
              <p className="text-xl text-reclaim-charcoal/70 max-w-3xl mx-auto">
                Discover the tools and resources available to support your recovery journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="p-6 border-b border-reclaim-charcoal/10">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-reclaim-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Personalized Recovery Paths</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-reclaim-charcoal/70 mb-4">
                    Structured, evidence-based recovery journeys tailored to specific addictions and behavioral challenges.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                      <span>Step-by-step guidance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                      <span>Expert-designed content</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                      <span>Adaptable to your progress</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link to="/start-path">
                      <Button variant="outline" className="border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10">
                        Explore Recovery Paths
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="p-6 border-b border-reclaim-charcoal/10">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-reclaim-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Progress Tracking</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-reclaim-charcoal/70 mb-4">
                    Comprehensive tools to monitor your recovery journey, celebrate milestones, and identify patterns.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                      <span>Visual progress charts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                      <span>Milestone achievements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                      <span>Pattern identification</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link to="/start-tracking">
                      <Button variant="outline" className="border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10">
                        Explore Tracking Tools
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="p-6 border-b border-reclaim-charcoal/10">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-reclaim-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Community Support</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-reclaim-charcoal/70 mb-4">
                    Connect with peers who understand your journey and provide support, encouragement, and wisdom.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                      <span>Moderated discussion groups</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                      <span>Peer support connections</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                      <span>Success story sharing</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link to="/community">
                      <Button variant="outline" className="border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10">
                        Join Our Community
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                <div className="p-6 border-b border-reclaim-charcoal/10">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-reclaim-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Recovery Journal</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-reclaim-charcoal/70 mb-4">
                    Document your journey, reflect on challenges and victories, and track your emotional well-being.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                      <span>Private, secure journaling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                      <span>Guided reflection prompts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="text-reclaim-teal mr-2 h-5 w-5 mt-0.5" />
                      <span>Mood and trigger tracking</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link to="/journal">
                      <Button variant="outline" className="border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10">
                        Start Journaling
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Section */}
          <div className="mb-16">
            <div className="glass-card rounded-2xl p-8 bg-gradient-to-r from-reclaim-blue/5 to-reclaim-teal/5 border border-reclaim-blue/10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <div className="space-y-4">
                    <div className="inline-block">
                      <Award className="text-reclaim-blue h-10 w-10" />
                    </div>
                    <h2 className="text-2xl font-bold">Evidence-Based Approach</h2>
                    <p className="text-reclaim-charcoal/70">
                      Our platform is built on decades of research in addiction recovery, behavioral science, and digital health intervention. We collaborate with leading experts to ensure our approaches are effective and evidence-based.
                    </p>
                    <Button variant="outline" className="border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10">
                      View Research
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="bg-white rounded-xl p-6 shadow-soft">
                    <h3 className="text-xl font-semibold mb-4">Research Highlights</h3>
                    <ul className="space-y-4">
                      <li className="flex">
                        <div className="mr-4 mt-1">
                          <div className="w-6 h-6 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-reclaim-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold">Digital Interventions Efficacy</h4>
                          <p className="text-sm text-reclaim-charcoal/70">
                            Research shows that digital interventions can increase recovery success rates by up to 42%.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="mr-4 mt-1">
                          <div className="w-6 h-6 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-reclaim-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold">Community Support Impact</h4>
                          <p className="text-sm text-reclaim-charcoal/70">
                            Peer support communities have been shown to reduce relapse rates by 37% in long-term studies.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Begin Your Recovery Journey?
            </h2>
            <p className="text-xl text-reclaim-charcoal/70 max-w-2xl mx-auto mb-8">
              Take the first step toward a healthier, more balanced life. Our community is here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/free-trial">
                <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white text-lg px-8 py-6 h-auto rounded-xl">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button variant="outline" className="border-reclaim-charcoal/20 hover:bg-reclaim-charcoal/5 text-reclaim-charcoal text-lg px-8 py-6 h-auto rounded-xl">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearnMore;
