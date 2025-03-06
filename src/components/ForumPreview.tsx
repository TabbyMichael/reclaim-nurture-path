
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";

type ForumTopicProps = {
  id: string;
  title: string;
  description: string;
  replies: number;
  participants: number;
  lastActive: string;
  isPinned?: boolean;
};

const ForumTopic: React.FC<ForumTopicProps> = ({
  id,
  title,
  description,
  replies,
  participants,
  lastActive,
  isPinned,
}) => {
  return (
    <Link to={`/community/topic/${id}`}>
      <Card className="mb-3 cursor-pointer hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg flex items-center">
                {isPinned && <Star className="h-4 w-4 text-amber-500 mr-2 fill-amber-500" />}
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

const ForumPreview = () => {
  const topics: ForumTopicProps[] = [
    {
      id: "1",
      title: "Welcome to our Community Forum",
      description: "Introduce yourself and connect with others on similar recovery journeys.",
      replies: 42,
      participants: 18,
      lastActive: "2 hours ago",
      isPinned: true,
    },
    {
      id: "2",
      title: "Strategies for Dealing with Triggers",
      description: "Share and discuss effective strategies for managing triggers in everyday situations.",
      replies: 31,
      participants: 14,
      lastActive: "3 hours ago",
    },
    {
      id: "3",
      title: "Weekly Check-in Thread: How Are You Doing?",
      description: "A safe space to share your progress, challenges, and victories from this week.",
      replies: 86,
      participants: 37,
      lastActive: "6 hours ago",
      isPinned: true,
    },
  ];

  return (
    <section className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Recent Discussions</h2>
        <Link to="/community/forum" className="text-reclaim-blue hover:text-reclaim-teal">
          View All Discussions →
        </Link>
      </div>
      
      <div className="space-y-3">
        {topics.map((topic) => (
          <ForumTopic key={topic.id} {...topic} />
        ))}
      </div>
    </section>
  );
};

export default ForumPreview;
