import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure proper handling of dynamic routes and API routes
  // This is a dynamic Next.js app (not static export) because:
  // - We have API routes (app/api/*)
  // - We use Server Components with Prisma
  // - We need server-side rendering
  
  // Vercel will automatically detect this as a Next.js app
  // No need for static export or index.js in public folder
};

export default nextConfig;
