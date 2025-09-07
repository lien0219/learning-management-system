"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Target,
  Award,
  Brain,
  Users,
  Bug,
  Database,
  Lightbulb,
  Code,
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import type { TranslationKey } from "@/lib/translations";

// 定义badge类型，确保name属性为TranslationKey类型
type BadgeType = {
  name: TranslationKey;
  icon: React.ElementType;
  color: string;
  earned: boolean;
};

const badges: BadgeType[] = [
  {
    name: "cBasicsMaster",
    icon: Code,
    color: "bg-purple-100 text-purple-600",
    earned: true,
  },
  {
    name: "algorithmAce",
    icon: Brain,
    color: "bg-orange-100 text-orange-600",
    earned: true,
  },
  {
    name: "deepLearner",
    icon: Brain,
    color: "bg-pink-100 text-pink-600",
    earned: true,
  },
  {
    name: "communityContributor",
    icon: Users,
    color: "bg-green-100 text-green-600",
    earned: true,
  },
  {
    name: "debuggingDynamo",
    icon: Bug,
    color: "bg-gray-100 text-gray-400",
    earned: false,
  },
  {
    name: "dataStructuresPro",
    icon: Database,
    color: "bg-blue-100 text-blue-600",
    earned: true,
  },
  {
    name: "problemSolverElite",
    icon: Lightbulb,
    color: "bg-yellow-100 text-yellow-600",
    earned: true,
  },
  {
    name: "syntaxSage",
    icon: Code,
    color: "bg-indigo-100 text-indigo-600",
    earned: true,
  },
];

const leaderboard = [
  {
    rank: 1,
    name: "Alice Johnson",
    challenge: "Memory Management Challenge",
    score: 980,
  },
  { rank: 2, name: "Bob Williams", challenge: "Pointers Puzzle", score: 955 },
  {
    rank: 3,
    name: "Charlie Brown",
    challenge: "File I/O Marathon",
    score: 920,
  },
  { rank: 4, name: "Diana Miller", challenge: "Recursion Rumble", score: 890 },
  {
    rank: 5,
    name: "Ethan Davis",
    challenge: "Data Structure Sprint",
    score: 875,
  },
];

const learningGoals = [
  {
    title: "Complete 'Pointers in C' Module",
    description: "Master advanced pointer concepts and usage.",
    progress: 75,
    status: "in-progress",
    targetDate: "2024-06-30",
  },
  {
    title: "Build a Simple Calculator App",
    description:
      "Apply C fundamentals to create a functional command-line calculator.",
    progress: 50,
    status: "in-progress",
    targetDate: "2024-07-15",
  },
  {
    title: "Understand Dynamic Memory Allocation",
    description: "Grasp malloc, calloc, realloc, and free functions.",
    progress: 0,
    status: "not-started",
    targetDate: "2024-08-01",
  },
  {
    title: "Submit 3 Code Review Requests",
    description:
      "Actively participate in peer learning by requesting feedback.",
    progress: 100,
    status: "completed",
    targetDate: "2024-05-25",
  },
  {
    title: "Explore Standard Libraries",
    description: "Deep dive into <stdio.h>, <stdlib.h>, and <string.h>.",
    progress: 20,
    status: "in-progress",
    targetDate: "2024-09-10",
  },
];

export default function AchievementsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {t("achievementsPageTitle")}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Total Points & Level */}
          <Card>
            <CardHeader>
              <CardTitle>{t("totalPointsLevel")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-4xl font-bold text-foreground">
                    1430 XP
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="bg-blue-600 text-white">
                      {t("level")} 3
                    </Badge>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>{t("currentXp")}: 1430</span>
                    <span>{t("nextLevelAt")}: 2000 XP</span>
                  </div>
                  <Progress value={71.5} className="h-3" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                {t("keepLearningMessage")}
              </p>
            </CardContent>
          </Card>

          {/* Challenge Task Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle>{t("challengeTaskLeaderboard")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-4 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b">
                  <span>{t("rank")}</span>
                  <span>{t("student")}</span>
                  <span>{t("challenge")}</span>
                  <span>{t("score")}</span>
                </div>
                {leaderboard.map((entry) => (
                  <div
                    key={entry.rank}
                    className="grid grid-cols-4 gap-4 text-sm items-center"
                  >
                    <div className="flex items-center gap-2">
                      {entry.rank <= 3 && (
                        <Trophy className="w-4 h-4 text-yellow-500" />
                      )}
                      <span className="font-medium">{entry.rank}</span>
                    </div>
                    <span>{entry.name}</span>
                    <span className="text-muted-foreground">
                      {entry.challenge}
                    </span>
                    <span className="font-medium">{entry.score}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Your Badge Collection */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{t("yourBadgeCollection")}</CardTitle>
                <span className="text-sm text-muted-foreground">
                  {t("viewAll")}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {badges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className="text-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 ${
                          badge.color
                        } ${!badge.earned ? "opacity-50" : ""}`}
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                      <p
                        className={`text-xs font-medium ${
                          !badge.earned ? "text-muted-foreground" : ""
                        }`}
                      >
                        {t(badge.name)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* My Learning Goals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                {t("myLearningGoals")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {learningGoals.map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {goal.status === "completed" && (
                        <Award className="w-4 h-4 text-green-600" />
                      )}
                      {goal.status === "in-progress" && (
                        <Target className="w-4 h-4 text-blue-600" />
                      )}
                      {goal.status === "not-started" && (
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300" />
                      )}
                      <span className="font-medium text-sm">{goal.title}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {goal.status === "in-progress" && t("inProgress")}
                      {goal.status === "completed" && t("completed")}
                      {goal.status === "not-started" && t("notStarted")}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {goal.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Progress value={goal.progress} className="flex-1 h-2" />
                    <span className="text-xs text-muted-foreground">
                      {goal.progress}%
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {t("targetDate")}
                    {goal.targetDate}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-background mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>{t("resources")}</span>
              <span>{t("company")}</span>
              <span>{t("support")}</span>
            </div>
            {/* <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                {t("madeWith")}
              </span>
              <div className="flex items-center space-x-1">
                <span className="text-sm font-medium text-blue-600">
                  {t("voly")}
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
