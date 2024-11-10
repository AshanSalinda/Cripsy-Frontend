import React from 'react';
import InputField from '@/components/InputField/InputField';

// Define a base interface for branch form values with specific field names
interface BranchFormValues {
    branchName: string;
    address: string;
    email: string;
    contactNo: string;
}

interface BranchFormSectionProps<T extends BranchFormValues> {
    formValues: T;
    errors: Partial<Record<keyof T, string>>;
    onChange: (field: keyof T, value: string) => void;
}

const BranchFormSection = <T extends BranchFormValues>({
    formValues,
    errors,
    onChange,
}: BranchFormSectionProps<T>) => {

    // Handle input changes and propagate them to parent
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldId: keyof T) => {
        onChange(fieldId, e.target.value);
    };

    return (
        <div className="space-y-4">
            <div className="flex space-x-4 ">
                <div className="flex-1 ">
                    <label htmlFor="branchName" className="block mb-1 text-sm font-medium text-gray-700">
                        Branch Name
                    </label>
                    <InputField
                        id="branchName"
                        type="text"
                        placeholder="Enter Branch Name"
                        value={formValues.branchName || ''}
                        onChange={(e) => handleInputChange(e, 'branchName')}
                        icon={undefined}
                    />
                    {errors.branchName && <p className="mt-1 text-sm text-red-600">{errors.branchName}</p>}
                </div>

                <div className="flex-1">
                    <label htmlFor="address" className="block mb-1 text-sm font-medium text-gray-700">
                        Address
                    </label>
                    <InputField
                        id="address"
                        type="text"
                        placeholder="Enter Address"
                        value={formValues.address || ''}
                        onChange={(e) => handleInputChange(e, 'address')}
                        icon={undefined}
                    />
                    {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                </div>
            </div>

            <div className="flex space-x-4 ">
                <div className="flex-1 ">
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <InputField
                        id="email"
                        type="email"
                        placeholder="Enter Email"
                        value={formValues.email || ''}
                        onChange={(e) => handleInputChange(e, 'email')}
                        icon={undefined}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div className="flex-1">
                    <label htmlFor="contactNo" className="block mb-1 text-sm font-medium text-gray-700">
                        Contact No
                    </label>
                    <InputField
                        id="contactNo"
                        type="text"
                        placeholder="Enter Contact No"
                        value={formValues.contactNo || ''}
                        onChange={(e) => handleInputChange(e, 'contactNo')}
                        icon={undefined}
                    />
                    {errors.contactNo && <p className="mt-1 text-sm text-red-600">{errors.contactNo}</p>}
                </div>
            </div>
        </div>
    );
};

export default BranchFormSection;
