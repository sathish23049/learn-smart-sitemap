import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Monitor, 
  Users, 
  Mic, 
  Clock, 
  Building, 
  FileText,
  Award,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Calendar
} from "lucide-react";

const phases = [
  {
    id: 1,
    icon: "🏛️",
    title: "Phase 1 – Preliminary",
    description: "Foundation level screening exam",
    subjects: [
      { name: "English", questions: 30, time: "20 mins", color: "bg-blue-100 text-blue-800" },
      { name: "Aptitude", questions: 35, time: "20 mins", color: "bg-green-100 text-green-800" },
      { name: "Reasoning", questions: 35, time: "20 mins", color: "bg-purple-100 text-purple-800" }
    ],
    iconComponent: BookOpen,
    gradient: "from-blue-600 to-blue-800"
  },
  {
    id: 2,
    icon: "📘",
    title: "Phase 2 – Mains",
    description: "Comprehensive assessment of knowledge",
    subjects: [
      { name: "Reasoning + Computer", questions: 40, marks: "50 marks", color: "bg-indigo-100 text-indigo-800" },
      { name: "Data Interpretation", questions: 30, marks: "50 marks", color: "bg-cyan-100 text-cyan-800" },
      { name: "Banking Awareness", questions: 50, marks: "60 marks", color: "bg-emerald-100 text-emerald-800" },
      { name: "English", questions: 35, marks: "40 marks", color: "bg-blue-100 text-blue-800" },
      { name: "Descriptive Writing", questions: 2, marks: "50 marks", color: "bg-orange-100 text-orange-800" }
    ],
    iconComponent: Monitor,
    gradient: "from-indigo-600 to-indigo-800"
  },
  {
    id: 3,
    icon: "🎤",
    title: "Phase 3 – Final Round",
    description: "Personal assessment and communication skills",
    subjects: [
      { name: "Group Exercise", marks: "20 marks", color: "bg-yellow-100 text-yellow-800" },
      { name: "Interview", marks: "30 marks", color: "bg-red-100 text-red-800" }
    ],
    iconComponent: Mic,
    gradient: "from-purple-600 to-purple-800"
  }
];

const eligibilityInfo = [
  { label: "Education", value: "Bachelor's degree required", icon: Award },
  { label: "Age Limit", value: "20–30 years", icon: Calendar },
  { label: "Penalty", value: "¼ mark per wrong answer", icon: AlertTriangle },
  { label: "Final Selection", value: "Excludes Phase 1 scores", icon: CheckCircle }
];

export function SBIPOSection() {
  const [activePhase, setActivePhase] = useState(1);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white" variant="secondary">
            SBI PO Exam Preparation
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Master Every Phase of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              SBI PO Exam
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive preparation strategy covering all three phases with expert guidance, 
            practice tests, and personalized coaching to ensure your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              Download Syllabus
            </Button>
          </div>
        </div>

        {/* Phase Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {phases.map((phase) => {
            const IconComponent = phase.iconComponent;
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all ${
                  activePhase === phase.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border'
                }`}
              >
                <IconComponent className="h-5 w-5" />
                <span className="font-semibold">{phase.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Phase Details */}
        <div className="mb-16">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className={`transition-all duration-500 ${
                activePhase === phase.id ? 'block animate-fade-in' : 'hidden'
              }`}
            >
              <Card className="overflow-hidden border-2 border-blue-100">
                <CardHeader className={`bg-gradient-to-r ${phase.gradient} text-white p-8`}>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{phase.icon}</div>
                    <div>
                      <CardTitle className="text-3xl font-bold">{phase.title}</CardTitle>
                      <p className="text-blue-100 text-lg">{phase.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {phase.subjects.map((subject, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-all hover:shadow-lg group"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <Badge className={`${subject.color} font-medium`} variant="secondary">
                            {subject.name}
                          </Badge>
                          <Clock className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        </div>
                        <div className="space-y-2">
                          {subject.questions && (
                            <div className="flex justify-between">
                              <span className="text-gray-600">Questions:</span>
                              <span className="font-semibold">{subject.questions}</span>
                            </div>
                          )}
                          {subject.time && (
                            <div className="flex justify-between">
                              <span className="text-gray-600">Time:</span>
                              <span className="font-semibold text-orange-600">{subject.time}</span>
                            </div>
                          )}
                          {subject.marks && (
                            <div className="flex justify-between">
                              <span className="text-gray-600">Marks:</span>
                              <span className="font-semibold text-green-600">{subject.marks}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Eligibility & Important Information */}
        <Card className="mb-12 border-2 border-orange-100">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <FileText className="h-6 w-6" />
              Eligibility & Important Information
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibilityInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <IconComponent className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">{info.label}</h4>
                    <p className="text-sm text-gray-600">{info.value}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Success Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
            <p className="text-gray-600">Success Rate</p>
          </Card>
          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">5,000+</h3>
            <p className="text-gray-600">Students Placed</p>
          </Card>
          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">200+</h3>
            <p className="text-gray-600">Bank Placements</p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your SBI PO Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful candidates who achieved their banking dreams with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Preparation Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Book Free Counselling
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}