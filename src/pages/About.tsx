
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  Shield, 
  Clock, 
  Brain,
  Lightbulb,
  ArrowRight,
  Star
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <section className="bg-reclaim-blue py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-6">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Empowering individuals to reclaim their lives from addiction and behavioral challenges through compassionate technology and community support.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <span className="inline-block px-3 py-1 bg-reclaim-blue/10 text-reclaim-blue rounded-full text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-reclaim-charcoal">
                  A Personal Journey to Recovery
                </h2>
                <p className="text-lg text-reclaim-charcoal/70 mb-6">
                  Reclaim was born from our founder's personal struggle with addiction and the realization that recovery requires more than just willpower—it demands community, structure, and accessible resources.
                </p>
                <p className="text-lg text-reclaim-charcoal/70 mb-6">
                  After years of battling addiction and experiencing the gaps in traditional recovery approaches, our team set out to create a comprehensive digital solution that combines evidence-based practices with modern technology.
                </p>
                <p className="text-lg text-reclaim-charcoal/70">
                  Today, Reclaim serves thousands of individuals on their recovery journeys, providing the tools, support, and community needed to overcome addiction and behavioral challenges.
                </p>
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-medium">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="People supporting each other in a group setting" 
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-6">
                  <blockquote className="text-reclaim-charcoal/80 italic mb-4">
                    "We created Reclaim to be the resource I wish I had during my darkest moments—a companion that understands the journey and provides the right support at the right time."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-reclaim-blue flex items-center justify-center mr-4 text-white font-bold">
                      AJ
                    </div>
                    <div>
                      <p className="font-semibold">Alex Johnson</p>
                      <p className="text-sm text-reclaim-charcoal/60">Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-reclaim-blue/10 text-reclaim-blue rounded-full text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-reclaim-charcoal">
                The Principles That Guide Us
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-7 w-7 text-reclaim-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Compassion First</h3>
                  <p className="text-reclaim-charcoal/70">
                    We approach recovery with empathy and understanding, recognizing that each person's journey is unique and deserving of respect.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-7 w-7 text-reclaim-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Trusted Privacy</h3>
                  <p className="text-reclaim-charcoal/70">
                    We protect your personal information with the highest standards of security, ensuring your recovery journey remains private and safe.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-7 w-7 text-reclaim-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Community Support</h3>
                  <p className="text-reclaim-charcoal/70">
                    We believe in the power of connection and foster a supportive community where individuals can share, learn, and grow together.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-7 w-7 text-reclaim-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Evidence-Based</h3>
                  <p className="text-reclaim-charcoal/70">
                    Our approach is grounded in scientific research and proven recovery methodologies, ensuring effective and reliable support.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-7 w-7 text-reclaim-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Continuous Growth</h3>
                  <p className="text-reclaim-charcoal/70">
                    We are committed to ongoing improvement, both in our platform and in supporting the personal growth of our users.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-7 w-7 text-reclaim-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Innovative Solutions</h3>
                  <p className="text-reclaim-charcoal/70">
                    We harness the power of technology to create intuitive, accessible tools that make recovery management more effective.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-medium mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <span className="inline-block px-3 py-1 bg-reclaim-blue/10 text-reclaim-blue rounded-full text-sm font-medium mb-4">
                    Our Impact
                  </span>
                  <h2 className="text-3xl font-bold mb-6 text-reclaim-charcoal">
                    Making a Difference Together
                  </h2>
                  <p className="text-reclaim-charcoal/70 mb-6">
                    Since our founding, Reclaim has been privileged to be part of thousands of recovery journeys. Our community continues to grow and thrive, creating a powerful network of support and encouragement.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-3xl font-bold text-reclaim-blue mb-1">25,000+</div>
                      <div className="text-reclaim-charcoal/70">Active Users</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-reclaim-blue mb-1">87%</div>
                      <div className="text-reclaim-charcoal/70">Improvement Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-reclaim-blue mb-1">500+</div>
                      <div className="text-reclaim-charcoal/70">Support Groups</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-reclaim-blue mb-1">150+</div>
                      <div className="text-reclaim-charcoal/70">Recovery Paths</div>
                    </div>
                  </div>
                  
                  <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                    Read Success Stories
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-reclaim-blue/5 p-8 md:p-12 flex items-center">
                  <div>
                    <div className="mb-6 flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <span className="ml-2 font-medium">4.9/5 Average Rating</span>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="italic text-reclaim-charcoal/70 mb-3">
                          "Reclaim has been a lifeline for me. The progress tracking and community support have kept me accountable and motivated throughout my recovery journey."
                        </p>
                        <div className="font-medium">Michael S. - 14 months sober</div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="italic text-reclaim-charcoal/70 mb-3">
                          "The emergency support feature helped me through several critical moments when I was close to relapse. I'm grateful for this thoughtful platform."
                        </p>
                        <div className="font-medium">Sarah T. - 8 months in recovery</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-reclaim-blue/10 text-reclaim-blue rounded-full text-sm font-medium mb-4">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-reclaim-charcoal">
                The Faces Behind Reclaim
              </h2>
              <p className="text-lg text-reclaim-charcoal/70 max-w-3xl mx-auto mb-12">
                Our diverse team brings together expertise in addiction recovery, mental health, technology, and user experience to create a platform that truly serves those in need.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="Alex Johnson" 
                    className="w-full h-60 object-cover object-center"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Alex Johnson</h3>
                    <p className="text-reclaim-charcoal/70">Founder & CEO</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
                    alt="Sarah Martinez" 
                    className="w-full h-60 object-cover object-center"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Sarah Martinez</h3>
                    <p className="text-reclaim-charcoal/70">Chief Clinical Officer</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
                    alt="Emily Chen" 
                    className="w-full h-60 object-cover object-center"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Emily Chen</h3>
                    <p className="text-reclaim-charcoal/70">Head of Product</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="Marcus Wilson" 
                    className="w-full h-60 object-cover object-center"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Marcus Wilson</h3>
                    <p className="text-reclaim-charcoal/70">Chief Technology Officer</p>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="mt-8 border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10">
                View Full Team
              </Button>
            </div>
            
            <div className="bg-reclaim-blue rounded-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">Join Us in Our Mission</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Whether you're seeking recovery support or want to contribute to our mission, we welcome you to the Reclaim community.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-reclaim-blue hover:bg-white/90">
                  Get Started Today
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Contact Us
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

export default About;
