import { prisma } from "../../lib/prisma.js";

export const healthService = {
  async getHealth() {
    await prisma.$queryRaw`SELECT 1`;

    return {
      status: "healthy",
      service: "teamflow-api",
      database: "connected",
      timestamp: new Date().toISOString(),
    };
  },
};
