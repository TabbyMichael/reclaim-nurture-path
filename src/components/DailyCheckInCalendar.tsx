
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check } from "lucide-react";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";

interface CheckInDay {
  date: Date;
  completed: boolean;
  notes?: string;
}

const DailyCheckInCalendar = () => {
  const [checkIns, setCheckIns] = useState<CheckInDay[]>([
    { date: new Date(2023, 5, 1), completed: true },
    { date: new Date(2023, 5, 2), completed: true },
    { date: new Date(2023, 5, 3), completed: true },
    { date: new Date(2023, 5, 4), completed: true },
    { date: new Date(2023, 5, 5), completed: true },
    { date: new Date(2023, 5, 7), completed: true },
    { date: new Date(2023, 5, 8), completed: true },
    { date: new Date(2023, 5, 9), completed: true },
    { date: new Date(2023, 5, 10), completed: true },
  ]);

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [notes, setNotes] = useState("");

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

  // Custom day renderer for the calendar
  const renderDay = (date: Date) => {
    const isCompleted = checkIns.some(
      (checkIn) => format(checkIn.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    );

    return (
      <div className="relative h-9 w-9 p-0 flex items-center justify-center">
        {date.getDate()}
        {isCompleted && (
          <div className="absolute right-0.5 bottom-0.5">
            <Check className="h-3 w-3 text-reclaim-teal" />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-soft">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Progress Calendar</h2>
        <div className="flex space-x-2">
          <div className="bg-reclaim-teal/10 text-reclaim-teal px-3 py-1 rounded-full text-sm flex items-center">
            <span className="font-medium">Current Streak: {calculateStreak()}</span>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-reclaim-charcoal/70 mb-2">
          Click on any day to mark your check-in. Maintaining your streak helps build consistency!
        </p>
      </div>
      
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={handleDaySelect}
        className="rounded-md border"
        components={{
          Day: ({ date }) => (
            <div>
              {renderDay(date)}
            </div>
          )
        }}
      />
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Daily Check-in</DialogTitle>
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
              />
              <label htmlFor="check-in" className="font-medium">
                Mark this day as completed
              </label>
            </div>
            
            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-1">
                Notes (optional)
              </label>
              <textarea
                id="notes"
                className="w-full p-2 border rounded-md"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="How are you feeling today?"
                rows={4}
              />
            </div>
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveCheckIn}>
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DailyCheckInCalendar;
