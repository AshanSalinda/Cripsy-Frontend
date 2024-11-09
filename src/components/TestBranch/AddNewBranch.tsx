"use client";
import  { useState } from "react";
import Popup from "../Popup/Popup";
import BranchFormSection from "@/section/BranchFormSection/BranchFormSection";
import { AddNewBranchFormValues, BranchSchema } from "@/schema/BranchSchema/BranchSchema";

interface AddNewBranchProps {
    isDialogOpen: boolean;
    setIsDialogOpen: (open: boolean) => void;
}

const AddNewBranch: React.FC<AddNewBranchProps> = ({ isDialogOpen, setIsDialogOpen }) => {
    // State for form values
    const [formValues, setFormValues] = useState<AddNewBranchFormValues>({
        branchName: '',
        address: '',
        email: '',
        contactNo: ''
    });

    // State for handling form validation errors
    const [errors, setErrors] = useState<Partial<Record<keyof AddNewBranchFormValues, string>>>({});

    // Function to handle form input changes
    const handleInputChange = (field: keyof AddNewBranchFormValues, value: string) => {
        setFormValues({
            ...formValues,
            [field]: value,
        });
    };

    const handleSaveClick = () => {
        // Perform validation using Zod
        const result = BranchSchema.safeParse(formValues);

        if (result.success) {
            console.log("Saving New Branch Form Data:", result.data);
            // TODO: Implement the actual save logic (e.g., API call)

            // Clear form values
            setFormValues({
                branchName: '',
                address: '',
                email: '',
                contactNo: ''
            });
            setErrors({});
        } else {
            // Map Zod errors to the errors state
            const fieldErrors: Partial<Record<keyof AddNewBranchFormValues, string>> = {};
            result.error.errors.forEach(err => {
                const field = err.path[0] as keyof AddNewBranchFormValues;
                fieldErrors[field] = err.message;
            });
            setErrors(fieldErrors);
        }
    };

    return (
        <>
            <Popup
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                title="New Branch"
                description=""
                onSaveClick={handleSaveClick}
            >
                {/* Pass form values, errors, and change handler to BranchFormSection */}
                <BranchFormSection<AddNewBranchFormValues>
                    formValues={formValues}
                    errors={errors}
                    onChange={handleInputChange}
                />
            </Popup>
        </>
    );
};

export default AddNewBranch;