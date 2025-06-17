"use client";
import { useState } from "react";
import { toast } from "sonner";
import { signIn } from "@/lib/auth-client";
import SignInOauth from "@/components/sign-in-oauth-button";

interface LoginFormData {
    email: string;
    password: string;
}

interface LoginFormErrors {
    email?: string;
    password?: string;
}

export default function LoginPage() {
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

        await signIn.email({
            email: formData.email,
            password: formData.password
        }, {
            onRequest: () => { },
            onResponse: () => { },
            onError: (ctx) => {
                toast.error(ctx.error.message);

            },
            onSuccess: () => { }
        });
        if (!validateForm()) return;

        setIsSubmitting(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 "
            style={{
                backgroundColor: "#1F2937",
                fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif"
            }}>

            <div className="relative w-full max-w-lg">
                {/* Main Form Container */}
                <div className="relative p-8 rounded-3xl shadow-2xl backdrop-blur-xl"
                    style={{
                        backgroundColor: "rgba(229, 229, 229, 0.95)",
                        border: "2px solid rgba(252, 163, 17, 0.3)",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(252, 163, 17, 0.1)"
                    }}>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="mb-4">
                            <span className="text-4xl">🎮</span>
                        </div>
                        <h1 className="text-3xl font-bold mb-2"
                            style={{ color: "#14213D" }}>
                            Join the Game
                        </h1>
                        <p className="text-gray-600">Create your player profile</p>
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
                                placeholder="Create password"
                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none bg-white/70 backdrop-blur-sm ${errors.password ? "border-red-400 focus:border-red-500" : "border-gray-200 focus:border-orange-400"
                                    } focus:shadow-lg focus:scale-[1.02]`}
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="relative w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                            style={{
                                backgroundColor: isSubmitting ? "#6B7280" : "#FCA311"
                            }}
                        >
                            <span className="relative z-10 flex items-center justify-center space-x-2">
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Logging in</span>
                                    </>
                                ) : (
                                    <>
                                        <span>🚀</span>
                                        <span>Start Gaming</span>
                                    </>
                                )}
                            </span>
                        </button>
                        <hr className="max-w-sm" />
                        <div className="flex flex-col gap-3 text-center">
                            Or 
                            <SignInOauth />
                        </div>
                    </form>

                    {/* Footer */}
                    <div className="text-center mt-6 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                            New Player?
                            <a href="/auth/signup" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                                Make a new account
                            </a>
                        </p>
                    </div>
                </div>
            </div >
        </div >
    );
}