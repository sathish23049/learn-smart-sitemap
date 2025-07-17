import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { 
  Menu, 
  Search, 
  ChevronDown, 
  GraduationCap,
  Users,
  HelpCircle,
  Phone,
  LogIn,
  Bell,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

const coursesMenu = [
  { name: "Banking", path: "/courses/banking", description: "IBPS, SBI, RBI Exams" },
  { name: "SSC", path: "/courses/ssc", description: "CGL, CHSL, MTS, JE" },
  { name: "RBI", path: "/courses/rbi", description: "Grade B, Assistant" },
  { name: "NABARD", path: "/courses/nabard", description: "Development Assistant" },
  { name: "Insurance", path: "/courses/insurance", description: "LIC, NIACL, GIC" },
  { name: "Railway", path: "/courses/railway", description: "RRB NTPC, Group D" }
];

const notifications = [
  "RRB Technician 2025",
  "SSC JE 2025", 
  "IBPS SO 2025"
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [notificationIndex, setNotificationIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate notifications
  useEffect(() => {
    const interval = setInterval(() => {
      setNotificationIndex((prev) => (prev + 1) % notifications.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
    }`}>
      {/* Notification Bar */}
      <div className="notification-bg border-b py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Bell className="h-4 w-4 text-primary" />
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="text-sm font-medium">Latest:</span>
              <div className="animate-fade-in">
                <Link 
                  to={`/notifications/${notifications[notificationIndex].toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm text-primary hover:underline"
                >
                  {notifications[notificationIndex]}
                </Link>
              </div>
            </div>
          </div>
          <Button variant="notification" size="sm">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Shankar</h1>
                <p className="text-xs text-muted-foreground">School of Banking</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/success-stories" className="text-sm font-medium hover:text-primary transition-colors">
                Success Stories
              </Link>
              <Link to="/faq" className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search..." 
                  className="pl-10 w-48"
                />
              </div>

              {/* Login/Register */}
              <div className="hidden md:flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/login">
                    <LogIn className="h-4 w-4" />
                    Login
                  </Link>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </div>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="space-y-6 mt-6">
                    <div className="space-y-4">
                      <Link to="/" className="block text-lg font-medium">Home</Link>
                      <Link to="/about" className="block text-lg font-medium">About Us</Link>
                      <Link to="/success-stories" className="block text-lg font-medium">Success Stories</Link>
                      <Link to="/faq" className="block text-lg font-medium">FAQ</Link>
                      <Link to="/contact" className="block text-lg font-medium">Contact</Link>
                    </div>
                    <div className="border-t pt-4 space-y-2">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/login">Login</Link>
                      </Button>
                      <Button className="w-full" asChild>
                        <Link to="/register">Register</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-6">
              {/* Courses Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                <Button variant="ghost" size="sm" className="gap-1">
                  Course
                  <ChevronDown className="h-4 w-4" />
                </Button>
                
                {showMegaMenu && (
                  <div className="absolute top-full left-0 mt-1 w-96 bg-white rounded-lg shadow-xl border p-6 z-50">
                    <div className="grid grid-cols-2 gap-4">
                      {coursesMenu.map((course) => (
                        <Link
                          key={course.name}
                          to={course.path}
                          className="p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <h4 className="font-medium text-sm">{course.name}</h4>
                          <p className="text-xs text-muted-foreground mt-1">{course.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Button variant="admission" size="sm" asChild>
                <Link to="/admission">BANKING / SSC Admission</Link>
              </Button>

              <Link to="/quiz" className="text-sm font-medium hover:text-primary transition-colors">
                Quiz
              </Link>
              <Link to="/current-affairs" className="text-sm font-medium hover:text-primary transition-colors">
                Current Affairs
              </Link>
              <Link to="/downloads" className="text-sm font-medium hover:text-primary transition-colors">
                Downloads
              </Link>
              <Link to="/videos" className="text-sm font-medium hover:text-primary transition-colors">
                Videos
              </Link>
              <Link to="/notifications" className="text-sm font-medium hover:text-primary transition-colors">
                Notifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}