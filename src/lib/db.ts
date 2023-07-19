import { PrismaClient } from '@prisma/client'
import "server-only"

declare global {
  // eslint-disable-next-lihttps://help.coda.io/en/articles/7180041-embed-your-coda-doc-externallyne no-var, no-unused-vars
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma