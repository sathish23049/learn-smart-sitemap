import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Trophy, 
  Star, 
  Calendar,
  MapPin,
  Search,
  Filter,
  Quote,
  Users,
  TrendingUp,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const successStories = [
  {
    id: 1,
    name: "Alagurajagopal",
    position: "Probationary Officer",
    bank: "Canara Bank",
    year: "2024",
    rank: "AIR 15",
    image: "/api/placeholder/150/150",
    testimonial: "Shankar Banking Academy provided me with the perfect guidance and study material. The faculty's dedication and the comprehensive course structure helped me crack the IBPS PO exam with flying colors.",
    course: "Banking PO Complete Course",
    examAttempts: 2,
    studyDuration: "8 months"
  },
  {
    id: 2,
    name: "Gayathri S",
    position: "Probationary Officer",
    bank: "Central Bank of India",
    year: "2024",
    rank: "AIR 28",
    image: "/api/placeholder/150/150",
    testimonial: "The mock tests and practice sessions at Shankar Academy were instrumental in my success. The personalized attention and doubt-clearing sessions made all the difference.",
    course: "IBPS PO Intensive Course",
    examAttempts: 1,
    studyDuration: "6 months"
  },
  {
    id: 3,
    name: "Janani R",
    position: "Clerk",
    bank: "Indian Bank",
    year: "2024",
    rank: "AIR 45",
    image: "/api/placeholder/150/150",
    testimonial: "I am grateful to Shankar Banking Academy for their excellent coaching. The faculty's expertise and the academy's supportive environment helped me achieve my dream job.",
    course: "Banking Clerk Foundation Course",
    examAttempts: 1,
    studyDuration: "4 months"
  },
  {
    id: 4,
    name: "Monica P",
    position: "Probationary Officer",
    bank: "Indian Overseas Bank",
    year: "2024",
    rank: "AIR 67",
    image: "/api/placeholder/150/150",
    testimonial: "The comprehensive study material and regular assessments helped me identify my strengths and weaknesses. The academy's systematic approach is commendable.",
    course: "Banking PO Advanced Course",
    examAttempts: 2,
    studyDuration: "10 months"
  },
  {
    id: 5,
    name: "Harshitha K",
    position: "Scale I Officer",
    bank: "Indian Overseas Bank",
    year: "2024",
    rank: "AIR 89",
    image: "/api/placeholder/150/150",
    testimonial: "The faculty at Shankar Academy not only taught us concepts but also guided us on exam strategy and time management. Their mentorship was invaluable.",
    course: "RRB PO Complete Course",
    examAttempts: 1,
    studyDuration: "7 months"
  },
  {
    id: 6,
    name: "Hemashree T",
    position: "Probationary Officer",
    bank: "Bank of Maharashtra",
    year: "2024",
    rank: "AIR 112",
    image: "/api/placeholder/150/150",
    testimonial: "Shankar Banking Academy's online and offline classes perfectly complemented each other. The flexibility and quality of education exceeded my expectations.",
    course: "Hybrid Banking Course",
    examAttempts: 1,
    studyDuration: "5 months"
  }
];

const examCategories = [
  { name: "All", count: 156, color: "bg-blue-500" },
  { name: "IBPS PO", count: 45, color: "bg-green-500" },
  { name: "SBI PO", count: 32, color: "bg-purple-500" },
  { name: "RRB PO", count: 28, color: "bg-orange-500" },
  { name: "Banking Clerk", count: 35, color: "bg-red-500" },
  { name: "SSC", count: 16, color: "bg-indigo-500" }
];

const statistics = [
  { label: "Success Stories", value: "1,500+", icon: Trophy },
  { label: "Average Success Rate", value: "95%", icon: TrendingUp },
  { label: "Top 100 Ranks", value: "250+", icon: Award },
  { label: "First Attempt Success", value: "78%", icon: Star }
];

const SuccessStories = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6" variant="outline">
              Student Success Stories
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Students' Achievements Speak for Themselves
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Celebrating the success of our students who have secured prestigious positions 
              in banking and government sectors through our comprehensive coaching programs.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* IBPS PO 2024-25 Achievers Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Trophy className="h-10 w-10" />
              <div>
                <h2 className="text-4xl font-bold">Congratulations</h2>
                <h3 className="text-5xl font-bold">IBPS PO 2024-25 ACHIEVERS</h3>
              </div>
            </div>
            <p className="text-xl text-white/90">
              Proud to announce our students' outstanding performance in IBPS PO 2024-25
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {successStories.slice(0, 6).map((story) => (
              <div key={story.id} className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-3 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-sm mb-1">{story.name}</h4>
                <p className="text-xs opacity-80">{story.bank}</p>
                <Badge variant="secondary" className="mt-2 text-xs">
                  {story.rank}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search success stories by name, bank, or position..."
                className="pl-10 h-12"
              />
            </div>
            <Button variant="outline" className="h-12">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {examCategories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                size="sm"
                className="h-10"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Success Stories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-all">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="bg-gradient-primary text-white p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full overflow-hidden">
                        <img 
                          src={story.image} 
                          alt={story.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{story.name}</h3>
                        <p className="text-white/90">{story.position}</p>
                        <p className="text-white/80 text-sm">{story.bank}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        {story.rank}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{story.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="relative mb-4">
                      <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                      <p className="text-gray-600 italic leading-relaxed pl-6">
                        "{story.testimonial}"
                      </p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Course:</span>
                        <span className="font-medium">{story.course}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Study Duration:</span>
                        <span className="font-medium">{story.studyDuration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Exam Attempts:</span>
                        <span className="font-medium">{story.examAttempts}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={`/success-stories/${story.id}`}>
                          Read Full Story
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our successful alumni and achieve your dream job in banking or government sector 
            with our expert guidance and proven teaching methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/admission">Start Your Journey</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
              <Link to="/courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStories;