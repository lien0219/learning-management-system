import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  MessageSquare,
  ThumbsUp,
  Eye,
  Download,
  FileText,
  Video,
  BookOpen,
} from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Community</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Discussion Forum */}
          <Card>
            <CardHeader>
              <CardTitle>Discussion Forum</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search discussions..." className="pl-10" />
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="popular" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="new">New</TabsTrigger>
                  <TabsTrigger value="my">My Discussions</TabsTrigger>
                </TabsList>

                <TabsContent value="popular" className="space-y-4 mt-4">
                  <div className="space-y-3">
                    <div className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                      <h4 className="font-medium text-sm mb-1">
                        Understanding Pointers in C
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        by Alex Johnson on May 28, 2024
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          Pointers
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          Memory
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3" />
                          Beginner
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>👍 25</span>
                          <span>💬 850</span>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                      <h4 className="font-medium text-sm mb-1">
                        Best Practices for Error Handling
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        by Bob Williams on May 27, 2024
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          Error Handling
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          Best Practices
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>👍 18</span>
                          <span>💬 670</span>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                      <h4 className="font-medium text-sm mb-1">
                        Debugging with GDB tips
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        by Charlie Brown on May 26, 2024
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          Debugging
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          Debugging
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>👍 9</span>
                          <span>💬 530</span>
                        </div>
                      </div>
                    </div>

                    <div className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                      <h4 className="font-medium text-sm mb-1">
                        Optimizing C code for speed
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        by Diana Miller on May 25, 2024
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          Optimization
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          Performance
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>👍 23</span>
                          <span>💬 1100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="new" className="space-y-4 mt-4">
                  <div className="text-center text-muted-foreground text-sm py-8">
                    New discussions will appear here
                  </div>
                </TabsContent>

                <TabsContent value="my" className="space-y-4 mt-4">
                  <div className="text-center text-muted-foreground text-sm py-8">
                    Your discussions will appear here
                  </div>
                </TabsContent>
              </Tabs>

              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                Start a New Discussion
              </Button>
            </CardContent>
          </Card>

          {/* Middle Column - Q&A Section */}
          <Card>
            <CardHeader>
              <CardTitle>Q&A Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-sm mb-2">
                    How do I correctly free dynamically allocated memory?
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    To prevent memory leaks when dynamically allocating memory
                    in C, you must use the free() function to deallocate memory
                    allocated with malloc(), calloc(), or realloc().
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Asked by Grace Harper
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3" />
                      40
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      12
                    </span>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-sm mb-2">
                    What's the difference between struct and union?
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    The key difference between 'struct' and 'union' in C is how
                    they allocate memory. A struct allocates separate memory for
                    each member, while a union shares the same memory location
                    among all members.
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Asked by Isaac Newton
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3" />
                      35
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />8
                    </span>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-sm mb-2">
                    Explain the concept of 'undefined behavior' in C
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    Undefined behavior in C refers to code constructs that have
                    no defined semantics according to the C standard. This means
                    the program can behave unpredictably, and the compiler is
                    free to do anything.
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Asked by Katherine Johnson
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3" />
                      28
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      15
                    </span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Ask a Question
              </Button>
            </CardContent>
          </Card>

          {/* Right Column - Resource Sharing */}
          <Card>
            <CardHeader>
              <CardTitle>Resource Sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">
                        Complete Guide to C Pointers (PDF)
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        A comprehensive PDF guide covering everything from basic
                        pointer concepts to advanced usage.
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        Shared by Jane O'Connell
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          1200
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Video className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">
                        Data Structures in C: Linked Lists (Video)
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        An instructional video series explaining linked lists,
                        their implementation, and common use cases.
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        Shared by Max Chen
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          800
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">
                        Top 10 C Programming Interview Questions (Article)
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        An insightful article detailing common C interview
                        questions and how to approach them effectively.
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        Shared by Noah Williams
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3" />
                          760
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-4 h-4 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">
                        File I/O in C: A Practical Guide
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        A detailed article with examples on reading from and
                        writing to files in C programming.
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        Shared by Olivia Davis
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          600
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Share a Resource
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Resources</span>
              <span>Company</span>
              <span>Support</span>
            </div>
            {/* <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Made with</span>
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
