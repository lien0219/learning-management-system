"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Lightbulb } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "@/hooks/use-theme";

export default function PostClassPage() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {t("postClassPageTitle")}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  {t("learningJournal")}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {t("learningJournalDescription")}
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-secondary p-4 rounded-lg mb-4">
                  <p className="text-sm">{t("learningJournalExampleText")}</p>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  {t("saveEntry")}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t("transferTasks")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">
                        {t("linkedListImplementation")}
                      </h4>
                      <Badge className="bg-orange-100 text-orange-800">
                        {t("mediumDifficulty")}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t("implementLinkedListDescription")}
                    </p>
                    <Button variant="outline" size="sm">
                      {t("startTask")}
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">
                        {t("dynamicArrayResizing")}
                      </h4>
                      <Badge className="bg-red-100 text-red-800">
                        {t("hardDifficulty")}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t("dynamicArrayResizingDescription")}
                    </p>
                    <Button variant="outline" size="sm">
                      {t("startTask")}
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{t("basicStringUtility")}</h4>
                      <Badge className="bg-green-100 text-green-800">
                        {t("easyDifficulty")}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t("basicStringUtilityDescription")}
                    </p>
                    <Button variant="outline" size="sm">
                      {t("startTask")}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("pointersMemoryQuiz")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">
                      {t("questionDynamicAllocation")}
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="q1"
                          value="calloc"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{t("optionCalloc")}</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="q1"
                          value="malloc"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{t("optionMalloc")}</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="q1"
                          value="realloc"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{t("optionRealloc")}</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="q1"
                          value="free"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{t("optionFree")}</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">
                      {t("questionVoidPointer")}
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="q2"
                          value="pointer-to-function"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">
                          {t("optionPointerToFunction")}
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="q2"
                          value="generic-pointer"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">
                          {t("optionGenericPointer")}
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="q2"
                          value="array-pointer"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">
                          {t("optionArrayPointer")}
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="q2"
                          value="uninitialized-pointer"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">
                          {t("optionUninitializedPointer")}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">
                      {t("questionFreeFunction")}
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="q3"
                          value="allocate-memory"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">
                          {t("optionAllocateMemory")}
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="q3"
                          value="resize-memory"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">
                          {t("optionResizeMemory")}
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="q3"
                          value="release-memory"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">
                          {t("optionReleaseMemory")}
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="q3"
                          value="copy-memory"
                          className="w-4 h-4"
                        />
                        <span className="text-sm">{t("optionCopyMemory")}</span>
                      </label>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  {t("submitQuiz")}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  {t("effectiveReflectionStrategies")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">
                      {t("summarizeKeyLearnings")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("summarizeKeyLearningsDescription")}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">
                      {t("identifyChallenges")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("identifyChallengesDescription")}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">
                      {t("connectToPriorKnowledge")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t("connectToPriorKnowledgeDescription")}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">{t("planNextSteps")}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t("planNextStepsDescription")}
                    </p>
                  </div>
                </div>

                <div className="bg-secondary p-4 rounded-lg">
                  <div
                    className={`w-24 h-24 mx-auto mb-4 ${
                      theme === "dark" ? "bg-primary/20" : "bg-primary/10"
                    } rounded-full flex items-center justify-center`}
                  >
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t bg-background mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>{t("resources")}</span>
              <span>{t("company")}</span>
              <span>{t("support")}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
