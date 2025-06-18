import { ReactNode } from "react";

export default function AuthLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Auth Form Section */}
            <div className="flex items-center justify-center p-8">
                <div className="w-full space-y-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                            Welcome to Arc8
                        </h1>
                        <p className="text-muted-foreground">
                            Your gateway to amazing gaming experiences
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}