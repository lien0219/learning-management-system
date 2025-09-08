"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, AlertCircle, Users, Send } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { useTheme } from "@/hooks/use-theme";

export default function InClassPage() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {t("inClassLearningSession")}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("inquiryBasedTaskChain")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <h3 className="font-medium">
                        {t("understandVariableDeclaration")}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t("variableDeclarationDescription")}
                    </p>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      {t("taskCompleted")}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <h3 className="font-medium">
                        {t("implementHelloWorld")}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t("helloWorldDescription")}
                    </p>
                    <Button variant="outline" className="w-full bg-transparent">
                      {t("markAsComplete")}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <h3 className="font-medium">
                        {t("arithmeticOperationsChallenge")}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t("arithmeticOperationsDescription")}
                    </p>
                    <Button variant="outline" className="w-full bg-transparent">
                      {t("markAsComplete")}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <h3 className="font-medium">
                        {t("conditionalLogicExercise")}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t("conditionalLogicDescription")}
                    </p>
                    <Button variant="outline" className="w-full bg-transparent">
                      {t("markAsComplete")}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        5
                      </div>
                      <h3 className="font-medium">
                        {t("loopingFundamentals")}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t("loopingFundamentalsDescription")}
                    </p>
                    <Button variant="outline" className="w-full bg-transparent">
                      {t("markAsComplete")}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        6
                      </div>
                      <h3 className="font-medium">
                        {t("functionDefinitionPractice")}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t("functionDefinitionDescription")}
                    </p>
                    <Button variant="outline" className="w-full bg-transparent">
                      {t("markAsComplete")}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary rounded"></div>
                  {t("onlineCodeEditor")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm min-h-64">
                      <div className="text-gray-500">
                        #include &lt;stdio.h&gt;
                      </div>
                      <div className="mt-2">
                        <span className="text-blue-400">int</span>{" "}
                        <span className="text-yellow-400">main</span>() {"{"}
                      </div>
                      <div className="ml-4">
                        <span className="text-yellow-400">printf</span>(
                        <span className="text-green-400">
                          "Hello, SDL Learning!\n"
                        </span>
                        );
                      </div>
                      <div className="ml-4">
                        <span className="text-blue-400">return</span>{" "}
                        <span className="text-purple-400">0</span>;
                      </div>
                      <div>{"}"}</div>
                    </div>
                  </div>

                  <div>
                    <div
                      className={`p-4 rounded-lg min-h-64 ${
                        theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                      }`}
                    >
                      <div className="text-sm text-muted-foreground mb-2">
                        {t("programOutputHere")}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {t("clickRunCode")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <Button className="bg-primary hover:bg-primary/90">
                    <div className="w-4 h-4 mr-2">▶</div>
                    {t("runCode")}
                  </Button>
                  <Button variant="outline">
                    <div className="w-4 h-4 mr-2">🗑</div>
                    {t("clearOutput")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("realTimeFeedback")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div
                  className={`flex items-start gap-3 p-3 rounded-lg ${
                    theme === "dark" ? "bg-red-900/20" : "bg-red-50"
                  }`}
                >
                  <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-red-800">
                      {t("error")}
                    </div>
                    <div className="text-sm text-red-700">
                      {t("missingSemicolon")}
                    </div>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-3 p-3 rounded-lg ${
                    theme === "dark" ? "bg-green-900/20" : "bg-green-50"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-green-800">
                      {t("success")}
                    </div>
                    <div className="text-sm text-green-700">
                      {t("testCasePassed")}
                    </div>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-3 p-3 rounded-lg ${
                    theme === "dark" ? "bg-yellow-900/20" : "bg-yellow-50"
                  }`}
                >
                  <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-yellow-800">
                      {t("warning")}
                    </div>
                    <div className="text-sm text-yellow-700">
                      {t("unusedVariable")}
                    </div>
                  </div>
                </div>

                <div
                  className={`flex items-start gap-3 p-3 rounded-lg ${
                    theme === "dark" ? "bg-green-900/20" : "bg-green-50"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-green-800">
                      {t("success")}
                    </div>
                    <div className="text-sm text-green-700">{t("success")}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {t("collaborationHub")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        theme === "dark" ? "bg-blue-900/30" : "bg-blue-100"
                      }`}
                    >
                      <span
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-blue-400" : "text-blue-600"
                        }`}
                      >
                        PA
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{t("profAna")}</div>
                      <div className="text-sm text-muted-foreground">
                        {t("greatProgress")}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-3 rounded-lg ${
                      theme === "dark" ? "bg-blue-900/20" : "bg-blue-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-white">
                          {t("you")}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm">{t("recursiveApproach")}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        theme === "dark" ? "bg-green-900/30" : "bg-green-100"
                      }`}
                    >
                      <span
                        className={`text-sm font-medium ${
                          theme === "dark" ? "text-green-400" : "text-green-600"
                        }`}
                      >
                        AM
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{t("alexM")}</div>
                      <div className="text-sm text-muted-foreground">
                        {t("iterativeApproach")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Input
                    placeholder={t("typeYourMessage")}
                    className="flex-1"
                  />
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <Send className="w-4 h-4" />
                  </Button>
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
