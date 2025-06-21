"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function signInEmailAction(formData: FormData) {
    const email = formData.get("email");
    if (!email || typeof email !== "string" || !email.trim()) {
        return { error: "Email is required" };
    }
    const password = formData.get("password");
    if (!password || typeof password !== "string" || !password.trim()) {
        return { error: "Password is required" };
    }

    try {
        await auth.api.signInEmail({
            headers: await headers(),
            body: { email, password },
        });
        return { error: null };
    } catch (error) {
        if (error instanceof Error) {
            return { error: error.message };
        }
    }
    return { error: "internal server error" };
}
