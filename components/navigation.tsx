"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useLanguage } from "@/hooks/use-language";
import { useAuth } from "@/hooks/use-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useEffect, useState } from "react";
import CustomImage from "./CustomImage";

export const dynamic = "force-dynamic";

export function Navigation() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const { user, isLoggedIn, isLoading, logout } = useAuth();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navigationItems = [
    { name: t("dashboard"), href: "/" },
    { name: t("preClass"), href: "/pre-class" },
    { name: t("inClass"), href: "/in-class" },
    { name: t("postClass"), href: "/post-class" },
    { name: t("achievements"), href: "/achievements" },
    { name: t("analytics"), href: "/analytics" },
    { name: t("community"), href: "/community" },
  ];

  if (!isClient) {
    return (
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center justify-center">
            <div className="flex h-8 w-8 items-center justify-center">
              <CustomImage
                src="/home-logo.png"
                alt="logo"
                width={100}
                height={100}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </Link>
          <div className="flex h-8"></div>
        </div>
      </header>
    );
  }

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center justify-center">
          <div className="flex h-8 w-8 items-center justify-center">
            <CustomImage
              src="/home-logo.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>

          {isLoading ? (
            <div className="flex items-center space-x-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-6 w-24" />
            </div>
          ) : isLoggedIn && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <img
                      src="/placeholder-user.jpg"
                      alt={user.name}
                      className="h-full w-full object-cover"
                    />
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>我的账户</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href="/profile"
                    className="flex items-center cursor-pointer"
                  >
                    个人资料
                  </Link>
                </DropdownMenuItem>
                {user.role === "admin" && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link
                        href="/admin"
                        className="flex items-center cursor-pointer"
                      >
                        管理员中心
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <button
                    onClick={() => {
                      if (confirm("确定要退出登录吗？")) {
                        logout();
                      }
                    }}
                    className="flex items-center cursor-pointer w-full text-left hover:bg-accent"
                  >
                    退出登录
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">登录</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/register">注册</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
