"use client";

import { useState, useEffect } from "react";
import { BookOpen, Video, FileText, Code, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useLanguage } from "@/hooks/use-language";
import { useSearchParams } from "next/navigation";

interface ResourceItem {
  id: string;
  title: string;
  type: "video" | "article" | "exercise";
  description?: string;
  link: string;
}

interface ResourceCategory {
  id: string;
  name: string;
  resources: {
    videos: ResourceItem[];
    articles: ResourceItem[];
    exercises: ResourceItem[];
  };
}

export default function RecommendedResources() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(
    null
  );
  const [expandedTypes, setExpandedTypes] = useState<Record<string, string>>(
    {}
  );

  useEffect(() => {
    const category = searchParams.get("category");
    const type = searchParams.get("type");
    const id = searchParams.get("id");

    if (category) {
      setSelectedCategory(category);
      if (type) {
        setExpandedTypes((prev) => ({
          ...prev,
          [category]: type,
        }));
      } else {
        setExpandedTypes((prev) => ({
          ...prev,
          [category]: "videos",
        }));
      }

      if (id) {
        setSelectedResourceId(id);
      }

      // 滚动到选中的分类
      setTimeout(() => {
        const element = document.getElementById(`category-${category}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [searchParams]);

  // 资源分类数据
  const resourceCategories: ResourceCategory[] = [
    {
      id: "c-basics",
      name: "C Basics",
      resources: {
        videos: [
          {
            id: "cb-vid-1",
            title: "Introduction to C Programming",
            type: "video",
            description: "Learn the fundamentals of C programming language",
            link: "/resources/c-basics/intro",
          },
          {
            id: "cb-vid-2",
            title: "First Steps with C",
            type: "video",
            description:
              "Setting up your environment and writing your first program",
            link: "/resources/c-basics/first-steps",
          },
          {
            id: "cb-vid-3",
            title: "Print 'Hello World' in C",
            type: "video",
            description:
              "A quick tutorial on writing and executing a simple C program",
            link: "/resources/c-basics/hello-world",
          },
        ],
        articles: [
          {
            id: "cb-art-1",
            title: "Variables and Data Types in C",
            type: "article",
            description:
              "Understanding different data types and variable declarations",
            link: "/resources/c-basics/variables",
          },
          {
            id: "cb-art-2",
            title: "C Syntax Overview",
            type: "article",
            description: "A comprehensive guide to C language syntax",
            link: "/resources/c-basics/syntax",
          },
          {
            id: "cb-art-3",
            title: "Sum of Two Numbers in C",
            type: "article",
            description:
              "Step-by-step explanation of a simple arithmetic program",
            link: "/resources/c-basics/sum",
          },
        ],
        exercises: [
          {
            id: "cb-exe-1",
            title: "Input/Output Operations",
            type: "exercise",
            description: "Practice reading input and displaying output in C",
            link: "/resources/c-basics/io",
          },
          {
            id: "cb-exe-2",
            title: "Calculate Even or Odd Numbers",
            type: "exercise",
            description:
              "Write a program to determine if a number is even or odd",
            link: "/resources/c-basics/even-odd",
          },
          {
            id: "cb-exe-3",
            title: "Control Flow Basics",
            type: "exercise",
            description: "Practice using if-else statements and loops",
            link: "/resources/c-basics/control-flow",
          },
        ],
      },
    },
    {
      id: "pointers-memory",
      name: "Pointers & Memory",
      resources: {
        videos: [
          {
            id: "pm-vid-1",
            title: "Pointers: The Basics",
            type: "video",
            description: "Introduction to pointers and their importance in C",
            link: "/resources/pointers/basics",
          },
          {
            id: "pm-vid-2",
            title: "Pointers vs. Variables",
            type: "video",
            description:
              "Understanding the difference between pointers and variables",
            link: "/resources/pointers/comparison",
          },
          {
            id: "pm-vid-3",
            title: "Pointer Declaration and Dereferencing",
            type: "video",
            description: "Learn how to declare and use pointers effectively",
            link: "/resources/pointers/declaration",
          },
        ],
        articles: [
          {
            id: "pm-art-1",
            title: "Dynamic Memory Allocation",
            type: "article",
            description:
              "Understanding malloc, calloc, realloc, and free functions",
            link: "/resources/pointers/dynamic-memory",
          },
          {
            id: "pm-art-2",
            title: "Memory in C: Stack vs. Heap",
            type: "article",
            description: "Exploring memory management concepts in C",
            link: "/resources/pointers/memory-types",
          },
          {
            id: "pm-art-3",
            title: "Pointers and Arrays",
            type: "article",
            description: "The relationship between pointers and arrays in C",
            link: "/resources/pointers/arrays",
          },
        ],
        exercises: [
          {
            id: "pm-exe-1",
            title: "Avoid Memory Leaks",
            type: "exercise",
            description: "Practice proper memory allocation and deallocation",
            link: "/resources/pointers/avoid-leaks",
          },
          {
            id: "pm-exe-2",
            title: "String Reversal with Pointers",
            type: "exercise",
            description: "Implement string reversal using pointer arithmetic",
            link: "/resources/pointers/string-reversal",
          },
          {
            id: "pm-exe-3",
            title: "Implement a Simple List Node",
            type: "exercise",
            description: "Create a basic linked list node structure",
            link: "/resources/pointers/list-node",
          },
        ],
      },
    },
    {
      id: "data-structures",
      name: "Data Structures",
      resources: {
        videos: [
          {
            id: "ds-vid-1",
            title: "Arrays and Lists Overview",
            type: "video",
            description: "Introduction to fundamental data structures",
            link: "/resources/ds/arrays-lists",
          },
          {
            id: "ds-vid-2",
            title: "Stacks and Queues",
            type: "video",
            description: "Understanding stack and queue data structures",
            link: "/resources/ds/stacks-queues",
          },
          {
            id: "ds-vid-3",
            title: "Trees and Graphs Basics",
            type: "video",
            description: "Introduction to tree and graph data structures",
            link: "/resources/ds/trees-graphs",
          },
        ],
        articles: [
          {
            id: "ds-art-1",
            title: "Choosing the Right Data Structure",
            type: "article",
            description: "Guidance on selecting appropriate data structures",
            link: "/resources/ds/choosing",
          },
          {
            id: "ds-art-2",
            title: "Implementing a Linked List",
            type: "article",
            description: "Step-by-step guide to building a linked list in C",
            link: "/resources/ds/linked-list",
          },
          {
            id: "ds-art-3",
            title: "Hash Tables Explained",
            type: "article",
            description: "Understanding hash tables and their applications",
            link: "/resources/ds/hash-tables",
          },
        ],
        exercises: [
          {
            id: "ds-exe-1",
            title: "Implement a Basic Stack",
            type: "exercise",
            description: "Create a stack with push, pop, and peek operations",
            link: "/resources/ds/stack",
          },
          {
            id: "ds-exe-2",
            title: "Queue Implementation",
            type: "exercise",
            description: "Build a queue using arrays or linked lists",
            link: "/resources/ds/queue",
          },
          {
            id: "ds-exe-3",
            title: "Binary Search Tree Insertion",
            type: "exercise",
            description: "Implement insertion in a binary search tree",
            link: "/resources/ds/bst-insert",
          },
        ],
      },
    },
    {
      id: "algorithms",
      name: "Algorithms",
      resources: {
        videos: [
          {
            id: "algo-vid-1",
            title: "Sorting Algorithms Overview",
            type: "video",
            description: "Introduction to common sorting algorithms",
            link: "/resources/algorithms/sorting",
          },
          {
            id: "algo-vid-2",
            title: "Searching Techniques",
            type: "video",
            description: "Learn about linear and binary search",
            link: "/resources/algorithms/searching",
          },
          {
            id: "algo-vid-3",
            title: "Comparison Algorithms",
            type: "video",
            description: "Understanding algorithm complexity and performance",
            link: "/resources/algorithms/comparison",
          },
        ],
        articles: [
          {
            id: "algo-art-1",
            title: "Merge Sort Implementation",
            type: "article",
            description: "Step-by-step guide to merge sort algorithm",
            link: "/resources/algorithms/merge-sort",
          },
          {
            id: "algo-art-2",
            title: "Binary Search Explained",
            type: "article",
            description: "In-depth explanation of binary search algorithm",
            link: "/resources/algorithms/binary-search",
          },
          {
            id: "algo-art-3",
            title: "Greedy Algorithms Principles",
            type: "article",
            description: "Understanding the greedy approach to problem-solving",
            link: "/resources/algorithms/greedy",
          },
        ],
        exercises: [
          {
            id: "algo-exe-1",
            title: "Implement Selection Sort",
            type: "exercise",
            description: "Write code for the selection sort algorithm",
            link: "/resources/algorithms/selection-sort",
          },
          {
            id: "algo-exe-2",
            title: "Find the Fibonacci Sequence",
            type: "exercise",
            description:
              "Compute Fibonacci numbers using recursion and iteration",
            link: "/resources/algorithms/fibonacci",
          },
          {
            id: "algo-exe-3",
            title: "String Matching Algorithms",
            type: "exercise",
            description: "Implement basic string pattern matching",
            link: "/resources/algorithms/string-matching",
          },
        ],
      },
    },
    {
      id: "file-io",
      name: "File I/O",
      resources: {
        videos: [
          {
            id: "io-vid-1",
            title: "Reading and Writing Files in C",
            type: "video",
            description: "Introduction to file handling operations",
            link: "/resources/file-io/basics",
          },
          {
            id: "io-vid-2",
            title: "File Modes and Operations",
            type: "video",
            description: "Understanding different file modes and operations",
            link: "/resources/file-io/modes",
          },
          {
            id: "io-vid-3",
            title: "Binary File I/O",
            type: "video",
            description: "Working with binary files in C",
            link: "/resources/file-io/binary",
          },
        ],
        articles: [
          {
            id: "io-art-1",
            title: "Error Handling in File Operations",
            type: "article",
            description: "Techniques for handling file operation errors",
            link: "/resources/file-io/error-handling",
          },
          {
            id: "io-art-2",
            title: "Sequential vs. Random Access",
            type: "article",
            description: "Difference between sequential and random file access",
            link: "/resources/file-io/access-modes",
          },
          {
            id: "io-art-3",
            title: "File Permissions and Security",
            type: "article",
            description: "Understanding file permissions in C programs",
            link: "/resources/file-io/permissions",
          },
        ],
        exercises: [
          {
            id: "io-exe-1",
            title: "Read and Display a Text File",
            type: "exercise",
            description: "Write a program to read and display file contents",
            link: "/resources/file-io/read-text",
          },
          {
            id: "io-exe-2",
            title: "Copy File Content",
            type: "exercise",
            description: "Implement a file copy utility in C",
            link: "/resources/file-io/copy-file",
          },
          {
            id: "io-exe-3",
            title: "Append to an Existing File",
            type: "exercise",
            description: "Practice appending data to existing files",
            link: "/resources/file-io/append-file",
          },
        ],
      },
    },
    {
      id: "advanced-topics",
      name: "Advanced Topics",
      resources: {
        videos: [
          {
            id: "adv-vid-1",
            title: "Preprocessor and Macros",
            type: "video",
            description: "Understanding preprocessor directives and macros",
            link: "/resources/advanced/preprocessor",
          },
          {
            id: "adv-vid-2",
            title: "Bitwise Operations",
            type: "video",
            description: "Learn about bitwise operators and their applications",
            link: "/resources/advanced/bitwise",
          },
          {
            id: "adv-vid-3",
            title: "Memory Alignment and Padding",
            type: "video",
            description: "Understanding memory layout in C structures",
            link: "/resources/advanced/memory-alignment",
          },
        ],
        articles: [
          {
            id: "adv-art-1",
            title: "Understanding 'const' in C",
            type: "article",
            description: "Comprehensive guide to the const keyword",
            link: "/resources/advanced/const",
          },
          {
            id: "adv-art-2",
            title: "Function Pointers",
            type: "article",
            description: "In-depth explanation of function pointers",
            link: "/resources/advanced/function-pointers",
          },
          {
            id: "adv-art-3",
            title: "Embedded C Programming",
            type: "article",
            description: "Introduction to programming embedded systems",
            link: "/resources/advanced/embedded",
          },
        ],
        exercises: [
          {
            id: "adv-exe-1",
            title: "Implement a Simple Macro",
            type: "exercise",
            description: "Create and use preprocessor macros",
            link: "/resources/advanced/macro",
          },
          {
            id: "adv-exe-2",
            title: "Swap Function Using XOR",
            type: "exercise",
            description: "Implement a swap function using bitwise operations",
            link: "/resources/advanced/xor-swap",
          },
          {
            id: "adv-exe-3",
            title: "Simulate a Simple Database",
            type: "exercise",
            description: "Build a basic database using structs and files",
            link: "/resources/advanced/database",
          },
        ],
      },
    },
    {
      id: "concurrency",
      name: "Concurrency",
      resources: {
        videos: [
          {
            id: "conc-vid-1",
            title: "Introduction to Concurrency",
            type: "video",
            description: "Basics of concurrent programming in C",
            link: "/resources/concurrency/intro",
          },
          {
            id: "conc-vid-2",
            title: "Thread Creation and Management",
            type: "video",
            description: "Learn how to create and manage threads",
            link: "/resources/concurrency/threads",
          },
          {
            id: "conc-vid-3",
            title: "Synchronization Primitives",
            type: "video",
            description:
              "Understanding mutexes, semaphores, and condition variables",
            link: "/resources/concurrency/sync",
          },
        ],
        articles: [
          {
            id: "conc-art-1",
            title: "Shared Data with Threads",
            type: "article",
            description: "Techniques for safe access to shared data",
            link: "/resources/concurrency/shared-data",
          },
          {
            id: "conc-art-2",
            title: "Deadlocks and How to Avoid Them",
            type: "article",
            description: "Understanding and preventing deadlocks",
            link: "/resources/concurrency/deadlocks",
          },
          {
            id: "conc-art-3",
            title: "Producer-Consumer Pattern",
            type: "article",
            description: "Implementing the producer-consumer design pattern",
            link: "/resources/concurrency/producer-consumer",
          },
        ],
        exercises: [
          {
            id: "conc-exe-1",
            title: "Create a Multi-threaded Program",
            type: "exercise",
            description: "Write a simple multi-threaded application",
            link: "/resources/concurrency/multi-thread",
          },
          {
            id: "conc-exe-2",
            title: "Implement a Thread-safe Queue",
            type: "exercise",
            description:
              "Build a queue that can be accessed by multiple threads",
            link: "/resources/concurrency/thread-safe-queue",
          },
          {
            id: "conc-exe-3",
            title: "Solve Race Conditions",
            type: "exercise",
            description: "Identify and fix race conditions in code",
            link: "/resources/concurrency/race-conditions",
          },
        ],
      },
    },
    {
      id: "libraries-tools",
      name: "Libraries & Tools",
      resources: {
        videos: [
          {
            id: "lib-vid-1",
            title: "Standard Library Overview",
            type: "video",
            description: "Introduction to the C standard library",
            link: "/resources/libraries/standard",
          },
          {
            id: "lib-vid-2",
            title: "Essential Third-party Libraries",
            type: "video",
            description: "Overview of useful third-party C libraries",
            link: "/resources/libraries/third-party",
          },
          {
            id: "lib-vid-3",
            title: "Linking and Building Projects",
            type: "video",
            description: "Understanding the compilation and linking process",
            link: "/resources/libraries/linking",
          },
        ],
        articles: [
          {
            id: "lib-art-1",
            title: "Using JSON in C",
            type: "article",
            description: "Guide to working with JSON data in C programs",
            link: "/resources/libraries/json",
          },
          {
            id: "lib-art-2",
            title: "Makefiles for Project Management",
            type: "article",
            description: "Learn how to create and use Makefiles",
            link: "/resources/libraries/makefiles",
          },
          {
            id: "lib-art-3",
            title: "Unit Testing Frameworks",
            type: "article",
            description: "Overview of unit testing tools for C",
            link: "/resources/libraries/unit-testing",
          },
        ],
        exercises: [
          {
            id: "lib-exe-1",
            title: "Implement a Simple Math Library",
            type: "exercise",
            description: "Create a basic math utility library",
            link: "/resources/libraries/math-lib",
          },
          {
            id: "lib-exe-2",
            title: "Build a Project with Make",
            type: "exercise",
            description: "Write a Makefile for a multi-file project",
            link: "/resources/libraries/make",
          },
          {
            id: "lib-exe-3",
            title: "Unit Testing Practice",
            type: "exercise",
            description: "Write unit tests for a simple C function",
            link: "/resources/libraries/unit-tests",
          },
        ],
      },
    },
    {
      id: "debugging",
      name: "Debugging",
      resources: {
        videos: [
          {
            id: "debug-vid-1",
            title: "Introduction to Debugging",
            type: "video",
            description: "Fundamentals of debugging C programs",
            link: "/resources/debugging/intro",
          },
          {
            id: "debug-vid-2",
            title: "Using GDB Effectively",
            type: "video",
            description: "Learn how to use the GNU Debugger",
            link: "/resources/debugging/gdb",
          },
          {
            id: "debug-vid-3",
            title: "Common C Errors and How to Fix Them",
            type: "video",
            description: "Identify and resolve typical C programming errors",
            link: "/resources/debugging/common-errors",
          },
        ],
        articles: [
          {
            id: "debug-art-1",
            title: "Debugging Techniques for C Programs",
            type: "article",
            description: "Effective strategies for debugging C code",
            link: "/resources/debugging/techniques",
          },
          {
            id: "debug-art-2",
            title: "Logging for Debugging",
            type: "article",
            description: "Implementing logging in C applications",
            link: "/resources/debugging/logging",
          },
          {
            id: "debug-art-3",
            title: "Debugging Memory Issues",
            type: "article",
            description: "Tools and techniques for memory-related debugging",
            link: "/resources/debugging/memory",
          },
        ],
        exercises: [
          {
            id: "debug-exe-1",
            title: "Find and Fix Syntax Errors",
            type: "exercise",
            description: "Identify and correct syntax errors in C code",
            link: "/resources/debugging/syntax-errors",
          },
          {
            id: "debug-exe-2",
            title: "Memory Error Analysis",
            type: "exercise",
            description: "Identify and fix memory-related issues",
            link: "/resources/debugging/memory-errors",
          },
          {
            id: "debug-exe-3",
            title: "Trace Function Calls",
            type: "exercise",
            description: "Implement function call tracing for debugging",
            link: "/resources/debugging/trace-calls",
          },
        ],
      },
    },
  ];

  // 获取资源类型图标
  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4" />;
      case "article":
        return <FileText className="w-4 h-4" />;
      case "exercise":
        return <Code className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  // 处理选项卡切换
  const handleTabChange = (categoryId: string, type: string) => {
    setExpandedTypes((prev) => ({
      ...prev,
      [categoryId]: type,
    }));
  };

  // 渲染资源卡片
  const renderResourceCard = (resource: ResourceItem) => {
    const isSelected = resource.id === selectedResourceId;
    const typeIcon = getResourceTypeIcon(resource.type);
    const typeText =
      resource.type.charAt(0).toUpperCase() + resource.type.slice(1);

    return (
      <div key={resource.id} className="mb-2">
        <div
          className={`flex items-center justify-between py-2 px-3 border-b rounded-md transition-colors ${
            isSelected ? "bg-primary/10 border-primary" : "hover:bg-muted/50"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 bg-muted rounded-full">
              {typeIcon}
            </div>
            <span className="text-sm font-medium text-foreground truncate">
              {resource.title}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Recommended C Programming Resources
        </h1>
        <p className="text-muted-foreground">
          Explore a curated collection of videos, articles, and exercises to
          master C programming, from fundamental concepts to advanced topics and
          practical application.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resourceCategories.map((category) => {
          const isSelected = selectedCategory === category.id;
          const defaultType = expandedTypes[category.id] || "videos";

          return (
            <Card
              key={category.id}
              id={`category-${category.id}`}
              className={`h-full transition-all duration-300 ${
                isSelected ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md"
              }`}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs
                  defaultValue={defaultType}
                  className="w-full"
                  onValueChange={(value) => handleTabChange(category.id, value)}
                >
                  <TabsList className="w-full grid grid-cols-3 mb-4">
                    <TabsTrigger
                      value="videos"
                      className="flex items-center gap-1"
                    >
                      <Video className="w-4 h-4" />
                      <span>Videos</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="articles"
                      className="flex items-center gap-1"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Articles</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="exercises"
                      className="flex items-center gap-1"
                    >
                      <Code className="w-4 h-4" />
                      <span>Exercises</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="videos" className="space-y-1">
                    {category.resources.videos.map((resource) =>
                      renderResourceCard(resource)
                    )}
                    <Button
                      variant="link"
                      className="w-full justify-center text-sm mt-2"
                    >
                      View More
                    </Button>
                  </TabsContent>

                  <TabsContent value="articles" className="space-y-1">
                    {category.resources.articles.map((resource) =>
                      renderResourceCard(resource)
                    )}
                    <Button
                      variant="link"
                      className="w-full justify-center text-sm mt-2"
                    >
                      View More
                    </Button>
                  </TabsContent>

                  <TabsContent value="exercises" className="space-y-1">
                    {category.resources.exercises.map((resource) =>
                      renderResourceCard(resource)
                    )}
                    <Button
                      variant="link"
                      className="w-full justify-center text-sm mt-2"
                    >
                      View More
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          );
        })}
      </div>

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
