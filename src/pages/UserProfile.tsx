
import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";

const UserProfile = () => {
  const { isAuthenticated, isLoading: authChecking } = useProtectedRoute();
  const { user, getProfile } = useAuth();
  const { toast } = useToast();
  
  const [profile, setProfile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    avatarUrl: "",
  });

  useEffect(() => {
    const loadProfile = async () => {
      if (isAuthenticated) {
        try {
          const profileData = await getProfile();
          setProfile(profileData);
          
          setFormData({
            firstName: profileData?.first_name || "",
            lastName: profileData?.last_name || "",
            avatarUrl: profileData?.avatar_url || "",
          });
        } catch (error) {
          console.error("Error loading profile:", error);
          toast({
            title: "Error loading profile",
            description: "Could not load your profile information.",
            variant: "destructive",
          });
        } finally {
          setIsLoading(false);
        }
      }
    };

    if (isAuthenticated) {
      loadProfile();
    }
  }, [isAuthenticated, getProfile, toast]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          first_name: formData.firstName,
          last_name: formData.lastName,
          avatar_url: formData.avatarUrl,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user?.id);

      if (error) throw error;

      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      });
      
      // Refresh profile data
      const profileData = await getProfile();
      setProfile(profileData);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error updating profile",
        description: "Could not update your profile information.",
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
          <span className="ml-2 text-reclaim-blue">Loading your profile...</span>
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
          <h1 className="text-3xl font-bold mb-8">Your Profile</h1>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="profile">Profile Information</TabsTrigger>
              <TabsTrigger value="preferences">Recovery Preferences</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal information and profile picture.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6 flex flex-col md:flex-row items-start md:items-center gap-6">
                      <Avatar className="w-24 h-24 border-2 border-reclaim-blue/20">
                        <AvatarImage src={formData.avatarUrl || "/placeholder.svg"} alt={`${formData.firstName} ${formData.lastName}`} />
                        <AvatarFallback>
                          {formData.firstName && formData.lastName
                            ? `${formData.firstName[0]}${formData.lastName[0]}`
                            : "??"
                          }
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="space-y-2 flex-1">
                        <Label htmlFor="avatarUrl">Profile Picture URL</Label>
                        <Input
                          id="avatarUrl"
                          name="avatarUrl"
                          value={formData.avatarUrl}
                          onChange={handleInputChange}
                          placeholder="https://example.com/image.jpg"
                        />
                        <p className="text-sm text-reclaim-charcoal/60">
                          Enter a URL for your profile picture or leave blank to use initials.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-2 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={user?.email || ""}
                        disabled
                        className="bg-reclaim-sand/50"
                      />
                      <p className="text-sm text-reclaim-charcoal/60">
                        Your email cannot be changed.
                      </p>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="justify-end">
                  <Button 
                    type="submit" 
                    onClick={handleSubmit}
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : "Save Changes"}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="preferences" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recovery Preferences</CardTitle>
                  <CardDescription>
                    Customize your recovery journey and notification preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-12 text-reclaim-charcoal/60">
                    Recovery preferences will be available in a future update.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
