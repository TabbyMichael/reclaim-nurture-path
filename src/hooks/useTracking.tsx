
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface TrackingEntry {
  id: string;
  date: string;
  urge_level: number;
  triggers: string[];
  coping_strategies: string[];
  success: boolean;
  notes: string;
}

interface TrackingInsights {
  message: string;
  triggers: string[];
  strategies: string[];
  progress: {
    avgUrge: number;
    successRate: number;
    trend: "improving" | "challenging" | "steady";
  } | null;
}

export function useTracking() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [recentEntries, setRecentEntries] = useState<TrackingEntry[]>([]);
  const [insights, setInsights] = useState<TrackingInsights | null>(null);
  const [isLoadingInsights, setIsLoadingInsights] = useState(false);

  const fetchRecentEntries = async () => {
    if (!user) return;
    
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase
        .from('tracking')
        .select('*')
        .eq('user_id', user.id)
        .order('date', { ascending: false })
        .limit(10);
      
      if (error) throw error;
      
      setRecentEntries(data || []);
    } catch (error: any) {
      console.error("Error fetching tracking entries:", error);
      toast({
        title: "Error fetching data",
        description: error.message || "Failed to load your tracking data",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchInsights = async () => {
    if (!user) return;
    
    try {
      setIsLoadingInsights(true);
      
      const { data, error } = await supabase
        .functions.invoke('get-insights');
      
      if (error) throw error;
      
      setInsights(data.insights);
    } catch (error: any) {
      console.error("Error fetching insights:", error);
      toast({
        title: "Error fetching insights",
        description: error.message || "Failed to generate insights",
        variant: "destructive",
      });
    } finally {
      setIsLoadingInsights(false);
    }
  };

  const addTrackingEntry = async (entry: Omit<TrackingEntry, 'id'>) => {
    if (!user) return null;
    
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase
        .from('tracking')
        .insert({
          ...entry,
          user_id: user.id
        })
        .select('*')
        .single();
      
      if (error) throw error;
      
      // Update the local state
      setRecentEntries(prev => [data, ...prev]);
      
      // Refresh insights
      fetchInsights();
      
      return data;
    } catch (error: any) {
      console.error("Error adding tracking entry:", error);
      toast({
        title: "Error saving data",
        description: error.message || "Failed to save your tracking data",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTrackingEntry = async (id: string) => {
    if (!user) return false;
    
    try {
      setIsLoading(true);
      
      const { error } = await supabase
        .from('tracking')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id);
      
      if (error) throw error;
      
      // Update the local state
      setRecentEntries(prev => prev.filter(entry => entry.id !== id));
      
      // Refresh insights
      fetchInsights();
      
      return true;
    } catch (error: any) {
      console.error("Error deleting tracking entry:", error);
      toast({
        title: "Error deleting data",
        description: error.message || "Failed to delete your tracking data",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchRecentEntries();
      fetchInsights();
    }
  }, [user]);

  return {
    recentEntries,
    insights,
    isLoading,
    isLoadingInsights,
    fetchRecentEntries,
    fetchInsights,
    addTrackingEntry,
    deleteTrackingEntry
  };
}
