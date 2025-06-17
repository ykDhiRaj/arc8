import { formatPrice } from "@/lib/utils";

export default function Bookings() {
    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4 py-8">
                <h1 className="font-pixel text-3xl mb-8">My Bookings</h1>

                {/* Booking Cards */}
                <div className="space-y-6">
                    {[1, 2, 3].map((booking) => (
                        <div
                            key={booking}
                            className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border hover:border-primary transition-colors"
                        >
                            <div className="flex flex-col sm:flex-row gap-6">
                                {/* Venue Image */}
                                <div className="w-full sm:w-48 aspect-video rounded-lg bg-gradient-to-br from-pixel-blue to-pixel-purple" />

                                {/* Booking Details */}
                                <div className="flex-1 space-y-4">
                                    <div>
                                        <h3 className="font-pixel text-lg mb-2">Venue Name</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Arcade Games • 2 hours
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-sm">
                                        <div>
                                            <span className="text-muted-foreground">Date: </span>
                                            <span>June 15, 2025</span>
                                        </div>
                                        <div>
                                            <span className="text-muted-foreground">Time: </span>
                                            <span>2:00 PM</span>
                                        </div>
                                        <div>
                                            <span className="text-muted-foreground">Amount: </span>
                                            <span>{formatPrice(1999)}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button className="text-sm px-4 py-2 rounded-lg border hover:bg-primary/10 hover:border-primary transition-colors">
                                            View Details
                                        </button>
                                        <button className="text-sm px-4 py-2 rounded-lg border hover:bg-primary/10 hover:border-primary transition-colors">
                                            Cancel Booking
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
