
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Lock, LogIn, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-reclaim-sand px-4">
      <div className="absolute top-6 left-6">
        <Button 
          variant="ghost" 
          className="flex items-center text-reclaim-charcoal hover:bg-reclaim-blue/10"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
        </Button>
      </div>
      
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <Link to="/" className="inline-flex items-center">
            <div className="w-10 h-10 rounded-full bg-reclaim-blue flex items-center justify-center mr-2">
              <span className="text-white font-semibold text-lg">R</span>
            </div>
            <span className="font-semibold text-2xl tracking-tight text-reclaim-charcoal">
              Reclaim
            </span>
          </Link>
        </div>
        
        <Card className="border-reclaim-charcoal/10 shadow-medium">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Continue your journey toward recovery
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full h-12 border-reclaim-charcoal/20 hover:bg-reclaim-blue/5">
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
                <span className="bg-reclaim-sand px-2 text-xs text-reclaim-charcoal/50">or continue with email</span>
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
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="rounded border-reclaim-charcoal/20"
                />
                <label htmlFor="remember" className="text-sm text-reclaim-charcoal/70">Remember me</label>
              </div>
              <Link to="/reset-password" className="text-sm text-reclaim-blue hover:underline">
                Forgot password?
              </Link>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white">
              <LogIn className="mr-2 h-4 w-4" /> Log in
            </Button>
            <p className="text-center text-sm text-reclaim-charcoal/70">
              Don't have an account?{" "}
              <Link to="/signup" className="text-reclaim-blue hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-xs text-reclaim-charcoal/50">
            By signing in, you agree to our{" "}
            <Link to="/terms" className="text-reclaim-blue hover:underline">Terms of Service</Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-reclaim-blue hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
