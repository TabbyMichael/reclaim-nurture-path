
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, HelpCircle, BookOpen, MessageCircle, PhoneCall } from "lucide-react";
import { Input } from "@/components/ui/input";

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <section className="bg-reclaim-blue py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How Can We Help You?
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Find answers, resources, and support for your recovery journey
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-reclaim-charcoal/50" />
              <Input 
                type="text"
                placeholder="Search for answers or topics..." 
                className="pl-12 h-14 text-lg bg-white border-0 shadow-md" 
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-reclaim-blue hover:bg-reclaim-blue/90">
                Search
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-reclaim-charcoal mb-8 text-center">
              Popular Help Topics
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="glass-card hover:scale-[1.02] transition-gpu">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-4">
                    <HelpCircle className="h-6 w-6 text-reclaim-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
                  <p className="text-reclaim-charcoal/70 mb-4">
                    Learn how to set up your account, create goals, and navigate the app's features.
                  </p>
                  <Button variant="link" className="px-0 text-reclaim-blue">
                    View Guide →
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:scale-[1.02] transition-gpu">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-reclaim-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Recovery Paths</h3>
                  <p className="text-reclaim-charcoal/70 mb-4">
                    Discover how to use our structured recovery plans and customize your healing journey.
                  </p>
                  <Button variant="link" className="px-0 text-reclaim-blue">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:scale-[1.02] transition-gpu">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-reclaim-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                  <p className="text-reclaim-charcoal/70 mb-4">
                    Learn how to connect with others, join groups, and participate in discussions.
                  </p>
                  <Button variant="link" className="px-0 text-reclaim-blue">
                    Explore Options →
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mb-16">
              <Tabs defaultValue="general">
                <TabsList className="w-full max-w-2xl mx-auto mb-8 bg-white/50">
                  <TabsTrigger value="general" className="flex-1">General</TabsTrigger>
                  <TabsTrigger value="account" className="flex-1">Account</TabsTrigger>
                  <TabsTrigger value="features" className="flex-1">Features</TabsTrigger>
                  <TabsTrigger value="privacy" className="flex-1">Privacy</TabsTrigger>
                </TabsList>
                <TabsContent value="general">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg shadow-sm border border-reclaim-charcoal/10 overflow-hidden">
                      <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer px-6 py-4">
                          <h3 className="text-lg font-medium">What is Reclaim?</h3>
                          <span className="group-open:rotate-180 transition-transform">
                            <svg className="h-6 w-6 text-reclaim-charcoal/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-6 pb-4 text-reclaim-charcoal/70">
                          <p>
                            Reclaim is a comprehensive platform designed to support individuals recovering from addiction and behavioral challenges. Our app combines structured recovery plans, progress tracking, and a supportive community to help you on your journey to wellness.
                          </p>
                        </div>
                      </details>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border border-reclaim-charcoal/10 overflow-hidden">
                      <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer px-6 py-4">
                          <h3 className="text-lg font-medium">Is Reclaim free to use?</h3>
                          <span className="group-open:rotate-180 transition-transform">
                            <svg className="h-6 w-6 text-reclaim-charcoal/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-6 pb-4 text-reclaim-charcoal/70">
                          <p>
                            Reclaim offers a free basic version with essential features to help you get started on your recovery journey. We also offer premium plans with additional features like advanced analytics, personalized coaching, and exclusive community access.
                          </p>
                        </div>
                      </details>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm border border-reclaim-charcoal/10 overflow-hidden">
                      <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer px-6 py-4">
                          <h3 className="text-lg font-medium">How can I get support if I'm in crisis?</h3>
                          <span className="group-open:rotate-180 transition-transform">
                            <svg className="h-6 w-6 text-reclaim-charcoal/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-6 pb-4 text-reclaim-charcoal/70">
                          <p className="mb-4">
                            If you're experiencing a crisis or emergency situation, please use our Emergency Support feature, which provides immediate access to resources:
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>Use the "Panic Button" feature in the app for immediate coping strategies</li>
                            <li>Access our directory of crisis hotlines available 24/7</li>
                            <li>Connect with professional resources in your area</li>
                          </ul>
                          <p className="mt-4 font-medium text-reclaim-charcoal">
                            For life-threatening emergencies, please call emergency services (911 in the US) immediately.
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="account">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg shadow-sm border border-reclaim-charcoal/10 overflow-hidden">
                      <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer px-6 py-4">
                          <h3 className="text-lg font-medium">How do I create an account?</h3>
                          <span className="group-open:rotate-180 transition-transform">
                            <svg className="h-6 w-6 text-reclaim-charcoal/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-6 pb-4 text-reclaim-charcoal/70">
                          <p className="mb-2">
                            Creating an account with Reclaim is simple:
                          </p>
                          <ol className="list-decimal pl-5 space-y-2">
                            <li>Click the "Get Started" button on our homepage</li>
                            <li>Choose to sign up with Google or with your email</li>
                            <li>If using email, fill in your details and create a password</li>
                            <li>Review and accept our Terms of Service and Privacy Policy</li>
                            <li>Click "Create Account" to complete the process</li>
                          </ol>
                        </div>
                      </details>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="features">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg shadow-sm border border-reclaim-charcoal/10 overflow-hidden">
                      <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer px-6 py-4">
                          <h3 className="text-lg font-medium">How do I track my progress?</h3>
                          <span className="group-open:rotate-180 transition-transform">
                            <svg className="h-6 w-6 text-reclaim-charcoal/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-6 pb-4 text-reclaim-charcoal/70">
                          <p>
                            Our progress tracking features allow you to monitor your recovery journey through interactive dashboards, streak counters, and milestone achievements. You can set daily and weekly goals, track your consistency, and visualize your progress over time.
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="privacy">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg shadow-sm border border-reclaim-charcoal/10 overflow-hidden">
                      <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer px-6 py-4">
                          <h3 className="text-lg font-medium">How is my data protected?</h3>
                          <span className="group-open:rotate-180 transition-transform">
                            <svg className="h-6 w-6 text-reclaim-charcoal/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-6 pb-4 text-reclaim-charcoal/70">
                          <p>
                            At Reclaim, we take your privacy seriously. We use end-to-end encryption for sensitive data like journal entries, and we never share your personal information with third parties without your explicit consent. For more details, please review our Privacy Policy.
                          </p>
                        </div>
                      </details>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="bg-white rounded-2xl shadow-medium p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-reclaim-charcoal/70 mb-6 max-w-xl mx-auto">
                Our support team is available to assist you with any questions or issues you may have.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white w-full sm:w-auto">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
                <Button variant="outline" className="border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10 w-full sm:w-auto">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
