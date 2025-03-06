
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BookOpen, Play, Download, Clock, BookMarked, FileText, HeartPulse, Brain } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ResourceCardProps = {
  title: string;
  description: string;
  type: "article" | "video" | "pdf";
  icon: React.ReactNode;
  link: string;
  duration?: string;
};

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  type,
  icon,
  link,
  duration,
}) => {
  const typeLabels = {
    article: "Article",
    video: "Video",
    pdf: "PDF Guide",
  };

  const buttonLabels = {
    article: "Read Article",
    video: "Watch Video",
    pdf: "Download PDF",
  };

  const buttonIcons = {
    article: <BookOpen className="h-4 w-4 mr-2" />,
    video: <Play className="h-4 w-4 mr-2" />,
    pdf: <Download className="h-4 w-4 mr-2" />,
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-reclaim-blue/10 text-reclaim-blue text-xs py-1 px-2 rounded-full">
            {typeLabels[type]}
          </span>
          {duration && (
            <span className="text-xs text-reclaim-charcoal/60 flex items-center">
              <Clock className="h-3 w-3 mr-1" /> {duration}
            </span>
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex justify-center py-8">{icon}</div>
      </CardContent>
      <CardFooter>
        <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90">
            {buttonIcons[type]}
            {buttonLabels[type]}
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

const EducationalResources = () => {
  const resources = {
    understanding: [
      {
        title: "Understanding Addiction as a Disease",
        description: "Learn about the science behind addiction and how it affects the brain.",
        type: "article" as const,
        icon: <Brain className="w-16 h-16 text-reclaim-blue/60" />,
        link: "#",
        duration: "10 min read",
      },
      {
        title: "The Recovery Process Explained",
        description: "A comprehensive guide to the stages of recovery and what to expect.",
        type: "pdf" as const,
        icon: <FileText className="w-16 h-16 text-reclaim-blue/60" />,
        link: "#",
        duration: "15 pages",
      },
      {
        title: "Neuroscience of Recovery",
        description: "How the brain heals during recovery and the science of neuroplasticity.",
        type: "video" as const,
        icon: <BookMarked className="w-16 h-16 text-reclaim-blue/60" />,
        link: "#",
        duration: "24 min",
      },
    ],
    coping: [
      {
        title: "Mindfulness for Cravings",
        description: "Learn mindfulness techniques specifically designed for managing cravings.",
        type: "video" as const,
        icon: <Play className="w-16 h-16 text-reclaim-blue/60" />,
        link: "#",
        duration: "18 min",
      },
      {
        title: "Stress Management Techniques",
        description: "Practical strategies for managing stress without turning to substances.",
        type: "article" as const,
        icon: <HeartPulse className="w-16 h-16 text-reclaim-blue/60" />,
        link: "#",
        duration: "12 min read",
      },
      {
        title: "Building a Relapse Prevention Plan",
        description: "Step-by-step guide to creating your personalized relapse prevention plan.",
        type: "pdf" as const,
        icon: <FileText className="w-16 h-16 text-reclaim-blue/60" />,
        link: "#",
        duration: "8 pages",
      },
    ],
    wellness: [
      {
        title: "Nutrition in Recovery",
        description: "How proper nutrition supports healing and reduces cravings.",
        type: "article" as const,
        icon: <BookOpen className="w-16 h-16 text-reclaim-blue/60" />,
        link: "#",
        duration: "15 min read",
      },
      {
        title: "Restoring Sleep Patterns",
        description: "Techniques for improving sleep quality during recovery.",
        type: "video" as const,
        icon: <Play className="w-16 h-16 text-reclaim-blue/60" />,
        link: "#",
        duration: "20 min",
      },
      {
        title: "Exercise for Mental Health",
        description: "How physical activity boosts mood and supports recovery.",
        type: "pdf" as const,
        icon: <FileText className="w-16 h-16 text-reclaim-blue/60" />,
        link: "#",
        duration: "10 pages",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <main className="pt-20 pb-16">
        <section className="bg-gradient-to-r from-reclaim-blue to-reclaim-teal text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Educational Resources</h1>
              <p className="text-xl text-white/80">
                Explore our collection of evidence-based resources to support your recovery journey
                and deepen your understanding of addiction and healing.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <Tabs defaultValue="understanding" className="max-w-5xl mx-auto">
            <TabsList className="w-full mb-8 bg-white">
              <TabsTrigger value="understanding" className="flex-1">Understanding Addiction</TabsTrigger>
              <TabsTrigger value="coping" className="flex-1">Coping Strategies</TabsTrigger>
              <TabsTrigger value="wellness" className="flex-1">Wellness & Self-Care</TabsTrigger>
            </TabsList>

            <TabsContent value="understanding" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.understanding.map((resource, index) => (
                  <ResourceCard key={index} {...resource} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="coping" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.coping.map((resource, index) => (
                  <ResourceCard key={index} {...resource} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="wellness" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.wellness.map((resource, index) => (
                  <ResourceCard key={index} {...resource} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Personalized Guidance?</h2>
              <p className="text-reclaim-charcoal/70 mb-8">
                Our community members and recovery coaches can help you find the resources
                that are most relevant to your unique journey.
              </p>
              <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90">
                <BookOpen className="mr-2 h-5 w-5" />
                Join a Discussion Group
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EducationalResources;
