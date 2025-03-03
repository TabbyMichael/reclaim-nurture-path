
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
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const Admin = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
      <div className={`flex-1 transition-all duration-300 ${
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
        <main className="p-6">
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
              <Card>
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                  <CardDescription>
                    Configure application-wide settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="general">
                    <TabsList className="mb-4">
                      <TabsTrigger value="general">General</TabsTrigger>
                      <TabsTrigger value="security">Security</TabsTrigger>
                      <TabsTrigger value="notifications">Notifications</TabsTrigger>
                      <TabsTrigger value="integrations">Integrations</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="general">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label htmlFor="site-name" className="block text-sm font-medium">
                            Site Name
                          </label>
                          <Input id="site-name" defaultValue="Reclaim Recovery Platform" />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="site-description" className="block text-sm font-medium">
                            Site Description
                          </label>
                          <Textarea 
                            id="site-description" 
                            defaultValue="A platform dedicated to helping individuals on their recovery journey"
                            rows={3}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="contact-email" className="block text-sm font-medium">
                            Contact Email
                          </label>
                          <Input id="contact-email" defaultValue="support@reclaim.com" />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="block text-sm font-medium">
                            Maintenance Mode
                          </label>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              id="maintenance-mode" 
                              className="rounded border-gray-300"
                            />
                            <label htmlFor="maintenance-mode" className="text-sm text-gray-700">
                              Enable maintenance mode
                            </label>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            When enabled, the site will display a maintenance message to all users.
                          </p>
                        </div>
                        
                        <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90">
                          Save Changes
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="security">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium">
                            Two-Factor Authentication
                          </label>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              id="enable-2fa" 
                              className="rounded border-gray-300"
                              defaultChecked
                            />
                            <label htmlFor="enable-2fa" className="text-sm text-gray-700">
                              Require 2FA for admin accounts
                            </label>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="block text-sm font-medium">
                            Session Timeout
                          </label>
                          <select className="w-full rounded-md border border-gray-300 p-2">
                            <option>15 minutes</option>
                            <option>30 minutes</option>
                            <option selected>1 hour</option>
                            <option>4 hours</option>
                            <option>8 hours</option>
                          </select>
                          <p className="text-xs text-gray-500 mt-1">
                            Amount of inactive time before administrators are logged out.
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="block text-sm font-medium">
                            Password Policy
                          </label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <input 
                                type="checkbox" 
                                id="require-uppercase" 
                                className="rounded border-gray-300"
                                defaultChecked
                              />
                              <label htmlFor="require-uppercase" className="text-sm text-gray-700">
                                Require at least one uppercase letter
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input 
                                type="checkbox" 
                                id="require-number" 
                                className="rounded border-gray-300"
                                defaultChecked
                              />
                              <label htmlFor="require-number" className="text-sm text-gray-700">
                                Require at least one number
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input 
                                type="checkbox" 
                                id="require-special" 
                                className="rounded border-gray-300"
                                defaultChecked
                              />
                              <label htmlFor="require-special" className="text-sm text-gray-700">
                                Require at least one special character
                              </label>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90">
                          Save Security Settings
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="notifications">
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium">
                            Email Notifications
                          </label>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between py-2 border-b">
                              <div>
                                <p className="font-medium">New User Registrations</p>
                                <p className="text-sm text-gray-500">Receive an email when a new user registers</p>
                              </div>
                              <input 
                                type="checkbox" 
                                className="rounded border-gray-300"
                                defaultChecked
                              />
                            </div>
                            <div className="flex items-center justify-between py-2 border-b">
                              <div>
                                <p className="font-medium">Support Requests</p>
                                <p className="text-sm text-gray-500">Receive an email for new support requests</p>
                              </div>
                              <input 
                                type="checkbox" 
                                className="rounded border-gray-300"
                                defaultChecked
                              />
                            </div>
                            <div className="flex items-center justify-between py-2 border-b">
                              <div>
                                <p className="font-medium">Content Reports</p>
                                <p className="text-sm text-gray-500">Receive an email when content is reported</p>
                              </div>
                              <input 
                                type="checkbox" 
                                className="rounded border-gray-300"
                                defaultChecked
                              />
                            </div>
                            <div className="flex items-center justify-between py-2">
                              <div>
                                <p className="font-medium">System Alerts</p>
                                <p className="text-sm text-gray-500">Receive an email for system-level alerts</p>
                              </div>
                              <input 
                                type="checkbox" 
                                className="rounded border-gray-300"
                                defaultChecked
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="notification-email" className="block text-sm font-medium">
                            Notification Email
                          </label>
                          <Input id="notification-email" defaultValue="admin@reclaim.com" />
                          <p className="text-xs text-gray-500 mt-1">
                            All admin notifications will be sent to this email address.
                          </p>
                        </div>
                        
                        <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90">
                          Save Notification Settings
                        </Button>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="integrations">
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
                              <Button variant="outline" size="sm">Configure</Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border rounded-md p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="h-6 w-6 text-purple-600" fill="currentColor">
                                  <path d="M5.645 8.652c-.562.223-1.098.47-1.608.742l.813 1.583c.445-.228.916-.434 1.435-.618l-.64-1.707zm12.375 2.033l.813-1.583c-.51-.272-1.047-.519-1.608-.742l-.64 1.707c.52.184.99.39 1.435.618zM12 16.66c2.87 0 5.22-2.135 5.22-4.763 0-2.628-2.35-4.763-5.22-4.763s-5.22 2.135-5.22 4.763c0 2.628 2.35 4.763 5.22 4.763zm0-1.763c-1.938 0-3.513-1.344-3.513-3s1.575-3 3.513-3c1.938 0 3.513 1.344 3.513 3s-1.575 3-3.513 3z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium">Slack</h4>
                                <p className="text-sm text-gray-500">Receive notifications in your Slack channels</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">Connect</Button>
                          </div>
                        </div>
                        
                        <div className="border rounded-md p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <svg viewBox="0 0 24 24" className="h-6 w-6 text-green-600" fill="currentColor">
                                  <path d="M12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.49 11.98l-1.55.016c-.403.004-.341 1.974.135 1.969l1.388-.016c-.139 1.28-.562 1.836-1.189 2.138-.579.277-1.272.306-1.897.207-.081-.336-.216-.6-.424-.734-.17-.11-.376-.125-.582-.148.062-.26.015-.557-.247-.831.56.036 1.115-.024 1.646-.223 1.166-.438 1.49-1.638 1.694-2.479-.213.02-.426.043-.639.065.338-.591.526-1.277.519-1.987.195-.158.377-.326.547-.505-.484.117-.963.243-1.443.368.213-.433.235-.943.062-1.393-.11-.282-.279-.528-.496-.728-.217-.2-.477-.345-.752-.426-.274-.081-.562-.1-.844-.054-.282.045-.551.152-.792.312-.241.161-.444.372-.601.621-.123.196-.219.41-.283.634-.064.225-.097.459-.097.693l.002.23c-1.445-.191-2.778-.618-3.997-1.231-.683.735-.883 1.755-.495 2.695.115.278.275.535.47.759-.213-.01-.421-.055-.618-.133v.016c0 .945.648 1.756 1.573 1.967-.156.042-.32.066-.485.074-.116.001-.231-.013-.343-.04.254.796 1.033 1.356 1.92 1.372-.556.417-1.248.693-1.992.773.467.297 1.008.476 1.579.534 2.122.142 4.046-.833 5.106-2.414.568-.847.943-1.834 1.012-2.885l.013-.188z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium">Twitter</h4>
                                <p className="text-sm text-gray-500">Share updates and connect with your audience</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">Connect</Button>
                          </div>
                        </div>
                        
                        <Button className="bg-reclaim-blue hover:bg-reclaim-blue/90">
                          Save Integration Settings
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
