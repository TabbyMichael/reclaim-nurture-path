
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BookText, LogOut, Settings, User, Bell } from "lucide-react";
import { useLocation } from 'react-router-dom';
import logo from '../assets/reclaim-logo-light.svg';

// Import the NotificationCenter and GlobalSearch components
import { NotificationCenter } from "@/components/NotificationCenter";
import { GlobalSearch } from "@/components/GlobalSearch";

const Navbar = () => {
  const { user, session, signOut } = useAuth();
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';
  // Check if user is authenticated based on session
  const isAuthenticated = !!session;

  return (
    <div className="bg-reclaim-blue text-white sticky top-0 z-50">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Reclaim Logo" className="h-8 mr-2" />
          <span className="font-bold text-xl">Reclaim</span>
        </Link>

        {/* Conditionally render navigation links based on authentication status */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/community" className="hover:text-gray-200">Community</Link>
          <Link to="/resources" className="hover:text-gray-200">Resources</Link>
          <Link to="/help-center" className="hover:text-gray-200">Help</Link>
        </div>

        {/* User navigation (Login/Signup or User Menu) */}
        <div className="flex items-center space-x-1">
          <GlobalSearch />
          <NotificationCenter />
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10 border border-muted">
                    <AvatarImage
                      src={user?.user_metadata?.avatar_url || "/placeholder.svg"}
                      alt={user?.email || "User"}
                    />
                    <AvatarFallback>
                      {user?.email?.charAt(0)?.toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link to="/profile">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                </Link>
                <Link to="/journal">
                  <DropdownMenuItem>
                    <BookText className="mr-2 h-4 w-4" />
                    <span>Journal</span>
                  </DropdownMenuItem>
                </Link>
                <Link to="/account/settings">
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                </Link>
                <Link to="/account/notifications">
                  <DropdownMenuItem>
                    <Bell className="mr-2 h-4 w-4" />
                    <span>Notifications</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              {!isLoginPage && <Link to="/login">
                <Button variant="outline">Log in</Button>
              </Link>}
              {!isSignupPage && <Link to="/signup">
                <Button>Sign up</Button>
              </Link>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
