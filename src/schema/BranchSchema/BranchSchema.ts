import { z } from 'zod';

export const BranchSchema = z.object({
    branchName: z.string().nonempty("Branch Name is required"),
    address: z.string().nonempty("Address is required"),
    email: z.string().email("Invalid email address").nonempty("Email is required"),
    contactNo: z
        .string()
        .min(10, "Contact No must be at least 10 digits")
        .max(15, "Contact No cannot be longer than 15 digits")
        .nonempty("Contact No is required"),
});

export type AddNewBranchFormValues = z.infer<typeof BranchSchema>;
