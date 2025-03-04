
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // When location changes, start exit animation
    setIsAnimating(true);
    
    // After animation is complete, update children and start entrance animation
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setIsAnimating(false);
    }, 300); // Match this with the animation duration in CSS
    
    return () => clearTimeout(timer);
  }, [location.pathname, children]);

  return (
    <div 
      className={`transition-all duration-300 ease-in-out ${
        isAnimating 
          ? "opacity-0 translate-y-4" 
          : "opacity-100 translate-y-0"
      }`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
