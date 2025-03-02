
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PencilLine, Trash2, BookOpen, Save, Calendar } from "lucide-react";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

interface JournalEntry {
  id: string;
  date: Date;
  title: string;
  content: string;
  prompt?: string;
}

const SAMPLE_PROMPTS = [
  "Describe a moment today when you felt proud of your progress.",
  "What was challenging today and how did you respond?",
  "What are three things you're grateful for today?",
  "What strategies helped you stay on track today?",
  "Reflect on a trigger you encountered and how you handled it.",
  "What self-care activities did you engage in today?",
  "Describe a boundary you set or maintained today.",
  "What did you learn about yourself today?",
];

const JournalManager = () => {
  // Sample journal entries for demonstration
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([
    {
      id: "1",
      date: new Date(2023, 5, 10),
      title: "Making Progress",
      content: "I felt really proud yesterday when I was invited to a work happy hour and I went, but stuck to my sparkling water with lime. In the past, I would have either avoided the event entirely or given in to peer pressure. Instead, I enjoyed the social connection without compromising my sobriety. What made it possible was planning ahead - I decided before going what I would drink and reminded myself why my recovery matters to me.",
      prompt: "Describe a moment this week when you felt proud of your progress. What specific actions or choices contributed to this feeling?"
    },
    {
      id: "2",
      date: new Date(2023, 5, 8),
      title: "Challenging Day",
      content: "Today was difficult. I had an argument with my partner that triggered old feelings. I was tempted to fall back into old patterns, but I used the breathing technique my counselor taught me and called my sponsor. Just talking through it helped immensely. I'm learning that feelings pass if I give them space without acting on them.",
      prompt: "What was challenging today and how did you respond?"
    }
  ]);

  const [selectedPrompt, setSelectedPrompt] = useState(SAMPLE_PROMPTS[0]);
  const [newEntry, setNewEntry] = useState<Partial<JournalEntry>>({
    title: "",
    content: "",
    prompt: selectedPrompt
  });
  const [editingEntry, setEditingEntry] = useState<JournalEntry | null>(null);
  const [isNewEntryDialogOpen, setIsNewEntryDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleCreateEntry = () => {
    if (!newEntry.title || !newEntry.content) return;
    
    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date(),
      title: newEntry.title || "",
      content: newEntry.content || "",
      prompt: newEntry.prompt
    };
    
    setJournalEntries([entry, ...journalEntries]);
    setNewEntry({ title: "", content: "", prompt: SAMPLE_PROMPTS[0] });
    setIsNewEntryDialogOpen(false);
  };

  const handleUpdateEntry = () => {
    if (!editingEntry) return;
    
    const updatedEntries = journalEntries.map(entry => 
      entry.id === editingEntry.id ? editingEntry : entry
    );
    
    setJournalEntries(updatedEntries);
    setEditingEntry(null);
    setIsEditDialogOpen(false);
  };

  const handleDeleteEntry = (id: string) => {
    setJournalEntries(journalEntries.filter(entry => entry.id !== id));
  };

  const selectRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * SAMPLE_PROMPTS.length);
    const prompt = SAMPLE_PROMPTS[randomIndex];
    setSelectedPrompt(prompt);
    setNewEntry({ ...newEntry, prompt });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Journal</h2>
        <Dialog open={isNewEntryDialogOpen} onOpenChange={setIsNewEntryDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
              <PencilLine className="h-4 w-4 mr-2" />
              New Entry
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Journal Entry</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-1">
                    Title
                  </label>
                  <input
                    id="title"
                    className="w-full p-2 border rounded-md"
                    value={newEntry.title || ""}
                    onChange={(e) => setNewEntry({ ...newEntry, title: e.target.value })}
                    placeholder="Entry title"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="prompt" className="block text-sm font-medium">
                      Today's Prompt
                    </label>
                    <Button variant="ghost" size="sm" onClick={selectRandomPrompt}>
                      Try another prompt
                    </Button>
                  </div>
                  <div className="p-3 bg-reclaim-blue/5 border border-reclaim-blue/20 rounded-lg mb-3">
                    <p className="text-reclaim-charcoal/80 italic">
                      {selectedPrompt}
                    </p>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="content" className="block text-sm font-medium mb-1">
                    Journal Entry
                  </label>
                  <textarea
                    id="content"
                    className="w-full p-2 border rounded-md"
                    value={newEntry.content || ""}
                    onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
                    placeholder="Write your thoughts here..."
                    rows={8}
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsNewEntryDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateEntry}>
                <Save className="h-4 w-4 mr-2" />
                Save Entry
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Entries</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4 mt-6">
          {journalEntries.length === 0 ? (
            <div className="text-center py-10">
              <BookOpen className="h-12 w-12 mx-auto text-reclaim-charcoal/30 mb-4" />
              <p className="text-reclaim-charcoal/60">No journal entries yet. Start your journaling practice today!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {journalEntries.map((entry) => (
                <Card key={entry.id} className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{entry.title}</h3>
                      <div className="flex items-center text-reclaim-charcoal/60 text-sm mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {format(entry.date, 'MMMM d, yyyy')}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => {
                          setEditingEntry(entry);
                          setIsEditDialogOpen(true);
                        }}
                      >
                        <PencilLine className="h-5 w-5 text-reclaim-charcoal/60" />
                      </Button>
                      
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-5 w-5 text-reclaim-charcoal/60" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Journal Entry</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this journal entry? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction 
                              onClick={() => handleDeleteEntry(entry.id)}
                              className="bg-red-500 hover:bg-red-600 text-white"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                  
                  {entry.prompt && (
                    <div className="p-3 bg-reclaim-blue/5 border border-reclaim-blue/20 rounded-lg mb-3">
                      <p className="text-reclaim-charcoal/80 italic text-sm">
                        Prompt: {entry.prompt}
                      </p>
                    </div>
                  )}
                  
                  <div>
                    <p className="text-reclaim-charcoal/80 whitespace-pre-line">
                      {entry.content.length > 300 
                        ? `${entry.content.substring(0, 300)}...`
                        : entry.content
                      }
                    </p>
                    {entry.content.length > 300 && (
                      <Button variant="link" className="p-0 h-auto text-reclaim-blue">
                        Read more
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="recent" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 gap-4">
            {journalEntries
              .slice(0, 3)
              .map((entry) => (
                <Card key={entry.id} className="p-6">
                  {/* Same card content as above */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{entry.title}</h3>
                      <div className="flex items-center text-reclaim-charcoal/60 text-sm mt-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {format(entry.date, 'MMMM d, yyyy')}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => {
                          setEditingEntry(entry);
                          setIsEditDialogOpen(true);
                        }}
                      >
                        <PencilLine className="h-5 w-5 text-reclaim-charcoal/60" />
                      </Button>
                      
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-5 w-5 text-reclaim-charcoal/60" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Journal Entry</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this journal entry? This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction 
                              onClick={() => handleDeleteEntry(entry.id)}
                              className="bg-red-500 hover:bg-red-600 text-white"
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                  
                  {entry.prompt && (
                    <div className="p-3 bg-reclaim-blue/5 border border-reclaim-blue/20 rounded-lg mb-3">
                      <p className="text-reclaim-charcoal/80 italic text-sm">
                        Prompt: {entry.prompt}
                      </p>
                    </div>
                  )}
                  
                  <div>
                    <p className="text-reclaim-charcoal/80 whitespace-pre-line">
                      {entry.content.length > 300 
                        ? `${entry.content.substring(0, 300)}...`
                        : entry.content
                      }
                    </p>
                    {entry.content.length > 300 && (
                      <Button variant="link" className="p-0 h-auto text-reclaim-blue">
                        Read more
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Edit Entry Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Journal Entry</DialogTitle>
          </DialogHeader>
          {editingEntry && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="edit-title" className="block text-sm font-medium mb-1">
                    Title
                  </label>
                  <input
                    id="edit-title"
                    className="w-full p-2 border rounded-md"
                    value={editingEntry.title}
                    onChange={(e) => setEditingEntry({ ...editingEntry, title: e.target.value })}
                    placeholder="Entry title"
                  />
                </div>
                
                {editingEntry.prompt && (
                  <div>
                    <label htmlFor="edit-prompt" className="block text-sm font-medium mb-1">
                      Prompt
                    </label>
                    <div className="p-3 bg-reclaim-blue/5 border border-reclaim-blue/20 rounded-lg">
                      <p className="text-reclaim-charcoal/80 italic">
                        {editingEntry.prompt}
                      </p>
                    </div>
                  </div>
                )}
                
                <div>
                  <label htmlFor="edit-content" className="block text-sm font-medium mb-1">
                    Journal Entry
                  </label>
                  <textarea
                    id="edit-content"
                    className="w-full p-2 border rounded-md"
                    value={editingEntry.content}
                    onChange={(e) => setEditingEntry({ ...editingEntry, content: e.target.value })}
                    placeholder="Write your thoughts here..."
                    rows={8}
                  />
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateEntry}>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JournalManager;
