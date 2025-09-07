export const APP_CONFIG = {
  basePath:
    process.env.NEXT_PUBLIC_BASE_PATH !== undefined
      ? process.env.NEXT_PUBLIC_BASE_PATH
      : process.env.NODE_ENV === "production"
      ? "/learning-management-system"
      : "",

  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
};
