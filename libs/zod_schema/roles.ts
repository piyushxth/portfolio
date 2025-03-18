import { z } from "zod";

// Define the Zod schema for Role
export const roleSchema = z.object({
  _id: z.string().optional(),
  name: z.string().min(1, "Name is required"), // Validate that the name is a non-empty string
});

// Type inference from the Zod schema
export type TRole = z.infer<typeof roleSchema>;
