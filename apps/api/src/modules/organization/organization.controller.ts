import type { NextFunction, Request, Response } from "express";
import {
  createOrganizationSchema,
  organizationIdParamSchema,
} from "./organization.validation.js";
import { organizationService } from "./organization.service.js";

export const organizationController = {
  // create organization controller
  async createOrganization(req: Request, res: Response, next: NextFunction) {
    try {
      const validationResult = createOrganizationSchema.safeParse(req.body);

      if (!validationResult.success) {
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: validationResult.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        });

        return;
      } // end if statement

      const organization = await organizationService.createOrganization(
        validationResult.data,
      );

      res.status(201).json({
        success: true,
        message: "Organization created successfully",
        data: organization,
      });
    } catch (error) {
      next(error);
    }
  }, // end creaeOrganization

  // get organization controller
  async getOrganization(_req: Request, res: Response, next: NextFunction) {
    try {
      const organizations = await organizationService.getOrganizations();

      res.status(200).json({
        success: true,
        message: "Organizations retrieved successfully",
        data: organizations,
      });
    } catch (error) {
      next(error);
    }
  }, //end getOrganization

  // get Organization by id
  async getOrganizationById(req: Request, res: Response, next: NextFunction) {
    try {
      const validationResult = organizationIdParamSchema.safeParse(req.params);

      if (!validationResult.success) {
        res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: validationResult.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        });

        return;
      }

      const organization = await organizationService.getOrganizationById(
        validationResult.data.id,
      );

      if (!organization) {
        res.status(404).json({
          success: false,
          message: "Organization not found",
        });

        return;
      }

      res.status(201).json({
        success: true,
        message: "Organization retrieved successfully",
        data: organization,
      });
    } catch (error) {
      next(error);
    }
  }, //end getOrganizationById
};
