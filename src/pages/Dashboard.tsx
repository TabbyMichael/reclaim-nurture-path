
import React, { useEffect, useState } from "react";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import JournalManager from "@/components/JournalManager";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Calendar, CheckCircle, PieChart, TrendingUp, User, AlertTriangle } from "lucide-react";

interface InsightResponse {
  insights: {
    message: string;
    triggers: string[];
    strategies: string[];
    progress: {
      avgUrge: number;
      successRate: number;
      trend: "improving" | "challenging" | "steady";
    } | null;
  };
}

interface TrackingData {
  id: string;
  date: string;
  urge_level: number;
  success: boolean;
  user_id: string;
}

const fetchInsights = async () => {
  const { data, error } = await supabase.functions.invoke<InsightResponse>("get-insights");
  
  if (error) {
    throw new Error("Failed to fetch insights");
  }
  
  return data;
};

const fetchTrackingData = async () => {
  const { data, error } = await supabase
    .from("tracking")
    .select("*")
    .order("date", { ascending: false })
    .limit(30);
    
  if (error) {
    throw new Error("Failed to fetch tracking data");
  }
  
  return data as TrackingData[];
};

const Dashboard = () => {
  const { isAuthenticated } = useProtectedRoute();
  const { user, getProfile } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const { toast } = useToast();
  
  // Fetch user profile
  useEffect(() => {
    if (user) {
      getProfile().then(data => {
        setProfile(data);
      });
    }
  }, [user, getProfile]);
  
  // Fetch AI insights
  const { 
    data: insightsData, 
    isLoading: insightsLoading, 
    error: insightsError 
  } = useQuery({
    queryKey: ["insights"],
    queryFn: fetchInsights,
    enabled: isAuthenticated,
  });
  
  // Fetch tracking data for charts
  const { 
    data: trackingData, 
    isLoading: trackingLoading,
    error: trackingError 
  } = useQuery({
    queryKey: ["tracking"],
    queryFn: fetchTrackingData,
    enabled: isAuthenticated,
  });
  
  // Prepare chart data
  const urgeChartData = React.useMemo(() => {
    if (!trackingData) return [];
    
    return trackingData
      .slice(0, 14)
      .reverse()
      .map(entry => ({
        date: new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        urgeLevel: entry.urge_level,
        success: entry.success ? 1 : 0
      }));
  }, [trackingData]);
  
  // Return early if not authenticated yet
  if (!isAuthenticated) {
    return null;
  }

  // Get current date for greeting
  const currentHour = new Date().getHours();
  let greeting = "Good morning";
  if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good afternoon";
  } else if (currentHour >= 17) {
    greeting = "Good evening";
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            {greeting}, {profile?.first_name || user?.email}
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's an overview of your recovery journey
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <User size={16} />
            <span className="hidden sm:inline">Profile</span>
          </Button>
          <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white flex items-center gap-2">
            <Calendar size={16} />
            <span className="hidden sm:inline">Check-in Today</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tracking">Tracking</TabsTrigger>
          <TabsTrigger value="journal">Journal</TabsTrigger>
          <TabsTrigger value="insights" className="hidden lg:inline-flex">Insights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6 pt-6">
          {/* AI Insights Card */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-reclaim-blue" />
                AI Insights
              </CardTitle>
              <CardDescription>
                Personalized insights based on your tracking data
              </CardDescription>
            </CardHeader>
            <CardContent>
              {insightsLoading ? (
                <div className="h-24 flex items-center justify-center">
                  <div className="animate-pulse">Loading insights...</div>
                </div>
              ) : insightsError ? (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Unable to load insights. Please try again later.
                  </AlertDescription>
                </Alert>
              ) : (
                <>
                  <p className="mb-4">{insightsData?.insights.message || "Start tracking to get personalized insights!"}</p>
                  
                  {insightsData?.insights.triggers && insightsData.insights.triggers.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Common Triggers:</h4>
                      <div className="flex flex-wrap gap-2">
                        {insightsData.insights.triggers.map((trigger, index) => (
                          <div key={index} className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                            {trigger}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {insightsData?.insights.strategies && insightsData.insights.strategies.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">Effective Strategies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {insightsData.insights.strategies.map((strategy, index) => (
                          <div key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            {strategy}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                View Detailed Analysis
              </Button>
            </CardFooter>
          </Card>
          
          {/* Recent Progress Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Progress</CardTitle>
              <CardDescription>Your urge levels and success over time</CardDescription>
            </CardHeader>
            <CardContent>
              {trackingLoading ? (
                <div className="h-64 flex items-center justify-center">
                  <div className="animate-pulse">Loading chart data...</div>
                </div>
              ) : trackingError ? (
                <Alert variant="destructive" className="mb-4">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Unable to load tracking data. Please try again later.
                  </AlertDescription>
                </Alert>
              ) : trackingData && trackingData.length > 0 ? (
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={urgeChartData}
                      margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="urgeLevel"
                        stroke="#4884ED"
                        name="Urge Level"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="success"
                        stroke="#38A169"
                        name="Success"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No tracking data yet</p>
                  <Button>Start Tracking</Button>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Quick Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-bold">
                    {insightsData?.insights.progress?.successRate ? 
                      `${Math.round(insightsData.insights.progress.successRate)}%` : 
                      "N/A"}
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">last 7 days</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Avg. Urge Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-bold">
                    {insightsData?.insights.progress?.avgUrge ? 
                      insightsData.insights.progress.avgUrge.toFixed(1) : 
                      "N/A"}
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">out of 10</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Current Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2">
                  <div className="text-3xl font-bold">7</div>
                  <div className="text-sm text-muted-foreground mb-1">days</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Mood Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="text-xl font-bold">Improving</div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="tracking" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle>Tracking History</CardTitle>
              <CardDescription>
                View and manage your recovery tracking history
              </CardDescription>
            </CardHeader>
            <CardContent>
              {trackingLoading ? (
                <div className="h-64 flex items-center justify-center">
                  <div className="animate-pulse">Loading tracking data...</div>
                </div>
              ) : trackingError ? (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Unable to load tracking data. Please try again later.
                  </AlertDescription>
                </Alert>
              ) : trackingData && trackingData.length > 0 ? (
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 border-b py-3 px-4 font-medium">
                    <div>Date</div>
                    <div>Urge Level</div>
                    <div>Success</div>
                    <div>Details</div>
                  </div>
                  <div className="divide-y">
                    {trackingData.slice(0, 10).map((entry) => (
                      <div key={entry.id} className="grid grid-cols-4 py-3 px-4">
                        <div>{new Date(entry.date).toLocaleDateString()}</div>
                        <div>{entry.urge_level}/10</div>
                        <div>{entry.success ? 
                          <span className="flex items-center text-green-600"><CheckCircle size={16} className="mr-1" /> Yes</span> : 
                          <span className="text-red-500">No</span>}
                        </div>
                        <div>
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No tracking data yet</p>
                  <Button>Start Tracking</Button>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button className="w-full sm:w-auto">Add New Entry</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="journal" className="pt-6">
          <JournalManager />
        </TabsContent>
        
        <TabsContent value="insights" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-reclaim-blue" />
                Comprehensive Analysis
              </CardTitle>
              <CardDescription>
                Detailed insights and patterns from your recovery journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              {insightsLoading ? (
                <div className="h-64 flex items-center justify-center">
                  <div className="animate-pulse">Loading insights...</div>
                </div>
              ) : insightsError ? (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Unable to load insights. Please try again later.
                  </AlertDescription>
                </Alert>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Recovery Progress</h3>
                    <p>{insightsData?.insights.message || "Start tracking to get personalized insights!"}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Most Common Triggers</h3>
                      {insightsData?.insights.triggers && insightsData.insights.triggers.length > 0 ? (
                        <div className="space-y-2">
                          {insightsData.insights.triggers.map((trigger, index) => (
                            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                              <span>{trigger}</span>
                              <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
                                Common
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground">No trigger data available yet</p>
                      )}
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Most Effective Strategies</h3>
                      {insightsData?.insights.strategies && insightsData.insights.strategies.length > 0 ? (
                        <div className="space-y-2">
                          {insightsData.insights.strategies.map((strategy, index) => (
                            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                              <span>{strategy}</span>
                              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                Effective
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground">No strategy data available yet</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
