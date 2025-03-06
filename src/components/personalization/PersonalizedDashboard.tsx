
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Settings, LayoutGrid, BookHeart, TrendingUp, PieChart } from "lucide-react";

// Define the types for dashboard widgets
interface DashboardWidget {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  component: React.ReactNode;
  size: "small" | "medium" | "large";
}

const PersonalizedDashboard = () => {
  // Sample widget data
  const defaultWidgets: DashboardWidget[] = [
    {
      id: "progress-tracker",
      title: "Progress Tracker",
      description: "Track your recovery journey",
      icon: <TrendingUp className="h-5 w-5 text-reclaim-blue" />,
      component: (
        <div className="h-64 flex items-center justify-center">
          <p className="text-muted-foreground">Progress visualization will appear here</p>
        </div>
      ),
      size: "large",
    },
    {
      id: "recovery-plan",
      title: "Recovery Plan",
      description: "Your personalized plan",
      icon: <BookHeart className="h-5 w-5 text-reclaim-teal" />,
      component: (
        <div className="h-48 flex items-center justify-center">
          <p className="text-muted-foreground">Recovery plan details will appear here</p>
        </div>
      ),
      size: "medium",
    },
    {
      id: "insights",
      title: "Insights",
      description: "AI-powered insights",
      icon: <PieChart className="h-5 w-5 text-purple-500" />,
      component: (
        <div className="h-48 flex items-center justify-center">
          <p className="text-muted-foreground">Personalized insights will appear here</p>
        </div>
      ),
      size: "medium",
    },
  ];

  const [widgets, setWidgets] = useState(defaultWidgets);
  const [editMode, setEditMode] = useState(false);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const items = Array.from(widgets);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setWidgets(items);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Your Dashboard</h2>
        <Button 
          variant="outline" 
          onClick={() => setEditMode(!editMode)}
          className="flex items-center gap-2"
        >
          <Settings className="h-4 w-4" />
          {editMode ? "Done" : "Customize"}
        </Button>
      </div>

      <Tabs defaultValue="dashboard">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="widgets">Available Widgets</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="dashboard" direction="horizontal">
              {(provided) => (
                <div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {widgets.map((widget, index) => (
                    <Draggable 
                      key={widget.id} 
                      draggableId={widget.id} 
                      index={index}
                      isDragDisabled={!editMode}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`${
                            widget.size === "large" ? "col-span-1 md:col-span-2" : 
                            widget.size === "medium" ? "col-span-1" : "col-span-1"
                          }`}
                        >
                          <Card className={`h-full transition-all duration-200 ${editMode ? 'border-dashed border-2 border-muted-foreground/30' : ''}`}>
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  {widget.icon}
                                  <CardTitle>{widget.title}</CardTitle>
                                </div>
                                {editMode && (
                                  <Button variant="ghost" size="sm">
                                    <LayoutGrid className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                              <CardDescription>{widget.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              {widget.component}
                            </CardContent>
                          </Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </TabsContent>
        
        <TabsContent value="widgets">
          <Card>
            <CardHeader>
              <CardTitle>Available Widgets</CardTitle>
              <CardDescription>Drag and drop these widgets to your dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-2">
                    <BookHeart className="h-5 w-5 text-reclaim-teal" />
                    <div>
                      <h3 className="font-medium">Journal Summary</h3>
                      <p className="text-sm text-muted-foreground">View your recent journal entries</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-reclaim-blue" />
                    <div>
                      <h3 className="font-medium">Goal Tracker</h3>
                      <p className="text-sm text-muted-foreground">Track progress toward your goals</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-purple-500" />
                    <div>
                      <h3 className="font-medium">Community Activity</h3>
                      <p className="text-sm text-muted-foreground">Recent updates from your groups</p>
                    </div>
                  </div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PersonalizedDashboard;
