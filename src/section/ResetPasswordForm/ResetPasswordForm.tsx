"use client";

import React, {FormEvent, useEffect, useState} from "react";
import InputField from "@/components/InputField/InputField";
import CustomButton from "@/components/Button/CustomButton";
import {resetPassword} from "@/apis/AuthAPIs/auth";
import {ResetPasswordSchema} from "@/schema/AuthSchema/ResetPasswordSchema";
import {useRouter} from "next/navigation";
interface ResetPasswordFormValues {
    password: string;
    confirmPassword: string;
}

const ResetPasswordForm = () => {

    const [formData, setFormData] = useState<ResetPasswordFormValues>({
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');

    const router = useRouter();

    useEffect(()=>{
        const userEmail = localStorage.getItem("userEmail");
        setEmail(userEmail ? JSON.parse(userEmail) : "");
    },[])



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, value: keyof ResetPasswordFormValues) => {
        setFormData({
            ...formData,
            [value]: e.target.value
        });
    }

    const handleResetPassword = async (e: FormEvent) => {
        e.preventDefault();

        const validation = ResetPasswordSchema.safeParse(formData);

        if (!validation.success) {
            setErrors(validation.error.errors[0]?.message || "Invalid input");
            return;
        }
        setLoading(true);
        try {
            await resetPassword(formData,email,router);
            setFormData({
                password: '',
                confirmPassword: ''
            });
        } catch (error: unknown) {
            console.log(error);
            setErrors("Invalid input");
        } finally {
            setLoading(false);
        }
    }

    const cancelSubmit = ()=>{
        setFormData({
            password: '',
            confirmPassword: ''
        })
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
                            <h2 className="text-4xl font-bold">Reset</h2>
                            <p className="text-gray-500">Your Password</p>
                        </div>
                        <img className="h-16" src="/CripsyLogo.png" alt="Cripsy Logo"/>
                    </div>

                    <form onSubmit={handleResetPassword}>
                        {/* Input Fields */}
                        <div className="my-8">

                            <div className="mb-4">
                                <InputField
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    value={formData.password || ''}
                                    onChange={(e) => handleInputChange(e, 'password')}
                                    icon={undefined}
                                    label={false}
                                    labelName="password"
                                />
                            </div>

                            <div className="mb-4">
                                <InputField
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="confirm Password"
                                    value={formData.confirmPassword || ''}
                                    onChange={(e) => handleInputChange(e, 'confirmPassword')}
                                    icon={undefined}
                                    label={false}
                                    labelName="confirmPassword"
                                />
                            </div>

                        </div>

                        {/* SignUp Button */}
                        <div className="mt-6">
                            <CustomButton
                                buttonLabel={loading ? "Resetting..." : "Reset"}
                                buttonClassName="w-full py-3 text-white bg-gradient-to-r from-red-500 to-red-700 rounded-lg"
                            />
                            <CustomButton
                                buttonLabel={"Cancel"}
                                buttonClassName="w-full bg-['#EAEAEA'] py-3 text-black mt-2 rounded-lg"
                                onClick={cancelSubmit}
                            />
                        </div>
                    </form>

                    {/* Error Message */}
                    {errors && <p className="text-red-500 text-center mt-4">{errors}</p>}

                </div>
            </div>
        </div>
    );
};

export default ResetPasswordForm;
