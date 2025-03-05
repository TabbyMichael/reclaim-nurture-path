
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Session, User, AuthError } from '@supabase/supabase-js';
import { useToast } from '@/hooks/use-toast';

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{
    success: boolean;
    error: AuthError | null;
  }>;
  signUp: (email: string, password: string) => Promise<{
    success: boolean;
    error: AuthError | null;
  }>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{
    success: boolean;
    error: AuthError | null;
  }>;
  trackFeatureUsage: (featureName: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);

        // If a user signs in or signs up, create or update their profile
        if (event === 'SIGNED_IN' || event === 'SIGNED_UP') {
          if (session?.user) {
            // Check if profile exists
            const { data: profileData, error: profileError } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', session.user.id)
              .single();

            if (profileError || !profileData) {
              // Create profile if it doesn't exist
              await supabase.from('profiles').insert({
                id: session.user.id,
                email: session.user.email,
                created_at: new Date().toISOString(),
              });
            }

            // Log login
            await supabase.from('login_history').insert({
              user_id: session.user.id,
              login_time: new Date().toISOString(),
            });
          }
        }
      }
    );

    // Initial session check
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: 'Sign in failed',
          description: error.message,
          variant: 'destructive',
        });
        return { success: false, error };
      }

      toast({
        title: 'Welcome back!',
        description: 'You have successfully signed in.',
      });

      return { success: true, error: null };
    } catch (err) {
      const error = err as AuthError;
      toast({
        title: 'An unexpected error occurred',
        description: error.message,
        variant: 'destructive',
      });
      return { success: false, error };
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        toast({
          title: 'Sign up failed',
          description: error.message,
          variant: 'destructive',
        });
        return { success: false, error };
      }

      toast({
        title: 'Account created!',
        description: 'Please check your email to confirm your account.',
      });

      return { success: true, error: null };
    } catch (err) {
      const error = err as AuthError;
      toast({
        title: 'An unexpected error occurred',
        description: error.message,
        variant: 'destructive',
      });
      return { success: false, error };
    }
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/`,
      },
    });
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: 'Signed out',
        description: 'You have been successfully signed out.',
      });
    } catch (error) {
      toast({
        title: 'Error signing out',
        description: 'An error occurred while signing out.',
        variant: 'destructive',
      });
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        toast({
          title: 'Reset password failed',
          description: error.message,
          variant: 'destructive',
        });
        return { success: false, error };
      }

      toast({
        title: 'Password reset email sent',
        description: 'Please check your email for the password reset link.',
      });

      return { success: true, error: null };
    } catch (err) {
      const error = err as AuthError;
      toast({
        title: 'An unexpected error occurred',
        description: error.message,
        variant: 'destructive',
      });
      return { success: false, error };
    }
  };

  // Fix the type error by explicitly typing the table
  const trackFeatureUsage = async (featureName: string) => {
    if (user) {
      try {
        // Use explicit typing for feature_usage table
        await supabase.from('feature_usage').insert({
          user_id: user.id,
          feature_name: featureName,
          used_at: new Date().toISOString(),
        });
      } catch (error) {
        console.error("Error tracking feature usage:", error);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signIn,
        signUp,
        signInWithGoogle,
        signOut,
        resetPassword,
        trackFeatureUsage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
