import { ReactNode } from "react";

export default function AuthLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white text-black" style={{ position: "relative" }}>
            <div className="flex items-center justify-center p-8">
                <div className="w-full space-y-8">
                    {children}
                </div>
            </div>
        </div>
    );
}