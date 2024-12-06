"use client";


"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Popup from "../Popup/Popup";
import AddAdminForm from "@/section/AddAdminForm/AddAdminForm";
import { AdminFormValues, AdminSchema } from "@/schema/AdminSchema/AdminSchema";
import { saveAdmin } from "@/apis/adminApi/admin";

interface AddNewAdminProps {
    isDialogOpen: boolean;
    setIsDialogOpen: (open: boolean) => void;
}

const AddNewAdmin: React.FC<AddNewAdminProps> = ({ isDialogOpen, setIsDialogOpen }) => {
    // Initialize react-hook-form
    const { register, handleSubmit, reset, formState: { errors: formErrors } } = useForm<AdminFormValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            contact: '',
        },
    });

    // State for handling custom validation errors
    const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof AdminFormValues, string>>>({});

    // Function to handle form submission
    const onSubmit = (data: AdminFormValues) => {
        // Perform validation using Zod
        const result = AdminSchema.safeParse(data);

        if (result.success) {
            console.log("Saving New Admin Data:", result.data);
            // TODO: Implement actual save logic (e.g., API call)

            // Reset form and errors
            reset();
            setValidationErrors({});
        } else {
            // Map Zod validation errors to the errors state
            const fieldErrors: Partial<Record<keyof AdminFormValues, string>> = {};
            result.error.errors.forEach(err => {
                const field = err.path[0] as keyof AdminFormValues;
                fieldErrors[field] = err.message;
            });
            setValidationErrors(fieldErrors); // Set errors in state
        }
    };

    return (
        <Popup
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            title="New Admin"
            description=" "
            onSaveClick={handleSubmit(onSubmit)} // Wrap onSubmit with handleSubmit
        >
            {/* Pass validationErrors and register to AdminFormSection */}
            <AddAdminForm<AdminFormValues>
                errors={validationErrors}  // Use custom validation errors
                register={register}  // Register input fields
            />
        </Popup>
    );
};

export default AddNewAdmin;
