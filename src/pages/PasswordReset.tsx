
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, ArrowRight, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isResetMode, setIsResetMode] = useState(false);
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  // Check if we're in password update mode (after clicking the email link)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.includes('type=recovery')) {
      setIsResetMode(true);
    }
  }, []);

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await resetPassword(email);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSetNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      
      if (error) throw error;
      
      toast({
        title: "Password updated successfully",
        description: "Your password has been changed. Please use it to log in.",
      });
      
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error updating password",
        description: error.message || "Something went wrong",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <CardTitle className="text-2xl font-bold text-center">
              {isResetMode ? "Set New Password" : "Reset Password"}
            </CardTitle>
            <CardDescription className="text-center">
              {isResetMode 
                ? "Enter your new password below"
                : !isSubmitted 
                  ? "Enter your email address below, and we'll send you a link to reset your password." 
                  : "Check your email for reset instructions."}
            </CardDescription>
          </CardHeader>
          
          {isResetMode ? (
            <CardContent>
              <form onSubmit={handleSetNewPassword} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Input 
                      type="password" 
                      placeholder="New password" 
                      className="border-reclaim-charcoal/20"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      pattern=".{8,}"
                      title="Password must be at least 8 characters"
                      required
                    />
                  </div>
                  <p className="text-xs text-reclaim-charcoal/50">
                    Password must be at least 8 characters
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-reclaim-blue hover:bg-reclaim-blue/90 text-white transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="sm" color="white" />
                      <span className="ml-2">Updating Password...</span>
                    </>
                  ) : (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Update Password
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          ) : !isSubmitted ? (
            <CardContent>
              <form onSubmit={handleRequestReset} className="space-y-4">
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
