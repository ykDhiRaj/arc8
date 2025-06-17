import { generateTimeSlots } from "@/lib/utils";

interface Props {
    params: {
        id: string;
    };
}

export default function BookVenue({ params }: Props) {
    const timeSlots = generateTimeSlots();

    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4 py-8">
                {/* Venue Info */}
                <section className="mb-8">
                    <div className="aspect-video w-full max-w-3xl mx-auto rounded-xl bg-gradient-to-br from-pixel-blue to-pixel-purple mb-6" />
                    <h1 className="font-pixel text-3xl mb-2">Venue Name</h1>
                    <p className="text-muted-foreground mb-4">Experience amazing gaming activities</p>
                    <div className="flex gap-4 text-sm">
                        <span className="px-3 py-1 rounded-full bg-pixel-blue/10 text-pixel-blue">
                            Arcade
                        </span>
                        <span className="px-3 py-1 rounded-full bg-pixel-green/10 text-pixel-green">
                            Available
                        </span>
                    </div>
                </section>

                {/* Booking Form */}
                <section className="max-w-2xl mx-auto">
                    <div className="space-y-6 bg-background/50 backdrop-blur-sm p-6 rounded-xl border">
                        <h2 className="font-pixel text-2xl">Book Your Slot</h2>

                        {/* Date Selection */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Select Date</label>
                            <input
                                type="date"
                                className="w-full px-4 py-2 rounded-lg border bg-background"
                            />
                        </div>

                        {/* Time Slots */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Select Time</label>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                {timeSlots.map((slot) => (
                                    <button
                                        key={slot}
                                        className="px-4 py-2 rounded-lg border hover:bg-primary/10 hover:border-primary transition-colors"
                                    >
                                        {slot}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full font-pixel bg-primary text-white rounded-lg px-6 py-3 hover:bg-primary/90 transition-colors">
                            Book Now
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
