
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
  LogIn, Globe, Shield, AlertCircle
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { Alert, AlertDescription } from "@/components/ui/alert";

const JoinCommunity = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signInWithGoogle, signIn, signUp } = useAuth();
  const [activeTab, setActiveTab] = useState("join");
  
  // Join form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  
  const handleGoogleAuth = async () => {
    try {
      setGoogleLoading(true);
      setErrorMessage(null);
      await signInWithGoogle();
      // No need to navigate here as redirection is handled by Supabase
    } catch (error: any) {
      console.error("Google auth error:", error);
      setErrorMessage(error.message || "Failed to authenticate with Google. Please try again.");
      setGoogleLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    
    if (!firstName || !lastName || !email || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }
    
    try {
      setIsLoading(true);
      await signUp(email, password, firstName, lastName);
      toast({
        title: "Account created",
        description: "Please check your email to confirm your account.",
      });
    } catch (error: any) {
      console.error("Signup error:", error);
      setErrorMessage(error.message || "Failed to sign up. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    
    if (!loginEmail || !loginPassword) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    
    try {
      setLoginLoading(true);
      await signIn(loginEmail, loginPassword);
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login error:", error);
      setErrorMessage(error.message || "Failed to log in. Please try again.");
    } finally {
      setLoginLoading(false);
    }
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
              <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
                <TabsContent value="join">
                  <Card className="border-reclaim-charcoal/10 shadow-medium">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-center">Create Your Account</CardTitle>
                      <CardDescription className="text-center">
                        Join our supportive community and start your journey today
                      </CardDescription>
                    </CardHeader>
                    
                    {errorMessage && (
                      <div className="px-6">
                        <Alert variant="destructive" className="mb-4">
                          <AlertCircle className="h-4 w-4 mr-2" />
                          <AlertDescription>{errorMessage}</AlertDescription>
                        </Alert>
                      </div>
                    )}
                    
                    <form onSubmit={handleSignup}>
                      <CardContent className="space-y-4">
                        <div className="space-y-4">
                          <Button 
                            type="button"
                            variant="outline" 
                            className="w-full h-12 border-reclaim-charcoal/20 hover:bg-reclaim-blue/5"
                            disabled={googleLoading}
                            onClick={handleGoogleAuth}
                          >
                            {googleLoading ? (
                              <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-reclaim-charcoal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Connecting to Google...
                              </span>
                            ) : (
                              <>
                                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                                Sign up with Google
                              </>
                            )}
                          </Button>
                          <Button 
                            type="button"
                            variant="outline" 
                            className="w-full h-12 border-reclaim-charcoal/20 hover:bg-reclaim-blue/5"
                            disabled={true}
                          >
                            <Facebook className="mr-2 h-5 w-5 text-[#1877F2]" />
                            Sign up with Facebook
                          </Button>
                          <Button 
                            type="button"
                            variant="outline" 
                            className="w-full h-12 border-reclaim-charcoal/20 hover:bg-reclaim-blue/5"
                            disabled={true}
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
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Input 
                                placeholder="Last name" 
                                className="border-reclaim-charcoal/20"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                              />
                            </div>
                            <p className="text-xs text-reclaim-charcoal/50">
                              Password must be at least 8 characters
                            </p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col space-y-4">
                        <Button 
                          type="submit" 
                          className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <span className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Creating account...
                            </span>
                          ) : (
                            <>
                              <UserPlus className="mr-2 h-4 w-4" /> Create Account
                            </>
                          )}
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
                    </form>
                  </Card>
                </TabsContent>
                
                <TabsContent value="login">
                  <Card className="border-reclaim-charcoal/10 shadow-medium">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
                      <CardDescription className="text-center">
                        Continue your journey with our community
                      </CardDescription>
                    </CardHeader>
                    
                    {errorMessage && (
                      <div className="px-6">
                        <Alert variant="destructive" className="mb-4">
                          <AlertCircle className="h-4 w-4 mr-2" />
                          <AlertDescription>{errorMessage}</AlertDescription>
                        </Alert>
                      </div>
                    )}
                    
                    <form onSubmit={handleLogin}>
                      <CardContent className="space-y-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="w-full h-12 border-reclaim-charcoal/20 hover:bg-reclaim-blue/5" 
                          disabled={googleLoading}
                          onClick={handleGoogleAuth}
                        >
                          {googleLoading ? (
                            <span className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-reclaim-charcoal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Connecting to Google...
                            </span>
                          ) : (
                            <>
                              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                              </svg>
                              Sign in with Google
                            </>
                          )}
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
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                required
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
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col space-y-4">
                        <Button 
                          type="submit" 
                          className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white"
                          disabled={loginLoading}
                        >
                          {loginLoading ? (
                            <span className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Logging in...
                            </span>
                          ) : (
                            <>
                              <LogIn className="mr-2 h-4 w-4" /> Log in
                            </>
                          )}
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
                    </form>
                  </Card>
                </TabsContent>
              </Tabs>
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
                View All Groups <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Group 1 */}
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-reclaim-green/20 flex items-center justify-center mr-3">
                        <Heart className="w-5 h-5 text-reclaim-green" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Addiction Recovery Support</CardTitle>
                        <CardDescription>3,254 members • Very Active</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-reclaim-blue/10 text-reclaim-blue border-reclaim-blue/20">
                      Popular
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-reclaim-charcoal/70">
                    A supportive community for individuals at all stages of recovery from substance use disorders. Share experiences and find encouragement.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-white h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/100?img=1" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/100?img=2" />
                      <AvatarFallback>LP</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/100?img=3" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div className="bg-gray-100 border-2 border-white rounded-full h-8 w-8 flex items-center justify-center text-xs font-medium">
                      +42
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-reclaim-green text-reclaim-green hover:bg-reclaim-green/10"
                    onClick={() => handleJoinGroup("Addiction Recovery Support")}
                  >
                    <UserPlus className="mr-2 h-4 w-4" /> Join Group
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Group 2 */}
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-reclaim-blue/20 flex items-center justify-center mr-3">
                        <Globe className="w-5 h-5 text-reclaim-blue" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Global Recovery Network</CardTitle>
                        <CardDescription>1,823 members • Moderately Active</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
                      New
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-reclaim-charcoal/70">
                    Connect with recovery communities around the world, share cultural perspectives on healing, and build international support networks.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-white h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/100?img=4" />
                      <AvatarFallback>EJ</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/100?img=5" />
                      <AvatarFallback>KT</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/100?img=6" />
                      <AvatarFallback>RN</AvatarFallback>
                    </Avatar>
                    <div className="bg-gray-100 border-2 border-white rounded-full h-8 w-8 flex items-center justify-center text-xs font-medium">
                      +28
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-reclaim-blue text-reclaim-blue hover:bg-reclaim-blue/10"
                    onClick={() => handleJoinGroup("Global Recovery Network")}
                  >
                    <UserPlus className="mr-2 h-4 w-4" /> Join Group
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Group 3 */}
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center mr-3">
                        <Shield className="w-5 h-5 text-purple-700" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Mental Health Allies</CardTitle>
                        <CardDescription>2,487 members • Very Active</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                      Featured
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-reclaim-charcoal/70">
                    A safe space for discussing mental health challenges, recovery strategies, and supporting each other through difficult times.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-white h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/100?img=7" />
                      <AvatarFallback>MH</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/100?img=8" />
                      <AvatarFallback>AK</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/100?img=9" />
                      <AvatarFallback>JW</AvatarFallback>
                    </Avatar>
                    <div className="bg-gray-100 border-2 border-white rounded-full h-8 w-8 flex items-center justify-center text-xs font-medium">
                      +35
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-purple-500 text-purple-700 hover:bg-purple-50"
                    onClick={() => handleJoinGroup("Mental Health Allies")}
                  >
                    <UserPlus className="mr-2 h-4 w-4" /> Join Group
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Group 4 */}
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                        <MapPin className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Local Support Meetups</CardTitle>
                        <CardDescription>968 members • Moderately Active</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-reclaim-charcoal/70">
                    Find and organize in-person recovery support meetings in your local area. Connect with peers in your community.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-white h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/100?img=10" />
                      <AvatarFallback>TC</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/100?img=11" />
                      <AvatarFallback>PD</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-white h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/100?img=12" />
                      <AvatarFallback>BL</AvatarFallback>
                    </Avatar>
                    <div className="bg-gray-100 border-2 border-white rounded-full h-8 w-8 flex items-center justify-center text-xs font-medium">
                      +16
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-amber-500 text-amber-600 hover:bg-amber-50"
                    onClick={() => handleJoinGroup("Local Support Meetups")}
                  >
                    <UserPlus className="mr-2 h-4 w-4" /> Join Group
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JoinCommunity;
