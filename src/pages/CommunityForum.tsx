
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Users, Pencil, Clock, Search, Filter, PlusCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

// Forum topic type
type ForumTopicProps = {
  id: string;
  title: string;
  description: string;
  replies: number;
  participants: number;
  lastActive: string;
  isPinned?: boolean;
  category: string;
};

const ForumTopic: React.FC<ForumTopicProps> = ({
  id,
  title,
  description,
  replies,
  participants,
  lastActive,
  isPinned,
  category,
}) => {
  return (
    <Link to={`/community/topic/${id}`}>
      <Card className="mb-3 cursor-pointer hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-reclaim-blue/10 text-reclaim-blue text-xs py-1 px-2 rounded-full">
                  {category}
                </span>
                {isPinned && (
                  <span className="bg-amber-100 text-amber-700 text-xs py-1 px-2 rounded-full flex items-center">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500 mr-1"></span>
                    Pinned
                  </span>
                )}
              </div>
              <CardTitle className="text-lg flex items-center">
                {title}
              </CardTitle>
              <CardDescription className="line-clamp-2 mt-1">
                {description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex text-xs text-muted-foreground gap-4">
            <div className="flex items-center">
              <MessageSquare className="h-3 w-3 mr-1" />
              {replies} replies
            </div>
            <div className="flex items-center">
              <Users className="h-3 w-3 mr-1" />
              {participants} participants
            </div>
            <div className="flex items-center ml-auto">
              <Clock className="h-3 w-3 mr-1" />
              {lastActive}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const CommunityForum = () => {
  // Use protected route to ensure authentication
  const { isAuthenticated, isLoading } = useProtectedRoute();

  // Sample forum topics
  const topics: ForumTopicProps[] = [
    {
      id: "1",
      title: "Welcome to our Community Forum",
      description: "Introduce yourself and connect with others on similar recovery journeys.",
      replies: 42,
      participants: 18,
      lastActive: "2 hours ago",
      isPinned: true,
      category: "Welcome",
    },
    {
      id: "2",
      title: "Strategies for Dealing with Triggers",
      description: "Share and discuss effective strategies for managing triggers in everyday situations.",
      replies: 31,
      participants: 14,
      lastActive: "3 hours ago",
      category: "Strategies",
    },
    {
      id: "3",
      title: "Weekly Check-in Thread: How Are You Doing?",
      description: "A safe space to share your progress, challenges, and victories from this week.",
      replies: 86,
      participants: 37,
      lastActive: "6 hours ago",
      isPinned: true,
      category: "Check-in",
    },
    {
      id: "4",
      title: "Resources for Family Support",
      description: "A collection of resources and discussion for family members supporting someone in recovery.",
      replies: 19,
      participants: 11,
      lastActive: "1 day ago",
      category: "Resources",
    },
    {
      id: "5",
      title: "Meditation Techniques That Work",
      description: "Let's share meditation and mindfulness techniques that have been helpful in your recovery journey.",
      replies: 24,
      participants: 15,
      lastActive: "2 days ago",
      category: "Techniques",
    },
    {
      id: "6",
      title: "Celebrating Milestones: Share Your Victories",
      description: "A place to celebrate your recovery milestones and victories, big or small.",
      replies: 53,
      participants: 27,
      lastActive: "3 days ago",
      category: "Celebrations",
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-reclaim-sand flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-reclaim-blue">Loading forum...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-reclaim-sand flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Community Forum</h1>
            <p className="text-reclaim-charcoal/70 mb-8">
              Connect with others, share experiences, and find support in our community discussions.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-reclaim-charcoal/40" />
                <Input 
                  placeholder="Search discussions..." 
                  className="pl-10"
                />
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-shrink-0">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button className="flex-shrink-0 bg-reclaim-blue hover:bg-reclaim-blue/90">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  New Topic
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="mb-6 bg-white">
                <TabsTrigger value="all">All Topics</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="space-y-3">
                  {topics.map((topic) => (
                    <ForumTopic key={topic.id} {...topic} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="popular" className="mt-0">
                <div className="space-y-3">
                  {topics
                    .sort((a, b) => b.replies - a.replies)
                    .map((topic) => (
                      <ForumTopic key={topic.id} {...topic} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="recent" className="mt-0">
                <div className="space-y-3">
                  {topics
                    .sort((a, b) => {
                      if (a.lastActive.includes("hour") && b.lastActive.includes("day")) return -1;
                      if (a.lastActive.includes("day") && b.lastActive.includes("hour")) return 1;
                      return 0;
                    })
                    .map((topic) => (
                      <ForumTopic key={topic.id} {...topic} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="unanswered" className="mt-0">
                <div className="p-12 text-center text-reclaim-charcoal/60">
                  No unanswered topics at the moment.
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8 flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityForum;
