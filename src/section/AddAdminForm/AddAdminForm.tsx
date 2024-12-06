import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import InputField from '@/components/InputField/InputField';


interface AdminFormValues {
  name: string;
  email: string;
  password: string;
  contact: string;
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
      {/* Row 1: Name and Email */}
      <div className="flex flex-row space-x-4">
        <div className="w-1/2">
          <InputField
            id="name"
            type="text"
            placeholder="Enter Full Name"
            {...register("name" as Path<T>)}
            aria-invalid={!!errors.name}
            label={true}
            labelName="Name"
          />
          {errors.name && (
            <p className="mt-1 text-sm error-message">{errors.name}</p>
          )}
        </div>

        <div className="w-1/2">
          <InputField
            id="email"
            type="email"
            placeholder="Enter Email"
            {...register("email" as Path<T>)}
            aria-invalid={!!errors.email}
            label={true}
            labelName="Email"
          />
          {errors.email && (
            <p className="mt-1 text-sm error-message">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Row 2: Password and Contact */}
      <div className="flex flex-row space-x-4">
        <div className="w-1/2">
          <InputField
            id="password"
            type="password"
            placeholder="Enter Password"
            {...register("password" as Path<T>)}
            aria-invalid={!!errors.password}
            label={true}
            labelName="Password"
          />
          {errors.password && (
            <p className="mt-1 text-sm error-message">{errors.password}</p>
          )}
        </div>

        <div className="w-1/2">
          <InputField
            id="contact"
            type="text"
            placeholder="Enter Contact Number"
            {...register("contact" as Path<T>)}
            aria-invalid={!!errors.contact}
            label={true}
            labelName="Contact No"
          />
          {errors.contact && (
            <p className="mt-1 text-sm error-message">{errors.contact}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminFormSection;
