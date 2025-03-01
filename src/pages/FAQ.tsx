
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqCategories = [
    { id: "general", name: "General Questions" },
    { id: "account", name: "Account & Privacy" },
    { id: "features", name: "Features & Tools" },
    { id: "community", name: "Community & Support" },
    { id: "technical", name: "Technical Issues" },
  ];

  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <div className="pt-24 md:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center bg-reclaim-blue/10 w-16 h-16 rounded-full mb-4">
              <HelpCircle className="h-8 w-8 text-reclaim-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-reclaim-charcoal mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-reclaim-charcoal/70 max-w-2xl mx-auto">
              Find answers to common questions about Reclaim and how it can support your recovery journey.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative mb-10">
              <Search className="absolute left-3 top-3 h-5 w-5 text-reclaim-charcoal/50" />
              <Input 
                placeholder="Search frequently asked questions..." 
                className="pl-10 border-reclaim-charcoal/20 bg-white/80 backdrop-blur-sm"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {faqCategories.map((category) => (
                <Button 
                  key={category.id}
                  variant="outline" 
                  className="border-reclaim-blue/30 text-reclaim-charcoal hover:bg-reclaim-blue/10"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          <Accordion type="single" collapsible className="w-full mb-12 space-y-4">
            <AccordionItem value="item-1" className="border border-reclaim-charcoal/10 rounded-lg bg-white/80 backdrop-blur-sm px-4">
              <AccordionTrigger className="text-reclaim-charcoal font-medium py-4 hover:no-underline">
                What is Reclaim and how does it work?
              </AccordionTrigger>
              <AccordionContent className="text-reclaim-charcoal/70 pb-4">
                Reclaim is a digital platform designed to support individuals recovering from addiction and behavioral challenges. It combines structured recovery plans, progress tracking, and a supportive community. The app provides personalized recovery paths, habit tracking tools, journaling capabilities, and access to emergency resources. Reclaim works by empowering users with evidence-based tools and a supportive community to achieve sustainable recovery.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-reclaim-charcoal/10 rounded-lg bg-white/80 backdrop-blur-sm px-4">
              <AccordionTrigger className="text-reclaim-charcoal font-medium py-4 hover:no-underline">
                Is my information kept private and secure?
              </AccordionTrigger>
              <AccordionContent className="text-reclaim-charcoal/70 pb-4">
                Yes, privacy and security are our top priorities. All personal information and recovery data are protected with end-to-end encryption. We never share your information with third parties without your explicit consent. You can use the platform anonymously if you prefer, and you have complete control over what information you share with the community. For more details, please review our <Link to="/privacy" className="text-reclaim-blue hover:underline">Privacy Policy</Link>.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-reclaim-charcoal/10 rounded-lg bg-white/80 backdrop-blur-sm px-4">
              <AccordionTrigger className="text-reclaim-charcoal font-medium py-4 hover:no-underline">
                How do I get started with a recovery plan?
              </AccordionTrigger>
              <AccordionContent className="text-reclaim-charcoal/70 pb-4">
                Getting started is simple. After creating an account, you'll be guided through a brief assessment to understand your specific needs and goals. Based on your responses, we'll recommend a personalized recovery path. You can customize this plan at any time, adjusting goals and milestones to suit your journey. The dashboard will help you track progress, and you'll receive regular reminders and encouragement to stay on track.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-reclaim-charcoal/10 rounded-lg bg-white/80 backdrop-blur-sm px-4">
              <AccordionTrigger className="text-reclaim-charcoal font-medium py-4 hover:no-underline">
                Can I use Reclaim alongside professional therapy?
              </AccordionTrigger>
              <AccordionContent className="text-reclaim-charcoal/70 pb-4">
                Absolutely! Reclaim is designed to complement professional therapy, not replace it. Many users find that Reclaim enhances their therapy experience by providing tools for daily tracking, reflection, and support between sessions. You can share your progress reports with your therapist, and our resources section includes guidance on how to maximize the benefits of both therapy and the Reclaim platform.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-reclaim-charcoal/10 rounded-lg bg-white/80 backdrop-blur-sm px-4">
              <AccordionTrigger className="text-reclaim-charcoal font-medium py-4 hover:no-underline">
                How does the community support work?
              </AccordionTrigger>
              <AccordionContent className="text-reclaim-charcoal/70 pb-4">
                Our community features include moderated forums, group chats, and peer mentorship opportunities. All community spaces are organized by recovery type and interest, making it easy to find relevant support. Community guidelines ensure a respectful, triggering-free environment, and all interactions are moderated to maintain safety. You can participate anonymously and choose your level of engagement, from simply reading others' experiences to actively participating in discussions or becoming a peer mentor.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border border-reclaim-charcoal/10 rounded-lg bg-white/80 backdrop-blur-sm px-4">
              <AccordionTrigger className="text-reclaim-charcoal font-medium py-4 hover:no-underline">
                What should I do in case of an emergency or crisis?
              </AccordionTrigger>
              <AccordionContent className="text-reclaim-charcoal/70 pb-4">
                For immediate emergencies, always call your local emergency services first (such as 911 in the US). Reclaim provides a dedicated "Emergency Support" feature with one-touch access to crisis hotlines, your designated emergency contacts, and a directory of local resources. This feature is accessible from any screen within the app. We also provide resources for creating a personal crisis plan that you can share with trusted supporters.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="border border-reclaim-charcoal/10 rounded-lg bg-white/80 backdrop-blur-sm px-4">
              <AccordionTrigger className="text-reclaim-charcoal font-medium py-4 hover:no-underline">
                Is there a cost to use Reclaim?
              </AccordionTrigger>
              <AccordionContent className="text-reclaim-charcoal/70 pb-4">
                Reclaim offers both free and premium options. The free tier provides access to essential recovery tools, community support, and emergency resources. Our premium subscription adds advanced features like personalized AI insights, expanded journal prompts, deeper progress analytics, and priority support. We offer scholarships for those who cannot afford the premium tier but would benefit from it. Contact our support team to learn more about scholarship opportunities.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8" className="border border-reclaim-charcoal/10 rounded-lg bg-white/80 backdrop-blur-sm px-4">
              <AccordionTrigger className="text-reclaim-charcoal font-medium py-4 hover:no-underline">
                How can I track my progress over time?
              </AccordionTrigger>
              <AccordionContent className="text-reclaim-charcoal/70 pb-4">
                Reclaim provides comprehensive progress tracking tools. The dashboard displays your current streaks, completed milestones, and overall statistics. Visual charts and graphs help you identify patterns and trends in your recovery journey. The journal feature includes mood tracking and reflection prompts, providing qualitative insights alongside your quantitative metrics. You can generate progress reports to share with your support network or healthcare providers, and set up regular progress reviews to celebrate achievements and adjust goals as needed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="flex flex-col md:flex-row bg-white/80 backdrop-blur-sm border border-reclaim-charcoal/10 rounded-lg p-6 md:p-8 items-center">
            <div className="md:w-3/4 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-xl font-semibold mb-2 text-reclaim-charcoal">
                Still have questions?
              </h2>
              <p className="text-reclaim-charcoal/70">
                Our support team is always ready to help you with any questions or concerns you might have about Reclaim.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <Link to="/contact-us">
                <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
