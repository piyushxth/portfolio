import { z } from "zod";

// Zod schema for user registration
export const userSchema = z.object({
  _id: z.string().optional(),
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
  roles: z
    .string({
      required_error: "Role ID cannot be empty.",
      invalid_type_error: "Role ID must be a string.",
    })
    .min(1, "Role ID must contain at least one character."),
  address: z.string().optional(), // Optional address field
});

// Zod schema for user login
export const userLoginSchema = z.object({
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, "Password must be at least 6 characters long."),
});

// Types inferred from Zod schemas
export type TUser = z.infer<typeof userSchema>;
export type TUserLogin = z.infer<typeof userLoginSchema>;
