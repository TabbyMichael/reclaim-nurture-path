
import React from "react";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchBar from "@/components/SearchBar";
import PersonalizedDashboard from "@/components/personalization/PersonalizedDashboard";
import PersonalizedRecommendations from "@/components/personalization/PersonalizedRecommendations";
import RecoveryPlan from "@/components/personalization/RecoveryPlan";
import { Card } from "@/components/ui/card";

const PersonalizedContent = () => {
  // Protect this route - only authenticated users can access it
  const { isAuthenticated, isLoading } = useProtectedRoute();

  if (isLoading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-center h-96">
          <div className="animate-pulse text-xl text-muted-foreground">Loading your personalized content...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Redirect handled by useProtectedRoute
  }

  return (
    <>
      <SearchBar />
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Personalized Content</h1>
          <p className="text-muted-foreground">
            Your tailored recovery experience based on your preferences and activities
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-8">
          <Card className="p-1">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              <TabsTrigger value="recovery-plan">Recovery Plan</TabsTrigger>
            </TabsList>
          </Card>

          <TabsContent value="dashboard" className="space-y-8">
            <PersonalizedDashboard />
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-8">
            <PersonalizedRecommendations />
          </TabsContent>

          <TabsContent value="recovery-plan" className="space-y-8">
            <RecoveryPlan />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default PersonalizedContent;
