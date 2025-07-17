import { useState } from "react";
import { ChevronDown, ChevronRight, BookOpen, Calculator, Globe, Download, Play, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const examCategories = {
  "reasoning-ability": {
    name: "Reasoning Ability",
    icon: BookOpen,
    subcategories: [
      { name: "Arrangement", path: "/exams/reasoning/arrangement", count: 25 },
      { name: "Blood Relations", path: "/exams/reasoning/blood-relations", count: 18 },
      { name: "Coding-Decoding", path: "/exams/reasoning/coding-decoding", count: 22 },
      { name: "Syllogism", path: "/exams/reasoning/syllogism", count: 15 },
      { name: "Others", path: "/exams/reasoning/others", count: 45 }
    ]
  },
  "english-ability": {
    name: "English Ability", 
    icon: Globe,
    subcategories: [
      { name: "Reading Comprehension", path: "/exams/english/reading-comprehension", count: 20 },
      { name: "Grammar", path: "/exams/english/grammar", count: 35 },
      { name: "Vocabulary", path: "/exams/english/vocabulary", count: 28 },
      { name: "Error Detection", path: "/exams/english/error-detection", count: 32 }
    ]
  },
  "quantitative-aptitude": {
    name: "Quantitative Aptitude",
    icon: Calculator,
    subcategories: [
      { name: "Quant Mix Quizzes", path: "/exams/quant/mix-quizzes", count: 40 },
      { name: "DI Quizzes", path: "/exams/quant/di-quizzes", count: 25 },
      { name: "Number Series", path: "/exams/quant/number-series", count: 18 },
      { name: "Simplification", path: "/exams/quant/simplification", count: 30 }
    ]
  }
};

const otherSections = [
  { name: "Daily Exams", path: "/daily-exams", icon: BookOpen, description: "Fresh questions every day", count: "New!" },
  { name: "Quiz", path: "/quiz", icon: Play, description: "Quick practice tests", count: 150 },
  { name: "Current Affairs", path: "/current-affairs", icon: Bell, description: "Latest updates", count: "Daily" },
  { name: "Downloads", path: "/downloads", icon: Download, description: "Study materials", count: 200 }
];

const downloadCategories = [
  { name: "Current Affairs Compilation", path: "/downloads/current-affairs", count: 12 },
  { name: "Highlights – Economic Survey", path: "/downloads/economic-survey", count: 5 },
  { name: "Budget Highlights", path: "/downloads/budget", count: 8 },
  { name: "Previous Year Papers", path: "/downloads/previous-papers", count: 45 }
];

export function OnlineExamsMenu() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedDownloads, setExpandedDownloads] = useState(false);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Learning Corner</h2>
        <p className="text-gray-600">Comprehensive online examination system with detailed analytics</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Online Exams Section */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Online Exams</h3>
          </div>

          <div className="space-y-4">
            {Object.entries(examCategories).map(([categoryId, category]) => {
              const Icon = category.icon;
              const isExpanded = expandedCategory === categoryId;
              
              return (
                <Card key={categoryId} className="overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleCategory(categoryId)}
                      className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <span className="font-medium">{category.name}</span>
                        <Badge variant="secondary">{category.subcategories.length} topics</Badge>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="border-t bg-gray-50/50 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {category.subcategories.map((subcategory) => (
                            <Link
                              key={subcategory.name}
                              to={subcategory.path}
                              className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-all border"
                            >
                              <span className="text-sm font-medium">{subcategory.name}</span>
                              <Badge variant="outline">{subcategory.count} tests</Badge>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button size="sm" asChild>
                            <Link to={`/exams/${categoryId}`}>View All Tests</Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/exams/${categoryId}/take-test`}>Take Test</Link>
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Other Sections */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Access</h3>
            <div className="space-y-3">
              {otherSections.map((section) => {
                const Icon = section.icon;
                return (
                  <Link
                    key={section.name}
                    to={section.path}
                    className="block p-4 bg-white rounded-lg border hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">{section.name}</h4>
                          <p className="text-sm text-gray-600">{section.description}</p>
                        </div>
                      </div>
                      <Badge variant={typeof section.count === 'string' ? 'default' : 'secondary'}>
                        {section.count}
                      </Badge>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Downloads Section */}
          <div>
            <button
              onClick={() => setExpandedDownloads(!expandedDownloads)}
              className="w-full flex items-center justify-between p-4 bg-white rounded-lg border hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <Download className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <h4 className="font-medium">Downloads</h4>
                  <p className="text-sm text-gray-600">Study materials & resources</p>
                </div>
              </div>
              {expandedDownloads ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>

            {expandedDownloads && (
              <div className="mt-2 space-y-2">
                {downloadCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.path}
                    className="block p-3 ml-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{category.name}</span>
                      <Badge variant="outline" className="text-xs">{category.count}</Badge>
                    </div>
                  </Link>
                ))}
                <div className="ml-4 pt-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/downloads">View All Downloads</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Videos Section */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <Play className="h-5 w-5 text-primary" />
                <h4 className="font-medium">Video Lectures</h4>
                <Badge>120+</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-4">Expert-led video content for all subjects</p>
              <Button size="sm" className="w-full" asChild>
                <Link to="/videos">Watch Videos</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
