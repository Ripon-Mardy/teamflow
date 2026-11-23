import { Router } from "express";

import { organizationController } from "./organization.controller.js";
import { createOrganizationSchema } from "./organization.validation.js";

import { validateRequest } from "../../common/middlewares/validate.middleware.js";

const router = Router();

router.post(
  "/",
  validateRequest(createOrganizationSchema),
  organizationController.createOrganization,
);

router.get("/", organizationController.getOrganizations);

router.get("/:id", organizationController.getOrganizationById);

export default router;
