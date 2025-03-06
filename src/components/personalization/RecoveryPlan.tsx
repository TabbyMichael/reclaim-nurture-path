
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Calendar, ChevronRight, ChevronDown, BookHeart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

interface PlanStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  date: string;
  resources: Array<{
    id: string;
    title: string;
    type: string;
    url: string;
  }>;
}

interface PlanGoal {
  id: string;
  title: string;
  description: string;
  progress: number;
  targetDate: string;
}

const RecoveryPlan = () => {
  const [expandedStepId, setExpandedStepId] = useState<string | null>("step-1");

  // Sample recovery plan data - in a real app, this would come from an API
  const steps: PlanStep[] = [
    {
      id: "step-1",
      title: "Understanding Your Patterns",
      description: "Identify recurring patterns and triggers in your behavior.",
      completed: true,
      date: "Completed on Jun 15, 2023",
      resources: [
        { id: "r1", title: "Recognizing Behavior Patterns", type: "Article", url: "#" },
        { id: "r2", title: "Trigger Identification Exercise", type: "Exercise", url: "#" }
      ]
    },
    {
      id: "step-2",
      title: "Developing Coping Strategies",
      description: "Learn and practice effective coping mechanisms for difficult situations.",
      completed: true,
      date: "Completed on Aug 23, 2023",
      resources: [
        { id: "r3", title: "Coping Skills Workshop", type: "Video", url: "#" },
        { id: "r4", title: "Stress Management Techniques", type: "Article", url: "#" }
      ]
    },
    {
      id: "step-3",
      title: "Building Support Systems",
      description: "Create and strengthen your personal support network.",
      completed: false,
      date: "Current focus area",
      resources: [
        { id: "r5", title: "Community Connection Guide", type: "Article", url: "#" },
        { id: "r6", title: "Support Circle Exercise", type: "Exercise", url: "#" }
      ]
    },
    {
      id: "step-4",
      title: "Maintaining Long-term Recovery",
      description: "Establish habits and routines that support ongoing recovery.",
      completed: false,
      date: "Upcoming",
      resources: [
        { id: "r7", title: "Sustainable Recovery Practices", type: "Article", url: "#" },
        { id: "r8", title: "Relapse Prevention Plan", type: "Exercise", url: "#" }
      ]
    }
  ];

  const goals: PlanGoal[] = [
    {
      id: "goal-1",
      title: "Attend 10 support group meetings",
      description: "Building consistency in community attendance",
      progress: 70,
      targetDate: "Oct 30, 2023"
    },
    {
      id: "goal-2",
      title: "Journal 3 times per week",
      description: "Developing regular reflection habits",
      progress: 85,
      targetDate: "Ongoing"
    },
    {
      id: "goal-3",
      title: "Practice mindfulness daily",
      description: "Establish a consistent mindfulness routine",
      progress: 40,
      targetDate: "Ongoing"
    }
  ];

  const toggleStep = (stepId: string) => {
    if (expandedStepId === stepId) {
      setExpandedStepId(null);
    } else {
      setExpandedStepId(stepId);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookHeart className="h-6 w-6 text-reclaim-blue" />
          <h2 className="text-2xl font-bold">Your Recovery Plan</h2>
        </div>
        <Button>Update Plan</Button>
      </div>

      <Tabs defaultValue="path">
        <TabsList>
          <TabsTrigger value="path">Recovery Path</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="path">
          <Card>
            <CardHeader>
              <CardTitle>Your Recovery Journey</CardTitle>
              <CardDescription>
                A personalized step-by-step plan to guide your recovery process
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {steps.map((step) => (
                <div key={step.id} className="border rounded-lg overflow-hidden">
                  <div 
                    className={`p-4 flex justify-between items-center cursor-pointer ${
                      step.completed ? 'bg-green-50' : expandedStepId === step.id ? 'bg-blue-50' : 'bg-gray-50'
                    }`}
                    onClick={() => toggleStep(step.id)}
                  >
                    <div className="flex items-center gap-3">
                      {step.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <Clock className="h-5 w-5 text-blue-500" />
                      )}
                      <div>
                        <h3 className="font-medium">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.date}</p>
                      </div>
                    </div>
                    {expandedStepId === step.id ? (
                      <ChevronDown className="h-5 w-5" />
                    ) : (
                      <ChevronRight className="h-5 w-5" />
                    )}
                  </div>
                  
                  {expandedStepId === step.id && (
                    <div className="p-4 border-t">
                      <p className="mb-3">{step.description}</p>
                      
                      <h4 className="font-medium text-sm mb-2">Resources for this step:</h4>
                      <ul className="space-y-2 mb-4">
                        {step.resources.map((resource) => (
                          <li key={resource.id} className="flex items-center gap-2">
                            <Badge variant="outline">{resource.type}</Badge>
                            <a href={resource.url} className="text-blue-600 hover:underline">
                              {resource.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                      
                      {!step.completed && (
                        <Button size="sm">Mark as Completed</Button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Detailed Plan</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="goals">
          <Card>
            <CardHeader>
              <CardTitle>Your Recovery Goals</CardTitle>
              <CardDescription>Track progress on your personal goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {goals.map((goal) => (
                  <div key={goal.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{goal.title}</h3>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{goal.targetDate}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{goal.description}</p>
                    <div className="flex items-center gap-3">
                      <Progress value={goal.progress} className="h-2 flex-grow" />
                      <span className="text-sm font-medium">{goal.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Add New Goal</Button>
              <Button>Update Progress</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Recovery Resources</CardTitle>
              <CardDescription>Personalized resources to support your journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Recommended Articles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="text-sm">
                        <a href="#" className="text-blue-600 hover:underline">Understanding Recovery Timelines</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-blue-600 hover:underline">The Role of Self-Compassion in Healing</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-blue-600 hover:underline">Building Resilience After Trauma</a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Recommended Exercises</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="text-sm">
                        <a href="#" className="text-blue-600 hover:underline">5-Minute Grounding Technique</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-blue-600 hover:underline">Identifying Personal Strengths Exercise</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-blue-600 hover:underline">Progressive Muscle Relaxation</a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Browse All Resources</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RecoveryPlan;
