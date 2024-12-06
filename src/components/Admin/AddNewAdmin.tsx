"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Popup from "../Popup/Popup";
import AddAdminForm from "@/section/AddAdminForm/AddAdminForm";
import { AddNewAdminFormValues, AdminSchema } from "@/schema/adminSchema/AdminSchema";

interface AddNewAdminProps {
    isDialogOpen: boolean;
    setIsDialogOpen: (open: boolean) => void;
}

const AddNewAdmin: React.FC<AddNewAdminProps> = ({ isDialogOpen, setIsDialogOpen }) => {
    // Initialize react-hook-form
    const { register, handleSubmit, reset, formState: { errors: formErrors } } = useForm<AddNewAdminFormValues>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            contactNo: '',
            birthday: '',
            gender: ''
        },
    });

    // State for handling custom validation errors
    const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof AddNewAdminFormValues, string>>>({});

    // Function to handle form submission
    const onSubmit = (data: AddNewAdminFormValues) => {
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
            const fieldErrors: Partial<Record<keyof AddNewAdminFormValues, string>> = {};
            result.error.errors.forEach(err => {
                const field = err.path[0] as keyof AddNewAdminFormValues;
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
            <AddAdminForm<AddNewAdminFormValues>
                errors={validationErrors}  // Use custom validation errors
                register={register}  // Register input fields
            />
        </Popup>
    );
};

export default AddNewAdmin;
