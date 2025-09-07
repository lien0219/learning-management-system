"use client";

import { useAuth } from "@/hooks/use-auth";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import ProtectedLayout from "../protected-layout";
import CustomImage from "@/components/CustomImage";

// 添加客户端指令
export const dynamic = "force-dynamic";

function ProfileContent() {
  const { user, isLoading, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center min-h-[70vh] justify-center">
        <Card className="w-full max-w-md p-8 rounded-xl shadow-lg">
          <div className="flex flex-col items-center space-y-6">
            <Skeleton className="h-24 w-24 rounded-full" />
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-5 w-1/3" />
            <Separator className="w-full" />
            <div className="grid grid-cols-2 gap-8 w-full">
              <div className="space-y-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
            <Button variant="destructive" disabled className="mt-4">
              退出登录
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-[70vh] justify-center p-4">
      {user && (
        <Card className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white border-0">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <Avatar className="h-32 w-32 border-4 border-blue-50">
                <CustomImage
                  src="/placeholder-user.jpg"
                  alt={user.name}
                  className="h-full w-full object-cover rounded-full"
                />
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-blue-50 p-1.5 rounded-full">
                <div className="h-3 w-3 bg-blue-500 rounded-full" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
            <Badge className="bg-blue-50 text-blue-600 hover:bg-blue-100 text-sm px-3 py-1 rounded-full">
              {user.role === "admin"
                ? "系统管理员"
                : user.role === "teacher"
                ? "教师"
                : "学生"}
            </Badge>

            <Separator className="w-full" />

            <div className="w-full space-y-4">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium text-gray-500">
                    用户 ID
                  </Label>
                  <span className="text-sm text-gray-900">{user.id}</span>
                </div>

                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium text-gray-500">
                    邮箱地址
                  </Label>
                  <span className="text-sm text-gray-900">{user.email}</span>
                </div>

                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium text-gray-500">
                    系统语言
                  </Label>
                  <span className="text-sm text-gray-900">
                    {user.language === "en" ? "英语" : "中文"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium text-gray-500">
                    经验值
                  </Label>
                  <span className="text-sm text-gray-900">{user.xp}</span>
                </div>

                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium text-gray-500">
                    创建时间
                  </Label>
                  <span className="text-sm text-gray-900">
                    {new Date(user.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <Button
              variant="destructive"
              onClick={logout}
              className="w-full mt-4"
            >
              退出登录
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}

export default function ProfilePage() {
  return (
    <ProtectedLayout>
      <ProfileContent />
    </ProtectedLayout>
  );
}
