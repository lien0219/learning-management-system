import { usePathname } from "next/navigation";
import { APP_CONFIG } from "@/config";

export const useBasePath = () => {
  return APP_CONFIG.basePath;
};

export const getBasePath = () => {
  return APP_CONFIG.basePath;
};
