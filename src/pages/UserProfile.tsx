
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
import { Loader2, Upload } from "lucide-react";

interface Profile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
  updated_at: string | null;
}

const UserProfile = () => {
  const { isAuthenticated, isLoading: authChecking } = useProtectedRoute();
  const { user, getProfile } = useAuth();
  const { toast } = useToast();
  
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  
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

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;

    const file = e.target.files[0];
    
    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a JPEG, PNG, or GIF image.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB.",
        variant: "destructive",
      });
      return;
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${user?.id}/${fileName}`;

    setIsUploading(true);

    try {
      // Check if user ID exists
      if (!user?.id) {
        throw new Error('User not authenticated');
      }

      const { error: uploadError, data } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (uploadError) {
        console.error('Upload error details:', uploadError);
        throw uploadError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      setFormData({
        ...formData,
        avatarUrl: publicUrl,
      });

      toast({
        title: "Image uploaded",
        description: "Your profile picture has been uploaded successfully.",
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      const errorMessage = error instanceof Error ? error.message : 'Could not upload your profile picture';
      toast({
        title: "Error uploading image",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

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
                      <div className="relative">
                        <Avatar className="w-24 h-24 border-2 border-reclaim-blue/20">
                          <AvatarImage src={formData.avatarUrl || "/placeholder.svg"} alt={`${formData.firstName} ${formData.lastName}`} />
                          <AvatarFallback>
                            {formData.firstName && formData.lastName
                              ? `${formData.firstName[0]}${formData.lastName[0]}`
                              : "??"
                            }
                          </AvatarFallback>
                        </Avatar>
                        <div className="mt-4">
                          <Label htmlFor="imageUpload" className="cursor-pointer">
                            <div className="flex items-center justify-center gap-2 text-sm text-reclaim-blue hover:text-reclaim-blue/80 transition-colors">
                              <Upload className="h-4 w-4" />
                              <span>{isUploading ? "Uploading..." : "Upload Image"}</span>
                            </div>
                          </Label>
                          <Input
                            id="imageUpload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            disabled={isUploading}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2 flex-1">
                        <div className="grid gap-4 md:grid-cols-2">
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
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      </div>
                        <CardFooter className="justify-end">
                          <Button type="submit" disabled={isSaving || isUploading}>
                            {isSaving ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Saving...
                              </>
                            ) : (
                              "Save Changes"
                            )}
                          </Button>
                        </CardFooter>
                      </form>
                    </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="preferences">
              {/* Recovery preferences content */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
