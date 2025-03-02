
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, Calendar as CalendarIcon, Trash2, PencilLine, Award, Flame } from "lucide-react";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface CheckInDay {
  date: Date;
  completed: boolean;
  notes?: string;
}

const DailyCheckInCalendar = () => {
  const [checkIns, setCheckIns] = useState<CheckInDay[]>([
    { date: new Date(2023, 5, 1), completed: true, notes: "Feeling positive today. Practiced mindfulness for 10 minutes." },
    { date: new Date(2023, 5, 2), completed: true, notes: "Had some cravings but managed them well." },
    { date: new Date(2023, 5, 3), completed: true, notes: "Great day! Attended a support group." },
    { date: new Date(2023, 5, 4), completed: true, notes: "Feeling stronger each day." },
    { date: new Date(2023, 5, 5), completed: true, notes: "Had a challenging day but stayed on track." },
    { date: new Date(2023, 5, 7), completed: true, notes: "Reconnected with a supportive friend." },
    { date: new Date(2023, 5, 8), completed: true, notes: "Finding new healthy activities to enjoy." },
    { date: new Date(2023, 5, 9), completed: true, notes: "Made it through a triggering situation successfully." },
    { date: new Date(2023, 5, 10), completed: true, notes: "Proud of my progress this week." },
  ]);

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [notes, setNotes] = useState("");
  const [viewingHistory, setViewingHistory] = useState(false);
  const [selectedCheckIn, setSelectedCheckIn] = useState<CheckInDay | null>(null);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleDaySelect = (date: Date | undefined) => {
    if (!date) return;
    
    setSelectedDate(date);
    
    // Check if the day already has a check-in
    const existingCheckIn = checkIns.find(
      (checkIn) => format(checkIn.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );
    
    setIsChecked(!!existingCheckIn?.completed);
    setNotes(existingCheckIn?.notes || "");
    setIsDialogOpen(true);
    setCalendarOpen(false);
  };

  const handleSaveCheckIn = () => {
    if (!selectedDate) return;
    
    // Remove existing check-in for the date if any
    const updatedCheckIns = checkIns.filter(
      (checkIn) => format(checkIn.date, 'yyyy-MM-dd') !== format(selectedDate, 'yyyy-MM-dd')
    );
    
    // Add the new check-in
    if (isChecked) {
      updatedCheckIns.push({
        date: selectedDate,
        completed: true,
        notes: notes
      });
    }
    
    setCheckIns(updatedCheckIns);
    setIsDialogOpen(false);
  };

  const handleDeleteCheckIn = () => {
    if (!selectedDate) return;
    
    const updatedCheckIns = checkIns.filter(
      (checkIn) => format(checkIn.date, 'yyyy-MM-dd') !== format(selectedDate, 'yyyy-MM-dd')
    );
    
    setCheckIns(updatedCheckIns);
    setIsDialogOpen(false);
  };

  const toggleHistoryView = () => {
    setViewingHistory(!viewingHistory);
  };

  const viewCheckInDetails = (checkIn: CheckInDay) => {
    setSelectedCheckIn(checkIn);
  };

  // Function to calculate the current streak
  const calculateStreak = (): number => {
    const sortedCheckIns = [...checkIns].sort((a, b) => b.date.getTime() - a.date.getTime());
    let streak = 0;
    let currentDate = new Date();
    
    // Set time to beginning of day for comparison
    currentDate.setHours(0, 0, 0, 0);
    
    while (streak < sortedCheckIns.length) {
      const checkInDate = new Date(sortedCheckIns[streak].date);
      checkInDate.setHours(0, 0, 0, 0);
      
      // Check if this date is part of an unbroken streak
      const timeDiff = currentDate.getTime() - checkInDate.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      
      if (dayDiff === streak) {
        streak++;
      } else {
        break;
      }
      
      currentDate.setDate(currentDate.getDate() - 1);
    }
    
    return streak;
  };

  const handleQuickToggle = (date: Date) => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    const existingIndex = checkIns.findIndex(
      checkIn => format(checkIn.date, 'yyyy-MM-dd') === formattedDate
    );

    let updatedCheckIns = [...checkIns];
    
    if (existingIndex >= 0) {
      // Toggle off if already checked
      updatedCheckIns.splice(existingIndex, 1);
    } else {
      // Toggle on if not checked
      updatedCheckIns.push({
        date,
        completed: true,
        notes: ""
      });
    }
    
    setCheckIns(updatedCheckIns);
  };

  // Custom day renderer for the calendar
  const renderDay = (day: React.ComponentProps<typeof Calendar>["components"]["Day"]) => {
    const date = day.date;
    const isCompleted = checkIns.some(
      (checkIn) => format(checkIn.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );

    return (
      <div 
        className={cn(
          "relative h-9 w-9 p-0 flex items-center justify-center rounded-md transition-colors hover:bg-reclaim-blue/10 cursor-pointer",
          isCompleted ? "bg-reclaim-teal/20" : ""
        )}
        onClick={() => handleQuickToggle(date)}
      >
        {date.getDate()}
        {isCompleted && (
          <div className="absolute right-0.5 bottom-0.5">
            <Check className="h-3 w-3 text-reclaim-teal" />
          </div>
        )}
      </div>
    );
  };

  const streak = calculateStreak();

  return (
    <div className="bg-white rounded-xl p-6 shadow-soft">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Progress Calendar</h2>
        <div className="flex space-x-3">
          <div className="bg-reclaim-teal/10 text-reclaim-teal px-3 py-1 rounded-full text-sm flex items-center">
            <Flame className="mr-1 h-4 w-4" />
            <span className="font-medium">Current Streak: {streak}</span>
          </div>
          
          <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
            <PopoverTrigger asChild>
              <Button 
                size="icon" 
                variant="outline"
                className="border-reclaim-blue/20 text-reclaim-blue hover:bg-reclaim-blue/5 h-9 w-9 rounded-full"
              >
                <CalendarIcon className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDaySelect}
                initialFocus
                components={{
                  Day: renderDay
                }}
              />
            </PopoverContent>
          </Popover>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleHistoryView}
            className="border-reclaim-blue/20 text-reclaim-blue hover:bg-reclaim-blue/5"
          >
            {viewingHistory ? "View Calendar" : "View History"}
          </Button>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-reclaim-charcoal/70 mb-2">
          Click on any day to mark your check-in or use the calendar icon for a quick view. Click on days to toggle completion.
        </p>
      </div>
      
      {!viewingHistory ? (
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDaySelect}
          className="rounded-md border"
          components={{
            Day: renderDay
          }}
        />
      ) : (
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          <h3 className="font-semibold text-lg flex items-center">
            <CalendarIcon className="mr-2 h-5 w-5 text-reclaim-blue" />
            Check-in History
          </h3>
          
          {checkIns.length === 0 ? (
            <p className="text-center py-8 text-reclaim-charcoal/60">No check-ins recorded yet.</p>
          ) : (
            [...checkIns]
              .sort((a, b) => b.date.getTime() - a.date.getTime())
              .map((checkIn, index) => (
                <Card key={index} className="p-4 border border-reclaim-blue/10 hover:shadow-medium transition-all cursor-pointer" onClick={() => viewCheckInDetails(checkIn)}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{format(checkIn.date, 'MMMM d, yyyy')}</p>
                      <p className="text-sm text-reclaim-charcoal/70 line-clamp-1 mt-1">
                        {checkIn.notes || "No notes for this day"}
                      </p>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDate(checkIn.date);
                        setIsChecked(checkIn.completed);
                        setNotes(checkIn.notes || "");
                        setIsDialogOpen(true);
                      }}>
                        <PencilLine className="h-4 w-4 text-reclaim-blue" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
          )}
        </div>
      )}
      
      {/* View check-in details modal */}
      {selectedCheckIn && (
        <Dialog open={!!selectedCheckIn} onOpenChange={() => setSelectedCheckIn(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <CalendarIcon className="mr-2 h-5 w-5" />
                Check-in: {format(selectedCheckIn.date, 'MMMM d, yyyy')}
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4 py-4">
              <div className="flex items-center space-x-2">
                <div className="bg-reclaim-teal/10 text-reclaim-teal rounded-full px-3 py-1 text-sm">
                  Completed
                </div>
                {isDateInStreak(selectedCheckIn.date, checkIns) && (
                  <div className="bg-reclaim-blue/10 text-reclaim-blue rounded-full px-3 py-1 text-sm flex items-center">
                    <Flame className="mr-1 h-3 w-3" />
                    Part of streak
                  </div>
                )}
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Notes:</h4>
                <div className="bg-reclaim-sand/30 p-3 rounded-md">
                  {selectedCheckIn.notes || "No notes recorded for this day."}
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button 
                variant="outline" 
                className="border-reclaim-charcoal/20 text-reclaim-charcoal"
                onClick={() => setSelectedCheckIn(null)}
              >
                Close
              </Button>
              <Button 
                variant="outline"
                className="border-reclaim-blue/20 text-reclaim-blue"
                onClick={() => {
                  setSelectedDate(selectedCheckIn.date);
                  setIsChecked(selectedCheckIn.completed);
                  setNotes(selectedCheckIn.notes || "");
                  setIsDialogOpen(true);
                  setSelectedCheckIn(null);
                }}
              >
                Edit
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
      
      {/* Daily check-in dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5" /> 
              Daily Check-in
            </DialogTitle>
            <DialogDescription>
              {selectedDate && format(selectedDate, 'MMMM d, yyyy')}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="check-in" 
                checked={isChecked} 
                onCheckedChange={(checked) => setIsChecked(checked as boolean)}
                className="text-reclaim-teal border-reclaim-teal/50"
              />
              <label htmlFor="check-in" className="font-medium">
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
                rows={4}
              />
            </div>
          </div>
          
          <div className="flex justify-between space-x-2">
            <Button 
              variant="outline" 
              onClick={handleDeleteCheckIn}
              className="border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 className="h-4 w-4 mr-1" /> Delete
            </Button>
            <div className="flex space-x-2">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveCheckIn} className="bg-reclaim-blue text-white hover:bg-reclaim-blue/90">
                Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Helper function to check if a date is part of the current streak
function isDateInStreak(date: Date, checkIns: CheckInDay[]): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const checkDate = new Date(date);
  checkDate.setHours(0, 0, 0, 0);
  
  // If the date is in the future, it can't be part of the streak
  if (checkDate > today) return false;
  
  // For each day between the check date and today, check if there's a check-in
  const currentDate = new Date(checkDate);
  while (currentDate <= today) {
    const hasCheckIn = checkIns.some(
      (checkIn) => format(checkIn.date, 'yyyy-MM-dd') === format(currentDate, 'yyyy-MM-dd')
    );
    
    if (!hasCheckIn) return false;
    
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return true;
}

export default DailyCheckInCalendar;
