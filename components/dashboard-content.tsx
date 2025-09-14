"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  Target,
  BookOpen,
  Award,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { useAuth } from "@/hooks/use-auth";
import { useEffect, useState } from "react";
import { getDailyMotivation } from "@/lib/api";
import { useRouter } from "next/navigation";

export function DashboardContent() {
  const { t } = useLanguage();
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [dailyQuote, setDailyQuote] = useState<string>("");
  const [quoteLoading, setQuoteLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDailyMotivation = async () => {
      try {
        setQuoteLoading(true);
        const response: any = await getDailyMotivation();
        if (response.code === 200 && response.data) {
          setDailyQuote(response.data.content);
        }
      } catch (error) {
        console.error("获取每日激励失败:", error);
        setDailyQuote(t("dailyQuote"));
      } finally {
        setQuoteLoading(false);
      }
    };

    fetchDailyMotivation();
  }, [t]);

  const navigateToResource = (
    categoryId: string,
    resourceType: string,
    resourceId: string
  ) => {
    const params = new URLSearchParams();

    if (categoryId) {
      params.append("category", categoryId);
    }
    if (resourceType) {
      params.append("type", resourceType);
    }
    if (resourceId) {
      params.append("id", resourceId);
    }

    const queryString = params.toString();
    const url = queryString ? `/resources?${queryString}` : "/resources";

    router.push(url);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {t("welcomeBack")}
          {isLoading ? "..." : user?.name || ""}
        </h1>
        <p className="text-muted-foreground">{t("learningJourney")}</p>

        <div className="flex gap-4 mt-4">
          <Button className="bg-primary hover:bg-primary/90">
            <BookOpen className="w-4 h-4 mr-2" />
            {t("startTodaysLesson")}
          </Button>
          <Button variant="outline">
            <Target className="w-4 h-4 mr-2" />
            {t("reviewYourGoals")}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                {t("todaysLearningTasks")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-border rounded"></div>
                <span className="text-sm text-foreground">
                  {t("completePreClassReading")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-border rounded"></div>
                <span className="text-sm text-foreground">
                  {t("submitInClassExercise")}
                </span>
              </div>
              <div className="flex items-center gap-3 bg-primary/5 dark:bg-primary/10 p-2 rounded">
                <div className="w-4 h-4 bg-primary rounded"></div>
                <span className="text-sm font-medium text-foreground">
                  {t("reviewFunctions")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-border rounded"></div>
                <span className="text-sm text-foreground">
                  {t("startReflectionJournal")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-border rounded"></div>
                <span className="text-sm text-foreground">
                  {t("attemptQuiz")}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                {t("yourGoalProgress")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">
                    {t("masterCPointers")}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    85% Complete
                  </span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">
                    {t("completeAlgorithmsCourse")}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    25% Complete
                  </span>
                </div>
                <Progress value={25} className="h-2" />
              </div>
              <Button variant="link" className="p-0 h-auto text-primary">
                {t("viewDetails")} →
              </Button>
            </CardContent>
          </Card>

          {/* 推荐 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                {t("recommendedResources")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-background rounded-lg mb-3 flex items-center justify-center border border-border">
                    <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-medium mb-1 text-foreground">
                    {t("memoryManagerGuide")}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">Article</p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-blue-600 dark:text-blue-400 text-sm"
                    onClick={() =>
                      navigateToResource("pointers-memory", "", "")
                    }
                  >
                    {t("viewResource")}
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-background rounded-lg mb-3 flex items-center justify-center border border-border">
                    <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-medium mb-1 text-foreground">
                    {t("stringManipulation")}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Problem Set
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-purple-600 dark:text-purple-400 text-sm"
                    onClick={() => navigateToResource("c-basics", "", "")}
                  >
                    {t("viewResource")}
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-background rounded-lg mb-3 flex items-center justify-center border border-border">
                    <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="font-medium mb-1 text-foreground">
                    {t("recursionTutorial")}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">Video</p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-orange-600 dark:text-orange-400 text-sm"
                    onClick={() => navigateToResource("algorithms", "", "")}
                  >
                    {t("viewResource")}
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-background rounded-lg mb-3 flex items-center justify-center border border-border">
                    <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="font-medium mb-1 text-foreground">
                    {t("fileIOLab")}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">Lab</p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-green-600 dark:text-green-400 text-sm"
                    onClick={() => navigateToResource("file-io", "", "")}
                  >
                    {t("viewResource")}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-foreground">
                {t("currentLearningStreak")}
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                Self-improvement: What are your personal strengths in C?
              </p>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1 text-foreground">
                  Days Streak
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  Keep the pace going!
                </div>
                <div className="w-16 h-16 mx-auto bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔥</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  {t("achievements")}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-foreground">
                      1250
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t("totalPoints")}
                    </div>
                  </div>
                </div>
              </div>
              <Button
                variant="link"
                className="p-0 h-auto text-primary text-sm mt-3"
              >
                {t("viewAllAchievements")} →
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                {t("dailyMotivation")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-primary/5 dark:bg-primary/10 p-4 rounded-lg">
                <p className="text-sm text-center italic text-foreground">
                  {quoteLoading ? "..." : `"${dailyQuote || t("dailyQuote")}"`}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">
                {t("learningDataSnapshot")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">
                    15 hrs
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t("thisWeek")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">88%</div>
                  <div className="text-xs text-muted-foreground">
                    {t("avgSuccess")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">12</div>
                  <div className="text-xs text-muted-foreground">
                    {t("milestones")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">24</div>
                  <div className="text-xs text-muted-foreground">
                    {t("challengesResolved")}
                  </div>
                </div>
              </div>
              <Button
                variant="link"
                className="p-0 h-auto text-primary text-sm w-full"
              >
                {t("viewFullAnalytics")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="border-t bg-background mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>{t("resources")}</span>
              <span>{t("company")}</span>
              <span>{t("support")}</span>
            </div>
            {/* <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">{t("madeWith")}</span>
              <div className="flex items-center space-x-1">
                <span className="text-sm font-medium text-primary">Voly</span>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </main>
  );
}
