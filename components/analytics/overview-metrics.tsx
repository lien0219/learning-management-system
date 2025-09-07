import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, Clock, Zap } from "lucide-react"

const metrics = [
  {
    title: "Total Modules Completed",
    value: "42",
    subtitle: "+2 this week",
    icon: TrendingUp,
    color: "text-blue-600",
  },
  {
    title: "Average Score",
    value: "88%",
    subtitle: "+3% from last quarter",
    icon: Target,
    color: "text-green-600",
  },
  {
    title: "Total Study Hours",
    value: "156 hrs",
    subtitle: "25 hrs this week",
    icon: Clock,
    color: "text-orange-600",
  },
  {
    title: "Challenges Attempted",
    value: "28",
    subtitle: "8 new challenges",
    icon: Zap,
    color: "text-purple-600",
  },
]

export function OverviewMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
              <Icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{metric.subtitle}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
