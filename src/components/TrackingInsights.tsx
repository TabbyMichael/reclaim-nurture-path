
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, TrendingUp, Minus, AlertTriangle, CheckCircle2, Award } from "lucide-react";
import { useTracking } from "@/hooks/useTracking";
import { Link } from "react-router-dom";

const TrackingInsights = () => {
  const { insights, isLoadingInsights, fetchInsights } = useTracking();

  return (
    <Card className="shadow-soft overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-reclaim-blue/5 to-reclaim-teal/5 pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg md:text-xl">Recovery Insights</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={fetchInsights}
            disabled={isLoadingInsights}
            className="h-8 text-reclaim-blue hover:text-reclaim-blue/80"
          >
            {isLoadingInsights ? "Refreshing..." : "Refresh"}
          </Button>
        </div>
        <CardDescription>
          Based on your tracking data and progress
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        {isLoadingInsights ? (
          <div className="py-8 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-reclaim-blue border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-2 text-reclaim-charcoal/70">Analyzing your progress...</p>
          </div>
        ) : !insights ? (
          <div className="py-6 text-center">
            <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-3" />
            <p className="text-reclaim-charcoal/70 mb-4">
              We don't have enough data yet to provide insights. Start tracking your recovery journey!
            </p>
            <Button asChild>
              <Link to="/start-tracking">Start Tracking</Link>
            </Button>
          </div>
        ) : (
          <Tabs defaultValue="overview">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
              <TabsTrigger value="triggers" className="flex-1">Triggers</TabsTrigger>
              <TabsTrigger value="strategies" className="flex-1">Strategies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="bg-reclaim-sand/30 rounded-lg p-4 mb-4">
                <p className="text-reclaim-charcoal">{insights.message}</p>
              </div>
              
              {insights.progress && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-reclaim-blue/10">
                    <div className="flex justify-between items-start">
                      <div className="text-reclaim-charcoal/70 text-sm">Average Urge Level</div>
                      {insights.progress.trend === "improving" ? (
                        <TrendingDown className="h-5 w-5 text-green-500" />
                      ) : insights.progress.trend === "challenging" ? (
                        <TrendingUp className="h-5 w-5 text-red-500" />
                      ) : (
                        <Minus className="h-5 w-5 text-amber-500" />
                      )}
                    </div>
                    <div className="text-2xl font-bold mt-1">
                      {insights.progress.avgUrge.toFixed(1)} <span className="text-sm font-normal text-reclaim-charcoal/70">/ 10</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-reclaim-blue/10">
                    <div className="flex justify-between items-start">
                      <div className="text-reclaim-charcoal/70 text-sm">Success Rate</div>
                      <CheckCircle2 className="h-5 w-5 text-reclaim-teal" />
                    </div>
                    <div className="text-2xl font-bold mt-1">
                      {insights.progress.successRate.toFixed(0)}%
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-4">
                <Button className="w-full bg-reclaim-blue text-white" asChild>
                  <Link to="/start-tracking">
                    Continue Tracking <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="triggers">
              <div className="space-y-4">
                <p className="text-reclaim-charcoal/70 text-sm">
                  Your most common triggers based on tracking data:
                </p>
                
                {insights.triggers.length > 0 ? (
                  <div className="space-y-3">
                    {insights.triggers.map((trigger, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm border border-reclaim-blue/10">
                        <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{trigger}</p>
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-2">
                      <p className="text-sm text-reclaim-charcoal/70">
                        Being aware of your triggers is the first step in developing effective coping strategies.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="py-4 text-center">
                    <p className="text-reclaim-charcoal/70">
                      Not enough data to identify common triggers yet.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="strategies">
              <div className="space-y-4">
                <p className="text-reclaim-charcoal/70 text-sm">
                  Your most effective coping strategies:
                </p>
                
                {insights.strategies.length > 0 ? (
                  <div className="space-y-3">
                    {insights.strategies.map((strategy, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm border border-reclaim-blue/10">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                          <Award className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{strategy}</p>
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-2">
                      <p className="text-sm text-reclaim-charcoal/70">
                        These strategies have helped you manage urges successfully. Continue using them in challenging moments.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="py-4 text-center">
                    <p className="text-reclaim-charcoal/70">
                      Not enough data to identify effective strategies yet.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
    </Card>
  );
};

export default TrackingInsights;
