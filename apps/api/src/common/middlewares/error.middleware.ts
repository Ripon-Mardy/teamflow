import type { ErrorRequestHandler } from "express";

export const errorMiddleware: ErrorRequestHandler = (
  error,
  _req,
  res,
  next,
) => {
  console.error(error);

  res.status(500).json({
    success: false,
    message: error.message || "Internal Server Error",
  });

  next(error);
};
