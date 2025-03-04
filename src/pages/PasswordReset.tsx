
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import LoadingSpinner from "@/components/ui/loading-spinner";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-reclaim-sand px-4">
      <div className="absolute top-6 left-6">
        <Button 
          variant="ghost" 
          className="flex items-center text-reclaim-charcoal hover:bg-reclaim-blue/10"
          asChild
        >
          <Link to="/login">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Login
          </Link>
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
        
        <Card className="border-reclaim-charcoal/10 shadow-md transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Reset Password</CardTitle>
            <CardDescription className="text-center">
              {!isSubmitted 
                ? "Enter your email address below, and we'll send you a link to reset your password." 
                : "Check your email for reset instructions."}
            </CardDescription>
          </CardHeader>
          
          {!isSubmitted ? (
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
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
                
                <Button 
                  type="submit" 
                  className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="sm" color="white" />
                      <span className="ml-2">Sending Reset Link...</span>
                    </>
                  ) : (
                    <>
                      Reset Password
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          ) : (
            <CardContent className="text-center py-6">
              <div className="bg-green-50 text-green-700 p-4 rounded-md mb-4">
                <p>Reset link sent to {email}</p>
              </div>
              <p className="text-sm text-reclaim-charcoal/70 mb-4">
                If you don't receive an email within a few minutes, please check your spam folder.
              </p>
            </CardContent>
          )}
          
          <CardFooter className="flex flex-col space-y-4">
            <div className="w-full border-t border-reclaim-charcoal/10 pt-4">
              <Link 
                to="/login" 
                className="text-reclaim-blue hover:underline flex items-center justify-center w-full transition-all"
              >
                Return to Login <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </CardFooter>
        </Card>
        
        <div className="mt-8 text-center px-4">
          <p className="text-xs text-reclaim-charcoal/50">
            Need help? <Link to="/contact" className="text-reclaim-blue hover:underline">Contact Support</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
