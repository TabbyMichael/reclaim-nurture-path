
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, FileText } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <section className="bg-reclaim-blue py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Find answers to common questions about Reclaim and your recovery journey
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-reclaim-charcoal/50" />
              <Input 
                type="text"
                placeholder="Search for answers..." 
                className="pl-12 h-14 text-lg bg-white border-0 shadow-md" 
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-reclaim-blue hover:bg-reclaim-blue/90">
                Search
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <Tabs defaultValue="general" className="mb-16">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-white/50">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="privacy">Privacy</TabsTrigger>
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="general">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border border-reclaim-charcoal/10">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center text-left">
                        <span className="text-lg font-medium">What is Reclaim?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-reclaim-charcoal/70">
                      <p className="mb-4">
                        Reclaim is a comprehensive recovery platform designed to support individuals overcoming addiction and behavioral challenges. Our application combines structured recovery plans, progress tracking, and community support to provide a holistic approach to recovery.
                      </p>
                      <p>
                        Unlike generic habit trackers or mental health apps, Reclaim is specifically designed for recovery, offering specialized tools, resources, and support networks tailored to the unique challenges of overcoming addiction and harmful behaviors.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border border-reclaim-charcoal/10">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center text-left">
                        <span className="text-lg font-medium">Is Reclaim free to use?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-reclaim-charcoal/70">
                      <p className="mb-4">
                        Reclaim offers a free basic version that includes essential recovery tools and limited access to community features. This version is designed to help anyone begin their recovery journey regardless of financial situation.
                      </p>
                      <p className="mb-4">
                        We also offer premium subscription plans that provide:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Advanced progress analytics and insights</li>
                        <li>Unlimited journal entries with AI analysis</li>
                        <li>Personalized recovery path recommendations</li>
                        <li>Full access to all community features</li>
                        <li>Priority emergency support</li>
                        <li>Ad-free experience</li>
                      </ul>
                      <p>
                        Our premium plans help support our mission to make recovery resources accessible to everyone, including those using our free version.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border border-reclaim-charcoal/10">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center text-left">
                        <span className="text-lg font-medium">What types of addiction does Reclaim support?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-reclaim-charcoal/70">
                      <p className="mb-4">
                        Reclaim is designed to support recovery from a wide range of addictions and behavioral challenges, including:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Substance addictions (alcohol, drugs, tobacco, etc.)</li>
                        <li>Behavioral addictions (gambling, gaming, shopping, etc.)</li>
                        <li>Process addictions (food, internet, pornography, etc.)</li>
                        <li>Co-occurring disorders and dual diagnoses</li>
                      </ul>
                      <p>
                        Our recovery paths are customizable to address your specific challenges and goals, acknowledging that everyone's recovery journey is unique.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border border-reclaim-charcoal/10">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center text-left">
                        <span className="text-lg font-medium">Is Reclaim a replacement for professional treatment?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-reclaim-charcoal/70">
                      <p className="mb-4">
                        No, Reclaim is not a replacement for professional medical or psychiatric treatment. Our platform is designed to complement professional care by providing additional tools, resources, and support for your recovery journey.
                      </p>
                      <p className="mb-4">
                        If you're struggling with addiction or mental health challenges, we strongly encourage you to seek help from qualified healthcare professionals, such as:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Addiction counselors or therapists</li>
                        <li>Psychiatrists or medical doctors</li>
                        <li>Licensed treatment centers</li>
                        <li>Support groups led by professionals</li>
                      </ul>
                      <p>
                        Reclaim can work alongside these professional resources to enhance your recovery process, but should not be used as your only form of treatment for serious addiction or mental health issues.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="account">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border border-reclaim-charcoal/10">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center text-left">
                        <span className="text-lg font-medium">How do I create an account?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-reclaim-charcoal/70">
                      <p className="mb-4">
                        Creating an account with Reclaim is simple:
                      </p>
                      <ol className="list-decimal pl-5 space-y-2 mb-4">
                        <li>Click the "Get Started" button on our homepage</li>
                        <li>Choose to sign up with Google or with your email</li>
                        <li>If using email, fill in your details and create a password</li>
                        <li>Review and accept our Terms of Service and Privacy Policy</li>
                        <li>Click "Create Account" to complete the process</li>
                      </ol>
                      <p>
                        You can also create an anonymous account if you prefer not to share your personal information. This option is available on the signup page.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border border-reclaim-charcoal/10">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center text-left">
                        <span className="text-lg font-medium">Can I use Reclaim anonymously?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-reclaim-charcoal/70">
                      <p className="mb-4">
                        Yes, Reclaim offers an anonymous mode that allows you to use the platform without providing personal identifying information. When using anonymous mode:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>You'll be assigned a random username</li>
                        <li>No personal information is required</li>
                        <li>Your data is still securely stored and protected</li>
                        <li>You can still access most features of the platform</li>
                      </ul>
                      <p className="mb-4">
                        However, please note that some features may be limited in anonymous mode, such as:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Account recovery if you lose access</li>
                        <li>Certain community features that require identity verification</li>
                        <li>Premium subscription options that require payment information</li>
                      </ul>
                      <p>
                        You can always convert an anonymous account to a regular account later if you choose.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="features">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border border-reclaim-charcoal/10">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center text-left">
                        <span className="text-lg font-medium">How do recovery paths work?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-reclaim-charcoal/70">
                      <p>Recovery paths content would appear here</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="privacy">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border border-reclaim-charcoal/10">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center text-left">
                        <span className="text-lg font-medium">How is my data protected?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-reclaim-charcoal/70">
                      <p>Data protection information would appear here</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="technical">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border border-reclaim-charcoal/10">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center text-left">
                        <span className="text-lg font-medium">What devices support Reclaim?</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-reclaim-charcoal/70">
                      <p>Device support information would appear here</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
            
            <div className="bg-white rounded-xl shadow-medium p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-reclaim-blue/10 flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="h-8 w-8 text-reclaim-blue" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-reclaim-charcoal/70 mb-6 max-w-xl mx-auto">
                Can't find the answer you're looking for? Please reach out to our support team for assistance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white w-full sm:w-auto">
                  Contact Support
                </Button>
                <Button variant="outline" className="border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10 w-full sm:w-auto">
                  <FileText className="mr-2 h-4 w-4" />
                  Browse Help Center
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

export default FAQ;
