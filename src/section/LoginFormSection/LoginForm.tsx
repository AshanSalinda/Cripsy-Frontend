"use client";

import React, {FormEvent, useState} from "react";
import InputField from "@/components/InputField/InputField";
import CustomButton from "@/components/Button/CustomButton";
import {LoginSchema} from "@/schema/AuthSchema/LoginSchema";
import {userLogin} from "@/apis/AuthAPIs/auth";

interface LoginFormValues {
    username: string;
    password: string;
}

const LoginForm = () => {

    const [formData, setFormData] = useState<LoginFormValues>({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, value: keyof LoginFormValues) => {
        setFormData({
            ...formData,
            [value]: e.target.value
        });
    }

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        const validation = LoginSchema.safeParse(formData);

        if (!validation.success) {
            setErrors(validation.error.errors[0]?.message || "Invalid input");
            return;
        }
        setLoading(true);
        try {
            await userLogin(formData);
            console.log("Username: ", formData.username, "Password: ", formData.password);
            setFormData({username: '', password: ''});
        } catch (error: any) {
            setErrors(error?.message || "Invalid input");
        } finally {
            setLoading(false);
        }


    }

    return (
        <div className="flex min-h-screen bg-pink-50">
            {/* Left Section */}
            <div className="w-1/2 flex flex-col items-center justify-center">
                <h4 className="text-center text-2xl font-semibold font-['Schoolbell'] mb-6">
                    Crisp Deals, Every Day
                </h4>
                <img className="h-14 w-auto" src="/LoginPhoto.png" alt="Shopping girl"/>
            </div>

            {/* Right Section (Login Form) */}
            <div className="w-1/2 flex items-center justify-center">
                <div className="bg-white p-10 rounded-lg shadow-lg w-3/4">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-4xl font-bold">Login</h2>
                            <p className="text-gray-500">to shopping</p>
                        </div>
                        <img className="h-16" src="/CripsyLogo.png" alt="Cripsy Logo"/>
                    </div>

                    <form onSubmit={handleLogin}>
                        {/* Input Fields */}
                        <div className="my-8">
                            <div className="mb-4 mt-4">
                                <InputField
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                    value={formData.username || ''}
                                    onChange={(e) => handleInputChange(e, 'username')}
                                    icon={undefined}
                                    label={false}
                                    labelName="username"
                                />
                            </div>
                            <div className="mb-4">
                                <InputField
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    value={formData.password || ''}
                                    onChange={(e) => handleInputChange(e, 'password')}
                                    icon={undefined}
                                    label={false}
                                    labelName=""
                                />
                            </div>

                        </div>

                        <p className="text-right text-blue-600 mt-3 cursor-pointer">Forgot Password?</p>

                        {/* Login Button */}
                        <div className="mt-6">
                            <CustomButton
                                buttonLabel={loading ? "Logging in..." : "Continue"}
                                buttonClassName="w-full py-3 text-white bg-gradient-to-r from-red-500 to-red-700 rounded-lg"
                            />
                        </div>
                    </form>

                    {/* Error Message */}
                    {errors && <p className="text-red-500 text-center mt-4">{errors}</p>}

                    {/* Register Link */}
                    <div className="text-center mt-6">
                        <p className="text-gray-500">
                            New User? <a href="#" className="text-blue-600 font-semibold">Register</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;