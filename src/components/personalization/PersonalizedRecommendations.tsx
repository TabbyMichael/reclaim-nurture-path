
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, BookText, Video, FileText, ArrowRight } from "lucide-react";

interface Recommendation {
  id: string;
  title: string;
  description: string;
  type: "article" | "video" | "exercise" | "journal";
  icon: React.ReactNode;
  tags: string[];
  url: string;
}

const PersonalizedRecommendations = () => {
  // Sample recommendations data - in a real app, this would come from an API
  const recommendations: Recommendation[] = [
    {
      id: "1",
      title: "Understanding Trauma Responses",
      description: "Learn about the different ways trauma can affect your mind and body.",
      type: "article",
      icon: <BookOpen className="h-5 w-5 text-reclaim-blue" />,
      tags: ["trauma", "education", "beginner"],
      url: "/resources/understanding-trauma",
    },
    {
      id: "2",
      title: "5-Minute Mindfulness Exercise",
      description: "A quick mindfulness practice you can do anywhere to reduce stress.",
      type: "exercise",
      icon: <FileText className="h-5 w-5 text-reclaim-teal" />,
      tags: ["mindfulness", "stress-reduction", "quick"],
      url: "/exercises/mindfulness",
    },
    {
      id: "3",
      title: "How to Recognize Triggers",
      description: "Video guide on identifying and managing your personal triggers.",
      type: "video",
      icon: <Video className="h-5 w-5 text-red-500" />,
      tags: ["triggers", "awareness", "intermediate"],
      url: "/resources/recognizing-triggers",
    },
    {
      id: "4",
      title: "Journaling Prompt: Reflecting on Progress",
      description: "A guided journaling prompt to help you reflect on your recovery journey.",
      type: "journal",
      icon: <BookText className="h-5 w-5 text-amber-500" />,
      tags: ["journaling", "reflection", "self-care"],
      url: "/journal/prompt/progress",
    },
  ];

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "article":
        return "Article";
      case "video":
        return "Video";
      case "exercise":
        return "Exercise";
      case "journal":
        return "Journal Prompt";
      default:
        return "Resource";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "article":
        return "bg-blue-100 text-blue-800";
      case "video":
        return "bg-red-100 text-red-800";
      case "exercise":
        return "bg-green-100 text-green-800";
      case "journal":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Recommended For You</h2>
        <Button variant="link" className="flex items-center">
          View All <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recommendations.map((recommendation) => (
          <Card key={recommendation.id} className="h-full flex flex-col hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(recommendation.type)}`}>
                    {getTypeLabel(recommendation.type)}
                  </span>
                </div>
                {recommendation.icon}
              </div>
              <CardTitle className="mt-2 text-lg">{recommendation.title}</CardTitle>
              <CardDescription>{recommendation.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-1 mt-1">
                {recommendation.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <a href={recommendation.url}>View Resource</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;
