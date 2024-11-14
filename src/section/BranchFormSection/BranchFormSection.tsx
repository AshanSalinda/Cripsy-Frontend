import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import InputField from '@/components/InputField/InputField';

interface BranchFormValues {
    branchName: string;
    address: string;
    email: string;
    contactNo: string;
}

interface BranchFormSectionProps<T extends BranchFormValues> {
    errors: Partial<Record<keyof T, string>>;
    register: UseFormRegister<T>;
}

const BranchFormSection = <T extends BranchFormValues>({
    errors,
    register,
}: BranchFormSectionProps<T>) => {
    return (
        <div className="space-y-4">
            {/* Row 1: Branch Name and Address */}
            <div className="flex flex-row space-x-4 mb-4">
                <div className="w-1/2">
                    <InputField
                        id="branchName"
                        type="text"
                        placeholder="Enter Branch Name"
                        {...register("branchName" as Path<T>)}
                        aria-invalid={!!errors.branchName}
                        icon={undefined}
                        label={true}
                        labelName="Branch"
                    />
                    {errors.branchName && (
                        <p className="mt-1 text-sm error-message">{errors.branchName}</p>
                    )}
                </div>

                <div className="w-1/2">
                    <InputField
                        id="address"
                        type="text"
                        placeholder="Enter Address"
                        {...register("address" as Path<T>)}
                        aria-invalid={!!errors.address}
                        icon={undefined}
                        label={true}
                        labelName="Address"
                    />
                    {errors.address && (
                        <p className="mt-1 text-sm error-message">{errors.address}</p>
                    )}
                </div>
            </div>

            {/* Row 2: Email and Contact No */}
            <div className="flex flex-row space-x-4">
                <div className="w-1/2">
                    <InputField
                        id="email"
                        type="email"
                        placeholder="Enter Email"
                        {...register("email" as Path<T>)}
                        aria-invalid={!!errors.email}
                        icon={undefined}
                        label={true}
                        labelName="Email"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm error-message">{errors.email}</p>
                    )}
                </div>

                <div className="w-1/2">
                    <InputField
                        id="contactNo"
                        type="text"
                        placeholder="Enter Contact No"
                        {...register("contactNo" as Path<T>)}
                        aria-invalid={!!errors.contactNo}
                        icon={undefined}
                        label={true}
                        labelName="Contact No"
                    />
                    {errors.contactNo && (
                        <p className="mt-1 text-sm error-message">{errors.contactNo}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BranchFormSection;
