"use client";

import { ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { getToken } from "@/lib/api";
import { APP_CONFIG } from "@/config";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoggedIn, isLoading } = useAuth();

  const publicRoutes = [`${APP_CONFIG.basePath}/login`, "/register"];

  useEffect(() => {
    const hasValidToken = !!getToken();

    if (
      !isLoading &&
      !publicRoutes.includes(pathname) &&
      (!isLoggedIn || !hasValidToken)
    ) {
      setTimeout(() => {
        if (!isLoggedIn || !getToken()) {
          router.replace(`${APP_CONFIG.basePath}/login`);
        }
      }, 100);
    }
  }, [isLoggedIn, isLoading, router, pathname]);

  if (isLoading && !publicRoutes.includes(pathname)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">加载中...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
