"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
} from "recharts"

const progressData = [
  { month: "Jan", modules: 78, average: 75 },
  { month: "Feb", modules: 82, average: 78 },
  { month: "Mar", modules: 85, average: 82 },
  { month: "Apr", modules: 88, average: 85 },
  { month: "May", modules: 92, average: 88 },
  { month: "Jun", modules: 95, average: 90 },
]

const skillsData = [
  { skill: "Knowledge Recall", value: 85 },
  { skill: "Problem Solving", value: 92 },
  { skill: "Critical Thinking", value: 78 },
  { skill: "Debugging", value: 88 },
  { skill: "Conceptual Understanding", value: 90 },
  { skill: "Coding Efficiency", value: 82 },
]

const learningCurveData = [
  { week: "1", score: 65 },
  { week: "2", score: 72 },
  { week: "3", score: 78 },
  { week: "4", score: 85 },
  { week: "5", score: 88 },
  { week: "6", score: 92 },
  { week: "7", score: 89 },
]

export function PerformanceCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Learning Progress Over Time */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Learning Progress Over Time</CardTitle>
          <p className="text-sm text-muted-foreground">Track your module completion and average scores monthly</p>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[70, 100]} />
                <Line type="monotone" dataKey="modules" stroke="#3b82f6" strokeWidth={2} name="Modules Completed" />
                <Line type="monotone" dataKey="average" stroke="#10b981" strokeWidth={2} name="Average Score" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Modules Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">Average Score</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills Proficiency Radar */}
      <Card>
        <CardHeader>
          <CardTitle>Skills Proficiency Radar</CardTitle>
          <p className="text-sm text-muted-foreground">Visual breakdown of your strengths and areas for growth</p>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={skillsData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12 }} />
                <PolarRadiusAxis domain={[0, 100]} tick={false} />
                <Radar
                  name="Skills"
                  dataKey="value"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Learning Curve Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Learning Curve Analysis</CardTitle>
          <p className="text-sm text-muted-foreground">Understand your performance trend over multiple attempts</p>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={learningCurveData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 100]} />
                <Bar dataKey="score" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center mt-4">
            <span className="text-sm text-muted-foreground">Weekly Performance</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
