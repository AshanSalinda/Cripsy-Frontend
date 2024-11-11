import React from 'react';
import InputField from '@/components/InputField/InputField';

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldId: keyof T) => {
        onChange(fieldId, e.target.value);
    };

    return (
        <div className="space-y-4">
            {/* Row 1: Branch Name and Address */}
            <div className="flex flex-row space-x-4 mb-4"> {/* Added mb-4 for spacing */}
                <div className="w-1/2">
                    <InputField
                        id="branchName"
                        type="text"
                        placeholder="Enter Branch Name"
                        value={formValues.branchName || ''}
                        onChange={(e) => handleInputChange(e, 'branchName')}
                        icon={undefined}
                        label={true}
                        labelName='Branch'
                    />
                    {errors.branchName && <p className="mt-1 text-sm error-message">{errors.branchName}</p>}
                </div>

                <div className="w-1/2">
                    <InputField
                        id="address"
                        type="text"
                        placeholder="Enter Address"
                        value={formValues.address || ''}
                        onChange={(e) => handleInputChange(e, 'address')}
                        icon={undefined}
                        label={true}
                        labelName='Address'
                    />
                    {errors.address && <p className="mt-1 text-sm error-message">{errors.address}</p>}
                </div>
            </div>

            {/* Row 2: Email and Contact No */}
            <div className="flex flex-row space-x-4">
                <div className="w-1/2">
                    <InputField
                        id="email"
                        type="email"
                        placeholder="Enter Email"
                        value={formValues.email || ''}
                        onChange={(e) => handleInputChange(e, 'email')}
                        icon={undefined}
                        label={true}
                        labelName='Email'
                    />
                    {errors.email && <p className="mt-1 text-sm error-message">{errors.email}</p>}
                </div>

                <div className="w-1/2">
                    <InputField
                        id="contactNo"
                        type="text"
                        placeholder="Enter Contact No"
                        value={formValues.contactNo || ''}
                        onChange={(e) => handleInputChange(e, 'contactNo')}
                        icon={undefined}
                        label={true}
                        labelName='Contact No'
                    />
                    {errors.contactNo && <p className="mt-1 text-sm error-message">{errors.contactNo}</p>}
                </div>
            </div>
        </div>
    );
};

export default BranchFormSection;
