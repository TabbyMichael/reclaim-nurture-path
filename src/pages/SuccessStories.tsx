
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, Award, Calendar, Quote, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type SuccessStoryProps = {
  name: string;
  avatarUrl?: string;
  initials: string;
  title: string;
  content: string;
  duration: string;
  milestones?: string[];
};

const SuccessStory: React.FC<SuccessStoryProps> = ({
  name,
  avatarUrl,
  initials,
  title,
  content,
  duration,
  milestones = [],
}) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-0">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-12 w-12 border-2 border-reclaim-blue/20">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-reclaim-charcoal/60 flex items-center">
              <Calendar className="h-3 w-3 mr-1" /> {duration} in recovery
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          <div className="relative">
            <Quote className="absolute -left-1 -top-1 h-6 w-6 text-reclaim-blue/20" />
            <p className="pl-6 text-reclaim-charcoal/80 italic">"{content}"</p>
          </div>
        </div>
        
        {milestones.length > 0 && (
          <div className="mt-6">
            <h4 className="text-sm font-medium mb-2 flex items-center">
              <Award className="h-4 w-4 mr-1 text-amber-500" /> Key Milestones
            </h4>
            <ul className="space-y-1">
              {milestones.map((milestone, index) => (
                <li key={index} className="text-sm flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-reclaim-blue mt-2 mr-2"></span>
                  {milestone}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex justify-between items-center mt-6">
          <Button variant="outline" size="sm" className="text-xs">
            <Heart className="h-3 w-3 mr-1" /> Inspiring
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            <MessageSquare className="h-3 w-3 mr-1" /> Comment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const SuccessStories = () => {
  const stories = {
    early: [
      {
        name: "Alex R.",
        initials: "AR",
        title: "Finding Hope in the First 30 Days",
        content: "The beginning was tough, but the support I found here made all the difference. I learned that I wasn't alone and that recovery is possible one day at a time.",
        duration: "3 months",
        milestones: [
          "Completed first 30 days substance-free",
          "Started daily meditation practice",
          "Reconnected with family",
        ],
      },
      {
        name: "Jamie S.",
        initials: "JS",
        title: "Small Victories Add Up",
        content: "I used to think recovery meant one big fight, but I've learned it's about winning small battles every day. Using the tracking tools here has helped me see my progress and stay motivated.",
        duration: "2 months",
        milestones: [
          "Identified personal triggers",
          "Developed morning routine",
          "Attended first support group",
        ],
      },
    ],
    midstage: [
      {
        name: "Taylor M.",
        initials: "TM",
        title: "Building a New Life at 6 Months",
        content: "At six months in, I'm starting to recognize myself again. The journals I've kept here have become a record of my transformation. I can look back and see how far I've come.",
        duration: "8 months",
        milestones: [
          "Returned to school part-time",
          "Repaired key relationships",
          "Developed healthy coping strategies",
        ],
      },
      {
        name: "Jordan P.",
        initials: "JP",
        title: "Finding Purpose After Addiction",
        content: "Recovery gave me back my life, but the community here helped me find purpose. I've discovered new passions and rebuilt my sense of self-worth beyond my past struggles.",
        duration: "1 year",
        milestones: [
          "Started volunteering",
          "Became a peer mentor",
          "Celebrated one year sober",
        ],
      },
    ],
    longterm: [
      {
        name: "Sam D.",
        initials: "SD",
        title: "Life Beyond Recovery",
        content: "Three years in, and recovery is no longer the main focus of my life—it's just part of who I am. The tools and community here helped me build a foundation for a fulfilling life I never thought possible.",
        duration: "3 years",
        milestones: [
          "Started a new career",
          "Mentored five people through early recovery",
          "Developed healthy relationships",
        ],
      },
      {
        name: "Chris B.",
        initials: "CB",
        title: "From Rock Bottom to Helping Others",
        content: "Looking back on five years in recovery, I'm grateful for the support this community provided when I needed it most. Now I get to be that support for others just starting their journey.",
        duration: "5 years",
        milestones: [
          "Became a certified recovery coach",
          "Started family reconciliation",
          "Leads weekly support meetings",
        ],
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
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Success Stories</h1>
              <p className="text-xl text-white/80">
                Real stories from real people who have found strength, hope, and progress
                through their recovery journey.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-center mb-12 text-reclaim-charcoal/70 max-w-3xl mx-auto">
              Everyone's recovery journey is unique, but hearing others' experiences can provide
              inspiration and hope. These stories represent different stages of recovery and
              demonstrate that positive change is possible.
            </p>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full mb-8 bg-white">
                <TabsTrigger value="all">All Stories</TabsTrigger>
                <TabsTrigger value="early">Early Recovery</TabsTrigger>
                <TabsTrigger value="midstage">Middle Stage</TabsTrigger>
                <TabsTrigger value="longterm">Long-Term</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[...stories.early, ...stories.midstage, ...stories.longterm].map((story, index) => (
                    <SuccessStory key={index} {...story} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="early" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {stories.early.map((story, index) => (
                    <SuccessStory key={index} {...story} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="midstage" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {stories.midstage.map((story, index) => (
                    <SuccessStory key={index} {...story} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="longterm" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {stories.longterm.map((story, index) => (
                    <SuccessStory key={index} {...story} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-4">Share Your Story</h3>
              <p className="text-reclaim-charcoal/70 mb-6 max-w-2xl mx-auto">
                Your experience could inspire someone else on their recovery journey.
                Share your story with our community.
              </p>
              <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90">
                <Quote className="mr-2 h-4 w-4" />
                Submit Your Story
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStories;
