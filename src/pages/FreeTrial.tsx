
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Gift,
  Check,
  X,
  ArrowRight,
  Shield,
  CreditCard,
  Calendar,
  Clock,
  BookOpen,
  Users,
  BarChart,
  AlertCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FreeTrial = () => {
  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-r from-reclaim-blue to-reclaim-teal text-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                <Gift className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                Start Your Free 14-Day Trial
              </h1>
              <p className="text-xl text-white/80 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                Experience the full suite of Reclaim recovery tools with no commitment. No credit card required.
              </p>
              <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                <Button className="bg-white hover:bg-white/90 text-reclaim-blue px-8 py-6 h-auto text-lg rounded-xl">
                  <Gift className="mr-2 h-5 w-5" />
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trial Features */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-4 inline-block">
                Included in Your Trial
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Full Access to All Premium Features
              </h2>
              <p className="text-xl text-reclaim-charcoal/70 max-w-2xl mx-auto">
                Your 14-day trial includes unrestricted access to our entire platform. Test every feature without limitations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card rounded-2xl p-8">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <BookOpen className="w-7 h-7 text-reclaim-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized Journal</h3>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Our AI-powered journaling system with guided prompts and pattern analysis for your recovery journey.
                </p>
                <ul className="space-y-2 text-reclaim-charcoal/70">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Daily reflection prompts</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Emotion and trigger tracking</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Progress insights and analysis</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-reclaim-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community Support</h3>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Connect with others on similar recovery journeys through our moderated community platforms.
                </p>
                <ul className="space-y-2 text-reclaim-charcoal/70">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Recovery forums and discussions</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Virtual support meetings</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Accountability partnerships</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <BarChart className="w-7 h-7 text-reclaim-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Progress Tracking</h3>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Comprehensive tools to monitor your recovery journey and celebrate milestones.
                </p>
                <ul className="space-y-2 text-reclaim-charcoal/70">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Sobriety and milestone tracking</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Detailed analytics and insights</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Custom goal setting and tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 glass-card rounded-2xl p-6 md:p-8 border border-reclaim-blue/20">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                    <AlertCircle className="w-8 h-8 text-reclaim-blue" />
                  </div>
                </div>
                <div className="md:w-5/6 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">
                    Emergency Support Always Available
                  </h3>
                  <p className="text-reclaim-charcoal/70 mb-4">
                    Even during your trial, you'll have full access to our emergency support features, crisis resources, and professional directory.
                  </p>
                  <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    Learn About Emergency Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 md:py-24 bg-reclaim-sand">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-4 inline-block">
                After Your Trial
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Choose the Right Plan for You
              </h2>
              <p className="text-xl text-reclaim-charcoal/70 max-w-2xl mx-auto">
                After your 14-day trial, select from our flexible plan options designed to support your recovery journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Basic</h3>
                  <div className="text-3xl font-bold text-reclaim-blue">$9.99<span className="text-base font-normal text-reclaim-charcoal/60">/month</span></div>
                  <p className="text-reclaim-charcoal/60 text-sm mt-2">Billed monthly</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Basic journal features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Community forum access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Progress tracking</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-400 mr-2 mt-0.5" />
                    <span className="text-reclaim-charcoal/40">Advanced analytics</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-400 mr-2 mt-0.5" />
                    <span className="text-reclaim-charcoal/40">Personalized insights</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-400 mr-2 mt-0.5" />
                    <span className="text-reclaim-charcoal/40">1-on-1 support sessions</span>
                  </li>
                </ul>
                
                <Button variant="outline" className="w-full border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10">
                  Select Plan
                </Button>
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8 border-2 border-reclaim-blue relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-reclaim-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Premium</h3>
                  <div className="text-3xl font-bold text-reclaim-blue">$19.99<span className="text-base font-normal text-reclaim-charcoal/60">/month</span></div>
                  <p className="text-reclaim-charcoal/60 text-sm mt-2">Billed monthly</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Advanced journal features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Full community access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Comprehensive tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Personalized insights</span>
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-400 mr-2 mt-0.5" />
                    <span className="text-reclaim-charcoal/40">1-on-1 support sessions</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                  Select Plan
                </Button>
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Ultimate</h3>
                  <div className="text-3xl font-bold text-reclaim-blue">$39.99<span className="text-base font-normal text-reclaim-charcoal/60">/month</span></div>
                  <p className="text-reclaim-charcoal/60 text-sm mt-2">Billed monthly</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>All Premium features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Priority community support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Advanced recovery tools</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Comprehensive analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>AI-powered insights</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Monthly 1-on-1 support session</span>
                  </li>
                </ul>
                
                <Button variant="outline" className="w-full border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10">
                  Select Plan
                </Button>
              </div>
            </div>

            <div className="text-center mt-10 text-reclaim-charcoal/70">
              <p>All plans include access to emergency support resources and the basic recovery tools.</p>
            </div>
          </div>
        </section>

        {/* Trial Information */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-reclaim-blue/20">
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-reclaim-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">No Credit Card Required</h3>
                    <p className="text-reclaim-charcoal/70">
                      Start your free trial without entering any payment information. We'll remind you before the trial ends so you can decide if you want to continue.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8 border border-reclaim-blue/20">
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-reclaim-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">14 Days of Full Access</h3>
                    <p className="text-reclaim-charcoal/70">
                      Experience all premium features for a full two weeks. No restrictions or limitations during your trial period.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8 border border-reclaim-blue/20">
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-reclaim-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Cancel Anytime</h3>
                    <p className="text-reclaim-charcoal/70">
                      No commitment required. You can cancel your trial at any time with no questions asked and no further obligations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8 border border-reclaim-blue/20">
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-reclaim-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Privacy Protected</h3>
                    <p className="text-reclaim-charcoal/70">
                      Your privacy is our priority. All of your trial data will be protected with the same level of security as our paid users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-reclaim-sand">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-reclaim-charcoal/70 max-w-2xl mx-auto">
                Still have questions about our free trial? Find answers to common questions below.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">What happens when my trial ends?</h3>
                <p className="text-reclaim-charcoal/70">
                  When your 14-day trial ends, you'll be prompted to choose a subscription plan to continue using Reclaim. If you choose not to subscribe, your account will be limited to basic features, but all your data will remain secure and accessible if you decide to subscribe later.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Will I be automatically charged after the trial?</h3>
                <p className="text-reclaim-charcoal/70">
                  No. Since we don't require a credit card to start the trial, there will be no automatic charges. You'll need to manually select and subscribe to a plan to continue with premium access after your trial ends.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Can I change plans after subscribing?</h3>
                <p className="text-reclaim-charcoal/70">
                  Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be immediately available. If you downgrade, the change will take effect at the start of your next billing cycle.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Is my information private during the trial?</h3>
                <p className="text-reclaim-charcoal/70">
                  Absolutely. We maintain the same high privacy and security standards for all users, whether on a free trial or a paid subscription. Your journal entries, tracking data, and personal information are encrypted and protected.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Start Trial CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-reclaim-blue to-reclaim-teal text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Begin Your Recovery Journey Today
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Start your 14-day free trial now and take the first step toward a healthier, more balanced life.
              </p>
              <Button className="bg-white hover:bg-white/90 text-reclaim-blue px-8 py-6 h-auto text-lg rounded-xl">
                <Gift className="mr-2 h-5 w-5" />
                Start Your Free Trial
              </Button>
              <p className="mt-4 text-white/60">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FreeTrial;
