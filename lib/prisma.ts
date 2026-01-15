import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Get DATABASE_URL, with fallback for build time
function getDatabaseUrl(): string {
  // During build, if DATABASE_URL is not set, use a dummy URL
  // This allows Prisma to initialize during build without errors
  // At runtime, this will fail if DATABASE_URL is not actually set
  if (!process.env.DATABASE_URL) {
    if (process.env.NEXT_PHASE === 'phase-production-build' || 
        (process.env.NODE_ENV === 'production' && typeof window === 'undefined')) {
      // Build time: use dummy URL to satisfy Prisma initialization
      return 'postgresql://user:password@localhost:5432/dbname?schema=public'
    }
    throw new Error(
      'DATABASE_URL environment variable is not set. ' +
      'Please set it in your .env file or environment variables.'
    )
  }
  return process.env.DATABASE_URL
}

// Lazy initialization to prevent build-time errors
let prismaInstance: PrismaClient | null = null

function getPrismaClient(): PrismaClient {
  if (prismaInstance) {
    return prismaInstance
  }

  if (globalForPrisma.prisma) {
    prismaInstance = globalForPrisma.prisma
    return prismaInstance
  }

  // Set DATABASE_URL temporarily for Prisma initialization if not set
  const originalUrl = process.env.DATABASE_URL
  if (!process.env.DATABASE_URL) {
    process.env.DATABASE_URL = getDatabaseUrl()
  }

  try {
    prismaInstance = new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    })
  } finally {
    // Restore original DATABASE_URL if we temporarily set it
    if (!originalUrl) {
      delete process.env.DATABASE_URL
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prismaInstance
  }

  return prismaInstance
}

// Export a proxy that lazily initializes only when properties are accessed
// This prevents module-level initialization during build
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getPrismaClient()
    const value = (client as any)[prop]
    if (typeof value === 'function') {
      return value.bind(client)
    }
    return value
  },
})
