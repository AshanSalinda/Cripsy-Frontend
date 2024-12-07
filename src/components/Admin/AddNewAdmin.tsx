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
    const onSubmit = async (data: AdminFormValues) => {
        const result = AdminSchema.safeParse(data);
    
        if (result.success) {
            try {
                await saveAdmin(result.data);
                console.log("Admin data saved successfully");
    
                // Reset form and errors
                reset();
                setValidationErrors({});
                setIsDialogOpen(false); // Close the dialog after successful submission
            } catch (error) {
                console.error("Failed to save admin:", error);
            }
        } else {
            const fieldErrors: Partial<Record<keyof AdminFormValues, string>> = {};
            result.error.errors.forEach(err => {
                const field = err.path[0] as keyof AdminFormValues;
                fieldErrors[field] = err.message;
            });
            setValidationErrors(fieldErrors);
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
