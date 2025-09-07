"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Target, BookOpen, Video, FileText, Code } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
export default function PreClassPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {t("preClassPreparation")}
          </h1>
          <p className="text-muted-foreground">{t("preClassSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Pre-test Learning Diagnosis */}
            <Card>
              <CardHeader>
                <CardTitle>{t("preTestLearningDiagnosis")}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {t("preTestSubtitle")}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <Label className="text-sm font-medium">
                      {t("whatBringsYouHere")}
                    </Label>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">
                      {t("howDoYouFeelAboutYourCurrentSkillLevel")}
                    </Label>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">
                      {t("whatIsYourProgrammingExperience")}
                    </Label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="beginner"
                          name="experience"
                          className="w-4 h-4"
                        />
                        <label htmlFor="beginner" className="text-sm">
                          {t("beginner")}
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="intermediate"
                          name="experience"
                          className="w-4 h-4"
                        />
                        <label htmlFor="intermediate" className="text-sm">
                          {t("intermediate")}
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="advanced"
                          name="experience"
                          className="w-4 h-4"
                        />
                        <label htmlFor="advanced" className="text-sm">
                          {t("advanced")}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  {t("startQuiz")}
                </Button>
              </CardContent>
            </Card>

            {/* Your Self-assessment Learning Path */}
            <Card>
              <CardHeader>
                <CardTitle>{t("yourSelfAssessmentLearningPath")}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {t("selfAssessmentPathSubtitle")}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{t("foundations")}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t("variablesAndDataTypes")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{t("controlFlow")}</h4>
                      <p className="text-sm text-muted-foreground">
                        {t("loopsAndConditionals")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-muted-foreground">
                        {t("functions")}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t("functionDefinitionAndCalls")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-muted-foreground">
                        {t("arraysAndPointers")}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t("memoryManagement")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-muted-foreground">
                        {t("dataStructures")}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t("structsAndFileIO")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                      6
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-muted-foreground">
                        {t("advancedTopics")}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t("dynamicMemoryAndAlgorithms")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Set Your Learning Goals */}
            <Card>
              <CardHeader>
                <CardTitle>{t("setYourLearningGoals")}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {t("learningGoalsSubtitle")}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="goal" className="text-sm font-medium">
                    {t("whatDoYouWantToLearnOrAchieve")}
                  </Label>
                  <Textarea
                    id="goal"
                    placeholder={t("goalPlaceholder")}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="timeline" className="text-sm font-medium">
                    {t("byWhen")}
                  </Label>
                  <Input id="timeline" type="date" className="mt-2" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  {t("saveGoals")}
                </Button>
              </CardContent>
            </Card>

            {/* Resource Packs */}
            <Card>
              <CardHeader>
                <CardTitle>{t("resourcePacks")}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {t("resourcePacksSubtitle")}
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <Video className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          {t("variablesAndDataTypes")}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t("video")}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t("variablesAndDataTypesDescription")}
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600 text-sm"
                    >
                      {t("viewResource")}
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          {t("controlFlowAndLogic")}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t("article")}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t("controlFlowAndLogicDescription")}
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-green-600 text-sm"
                    >
                      {t("viewResource")}
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <Code className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          {t("debuggingStrategies")}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t("interactive")}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t("debuggingStrategiesDescription")}
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-purple-600 text-sm"
                    >
                      {t("viewResource")}
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          {t("functionsAndScope")}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t("guide")}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t("functionsAndScopeDescription")}
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-orange-600 text-sm"
                    >
                      {t("viewResource")}
                    </Button>
                  </div>

                  <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-pink-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          {t("arraysAndStringsInC")}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {t("tutorial")}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t("arraysAndStringsInCDescription")}
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-pink-600 text-sm"
                    >
                      {t("viewResource")}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

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
                <span className="text-sm font-medium text-blue-600">Voly</span>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
