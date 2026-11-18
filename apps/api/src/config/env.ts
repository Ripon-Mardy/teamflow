import "dotenv/config";

const port = Number(process.env.PORT ?? 5000);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("Invalid PORT environment variable");
}

export const env = {
  NODE_ENV: process.env.NODE_ENV ?? "development",
  PORT: port,
  FRONTEND_URL: process.env.FRONTEND_URL ?? "http://localhost:5173",
};
