"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Popup from "../Popup/Popup";
import BranchFormSection from "@/section/BranchFormSection/BranchFormSection";
import { AddNewBranchFormValues, BranchSchema } from "@/schema/BranchSchema/BranchSchema";

interface AddNewBranchProps {
    isDialogOpen: boolean;
    setIsDialogOpen: (open: boolean) => void;
}

const AddNewBranch: React.FC<AddNewBranchProps> = ({ isDialogOpen, setIsDialogOpen }) => {
    // Initialize react-hook-form
    const { register, handleSubmit, reset } = useForm<AddNewBranchFormValues>({
        defaultValues: {
            branchName: '',
            address: '',
            email: '',
            contactNo: ''
        },
    });

    // State for handling form validation errors
    const [errors, setErrors] = useState<Partial<Record<keyof AddNewBranchFormValues, string>>>({});

    // Function to handle form submission
    const onSubmit = (data: AddNewBranchFormValues) => {
        // Perform validation using Zod
        const result = BranchSchema.safeParse(data);

        if (result.success) {
            console.log("Saving New Branch Form Data:", result.data);
            // TODO: Implement actual save logic (e.g., API call)

            // Reset form and errors
            reset();
            setErrors({});
        } else {
            // Map Zod validation errors to the errors state
            const fieldErrors: Partial<Record<keyof AddNewBranchFormValues, string>> = {};
            result.error.errors.forEach(err => {
                const field = err.path[0] as keyof AddNewBranchFormValues;
                fieldErrors[field] = err.message;
            });
            setErrors(fieldErrors);
        }
    };

    return (
        <Popup
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            title="New Branch"
            description=""
            onSaveClick={handleSubmit(onSubmit)} // use handleSubmit to wrap onSubmit
        >
            {/* Pass errors and register to BranchFormSection */}
            <BranchFormSection<AddNewBranchFormValues>
                errors={errors}
                register={register}
            />
        </Popup>
    );
};

export default AddNewBranch;
