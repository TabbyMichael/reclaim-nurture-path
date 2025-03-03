
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Users, 
  BarChart3, 
  Settings, 
  FileText, 
  Bell, 
  Search, 
  Home, 
  Menu, 
  X, 
  User,
  LogOut,
  Lock,
  Globe,
  Mail,
  Shield,
  Smartphone,
  Database,
  RefreshCw,
  Upload,
  Download,
  Monitor,
  Clock,
  Language,
  CreditCard,
  CloudOff,
  AlertTriangle,
  HelpCircle,
  Save
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Admin = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle saving settings
  const handleSaveSettings = (settingType: string) => {
    // Simulate saving settings
    toast.success(`${settingType} settings saved successfully`);
    setUnsavedChanges(false);
  };

  // Function to simulate setting changes
  const handleSettingChange = () => {
    setUnsavedChanges(true);
  };

  // Mock data for the admin dashboard
  const userStats = {
    totalUsers: 1245,
    activeUsers: 872,
    newUsers: 64,
    premiumUsers: 328,
  };

  const engagementStats = {
    journalEntries: 3782,
    dailyCheckins: 6291,
    completedPaths: 491,
    supportRequests: 37,
  };

  // Mock recovery paths data
  const recoveryPaths = [
    { id: 1, name: "Alcohol Recovery", usersEnrolled: 342, completionRate: 68 },
    { id: 2, name: "Substance Abuse", usersEnrolled: 276, completionRate: 62 },
    { id: 3, name: "Mental Health", usersEnrolled: 413, completionRate: 71 },
    { id: 4, name: "Smoking Cessation", usersEnrolled: 189, completionRate: 55 },
  ];

  // Mock recent users
  const recentUsers = [
    { id: 1, name: "Jane Cooper", email: "jane@example.com", joinDate: "2023-10-15", status: "active" },
    { id: 2, name: "Robert Fox", email: "robert@example.com", joinDate: "2023-10-12", status: "inactive" },
    { id: 3, name: "Esther Howard", email: "esther@example.com", joinDate: "2023-10-10", status: "active" },
    { id: 4, name: "Jenny Wilson", email: "jenny@example.com", joinDate: "2023-10-05", status: "active" },
    { id: 5, name: "Guy Hawkins", email: "guy@example.com", joinDate: "2023-10-01", status: "inactive" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div 
        className={`fixed h-screen bg-reclaim-charcoal text-white z-10 transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className={`flex items-center ${!isSidebarOpen && "justify-center w-full"}`}>
            <div className="w-8 h-8 rounded-full bg-reclaim-blue flex items-center justify-center">
              <span className="text-white font-semibold text-sm">R</span>
            </div>
            {isSidebarOpen && (
              <span className="ml-2 font-semibold text-xl">Reclaim</span>
            )}
          </div>
          <button 
            onClick={toggleSidebar} 
            className={`text-gray-300 hover:text-white ${!isSidebarOpen && "hidden"}`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-6">
          <ul className="space-y-2 px-2">
            <li>
              <button 
                onClick={() => setActiveTab("dashboard")}
                className={`flex items-center w-full p-3 rounded-md transition-colors ${
                  activeTab === "dashboard" 
                    ? "bg-reclaim-blue text-white" 
                    : "text-gray-300 hover:bg-gray-700"
                } ${!isSidebarOpen && "justify-center"}`}
              >
                <BarChart3 className="h-5 w-5" />
                {isSidebarOpen && <span className="ml-3">Dashboard</span>}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab("users")}
                className={`flex items-center w-full p-3 rounded-md transition-colors ${
                  activeTab === "users" 
                    ? "bg-reclaim-blue text-white" 
                    : "text-gray-300 hover:bg-gray-700"
                } ${!isSidebarOpen && "justify-center"}`}
              >
                <Users className="h-5 w-5" />
                {isSidebarOpen && <span className="ml-3">Users</span>}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab("content")}
                className={`flex items-center w-full p-3 rounded-md transition-colors ${
                  activeTab === "content" 
                    ? "bg-reclaim-blue text-white" 
                    : "text-gray-300 hover:bg-gray-700"
                } ${!isSidebarOpen && "justify-center"}`}
              >
                <FileText className="h-5 w-5" />
                {isSidebarOpen && <span className="ml-3">Content</span>}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab("settings")}
                className={`flex items-center w-full p-3 rounded-md transition-colors ${
                  activeTab === "settings" 
                    ? "bg-reclaim-blue text-white" 
                    : "text-gray-300 hover:bg-gray-700"
                } ${!isSidebarOpen && "justify-center"}`}
              >
                <Settings className="h-5 w-5" />
                {isSidebarOpen && <span className="ml-3">Settings</span>}
              </button>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
          <button 
            onClick={() => navigate("/")}
            className={`flex items-center w-full p-3 rounded-md text-gray-300 hover:bg-gray-700 transition-colors ${!isSidebarOpen && "justify-center"}`}
          >
            <Home className="h-5 w-5" />
            {isSidebarOpen && <span className="ml-3">Back to Site</span>}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className={`flex-1 transition-all duration-300 overflow-hidden ${
        isSidebarOpen ? "ml-64" : "ml-20"
      }`}>
        {/* Top bar */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <button 
                onClick={toggleSidebar}
                className="mr-4 text-gray-500 hover:text-gray-700 md:hidden"
              >
                {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <h1 className="text-2xl font-semibold text-reclaim-charcoal">
                {activeTab === "dashboard" && "Admin Dashboard"}
                {activeTab === "users" && "User Management"}
                {activeTab === "content" && "Content Management"}
                {activeTab === "settings" && "System Settings"}
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 w-64 bg-gray-50 border-gray-200"
                />
              </div>
              
              <button className="relative text-gray-500 hover:text-gray-700">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
              
              <Dialog>
                <DialogTrigger asChild>
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                    <div className="w-8 h-8 rounded-full bg-reclaim-blue flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Admin Profile</DialogTitle>
                    <DialogDescription>
                      Manager your admin account settings
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col items-center py-4">
                    <div className="w-20 h-20 rounded-full bg-reclaim-blue flex items-center justify-center mb-4">
                      <User className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">Admin User</h3>
                    <p className="text-gray-500">admin@reclaim.com</p>
                  </div>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full">Edit Profile</Button>
                    <Button variant="outline" className="w-full">Account Settings</Button>
                    <Button 
                      variant="destructive" 
                      className="w-full" 
                      onClick={() => navigate("/")}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Log Out
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-6 overflow-y-auto h-[calc(100vh-64px)]">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Stats cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Total Users</p>
                        <h3 className="text-3xl font-bold text-reclaim-charcoal mt-1">{userStats.totalUsers}</h3>
                      </div>
                      <div className="p-3 bg-reclaim-blue/10 rounded-full">
                        <Users className="h-6 w-6 text-reclaim-blue" />
                      </div>
                    </div>
                    <p className="text-sm text-green-600 mt-4 flex items-center">
                      <span className="font-medium">+12%</span>
                      <span className="ml-1">from last month</span>
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Active Users</p>
                        <h3 className="text-3xl font-bold text-reclaim-charcoal mt-1">{userStats.activeUsers}</h3>
                      </div>
                      <div className="p-3 bg-green-100 rounded-full">
                        <User className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <p className="text-sm text-green-600 mt-4 flex items-center">
                      <span className="font-medium">+8%</span>
                      <span className="ml-1">from last month</span>
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">New Users</p>
                        <h3 className="text-3xl font-bold text-reclaim-charcoal mt-1">{userStats.newUsers}</h3>
                      </div>
                      <div className="p-3 bg-purple-100 rounded-full">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <p className="text-sm text-green-600 mt-4 flex items-center">
                      <span className="font-medium">+24%</span>
                      <span className="ml-1">from last month</span>
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Premium Users</p>
                        <h3 className="text-3xl font-bold text-reclaim-charcoal mt-1">{userStats.premiumUsers}</h3>
                      </div>
                      <div className="p-3 bg-amber-100 rounded-full">
                        <Users className="h-6 w-6 text-amber-600" />
                      </div>
                    </div>
                    <p className="text-sm text-green-600 mt-4 flex items-center">
                      <span className="font-medium">+18%</span>
                      <span className="ml-1">from last month</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Engagement stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recovery Path Analytics</CardTitle>
                    <CardDescription>
                      Usage and completion rates for recovery paths
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {recoveryPaths.map((path) => (
                        <div key={path.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{path.name}</span>
                            <span className="text-sm text-gray-500">{path.usersEnrolled} users</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-reclaim-blue" 
                              style={{ width: `${path.completionRate}%` }}
                            ></div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Completion Rate</span>
                            <span className="font-medium">{path.completionRate}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Platform Engagement</CardTitle>
                    <CardDescription>
                      Stats for user engagement with platform features
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-5">
                      <li className="flex items-center justify-between pb-5 border-b">
                        <div className="flex items-center">
                          <div className="p-2 bg-blue-100 rounded mr-3">
                            <FileText className="h-5 w-5 text-blue-600" />
                          </div>
                          <span>Journal Entries</span>
                        </div>
                        <span className="font-semibold">{engagementStats.journalEntries}</span>
                      </li>
                      <li className="flex items-center justify-between pb-5 border-b">
                        <div className="flex items-center">
                          <div className="p-2 bg-green-100 rounded mr-3">
                            <BarChart3 className="h-5 w-5 text-green-600" />
                          </div>
                          <span>Daily Check-ins</span>
                        </div>
                        <span className="font-semibold">{engagementStats.dailyCheckins}</span>
                      </li>
                      <li className="flex items-center justify-between pb-5 border-b">
                        <div className="flex items-center">
                          <div className="p-2 bg-purple-100 rounded mr-3">
                            <FileText className="h-5 w-5 text-purple-600" />
                          </div>
                          <span>Completed Paths</span>
                        </div>
                        <span className="font-semibold">{engagementStats.completedPaths}</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="p-2 bg-red-100 rounded mr-3">
                            <Bell className="h-5 w-5 text-red-600" />
                          </div>
                          <span>Support Requests</span>
                        </div>
                        <span className="font-semibold">{engagementStats.supportRequests}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              {/* Recent users */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Users</CardTitle>
                  <CardDescription>
                    Recently registered users on the platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th className="px-6 py-3">Name</th>
                          <th className="px-6 py-3">Email</th>
                          <th className="px-6 py-3">Join Date</th>
                          <th className="px-6 py-3">Status</th>
                          <th className="px-6 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentUsers.map((user) => (
                          <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">{user.joinDate}</td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {user.status}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">View</Button>
                                <Button variant="outline" size="sm">Edit</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeTab === "users" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">User Management</h2>
                <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90">
                  Add New User
                </Button>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>All Users</CardTitle>
                  <CardDescription>
                    View and manage all registered users on the platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-4">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">All</Button>
                      <Button variant="outline" size="sm">Active</Button>
                      <Button variant="outline" size="sm">Inactive</Button>
                      <Button variant="outline" size="sm">Premium</Button>
                    </div>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input 
                        type="text"
                        placeholder="Search users..."
                        className="pl-10 w-64 bg-gray-50 border-gray-200"
                      />
                    </div>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th className="px-6 py-3">Name</th>
                          <th className="px-6 py-3">Email</th>
                          <th className="px-6 py-3">Join Date</th>
                          <th className="px-6 py-3">Status</th>
                          <th className="px-6 py-3">Recovery Path</th>
                          <th className="px-6 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Extended list of users for the users tab */}
                        {[...recentUsers, 
                          { id: 6, name: "Cameron Williamson", email: "cameron@example.com", joinDate: "2023-09-28", status: "active" },
                          { id: 7, name: "Brooklyn Simmons", email: "brooklyn@example.com", joinDate: "2023-09-22", status: "inactive" },
                          { id: 8, name: "Leslie Alexander", email: "leslie@example.com", joinDate: "2023-09-15", status: "active" },
                          { id: 9, name: "Kristin Watson", email: "kristin@example.com", joinDate: "2023-09-10", status: "active" },
                          { id: 10, name: "Cody Fisher", email: "cody@example.com", joinDate: "2023-09-05", status: "inactive" },
                        ].map((user) => (
                          <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">{user.joinDate}</td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {user.status}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              {user.id % 4 === 0 ? "Mental Health" : 
                               user.id % 3 === 0 ? "Alcohol Recovery" : 
                               user.id % 2 === 0 ? "Substance Abuse" : "Smoking Cessation"}
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">View</Button>
                                <Button variant="outline" size="sm">Edit</Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-gray-500">Showing 1-10 of 1,245 users</p>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" disabled>Previous</Button>
                      <Button variant="outline" size="sm">Next</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          {activeTab === "content" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Content Management</h2>
                <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90">
                  Add New Content
                </Button>
              </div>
              
              <Tabs defaultValue="recovery-paths">
                <TabsList className="mb-4">
                  <TabsTrigger value="recovery-paths">Recovery Paths</TabsTrigger>
                  <TabsTrigger value="journal-prompts">Journal Prompts</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                  <TabsTrigger value="community">Community</TabsTrigger>
                </TabsList>
                
                <TabsContent value="recovery-paths">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recovery Paths</CardTitle>
                      <CardDescription>
                        Manage recovery paths and their associated content
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {recoveryPaths.map((path) => (
                          <div key={path.id} className="border p-4 rounded-md">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="text-lg font-semibold">{path.name}</h3>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">Edit</Button>
                                <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Delete</Button>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <p className="text-gray-500">Users Enrolled</p>
                                <p className="font-medium">{path.usersEnrolled}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Completion Rate</p>
                                <p className="font-medium">{path.completionRate}%</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Last Updated</p>
                                <p className="font-medium">2023-10-12</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="journal-prompts">
                  <Card>
                    <CardHeader>
                      <CardTitle>Journal Prompts</CardTitle>
                      <CardDescription>
                        Manage journal prompts for different recovery paths
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {recoveryPaths.map((path) => (
                          <div key={path.id} className="border p-4 rounded-md">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="text-lg font-semibold">{path.name} Prompts</h3>
                              <Button variant="outline" size="sm">Add Prompt</Button>
                            </div>
                            <div className="space-y-4">
                              {[1, 2, 3].map((promptId) => (
                                <div key={promptId} className="bg-gray-50 p-3 rounded-md">
                                  <div className="flex justify-between items-start">
                                    <p>Reflect on a moment today when you felt triggered. What strategies did you use to cope with this feeling?</p>
                                    <div className="flex space-x-2 ml-4">
                                      <button className="text-gray-500 hover:text-gray-700">
                                        <FileText className="h-4 w-4" />
                                      </button>
                                      <button className="text-red-500 hover:text-red-700">
                                        <X className="h-4 w-4" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="resources">
                  <Card>
                    <CardHeader>
                      <CardTitle>Resources</CardTitle>
                      <CardDescription>
                        Manage external resources and support information
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h3 className="font-semibold">Emergency Resources</h3>
                          <Button variant="outline" size="sm">Add Resource</Button>
                        </div>
                        <table className="w-full text-sm text-left">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                              <th className="px-6 py-3">Name</th>
                              <th className="px-6 py-3">Type</th>
                              <th className="px-6 py-3">Contact</th>
                              <th className="px-6 py-3">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white border-b hover:bg-gray-50">
                              <td className="px-6 py-4 font-medium">National Suicide Prevention Lifeline</td>
                              <td className="px-6 py-4">Hotline</td>
                              <td className="px-6 py-4">1-800-273-8255</td>
                              <td className="px-6 py-4">
                                <div className="flex items-center space-x-2">
                                  <Button variant="outline" size="sm">Edit</Button>
                                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Delete</Button>
                                </div>
                              </td>
                            </tr>
                            <tr className="bg-white border-b hover:bg-gray-50">
                              <td className="px-6 py-4 font-medium">SAMHSA's National Helpline</td>
                              <td className="px-6 py-4">Helpline</td>
                              <td className="px-6 py-4">1-800-662-4357</td>
                              <td className="px-6 py-4">
                                <div className="flex items-center space-x-2">
                                  <Button variant="outline" size="sm">Edit</Button>
                                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Delete</Button>
                                </div>
                              </td>
                            </tr>
                            <tr className="bg-white border-b hover:bg-gray-50">
                              <td className="px-6 py-4 font-medium">Crisis Text Line</td>
                              <td className="px-6 py-4">Text Service</td>
                              <td className="px-6 py-4">Text HOME to 741741</td>
                              <td className="px-6 py-4">
                                <div className="flex items-center space-x-2">
                                  <Button variant="outline" size="sm">Edit</Button>
                                  <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Delete</Button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="community">
                  <Card>
                    <CardHeader>
                      <CardTitle>Community Management</CardTitle>
                      <CardDescription>
                        Manage community forums and discussions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">All Posts</Button>
                          <Button variant="outline" size="sm">Reported</Button>
                          <Button variant="outline" size="sm">Pending</Button>
                        </div>
                        <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90" size="sm">
                          Create Announcement
                        </Button>
                      </div>
                      
                      <div className="space-y-4">
                        {[1, 2, 3, 4].map((postId) => (
                          <div key={postId} className="border p-4 rounded-md">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium">Finding strength in community support</h4>
                                <div className="flex items-center mt-1 text-sm text-gray-500">
                                  <span>Posted by: Jane Cooper</span>
                                  <span className="mx-2">•</span>
                                  <span>Oct 12, 2023</span>
                                  <span className="mx-2">•</span>
                                  <span>Alcohol Recovery</span>
                                </div>
                                <p className="mt-2 text-sm text-gray-700">
                                  I've been finding so much strength in our community meetings. The support from everyone has been incredible...
                                </p>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">View</Button>
                                <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Hide</Button>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 mt-3 text-sm">
                              <span className="text-gray-500">12 comments</span>
                              <span className="text-gray-500">24 likes</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
          
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">Platform Settings</h2>
                  <p className="text-gray-500">Configure and customize your recovery platform</p>
                </div>
                {unsavedChanges && (
                  <div className="flex items-center gap-2">
                    <span className="text-amber-500 text-sm animate-pulse">
                      You have unsaved changes
                    </span>
                    <Button 
                      className="bg-reclaim-blue hover:bg-reclaim-blue/90"
                      onClick={() => handleSaveSettings('All')}
                    >
                      <Save className="mr-2 h-4 w-4" /> Save All Changes
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="grid grid-cols-12 gap-6">
                {/* Settings Navigation */}
                <div className="col-span-12 lg:col-span-3">
                  <Card>
                    <CardContent className="p-0">
                      <Tabs defaultValue="general" orientation="vertical" className="w-full">
                        <TabsList className="flex flex-col h-auto p-0 bg-transparent w-full">
                          <TabsTrigger 
                            value="general" 
                            className="justify-start w-full border-b rounded-none py-3 text-left px-4 data-[state=active]:bg-gray-100"
                          >
                            <div className="flex items-center">
                              <Settings className="h-5 w-5 mr-2" />
                              <span>General</span>
                            </div>
                          </TabsTrigger>
                          <TabsTrigger 
                            value="appearance" 
                            className="justify-start w-full border-b rounded-none py-3 text-left px-4 data-[state=active]:bg-gray-100"
                          >
                            <div className="flex items-center">
                              <Monitor className="h-5 w-5 mr-2" />
                              <span>Appearance</span>
                            </div>
                          </TabsTrigger>
                          <TabsTrigger 
                            value="security" 
                            className="justify-start w-full border-b rounded-none py-3 text-left px-4 data-[state=active]:bg-gray-100"
                          >
                            <div className="flex items-center">
                              <Shield className="h-5 w-5 mr-2" />
                              <span>Security</span>
                            </div>
                          </TabsTrigger>
                          <TabsTrigger 
                            value="notifications" 
                            className="justify-start w-full border-b rounded-none py-3 text-left px-4 data-[state=active]:bg-gray-100"
                          >
                            <div className="flex items-center">
                              <Bell className="h-5 w-5 mr-2" />
                              <span>Notifications</span>
                            </div>
                          </TabsTrigger>
                          <TabsTrigger 
                            value="integrations" 
                            className="justify-start w-full border-b rounded-none py-3 text-left px-4 data-[state=active]:bg-gray-100"
                          >
                            <div className="flex items-center">
                              <RefreshCw className="h-5 w-5 mr-2" />
                              <span>Integrations</span>
                            </div>
                          </TabsTrigger>
                          <TabsTrigger 
                            value="localization" 
                            className="justify-start w-full border-b rounded-none py-3 text-left px-4 data-[state=active]:bg-gray-100"
                          >
                            <div className="flex items-center">
                              <Globe className="h-5 w-5 mr-2" />
                              <span>Localization</span>
                            </div>
                          </TabsTrigger>
                          <TabsTrigger 
                            value="privacy" 
                            className="justify-start w-full border-b rounded-none py-3 text-left px-4 data-[state=active]:bg-gray-100"
                          >
                            <div className="flex items-center">
                              <Lock className="h-5 w-5 mr-2" />
                              <span>Privacy</span>
                            </div>
                          </TabsTrigger>
                          <TabsTrigger 
                            value="backup" 
                            className="justify-start w-full border-b rounded-none py-3 text-left px-4 data-[state=active]:bg-gray-100"
                          >
                            <div className="flex items-center">
                              <Database className="h-5 w-5 mr-2" />
                              <span>Backup & Restore</span>
                            </div>
                          </TabsTrigger>
                          <TabsTrigger 
                            value="advanced" 
                            className="justify-start w-full border-b rounded-none py-3 text-left px-4 data-[state=active]:bg-gray-100"
                          >
                            <div className="flex items-center">
                              <AlertTriangle className="h-5 w-5 mr-2" />
                              <span>Advanced</span>
                            </div>
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Settings Content */}
                <div className="col-span-12 lg:col-span-9">
                  <Card className="h-full">
                    <CardContent className="p-6 h-full">
                      <Tabs defaultValue="general" className="h-full">
                        <TabsContent value="general" className="h-full mt-0">
                          <ScrollArea className="h-[calc(100vh-240px)]">
                            <div className="space-y-8 pr-4">
                              <div>
                                <h3 className="text-lg font-medium mb-4">Platform Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="site-name">Platform Name</Label>
                                    <Input 
                                      id="site-name" 
                                      defaultValue="Reclaim Recovery Platform" 
                                      onChange={handleSettingChange}
                                    />
                                    <p className="text-sm text-gray-500">The name of your recovery platform</p>
                                  </div>
                                  
                                  <div className="space-y-2">
                                    <Label htmlFor="contact-email">Contact Email</Label>
                                    <Input 
                                      id="contact-email" 
                                      defaultValue="support@reclaimrecovery.com" 
                                      onChange={handleSettingChange}
                                    />
                                    <p className="text-sm text-gray-500">The primary contact email for your platform</p>
                                  </div>
                                </div>
                                
                                <div className="mt-4 space-y-2">
                                  <Label htmlFor="site-description">Platform Description</Label>
                                  <Textarea 
                                    id="site-description" 
                                    className="min-h-[100px]"
                                    defaultValue="A comprehensive recovery platform dedicated to helping individuals on their journey to wellness and sobriety." 
                                    onChange={handleSettingChange}
                                  />
                                  <p className="text-sm text-gray-500">Brief description of your platform's purpose</p>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">Operation Mode</h3>
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <div className="flex items-center">
                                        <Label className="text-base">Maintenance Mode</Label>
                                        <HoverCard>
                                          <HoverCardTrigger asChild>
                                            <HelpCircle className="h-4 w-4 text-gray-500 ml-2 cursor-help" />
                                          </HoverCardTrigger>
                                          <HoverCardContent className="w-80">
                                            <p className="text-sm">
                                              When enabled, users will see a maintenance page and won't be able to use the platform. Admins can still access the admin panel.
                                            </p>
                                          </HoverCardContent>
                                        </HoverCard>
                                      </div>
                                      <p className="text-sm text-gray-500">Disable access to the platform for maintenance</p>
                                    </div>
                                    <Switch onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <div className="flex items-center">
                                        <Label className="text-base">Read-Only Mode</Label>
                                        <HoverCard>
                                          <HoverCardTrigger asChild>
                                            <HelpCircle className="h-4 w-4 text-gray-500 ml-2 cursor-help" />
                                          </HoverCardTrigger>
                                          <HoverCardContent className="w-80">
                                            <p className="text-sm">
                                              When enabled, users can view content but cannot create or modify any data.
                                            </p>
                                          </HoverCardContent>
                                        </HoverCard>
                                      </div>
                                      <p className="text-sm text-gray-500">Allow users to view but not modify content</p>
                                    </div>
                                    <Switch onChange={handleSettingChange} />
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">User Registration</h3>
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Allow New Registrations</Label>
                                      <p className="text-sm text-gray-500">Enable or disable new user registrations</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Email Verification Required</Label>
                                      <p className="text-sm text-gray-500">Require email verification before users can access features</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="space-y-2 mt-4">
                                    <Label htmlFor="default-user-role">Default User Role</Label>
                                    <Select 
                                      defaultValue="member" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="default-user-role">
                                        <SelectValue placeholder="Select a role" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="guest">Guest</SelectItem>
                                        <SelectItem value="member">Member</SelectItem>
                                        <SelectItem value="contributor">Contributor</SelectItem>
                                        <SelectItem value="moderator">Moderator</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">The default role assigned to new users</p>
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">Analytics & Tracking</h3>
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Enable Usage Analytics</Label>
                                      <p className="text-sm text-gray-500">Collect anonymous usage data to improve the platform</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="space-y-2 mt-2">
                                    <Label htmlFor="analytics-id">Google Analytics ID</Label>
                                    <Input 
                                      id="analytics-id" 
                                      placeholder="UA-XXXXXXXXX-X" 
                                      onChange={handleSettingChange}
                                    />
                                    <p className="text-sm text-gray-500">Your Google Analytics tracking ID</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="pt-4">
                                <Button 
                                  className="bg-reclaim-blue hover:bg-reclaim-blue/90"
                                  onClick={() => handleSaveSettings('General')}
                                >
                                  <Save className="mr-2 h-4 w-4" /> Save Changes
                                </Button>
                              </div>
                            </div>
                          </ScrollArea>
                        </TabsContent>
                        
                        <TabsContent value="appearance" className="h-full mt-0">
                          <ScrollArea className="h-[calc(100vh-240px)]">
                            <div className="space-y-8 pr-4">
                              <div>
                                <h3 className="text-lg font-medium mb-4">Theme Settings</h3>
                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <Label>Color Theme</Label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                      <div 
                                        className="border-2 border-reclaim-blue rounded-md p-2 cursor-pointer hover:bg-gray-50 transition-colors"
                                        onClick={handleSettingChange}
                                      >
                                        <div className="h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md mb-2"></div>
                                        <p className="text-center text-sm font-medium">Default</p>
                                      </div>
                                      <div 
                                        className="border-2 border-gray-200 rounded-md p-2 cursor-pointer hover:bg-gray-50 transition-colors"
                                        onClick={handleSettingChange}
                                      >
                                        <div className="h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-md mb-2"></div>
                                        <p className="text-center text-sm font-medium">Nature</p>
                                      </div>
                                      <div 
                                        className="border-2 border-gray-200 rounded-md p-2 cursor-pointer hover:bg-gray-50 transition-colors"
                                        onClick={handleSettingChange}
                                      >
                                        <div className="h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-md mb-2"></div>
                                        <p className="text-center text-sm font-medium">Vibrant</p>
                                      </div>
                                      <div 
                                        className="border-2 border-gray-200 rounded-md p-2 cursor-pointer hover:bg-gray-50 transition-colors"
                                        onClick={handleSettingChange}
                                      >
                                        <div className="h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-md mb-2"></div>
                                        <p className="text-center text-sm font-medium">Dark</p>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="space-y-2 mt-4">
                                    <Label>Display Mode</Label>
                                    <RadioGroup 
                                      defaultValue="auto" 
                                      className="flex space-x-4"
                                      onValueChange={handleSettingChange}
                                    >
                                      <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="light" id="light" />
                                        <Label htmlFor="light">Light</Label>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="dark" id="dark" />
                                        <Label htmlFor="dark">Dark</Label>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="auto" id="auto" />
                                        <Label htmlFor="auto">System Default</Label>
                                      </div>
                                    </RadioGroup>
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">Branding</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div className="space-y-4">
                                    <div>
                                      <Label className="block mb-2">Logo</Label>
                                      <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                                          <svg className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                          </svg>
                                        </div>
                                        <Button variant="outline" className="w-full" onClick={handleSettingChange}>
                                          <Upload className="mr-2 h-4 w-4" /> Upload Logo
                                        </Button>
                                      </div>
                                      <p className="text-sm text-gray-500 mt-1">Recommended size: 512x512px</p>
                                    </div>
                                    
                                    <div>
                                      <Label className="block mb-2">Favicon</Label>
                                      <div className="flex items-center space-x-4">
                                        <div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">
                                          <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                          </svg>
                                        </div>
                                        <Button variant="outline" className="w-full" onClick={handleSettingChange}>
                                          <Upload className="mr-2 h-4 w-4" /> Upload Favicon
                                        </Button>
                                      </div>
                                      <p className="text-sm text-gray-500 mt-1">Recommended size: 32x32px</p>
                                    </div>
                                  </div>
                                  
                                  <div className="space-y-4">
                                    <div>
                                      <Label className="block mb-2">Hero Image</Label>
                                      <div className="h-32 bg-gray-200 rounded-md flex items-center justify-center mb-2">
                                        <svg className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                      </div>
                                      <Button variant="outline" className="w-full" onClick={handleSettingChange}>
                                        <Upload className="mr-2 h-4 w-4" /> Upload Hero Image
                                      </Button>
                                      <p className="text-sm text-gray-500 mt-1">Recommended size: 1920x1080px</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">Layout Options</h3>
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Show Footer</Label>
                                      <p className="text-sm text-gray-500">Display the footer section on all pages</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Compact Navigation</Label>
                                      <p className="text-sm text-gray-500">Use a more compact navigation menu</p>
                                    </div>
                                    <Switch onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Show Social Media Links</Label>
                                      <p className="text-sm text-gray-500">Display social media links in the footer</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                </div>
                              </div>
                              
                              <div className="pt-4">
                                <Button 
                                  className="bg-reclaim-blue hover:bg-reclaim-blue/90"
                                  onClick={() => handleSaveSettings('Appearance')}
                                >
                                  <Save className="mr-2 h-4 w-4" /> Save Changes
                                </Button>
                              </div>
                            </div>
                          </ScrollArea>
                        </TabsContent>
                        
                        <TabsContent value="security" className="h-full mt-0">
                          <ScrollArea className="h-[calc(100vh-240px)]">
                            <div className="space-y-8 pr-4">
                              <div>
                                <h3 className="text-lg font-medium mb-4">Authentication Settings</h3>
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <div className="flex items-center">
                                        <Label className="text-base">Two-Factor Authentication</Label>
                                        <HoverCard>
                                          <HoverCardTrigger asChild>
                                            <HelpCircle className="h-4 w-4 text-gray-500 ml-2 cursor-help" />
                                          </HoverCardTrigger>
                                          <HoverCardContent className="w-80">
                                            <p className="text-sm">
                                              When enabled, users will be required to set up two-factor authentication for their accounts.
                                            </p>
                                          </HoverCardContent>
                                        </HoverCard>
                                      </div>
                                      <p className="text-sm text-gray-500">Require 2FA for all admin accounts</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Allow Social Logins</Label>
                                      <p className="text-sm text-gray-500">Enable login with Google, Facebook, etc.</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Remember Me Functionality</Label>
                                      <p className="text-sm text-gray-500">Allow users to stay logged in between sessions</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="space-y-2 mt-4">
                                    <Label htmlFor="session-timeout">Session Timeout</Label>
                                    <Select 
                                      defaultValue="60" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="session-timeout">
                                        <SelectValue placeholder="Select timeout period" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="15">15 minutes</SelectItem>
                                        <SelectItem value="30">30 minutes</SelectItem>
                                        <SelectItem value="60">1 hour</SelectItem>
                                        <SelectItem value="120">2 hours</SelectItem>
                                        <SelectItem value="240">4 hours</SelectItem>
                                        <SelectItem value="480">8 hours</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">Time before users are automatically logged out</p>
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">Password Policy</h3>
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Require Uppercase Letters</Label>
                                      <p className="text-sm text-gray-500">At least one uppercase letter required</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Require Numbers</Label>
                                      <p className="text-sm text-gray-500">At least one number required</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Require Special Characters</Label>
                                      <p className="text-sm text-gray-500">At least one special character required</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="space-y-2 mt-4">
                                    <Label htmlFor="min-password-length">Minimum Password Length</Label>
                                    <Select 
                                      defaultValue="8" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="min-password-length">
                                        <SelectValue placeholder="Select minimum length" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="6">6 characters</SelectItem>
                                        <SelectItem value="8">8 characters</SelectItem>
                                        <SelectItem value="10">10 characters</SelectItem>
                                        <SelectItem value="12">12 characters</SelectItem>
                                        <SelectItem value="14">14 characters</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">Minimum allowed password length</p>
                                  </div>
                                  
                                  <div className="space-y-2 mt-4">
                                    <Label htmlFor="password-expiry">Password Expiry</Label>
                                    <Select 
                                      defaultValue="90" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="password-expiry">
                                        <SelectValue placeholder="Select expiry period" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="0">Never</SelectItem>
                                        <SelectItem value="30">30 days</SelectItem>
                                        <SelectItem value="60">60 days</SelectItem>
                                        <SelectItem value="90">90 days</SelectItem>
                                        <SelectItem value="180">180 days</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">How often users need to change their password</p>
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">Security Enhancements</h3>
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <div className="flex items-center">
                                        <Label className="text-base">HTTPS Redirection</Label>
                                        <HoverCard>
                                          <HoverCardTrigger asChild>
                                            <HelpCircle className="h-4 w-4 text-gray-500 ml-2 cursor-help" />
                                          </HoverCardTrigger>
                                          <HoverCardContent className="w-80">
                                            <p className="text-sm">
                                              Force all visitors to use HTTPS instead of HTTP for better security.
                                            </p>
                                          </HoverCardContent>
                                        </HoverCard>
                                      </div>
                                      <p className="text-sm text-gray-500">Redirect all HTTP traffic to HTTPS</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Account Lockout</Label>
                                      <p className="text-sm text-gray-500">Lock accounts after multiple failed login attempts</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="space-y-2 mt-4">
                                    <Label htmlFor="max-login-attempts">Max Login Attempts</Label>
                                    <Select 
                                      defaultValue="5" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="max-login-attempts">
                                        <SelectValue placeholder="Select maximum attempts" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="3">3 attempts</SelectItem>
                                        <SelectItem value="5">5 attempts</SelectItem>
                                        <SelectItem value="7">7 attempts</SelectItem>
                                        <SelectItem value="10">10 attempts</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">Number of failed attempts before account lockout</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="pt-4">
                                <Button 
                                  className="bg-reclaim-blue hover:bg-reclaim-blue/90"
                                  onClick={() => handleSaveSettings('Security')}
                                >
                                  <Save className="mr-2 h-4 w-4" /> Save Changes
                                </Button>
                              </div>
                            </div>
                          </ScrollArea>
                        </TabsContent>
                        
                        <TabsContent value="notifications" className="h-full mt-0">
                          <ScrollArea className="h-[calc(100vh-240px)]">
                            <div className="space-y-8 pr-4">
                              <div>
                                <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="notification-email">Notification Email</Label>
                                    <Input 
                                      id="notification-email" 
                                      defaultValue="admin@reclaimrecovery.com" 
                                      onChange={handleSettingChange}
                                    />
                                    <p className="text-sm text-gray-500">All system notifications will be sent to this email</p>
                                  </div>
                                  
                                  <div className="space-y-4 mt-4">
                                    <div className="flex items-center justify-between py-2 border-b">
                                      <div>
                                        <p className="font-medium">New User Registrations</p>
                                        <p className="text-sm text-gray-500">Receive an email when a new user registers</p>
                                      </div>
                                      <Switch defaultChecked onChange={handleSettingChange} />
                                    </div>
                                    
                                    <div className="flex items-center justify-between py-2 border-b">
                                      <div>
                                        <p className="font-medium">Support Requests</p>
                                        <p className="text-sm text-gray-500">Receive an email for new support requests</p>
                                      </div>
                                      <Switch defaultChecked onChange={handleSettingChange} />
                                    </div>
                                    
                                    <div className="flex items-center justify-between py-2 border-b">
                                      <div>
                                        <p className="font-medium">Content Reports</p>
                                        <p className="text-sm text-gray-500">Receive an email when content is reported</p>
                                      </div>
                                      <Switch defaultChecked onChange={handleSettingChange} />
                                    </div>
                                    
                                    <div className="flex items-center justify-between py-2 border-b">
                                      <div>
                                        <p className="font-medium">Security Alerts</p>
                                        <p className="text-sm text-gray-500">Receive an email for security-related events</p>
                                      </div>
                                      <Switch defaultChecked onChange={handleSettingChange} />
                                    </div>
                                    
                                    <div className="flex items-center justify-between py-2">
                                      <div>
                                        <p className="font-medium">System Updates</p>
                                        <p className="text-sm text-gray-500">Receive an email when system updates are available</p>
                                      </div>
                                      <Switch defaultChecked onChange={handleSettingChange} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">User Notifications</h3>
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Welcome Email</Label>
                                      <p className="text-sm text-gray-500">Send a welcome email to new users</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Daily Check-in Reminders</Label>
                                      <p className="text-sm text-gray-500">Send daily reminders for check-ins</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Achievement Notifications</Label>
                                      <p className="text-sm text-gray-500">Notify users when they reach milestones</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Community Updates</Label>
                                      <p className="text-sm text-gray-500">Send updates about community activities</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">Notification Delivery</h3>
                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <Label>Notification Methods</Label>
                                    <div className="flex items-center space-x-2 py-2 border-b">
                                      <Checkbox id="notify-email" defaultChecked onChange={handleSettingChange} />
                                      <Label htmlFor="notify-email" className="text-base font-normal">Email</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 py-2 border-b">
                                      <Checkbox id="notify-browser" defaultChecked onChange={handleSettingChange} />
                                      <Label htmlFor="notify-browser" className="text-base font-normal">Browser Notifications</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 py-2 border-b">
                                      <Checkbox id="notify-sms" onChange={handleSettingChange} />
                                      <Label htmlFor="notify-sms" className="text-base font-normal">SMS</Label>
                                    </div>
                                    <div className="flex items-center space-x-2 py-2">
                                      <Checkbox id="notify-app" defaultChecked onChange={handleSettingChange} />
                                      <Label htmlFor="notify-app" className="text-base font-normal">In-App Notifications</Label>
                                    </div>
                                  </div>
                                  
                                  <div className="space-y-2 mt-4">
                                    <Label htmlFor="email-frequency">Email Frequency</Label>
                                    <Select 
                                      defaultValue="realtime" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="email-frequency">
                                        <SelectValue placeholder="Select frequency" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="realtime">Real-time</SelectItem>
                                        <SelectItem value="hourly">Hourly Digest</SelectItem>
                                        <SelectItem value="daily">Daily Digest</SelectItem>
                                        <SelectItem value="weekly">Weekly Digest</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">How often to send email notifications</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="pt-4">
                                <Button 
                                  className="bg-reclaim-blue hover:bg-reclaim-blue/90"
                                  onClick={() => handleSaveSettings('Notification')}
                                >
                                  <Save className="mr-2 h-4 w-4" /> Save Changes
                                </Button>
                              </div>
                            </div>
                          </ScrollArea>
                        </TabsContent>

                        <TabsContent value="integrations" className="h-full mt-0">
                          <ScrollArea className="h-[calc(100vh-240px)]">
                            <div className="space-y-8 pr-4">
                              <div>
                                <h3 className="text-lg font-medium mb-4">Third-Party Services</h3>
                                <div className="space-y-6">
                                  <div className="border rounded-md p-4">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                          <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                          </svg>
                                        </div>
                                        <div>
                                          <h4 className="font-medium">Google Analytics</h4>
                                          <p className="text-sm text-gray-500">Track user interactions and page views</p>
                                        </div>
                                      </div>
                                      <div className="flex items-center">
                                        <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full mr-3">Connected</span>
                                        <Button variant="outline" size="sm" onClick={handleSettingChange}>Configure</Button>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="border rounded-md p-4">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                          <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                          </svg>
                                        </div>
                                        <div>
                                          <h4 className="font-medium">Facebook</h4>
                                          <p className="text-sm text-gray-500">Facebook login and social sharing</p>
                                        </div>
                                      </div>
                                      <Button variant="outline" size="sm" onClick={handleSettingChange}>Connect</Button>
                                    </div>
                                  </div>
                                  
                                  <div className="border rounded-md p-4">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                          <svg className="h-6 w-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M5.645 8.652c-.562.223-1.098.47-1.608.742l.813 1.583c.445-.228.916-.434 1.435-.618l-.64-1.707zm12.375 2.033l.813-1.583c-.51-.272-1.047-.519-1.608-.742l-.64 1.707c.52.184.99.39 1.435.618zM12 16.66c2.87 0 5.22-2.135 5.22-4.763 0-2.628-2.35-4.763-5.22-4.763s-5.22 2.135-5.22 4.763c0 2.628 2.35 4.763 5.22 4.763zm0-1.763c-1.938 0-3.513-1.344-3.513-3s1.575-3 3.513-3c1.938 0 3.513 1.344 3.513 3s-1.575 3-3.513 3z" />
                                          </svg>
                                        </div>
                                        <div>
                                          <h4 className="font-medium">Slack</h4>
                                          <p className="text-sm text-gray-500">Receive notifications in your Slack channels</p>
                                        </div>
                                      </div>
                                      <Button variant="outline" size="sm" onClick={handleSettingChange}>Connect</Button>
                                    </div>
                                  </div>
                                  
                                  <div className="border rounded-md p-4">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                          <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                          </svg>
                                        </div>
                                        <div>
                                          <h4 className="font-medium">Twitter</h4>
                                          <p className="text-sm text-gray-500">Twitter login and social sharing</p>
                                        </div>
                                      </div>
                                      <Button variant="outline" size="sm" onClick={handleSettingChange}>Connect</Button>
                                    </div>
                                  </div>
                                  
                                  <div className="border rounded-md p-4">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                          <CreditCard className="h-6 w-6 text-red-600" />
                                        </div>
                                        <div>
                                          <h4 className="font-medium">Stripe</h4>
                                          <p className="text-sm text-gray-500">Process payments and subscriptions</p>
                                        </div>
                                      </div>
                                      <Button variant="outline" size="sm" onClick={handleSettingChange}>Connect</Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">API Settings</h3>
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Enable API Access</Label>
                                      <p className="text-sm text-gray-500">Allow external applications to access data via API</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="p-4 bg-gray-50 rounded-md">
                                    <div className="flex items-center justify-between mb-2">
                                      <h4 className="font-medium">API Key</h4>
                                      <Button variant="outline" size="sm" onClick={handleSettingChange}>
                                        <RefreshCw className="mr-2 h-4 w-4" /> Regenerate
                                      </Button>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <Input 
                                        value="sk_test_51LzUxH2eZvKYlo2CxUw6EsSyylkWdJ... (hidden)" 
                                        readOnly 
                                        className="bg-gray-100"
                                      />
                                      <Button variant="ghost" onClick={handleSettingChange}>
                                        <Eye className="h-4 w-4" />
                                      </Button>
                                      <Button variant="ghost" onClick={handleSettingChange}>
                                        <Copy className="h-4 w-4" />
                                      </Button>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2">
                                      This key provides full access to your API. Keep it secure.
                                    </p>
                                  </div>
                                  
                                  <div className="space-y-4 mt-4">
                                    <h4 className="font-medium">API Rate Limiting</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                        <Label htmlFor="rate-limit">Requests Per Minute</Label>
                                        <Select 
                                          defaultValue="100" 
                                          onValueChange={handleSettingChange}
                                        >
                                          <SelectTrigger id="rate-limit">
                                            <SelectValue placeholder="Select limit" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="60">60 requests</SelectItem>
                                            <SelectItem value="100">100 requests</SelectItem>
                                            <SelectItem value="500">500 requests</SelectItem>
                                            <SelectItem value="1000">1000 requests</SelectItem>
                                            <SelectItem value="unlimited">Unlimited</SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                      
                                      <div className="space-y-2">
                                        <Label htmlFor="rate-window">Rate Limit Window</Label>
                                        <Select 
                                          defaultValue="minute" 
                                          onValueChange={handleSettingChange}
                                        >
                                          <SelectTrigger id="rate-window">
                                            <SelectValue placeholder="Select window" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="second">Per Second</SelectItem>
                                            <SelectItem value="minute">Per Minute</SelectItem>
                                            <SelectItem value="hour">Per Hour</SelectItem>
                                            <SelectItem value="day">Per Day</SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="pt-4">
                                <Button 
                                  className="bg-reclaim-blue hover:bg-reclaim-blue/90"
                                  onClick={() => handleSaveSettings('Integration')}
                                >
                                  <Save className="mr-2 h-4 w-4" /> Save Changes
                                </Button>
                              </div>
                            </div>
                          </ScrollArea>
                        </TabsContent>
                        
                        <TabsContent value="localization" className="h-full mt-0">
                          <ScrollArea className="h-[calc(100vh-240px)]">
                            <div className="space-y-8 pr-4">
                              <div>
                                <h3 className="text-lg font-medium mb-4">Language Settings</h3>
                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="default-language">Default Language</Label>
                                    <Select 
                                      defaultValue="en-US" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="default-language">
                                        <SelectValue placeholder="Select language" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="en-US">English (US)</SelectItem>
                                        <SelectItem value="en-GB">English (UK)</SelectItem>
                                        <SelectItem value="es-ES">Spanish</SelectItem>
                                        <SelectItem value="fr-FR">French</SelectItem>
                                        <SelectItem value="de-DE">German</SelectItem>
                                        <SelectItem value="zh-CN">Chinese (Simplified)</SelectItem>
                                        <SelectItem value="ja-JP">Japanese</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">Default language for new users</p>
                                  </div>
                                  
                                  <div className="flex items-center justify-between mt-4">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">User Language Selection</Label>
                                      <p className="text-sm text-gray-500">Allow users to select their preferred language</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Auto-Detect User Language</Label>
                                      <p className="text-sm text-gray-500">Detect language based on browser settings</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">Regional Settings</h3>
                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="default-timezone">Default Timezone</Label>
                                    <Select 
                                      defaultValue="America/New_York" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="default-timezone">
                                        <SelectValue placeholder="Select timezone" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="America/New_York">Eastern Time (US & Canada)</SelectItem>
                                        <SelectItem value="America/Chicago">Central Time (US & Canada)</SelectItem>
                                        <SelectItem value="America/Denver">Mountain Time (US & Canada)</SelectItem>
                                        <SelectItem value="America/Los_Angeles">Pacific Time (US & Canada)</SelectItem>
                                        <SelectItem value="Europe/London">London</SelectItem>
                                        <SelectItem value="Europe/Paris">Paris</SelectItem>
                                        <SelectItem value="Asia/Tokyo">Tokyo</SelectItem>
                                        <SelectItem value="Australia/Sydney">Sydney</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">Default timezone for dates and times</p>
                                  </div>
                                  
                                  <div className="space-y-2 mt-4">
                                    <Label htmlFor="date-format">Date Format</Label>
                                    <Select 
                                      defaultValue="MM/DD/YYYY" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="date-format">
                                        <SelectValue placeholder="Select date format" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                                        <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                                        <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                                        <SelectItem value="DD.MM.YYYY">DD.MM.YYYY</SelectItem>
                                        <SelectItem value="MMMM D, YYYY">MMMM D, YYYY</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">How dates are formatted across the platform</p>
                                  </div>
                                  
                                  <div className="space-y-2 mt-4">
                                    <Label htmlFor="time-format">Time Format</Label>
                                    <Select 
                                      defaultValue="12h" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="time-format">
                                        <SelectValue placeholder="Select time format" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                                        <SelectItem value="24h">24-hour</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">How time is displayed across the platform</p>
                                  </div>
                                  
                                  <div className="space-y-2 mt-4">
                                    <Label htmlFor="currency">Default Currency</Label>
                                    <Select 
                                      defaultValue="USD" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="currency">
                                        <SelectValue placeholder="Select currency" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="USD">US Dollar ($)</SelectItem>
                                        <SelectItem value="EUR">Euro (€)</SelectItem>
                                        <SelectItem value="GBP">British Pound (£)</SelectItem>
                                        <SelectItem value="JPY">Japanese Yen (¥)</SelectItem>
                                        <SelectItem value="AUD">Australian Dollar (A$)</SelectItem>
                                        <SelectItem value="CAD">Canadian Dollar (C$)</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">Default currency for payments and donations</p>
                                  </div>
                                  
                                  <div className="flex items-center justify-between mt-4">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">User Timezone Selection</Label>
                                      <p className="text-sm text-gray-500">Allow users to select their preferred timezone</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                </div>
                              </div>
                              
                              <div className="pt-4">
                                <Button 
                                  className="bg-reclaim-blue hover:bg-reclaim-blue/90"
                                  onClick={() => handleSaveSettings('Localization')}
                                >
                                  <Save className="mr-2 h-4 w-4" /> Save Changes
                                </Button>
                              </div>
                            </div>
                          </ScrollArea>
                        </TabsContent>
                        
                        <TabsContent value="privacy" className="h-full mt-0">
                          <ScrollArea className="h-[calc(100vh-240px)]">
                            <div className="space-y-8 pr-4">
                              <div>
                                <h3 className="text-lg font-medium mb-4">Privacy Policy</h3>
                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="privacy-policy">Privacy Policy Content</Label>
                                    <Textarea 
                                      id="privacy-policy" 
                                      className="min-h-[200px]"
                                      defaultValue="Our privacy policy outlines how we collect, use, and protect your personal information..." 
                                      onChange={handleSettingChange}
                                    />
                                    <p className="text-sm text-gray-500">Your platform's privacy policy text</p>
                                  </div>
                                  
                                  <div className="flex items-center justify-between mt-4">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Require Privacy Policy Acceptance</Label>
                                      <p className="text-sm text-gray-500">Users must accept privacy policy during registration</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="space-y-2 mt-4">
                                    <Label htmlFor="last-updated">Last Updated Date</Label>
                                    <Input 
                                      id="last-updated" 
                                      type="date"
                                      defaultValue="2023-10-15" 
                                      onChange={handleSettingChange}
                                    />
                                    <p className="text-sm text-gray-500">When your privacy policy was last updated</p>
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">Cookie Settings</h3>
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Show Cookie Consent Banner</Label>
                                      <p className="text-sm text-gray-500">Display a cookie consent notice to new visitors</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="space-y-2 mt-4">
                                    <Label>Cookie Categories</Label>
                                    <div className="flex items-center space-x-2 py-2 border-b">
                                      <Checkbox id="cookies-essential" defaultChecked disabled />
                                      <div>
                                        <Label htmlFor="cookies-essential" className="text-base font-normal">Essential</Label>
                                        <p className="text-xs text-gray-500">Required for basic functionality</p>
                                      </div>
                                    </div>
                                    <div className="flex items-center space-x-2 py-2 border-b">
                                      <Checkbox id="cookies-analytics" defaultChecked onChange={handleSettingChange} />
                                      <div>
                                        <Label htmlFor="cookies-analytics" className="text-base font-normal">Analytics</Label>
                                        <p className="text-xs text-gray-500">Track visitor usage patterns</p>
                                      </div>
                                    </div>
                                    <div className="flex items-center space-x-2 py-2 border-b">
                                      <Checkbox id="cookies-marketing" onChange={handleSettingChange} />
                                      <div>
                                        <Label htmlFor="cookies-marketing" className="text-base font-normal">Marketing</Label>
                                        <p className="text-xs text-gray-500">Used for advertising purposes</p>
                                      </div>
                                    </div>
                                    <div className="flex items-center space-x-2 py-2">
                                      <Checkbox id="cookies-preferences" defaultChecked onChange={handleSettingChange} />
                                      <div>
                                        <Label htmlFor="cookies-preferences" className="text-base font-normal">Preferences</Label>
                                        <p className="text-xs text-gray-500">Remember user preferences</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">Data Retention</h3>
                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="user-data-retention">User Account Data</Label>
                                    <Select 
                                      defaultValue="730" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="user-data-retention">
                                        <SelectValue placeholder="Select retention period" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="30">30 days after deletion</SelectItem>
                                        <SelectItem value="90">90 days after deletion</SelectItem>
                                        <SelectItem value="180">180 days after deletion</SelectItem>
                                        <SelectItem value="365">1 year after deletion</SelectItem>
                                        <SelectItem value="730">2 years after deletion</SelectItem>
                                        <SelectItem value="0">Indefinitely</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">How long to keep user data after account deletion</p>
                                  </div>
                                  
                                  <div className="space-y-2 mt-4">
                                    <Label htmlFor="logs-retention">System Logs</Label>
                                    <Select 
                                      defaultValue="90" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="logs-retention">
                                        <SelectValue placeholder="Select retention period" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="7">7 days</SelectItem>
                                        <SelectItem value="30">30 days</SelectItem>
                                        <SelectItem value="90">90 days</SelectItem>
                                        <SelectItem value="180">180 days</SelectItem>
                                        <SelectItem value="365">1 year</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">How long to keep system logs</p>
                                  </div>
                                  
                                  <div className="flex items-center justify-between mt-4">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Data Export Option</Label>
                                      <p className="text-sm text-gray-500">Allow users to export their personal data</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Right to Be Forgotten</Label>
                                      <p className="text-sm text-gray-500">Allow users to request complete data deletion</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                </div>
                              </div>
                              
                              <div className="pt-4">
                                <Button 
                                  className="bg-reclaim-blue hover:bg-reclaim-blue/90"
                                  onClick={() => handleSaveSettings('Privacy')}
                                >
                                  <Save className="mr-2 h-4 w-4" /> Save Changes
                                </Button>
                              </div>
                            </div>
                          </ScrollArea>
                        </TabsContent>
                        
                        <TabsContent value="backup" className="h-full mt-0">
                          <ScrollArea className="h-[calc(100vh-240px)]">
                            <div className="space-y-8 pr-4">
                              <div>
                                <h3 className="text-lg font-medium mb-4">Backup Configuration</h3>
                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Automatic Backups</Label>
                                      <p className="text-sm text-gray-500">Enable scheduled automatic backups</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="space-y-2 mt-4">
                                    <Label htmlFor="backup-frequency">Backup Frequency</Label>
                                    <Select 
                                      defaultValue="daily" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="backup-frequency">
                                        <SelectValue placeholder="Select frequency" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="hourly">Hourly</SelectItem>
                                        <SelectItem value="daily">Daily</SelectItem>
                                        <SelectItem value="weekly">Weekly</SelectItem>
                                        <SelectItem value="monthly">Monthly</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">How often to perform automatic backups</p>
                                  </div>
                                  
                                  <div className="space-y-2 mt-4">
                                    <Label htmlFor="backup-retention">Backup Retention</Label>
                                    <Select 
                                      defaultValue="30" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="backup-retention">
                                        <SelectValue placeholder="Select retention period" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="7">7 days</SelectItem>
                                        <SelectItem value="14">14 days</SelectItem>
                                        <SelectItem value="30">30 days</SelectItem>
                                        <SelectItem value="90">90 days</SelectItem>
                                        <SelectItem value="365">1 year</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">How long to keep automatic backups</p>
                                  </div>
                                  
                                  <div className="flex items-center justify-between mt-4">
                                    <div className="space-y-0.5">
                                      <Label className="text-base">Include File Uploads</Label>
                                      <p className="text-sm text-gray-500">Include user-uploaded files in backups</p>
                                    </div>
                                    <Switch defaultChecked onChange={handleSettingChange} />
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">Storage Location</h3>
                                <div className="space-y-4">
                                  <div>
                                    <RadioGroup 
                                      defaultValue="cloud" 
                                      className="space-y-4"
                                      onValueChange={handleSettingChange}
                                    >
                                      <div className="flex items-start space-x-2 border p-4 rounded-md">
                                        <RadioGroupItem value="local" id="local" className="mt-1" />
                                        <div>
                                          <Label htmlFor="local" className="text-base">Local Storage</Label>
                                          <p className="text-sm text-gray-500">Store backups on the same server as the application</p>
                                        </div>
                                      </div>
                                      <div className="flex items-start space-x-2 border p-4 rounded-md">
                                        <RadioGroupItem value="cloud" id="cloud" className="mt-1" />
                                        <div>
                                          <Label htmlFor="cloud" className="text-base">Cloud Storage</Label>
                                          <p className="text-sm text-gray-500">Store backups in a secure cloud storage service</p>
                                        </div>
                                      </div>
                                      <div className="flex items-start space-x-2 border p-4 rounded-md">
                                        <RadioGroupItem value="both" id="both" className="mt-1" />
                                        <div>
                                          <Label htmlFor="both" className="text-base">Both</Label>
                                          <p className="text-sm text-gray-500">Store backups both locally and in the cloud</p>
                                        </div>
                                      </div>
                                    </RadioGroup>
                                  </div>
                                  
                                  <div className="space-y-2 mt-4">
                                    <Label htmlFor="cloud-provider">Cloud Storage Provider</Label>
                                    <Select 
                                      defaultValue="aws" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="cloud-provider">
                                        <SelectValue placeholder="Select provider" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="aws">Amazon S3</SelectItem>
                                        <SelectItem value="gcp">Google Cloud Storage</SelectItem>
                                        <SelectItem value="azure">Microsoft Azure</SelectItem>
                                        <SelectItem value="dropbox">Dropbox</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">Where to store cloud backups</p>
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">Manual Backup & Restore</h3>
                                <div className="space-y-4">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Button onClick={handleSettingChange}>
                                      <Download className="mr-2 h-4 w-4" /> Create Manual Backup
                                    </Button>
                                    <Button variant="outline" onClick={handleSettingChange}>
                                      <Upload className="mr-2 h-4 w-4" /> Restore from Backup
                                    </Button>
                                  </div>
                                  
                                  <div className="p-4 bg-gray-50 rounded-md mt-4">
                                    <h4 className="font-medium mb-2">Recent Backups</h4>
                                    <div className="space-y-3">
                                      <div className="flex items-center justify-between py-2 border-b">
                                        <div>
                                          <p className="font-medium">Daily Backup</p>
                                          <p className="text-xs text-gray-500">Oct 21, 2023 - 03:15 AM</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                          <Button variant="ghost" size="sm">
                                            <Download className="h-4 w-4" />
                                          </Button>
                                          <Button variant="ghost" size="sm">
                                            <RefreshCw className="h-4 w-4" />
                                          </Button>
                                        </div>
                                      </div>
                                      <div className="flex items-center justify-between py-2 border-b">
                                        <div>
                                          <p className="font-medium">Daily Backup</p>
                                          <p className="text-xs text-gray-500">Oct 20, 2023 - 03:15 AM</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                          <Button variant="ghost" size="sm">
                                            <Download className="h-4 w-4" />
                                          </Button>
                                          <Button variant="ghost" size="sm">
                                            <RefreshCw className="h-4 w-4" />
                                          </Button>
                                        </div>
                                      </div>
                                      <div className="flex items-center justify-between py-2">
                                        <div>
                                          <p className="font-medium">Manual Backup</p>
                                          <p className="text-xs text-gray-500">Oct 19, 2023 - 11:45 AM</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                          <Button variant="ghost" size="sm">
                                            <Download className="h-4 w-4" />
                                          </Button>
                                          <Button variant="ghost" size="sm">
                                            <RefreshCw className="h-4 w-4" />
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="pt-4">
                                <Button 
                                  className="bg-reclaim-blue hover:bg-reclaim-blue/90"
                                  onClick={() => handleSaveSettings('Backup')}
                                >
                                  <Save className="mr-2 h-4 w-4" /> Save Changes
                                </Button>
                              </div>
                            </div>
                          </ScrollArea>
                        </TabsContent>
                        
                        <TabsContent value="advanced" className="h-full mt-0">
                          <ScrollArea className="h-[calc(100vh-240px)]">
                            <div className="space-y-8 pr-4">
                              <div className="p-4 bg-amber-50 border border-amber-200 rounded-md">
                                <div className="flex items-start space-x-3">
                                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                                  <div>
                                    <h4 className="font-medium text-amber-800">Caution: Advanced Settings</h4>
                                    <p className="text-sm text-amber-700 mt-1">
                                      Changes in this section can significantly impact your platform's functionality. 
                                      Please proceed with caution and make sure you understand the implications of any changes.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">System Maintenance</h3>
                                <div className="space-y-4">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Button variant="outline" onClick={handleSettingChange}>
                                      <RefreshCw className="mr-2 h-4 w-4" /> Clear Cache
                                    </Button>
                                    <Button variant="outline" onClick={handleSettingChange}>
                                      <Database className="mr-2 h-4 w-4" /> Optimize Database
                                    </Button>
                                  </div>
                                  
                                  <div className="flex items-center justify-between mt-4">
                                    <div className="space-y-0.5">
                                      <div className="flex items-center">
                                        <Label className="text-base">Debug Mode</Label>
                                        <HoverCard>
                                          <HoverCardTrigger asChild>
                                            <HelpCircle className="h-4 w-4 text-gray-500 ml-2 cursor-help" />
                                          </HoverCardTrigger>
                                          <HoverCardContent className="w-80">
                                            <p className="text-sm">
                                              When enabled, detailed error messages and logs will be shown. This should only be enabled temporarily for troubleshooting purposes.
                                            </p>
                                          </HoverCardContent>
                                        </HoverCard>
                                      </div>
                                      <p className="text-sm text-gray-500">Show detailed error messages and logs</p>
                                    </div>
                                    <Switch onChange={handleSettingChange} />
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                      <div className="flex items-center">
                                        <Label className="text-base">Disable Unused Features</Label>
                                        <HoverCard>
                                          <HoverCardTrigger asChild>
                                            <HelpCircle className="h-4 w-4 text-gray-500 ml-2 cursor-help" />
                                          </HoverCardTrigger>
                                          <HoverCardContent className="w-80">
                                            <p className="text-sm">
                                              Automatically disable features that haven't been used in a long time to improve performance.
                                            </p>
                                          </HoverCardContent>
                                        </HoverCard>
                                      </div>
                                      <p className="text-sm text-gray-500">Improves performance by disabling unused features</p>
                                    </div>
                                    <Switch onChange={handleSettingChange} />
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">Environment Configuration</h3>
                                <div className="space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="env-mode">Environment Mode</Label>
                                    <Select 
                                      defaultValue="production" 
                                      onValueChange={handleSettingChange}
                                    >
                                      <SelectTrigger id="env-mode">
                                        <SelectValue placeholder="Select environment" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="development">Development</SelectItem>
                                        <SelectItem value="staging">Staging</SelectItem>
                                        <SelectItem value="production">Production</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-sm text-gray-500">Current environment configuration</p>
                                  </div>
                                  
                                  <div className="p-4 bg-gray-50 rounded-md mt-4">
                                    <h4 className="font-medium mb-2">Environment Variables</h4>
                                    <div className="space-y-3">
                                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <Input placeholder="Variable name" className="sm:col-span-1" />
                                        <Input placeholder="Value" className="sm:col-span-2" />
                                      </div>
                                      <Button variant="outline" className="w-full">
                                        <PlusCircle className="mr-2 h-4 w-4" /> Add Environment Variable
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4">Data Migration</h3>
                                <div className="space-y-4">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Button variant="outline" onClick={handleSettingChange}>
                                      <Download className="mr-2 h-4 w-4" /> Export All Data
                                    </Button>
                                    <Button variant="outline" onClick={handleSettingChange}>
                                      <Upload className="mr-2 h-4 w-4" /> Import Data
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              
                              <Separator />
                              
                              <div>
                                <h3 className="text-lg font-medium mb-4 text-red-600">Danger Zone</h3>
                                <div className="space-y-4 p-4 border border-red-200 rounded-md bg-red-50">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <p className="font-medium text-red-700">Reset Platform</p>
                                      <p className="text-sm text-red-600">Reset platform to default settings</p>
                                    </div>
                                    <Button variant="outline" className="border-red-300 text-red-600" onClick={handleSettingChange}>
                                      Reset
                                    </Button>
                                  </div>
                                  
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <p className="font-medium text-red-700">Purge All Content</p>
                                      <p className="text-sm text-red-600">Delete all user-generated content</p>
                                    </div>
                                    <Dialog>
                                      <DialogTrigger asChild>
                                        <Button variant="outline" className="border-red-300 text-red-600">Purge</Button>
                                      </DialogTrigger>
                                      <DialogContent>
                                        <DialogHeader>
                                          <DialogTitle>Are you absolutely sure?</DialogTitle>
                                          <DialogDescription>
                                            This action cannot be undone. It will permanently delete all user-generated content
                                            and remove all data associated with it from our servers.
                                          </DialogDescription>
                                        </DialogHeader>
                                        <div className="space-y-4 py-4">
                                          <div className="flex items-center space-x-2">
                                            <Checkbox id="confirm-purge" />
                                            <Label htmlFor="confirm-purge">
                                              I understand this action cannot be undone
                                            </Label>
                                          </div>
                                          <Input placeholder="Type 'PURGE' to confirm" className="mt-2" />
                                        </div>
                                        <div className="flex justify-end space-x-2">
                                          <Button variant="outline">Cancel</Button>
                                          <Button variant="destructive">I understand, purge all content</Button>
                                        </div>
                                      </DialogContent>
                                    </Dialog>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="pt-4">
                                <Button 
                                  className="bg-reclaim-blue hover:bg-reclaim-blue/90"
                                  onClick={() => handleSaveSettings('Advanced')}
                                >
                                  <Save className="mr-2 h-4 w-4" /> Save Changes
                                </Button>
                              </div>
                            </div>
                          </ScrollArea>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;

