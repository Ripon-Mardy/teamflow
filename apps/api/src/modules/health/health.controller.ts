import type { Request, Response } from "express";

import { healthService } from "./health.service.js";

export const healthController = {
  async getHealth(
    _req: Request,
    res: Response,
    next: (error?: unknown) => void,
  ) {
    try {
      const health = await healthService.getHealth();

      res.status(200).json({
        success: true,
        message: "TeamFlow API is running",
        data: health,
      });
    } catch (error) {
      next(error);
    }
  },
};
