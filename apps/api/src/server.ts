import app from "./app.js";
import { env } from "./config/env.js";

const server = app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);

  console.log(`Environment: ${env.NODE_ENV}`);
});

const shutdown = (signal: string) => {
  console.log(`${signal} received. Closing server...`);

  server.close((error) => {
    if (error) {
      console.error("Error closing server:", error);
      process.exitCode = 1;
      return;
    }

    console.log("Server closed successfully.");
  });
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
