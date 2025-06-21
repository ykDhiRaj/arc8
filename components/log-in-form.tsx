"use client";
import { signInEmailAction } from "@/app/actions/sign-in-email.actions";
import SignInOauth from "@/components/sign-in-oauth-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface LoginFormData {
    email: string;
    password: string;
}

interface LoginFormErrors {
    email?: string;
    password?: string;
}

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState<LoginFormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof LoginFormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors: LoginFormErrors = {};

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
        const { error } = await signInEmailAction(formData);
        if (error) {
            console.error("Sign in error:", error);
            toast.error(`❌ ${error}`);
            setIsSubmitting(false);
        }
        else {
            toast.success("Login successful!");
            router.push("/profile");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 ">

            <div className="relative w-full max-w-lg">
                {/* Main Form Container */}
                <div className="relative p-8 rounded-3xl shadow-2xl backdrop-blur-xl">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="mb-4">
                            <span className="text-4xl">🎮</span>
                        </div>
                        <h1 className="text-3xl font-bold mb-2"
                            style={{ color: "#14213D" }}>
                            Join the Game
                        </h1>
                        <p className="text-gray-600">Welcome back, player </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 text-black">
                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="you@example.com"
                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none bg-white/70 backdrop-blur-sm ${errors.email ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-orange-400"
                                    } focus:shadow-lg focus:scale-[1.02]`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Enter password"
                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none bg-white/70 backdrop-blur-sm ${errors.password ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-orange-400"
                                    } focus:shadow-lg focus:scale-[1.02]`}
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6 flex justify-center">
                            <InteractiveHoverButton
                                type="submit"
                                className="w-2xs "
                                text="Login"
                                disabled={isSubmitting}
                            />
                        </div>
                        <hr className="max-w-sm" />
                        <div className="flex flex-col gap-3 text-center">
                            Or
                            <SignInOauth />
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}