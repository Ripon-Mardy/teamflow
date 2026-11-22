import z from "zod";

export const createOrganizationSchema = z.object({
  name: z
    .string()
    .trim()
    .toLowerCase()
    .min(3, "slug must be at least 3 characters")
    .max(50, "Organization name cannot exceed 100 characters"),

  slug: z
    .string()
    .trim()
    .toLowerCase()
    .min(3, "Slug must be at least 3 characters")
    .max(50, "Slug cannot exceed 50 characters")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug can contain lowercase letters, numbers, and hyphens",
    ),
});

export type CreateOrganizationInput = z.infer<typeof createOrganizationSchema>;

export const organizationIdParamSchema = z.object({
  id: z.uuid("Invalid organization id"),
});
