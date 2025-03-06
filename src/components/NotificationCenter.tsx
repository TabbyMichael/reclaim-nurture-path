
import React, { useState } from "react";
import {
  Bell,
  Settings,
  MessageSquare,
  Calendar,
  User,
  Heart,
  Check,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

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
  link?: string;
  actionText?: string;
}

const getNotificationIcon = (type: NotificationType) => {
  switch (type) {
    case "message":
    case "mention":
    case "comment":
      return <MessageSquare className="h-4 w-4" />;
    case "follow":
      return <User className="h-4 w-4" />;
    case "like":
      return <Heart className="h-4 w-4" />;
    case "reminder":
      return <Calendar className="h-4 w-4" />;
    case "system":
    default:
      return <Bell className="h-4 w-4" />;
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
    link: "/community/forum",
  },
  {
    id: "2",
    type: "reminder",
    title: "Daily Check-in",
    message: "Don't forget to log your daily check-in for today",
    timestamp: "1 hour ago",
    read: false,
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
    link: "/community/forum",
  },
  {
    id: "4",
    type: "system",
    title: "Account Updated",
    message: "Your account details have been successfully updated",
    timestamp: "Yesterday",
    read: true,
  },
  {
    id: "5",
    type: "comment",
    title: "New Comment",
    message: "Jessica commented on your journal entry from Monday",
    timestamp: "2 days ago",
    read: true,
    link: "/journal",
  },
];

export const NotificationCenter = () => {
  const [notifications, setNotifications] = 
    useState<Notification[]>(mockNotifications);
  const [open, setOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const NotificationItem = ({ notification }: { notification: Notification }) => (
    <div 
      className={cn(
        "flex items-start p-3 rounded-md mb-1 relative",
        notification.read ? "opacity-75" : "bg-reclaim-blue/5"
      )}
    >
      <div 
        className={cn(
          "p-2 rounded-full mr-3",
          notification.read ? "bg-muted" : "bg-reclaim-blue/10"
        )}
      >
        {getNotificationIcon(notification.type)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h4 className="text-sm font-medium">{notification.title}</h4>
          <span className="text-xs text-muted-foreground ml-2 whitespace-nowrap">
            {notification.timestamp}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
        {notification.link && (
          <div className="mt-2">
            <Link 
              to={notification.link} 
              className="text-xs text-reclaim-blue hover:underline"
              onClick={() => markAsRead(notification.id)}
            >
              {notification.actionText || "View details"}
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-1 ml-2">
        {!notification.read && (
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
            onClick={() => markAsRead(notification.id)}
          >
            <Check className="h-3 w-3" />
            <span className="sr-only">Mark as read</span>
          </Button>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6"
          onClick={() => deleteNotification(notification.id)}
        >
          <X className="h-3 w-3" />
          <span className="sr-only">Delete</span>
        </Button>
      </div>
    </div>
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between p-3 border-b">
          <h3 className="font-medium">Notifications</h3>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7"
              onClick={markAllAsRead}
              disabled={unreadCount === 0}
            >
              <Check className="h-4 w-4" />
              <span className="sr-only">Mark all as read</span>
            </Button>
            <Link to="/account/notifications">
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <Settings className="h-4 w-4" />
                <span className="sr-only">Notification settings</span>
              </Button>
            </Link>
          </div>
        </div>
        <Tabs defaultValue="all">
          <TabsList className="w-full grid grid-cols-2 rounded-none border-b">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread" disabled={unreadCount === 0}>
              Unread {unreadCount > 0 && `(${unreadCount})`}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="p-0 m-0">
            <ScrollArea className="h-[300px]">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <NotificationItem 
                    key={notification.id} 
                    notification={notification} 
                  />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-[300px] text-center p-4">
                  <Bell className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    No notifications at the moment
                  </p>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
          <TabsContent value="unread" className="p-0 m-0">
            <ScrollArea className="h-[300px]">
              {notifications.filter(n => !n.read).length > 0 ? (
                notifications
                  .filter(n => !n.read)
                  .map((notification) => (
                    <NotificationItem 
                      key={notification.id} 
                      notification={notification} 
                    />
                  ))
              ) : (
                <div className="flex flex-col items-center justify-center h-[300px] text-center p-4">
                  <Check className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    No unread notifications
                  </p>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
        <div className="p-2 border-t text-center">
          <Link 
            to="/account/notifications" 
            className="text-xs text-reclaim-blue hover:underline"
            onClick={() => setOpen(false)}
          >
            View all notifications
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};
