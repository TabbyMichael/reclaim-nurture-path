
import React from 'react';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const { user, signOut, trackFeatureUsage } = useAuth();

  if (!user) return null;

  const handleNavFeature = (feature: string) => {
    trackFeatureUsage(feature);
  };

  const email = user.email || '';
  const displayName = email.substring(0, email.indexOf('@')) || 'User';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full bg-reclaim-blue/10">
          <User className="h-5 w-5 text-reclaim-blue" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{displayName}</p>
            <p className="text-xs text-muted-foreground">{email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/community" onClick={() => handleNavFeature("community_visit")}>
            Community
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/join-community" onClick={() => handleNavFeature("join_community_visit")}>
            Join Community
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut} className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
