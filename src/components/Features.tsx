
import React from "react";
import { ChevronRight, BarChart2, Calendar, Medal, ShieldCheck, Users, Lightbulb, BookOpen, Brain } from "lucide-react";

const features = [
  {
    icon: <BarChart2 className="w-6 h-6 text-reclaim-blue" />,
    title: "Progress Tracking",
    description: "Track your recovery journey with visual charts and milestone celebrations.",
    delay: "0.1s"
  },
  {
    icon: <Calendar className="w-6 h-6 text-reclaim-blue" />,
    title: "Structured Plans",
    description: "Follow personalized step-by-step recovery paths tailored to your needs.",
    delay: "0.2s"
  },
  {
    icon: <Medal className="w-6 h-6 text-reclaim-blue" />,
    title: "Achievement System",
    description: "Earn badges and rewards as you reach important recovery milestones.",
    delay: "0.3s"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-reclaim-blue" />,
    title: "Privacy First",
    description: "Your data is encrypted and private, giving you complete control.",
    delay: "0.4s"
  },
  {
    icon: <Users className="w-6 h-6 text-reclaim-blue" />,
    title: "Community Support",
    description: "Connect with others on similar journeys in a safe, moderated environment.",
    delay: "0.5s"
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-reclaim-blue" />,
    title: "Daily Inspiration",
    description: "Receive motivational quotes and evidence-based tips to stay focused.",
    delay: "0.6s"
  },
  {
    icon: <BookOpen className="w-6 h-6 text-reclaim-blue" />,
    title: "Guided Journaling",
    description: "Document your thoughts and feelings with structured reflection prompts.",
    delay: "0.7s"
  },
  {
    icon: <Brain className="w-6 h-6 text-reclaim-blue" />,
    title: "Smart Insights",
    description: "Receive personalized recommendations based on your recovery patterns.",
    delay: "0.8s"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-4 inline-block">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need for Your Recovery
          </h2>
          <p className="text-xl text-reclaim-charcoal/70 max-w-2xl mx-auto">
            Our comprehensive toolkit is designed to support every aspect of your recovery journey, from daily tracking to community support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card opacity-0" 
              style={{ animationDelay: feature.delay, animationFillMode: "forwards" }}
            >
              <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-reclaim-charcoal/70 mb-4">{feature.description}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-reclaim-blue font-medium hover:text-reclaim-blue/80 transition-colors"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
