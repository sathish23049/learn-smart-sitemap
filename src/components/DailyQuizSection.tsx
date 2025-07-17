import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  Users, 
  Trophy, 
  Play, 
  TrendingUp,
  BookOpen,
  Target,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const dailyQuizzes = [
  {
    id: 1,
    title: "Banking Awareness Daily Quiz",
    subject: "Banking",
    questions: 20,
    duration: "15 min",
    participants: 1250,
    difficulty: "Medium",
    date: "Today",
    topScore: 95,
    averageScore: 76
  },
  {
    id: 2,
    title: "Quantitative Aptitude Challenge",
    subject: "Mathematics",
    questions: 25,
    duration: "20 min", 
    participants: 980,
    difficulty: "Hard",
    date: "Today",
    topScore: 88,
    averageScore: 65
  },
  {
    id: 3,
    title: "Current Affairs - Weekly Wrap",
    subject: "General Knowledge",
    questions: 15,
    duration: "10 min",
    participants: 1500,
    difficulty: "Easy",
    date: "Today",
    topScore: 100,
    averageScore: 82
  },
  {
    id: 4,
    title: "English Language & Comprehension",
    subject: "English",
    questions: 20,
    duration: "18 min",
    participants: 875,
    difficulty: "Medium",
    date: "Today",
    topScore: 92,
    averageScore: 74
  }
];

const quizStats = [
  { label: "Daily Active Users", value: "5,000+", icon: Users },
  { label: "Questions Available", value: "50,000+", icon: BookOpen },
  { label: "Average Accuracy", value: "76%", icon: Target },
  { label: "Top Performers", value: "1,200+", icon: Star }
];

const subjects = [
  { name: "Banking Awareness", color: "bg-blue-500", count: 1250 },
  { name: "Quantitative Aptitude", color: "bg-green-500", count: 980 },
  { name: "English Language", color: "bg-purple-500", count: 875 },
  { name: "Reasoning Ability", color: "bg-orange-500", count: 1100 },
  { name: "Current Affairs", color: "bg-red-500", count: 1500 },
  { name: "Computer Knowledge", color: "bg-indigo-500", count: 650 }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "bg-green-100 text-green-800";
    case "Medium": return "bg-yellow-100 text-yellow-800";
    case "Hard": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export function DailyQuizSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            Daily Practice
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Daily Quiz Challenge
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Test your knowledge with our carefully curated daily quizzes. 
            Track your progress and compete with thousands of other aspirants.
          </p>
        </div>

        {/* Quiz Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quizStats.map((stat, index) => {
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Daily Quizzes */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Today's Quizzes</h3>
              <Button variant="outline" asChild>
                <Link to="/quiz">View All Quizzes</Link>
              </Button>
            </div>

            <div className="space-y-6">
              {dailyQuizzes.map((quiz) => (
                <Card key={quiz.id} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">
                            {quiz.title}
                          </h4>
                          <Badge 
                            variant="secondary"
                            className={getDifficultyColor(quiz.difficulty)}
                          >
                            {quiz.difficulty}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{quiz.subject}</p>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            <span>{quiz.questions} Questions</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{quiz.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{quiz.participants} participants</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button size="lg" className="ml-4" asChild>
                        <Link to={`/quiz/${quiz.id}/start`}>
                          <Play className="h-4 w-4 mr-2" />
                          Take Test
                        </Link>
                      </Button>
                    </div>

                    {/* Quiz Stats */}
                    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">Top Score</span>
                          <span className="text-sm font-semibold text-green-600">
                            {quiz.topScore}%
                          </span>
                        </div>
                        <Progress value={quiz.topScore} className="h-2" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-600">Average</span>
                          <span className="text-sm font-semibold text-blue-600">
                            {quiz.averageScore}%
                          </span>
                        </div>
                        <Progress value={quiz.averageScore} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Subject Participation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Subject Popularity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subjects.map((subject, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{subject.name}</span>
                        <span className="text-gray-500">{subject.count}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${subject.color}`}
                          style={{ width: `${(subject.count / 1500) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Access */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Access</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/quiz/mock-tests">
                    <Trophy className="h-4 w-4 mr-2" />
                    Mock Test Series
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/quiz/previous-papers">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Previous Year Papers
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/quiz/leaderboard">
                    <Star className="h-4 w-4 mr-2" />
                    Leaderboard
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/quiz/performance">
                    <Target className="h-4 w-4 mr-2" />
                    My Performance
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Study Plan */}
            <Card className="bg-gradient-primary text-white">
              <CardHeader>
                <CardTitle>Personalized Study Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4 text-sm">
                  Get a customized study plan based on your performance and target exam.
                </p>
                <Button variant="secondary" className="w-full">
                  Create Study Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}