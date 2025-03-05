import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Coffee, Wine, Cigarette, Gamepad2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const recoveryPaths = [
  {
    id: "alcohol",
    icon: <Wine className="w-6 h-6" />,
    name: "Alcohol Recovery",
    description: "A structured approach to overcoming alcohol dependency with professional guidance and peer support.",
    steps: ["Acknowledgment", "Detoxification", "Therapy", "Support Networks", "Lifestyle Changes", "Maintenance"],
    featured: true
  },
  {
    id: "substance",
    icon: <Coffee className="w-6 h-6" />,
    name: "Substance Recovery",
    description: "Expert-designed paths for overcoming substance addiction through medical support and community.",
    steps: ["Assessment", "Medical Detox", "Therapy", "Skills Building", "Aftercare Planning", "Ongoing Support"],
    featured: false
  },
  {
    id: "smoking",
    icon: <Cigarette className="w-6 h-6" />,
    name: "Smoking Cessation",
    description: "Evidence-based techniques to quit smoking and manage cravings for long-term success.",
    steps: ["Preparation", "Quit Date", "Withdrawal Management", "Habit Replacement", "Maintenance", "Prevention"],
    featured: false
  },
  {
    id: "gaming",
    icon: <Gamepad2 className="w-6 h-6" />,
    name: "Gaming Balance",
    description: "Strategies to develop a healthy relationship with gaming and technology.",
    steps: ["Awareness", "Time Management", "Alternative Activities", "Social Connections", "Controlled Play", "Balance"],
    featured: false
  },
  {
    id: "shopping",
    icon: <ShoppingBag className="w-6 h-6" />,
    name: "Shopping Control",
    description: "Tools to address compulsive spending and develop healthier financial habits.",
    steps: ["Financial Assessment", "Trigger Identification", "Budget Planning", "Impulse Control", "Financial Goals", "Maintenance"],
    featured: false
  }
];

const RecoveryPath = () => {
  const [activePath, setActivePath] = useState(recoveryPaths[0]);

  return (
    <section id="recovery" className="py-16 md:py-24 bg-gradient-soft">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-4 inline-block">
            Recovery Paths
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Personalized Recovery Journeys
          </h2>
          <p className="text-xl text-reclaim-charcoal/70 max-w-2xl mx-auto">
            Every recovery journey is unique. Our personalized paths are designed to meet you where you are and guide you to where you want to be.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24 glass-panel rounded-2xl p-4">
              <h3 className="text-xl font-semibold mb-4 px-2">Select Your Path</h3>
              <nav className="space-y-2">
                {recoveryPaths.map((path) => (
                  <button
                    key={path.id}
                    onClick={() => setActivePath(path)}
                    className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${
                      activePath.id === path.id
                        ? "bg-reclaim-blue text-white"
                        : "hover:bg-reclaim-blue/10 text-reclaim-charcoal"
                    }`}
                  >
                    <span className="mr-3">{path.icon}</span>
                    <span className="font-medium">{path.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-4">
                  {activePath.icon}
                </div>
                <h3 className="text-2xl font-bold">{activePath.name}</h3>
              </div>

              <p className="text-reclaim-charcoal/80 mb-8">
                {activePath.description}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Your Path to Recovery:</h4>
                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-px bg-reclaim-blue/20"></div>
                  <div className="space-y-6">
                    {activePath.steps.map((step, index) => (
                      <div key={index} className="relative pl-10">
                        <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                          <span className="text-xs font-semibold text-reclaim-blue">
                            {index + 1}
                          </span>
                        </div>
                        <h5 className="text-lg font-medium">{step}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/start-path">
                  <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                    Start This Path
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="mt-6 glass-panel rounded-2xl p-6 border border-reclaim-teal/20 bg-gradient-to-r from-reclaim-teal/5 to-reclaim-blue/5">
              <div className="flex items-start md:items-center flex-col md:flex-row">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <div className="w-12 h-12 rounded-full bg-reclaim-teal/20 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-reclaim-teal" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Personalized for You</h4>
                  <p className="text-reclaim-charcoal/70">
                    All recovery paths adapt as you progress, offering personalized recommendations based on your needs and responses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecoveryPath;
