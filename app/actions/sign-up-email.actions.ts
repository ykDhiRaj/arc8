"use server";

import { auth } from "@/lib/auth";

export async function signUpEmailAction(formData: FormData) {
    const name = formData.get("name");
    if (!name || typeof name !== "string" || !name.trim()) {
        return { error: "Name is required" };
    }
    const email = formData.get("email");
    if (!email || typeof email !== "string" || !email.trim()) {
        return { error: "Email is required" };
    }
    const password = formData.get("password");
    if (!password || typeof password !== "string" || !password.trim()) {
        return { error: "Password is required" };
    }
    try {
        await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
            },
        });
        return { error: null };
    } catch (error) {
        if (error instanceof Error) {
            return { error: error.message };
        }
    }
    return { error: "internal server error" };
}
