import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Loader2, Shield, Bell, Eye, Mail, Smartphone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AccountSettings = () => {
  // Get auth protection
  const { isAuthenticated, isLoading: authChecking } = useProtectedRoute();
  // Get user data from auth context directly
  const { user, getProfile } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    communityNotifications: true,
    eventReminders: true,
    journalReminders: true,
    trackingReminders: true,
    marketingEmails: false,
  });
  
  const [privacy, setPrivacy] = useState({
    profileVisibility: true,
    showOnlineStatus: true,
    allowDataCollection: true,
  });

  useEffect(() => {
    const loadSettings = async () => {
      if (isAuthenticated && user) {
        try {
          // Get user profile
          const profileData = await getProfile();
          setProfile(profileData);
          
          // In a real app, you would fetch notification and privacy settings from the database
          // For this example, we're using mock data
          
          setIsLoading(false);
        } catch (error) {
          console.error("Error loading settings:", error);
          toast({
            title: "Error loading settings",
            description: "Could not load your account settings.",
            variant: "destructive",
          });
          setIsLoading(false);
        }
      }
    };

    if (isAuthenticated && !authChecking && user) {
      loadSettings();
    }
  }, [isAuthenticated, authChecking, user, getProfile, toast]);

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications({
      ...notifications,
      [key]: value,
    });
  };

  const handlePrivacyChange = (key: string, value: boolean) => {
    setPrivacy({
      ...privacy,
      [key]: value,
    });
  };

  const saveNotificationSettings = async () => {
    setIsSaving(true);
    
    try {
      // In a real app, you would save these settings to the database
      // For this example, we'll just show a success toast
      
      toast({
        title: "Settings saved",
        description: "Your notification preferences have been updated.",
      });
    } catch (error) {
      console.error("Error saving settings:", error);
      toast({
        title: "Error saving settings",
        description: "Could not save your notification preferences.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const savePrivacySettings = async () => {
    setIsSaving(true);
    
    try {
      // In a real app, you would save these settings to the database
      // For this example, we'll just show a success toast
      
      toast({
        title: "Settings saved",
        description: "Your privacy settings have been updated.",
      });
    } catch (error) {
      console.error("Error saving settings:", error);
      toast({
        title: "Error saving settings",
        description: "Could not save your privacy settings.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (authChecking || isLoading) {
    return (
      <div className="min-h-screen bg-reclaim-sand flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <Loader2 className="h-10 w-10 animate-spin text-reclaim-blue" />
          <span className="ml-2 text-reclaim-blue">Loading your settings...</span>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-reclaim-sand flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Account Settings</h1>
            <Link to="/profile">
              <Button variant="outline">Back to Profile</Button>
            </Link>
          </div>
          
          <Tabs defaultValue="notifications" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="notifications">Notification Preferences</TabsTrigger>
              <TabsTrigger value="privacy">Privacy Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="notifications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="mr-2 h-5 w-5" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>
                    Manage how and when you receive notifications from the platform.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="emailNotifications">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications via email
                          </p>
                        </div>
                        <Switch
                          id="emailNotifications"
                          checked={notifications.emailNotifications}
                          onCheckedChange={(checked) => 
                            handleNotificationChange("emailNotifications", checked)
                          }
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="marketingEmails">Marketing Emails</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive newsletters and promotional emails
                          </p>
                        </div>
                        <Switch
                          id="marketingEmails"
                          checked={notifications.marketingEmails}
                          onCheckedChange={(checked) => 
                            handleNotificationChange("marketingEmails", checked)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">In-App Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="communityNotifications">Community Updates</Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications for replies, mentions, and community activity
                          </p>
                        </div>
                        <Switch
                          id="communityNotifications"
                          checked={notifications.communityNotifications}
                          onCheckedChange={(checked) => 
                            handleNotificationChange("communityNotifications", checked)
                          }
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="eventReminders">Event Reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Notifications for upcoming events and group meetings
                          </p>
                        </div>
                        <Switch
                          id="eventReminders"
                          checked={notifications.eventReminders}
                          onCheckedChange={(checked) => 
                            handleNotificationChange("eventReminders", checked)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Reminders</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="journalReminders">Journal Reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Reminder notifications for journaling activities
                          </p>
                        </div>
                        <Switch
                          id="journalReminders"
                          checked={notifications.journalReminders}
                          onCheckedChange={(checked) => 
                            handleNotificationChange("journalReminders", checked)
                          }
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="trackingReminders">Tracking Reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Reminder notifications for daily tracking
                          </p>
                        </div>
                        <Switch
                          id="trackingReminders"
                          checked={notifications.trackingReminders}
                          onCheckedChange={(checked) => 
                            handleNotificationChange("trackingReminders", checked)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-end">
                  <Button 
                    onClick={saveNotificationSettings}
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : "Save Preferences"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="privacy" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Privacy Settings
                  </CardTitle>
                  <CardDescription>
                    Manage your privacy preferences and data settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Profile Visibility</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="profileVisibility">Public Profile</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow other community members to view your profile
                          </p>
                        </div>
                        <Switch
                          id="profileVisibility"
                          checked={privacy.profileVisibility}
                          onCheckedChange={(checked) => 
                            handlePrivacyChange("profileVisibility", checked)
                          }
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="showOnlineStatus">Online Status</Label>
                          <p className="text-sm text-muted-foreground">
                            Show when you're active on the platform
                          </p>
                        </div>
                        <Switch
                          id="showOnlineStatus"
                          checked={privacy.showOnlineStatus}
                          onCheckedChange={(checked) => 
                            handlePrivacyChange("showOnlineStatus", checked)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data & Analytics</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="allowDataCollection">Data Collection</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow anonymous data collection to improve the platform
                          </p>
                        </div>
                        <Switch
                          id="allowDataCollection"
                          checked={privacy.allowDataCollection}
                          onCheckedChange={(checked) => 
                            handlePrivacyChange("allowDataCollection", checked)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Account Security</h3>
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full flex justify-start">
                        <Eye className="mr-2 h-4 w-4" />
                        Change Password
                      </Button>
                      <Button variant="outline" className="w-full flex justify-start">
                        <Smartphone className="mr-2 h-4 w-4" />
                        Enable Two-Factor Authentication
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-end">
                  <Button 
                    onClick={savePrivacySettings}
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : "Save Settings"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountSettings;
