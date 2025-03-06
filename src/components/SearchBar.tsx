
import React from "react";
import { Search } from "lucide-react";
import { GlobalSearch } from "@/components/GlobalSearch";
import { Card } from "@/components/ui/card";

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className }: SearchBarProps) => {
  return (
    <div className={`w-full bg-reclaim-sand py-2 border-b ${className}`}>
      <div className="container mx-auto px-4">
        <Card className="w-full bg-white shadow-sm p-1">
          <div className="flex items-center">
            <Search className="ml-2 h-4 w-4 text-muted-foreground" />
            <GlobalSearch />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SearchBar;
