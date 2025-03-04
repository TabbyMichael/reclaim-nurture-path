import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Users, MessageSquare, BarChart2, Calendar, Bell, 
  ChevronRight, Facebook, Twitter, Mail, 
  Lock, UserPlus, Video, Upload, MapPin, LogIn, Globe
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import LoadingSpinner from "@/components/ui/loading-spinner";

const JoinCommunity = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("join");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Simulate initial page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleSocialLogin = (provider: string) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Social Login",
        description: `Login with ${provider} would happen here.`,
      });
    }, 800);
  };

  const handleJoinGroup = (groupName: string) => {
    toast({
      title: "Group Joined",
      description: `You've successfully joined ${groupName}.`,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: activeTab === "join" ? "Account Created" : "Login Successful",
        description: activeTab === "join" 
          ? "Your account has been created successfully. Welcome to our community!" 
          : "You have been logged in successfully. Welcome back!",
      });
    }, 1500);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-reclaim-sand">
        <div className="text-center">
          <LoadingSpinner size="lg" color="blue" />
          <p className="mt-4 text-reclaim-charcoal/70 animate-pulse">Loading community...</p>
        </div>
      </div>
    );
  }

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
                <TabsContent value="join" className="animate-fade-up">
                  <Card className="border-reclaim-charcoal/10 shadow-medium">
                    <form onSubmit={handleFormSubmit}>
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center">Create Your Account</CardTitle>
                        <CardDescription className="text-center">
                          Join our supportive community and start your journey today
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-4">
                          <Button 
                            type="button"
                            variant="outline" 
                            className="w-full h-12 border-reclaim-charcoal/20 hover:bg-reclaim-blue/5 transition-all hover:shadow-md"
                            onClick={() => handleSocialLogin("Google")}
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <LoadingSpinner size="sm" />
                            ) : (
                              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                              </svg>
                            )}
                            {isSubmitting ? "Processing..." : "Sign up with Google"}
                          </Button>
                          
                          <Button 
                            type="button"
                            variant="outline" 
                            className="w-full h-12 border-reclaim-charcoal/20 hover:bg-reclaim-blue/5 transition-all hover:shadow-md"
                            onClick={() => handleSocialLogin("Facebook")}
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <LoadingSpinner size="sm" />
                            ) : (
                              <Facebook className="mr-2 h-5 w-5" />
                            )}
                            {isSubmitting ? "Processing..." : "Sign up with Facebook"}
                          </Button>
                          
                          <Button 
                            type="button"
                            variant="outline" 
                            className="w-full h-12 border-reclaim-charcoal/20 hover:bg-reclaim-blue/5 transition-all hover:shadow-md"
                            onClick={() => handleSocialLogin("Twitter")}
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <LoadingSpinner size="sm" />
                            ) : (
                              <Twitter className="mr-2 h-5 w-5" />
                            )}
                            {isSubmitting ? "Processing..." : "Sign up with Twitter"}
                          </Button>
                        </div>
                        
                        <div className="relative my-6">
                          <Separator />
                          <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center">
                            <span className="bg-white px-2 text-xs text-reclaim-charcoal/50">or sign up with email</span>
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
                                disabled={isSubmitting}
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
                                disabled={isSubmitting}
                              />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col space-y-4">
                        <Button 
                          type="submit" 
                          className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white transition-all hover:shadow-md"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <LoadingSpinner size="sm" color="white" /> 
                              <span className="ml-2">Creating Account...</span>
                            </>
                          ) : (
                            <>
                              <UserPlus className="mr-2 h-4 w-4" /> Create Account
                            </>
                          )}
                        </Button>
                        <p className="text-center text-sm text-reclaim-charcoal/70">
                          Already have an account?{" "}
                          <button 
                            type="button"
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
                
                <TabsContent value="login" className="animate-fade-up">
                  <Card className="border-reclaim-charcoal/10 shadow-medium">
                    <form onSubmit={handleFormSubmit}>
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
                        <CardDescription className="text-center">
                          Continue your journey with our community
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-4">
                          <Button 
                            type="button"
                            variant="outline" 
                            className="w-full h-12 border-reclaim-charcoal/20 hover:bg-reclaim-blue/5 transition-all hover:shadow-md"
                            onClick={() => handleSocialLogin("Google")}
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <LoadingSpinner size="sm" />
                            ) : (
                              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                              </svg>
                            )}
                            {isSubmitting ? "Processing..." : "Sign in with Google"}
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
                                  disabled={isSubmitting}
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
                                  disabled={isSubmitting}
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <input 
                                type="checkbox" 
                                id="remember" 
                                className="rounded border-reclaim-charcoal/20"
                                disabled={isSubmitting}
                              />
                              <label htmlFor="remember" className="text-sm text-reclaim-charcoal/70">Remember me</label>
                            </div>
                            <Link to="/reset-password" className="text-sm text-reclaim-blue hover:underline">
                              Forgot password?
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col space-y-4">
                        <Button 
                          type="submit" 
                          className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white transition-all hover:shadow-md"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <LoadingSpinner size="sm" color="white" /> 
                              <span className="ml-2">Logging in...</span>
                            </>
                          ) : (
                            <>
                              <LogIn className="mr-2 h-4 w-4" /> Log in
                            </>
                          )}
                        </Button>
                        <p className="text-center text-sm text-reclaim-charcoal/70">
                          Don't have an account?{" "}
                          <button 
                            type="button"
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
                Explore Our Community Resources
              </h2>
              <p className="text-xl text-reclaim-charcoal/70 max-w-2xl mx-auto">
                Discover various resources and features our community offers to support your recovery journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7 text-reclaim-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Discussion Forums</h3>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Engage in topic-specific forums moderated by recovery professionals.
                </p>
                <a href="#" className="text-reclaim-blue hover:text-reclaim-blue/80 inline-flex items-center group">
                  Visit Forums
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>

              <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-reclaim-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Virtual Meetings</h3>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Participate in regular video meetings led by certified counselors.
                </p>
                <a href="#" className="text-reclaim-blue hover:text-reclaim-blue/80 inline-flex items-center group">
                  Join a Meeting
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>

              <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-reclaim-blue/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-reclaim-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Support Groups</h3>
                <p className="text-reclaim-charcoal/70 mb-4">
                  Connect with others in a safe, moderated environment.
                </p>
                <a href="#" className="text-reclaim-blue hover:text-reclaim-blue/80 inline-flex items-center group">
                  Find a Group
                  <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Groups */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-4 inline-block">
                Featured Groups
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Connect With Like-Minded Individuals
              </h2>
              <p className="text-xl text-reclaim-charcoal/70 max-w-2xl mx-auto">
                Explore our featured groups and find the perfect community to support your journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/20 flex items-center justify-center mr-3">
                    <MessageSquare className="w-6 h-6 text-reclaim-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Addiction Support</h3>
                    <p className="text-reclaim-charcoal/60 text-sm">500+ members</p>
                  </div>
                </div>
                <p className="text-reclaim-charcoal/70 mb-4">A supportive space for those overcoming addiction.</p>
                <Button 
                  className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white"
                  onClick={() => handleJoinGroup("Addiction Support")}
                >
                  Join Group
                </Button>
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-reclaim-teal/20 flex items-center justify-center mr-3">
                    <Calendar className="w-6 h-6 text-reclaim-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Mental Wellness</h3>
                    <p className="text-reclaim-charcoal/60 text-sm">350+ members</p>
                  </div>
                </div>
                <p className="text-reclaim-charcoal/70 mb-4">A community focused on improving mental health and well-being.</p>
                <Button 
                  className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white"
                  onClick={() => handleJoinGroup("Mental Wellness")}
                >
                  Join Group
                </Button>
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/20 flex items-center justify-center mr-3">
                    <Globe className="w-6 h-6 text-reclaim-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Global Community</h3>
                    <p className="text-reclaim-charcoal/60 text-sm">800+ members</p>
                  </div>
                </div>
                <p className="text-reclaim-charcoal/70 mb-4">Connect with individuals from around the world.</p>
                <Button 
                  className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white"
                  onClick={() => handleJoinGroup("Global Community")}
                >
                  Join Group
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-reclaim-sand">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-reclaim-blue/10 text-reclaim-blue mb-4 inline-block">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Our Members Are Saying
              </h2>
              <p className="text-xl text-reclaim-charcoal/70 max-w-2xl mx-auto">
                Read inspiring stories from members who have transformed their lives through our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-reclaim-teal/20 flex items-center justify-center mr-4">
                    <span className="text-reclaim-teal font-semibold">JD</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">James D.</h3>
                    <p className="text-reclaim-charcoal/60 text-sm">Recovery journey: 2+ years</p>
                  </div>
                </div>
                <blockquote className="text-reclaim-charcoal/80 italic mb-6">
                  "Finding this community changed everything for me. For the first time, I didn't feel alone in my struggles."
                </blockquote>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-reclaim-charcoal/40 mr-1" />
                  <span className="text-sm text-reclaim-charcoal/40">Joined April 2021</span>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-reclaim-blue/20 flex items-center justify-center mr-4">
                    <span className="text-reclaim-blue font-semibold">SM</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Sarah M.</h3>
                    <p className="text-reclaim-charcoal/60 text-sm">Recovery journey: 1+ year</p>
                  </div>
                </div>
                <blockquote className="text-reclaim-charcoal/80 italic mb-6">
                  "My accountability partner has been my rock through some really difficult times. I've grown so much through this community."
                </blockquote>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-reclaim-charcoal/40 mr-1" />
                  <span className="text-sm text-reclaim-charcoal/40">Joined August 2022</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-reclaim-blue to-reclaim-teal text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Life?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join our community today and take the first step towards a brighter, healthier future.
              </p>
              <Link to="/signup">
                <Button className="bg-white hover:bg-white/90 text-reclaim-blue px-8 py-6 h-auto text-lg rounded-xl transition-transform hover:scale-105 active:scale-95">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JoinCommunity;
