import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";

export default function Venues() {
    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4 py-8">
                {/* Header */}
                <section className="mb-8">
                    <h1 className="font-pixel text-3xl mb-4">Explore Venues</h1>

                    {/* Search and Filter */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <input
                            type="search"
                            placeholder="Search venues..."
                            className="flex-1 px-4 py-2 rounded-lg border bg-background"
                        />
                        <select className="px-4 py-2 rounded-lg border bg-background">
                            <option>All Categories</option>
                            <option>Arcade</option>
                            <option>VR Gaming</option>
                            <option>Board Games</option>
                            <option>Laser Tag</option>
                        </select>
                    </div>
                </section>

                {/* Venues Grid */}
                <BentoGrid>
                    {[1, 2, 3, 4, 5, 6].map((venue) => (
                        <BentoItem
                            key={venue}
                            className="cursor-pointer hover:scale-[1.02] transition-transform"
                            title={`Venue ${venue}`}
                            description="Experience amazing gaming activities"
                            header={
                                <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-pixel-blue to-pixel-purple mb-4" />
                            }
                        />
                    ))}
                </BentoGrid>
            </main>
        </div>
    );
}
