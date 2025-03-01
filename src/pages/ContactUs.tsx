
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  AlertCircle
} from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <section className="bg-reclaim-blue py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              We're here to help. Reach out to our team with any questions, feedback, or concerns about your recovery journey.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="glass-card hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-6 w-6 text-reclaim-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Chat Support</h3>
                  <p className="text-reclaim-charcoal/70 mb-4">
                    Chat with our support team directly through the app for immediate assistance.
                  </p>
                  <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white w-full">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-reclaim-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-reclaim-charcoal/70 mb-4">
                    Send us an email and we'll get back to you within 24 hours.
                  </p>
                  <a href="mailto:support@reclaim-app.com" className="text-reclaim-blue font-medium hover:underline">
                    support@reclaim-app.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-reclaim-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-reclaim-charcoal/70 mb-4">
                    Speak directly with our support team during business hours.
                  </p>
                  <a href="tel:+1800RECLAIM" className="text-reclaim-blue font-medium hover:underline">
                    +1 (800) RECLAIM
                  </a>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-white rounded-xl shadow-medium overflow-hidden mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="bg-reclaim-charcoal text-white p-8 lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 mr-4 mt-0.5 text-reclaim-teal" />
                      <div>
                        <h3 className="font-medium mb-1">Our Address</h3>
                        <p className="text-white/70">
                          123 Recovery Street<br />
                          Wellness District<br />
                          San Francisco, CA 94103
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 mr-4 mt-0.5 text-reclaim-teal" />
                      <div>
                        <h3 className="font-medium mb-1">Email Us</h3>
                        <p className="text-white/70">
                          support@reclaim-app.com<br />
                          partnerships@reclaim-app.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 mr-4 mt-0.5 text-reclaim-teal" />
                      <div>
                        <h3 className="font-medium mb-1">Call Us</h3>
                        <p className="text-white/70">
                          +1 (800) RECLAIM<br />
                          +1 (800) 732-5246
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 mr-4 mt-0.5 text-reclaim-teal" />
                      <div>
                        <h3 className="font-medium mb-1">Support Hours</h3>
                        <p className="text-white/70">
                          Monday - Friday: 8am - 8pm EST<br />
                          Saturday: 10am - 6pm EST<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <div className="flex items-center mb-2">
                      <AlertCircle className="h-5 w-5 mr-2 text-reclaim-teal" />
                      <span className="font-medium">Emergency Support</span>
                    </div>
                    <p className="text-white/70 mb-4 text-sm">
                      If you're experiencing a crisis or emergency, please call our 24/7 emergency hotline or use the in-app Emergency Support feature.
                    </p>
                    <Button className="bg-reclaim-teal hover:bg-reclaim-teal/90 text-white">
                      Emergency Resources
                    </Button>
                  </div>
                </div>
                
                <div className="p-8 lg:col-span-3">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium text-reclaim-charcoal/70">
                          First Name
                        </label>
                        <Input 
                          id="first-name"
                          placeholder="Your first name" 
                          className="border-reclaim-charcoal/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium text-reclaim-charcoal/70">
                          Last Name
                        </label>
                        <Input 
                          id="last-name"
                          placeholder="Your last name" 
                          className="border-reclaim-charcoal/20"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-reclaim-charcoal/70">
                          Email Address
                        </label>
                        <Input 
                          id="email"
                          type="email"
                          placeholder="your.email@example.com" 
                          className="border-reclaim-charcoal/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-reclaim-charcoal/70">
                          Phone Number (Optional)
                        </label>
                        <Input 
                          id="phone"
                          placeholder="(123) 456-7890" 
                          className="border-reclaim-charcoal/20"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-reclaim-charcoal/70">
                        Subject
                      </label>
                      <Input 
                        id="subject"
                        placeholder="How can we help you?" 
                        className="border-reclaim-charcoal/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-reclaim-charcoal/70">
                        Message
                      </label>
                      <Textarea 
                        id="message"
                        placeholder="Please describe your question or concern in detail..." 
                        className="border-reclaim-charcoal/20 min-h-32"
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <input 
                        type="checkbox" 
                        id="privacy-consent" 
                        className="mt-1"
                      />
                      <label 
                        htmlFor="privacy-consent" 
                        className="text-sm text-reclaim-charcoal/70"
                      >
                        I agree to the processing of my personal data in accordance with the <a href="/privacy" className="text-reclaim-blue hover:underline">Privacy Policy</a>.
                      </label>
                    </div>
                    
                    <Button type="submit" className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-reclaim-charcoal/70 mb-8 max-w-2xl mx-auto">
                Find answers to common questions or browse our comprehensive Help Center for more information.
              </p>
              <Button variant="outline" className="border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10">
                Visit Help Center
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
