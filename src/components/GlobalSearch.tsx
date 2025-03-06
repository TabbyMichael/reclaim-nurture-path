
import React, { useState, useCallback } from "react";
import { Search, X, FileText, Users, Book, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { debounce } from "@/lib/utils";

type SearchResultType = "resource" | "community" | "journal" | "event";

interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  description: string;
  url: string;
  date?: string;
}

// Mock search results - in a real app these would come from an API
const mockSearchResults: SearchResult[] = [
  {
    id: "1",
    type: "resource",
    title: "Understanding Trauma Responses",
    description: "Educational resource on trauma and recovery",
    url: "/educational-resources",
  },
  {
    id: "2",
    type: "community",
    title: "Coping Strategies Discussion",
    description: "Active forum thread in the Recovery Support group",
    url: "/community/forum",
  },
  {
    id: "3",
    type: "journal",
    title: "Weekly Reflection #12",
    description: "Your journal entry from last week",
    url: "/journal",
    date: "July 15, 2023",
  },
  {
    id: "4",
    type: "resource",
    title: "Mindfulness Meditation Guide",
    description: "Guided exercise for stress reduction",
    url: "/guided-exercises",
  },
  {
    id: "5",
    type: "event",
    title: "Virtual Support Group",
    description: "Upcoming online community event",
    url: "/community",
    date: "August 3, 2023 - 7:00 PM",
  },
];

const getIconForResultType = (type: SearchResultType) => {
  switch (type) {
    case "resource":
      return <Book className="h-4 w-4" />;
    case "community":
      return <Users className="h-4 w-4" />;
    case "journal":
      return <FileText className="h-4 w-4" />;
    case "event":
      return <Calendar className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
};

export const GlobalSearch = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  // Mock search function - in a real app this would query an API
  const performSearch = useCallback((query: string) => {
    if (query.length >= 2) {
      const results = mockSearchResults.filter(
        (result) =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, []);

  // Debounced search function to avoid too many searches while typing
  const debouncedSearch = useCallback(
    debounce((query: string) => performSearch(query), 300),
    [performSearch]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  const handleSelectResult = (result: SearchResult) => {
    navigate(result.url);
    setOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="Search resources, community, journal..."
          className="w-full pl-10 pr-4 py-2 rounded-md"
          onClick={() => setOpen(true)}
        />
        <kbd className="pointer-events-none absolute right-2 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-60 md:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search across the platform..."
          value={searchQuery}
          onValueChange={setSearchQuery}
          onInput={handleSearch}
        />
        <CommandList>
          {searchQuery.length < 2 ? (
            <CommandEmpty>
              Start typing to search (minimum 2 characters)
            </CommandEmpty>
          ) : searchResults.length === 0 ? (
            <CommandEmpty>No results found for "{searchQuery}"</CommandEmpty>
          ) : (
            <>
              <CommandGroup heading="Resources">
                {searchResults
                  .filter((result) => result.type === "resource")
                  .map((result) => (
                    <CommandItem
                      key={result.id}
                      onSelect={() => handleSelectResult(result)}
                    >
                      {getIconForResultType(result.type)}
                      <div className="ml-2">
                        <p>{result.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {result.description}
                        </p>
                      </div>
                    </CommandItem>
                  ))}
              </CommandGroup>

              <CommandGroup heading="Community">
                {searchResults
                  .filter((result) => result.type === "community")
                  .map((result) => (
                    <CommandItem
                      key={result.id}
                      onSelect={() => handleSelectResult(result)}
                    >
                      {getIconForResultType(result.type)}
                      <div className="ml-2">
                        <p>{result.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {result.description}
                        </p>
                      </div>
                    </CommandItem>
                  ))}
              </CommandGroup>

              <CommandGroup heading="Personal">
                {searchResults
                  .filter(
                    (result) =>
                      result.type === "journal" || result.type === "event"
                  )
                  .map((result) => (
                    <CommandItem
                      key={result.id}
                      onSelect={() => handleSelectResult(result)}
                    >
                      <div className="flex items-center">
                        {getIconForResultType(result.type)}
                        <div className="ml-2">
                          <p>{result.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {result.description}
                            {result.date && ` • ${result.date}`}
                          </p>
                        </div>
                      </div>
                    </CommandItem>
                  ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};
