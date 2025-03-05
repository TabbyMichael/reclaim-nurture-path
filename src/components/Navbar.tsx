import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, signOut, trackFeatureUsage } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavFeature = (feature: string) => {
    if (trackFeatureUsage) {
      trackFeatureUsage(feature);
    }
  };

  return (
    <nav className="bg-reclaim-sand border-b border-reclaim-charcoal/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-reclaim-blue flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">R</span>
                </div>
                <span className="ml-2 font-semibold text-xl tracking-tight text-reclaim-charcoal">
                  Reclaim
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4 items-center">
              <Link 
                to="/" 
                className="text-reclaim-charcoal/80 hover:text-reclaim-charcoal px-3 py-2 text-sm font-medium"
                onClick={() => handleNavFeature("home_visit")}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-reclaim-charcoal/80 hover:text-reclaim-charcoal px-3 py-2 text-sm font-medium"
                onClick={() => handleNavFeature("about_visit")}
              >
                About
              </Link>
              <Link 
                to="/community" 
                className="text-reclaim-charcoal/80 hover:text-reclaim-charcoal px-3 py-2 text-sm font-medium"
                onClick={() => handleNavFeature("community_visit")}
              >
                Community
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {user ? (
              <UserMenu />
            ) : (
              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  className="text-reclaim-charcoal hover:bg-reclaim-blue/10"
                  onClick={() => {
                    navigate("/login");
                    handleNavFeature("login_visit");
                  }}
                >
                  Log in
                </Button>
                <Button 
                  className="bg-reclaim-blue hover:bg-reclaim-blue/90 text-white"
                  onClick={() => {
                    navigate("/signup");
                    handleNavFeature("signup_visit");
                  }}
                >
                  Sign up
                </Button>
              </div>
            )}
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-reclaim-charcoal hover:bg-reclaim-blue/10 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-reclaim-charcoal block px-3 py-2 rounded-md text-base font-medium hover:bg-reclaim-blue/10"
              onClick={() => {
                setIsOpen(false);
                handleNavFeature("home_visit");
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-reclaim-charcoal block px-3 py-2 rounded-md text-base font-medium hover:bg-reclaim-blue/10"
              onClick={() => {
                setIsOpen(false);
                handleNavFeature("about_visit");
              }}
            >
              About
            </Link>
            <Link
              to="/community"
              className="text-reclaim-charcoal block px-3 py-2 rounded-md text-base font-medium hover:bg-reclaim-blue/10"
              onClick={() => {
                setIsOpen(false);
                handleNavFeature("community_visit");
              }}
            >
              Community
            </Link>
            {user ? (
              <div className="pt-4 pb-3 border-t border-reclaim-charcoal/10">
                <div className="px-3">
                  <div className="text-base font-medium text-reclaim-charcoal">
                    {user.email?.split('@')[0] || 'User'}
                  </div>
                  <div className="text-sm font-medium text-reclaim-charcoal/70">
                    {user.email}
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-reclaim-charcoal hover:bg-reclaim-blue/10"
                    onClick={() => {
                      navigate("/");
                      setIsOpen(false);
                    }}
                  >
                    Profile
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-600 hover:bg-red-50"
                    onClick={() => {
                      setIsOpen(false);
                      signOut();
                    }}
                  >
                    Sign out
                  </Button>
                </div>
              </div>
            ) : (
              <div className="pt-4 pb-3 border-t border-reclaim-charcoal/10">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-reclaim-charcoal hover:bg-reclaim-blue/10"
                  onClick={() => {
                    navigate("/login");
                    setIsOpen(false);
                    handleNavFeature("login_visit");
                  }}
                >
                  Log in
                </Button>
                <Button
                  className="w-full justify-start bg-reclaim-blue hover:bg-reclaim-blue/90 text-white mt-2"
                  onClick={() => {
                    navigate("/signup");
                    setIsOpen(false);
                    handleNavFeature("signup_visit");
                  }}
                >
                  Sign up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
