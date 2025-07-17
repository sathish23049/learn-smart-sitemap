import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Play, 
  Clock, 
  Eye, 
  ThumbsUp, 
  Search,
  Filter,
  BookOpen,
  Users,
  Star,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const videoCategories = [
  { name: "All", count: 120, active: true },
  { name: "Banking", count: 45, active: false },
  { name: "SSC", count: 32, active: false },
  { name: "Current Affairs", count: 28, active: false },
  { name: "Mathematics", count: 25, active: false },
  { name: "English", count: 20, active: false }
];

const featuredVideos = [
  {
    id: 1,
    title: "Banking Awareness Complete Course 2025",
    description: "Comprehensive banking awareness course covering all major topics for IBPS, SBI, and other banking exams.",
    thumbnail: "/api/placeholder/400/225",
    duration: "2:45:30",
    views: 45200,
    likes: 1250,
    instructor: "Prof. Rajesh Kumar",
    category: "Banking",
    uploadDate: "2024-01-15",
    level: "Beginner",
    rating: 4.8
  },
  {
    id: 2,
    title: "Quantitative Aptitude - Data Interpretation Mastery",
    description: "Master data interpretation with advanced techniques and shortcuts for quick problem solving.",
    thumbnail: "/api/placeholder/400/225",
    duration: "1:32:15",
    views: 32800,
    likes: 890,
    instructor: "Dr. Priya Sharma",
    category: "Mathematics",
    uploadDate: "2024-01-12",
    level: "Intermediate",
    rating: 4.9
  },
  {
    id: 3,
    title: "Current Affairs January 2025 - Complete Analysis",
    description: "Detailed analysis of important current affairs topics for all competitive exams.",
    thumbnail: "/api/placeholder/400/225",
    duration: "58:42",
    views: 67500,
    likes: 2100,
    instructor: "Ms. Anita Verma",
    category: "Current Affairs",
    uploadDate: "2024-01-08",
    level: "All Levels",
    rating: 4.7
  },
  {
    id: 4,
    title: "English Grammar & Comprehension Techniques",
    description: "Advanced English grammar concepts and reading comprehension strategies.",
    thumbnail: "/api/placeholder/400/225",
    duration: "1:18:25",
    views: 28900,
    likes: 765,
    instructor: "Prof. Sunita Rao",
    category: "English",
    uploadDate: "2024-01-10",
    level: "Intermediate",
    rating: 4.6
  },
  {
    id: 5,
    title: "SSC CGL Complete Strategy & Preparation Plan",
    description: "Complete roadmap for SSC CGL preparation with subject-wise strategy.",
    thumbnail: "/api/placeholder/400/225",
    duration: "2:12:18",
    views: 41200,
    likes: 1180,
    instructor: "Mr. Vikram Singh",
    category: "SSC",
    uploadDate: "2024-01-05",
    level: "Beginner",
    rating: 4.8
  },
  {
    id: 6,
    title: "Reasoning Ability - Puzzles & Seating Arrangement",
    description: "Master complex puzzles and seating arrangement questions with proven techniques.",
    thumbnail: "/api/placeholder/400/225",
    duration: "1:45:32",
    views: 36700,
    likes: 980,
    instructor: "Dr. Amit Patel",
    category: "Reasoning",
    uploadDate: "2024-01-03",
    level: "Advanced",
    rating: 4.9
  }
];

const instructors = [
  { name: "Prof. Rajesh Kumar", students: 15000, courses: 12, rating: 4.8 },
  { name: "Dr. Priya Sharma", students: 12500, courses: 8, rating: 4.9 },
  { name: "Ms. Anita Verma", students: 18000, courses: 15, rating: 4.7 },
  { name: "Prof. Sunita Rao", students: 9500, courses: 6, rating: 4.6 }
];

const getLevelBadgeColor = (level: string) => {
  switch (level) {
    case "Beginner": return "bg-green-100 text-green-800";
    case "Intermediate": return "bg-yellow-100 text-yellow-800";
    case "Advanced": return "bg-red-100 text-red-800";
    default: return "bg-blue-100 text-blue-800";
  }
};

export function VideosSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  const formatDuration = (duration: string) => {
    return duration;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            Video Learning
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Video Lectures
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from experienced faculty with comprehensive video courses designed 
            specifically for competitive exam preparation.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input 
              placeholder="Search videos by topic, instructor, or category..."
              className="pl-10 h-12"
            />
          </div>
          <Button variant="outline" className="h-12">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {videoCategories.map((category) => (
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

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Video Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {featuredVideos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button size="lg" className="rounded-full">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {formatDuration(video.duration)}
                    </div>
                    <Badge 
                      className={`absolute top-2 left-2 ${getLevelBadgeColor(video.level)}`}
                    >
                      {video.level}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <Badge variant="outline" className="text-xs">
                        {video.category}
                      </Badge>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {video.description}
                    </p>
                    
                    <div className="text-sm text-gray-500 mb-3">
                      By {video.instructor}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{formatViews(video.views)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{video.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{video.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Button className="w-full" asChild>
                        <Link to={`/videos/${video.id}`}>
                          Watch Now
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" variant="outline" asChild>
                <Link to="/videos">
                  View All Videos
                </Link>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Instructors */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Top Instructors
                </h3>
                <div className="space-y-4">
                  {instructors.map((instructor, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-sm">{instructor.name}</h4>
                        <p className="text-xs text-gray-500">
                          {instructor.students.toLocaleString()} students
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{instructor.rating}</span>
                        </div>
                        <p className="text-xs text-gray-500">{instructor.courses} courses</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Video Library Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Play className="h-4 w-4 text-primary" />
                      <span className="text-sm">Total Videos</span>
                    </div>
                    <span className="font-semibold">120+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">Total Duration</span>
                    </div>
                    <span className="font-semibold">200+ hrs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">Active Learners</span>
                    </div>
                    <span className="font-semibold">15K+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-sm">Subjects Covered</span>
                    </div>
                    <span className="font-semibold">25+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Premium Access */}
            <Card className="bg-gradient-primary text-white">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Premium Video Access</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Get unlimited access to all premium video lectures and exclusive content.
                </p>
                <ul className="text-white/90 text-sm space-y-2 mb-4">
                  <li>• HD Quality Videos</li>
                  <li>• Downloadable Content</li>
                  <li>• Expert Q&A Sessions</li>
                  <li>• Progress Tracking</li>
                </ul>
                <Button variant="secondary" className="w-full">
                  Upgrade to Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}