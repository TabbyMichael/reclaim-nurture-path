
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, Clock, Heart, Brain, Wind, Flame, Droplet, Cloud } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ExerciseCardProps = {
  title: string;
  description: string;
  duration: string;
  category: "meditation" | "breathing" | "mindfulness" | "grounding";
  completionRate?: number;
  icon: React.ReactNode;
  isNew?: boolean;
};

const categoryColors = {
  meditation: "bg-blue-100 text-blue-700",
  breathing: "bg-teal-100 text-teal-700",
  mindfulness: "bg-purple-100 text-purple-700",
  grounding: "bg-amber-100 text-amber-700",
};

const categoryIcons = {
  meditation: <Brain className="h-5 w-5" />,
  breathing: <Wind className="h-5 w-5" />,
  mindfulness: <Heart className="h-5 w-5" />,
  grounding: <Flame className="h-5 w-5" />,
};

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  title,
  description,
  duration,
  category,
  completionRate = 0,
  icon,
  isNew = false,
}) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <span className={`${categoryColors[category]} text-xs py-1 px-2 rounded-full flex items-center gap-1`}>
            {categoryIcons[category]}
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
          {isNew && (
            <span className="bg-green-100 text-green-700 text-xs py-1 px-2 rounded-full">
              New
            </span>
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between py-4">
        <div className="flex justify-center py-6">
          {icon}
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-reclaim-charcoal/60 flex items-center">
              <Clock className="h-3 w-3 mr-1" /> {duration}
            </span>
            {completionRate > 0 && (
              <span className="text-reclaim-blue">{completionRate}% complete</span>
            )}
          </div>
          {completionRate > 0 && (
            <Progress value={completionRate} className="h-1" />
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90">
          <Play className="mr-2 h-4 w-4" />
          Start Exercise
        </Button>
      </CardFooter>
    </Card>
  );
};

const GuidedExercises = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const exercises = {
    meditations: [
      {
        id: "med1",
        title: "5-Minute Calming Meditation",
        description: "A quick meditation perfect for moments when cravings are strong.",
        duration: "5 min",
        category: "meditation" as const,
        icon: <Brain className="w-16 h-16 text-reclaim-blue/60" />,
        completionRate: 75,
      },
      {
        id: "med2",
        title: "Body Scan for Stress Relief",
        description: "Reduce tension and reconnect with your body through guided awareness.",
        duration: "15 min",
        category: "meditation" as const,
        icon: <Heart className="w-16 h-16 text-reclaim-blue/60" />,
      },
      {
        id: "med3",
        title: "Loving-Kindness Meditation",
        description: "Cultivate compassion for yourself and others on your recovery journey.",
        duration: "12 min",
        category: "meditation" as const,
        icon: <Heart className="w-16 h-16 text-reclaim-blue/60" />,
        isNew: true,
      },
    ],
    breathing: [
      {
        id: "breath1",
        title: "4-7-8 Breathing Technique",
        description: "A powerful breathing exercise to calm your nervous system quickly.",
        duration: "3 min",
        category: "breathing" as const,
        icon: <Wind className="w-16 h-16 text-reclaim-blue/60" />,
        completionRate: 100,
      },
      {
        id: "breath2",
        title: "Box Breathing for Anxiety",
        description: "A simple, rhythmic breathing pattern to reduce anxiety and cravings.",
        duration: "5 min",
        category: "breathing" as const,
        icon: <Wind className="w-16 h-16 text-reclaim-blue/60" />,
      },
      {
        id: "breath3",
        title: "Diaphragmatic Breathing",
        description: "Learn deep belly breathing to activate your body's relaxation response.",
        duration: "7 min",
        category: "breathing" as const,
        icon: <Wind className="w-16 h-16 text-reclaim-blue/60" />,
        isNew: true,
      },
    ],
    grounding: [
      {
        id: "ground1",
        title: "5-4-3-2-1 Sensory Awareness",
        description: "Use your senses to anchor yourself in the present moment.",
        duration: "4 min",
        category: "grounding" as const,
        icon: <Flame className="w-16 h-16 text-reclaim-blue/60" />,
        completionRate: 50,
      },
      {
        id: "ground2",
        title: "Quick Physical Grounding",
        description: "Simple physical exercises to quickly ground yourself during cravings.",
        duration: "3 min",
        category: "grounding" as const,
        icon: <Flame className="w-16 h-16 text-reclaim-blue/60" />,
      },
      {
        id: "ground3",
        title: "Water Grounding Technique",
        description: "Use water as a powerful sensory tool for immediate grounding.",
        duration: "2 min",
        category: "grounding" as const,
        icon: <Droplet className="w-16 h-16 text-reclaim-blue/60" />,
      },
    ],
    mindfulness: [
      {
        id: "mind1",
        title: "Urge Surfing Practice",
        description: "Learn to observe cravings without acting on them.",
        duration: "10 min",
        category: "mindfulness" as const,
        icon: <Cloud className="w-16 h-16 text-reclaim-blue/60" />,
        completionRate: 25,
      },
      {
        id: "mind2",
        title: "Mindful Walking",
        description: "A walking meditation to practice mindfulness in motion.",
        duration: "15 min",
        category: "mindfulness" as const,
        icon: <Brain className="w-16 h-16 text-reclaim-blue/60" />,
      },
      {
        id: "mind3",
        title: "Mindful Observation",
        description: "Train your attention by mindfully observing an object.",
        duration: "8 min",
        category: "mindfulness" as const,
        icon: <Brain className="w-16 h-16 text-reclaim-blue/60" />,
        isNew: true,
      },
    ],
  };

  const allExercises = [
    ...exercises.meditations,
    ...exercises.breathing,
    ...exercises.grounding,
    ...exercises.mindfulness,
  ];

  const recommendedExercises = [
    exercises.meditations[0],
    exercises.breathing[0],
    exercises.grounding[0],
  ];

  return (
    <div className="min-h-screen bg-reclaim-sand">
      <Navbar />
      <main className="pt-20 pb-16">
        <section className="bg-gradient-to-r from-reclaim-blue to-reclaim-teal text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Guided Exercises</h1>
              <p className="text-xl text-white/80">
                Discover meditation, breathing techniques, and grounding exercises
                designed to support your recovery journey.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <Tabs defaultValue="recommended" className="max-w-5xl mx-auto">
            <TabsList className="w-full mb-8 bg-white">
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="meditations">Meditations</TabsTrigger>
              <TabsTrigger value="breathing">Breathing</TabsTrigger>
              <TabsTrigger value="grounding">Grounding</TabsTrigger>
              <TabsTrigger value="mindfulness">Mindfulness</TabsTrigger>
              <TabsTrigger value="favorites">My Favorites</TabsTrigger>
            </TabsList>

            <TabsContent value="recommended" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedExercises.map((exercise) => (
                  <ExerciseCard key={exercise.id} {...exercise} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="meditations" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exercises.meditations.map((exercise) => (
                  <ExerciseCard key={exercise.id} {...exercise} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="breathing" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exercises.breathing.map((exercise) => (
                  <ExerciseCard key={exercise.id} {...exercise} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="grounding" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exercises.grounding.map((exercise) => (
                  <ExerciseCard key={exercise.id} {...exercise} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mindfulness" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exercises.mindfulness.map((exercise) => (
                  <ExerciseCard key={exercise.id} {...exercise} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="favorites" className="mt-0">
              {favorites.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allExercises
                    .filter((exercise) => favorites.includes(exercise.id))
                    .map((exercise) => (
                      <ExerciseCard key={exercise.id} {...exercise} />
                    ))}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <Heart className="mx-auto h-12 w-12 text-reclaim-charcoal/30 mb-4" />
                  <h3 className="text-xl font-medium mb-2">No favorites yet</h3>
                  <p className="text-reclaim-charcoal/60 mb-6">
                    Save your favorite exercises here for quick access
                  </p>
                  <Button variant="outline">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Browse Exercises
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GuidedExercises;
