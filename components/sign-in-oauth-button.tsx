"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";

interface SignInOauthProps {
    signUp?: boolean;
}


const SignInOauth = ({ signUp }: SignInOauthProps) => {

    const [isPending, setIsPending] = useState(false);
    const action = signUp ? "Up" : "In";

    const handleClick = async () => {
        await signIn.social({
            provider: "google",
            callbackURL: "/profile",
            errorCallbackURL: "/auth/login/error",
            fetchOptions: {
                onRequest: () => { setIsPending(true); },
                onResponse: () => { setIsPending(false); },
                onError: (error) => {
                    toast.error(`Error signing ${action.toLowerCase()} with Google: ${error}`);
                },
                onSuccess: () => { }
            }
        });
    };

    return (
        <Button onClick={handleClick} disabled={isPending} className="text-md font-bold" >
            Sign {action} with Google
        </Button>
    );
};

export default SignInOauth;
