import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Clock,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const courseLinks = [
  { name: "Banking Courses", href: "/courses/banking" },
  { name: "SSC Preparation", href: "/courses/ssc" },
  { name: "RBI Coaching", href: "/courses/rbi" },
  { name: "NABARD Training", href: "/courses/nabard" },
  { name: "Insurance Exams", href: "/courses/insurance" },
  { name: "Railway Exams", href: "/courses/railway" }
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Current Affairs", href: "/current-affairs" },
  { name: "Online Exams", href: "/online-exams" },
  { name: "Downloads", href: "/downloads" },
  { name: "FAQ", href: "/faq" }
];

const examResources = [
  { name: "Daily Quiz", href: "/quiz" },
  { name: "Mock Tests", href: "/mock-tests" },
  { name: "Previous Papers", href: "/downloads/previous-papers" },
  { name: "Video Lectures", href: "/videos" },
  { name: "Study Materials", href: "/downloads" },
  { name: "Notifications", href: "/notifications" }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Notifications</h2>
            <p className="text-gray-300 mb-8">
              Get exam notifications, current affairs updates, and exclusive study materials delivered to your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button variant="default" size="lg">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Shankar</h3>
                <p className="text-sm text-gray-300">School of Banking</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premier coaching institute in Chennai specializing in Banking, SSC, and Government exam preparation. 
              15+ years of excellence with 95% success rate.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p>123 Anna Salai, Chennai</p>
                  <p>Tamil Nadu 600002</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-300">info@shankarbankingacademy.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-300">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Course Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {courseLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exam Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Exam Resources</h4>
            <ul className="space-y-3">
              {examResources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>© 2024 Shankar Banking Academy. All rights reserved.</span>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/refund-policy" className="hover:text-primary transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}