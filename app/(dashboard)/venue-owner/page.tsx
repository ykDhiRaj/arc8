import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import Link from "next/link";

export default function VenueOwnerDashboard() {
    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4 py-8">
                <h1 className="font-pixel text-3xl mb-8">Venue Owner Dashboard</h1>

                {/* Quick Stats */}
                <section className="mb-12">
                    <BentoGrid>
                        <BentoItem
                            title="Total Bookings"
                            description="124 bookings this month"
                            className="bg-pixel-blue/10"
                        />
                        <BentoItem
                            title="Active Venues"
                            description="3 venues listed"
                            className="bg-pixel-green/10"
                        />
                        <BentoItem
                            title="Revenue"
                            description="₹45,000 this month"
                            className="bg-pixel-purple/10"
                        />
                        <BentoItem
                            title="Reviews"
                            description="4.8 average rating"
                            className="bg-pixel-orange/10"
                        />
                    </BentoGrid>
                </section>

                {/* Recent Bookings */}
                <section className="mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="font-pixel text-2xl">Recent Bookings</h2>
                        <Link
                            href="/dashboard/venue-owner/bookings"
                            className="text-primary hover:underline"
                        >
                            View all
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((booking) => (
                            <div
                                key={booking}
                                className="p-4 rounded-lg border bg-background/50 backdrop-blur-sm hover:border-primary transition-colors"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-medium mb-1">Booking #{booking}</h3>
                                        <p className="text-sm text-muted-foreground">
                                            2 hours • Arcade Games
                                        </p>
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-sm bg-pixel-green/10 text-pixel-green">
                                        Confirmed
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quick Actions */}
                <section>
                    <h2 className="font-pixel text-2xl mb-6">Quick Actions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link
                            href="/dashboard/venue-owner/venues"
                            className="p-4 rounded-lg border bg-background hover:border-primary transition-colors text-center"
                        >
                            Manage Venues
                        </Link>
                        <Link
                            href="/dashboard/venue-owner/activities"
                            className="p-4 rounded-lg border bg-background hover:border-primary transition-colors text-center"
                        >
                            Manage Activities
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}
