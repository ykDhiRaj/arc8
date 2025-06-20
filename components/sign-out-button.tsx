"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export default function SignOutButton() {
    const router = useRouter();

    async function handleSignOut() {
        await signOut({
            fetchOptions: {
                onError: (ctx) => {
                    toast.error(ctx.error.message);
                },
                onSuccess: () => {
                    toast.success("Successfully signed out");
                    router.push("/auth/login");
                }
            }
        });
    }

    return (
        <Button variant="destructive" className="cursor-pointer" onClick={handleSignOut}>
            Sign Out
        </Button>
    );
}