
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { supabase } from "@/integrations/supabase/client";
import DailyCheckInCalendar from "@/components/DailyCheckInCalendar";

const StartTracking = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { isAuthenticated } = useProtectedRoute();
  
  const [urgeLevel, setUrgeLevel] = useState<number>(0);
  const [success, setSuccess] = useState<string>("yes");
  const [notes, setNotes] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  // Predefined options
  const commonTriggers = [
    "Stress", "Negative emotions", "Social situations", "Boredom", 
    "Environmental cues", "Physical discomfort", "Relationship issues", "Celebrations"
  ];
  
  const commonStrategies = [
    "Deep breathing", "Physical exercise", "Calling a friend", "Mindfulness meditation",
    "Distraction techniques", "Progressive muscle relaxation", "Journaling", "Support group"
  ];
  
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
  const [customTrigger, setCustomTrigger] = useState<string>("");
  const [selectedStrategies, setSelectedStrategies] = useState<string[]>([]);
  const [customStrategy, setCustomStrategy] = useState<string>("");
  
  const handleTriggerChange = (trigger: string) => {
    setSelectedTriggers(prev =>
      prev.includes(trigger)
        ? prev.filter(t => t !== trigger)
        : [...prev, trigger]
    );
  };
  
  const handleStrategyChange = (strategy: string) => {
    setSelectedStrategies(prev =>
      prev.includes(strategy)
        ? prev.filter(s => s !== strategy)
        : [...prev, strategy]
    );
  };
  
  const addCustomTrigger = () => {
    if (customTrigger.trim() && !selectedTriggers.includes(customTrigger.trim())) {
      setSelectedTriggers(prev => [...prev, customTrigger.trim()]);
      setCustomTrigger("");
    }
  };
  
  const addCustomStrategy = () => {
    if (customStrategy.trim() && !selectedStrategies.includes(customStrategy.trim())) {
      setSelectedStrategies(prev => [...prev, customStrategy.trim()]);
      setCustomStrategy("");
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated || !user) {
      toast({
        title: "Authentication required",
        description: "Please log in to track your recovery journey",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    
    if (selectedTriggers.length === 0 || selectedStrategies.length === 0) {
      toast({
        title: "Missing information",
        description: "Please select at least one trigger and one coping strategy",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const { error } = await supabase
        .from('tracking')
        .insert({
          user_id: user.id,
          urge_level: urgeLevel,
          triggers: selectedTriggers,
          coping_strategies: selectedStrategies,
          success: success === "yes",
          notes: notes
        });
      
      if (error) throw error;
      
      toast({
        title: "Progress tracked",
        description: "Your recovery progress has been successfully recorded",
      });
      
      // Reset form
      setUrgeLevel(0);
      setSelectedTriggers([]);
      setSelectedStrategies([]);
      setSuccess("yes");
      setNotes("");
      
    } catch (error: any) {
      console.error("Error submitting tracking data:", error);
      toast({
        title: "Error tracking progress",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (!isAuthenticated) {
    return null; // The useProtectedRoute hook will handle redirection
  }
  
  return (
    <div className="min-h-screen bg-reclaim-sand">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-reclaim-charcoal mb-4">Track Your Recovery Journey</h1>
          <p className="text-reclaim-charcoal/70 max-w-2xl">
            Monitoring your progress is a key part of recovery. Use this tool to track your urges, 
            triggers, coping strategies, and daily achievements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>Daily Check-in</CardTitle>
                  <CardDescription>
                    Record how you're feeling today and what strategies you're using
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Urge Level */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="urge-level" className="text-base font-medium">
                        Urge Level (0-10)
                      </Label>
                      <span className="text-xl font-semibold text-reclaim-blue">
                        {urgeLevel}
                      </span>
                    </div>
                    <Slider
                      id="urge-level"
                      min={0}
                      max={10}
                      step={1}
                      value={[urgeLevel]}
                      onValueChange={(values) => setUrgeLevel(values[0])}
                      className="py-4"
                    />
                    <div className="flex justify-between text-sm text-reclaim-charcoal/70">
                      <span>No urge</span>
                      <span>Moderate</span>
                      <span>Very strong</span>
                    </div>
                  </div>
                  
                  {/* Triggers */}
                  <div className="space-y-4">
                    <Label className="text-base font-medium">What triggered you today?</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {commonTriggers.map((trigger) => (
                        <div key={trigger} className="flex items-center space-x-2">
                          <Checkbox
                            id={`trigger-${trigger}`}
                            checked={selectedTriggers.includes(trigger)}
                            onCheckedChange={() => handleTriggerChange(trigger)}
                          />
                          <label
                            htmlFor={`trigger-${trigger}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {trigger}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Add custom trigger"
                        value={customTrigger}
                        onChange={(e) => setCustomTrigger(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={addCustomTrigger}
                      >
                        Add
                      </Button>
                    </div>
                    {selectedTriggers.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedTriggers.map((trigger) => (
                          <div
                            key={trigger}
                            className="bg-reclaim-blue/10 text-reclaim-blue px-3 py-1 rounded-full text-sm flex items-center"
                          >
                            {trigger}
                            <button
                              type="button"
                              className="ml-2 text-reclaim-blue/70 hover:text-reclaim-blue"
                              onClick={() => handleTriggerChange(trigger)}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Coping Strategies */}
                  <div className="space-y-4">
                    <Label className="text-base font-medium">Coping strategies you used</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {commonStrategies.map((strategy) => (
                        <div key={strategy} className="flex items-center space-x-2">
                          <Checkbox
                            id={`strategy-${strategy}`}
                            checked={selectedStrategies.includes(strategy)}
                            onCheckedChange={() => handleStrategyChange(strategy)}
                          />
                          <label
                            htmlFor={`strategy-${strategy}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {strategy}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Add custom strategy"
                        value={customStrategy}
                        onChange={(e) => setCustomStrategy(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={addCustomStrategy}
                      >
                        Add
                      </Button>
                    </div>
                    {selectedStrategies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedStrategies.map((strategy) => (
                          <div
                            key={strategy}
                            className="bg-reclaim-teal/10 text-reclaim-teal px-3 py-1 rounded-full text-sm flex items-center"
                          >
                            {strategy}
                            <button
                              type="button"
                              className="ml-2 text-reclaim-teal/70 hover:text-reclaim-teal"
                              onClick={() => handleStrategyChange(strategy)}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Success */}
                  <div className="space-y-4">
                    <Label className="text-base font-medium">Were you successful today?</Label>
                    <RadioGroup 
                      value={success} 
                      onValueChange={setSuccess}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="success-yes" />
                        <Label htmlFor="success-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="success-no" />
                        <Label htmlFor="success-no">No</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="partial" id="success-partial" />
                        <Label htmlFor="success-partial">Partially</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  {/* Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-base font-medium">Additional notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Reflect on your day, challenges faced, and victories achieved..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={4}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-reclaim-blue text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Saving...
                      </span>
                    ) : "Save Progress"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
          
          <div>
            <DailyCheckInCalendar />
            
            <div className="mt-6">
              <Card className="border-reclaim-blue/10 shadow-soft">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Need more support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-reclaim-charcoal/70 mb-4">
                    If you're struggling or need immediate assistance, our resources are always available.
                  </p>
                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start border-reclaim-blue/20 text-reclaim-blue"
                      asChild
                    >
                      <Link to="/emergency">Emergency Resources</Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start border-reclaim-blue/20 text-reclaim-blue"
                      asChild
                    >
                      <Link to="/community">Community Support</Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start border-reclaim-blue/20 text-reclaim-blue"
                      asChild
                    >
                      <Link to="/journal">Start Journaling</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartTracking;
