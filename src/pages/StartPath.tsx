
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Trophy, Calendar, HeartHandshake, Wine, Coffee, Cigarette, Gamepad2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const recoveryPaths = [
  {
    id: "alcohol",
    icon: <Wine className="w-6 h-6" />,
    name: "Alcohol Recovery",
    description: "A structured approach to overcoming alcohol dependency with professional guidance and peer support.",
    steps: [
      {
        title: "Acknowledgment",
        description: "Recognize the impact of alcohol on your life and commit to change."
      },
      {
        title: "Detoxification",
        description: "Safely manage withdrawal symptoms with medical support if needed."
      },
      {
        title: "Therapy",
        description: "Engage in evidence-based therapeutic approaches to address underlying issues."
      },
      {
        title: "Support Networks",
        description: "Connect with peers and professionals to build a strong support system."
      },
      {
        title: "Lifestyle Changes",
        description: "Develop healthy habits and coping mechanisms to replace drinking behaviors."
      },
      {
        title: "Maintenance",
        description: "Continue practicing recovery skills and preventing relapse long-term."
      }
    ],
    duration: "6-12 months",
    community: "Active community of 5,300+ members"
  },
  {
    id: "substance",
    icon: <Coffee className="w-6 h-6" />,
    name: "Substance Recovery",
    description: "Expert-designed paths for overcoming substance addiction through medical support and community.",
    steps: [
      {
        title: "Assessment",
        description: "Evaluate your substance use patterns and their impact on your life."
      },
      {
        title: "Medical Detox",
        description: "Safely manage withdrawal with professional medical supervision."
      },
      {
        title: "Therapy",
        description: "Address underlying issues through individual and group therapy sessions."
      },
      {
        title: "Skills Building",
        description: "Develop coping strategies and life skills to maintain sobriety."
      },
      {
        title: "Aftercare Planning",
        description: "Create a sustainable plan for continued recovery and growth."
      },
      {
        title: "Ongoing Support",
        description: "Engage with community and resources for long-term recovery maintenance."
      }
    ],
    duration: "9-18 months",
    community: "Active community of 4,800+ members"
  },
  {
    id: "smoking",
    icon: <Cigarette className="w-6 h-6" />,
    name: "Smoking Cessation",
    description: "Evidence-based techniques to quit smoking and manage cravings for long-term success.",
    steps: [
      {
        title: "Preparation",
        description: "Understand your smoking patterns and prepare mentally for quitting."
      },
      {
        title: "Quit Date",
        description: "Set a specific date to stop smoking and prepare needed supports."
      },
      {
        title: "Withdrawal Management",
        description: "Navigate nicotine withdrawal with evidence-based strategies."
      },
      {
        title: "Habit Replacement",
        description: "Develop new routines to replace smoking behaviors."
      },
      {
        title: "Maintenance",
        description: "Continue practicing smoke-free living and managing triggers."
      },
      {
        title: "Prevention",
        description: "Learn to identify and address potential relapse situations."
      }
    ],
    duration: "3-6 months",
    community: "Active community of 7,200+ members"
  },
  {
    id: "gaming",
    icon: <Gamepad2 className="w-6 h-6" />,
    name: "Gaming Balance",
    description: "Strategies to develop a healthy relationship with gaming and technology.",
    steps: [
      {
        title: "Awareness",
        description: "Recognize patterns of gaming behavior and their impact."
      },
      {
        title: "Time Management",
        description: "Establish balanced schedules for gaming and other activities."
      },
      {
        title: "Alternative Activities",
        description: "Develop interests and hobbies beyond gaming."
      },
      {
        title: "Social Connections",
        description: "Build meaningful relationships outside of gaming environments."
      },
      {
        title: "Controlled Play",
        description: "Learn to enjoy gaming in moderation without compulsion."
      },
      {
        title: "Balance",
        description: "Maintain a sustainable lifestyle with healthy gaming habits."
      }
    ],
    duration: "3-6 months",
    community: "Active community of 3,100+ members"
  },
  {
    id: "shopping",
    icon: <ShoppingBag className="w-6 h-6" />,
    name: "Shopping Control",
    description: "Tools to address compulsive spending and develop healthier financial habits.",
    steps: [
      {
        title: "Financial Assessment",
        description: "Evaluate spending patterns and their impact on your life."
      },
      {
        title: "Trigger Identification",
        description: "Recognize emotional and situational triggers for compulsive shopping."
      },
      {
        title: "Budget Planning",
        description: "Create practical budgets and financial management strategies."
      },
      {
        title: "Impulse Control",
        description: "Develop techniques to manage shopping urges and delay gratification."
      },
      {
        title: "Financial Goals",
        description: "Establish meaningful financial objectives and saving plans."
      },
      {
        title: "Maintenance",
        description: "Continue practicing healthy spending habits and financial wellness."
      }
    ],
    duration: "4-8 months",
    community: "Active community of 2,800+ members"
  }
];

const StartPath = () => {
  const [activePath, setActivePath] = useState(recoveryPaths[0]);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <main className="pt-24 md:pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center bg-reclaim-blue/10 w-16 h-16 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-reclaim-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-reclaim-charcoal mb-4">
              Choose Your Recovery Path
            </h1>
            <p className="text-reclaim-charcoal/70 max-w-2xl mx-auto">
              Everyone's recovery journey is unique. Select the path that best fits your needs and begin your personalized journey toward a healthier life.
            </p>
          </div>

          {/* Path Selection */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Available Recovery Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recoveryPaths.map((path) => (
                <div 
                  key={path.id}
                  className={`glass-panel rounded-xl p-6 cursor-pointer transition-all hover:shadow-medium ${
                    activePath.id === path.id 
                      ? "ring-2 ring-reclaim-blue shadow-medium" 
                      : "hover:border-reclaim-blue/30"
                  }`}
                  onClick={() => setActivePath(path)}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-4">
                      {path.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{path.name}</h3>
                  </div>
                  <p className="text-reclaim-charcoal/70 mb-4">
                    {path.description}
                  </p>
                  <div className="flex justify-between text-sm text-reclaim-charcoal/60">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {path.duration}
                    </span>
                    <span className="flex items-center">
                      <HeartHandshake className="h-4 w-4 mr-1" />
                      Community Support
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Path Details */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-medium overflow-hidden border border-reclaim-blue/10">
              <div className="bg-reclaim-blue text-white p-6 md:p-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    {activePath.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{activePath.name}</h2>
                    <p className="text-white/80">{activePath.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-semibold">Your Path to Recovery</h3>
                  <div className="flex items-center text-reclaim-charcoal/60 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Estimated duration: {activePath.duration}</span>
                  </div>
                </div>
                
                <div className="relative mb-12">
                  <div className="absolute left-3 top-0 bottom-0 w-px bg-reclaim-blue/20"></div>
                  <div className="space-y-8">
                    {activePath.steps.map((step, index) => (
                      <div 
                        key={index} 
                        className={`relative pl-10 ${
                          index === activeStep ? "animate-pulse-light" : ""
                        }`}
                        onClick={() => setActiveStep(index)}
                      >
                        <div className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center ${
                          index === activeStep
                            ? "bg-reclaim-blue text-white"
                            : "bg-reclaim-blue/10 text-reclaim-blue"
                        }`}>
                          <span className="text-xs font-semibold">
                            {index + 1}
                          </span>
                        </div>
                        <h4 className="text-lg font-medium mb-1">{step.title}</h4>
                        <p className="text-reclaim-charcoal/70">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-reclaim-blue/5 border border-reclaim-blue/10 rounded-xl p-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-reclaim-blue/20 flex items-center justify-center mr-4 mt-1">
                      <Trophy className="h-5 w-5 text-reclaim-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Community Support</h4>
                      <p className="text-reclaim-charcoal/70 mb-4">
                        Join a supportive community of peers who understand what you're going through. Share experiences, gain insights, and celebrate victories together.
                      </p>
                      <div className="text-sm text-reclaim-charcoal/60">
                        {activePath.community}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Link to="/signup">
                    <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white px-8 py-6 h-auto text-lg rounded-xl">
                      Begin This Recovery Path
                      <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Path Benefits */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Benefits of Structured Recovery Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-reclaim-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Evidence-Based Approach</h3>
                <p className="text-reclaim-charcoal/70">
                  Our recovery paths are designed by experts based on proven therapeutic approaches and recovery science.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-reclaim-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Experience</h3>
                <p className="text-reclaim-charcoal/70">
                  Each path adapts to your progress, providing personalized recommendations and resources tailored to your unique needs.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-reclaim-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Connection</h3>
                <p className="text-reclaim-charcoal/70">
                  Connect with others on similar paths, share experiences, and build a supportive network that understands your journey.
                </p>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-reclaim-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Michael T.</h3>
                    <p className="text-sm text-reclaim-charcoal/60">Alcohol Recovery Path • 9 months</p>
                  </div>
                </div>
                <p className="text-reclaim-charcoal/70 italic">
                  "The structure of the Alcohol Recovery Path gave me a clear roadmap when I felt completely lost. Breaking down the journey into manageable steps made recovery feel possible for the first time."
                </p>
              </div>
              
              <div className="glass-panel rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-reclaim-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah K.</h3>
                    <p className="text-sm text-reclaim-charcoal/60">Smoking Cessation Path • 4 months</p>
                  </div>
                </div>
                <p className="text-reclaim-charcoal/70 italic">
                  "I tried quitting smoking many times before, but this path provided the support and tools I needed. The community aspect was particularly helpful during difficult moments."
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-reclaim-charcoal/70 max-w-2xl mx-auto mb-8">
              Take the first step today. Our personalized recovery paths are designed to support you through every stage of your recovery journey.
            </p>
            <Link to="/signup">
              <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white text-lg px-8 py-6 h-auto rounded-xl">
                Start Your Recovery Path
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StartPath;
