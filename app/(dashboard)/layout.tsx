import { ReactNode } from "react";

export default function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="min-h-screen max-w-6xl flex flex-col mx-auto">
            {/* Add dashboard navigation/sidebar here */}
            <main>{children}</main>
        </div>
    );
}
