"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { register } from "@/lib/api";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

// 添加客户端指令
export const dynamic = "force-dynamic";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("student");
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // 表单验证
    if (!name || !email || !password || !confirmPassword) {
      setError("请填写所有必填字段");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("两次输入的密码不一致");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("密码长度至少为8位");
      setLoading(false);
      return;
    }

    if (!terms) {
      setError("请阅读并同意用户协议和隐私政策");
      setLoading(false);
      return;
    }

    try {
      await register({
        email,
        name,
        password,
        role: "student",
      });

      setSuccess("注册成功！即将跳转到登录页面...");

      setTimeout(() => {
        router.replace("/login");
      }, 2000);
    } catch (err) {
      setError("注册失败，请稍后再试");
      console.error("注册错误:", err);
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
            自我导向学习（SDL）模块：为计算机专业（C语言程序设计）提供贯穿前-中-课后的深度学习支持。
          </p>
          <div className="space-y-3 text-muted-foreground">
            <p>• 目标设定、学习监控与自我评价</p>
            <p>• 探究-反思-迁移的任务链设计</p>
            <p>• 个性化路径与成就激励机制</p>
          </div>

          <div className="mt-12">
            <Image
              src="/register.png"
              alt="SDL学习模块注册插画"
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
              <h2 className="text-2xl font-bold text-foreground">注册新账户</h2>
              <p className="text-muted-foreground mt-2">
                为获得个性化的学习体验，请填写以下信息。
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-md text-sm">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">
                    姓名（真名）
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="例如：张三"
                    className="mt-1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="role" className="text-sm font-medium">
                    角色
                  </Label>
                  <Select
                    value={role}
                    onValueChange={setRole}
                    disabled={loading}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="请选择角色" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">学生</SelectItem>
                      <SelectItem value="teacher">教师</SelectItem>
                      <SelectItem
                        value="admin"
                        disabled
                        onClick={() =>
                          toast({
                            description: "请联系管理员修改",
                            duration: 3000,
                          })
                        }
                      >
                        管理员
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  邮箱
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="mt-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="password" className="text-sm font-medium">
                    密码
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="至少 8 位，包含字母与数字"
                    className="mt-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium"
                  >
                    确认密码
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="再次输入密码"
                    className="mt-1"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={loading}
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={terms}
                  onCheckedChange={(checked) => setTerms(checked as boolean)}
                  disabled={loading}
                  required
                />
                <Label htmlFor="terms" className="text-sm">
                  我已阅读并同意《用户协议》与《隐私政策》
                </Label>
              </div>

              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? "注册中..." : "注册"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-sm text-muted-foreground">已有账号？</span>
              <Link
                href="/login"
                className="text-sm text-blue-600 hover:underline ml-1"
              >
                去登录
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
