import type { Request, Response } from "express";

import { healthService } from "./health.service.js";

export const healthController = {
  getHealth(_req: Request, res: Response) {
    const health = healthService.getHealth();

    res.status(200).json({
      success: true,
      message: "TeamFlow API is running",
      data: health,
    });
  },
};
