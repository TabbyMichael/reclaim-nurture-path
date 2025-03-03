
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, MessageSquare, BarChart2, FileText, Calendar, Bell, 
  ChevronRight, ArrowRight, Facebook, Twitter, Mail, 
  Lock, UserPlus, Video, Upload, MapPin, Heart, CheckCircle2, 
  LogIn, Globe, Shield
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const JoinCommunity = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("join");

  const handleSocialLogin = (provider: string) => {
    toast({
      title: "Social Login",
      description: `Login with ${provider} would happen here.`,
    });
  };

  const handleJoinGroup = (groupName: string) => {
    toast({
      title: "Group Joined",
      description: `You've successfully joined ${groupName}.`,
    });
  };

  return (
    <div className="min-h-screen bg-reclaim-sand flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-reclaim-blue to-reclaim-teal text-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                Join Our Supportive Community
              </h1>
              <p className="text-xl text-white/80 mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                Connect with others on similar journeys, share experiences, and find strength in community support.
              </p>
              <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                <Tabs defaultValue="join" className="w-full max-w-lg mx-auto" onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2 bg-white/20">
                    <TabsTrigger value="join" className="text-white data-[state=active]:bg-white data-[state=active]:text-reclaim-blue">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Join Now
                    </TabsTrigger>
                    <TabsTrigger value="login" className="text-white data-[state=active]:bg-white data-[state=active]:text-reclaim-blue">
                      <LogIn className="mr-2 h-4 w-4" />
                      Log In
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Login/Signup Forms */}
        <section className="py-12 bg-white">
          <div className="max-w-md mx-auto px-4">
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <TabsContent value="join" className="mt-0">
                <Card className="border-reclaim-charcoal/10 shadow-medium">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Create Your Account</CardTitle>
                    <CardDescription className="text-center">
                      Join our supportive community and start your journey today
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <Button 
                        variant="outline" 
                        className="w-full h-12 border-reclaim-charcoal/20 hover:bg-reclaim-blue/5"
                        onClick={() => handleSocialLogin("Google")}
                      >
                        <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Sign up with Google
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full h-12 border-reclaim-charcoal/20 hover:bg-reclaim-blue/5"
                        onClick={() => handleSocialLogin("Facebook")}
                      >
                        <Facebook className="mr-2 h-5 w-5 text-[#1877F2]" />
                        Sign up with Facebook
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full h-12 border-reclaim-charcoal/20 hover:bg-reclaim-blue/5"
                        onClick={() => handleSocialLogin("Twitter")}
                      >
                        <Twitter className="mr-2 h-5 w-5 text-[#1DA1F2]" />
                        Sign up with Twitter
                      </Button>
                    </div>
                    
                    <div className="relative my-6">
                      <Separator />
                      <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center">
                        <span className="bg-white px-2 text-xs text-reclaim-charcoal/50">or sign up with email</span>
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Input 
                            placeholder="First name" 
                            className="border-reclaim-charcoal/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Input 
                            placeholder="Last name" 
                            className="border-reclaim-charcoal/20"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-reclaim-charcoal/50" />
                          <Input 
                            type="email" 
                            placeholder="Email address" 
                            className="pl-10 border-reclaim-charcoal/20"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-reclaim-charcoal/50" />
                          <Input 
                            type="password" 
                            placeholder="Create password" 
                            className="pl-10 border-reclaim-charcoal/20"
                          />
                        </div>
                        <p className="text-xs text-reclaim-charcoal/50">
                          Password must be at least 8 characters
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                      <UserPlus className="mr-2 h-4 w-4" /> Create Account
                    </Button>
                    <p className="text-center text-sm text-reclaim-charcoal/70">
                      Already have an account?{" "}
                      <button 
                        className="text-reclaim-blue hover:underline"
                        onClick={() => setActiveTab("login")}
                      >
                        Log in
                      </button>
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="login" className="mt-0">
                <Card className="border-reclaim-charcoal/10 shadow-medium">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
                    <CardDescription className="text-center">
                      Continue your journey with our community
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full h-12 border-reclaim-charcoal/20 hover:bg-reclaim-blue/5" onClick={() => handleSocialLogin("Google")}>
                      <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Sign in with Google
                    </Button>
                    
                    <div className="relative my-6">
                      <Separator />
                      <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center">
                        <span className="bg-white px-2 text-xs text-reclaim-charcoal/50">or continue with email</span>
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-reclaim-charcoal/50" />
                          <Input 
                            type="email" 
                            placeholder="Email address" 
                            className="pl-10 border-reclaim-charcoal/20"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-reclaim-charcoal/50" />
                          <Input 
                            type="password" 
                            placeholder="Password" 
                            className="pl-10 border-reclaim-charcoal/20"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                      <LogIn className="mr-2 h-4 w-4" /> Log in
                    </Button>
                    <p className="text-center text-sm text-reclaim-charcoal/70">
                      Don't have an account?{" "}
                      <button 
                        className="text-reclaim-blue hover:underline"
                        onClick={() => setActiveTab("join")}
                      >
                        Sign up
                      </button>
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 md:py-24 bg-reclaim-sand">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-4 inline-block">
                Community Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Everything You Need to Connect & Grow
              </h2>
              <p className="text-xl text-reclaim-charcoal/70 max-w-2xl mx-auto">
                Our community platform offers all the tools you need to connect with others, share experiences, and support each other on your recovery journeys.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-reclaim-blue" />
                </div>
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-bold mr-2">Create & Join Groups</h3>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                    <CheckCircle2 className="h-3 w-3 mr-1" /> Available
                  </Badge>
                </div>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Create or join public and private groups centered around specific recovery topics, challenges, or interests.
                </p>
                <Button variant="link" className="p-0 h-auto text-reclaim-blue">
                  Explore Groups <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>

              <div className="glass-card rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <Video className="w-7 h-7 text-reclaim-blue" />
                </div>
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-bold mr-2">Live Streaming & Chat</h3>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                    <CheckCircle2 className="h-3 w-3 mr-1" /> Available
                  </Badge>
                </div>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Join live group sessions, watch educational streams from experts, and participate in real-time chat discussions.
                </p>
                <Button variant="link" className="p-0 h-auto text-reclaim-blue">
                  Join Live Sessions <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>

              <div className="glass-card rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <BarChart2 className="w-7 h-7 text-reclaim-blue" />
                </div>
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-bold mr-2">Polls & Surveys</h3>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                    <CheckCircle2 className="h-3 w-3 mr-1" /> Available
                  </Badge>
                </div>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Participate in community polls, provide feedback through surveys, and see aggregate results from other members.
                </p>
                <Button variant="link" className="p-0 h-auto text-reclaim-blue">
                  Take Active Polls <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>

              <div className="glass-card rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <Upload className="w-7 h-7 text-reclaim-blue" />
                </div>
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-bold mr-2">File Sharing & Collaboration</h3>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                    <CheckCircle2 className="h-3 w-3 mr-1" /> Available
                  </Badge>
                </div>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Share resources, documents, and recovery tools with your groups, and collaborate on community projects.
                </p>
                <Button variant="link" className="p-0 h-auto text-reclaim-blue">
                  Browse Resources <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>

              <div className="glass-card rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-reclaim-blue" />
                </div>
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-bold mr-2">Events & Meetups</h3>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                    <CheckCircle2 className="h-3 w-3 mr-1" /> Available
                  </Badge>
                </div>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Discover virtual and local in-person recovery events, workshops, and meetups with other community members.
                </p>
                <Button variant="link" className="p-0 h-auto text-reclaim-blue">
                  View Calendar <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>

              <div className="glass-card rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <Bell className="w-7 h-7 text-reclaim-blue" />
                </div>
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-bold mr-2">News & Updates</h3>
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                    <CheckCircle2 className="h-3 w-3 mr-1" /> Available
                  </Badge>
                </div>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Stay informed with the latest recovery research, community announcements, and success stories from members.
                </p>
                <Button variant="link" className="p-0 h-auto text-reclaim-blue">
                  Read Latest News <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Groups */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-4 inline-block">
                  Community Highlights
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Featured Groups & Discussions
                </h2>
                <p className="text-xl text-reclaim-charcoal/70">
                  Join these active groups and conversations
                </p>
              </div>
              <Button className="mt-4 md:mt-0 bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                <Globe className="mr-2 h-4 w-4" />
                Explore All Groups
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Group 1 */}
              <div className="rounded-xl border border-reclaim-charcoal/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-r from-reclaim-blue/20 to-reclaim-teal/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-16 w-16 text-reclaim-blue/70" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">Anxiety Support</h3>
                    <Badge className="bg-reclaim-blue/10 text-reclaim-blue border-0">
                      527 members
                    </Badge>
                  </div>
                  <p className="text-reclaim-charcoal/70 mb-4">
                    A supportive community for those dealing with anxiety and stress during recovery.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="bg-reclaim-blue/20">JM</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="bg-reclaim-teal/20">KL</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="bg-reclaim-blue/10">TD</AvatarFallback>
                      </Avatar>
                      <div className="h-8 w-8 rounded-full bg-reclaim-charcoal/10 border-2 border-white flex items-center justify-center text-xs">
                        +12
                      </div>
                    </div>
                    <Button size="sm" className="text-white bg-reclaim-blue hover:bg-reclaim-blue/90" onClick={() => handleJoinGroup("Anxiety Support")}>
                      <UserPlus className="mr-1 h-4 w-4" /> Join
                    </Button>
                  </div>
                </div>
              </div>

              {/* Featured Group 2 */}
              <div className="rounded-xl border border-reclaim-charcoal/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-r from-reclaim-teal/20 to-reclaim-blue/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MessageSquare className="h-16 w-16 text-reclaim-teal/70" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">Mindfulness Practice</h3>
                    <Badge className="bg-reclaim-blue/10 text-reclaim-blue border-0">
                      348 members
                    </Badge>
                  </div>
                  <p className="text-reclaim-charcoal/70 mb-4">
                    Learn and share mindfulness techniques for managing cravings and improving well-being.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="bg-reclaim-teal/20">RM</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="bg-reclaim-blue/20">SJ</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="bg-reclaim-blue/10">PL</AvatarFallback>
                      </Avatar>
                      <div className="h-8 w-8 rounded-full bg-reclaim-charcoal/10 border-2 border-white flex items-center justify-center text-xs">
                        +8
                      </div>
                    </div>
                    <Button size="sm" className="text-white bg-reclaim-blue hover:bg-reclaim-blue/90" onClick={() => handleJoinGroup("Mindfulness Practice")}>
                      <UserPlus className="mr-1 h-4 w-4" /> Join
                    </Button>
                  </div>
                </div>
              </div>

              {/* Featured Group 3 */}
              <div className="rounded-xl border border-reclaim-charcoal/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-gradient-to-r from-reclaim-blue/20 to-reclaim-teal/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-reclaim-blue/70" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">Local Meetups</h3>
                    <Badge className="bg-reclaim-blue/10 text-reclaim-blue border-0">
                      210 members
                    </Badge>
                  </div>
                  <p className="text-reclaim-charcoal/70 mb-4">
                    Find and organize in-person recovery support groups and social events in your area.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="bg-reclaim-blue/20">CJ</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="bg-reclaim-teal/20">ML</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarFallback className="bg-reclaim-blue/10">AG</AvatarFallback>
                      </Avatar>
                      <div className="h-8 w-8 rounded-full bg-reclaim-charcoal/10 border-2 border-white flex items-center justify-center text-xs">
                        +5
                      </div>
                    </div>
                    <Button size="sm" className="text-white bg-reclaim-blue hover:bg-reclaim-blue/90" onClick={() => handleJoinGroup("Local Meetups")}>
                      <UserPlus className="mr-1 h-4 w-4" /> Join
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Trending Discussions */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Trending Discussions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-reclaim-charcoal/10 p-5 hover:shadow-sm transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold">Managing Triggers During Holidays</h4>
                    <Badge className="bg-reclaim-blue/5 text-reclaim-blue border-0">32 replies</Badge>
                  </div>
                  <p className="text-sm text-reclaim-charcoal/70 mb-3">
                    Strategies and support for handling triggering situations during holiday gatherings...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-reclaim-blue/10 text-xs">SM</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-reclaim-charcoal/50 ml-2">Started by Sarah M.</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-7 text-xs text-reclaim-blue">Join Discussion</Button>
                  </div>
                </div>

                <div className="rounded-xl border border-reclaim-charcoal/10 p-5 hover:shadow-sm transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold">Meditation Techniques for Beginners</h4>
                    <Badge className="bg-reclaim-blue/5 text-reclaim-blue border-0">47 replies</Badge>
                  </div>
                  <p className="text-sm text-reclaim-charcoal/70 mb-3">
                    Simple approaches to mindfulness and meditation for those just getting started...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="bg-reclaim-teal/10 text-xs">JD</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-reclaim-charcoal/50 ml-2">Started by James D.</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-7 text-xs text-reclaim-blue">Join Discussion</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Member Testimonials & Activity Feed */}
        <section className="py-16 md:py-24 bg-reclaim-sand">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-4 inline-block">
                Community in Action
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Member Testimonials & Activities
              </h2>
              <p className="text-xl text-reclaim-charcoal/70 max-w-2xl mx-auto">
                See what's happening in our community and how it's making a difference in people's recovery journeys.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Testimonials */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-6">Member Stories</h3>
                <div className="space-y-6">
                  <div className="glass-card rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarFallback className="bg-reclaim-blue/20">MB</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Michael B.</h4>
                        <p className="text-xs text-reclaim-charcoal/60">Recovery journey: 18 months</p>
                      </div>
                    </div>
                    <blockquote className="text-reclaim-charcoal/80 italic mb-4">
                      "This community has been my anchor. The live chats and group sessions helped me through some really tough nights when I felt alone and was close to relapsing."
                    </blockquote>
                    <div className="flex justify-end">
                      <Button variant="ghost" size="sm" className="text-reclaim-blue">
                        <Heart className="h-4 w-4 mr-1" /> Appreciate
                      </Button>
                    </div>
                  </div>

                  <div className="glass-card rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarFallback className="bg-reclaim-teal/20">LK</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Laura K.</h4>
                        <p className="text-xs text-reclaim-charcoal/60">Recovery journey: 8 months</p>
                      </div>
                    </div>
                    <blockquote className="text-reclaim-charcoal/80 italic mb-4">
                      "I was hesitant to join at first, but the private groups gave me the safe space I needed to open up. Now I've made friends who truly understand what I'm going through."
                    </blockquote>
                    <div className="flex justify-end">
                      <Button variant="ghost" size="sm" className="text-reclaim-blue">
                        <Heart className="h-4 w-4 mr-1" /> Appreciate
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold mb-6">Recent Community Activity</h3>
                <div className="glass-card rounded-xl p-6">
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-4">
                      <div className="flex gap-3 items-start pb-4 border-b border-reclaim-charcoal/10">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-reclaim-blue/10">TJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">
                            <span className="font-semibold">Taylor J.</span> shared a milestone: <span className="text-reclaim-blue">30 Days Sober</span>
                          </p>
                          <p className="text-xs text-reclaim-charcoal/60 mt-1">2 hours ago</p>
                          <div className="mt-2 p-3 bg-white/50 rounded-lg text-sm">
                            I never thought I'd make it this far. Thank you to everyone who supported me, especially my accountability partner!
                          </div>
                          <div className="flex items-center gap-3 mt-2">
                            <Button variant="ghost" size="sm" className="h-8 text-xs text-reclaim-blue">
                              <Heart className="h-3 w-3 mr-1" /> 24
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 text-xs text-reclaim-blue">
                              <MessageSquare className="h-3 w-3 mr-1" /> Comment
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start pb-4 border-b border-reclaim-charcoal/10">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-reclaim-teal/10">RW</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">
                            <span className="font-semibold">Rebecca W.</span> created a new event: <span className="text-reclaim-blue">Virtual Meditation Workshop</span>
                          </p>
                          <p className="text-xs text-reclaim-charcoal/60 mt-1">5 hours ago</p>
                          <div className="mt-2 p-3 bg-white/50 rounded-lg text-sm flex items-center">
                            <Calendar className="h-10 w-10 text-reclaim-blue mr-3" />
                            <div>
                              <p className="font-semibold">Sunday, June 25 • 7:00 PM EST</p>
                              <p className="text-xs text-reclaim-charcoal/70">45-minute guided meditation for stress relief</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 mt-2">
                            <Button variant="ghost" size="sm" className="h-8 text-xs text-reclaim-blue">
                              <Calendar className="h-3 w-3 mr-1" /> Interested
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 text-xs text-reclaim-blue">
                              <MessageSquare className="h-3 w-3 mr-1" /> Comment
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start pb-4 border-b border-reclaim-charcoal/10">
                        <Avatar className="h-10 w-10">
                          <AvatFallback className="bg-reclaim-blue/10">DR</AvatFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">
                            <span className="font-semibold">Dr. Rodriguez</span> shared an article: <span className="text-reclaim-blue">New Research on Addiction Recovery</span>
                          </p>
                          <p className="text-xs text-reclaim-charcoal/60 mt-1">Yesterday</p>
                          <div className="mt-2 p-3 bg-white/50 rounded-lg text-sm">
                            <p>This new study shows promising results for combining mindfulness with traditional recovery approaches...</p>
                            <Button variant="link" className="p-0 h-auto mt-1 text-xs text-reclaim-blue">
                              Read More <ArrowRight className="h-3 w-3 ml-1" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-3 mt-2">
                            <Button variant="ghost" size="sm" className="h-8 text-xs text-reclaim-blue">
                              <Heart className="h-3 w-3 mr-1" /> 37
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 text-xs text-reclaim-blue">
                              <MessageSquare className="h-3 w-3 mr-1" /> Comment
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 items-start">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-reclaim-teal/10">KT</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">
                            <span className="font-semibold">Kelly T.</span> posted in <span className="text-reclaim-blue">Anxiety Support</span> group
                          </p>
                          <p className="text-xs text-reclaim-charcoal/60 mt-1">2 days ago</p>
                          <div className="mt-2 p-3 bg-white/50 rounded-lg text-sm">
                            Does anyone have tips for managing social anxiety at family gatherings? I'm worried about questions about my recovery...
                          </div>
                          <div className="flex items-center gap-3 mt-2">
                            <Button variant="ghost" size="sm" className="h-8 text-xs text-reclaim-blue">
                              <Heart className="h-3 w-3 mr-1" /> 12
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 text-xs text-reclaim-blue">
                              <MessageSquare className="h-3 w-3 mr-1" /> Comment
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="glass-panel rounded-2xl p-8 md:p-12 border border-reclaim-blue/20 relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-[50%] -left-[10%] w-[60%] h-[100%] rounded-full bg-reclaim-blue/5 blur-3xl" />
                <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[80%] rounded-full bg-reclaim-teal/5 blur-3xl" />
              </div>
              
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-reclaim-blue/10 flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-reclaim-blue" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Community Guidelines
                </h2>
              </div>
              
              <p className="text-reclaim-charcoal/70 mb-8 max-w-3xl">
                We're committed to maintaining a safe, supportive, and inclusive environment for all members. 
                By joining our community, you agree to follow these core principles:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Respect & Privacy</h3>
                  <p className="text-reclaim-charcoal/70 text-sm">
                    Treat all members with respect and dignity. What's shared in the community stays in the community – 
                    never share others' personal stories or information.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Supportive Communication</h3>
                  <p className="text-reclaim-charcoal/70 text-sm">
                    Offer encouragement and constructive support. Avoid criticism or judgment of others' 
                    recovery journeys or challenges.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Inclusive Environment</h3>
                  <p className="text-reclaim-charcoal/70 text-sm">
                    Welcome and support all members regardless of background, identity, or recovery path. 
                    Discriminatory language or behavior is not tolerated.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Focus on Recovery</h3>
                  <p className="text-reclaim-charcoal/70 text-sm">
                    Keep discussions focused on recovery, growth, and support rather than 
                    glorifying or dwelling on substance use details.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Truthful Sharing</h3>
                  <p className="text-reclaim-charcoal/70 text-sm">
                    Share your authentic experiences, but avoid medical advice or presenting opinions as facts. 
                    Cite sources when sharing research or information.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Crisis Response</h3>
                  <p className="text-reclaim-charcoal/70 text-sm">
                    If someone expresses thoughts of self-harm, alert moderators immediately using the 
                    emergency flag feature and direct them to professional resources.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
                  View Complete Guidelines
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-reclaim-blue to-reclaim-teal text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Take the first step toward a supportive recovery journey by joining our community today. 
                Connect with others who understand what you're going through.
              </p>
              <Button className="bg-white hover:bg-white/90 text-reclaim-blue px-8 py-6 h-auto text-lg rounded-xl">
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </Button>
              <p className="mt-6 text-white/60">
                No credit card required. Start with a 14-day free trial.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JoinCommunity;
