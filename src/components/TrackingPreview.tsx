import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calendar, Activity, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const TrackingPreview = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [notes, setNotes] = useState("");
  const [checkIns, setCheckIns] = useState<Array<{date: Date, completed: boolean}>>([
    { date: new Date(2023, 4, 1), completed: true },
    { date: new Date(2023, 4, 2), completed: true },
    { date: new Date(2023, 4, 3), completed: true },
    { date: new Date(2023, 4, 4), completed: true },
    { date: new Date(2023, 4, 5), completed: true },
  ]);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    if (!date) return;
    setSelectedDate(date);
    
    // Check if date is already checked in
    const existing = checkIns.find(ci => 
      format(ci.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
    
    setIsChecked(!!existing);
    setIsDialogOpen(true);
    setCalendarOpen(false);
  };

  const handleSaveCheckIn = () => {
    if (!selectedDate) return;
    
    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    const newCheckIns = checkIns.filter(ci => 
      format(ci.date, 'yyyy-MM-dd') !== dateStr
    );
    
    if (isChecked) {
      newCheckIns.push({
        date: selectedDate,
        completed: true
      });
    }
    
    setCheckIns(newCheckIns);
    setIsDialogOpen(false);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-soft">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <div className="aspect-square md:aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-medium">
                <div className="absolute inset-0 bg-white p-6 md:p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold">Progress Tracker</h3>
                    <div className="flex space-x-2">
                      <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                        <PopoverTrigger asChild>
                          <button className="p-2 rounded-lg bg-reclaim-blue/10 text-reclaim-blue hover:bg-reclaim-blue/20 transition-colors">
                            <Calendar className="w-5 h-5" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-4 bg-white shadow-lg rounded-lg border border-reclaim-blue/10" align="end">
                          <div className="text-center mb-3">
                            <h4 className="font-medium">Select a day to check in</h4>
                            <p className="text-sm text-reclaim-charcoal/60">Click on a date to mark your progress</p>
                          </div>
                          <div className="grid grid-cols-7 gap-2 mb-4">
                            {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                              <div key={index} className="text-center">
                                <div className="text-xs text-reclaim-charcoal/60 mb-1">{day}</div>
                                <button 
                                  onClick={() => {
                                    const date = new Date(2023, 4, index + 1);
                                    handleDateSelect(date);
                                  }}
                                  className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
                                    checkIns.some(ci => format(ci.date, 'yyyy-MM-dd') === format(new Date(2023, 4, index + 1), 'yyyy-MM-dd'))
                                      ? "bg-reclaim-teal/20 text-reclaim-teal" 
                                      : "bg-reclaim-charcoal/10 text-reclaim-charcoal/40 hover:bg-reclaim-blue/10 hover:text-reclaim-blue/70"
                                  }`}
                                >
                                  {index + 1}
                                </button>
                              </div>
                            ))}
                          </div>
                          <Link to="/start-tracking" className="w-full">
                            <Button className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white text-sm">
                              View Full Calendar
                            </Button>
                          </Link>
                        </PopoverContent>
                      </Popover>
                      <button className="p-2 rounded-lg bg-reclaim-teal/10 text-reclaim-teal">
                        <TrendingUp className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">Current Streak</h4>
                      <span className="text-reclaim-blue font-semibold">28 Days</span>
                    </div>
                    <div className="w-full h-3 bg-reclaim-blue/10 rounded-full overflow-hidden">
                      <div className="h-full bg-reclaim-blue rounded-full" style={{ width: "75%" }}></div>
                    </div>
                    <div className="mt-2 text-sm text-reclaim-charcoal/60 text-right">
                      Next milestone: 30 Days
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-medium mb-4">Weekly Check-in</h4>
                    <div className="grid grid-cols-7 gap-2">
                      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                        <div key={index} className="text-center">
                          <div className="text-xs text-reclaim-charcoal/60 mb-2">{day}</div>
                          <div 
                            className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity ${
                              index < 5 
                                ? "bg-reclaim-teal/20 text-reclaim-teal" 
                                : (index === 5 
                                  ? "bg-reclaim-blue/20 text-reclaim-blue" 
                                  : "bg-reclaim-charcoal/10 text-reclaim-charcoal/40")
                            }`}
                            onClick={() => {
                              const date = new Date(2023, 4, index + 1);
                              handleDateSelect(date);
                            }}
                          >
                            {index < 5 ? (
                              <CheckCircle2 className="w-5 h-5" />
                            ) : index === 5 ? (
                              <Activity className="w-5 h-5" />
                            ) : null}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-reclaim-blue/5 border border-reclaim-blue/10 rounded-xl p-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-reclaim-blue/20 flex items-center justify-center mr-3 mt-1">
                        <TrendingUp className="w-5 h-5 text-reclaim-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Progress Insight</h4>
                        <p className="text-sm text-reclaim-charcoal/70">
                          You've shown great consistency on weekdays. Weekend activities might help maintain your streak.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-reclaim-blue/10 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-reclaim-teal/10 -z-10"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 max-w-lg">
              <div className="inline-block animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue inline-block">
                  Progress Tracking
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                Visualize Your Recovery Journey
              </h2>
              
              <p className="text-xl text-reclaim-charcoal/70 animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                See your progress in real-time with intuitive charts and metrics that celebrate your successes and help identify areas for growth.
              </p>
              
              <div className="space-y-4 animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-reclaim-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Daily Check-ins</h3>
                    <p className="text-reclaim-charcoal/70">
                      Simple daily check-ins to track your mood, triggers, and accomplishments.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-reclaim-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Progress Analytics</h3>
                    <p className="text-reclaim-charcoal/70">
                      Detailed charts and insights to help you understand your recovery patterns.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-reclaim-blue/10 flex items-center justify-center">
                      <Activity className="w-4 h-4 text-reclaim-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Streak Milestones</h3>
                    <p className="text-reclaim-charcoal/70">
                      Celebrate your commitment with milestone badges and personalized achievements.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 animate-fade-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
                <Link to="/start-tracking">
                  <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                    Start Tracking
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Daily check-in dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" /> 
              Quick Check-in
            </DialogTitle>
            <DialogDescription>
              {selectedDate && format(selectedDate, 'MMMM d, yyyy')}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="quick-check-in" 
                checked={isChecked} 
                onCheckedChange={(checked) => setIsChecked(checked as boolean)}
                className="text-reclaim-teal border-reclaim-teal/50"
              />
              <label htmlFor="quick-check-in" className="font-medium">
                Mark this day as completed
              </label>
            </div>
            
            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-1">
                Notes (optional)
              </label>
              <Textarea
                id="notes"
                className="w-full p-2 border rounded-md focus:border-reclaim-blue focus:ring-1 focus:ring-reclaim-blue/20"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="How are you feeling today?"
                rows={3}
              />
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => setIsDialogOpen(false)}
              className="border-reclaim-charcoal/20 text-reclaim-charcoal"
            >
              Cancel
            </Button>
            <Link to="/start-tracking">
              <Button className="bg-reclaim-blue text-white hover:bg-reclaim-blue/90">
                View Full Calendar
              </Button>
            </Link>
            <Button onClick={handleSaveCheckIn} className="bg-reclaim-teal text-white hover:bg-reclaim-teal/90">
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TrackingPreview;
