import { APP_CONFIG } from "@/config";
import { useRouter } from "next/router";

export const useBasePath = () => {
  const router = useRouter();

  return router.basePath || APP_CONFIG.basePath;
};

export const getBasePath = () => {
  return APP_CONFIG.basePath;
};
