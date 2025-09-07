/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:
    process.env.NODE_ENV === "production" ? "/learning-management-system" : "",

  images: {
    unoptimized: true,
  },

  trailingSlash: false,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
