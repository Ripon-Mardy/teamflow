import { organizationController } from "./organization.controller.js";
import { Router } from "express";

const router = Router();

router.post("/", organizationController.createOrganization);
router.get("/", organizationController.getOrganization);
router.get("/:id", organizationController.getOrganizationById);

export default router;
