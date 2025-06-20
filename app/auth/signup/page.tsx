"use client";
import { signUpEmailAction } from "@/actions/sign-up-email.actions";
import SignInOauth from "@/components/sign-in-oauth-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
interface SignUpFormData {
    name: string;
    email: string;
    password: string;
}

interface SignUpFormErrors {
    name?: string;
    email?: string;
    password?: string;
}

export default function SignUpPage() {
    const router = useRouter();

    const [formData, setFormData] = useState<SignUpFormData>({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState<SignUpFormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof SignUpFormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors: SignUpFormErrors = {};

        if (!formData.name.trim()) toast.error("Name is required");
        if (!formData.email.trim()) toast.error("Email is required");
        else if (!/\S+@\S+\.\S+/.test(formData.email)) toast.error("Email is invalid");

        if (!formData.password) toast.error("Password is required");
        else if (formData.password.length < 8) toast.error("Password must be at least 8 characters");

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;

        const formData = new FormData(e.target as HTMLFormElement);
        setIsSubmitting(true);
        const { error } = await signUpEmailAction(formData);
        if (error) {
            console.error("Sign up error:", error);
            toast.error(`❌ ${error}`);
            setIsSubmitting(false);
        }
        else {
            toast.success("Account created successfully!");
            router.push("/profile");
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center p-4 ">

            <div className="relative w-full max-w-lg">
                {/* Main Form Container */}
                <div className="relative p-8 rounded-3xl shadow-xl backdrop-blur-xl bg-white text-black ">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="mb-4">
                            <span className="text-4xl">🎮</span>
                        </div>
                        <h1 className="text-3xl font-bold mb-2 ">
                            Join the Game
                        </h1>
                        <p>Create your player profile</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 text-black">
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-semibold mb-2 ">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none bg-white backdrop-blur-sm ${errors.name ? "border-red-400 focus:border-red-500" : " focus:border-orange-400"
                                    } focus:shadow-lg focus:scale-[1.02]`}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-semibold mb-2  ">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="you@example.com"
                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none bg-white backdrop-blur-sm ${errors.email ? "border-red-400 focus:border-red-500" : " focus:border-orange-400"
                                    } focus:shadow-lg focus:scale-[1.02]`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Create password"
                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none bg-white backdrop-blur-sm ${errors.password ? "border-red-400 focus:border-red-500" : " focus:border-orange-400"
                                    } focus:shadow-lg focus:scale-[1.02]`}
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6">
                            <InteractiveHoverButton
                                type="submit"
                                className="w-full"
                                text="Sign Up"
                                disabled={isSubmitting}
                            />
                        </div>
                        <hr className="max-w-sm" />
                        <div className="flex flex-col gap-3 text-center">
                            Or
                            <SignInOauth signUp />
                        </div>
                    </form>

                    {/* Footer */}
                    <div className="text-center mt-6 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <a href="/auth/login" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                                Sign in here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}