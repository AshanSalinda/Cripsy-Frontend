// AdminFormSection.tsx
import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import InputField from '@/components/InputField/InputField';

interface AdminFormValues {
  firstName: string;
  lastName: string;
  email: string;
  contactNo: string;
  birthday: string;
  gender: string;
}

interface AdminFormSectionProps<T extends AdminFormValues> {
  errors: Partial<Record<keyof T, string>>;
  register: UseFormRegister<T>;
}

const AdminFormSection = <T extends AdminFormValues>({
  errors,
  register,
}: AdminFormSectionProps<T>) => {
  return (
    <div className="space-y-4">
      {/* Row 1: Admin Name and Email */}
      <div className="flex flex-row space-x-4 mb-4">
        <div className="w-1/2">
          <InputField
            id="fisrtName"
            type="text"
            placeholder="Enter Fisrt Name"
            {...register("firstName" as Path<T>)}
            aria-invalid={!!errors.firstName}
            icon={undefined}
            label={true}
            labelName="Fisrt Name"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm error-message">{errors.firstName}</p>
          )}
        </div>

        <div className="w-1/2">
          <InputField
            id="lastName"
            type="text"
            placeholder="Enter Last Name"
            {...register("lastName" as Path<T>)}
            aria-invalid={!!errors.lastName}
            icon={undefined}
            label={true}
            labelName="Last Name"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm error-message">{errors.lastName}</p>
          )}
        </div>
      </div>
      {/* row 2 */}
      <div className="flex flex-row space-x-4 mb-4">
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
      {/* Row 3*/}
      <div className="flex flex-row space-x-4 mb-4">
        <div className="w-1/2">
          <InputField
            id="birthday"
            type="text"
            placeholder="Enter Birthday"
            {...register("birthday" as Path<T>)}
            aria-invalid={!!errors.birthday}
            icon={undefined}
            label={true}
            labelName="Birthday"
          />
          {errors.birthday && (
            <p className="mt-1 text-sm error-message">{errors.birthday}</p>
          )}
        </div>

        <div className="w-1/2">
          <InputField
            id="gender"
            type="text"
            placeholder="Enter Gender"
            {...register("gender" as Path<T>)}
            aria-invalid={!!errors.gender}
            icon={undefined}
            label={true}
            labelName="Gender"
          />
          {errors.gender && (
            <p className="mt-1 text-sm error-message">{errors.gender}</p>
          )}
        </div>
      </div>


    </div>
  );
};

export default AdminFormSection;
