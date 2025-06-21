"use client";
import { useState } from "react";

interface Venue {
    id: number;
    name: string;
    category: string;
    description: string;
    price: string;
    rating: number;
    reviews: number;
    image: string;
    features: string[];
    location: string;
    availability: "Available" | "Busy" | "Closed";
}

const mockVenues: Venue[] = [
    {
        id: 1,
        name: "Pixel Palace Arcade",
        category: "Arcade",
        description: "Classic arcade games with modern twists. Experience retro gaming at its finest with over 100 classic machines.",
        price: "$25/hour",
        rating: 4.8,
        reviews: 156,
        image: "🕹️",
        features: ["100+ Games", "Tournament Area", "Snack Bar", "Party Rooms"],
        location: "Downtown",
        availability: "Available"
    },
    {
        id: 2,
        name: "VR Universe",
        category: "VR Gaming",
        description: "Immerse yourself in virtual worlds with cutting-edge VR technology and multiplayer experiences.",
        price: "$40/hour",
        rating: 4.9,
        reviews: 89,
        image: "🥽",
        features: ["8 VR Stations", "Multiplayer", "Latest Games", "Private Booths"],
        location: "Tech District",
        availability: "Busy"
    },
    {
        id: 3,
        name: "Board Game Café",
        category: "Board Games",
        description: "Cozy atmosphere with 500+ board games, craft coffee, and delicious snacks for the perfect game night.",
        price: "$15/hour",
        rating: 4.6,
        reviews: 203,
        image: "🎲",
        features: ["500+ Games", "Café Menu", "Game Masters", "Private Tables"],
        location: "Arts Quarter",
        availability: "Available"
    },
    {
        id: 4,
        name: "Laser Quest Arena",
        category: "Laser Tag",
        description: "Multi-level laser tag arena with themed environments and tactical gameplay for all skill levels.",
        price: "$30/hour",
        rating: 4.7,
        reviews: 124,
        image: "🔫",
        features: ["Multi-level Arena", "Team Modes", "Equipment Included", "Birthday Packages"],
        location: "Entertainment Zone",
        availability: "Available"
    },
    {
        id: 5,
        name: "Escape Reality",
        category: "Escape Rooms",
        description: "Challenge your mind with immersive escape rooms featuring unique themes and cutting-edge puzzles.",
        price: "$35/hour",
        rating: 4.8,
        reviews: 167,
        image: "🗝️",
        features: ["6 Themed Rooms", "Team Building", "High-tech Puzzles", "Photo Opportunities"],
        location: "Mystery Mile",
        availability: "Busy"
    },
    {
        id: 6,
        name: "Gaming Lounge Pro",
        category: "PC Gaming",
        description: "High-end gaming PCs with the latest titles, tournaments, and comfortable gaming chairs.",
        price: "$20/hour",
        rating: 4.5,
        reviews: 92,
        image: "💻",
        features: ["RTX 4080 PCs", "144Hz Monitors", "Tournament Setup", "Streaming Ready"],
        location: "Gaming District",
        availability: "Available"
    }
];

const categories = ["All Categories", "Arcade", "VR Gaming", "Board Games", "Laser Tag", "Escape Rooms", "PC Gaming"];

export default function Venues() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [sortBy, setSortBy] = useState("name");

    const filteredVenues = mockVenues
        .filter(venue => {
            const matchesSearch = venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                venue.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === "All Categories" || venue.category === selectedCategory;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "rating":
                    return b.rating - a.rating;
                case "price":
                    return parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, ""));
                case "name":
                default:
                    return a.name.localeCompare(b.name);
            }
        });

    const getAvailabilityColor = (availability: string) => {
        switch (availability) {
            case "Available":
                return "bg-orange-100 text-orange-800 border-orange-300";
            case "Busy":
                return "bg-yellow-100 text-yellow-800 border-yellow-300";
            case "Closed":
                return "bg-gray-100 text-gray-800 border-gray-300";
            default:
                return "bg-gray-100 text-gray-800 border-gray-300";
        }
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`text-sm ${i < Math.floor(rating) ? "text-orange-500" : "text-gray-300"}`}>
                ⭐
            </span>
        ));
    };

    return (
        <div className="min-h-screen max-w-6xl flex flex-col mx-auto mt-16">
            <main className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <section className="text-center mb-12">
                    <div className="mb-6">
                        <span className="text-6xl">🎮</span>
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">
                        Discover Amazing Venues
                    </h1>
                    <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                        Find the perfect gaming venue for your next adventure. From classic arcades to cutting-edge VR experiences.
                    </p>
                </section>

                {/* Search and Filter Section */}
                <section className="mb-8">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Search Input */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-slate-500">🔍</span>
                                </div>
                                <input
                                    type="search"
                                    placeholder="Search venues..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-300 focus:border-orange-400 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                                />
                            </div>

                            {/* Category Filter */}
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-orange-400 focus:outline-none transition-colors bg-gray-50 focus:bg-white text-slate-800"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>

                            {/* Sort By */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-orange-400 focus:outline-none transition-colors bg-gray-50 focus:bg-white text-slate-800"
                            >
                                <option value="name">Sort by Name</option>
                                <option value="rating">Sort by Rating</option>
                                <option value="price">Sort by Price</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Results Counter */}
                <div className="mb-6">
                    <p className="text-slate-600">
                        Showing <span className="font-semibold text-slate-900">{filteredVenues.length}</span> venues
                        {selectedCategory !== "All Categories" && (
                            <span> in <span className="font-semibold text-orange-600">{selectedCategory}</span></span>
                        )}
                    </p>
                </div>

                {/* Venues Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredVenues.map((venue) => (
                        <div
                            key={venue.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-200 overflow-hidden group cursor-pointer"
                        >
                            {/* Image/Icon Header */}
                            <div className="relative">
                                <div className="aspect-video w-full bg-gradient-to-br from-slate-800 via-slate-700 to-orange-500 flex items-center justify-center">
                                    <span className="text-6xl filter drop-shadow-lg">
                                        {venue.image}
                                    </span>
                                </div>

                                {/* Availability Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getAvailabilityColor(venue.availability)}`}>
                                        {venue.availability}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Header */}
                                <div className="mb-3">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                            {venue.name}
                                        </h3>
                                        <span className="text-lg font-bold text-orange-600">
                                            {venue.price}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="px-2 py-1 bg-gray-100 text-slate-700 text-xs rounded-full font-medium">
                                            {venue.category}
                                        </span>
                                        <span className="text-sm text-slate-500">
                                            📍 {venue.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mb-3">
                                    <div className="flex items-center mr-2">
                                        {renderStars(venue.rating)}
                                    </div>
                                    <span className="text-sm font-semibold text-slate-800">
                                        {venue.rating}
                                    </span>
                                    <span className="text-sm text-slate-500 ml-1">
                                        ({venue.reviews} reviews)
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                                    {venue.description}
                                </p>

                                {/* Features */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-1">
                                        {venue.features.slice(0, 3).map((feature, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded font-medium"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                        {venue.features.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-100 text-slate-600 text-xs rounded font-medium">
                                                +{venue.features.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors text-sm">
                                        Book Now
                                    </button>
                                    <button className="px-4 py-2 border border-gray-300 hover:border-slate-400 text-slate-700 rounded-lg transition-colors text-sm">
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredVenues.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-slate-700 mb-2">No venues found</h3>
                        <p className="text-slate-500">Try adjusting your search criteria or explore different categories.</p>
                    </div>
                )}

                {/* Load More Button */}
                {filteredVenues.length > 0 && (
                    <div className="text-center mt-12">
                        <button className="bg-gray-200 hover:bg-gray-300 text-slate-800 px-8 py-3 rounded-xl font-semibold transition-colors">
                            Load More Venues
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}