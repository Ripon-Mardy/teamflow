import { ConflictError } from "../../common/errors/conflict-error.js";
import { NotFoundError } from "../../common/errors/not-found-error.js";
import { prisma } from "../../lib/prisma.js";
import type { CreateOrganizationInput } from "./organization.validation.js";

export const organizationService = {
  // create organization
  async createOrganization(input: CreateOrganizationInput) {
    try {
      return await prisma.organization.create({
        data: {
          name: input.name,
          slug: input.slug,
        },
      });
    } catch (error) {
      if (error instanceof Error && "code" in error && error.code === "P2002") {
        throw new ConflictError(
          "An organization with this slug already exists",
        );
      }

      throw error;
    }
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
    const organization = await prisma.organization.findUnique({
      where: {
        id,
      },
    }); // end organization

    if (!organization) {
      throw new NotFoundError("Organization not found");
    }

    return organization;
  }, // end getOrganizatioById
};
