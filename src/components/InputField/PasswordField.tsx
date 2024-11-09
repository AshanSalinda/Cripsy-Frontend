import React, { useState, forwardRef } from 'react';
import { GoEye, GoEyeClosed } from "react-icons/go";

interface PasswordFieldProps {
  id: string;
  type: string;
  value?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  width?: string;
  ariaLabel?: string;
  className?: string;
  label?: boolean; 
}

// Use forwardRef to allow React Hook Form to register the input
const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(({
  id,
  type,
  value,
  placeholder,
  onChange,
  className = '',
  icon,
  width = 'w-full',
  ariaLabel,
  label = false,
  ...rest
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Add password visibility state

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const hasValue = !!value;

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  return (
    <div className="relative flex flex-col items-start">
      {label && (
        <label
          htmlFor={id}
          className={`absolute left-3 transition-all duration-200 text-sm ${
            isFocused || hasValue
              ? '-top-3 text-blue_light bg-white px-1 font-medium z-[1]'
              : 'top-2 text-gray-400'
          }`}
        >
          {placeholder}
        </label>
      )}

      <div className="relative flex items-center w-full">
        <input
          id={id}
          type={type === 'password' && isPasswordVisible ? 'text' : type} // Toggle input type between 'password' and 'text'
          value={value}
          onChange={onChange}
          placeholder={!isFocused ? placeholder : ''}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          className={`block ${width} py-2 pl-3 pr-10 text-sm text-black border rounded-md border-gray-400 focus:outline-none focus:ring-gray-700 focus:border-blue-500 ${className}`}
          aria-label={ariaLabel || placeholder}
          {...rest}
        />

        {/* Password visibility toggle */}
        {type === 'password' && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="mt-3 text-gray-500 bg-transparent border-none cursor-pointer focus:outline-none"
            >
              {isPasswordVisible ? <GoEye /> : <GoEyeClosed />}
            </button>
          </div>
        )}

        {/* Render icon if it's not a password field */}
        {icon && type !== 'password' && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
});

PasswordField.displayName = 'PasswordField'; // For better debugging

export default PasswordField;
