import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import ProtectedLayout from "./protected-layout";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SDL Module - 自我导向学习系统",
  description: "计算机专业C语言程序设计的深度学习支持平台",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <ThemeProvider>
          <ProtectedLayout>
            <Navigation />
            <main className="container mx-auto px-4 py-8">{children}</main>
            <Toaster />
          </ProtectedLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
