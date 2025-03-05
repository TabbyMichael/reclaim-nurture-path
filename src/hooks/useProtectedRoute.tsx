
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export function useProtectedRoute() {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        // Store the current path to redirect back after login
        sessionStorage.setItem("redirectPath", location.pathname);
        
        toast({
          title: "Authentication required",
          description: "Please log in to access this page",
          variant: "destructive",
        });
        
        navigate("/login", { replace: true });
      } else {
        setIsAuthenticated(true);
        
        // Check if we have a redirect path stored
        const redirectPath = sessionStorage.getItem("redirectPath");
        if (redirectPath && location.pathname === "/login") {
          // Clear the stored path
          sessionStorage.removeItem("redirectPath");
          // Redirect to the original destination
          navigate(redirectPath, { replace: true });
        }
      }
    }
  }, [user, isLoading, navigate, location.pathname, toast]);

  return { isAuthenticated, isLoading };
}
