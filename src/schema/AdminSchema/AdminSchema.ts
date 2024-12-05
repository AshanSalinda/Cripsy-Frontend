// AdminSchema.ts
import { z } from 'zod';

export const AdminSchema = z.object({
    firstName: z.string().nonempty("First Name is required"),
    lastName: z.string().nonempty("Last Name is required"),
    email: z.string().email("Invalid email address").nonempty("Email is required"),
    contactNo: z
        .string()
        .min(10, "Contact No must be at least 10 digits")
        .max(15, "Contact No cannot be longer than 15 digits")
        .nonempty("Contact No is required"),
    birthday: z.string().nonempty("Birthday is required"), // Adjust validation if using date input
    gender: z.string().nonempty("Gender is required"),
});

export type AddNewAdminFormValues = z.infer<typeof AdminSchema>;
