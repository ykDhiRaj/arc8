import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import Link from "next/link";

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4 py-8">
                <h1 className="font-pixel text-3xl mb-8">Admin Dashboard</h1>

                {/* Overview Stats */}
                <section className="mb-12">
                    <BentoGrid>
                        <BentoItem
                            title="Total Users"
                            description="1,245 active users"
                            className="bg-pixel-blue/10"
                        />
                        <BentoItem
                            title="Total Venues"
                            description="48 active venues"
                            className="bg-pixel-green/10"
                        />
                        <BentoItem
                            title="Total Revenue"
                            description="₹4,50,000 this month"
                            className="bg-pixel-purple/10"
                        />
                        <BentoItem
                            title="Support Tickets"
                            description="5 open tickets"
                            className="bg-pixel-orange/10"
                        />
                    </BentoGrid>
                </section>

                {/* Recent Activity */}
                <section className="mb-12">
                    <h2 className="font-pixel text-2xl mb-6">Recent Activity</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((activity) => (
                            <div
                                key={activity}
                                className="p-4 rounded-lg border bg-background/50 backdrop-blur-sm"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-medium mb-1">New Venue Registration</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Venue owner registered a new arcade
                                        </p>
                                    </div>
                                    <span className="text-sm text-muted-foreground">
                                        2 hours ago
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quick Actions */}
                <section>
                    <h2 className="font-pixel text-2xl mb-6">Management</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <Link
                            href="/dashboard/admin/venues"
                            className="p-4 rounded-lg border bg-background hover:border-primary transition-colors text-center"
                        >
                            Manage Venues
                        </Link>
                        <Link
                            href="/dashboard/admin/users"
                            className="p-4 rounded-lg border bg-background hover:border-primary transition-colors text-center"
                        >
                            Manage Users
                        </Link>
                        <Link
                            href="/dashboard/admin/bookings"
                            className="p-4 rounded-lg border bg-background hover:border-primary transition-colors text-center"
                        >
                            View Bookings
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}
