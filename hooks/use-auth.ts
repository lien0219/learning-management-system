import { useState, useEffect } from "react";
import { getProfile, getToken, clearAuth } from "@/lib/api";
import { UserData, UserProfile } from "@/lib/api";
import { useRouter } from "next/navigation";
import { APP_CONFIG } from "@/config";

interface AuthState {
  user: UserData | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoggedIn: false,
    isLoading: true,
    error: null,
  });
  const router = useRouter();
  const checkAuth = async () => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const token = getToken();
      if (token) {
        try {
          const userProfile = await getProfile();

          setAuthState({
            user: userProfile.data || null,
            isLoggedIn: true,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          console.error("获取用户资料失败，清除token并跳转到登录页：", error);
          clearAuth();
          setAuthState({
            user: null,
            isLoggedIn: false,
            isLoading: false,
            error: "用户认证失败，请重新登录",
          });
          router.replace(`${APP_CONFIG.basePath}/login`);
        }
      } else {
        setAuthState({
          user: null,
          isLoggedIn: false,
          isLoading: false,
          error: null,
        });
      }
    } catch (error) {
      console.error("认证检查失败:", error);
      setAuthState({
        user: null,
        isLoggedIn: false,
        isLoading: false,
        error: "认证失败，请重新登录",
      });
      clearAuth();
    }
  };

  const logout = () => {
    clearAuth();
    setAuthState({
      user: null,
      isLoggedIn: false,
      isLoading: false,
      error: null,
    });
    window.location.href = `${APP_CONFIG.basePath}/login`;
  };
  const forceCheckAuth = () => {
    const token = getToken();
    const currentIsLoggedIn = authState.isLoggedIn;

    if (!token && currentIsLoggedIn) {
      setAuthState((prev) => ({
        ...prev,
        isLoggedIn: false,
        user: null,
      }));
      router.replace(`${APP_CONFIG.basePath}/login`);
    }
  };
  useEffect(() => {
    checkAuth();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "authToken" && !e.newValue) {
        forceCheckAuth();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return {
    ...authState,
    checkAuth,
    logout,
    forceCheckAuth,
  };
}
