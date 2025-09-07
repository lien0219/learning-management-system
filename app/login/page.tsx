"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { login, saveToken } from "@/lib/api";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import CustomImage from "@/components/CustomImage";
import { useBasePath } from "@/hooks/use-basePath";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  const basePath = useBasePath();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("请填写所有必填字段");
      setLoading(false);
      return;
    }

    try {
      const response = await login({
        email,
        password,
      });

      let tokenToSave = null;
      if (response?.token) {
        tokenToSave = response.token;
      } else if (response?.data?.token) {
        tokenToSave = response.data.token;
      }

      if (!tokenToSave) {
        throw new Error("登录响应中未找到有效的token");
      }

      saveToken(tokenToSave);

      window.location.href = `${basePath}/`;
    } catch (err) {
      setError("登录失败，请检查您的邮箱和密码");
      console.error("登录错误:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            SDL Module
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            自我导向学习（SDL）模块：面向计算机专业（C语言程序设计）的深度学习支持。
          </p>
          <div className="space-y-3 text-muted-foreground">
            <p>• 个性化路径与任务链</p>
            <p>• 学习监控与即时反馈</p>
            <p>• 成就激励与社区讨论</p>
          </div>

          <div className="mt-12">
            <CustomImage
              src="/login.png"
              alt="SDL学习模块插画"
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">欢迎回来</h2>
              <p className="text-muted-foreground mt-2">
                请输入您的账户信息以继续学习。
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  邮箱
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="请输入登录邮箱"
                  className="mt-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium">
                  密码
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="输入密码"
                  className="mt-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                    disabled={loading}
                  />
                  <Label htmlFor="remember" className="text-sm">
                    记住我
                  </Label>
                </div>
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:underline cursor-pointer"
                  onClick={() =>
                    toast({
                      description: "请联系管理员修改密码",
                      duration: 3000,
                    })
                  }
                >
                  忘记密码？
                </button>
              </div>

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? "登录中..." : "登录"}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-muted-foreground">
                    或使用第三方
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  // disabled={loading}
                  disabled={true}
                >
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  // disabled={loading}
                  disabled={true}
                >
                  Microsoft
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  // disabled={loading}
                  disabled={true}
                >
                  GitHub
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <span className="text-sm text-muted-foreground">没有账号？</span>
              <Link
                href="/register"
                className="text-sm text-blue-600 hover:underline ml-1"
              >
                去注册
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
