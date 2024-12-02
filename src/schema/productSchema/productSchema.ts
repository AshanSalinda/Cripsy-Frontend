import { z } from 'zod';

export const productSchema = z.object({
    name: z.string().nonempty("Product name is required."),
    description: z.string().nonempty("Description is required."),
    stock: z.number().min(1, "Stock must be at least 1."),
    price: z.number().min(0.01, "Price must be greater than 0."),
    discount: z.number().min(0, "Discount cannot be negative.").max(100, "Discount cannot exceed 100%."),
    category: z.number().min(1, "Please select a valid category."),
    imageUrls: z.array(z.string().url("Invalid image URL.")).min(1, "At least one image is required."),
});