import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  Users, 
  BookOpen, 
  Trophy,
  Star,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    id: 1,
    title: "2025 Result Achievers",
    subtitle: "Congratulations to our Banking & SSC Toppers",
    description: "Join the success story with comprehensive coaching programs",
    image: "/api/placeholder/800/400",
    cta: "View Results",
    ctaLink: "/success-stories",
    gradient: "from-blue-600 to-blue-800"
  },
  {
    id: 2,
    title: "IBPS SO Coaching Centre",
    subtitle: "Specialist Officer Success Stories",
    description: "Expert guidance for IBPS SO with proven track record",
    image: "/api/placeholder/800/400",
    cta: "Join IBPS SO Course",
    ctaLink: "/courses/ibps-so",
    gradient: "from-green-600 to-green-800"
  },
  {
    id: 3,
    title: "SBI PO Toppers 2024-25",
    subtitle: "Banking Excellence Achieved",
    description: "Comprehensive SBI PO preparation with expert faculty",
    image: "/api/placeholder/800/400",
    cta: "Start SBI PO Prep",
    ctaLink: "/courses/sbi-po",
    gradient: "from-purple-600 to-purple-800"
  },
  {
    id: 4,
    title: "SSC & Banking Academy",
    subtitle: "Premier Coaching Institute in Chennai",
    description: "Complete preparation for all government exams",
    image: "/api/placeholder/800/400",
    cta: "Explore Courses",
    ctaLink: "/courses",
    gradient: "from-orange-600 to-orange-800"
  }
];

const achievements = [
  { label: "Success Rate", value: "95%", icon: Trophy },
  { label: "Students Trained", value: "10,000+", icon: Users },
  { label: "Years Experience", value: "15+", icon: Award },
  { label: "Course Modules", value: "200+", icon: BookOpen }
];

const toppers = [
  { name: "Alagurajagopal", bank: "Canara Bank", image: "/api/placeholder/80/80" },
  { name: "Gayathri", bank: "Central Bank of India", image: "/api/placeholder/80/80" },
  { name: "Janani", bank: "Indian Bank", image: "/api/placeholder/80/80" },
  { name: "Monica", bank: "Indian Overseas Bank", image: "/api/placeholder/80/80" },
  { name: "Harshitha", bank: "Indian Overseas Bank", image: "/api/placeholder/80/80" },
  { name: "Hemashree", bank: "Bank of Maharashtra", image: "/api/placeholder/80/80" }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Main Hero Carousel */}
        <div className="relative mb-16">
          <div className={`bg-gradient-to-r ${currentSlideData.gradient} rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden`}>
            <div className="relative z-10 max-w-3xl">
              <Badge className="bg-white/20 text-white mb-4" variant="secondary">
                Latest Achievement
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-fade-in">
                {currentSlideData.title}
              </h1>
              <h2 className="text-xl lg:text-2xl mb-6 opacity-90">
                {currentSlideData.subtitle}
              </h2>
              <p className="text-lg mb-8 opacity-80">
                {currentSlideData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="secondary" asChild>
                  <Link to={currentSlideData.ctaLink}>
                    {currentSlideData.cta}
                  </Link>
                </Button>
                <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                  <Link to="/admission">
                    BANKING / SSC Admission
                  </Link>
                </Button>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <Button
                variant="secondary"
                size="icon"
                onClick={prevSlide}
                className="bg-white/20 hover:bg-white/30"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <Button
                variant="secondary"
                size="icon"
                onClick={nextSlide}
                className="bg-white/20 hover:bg-white/30"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {achievement.value}
                  </h3>
                  <p className="text-sm text-gray-600">{achievement.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* IBPS PO 2024-25 Achievers Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="h-8 w-8" />
            <div>
              <h2 className="text-3xl font-bold">Congratulations</h2>
              <h3 className="text-4xl font-bold">IBPS PO 2024-25 ACHIEVERS</h3>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {toppers.map((topper, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <img 
                    src={topper.image} 
                    alt={topper.name}
                    className="w-18 h-18 rounded-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-sm mb-1">{topper.name}</h4>
                <p className="text-xs opacity-80">{topper.bank}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/success-stories">
                & More... View All Success Stories
              </Link>
            </Button>
          </div>
        </div>

        {/* About Preview */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4" variant="outline">
              About Shankar Banking Academy
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Premier Institution for Competitive Exam Success
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              <span className="text-primary font-semibold">Shankar Banking Academy</span>, based in Chennai, 
              stands out as a premier institution dedicated to nurturing and developing talent for various 
              competitive exams in the banking and government sectors. Known for its comprehensive curriculum 
              and experienced faculty, we offer specialized coaching for Bank, SSC, RBI, NABARD, Insurance, 
              and Railway exams.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We have earned our reputation as the top <span className="text-primary font-semibold">Bank Coaching Centre in Chennai</span> through 
              years of consistent results and student satisfaction.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5" />
                  <span>Expert Faculty with Industry Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5" />
                  <span>95% Success Rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5" />
                  <span>Comprehensive Study Materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5" />
                  <span>Small Batch Sizes for Personal Attention</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}