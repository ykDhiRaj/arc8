import { ReactNode } from "react";

export default function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className="min-h-screen">
            {/* Add dashboard navigation/sidebar here */}
            <main>{children}</main>
        </div>
    );
}
