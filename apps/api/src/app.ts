import express from "express";
import cors from "cors";
import helmet from "helmet";

import { env } from "./config/env.js";
import healthRouter from "./modules/health/health.route.js";
import { notFoundMiddleware } from "./common/middlewares/not-found.middleware.js";
import { errorMiddleware } from "./common/middlewares/error.middleware.js";

import organizationsRouter from "./modules/organization/organization.route.js";

const app = express();
app.use(helmet());
app.use(cors({ origin: env.FRONTEND_URL, credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes )
app.use("/api/v1/health", healthRouter);
app.use("/api/v1/organizations", organizationsRouter);

// handle unknown routus
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
