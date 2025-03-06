
import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bell, MessageSquare, Calendar, User, Heart, Check, Filter, Trash2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

type NotificationType = 
  | "message" 
  | "mention" 
  | "follow" 
  | "like" 
  | "comment" 
  | "system" 
  | "reminder";

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  date: string;
  time: string;
  link?: string;
  actionText?: string;
}

const getNotificationIcon = (type: NotificationType) => {
  switch (type) {
    case "message":
    case "mention":
    case "comment":
      return <MessageSquare className="h-5 w-5" />;
    case "follow":
      return <User className="h-5 w-5" />;
    case "like":
      return <Heart className="h-5 w-5" />;
    case "reminder":
      return <Calendar className="h-5 w-5" />;
    case "system":
    default:
      return <Bell className="h-5 w-5" />;
  }
};

// Mock notifications - in a real app these would come from an API
const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "message",
    title: "New Message",
    message: "Sarah sent you a message in the 'Recovery Support' group",
    timestamp: "10 minutes ago",
    read: false,
    date: "Today",
    time: "10:45 AM",
    link: "/community/forum",
  },
  {
    id: "2",
    type: "reminder",
    title: "Daily Check-in",
    message: "Don't forget to log your daily check-in for today",
    timestamp: "1 hour ago",
    read: false,
    date: "Today",
    time: "8:00 AM",
    link: "/journal",
    actionText: "Check in now",
  },
  {
    id: "3",
    type: "like",
    title: "Post Liked",
    message: "Michael and 3 others liked your post in the forum",
    timestamp: "3 hours ago",
    read: true,
    date: "Today",
    time: "7:30 AM",
    link: "/community/forum",
  },
  {
    id: "4",
    type: "system",
    title: "Account Updated",
    message: "Your account details have been successfully updated",
    timestamp: "Yesterday",
    read: true,
    date: "Yesterday",
    time: "3:15 PM",
  },
  {
    id: "5",
    type: "comment",
    title: "New Comment",
    message: "Jessica commented on your journal entry from Monday",
    timestamp: "2 days ago",
    read: true,
    date: "Jul 18, 2023",
    time: "5:22 PM",
    link: "/journal",
  },
  {
    id: "6",
    type: "system",
    title: "New Feature Available",
    message: "Check out our new guided meditation exercises",
    timestamp: "3 days ago",
    read: true,
    date: "Jul 17, 2023",
    time: "9:00 AM",
    link: "/guided-exercises",
    actionText: "Explore now",
  },
  {
    id: "7",
    type: "message",
    title: "Support Response",
    message: "Our team has responded to your support request",
    timestamp: "1 week ago",
    read: true,
    date: "Jul 13, 2023",
    time: "2:45 PM",
    link: "/help-center",
    actionText: "View response",
  },
];

const NotificationsPage = () => {
  const { isAuthenticated, isLoading } = useProtectedRoute();
  const { toast } = useToast();
  
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([]);
  const [filterType, setFilterType] = useState<string | null>(null);

  const filteredNotifications = filterType
    ? notifications.filter(n => n.type === filterType)
    : notifications;

  const handleSelectNotification = (id: string) => {
    if (selectedNotifications.includes(id)) {
      setSelectedNotifications(selectedNotifications.filter(nId => nId !== id));
    } else {
      setSelectedNotifications([...selectedNotifications, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectedNotifications.length === filteredNotifications.length) {
      setSelectedNotifications([]);
    } else {
      setSelectedNotifications(filteredNotifications.map(n => n.id));
    }
  };

  const markAsRead = (ids: string[]) => {
    setNotifications(
      notifications.map(n => 
        ids.includes(n.id) ? { ...n, read: true } : n
      )
    );
    setSelectedNotifications([]);
    
    toast({
      title: "Marked as read",
      description: `${ids.length} notification${ids.length !== 1 ? "s" : ""} marked as read.`,
    });
  };

  const deleteNotifications = (ids: string[]) => {
    setNotifications(
      notifications.filter(n => !ids.includes(n.id))
    );
    setSelectedNotifications([]);
    
    toast({
      title: "Notifications deleted",
      description: `${ids.length} notification${ids.length !== 1 ? "s" : ""} deleted.`,
    });
  };

  const groupNotificationsByDate = (notifications: Notification[]) => {
    const grouped: Record<string, Notification[]> = {};
    
    notifications.forEach(notification => {
      if (!grouped[notification.date]) {
        grouped[notification.date] = [];
      }
      grouped[notification.date].push(notification);
    });
    
    return grouped;
  };
  
  const groupedNotifications = groupNotificationsByDate(filteredNotifications);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-reclaim-sand flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-reclaim-blue">Loading notifications...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-reclaim-sand flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Link to="/account/settings">
                <Button variant="ghost" size="icon" className="mr-2">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <h1 className="text-3xl font-bold">Notifications</h1>
            </div>
            
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setFilterType(null)}>
                    All notifications
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterType("message")}>
                    Messages
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterType("reminder")}>
                    Reminders
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilterType("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link to="/account/settings">
                <Button variant="outline" size="sm">
                  Settings
                </Button>
              </Link>
            </div>
          </div>
          
          {selectedNotifications.length > 0 ? (
            <div className="bg-white rounded-lg shadow p-3 mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox 
                  id="select-all"
                  checked={selectedNotifications.length === filteredNotifications.length}
                  onCheckedChange={handleSelectAll}
                  className="mr-3"
                />
                <Label htmlFor="select-all">
                  {selectedNotifications.length} selected
                </Label>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => markAsRead(selectedNotifications)}
                >
                  <Check className="h-4 w-4 mr-2" />
                  Mark as read
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => deleteNotifications(selectedNotifications)}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          ) : (
            <div className="mb-6">
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="unread">
                    Unread ({notifications.filter(n => !n.read).length})
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          )}
          
          {Object.keys(groupedNotifications).length > 0 ? (
            <div className="space-y-8">
              {Object.entries(groupedNotifications).map(([date, dateNotifications]) => (
                <div key={date}>
                  <h2 className="text-sm font-medium text-muted-foreground mb-3">{date}</h2>
                  <div className="space-y-3">
                    {dateNotifications.map(notification => (
                      <Card key={notification.id} className="relative overflow-hidden">
                        <div className="flex p-4">
                          <div className="mr-4 mt-0.5">
                            <Checkbox
                              checked={selectedNotifications.includes(notification.id)}
                              onCheckedChange={() => handleSelectNotification(notification.id)}
                              className="mr-2"
                            />
                          </div>
                          
                          <div 
                            className={`p-2 rounded-full mr-4 ${
                              notification.read 
                                ? "bg-muted" 
                                : "bg-reclaim-blue/10"
                            }`}
                          >
                            {getNotificationIcon(notification.type)}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-medium">{notification.title}</h3>
                              <span className="text-sm text-muted-foreground">{notification.time}</span>
                            </div>
                            <p className="text-muted-foreground mt-1">{notification.message}</p>
                            
                            {notification.link && (
                              <div className="mt-3">
                                <Link to={notification.link}>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                  >
                                    {notification.actionText || "View details"}
                                  </Button>
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {!notification.read && (
                          <div className="absolute top-0 left-0 w-1 h-full bg-reclaim-blue"></div>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-medium mb-2">No notifications</h2>
              <p className="text-muted-foreground">
                You don't have any notifications at the moment.
              </p>
              <div className="mt-6">
                <Link to="/dashboard">
                  <Button>Go to dashboard</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotificationsPage;
