import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, 
  Calendar, 
  Clock, 
  Search,
  ExternalLink,
  Download,
  Pin,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Info,
  Bookmark
} from "lucide-react";
import { Link } from "react-router-dom";

const notifications = [
  {
    id: 1,
    title: "RRB Technician 2025 - Application Form Released",
    description: "Railway Recruitment Board has released the application form for Technician posts. Apply before the deadline.",
    type: "exam",
    priority: "high",
    date: "2024-01-15",
    exam: "RRB Technician",
    category: "Railway",
    status: "active",
    deadline: "2024-02-15",
    isPinned: true,
    views: 25000,
    link: "/notifications/rrb-technician-2025"
  },
  {
    id: 2,
    title: "SSC JE 2025 - Official Notification Out",
    description: "Staff Selection Commission has released the official notification for Junior Engineer posts across various departments.",
    type: "exam",
    priority: "high",
    date: "2024-01-12",
    exam: "SSC JE",
    category: "SSC",
    status: "active",
    deadline: "2024-02-10",
    isPinned: true,
    views: 32000,
    link: "/notifications/ssc-je-2025"
  },
  {
    id: 3,
    title: "IBPS SO 2025 - Prelims Result Declared",
    description: "Institute of Banking Personnel Selection has declared the preliminary examination results for Specialist Officer posts.",
    type: "result",
    priority: "medium",
    date: "2024-01-10",
    exam: "IBPS SO",
    category: "Banking",
    status: "completed",
    deadline: null,
    isPinned: false,
    views: 18500,
    link: "/notifications/ibps-so-prelims-result"
  },
  {
    id: 4,
    title: "SBI Clerk 2024 - Interview Schedule Released",
    description: "State Bank of India has released the interview schedule for Clerk positions. Check your interview date and venue.",
    type: "schedule",
    priority: "medium",
    date: "2024-01-08",
    exam: "SBI Clerk",
    category: "Banking",
    status: "active",
    deadline: "2024-01-25",
    isPinned: false,
    views: 15200,
    link: "/notifications/sbi-clerk-interview"
  },
  {
    id: 5,
    title: "Current Affairs Update - January 2025",
    description: "Important current affairs topics for the month of January 2025. Must-read for all competitive exams.",
    type: "update",
    priority: "low",
    date: "2024-01-05",
    exam: "All Exams",
    category: "Current Affairs",
    status: "active",
    deadline: null,
    isPinned: false,
    views: 45000,
    link: "/current-affairs/january-2025"
  },
  {
    id: 6,
    title: "RBI Grade B 2025 - Phase I Result",
    description: "Reserve Bank of India has announced the Phase I examination results for Grade B Officer posts.",
    type: "result",
    priority: "high",
    date: "2024-01-03",
    exam: "RBI Grade B",
    category: "Banking",
    status: "completed",
    deadline: null,
    isPinned: false,
    views: 22000,
    link: "/notifications/rbi-grade-b-result"
  }
];

const examCategories = [
  { name: "All", count: notifications.length, color: "bg-blue-500" },
  { name: "Banking", count: 4, color: "bg-green-500" },
  { name: "SSC", count: 1, color: "bg-orange-500" },
  { name: "Railway", count: 1, color: "bg-purple-500" },
  { name: "Current Affairs", count: 1, color: "bg-red-500" }
];

const notificationTypes = [
  { name: "exam", label: "Exam Notifications", icon: Bell, color: "text-blue-600" },
  { name: "result", label: "Results", icon: CheckCircle, color: "text-green-600" },
  { name: "schedule", label: "Schedules", icon: Calendar, color: "text-orange-600" },
  { name: "update", label: "Updates", icon: Info, color: "text-purple-600" }
];

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "high": return "bg-red-100 text-red-800";
    case "medium": return "bg-yellow-100 text-yellow-800";
    case "low": return "bg-green-100 text-green-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const getTypeIcon = (type: string) => {
  const typeConfig = notificationTypes.find(t => t.name === type);
  return typeConfig ? typeConfig.icon : Bell;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

const getDaysRemaining = (deadline: string | null) => {
  if (!deadline) return null;
  
  const today = new Date();
  const deadlineDate = new Date(deadline);
  const diffTime = deadlineDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};

export function NotificationsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotifications = notifications.filter(notification => {
    const matchesCategory = selectedCategory === "All" || notification.category === selectedCategory;
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const pinnedNotifications = filteredNotifications.filter(n => n.isPinned);
  const regularNotifications = filteredNotifications.filter(n => !n.isPinned);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            Latest Updates
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Exam Notifications & Updates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest exam notifications, results, and important announcements 
            from various recruitment boards and examination conducting bodies.
          </p>
        </div>

        {/* Search and Categories */}
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input 
              placeholder="Search notifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {examCategories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.name)}
                className="h-10"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Notifications</TabsTrigger>
                <TabsTrigger value="urgent">Urgent</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
                <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {/* Pinned Notifications */}
                {pinnedNotifications.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Pin className="h-5 w-5 text-primary" />
                      Pinned Notifications
                    </h3>
                    <div className="space-y-4">
                      {pinnedNotifications.map((notification) => {
                        const Icon = getTypeIcon(notification.type);
                        const daysRemaining = getDaysRemaining(notification.deadline);
                        
                        return (
                          <Card key={notification.id} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <Icon className="h-5 w-5 text-primary" />
                                    <Badge variant="outline">{notification.category}</Badge>
                                    <Badge className={getPriorityBadge(notification.priority)}>
                                      {notification.priority}
                                    </Badge>
                                    {daysRemaining && daysRemaining > 0 && (
                                      <Badge variant="destructive">
                                        {daysRemaining} days left
                                      </Badge>
                                    )}
                                  </div>
                                  
                                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    {notification.title}
                                  </h4>
                                  
                                  <p className="text-gray-600 mb-4">
                                    {notification.description}
                                  </p>
                                  
                                  <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                      <Calendar className="h-4 w-4" />
                                      <span>{formatDate(notification.date)}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <TrendingUp className="h-4 w-4" />
                                      <span>{notification.views.toLocaleString()} views</span>
                                    </div>
                                    {notification.deadline && (
                                      <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        <span>Deadline: {formatDate(notification.deadline)}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div className="flex gap-2 ml-4">
                                  <Button variant="outline" size="sm">
                                    <Bookmark className="h-4 w-4" />
                                  </Button>
                                  <Button size="sm" asChild>
                                    <Link to={notification.link}>
                                      Read More
                                      <ExternalLink className="h-4 w-4 ml-2" />
                                    </Link>
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Regular Notifications */}
                <div>
                  {pinnedNotifications.length > 0 && (
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Recent Notifications
                    </h3>
                  )}
                  <div className="space-y-4">
                    {regularNotifications.map((notification) => {
                      const Icon = getTypeIcon(notification.type);
                      const daysRemaining = getDaysRemaining(notification.deadline);
                      
                      return (
                        <Card key={notification.id} className="hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <Icon className="h-5 w-5 text-primary" />
                                  <Badge variant="outline">{notification.category}</Badge>
                                  <Badge className={getPriorityBadge(notification.priority)}>
                                    {notification.priority}
                                  </Badge>
                                  {daysRemaining && daysRemaining > 0 && (
                                    <Badge variant="destructive">
                                      {daysRemaining} days left
                                    </Badge>
                                  )}
                                </div>
                                
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                  {notification.title}
                                </h4>
                                
                                <p className="text-gray-600 mb-4">
                                  {notification.description}
                                </p>
                                
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>{formatDate(notification.date)}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <TrendingUp className="h-4 w-4" />
                                    <span>{notification.views.toLocaleString()} views</span>
                                  </div>
                                  {notification.deadline && (
                                    <div className="flex items-center gap-1">
                                      <Clock className="h-4 w-4" />
                                      <span>Deadline: {formatDate(notification.deadline)}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              <div className="flex gap-2 ml-4">
                                <Button variant="outline" size="sm">
                                  <Bookmark className="h-4 w-4" />
                                </Button>
                                <Button size="sm" asChild>
                                  <Link to={notification.link}>
                                    Read More
                                    <ExternalLink className="h-4 w-4 ml-2" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>

              {/* Other tab contents would be similar */}
              <TabsContent value="urgent">
                <div className="text-center py-8">
                  <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Urgent Notifications</h3>
                  <p className="text-gray-600">High priority notifications that require immediate attention.</p>
                </div>
              </TabsContent>

              <TabsContent value="results">
                <div className="text-center py-8">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Results</h3>
                  <p className="text-gray-600">Latest exam results and merit lists.</p>
                </div>
              </TabsContent>

              <TabsContent value="bookmarked">
                <div className="text-center py-8">
                  <Bookmark className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Bookmarked</h3>
                  <p className="text-gray-600">Your saved notifications for quick access.</p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-8">
              <Button size="lg" variant="outline" asChild>
                <Link to="/notifications">
                  View All Notifications
                </Link>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notification Types */}
            <Card>
              <CardHeader>
                <CardTitle>Notification Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notificationTypes.map((type) => {
                    const Icon = type.icon;
                    const count = notifications.filter(n => n.type === type.name).length;
                    return (
                      <div key={type.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon className={`h-5 w-5 ${type.color}`} />
                          <span className="text-sm font-medium">{type.label}</span>
                        </div>
                        <Badge variant="secondary">{count}</Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/notifications/subscribe">
                    <Bell className="h-4 w-4 mr-2" />
                    Subscribe to Alerts
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/downloads/notifications">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDFs
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/calendar">
                    <Calendar className="h-4 w-4 mr-2" />
                    Exam Calendar
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Email Alerts */}
            <Card className="bg-gradient-primary text-white">
              <CardHeader>
                <CardTitle>Never Miss an Update</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4 text-sm">
                  Get instant email notifications for important exam updates and results.
                </p>
                <Input 
                  placeholder="Enter your email"
                  className="mb-3 bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
                <Button variant="secondary" className="w-full">
                  Subscribe to Alerts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
