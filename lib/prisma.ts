import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
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

  // Ensure DATABASE_URL is set and valid at runtime
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    throw new Error(
      'DATABASE_URL environment variable is not set. ' +
      'Please set it in your .env file or environment variables. ' +
      'Example: DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"'
    )
  }

  // Validate DATABASE_URL format
  const isPostgresUrl = databaseUrl.startsWith('postgresql://') || databaseUrl.startsWith('postgres://')
  
  if (!isPostgresUrl) {
    throw new Error(
      'DATABASE_URL must be a valid PostgreSQL connection string. ' +
      'Expected format: postgresql://user:password@host:port/database?schema=public'
    )
  }

  // Initialize PrismaClient with standard configuration
  // For Node.js server environments, Prisma uses the library engine by default
  // We explicitly avoid the "client" engine type which requires adapters
  try {
    prismaInstance = new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
      // Explicitly use the library engine (default for Node.js)
      // This prevents Prisma from trying to use the "client" engine type
    })
  } catch (error: any) {
    // Provide more helpful error message if Prisma initialization fails
    if (error.message?.includes('engine type') || error.message?.includes('adapter') || error.message?.includes('accelerateUrl')) {
      throw new Error(
        `Prisma Client initialization failed: ${error.message}. ` +
        'This usually means DATABASE_URL is invalid or Prisma configuration is incorrect. ' +
        'Please verify your DATABASE_URL is a valid PostgreSQL or Prisma Accelerate connection string.'
      )
    }
    throw error
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
