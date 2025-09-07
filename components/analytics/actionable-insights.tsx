import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Target, TrendingUp, BookOpen } from "lucide-react"

const suggestions = [
  {
    icon: Target,
    title: "Practice dynamic memory allocation",
    description: "Solve exercises involving 'malloc' and 'free' to prevent memory leaks.",
    color: "text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Strengthen data structures",
    description: "Strengthen understanding of linked lists and trees by implementing them from scratch.",
    color: "text-green-600",
  },
  {
    icon: TrendingUp,
    title: "Attempt harder competitive programming problems",
    description: "Challenge yourself with medium-difficulty questions on platforms like LeetCode.",
    color: "text-orange-600",
  },
  {
    icon: CheckCircle2,
    title: "Engage in community forums",
    description: "Discuss complex topics and learn from others' approaches to problem-solving.",
    color: "text-purple-600",
  },
]

export function ActionableInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personalized Improvement Suggestions</CardTitle>
        <p className="text-sm text-muted-foreground">
          Based on your recent performance, here are some actionable ways to enhance your learning:
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestions.map((suggestion, index) => {
            const Icon = suggestion.icon
            return (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className={`p-2 rounded-full bg-white ${suggestion.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">{suggestion.title}</h4>
                  <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
