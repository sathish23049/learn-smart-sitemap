import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  BookOpen, 
  Trophy,
  Target,
  Star,
  GraduationCap,
  TrendingUp,
  Calendar,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

const achievements = [
  { label: "Years of Excellence", value: "15+", icon: Calendar },
  { label: "Successful Students", value: "10,000+", icon: Users },
  { label: "Success Rate", value: "95%", icon: Trophy },
  { label: "Expert Faculty", value: "25+", icon: GraduationCap },
  { label: "Course Modules", value: "200+", icon: BookOpen },
  { label: "Study Centers", value: "3", icon: MapPin }
];

const features = [
  {
    title: "Expert Faculty",
    description: "Industry experts with years of experience in competitive exam coaching",
    icon: Star
  },
  {
    title: "Comprehensive Curriculum",
    description: "Well-structured course modules covering all exam patterns and syllabi",
    icon: BookOpen
  },
  {
    title: "Personal Attention",
    description: "Small batch sizes ensuring individual attention to every student",
    icon: Users
  },
  {
    title: "Regular Assessment",
    description: "Continuous evaluation through mock tests and practice sessions",
    icon: Target
  },
  {
    title: "Study Materials",
    description: "Updated study materials and question banks for thorough preparation",
    icon: Award
  },
  {
    title: "Success Tracking",
    description: "Performance analytics and progress monitoring for better results",
    icon: TrendingUp
  }
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6" variant="outline">
              About Shankar Banking Academy
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Premier Institution for Competitive Exam Success
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Established in 2009, Shankar Banking Academy has been Chennai's leading 
              coaching institute for banking and government competitive exams, with a 
              proven track record of excellence and student success.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story & Mission
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <span className="text-primary font-semibold">Shankar Banking Academy</span> was founded 
                with a vision to provide quality coaching for competitive examinations in the banking and 
                government sectors. Based in Chennai, we have established ourselves as a premier institution 
                dedicated to nurturing and developing talent for various competitive exams.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our comprehensive curriculum and experienced faculty have helped thousands of students 
                achieve their dreams of securing prestigious positions in banks, SSC, RBI, NABARD, 
                Insurance companies, and Railway departments.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We have earned our reputation as the top <span className="text-primary font-semibold">
                Bank Coaching Centre in Chennai</span> through years of consistent results, innovative 
                teaching methodologies, and unwavering commitment to student success.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link to="/courses">Explore Our Courses</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                <p className="text-white/90 mb-6">
                  To be the most trusted and preferred coaching institute for competitive 
                  exam preparation, empowering students to achieve their career aspirations 
                  in the banking and government sectors.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <ul className="text-white/90 space-y-2">
                  <li>• Excellence in Education</li>
                  <li>• Student-Centric Approach</li>
                  <li>• Integrity & Transparency</li>
                  <li>• Continuous Innovation</li>
                  <li>• Result-Oriented Teaching</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Shankar Banking Academy?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our unique approach to competitive exam coaching has made us the preferred 
              choice for thousands of successful candidates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Chairman's Message
                  </h2>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-semibold text-gray-900">Mr. Shankar</h3>
                    <p className="text-gray-600">Chairman & Founder</p>
                  </div>
                  <div className="lg:col-span-2">
                    <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                      "Education is the foundation of a successful career, and at Shankar Banking Academy, 
                      we are committed to providing the highest quality coaching for competitive examinations. 
                      Our goal is not just to help students pass exams, but to build confident professionals 
                      who can excel in their chosen careers."
                    </blockquote>
                    <p className="text-gray-600 mt-4">
                      With over 15 years of experience in competitive exam coaching, we have developed 
                      proven methodologies that have helped thousands of students achieve their dreams.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Success Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have achieved their dreams with 
            Shankar Banking Academy's expert guidance and comprehensive coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/admission">Apply for Admission</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;