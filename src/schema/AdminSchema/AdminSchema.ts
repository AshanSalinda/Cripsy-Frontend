import { z } from 'zod';

export const AdminSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email address").nonempty("Email is required"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .nonempty("Password is required"),
    contact: z
        .string()
        .min(10, "Contact must be at least 10 digits")
        .max(15, "Contact cannot be longer than 15 digits")
        .nonempty("Contact is required"),
});

export type AdminFormValues = z.infer<typeof AdminSchema>;
