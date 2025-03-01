
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare, User } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <div className="pt-24 md:pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center bg-reclaim-blue/10 w-16 h-16 rounded-full mb-4">
              <MessageSquare className="h-8 w-8 text-reclaim-blue" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-reclaim-charcoal mb-4">
              Contact Us
            </h1>
            <p className="text-reclaim-charcoal/70 max-w-2xl mx-auto">
              We're here to help with any questions, feedback, or support you need on your recovery journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/80 backdrop-blur-sm p-6 border border-reclaim-charcoal/10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-4">
                <Mail className="h-5 w-5 text-reclaim-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-reclaim-charcoal">Email Us</h3>
              <p className="text-reclaim-charcoal/70 mb-4">Our support team is here to help you with any questions.</p>
              <a href="mailto:support@reclaim-recovery.com" className="text-reclaim-blue font-medium hover:underline">
                support@reclaim-recovery.com
              </a>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm p-6 border border-reclaim-charcoal/10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-4">
                <Phone className="h-5 w-5 text-reclaim-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-reclaim-charcoal">Call Us</h3>
              <p className="text-reclaim-charcoal/70 mb-4">Speak directly with our support team during business hours.</p>
              <a href="tel:+15551234567" className="text-reclaim-blue font-medium hover:underline">
                (555) 123-4567
              </a>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm p-6 border border-reclaim-charcoal/10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5 text-reclaim-blue" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-reclaim-charcoal">Our Location</h3>
              <p className="text-reclaim-charcoal/70 mb-4">Visit our office or send mail to this address.</p>
              <address className="text-reclaim-blue font-medium not-italic">
                123 Recovery Road<br />
                Suite 400<br />
                Wellness City, WC 98765
              </address>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-reclaim-charcoal">Send Us a Message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-reclaim-charcoal">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-reclaim-charcoal/50" />
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="pl-10 border-reclaim-charcoal/20 bg-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-reclaim-charcoal">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-reclaim-charcoal/50" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        className="pl-10 border-reclaim-charcoal/20 bg-white"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-reclaim-charcoal">
                    Subject
                  </label>
                  <Select>
                    <SelectTrigger className="border-reclaim-charcoal/20 bg-white">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="feedback">Feedback and Suggestions</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="billing">Billing and Subscription</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-reclaim-charcoal">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?" 
                    className="min-h-[150px] border-reclaim-charcoal/20 bg-white"
                  />
                </div>
                
                <Button className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-reclaim-charcoal">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg mb-2 text-reclaim-charcoal">What is the response time for support requests?</h3>
                  <p className="text-reclaim-charcoal/70">
                    We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please use our emergency resources section.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-2 text-reclaim-charcoal">How can I provide feedback about the platform?</h3>
                  <p className="text-reclaim-charcoal/70">
                    We welcome your suggestions! Use the contact form or email us directly at feedback@reclaim-recovery.com with your ideas.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-2 text-reclaim-charcoal">Is there a phone support option?</h3>
                  <p className="text-reclaim-charcoal/70">
                    Yes, our phone support is available Monday through Friday, 9 AM to 5 PM Eastern Time. Call us at (555) 123-4567.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-2 text-reclaim-charcoal">Do you offer support for family members?</h3>
                  <p className="text-reclaim-charcoal/70">
                    Absolutely! We have resources specifically for family members and supporters. Contact us for more information about our family support programs.
                  </p>
                </div>
                
                <div className="bg-reclaim-blue/10 rounded-lg p-6">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-reclaim-blue mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg mb-2 text-reclaim-charcoal">Business Hours</h3>
                      <p className="text-reclaim-charcoal/70 mb-1">Monday - Friday: 9:00 AM - 5:00 PM ET</p>
                      <p className="text-reclaim-charcoal/70">Saturday - Sunday: Closed (Email support only)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
