import { prisma } from "../../lib/prisma.js";
import type { CreateOrganizationInput } from "./organization.validation.js";

export const organizationService = {
  // create organization
  async createOrganization(input: CreateOrganizationInput) {
    const existingOrganization = await prisma.organization.findUnique({
      where: {
        slug: input.slug,
      },
    }); // end existingOrganization

    if (existingOrganization) {
      throw new Error("ORGANIZATION_SLUG_ALREADY_EXISTS");
    }

    const organization = await prisma.organization.create({
      data: {
        name: input.name,
        slug: input.slug,
      },
    }); // end organization

    return organization;
  }, // end createOrganization

  // get organization
  async getOrganizations() {
    return prisma.organization.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }, // end getOrganization

  // get organization by id
  async getOrganizationById(id: string) {
    return prisma.organization.findUnique({
      where: {
        id,
      },
    });
  }, // end getOrganizatioById
};
