import SignOutButton from "@/components/sign-out-button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Profile() {
    const session = await auth.api.getSession({
        headers: await headers()
    });


    return (
        <div className="mt-20">
            <h1>Profile Page</h1>
            {session ? (
                <p>Welcome back, {session.user.name}!</p>
            ) : (
                <p className="text-destructive">Please log in to view your profile.</p>
            )}
            <SignOutButton />
            <pre className="text-sm overflow-clip ">
                {JSON.stringify(session, null, 2)}
            </pre>
        </div>
    );
}
