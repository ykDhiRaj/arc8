"use client";
import { useState } from "react";
import { formatPrice } from "@/lib/utils";

interface Booking {
    id: number;
    venueName: string;
    category: string;
    date: string;
    time: string;
    duration: number;
    amount: number;
    status: "confirmed" | "pending" | "cancelled" | "completed";
    image: string;
    location: string;
    participants: number;
    bookingRef: string;
    contactPhone: string;
}

const mockBookings: Booking[] = [
    {
        id: 1,
        venueName: "Pixel Palace Arcade",
        category: "Arcade Games",
        date: "June 25, 2025",
        time: "2:00 PM",
        duration: 2,
        amount: 5000,
        status: "confirmed",
        image: "🕹️",
        location: "Downtown Plaza",
        participants: 4,
        bookingRef: "BP001234",
        contactPhone: "+1 234-567-8900"
    },
    {
        id: 2,
        venueName: "VR Universe",
        category: "VR Gaming",
        date: "June 28, 2025",
        time: "6:30 PM",
        duration: 1.5,
        amount: 6000,
        status: "pending",
        image: "🥽",
        location: "Tech District",
        participants: 2,
        bookingRef: "BP001235",
        contactPhone: "+1 234-567-8901"
    },
    {
        id: 3,
        venueName: "Board Game Café",
        category: "Board Games",
        date: "June 20, 2025",
        time: "7:00 PM",
        duration: 3,
        amount: 4500,
        status: "completed",
        image: "🎲",
        location: "Arts Quarter",
        participants: 6,
        bookingRef: "BP001236",
        contactPhone: "+1 234-567-8902"
    },
    {
        id: 4,
        venueName: "Laser Quest Arena",
        category: "Laser Tag",
        date: "June 22, 2025",
        time: "4:00 PM",
        duration: 1,
        amount: 3000,
        status: "cancelled",
        image: "🔫",
        location: "Entertainment Zone",
        participants: 8,
        bookingRef: "BP001237",
        contactPhone: "+1 234-567-8903"
    }
];

const statusConfig = {
    confirmed: {
        color: "bg-[#FCA311] text-white",
        icon: "✓",
        label: "Confirmed"
    },
    pending: {
        color: "bg-[#E5E5E5] text-[#14213D]",
        icon: "⏳",
        label: "Pending"
    },
    completed: {
        color: "bg-[#14213D] text-white",
        icon: "🎉",
        label: "Completed"
    },
    cancelled: {
        color: "bg-gray-400 text-white",
        icon: "❌",
        label: "Cancelled"
    }
};

export default function Bookings() {
    const [activeTab, setActiveTab] = useState<"all" | "upcoming" | "completed" | "cancelled">("all");
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

    const filteredBookings = mockBookings.filter(booking => {
        if (activeTab === "all") return true;
        if (activeTab === "upcoming") return booking.status === "confirmed" || booking.status === "pending";
        if (activeTab === "completed") return booking.status === "completed";
        if (activeTab === "cancelled") return booking.status === "cancelled";
        return true;
    });

    const getStatusColor = (status: string) => {
        return statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF" }}>
            <main className="container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">📅</span>
                        <h1 className="text-4xl font-bold" style={{ color: "#14213D" }}>
                            My Bookings
                        </h1>
                    </div>
                    <p className="text-gray-600">
                        Manage and track all your venue bookings in one place
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="p-4 rounded-xl border-2" style={{ backgroundColor: "#FCA311", borderColor: "#FCA311" }}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-white/80 text-sm font-medium">Total Bookings</p>
                                <p className="text-2xl font-bold text-white">{mockBookings.length}</p>
                            </div>
                            <span className="text-2xl">📊</span>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl border-2" style={{ backgroundColor: "#14213D", borderColor: "#14213D" }}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-white/80 text-sm font-medium">Upcoming</p>
                                <p className="text-2xl font-bold text-white">
                                    {mockBookings.filter(b => b.status === "confirmed" || b.status === "pending").length}
                                </p>
                            </div>
                            <span className="text-2xl">🎯</span>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl border-2" style={{ backgroundColor: "#E5E5E5", borderColor: "#E5E5E5" }}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p style={{ color: "#14213D" }} className="text-sm font-medium opacity-80">Completed</p>
                                <p className="text-2xl font-bold" style={{ color: "#14213D" }}>
                                    {mockBookings.filter(b => b.status === "completed").length}
                                </p>
                            </div>
                            <span className="text-2xl">🏆</span>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl border-2 border-gray-200 bg-white">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-medium">Total Spent</p>
                                <p className="text-2xl font-bold" style={{ color: "#14213D" }}>
                                    {formatPrice(mockBookings.reduce((sum, b) => sum + b.amount, 0))}
                                </p>
                            </div>
                            <span className="text-2xl">💰</span>
                        </div>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 p-2 rounded-xl" style={{ backgroundColor: "#E5E5E5" }}>
                        {[
                            { key: "all", label: "All Bookings", icon: "📋" },
                            { key: "upcoming", label: "Upcoming", icon: "⏰" },
                            { key: "completed", label: "Completed", icon: "✅" },
                            { key: "cancelled", label: "Cancelled", icon: "❌" }
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key as any)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${activeTab === tab.key
                                    ? "text-white shadow-lg"
                                    : "text-gray-700 hover:bg-white/50"
                                    }`}
                                style={{
                                    backgroundColor: activeTab === tab.key ? "#FCA311" : "transparent"
                                }}
                            >
                                <span>{tab.icon}</span>
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Booking Cards */}
                <div className="space-y-6">
                    {filteredBookings.map((booking) => (
                        <div
                            key={booking.id}
                            className="bg-white border-2 border-gray-100 hover:border-[#FCA311] transition-all duration-300 p-6 rounded-2xl shadow-sm hover:shadow-lg"
                        >
                            <div className="flex flex-col lg:flex-row gap-6">
                                {/* Venue Image/Icon */}
                                <div className="w-full lg:w-48 aspect-video rounded-xl flex items-center justify-center text-6xl"
                                    style={{ background: "linear-gradient(135deg, #14213D 0%, #FCA311 100%)" }}>
                                    <span className="filter drop-shadow-lg">
                                        {booking.image}
                                    </span>
                                </div>

                                {/* Booking Details */}
                                <div className="flex-1">
                                    {/* Header with Status */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold mb-1" style={{ color: "#14213D" }}>
                                                {booking.venueName}
                                            </h3>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <span>🎮</span>
                                                <span>{booking.category}</span>
                                                <span>•</span>
                                                <span>{booking.duration} hour{booking.duration > 1 ? "s" : ""}</span>
                                            </div>
                                        </div>
                                        <div className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 ${getStatusColor(booking.status).color} mt-2 sm:mt-0 w-fit`}>
                                            <span>{getStatusColor(booking.status).icon}</span>
                                            <span>{getStatusColor(booking.status).label}</span>
                                        </div>
                                    </div>

                                    {/* Details Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#FCA311]">📅</span>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Date</p>
                                                <p className="font-semibold" style={{ color: "#14213D" }}>{booking.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#FCA311]">🕐</span>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Time</p>
                                                <p className="font-semibold" style={{ color: "#14213D" }}>{booking.time}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#FCA311]">💰</span>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Amount</p>
                                                <p className="font-semibold" style={{ color: "#14213D" }}>{formatPrice(booking.amount)}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#FCA311]">📍</span>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                                                <p className="font-semibold" style={{ color: "#14213D" }}>{booking.location}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#FCA311]">👥</span>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Participants</p>
                                                <p className="font-semibold" style={{ color: "#14213D" }}>{booking.participants} people</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#FCA311]">📋</span>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wide">Booking ID</p>
                                                <p className="font-semibold" style={{ color: "#14213D" }}>{booking.bookingRef}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-3">
                                        <button
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover:shadow-md"
                                            style={{ backgroundColor: "#FCA311", color: "white" }}
                                        >
                                            <span>👁️</span>
                                            <span>View Details</span>
                                        </button>

                                        {booking.status === "confirmed" && (
                                            <>
                                                <button
                                                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium border-2 transition-all hover:shadow-md"
                                                    style={{ borderColor: "#14213D", color: "#14213D" }}
                                                >
                                                    <span>✏️</span>
                                                    <span>Modify</span>
                                                </button>
                                                <button className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium border-2 border-red-300 text-red-600 hover:bg-red-50 transition-all">
                                                    <span>❌</span>
                                                    <span>Cancel</span>
                                                </button>
                                            </>
                                        )}

                                        {booking.status === "completed" && (
                                            <button
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium border-2 transition-all hover:shadow-md"
                                                style={{ borderColor: "#14213D", color: "#14213D" }}
                                            >
                                                <span>⭐</span>
                                                <span>Rate & Review</span>
                                            </button>
                                        )}

                                        <button
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium border-2 border-gray-300 text-gray-600 hover:bg-gray-50 transition-all"
                                        >
                                            <span>📞</span>
                                            <span>Contact Venue</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredBookings.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">📅</div>
                        <h3 className="text-xl font-semibold mb-2" style={{ color: "#14213D" }}>
                            No bookings found
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {activeTab === "all"
                                ? "You haven't made any bookings yet. Start exploring venues!"
                                : `No ${activeTab} bookings at the moment.`
                            }
                        </p>
                        <button
                            className="px-6 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
                            style={{ backgroundColor: "#FCA311" }}
                        >
                            <span className="mr-2">🎮</span>
                            Explore Venues
                        </button>
                    </div>
                )}

                {/* Quick Actions */}
                {filteredBookings.length > 0 && (
                    <div className="mt-12 p-6 rounded-2xl border-2 border-dashed border-gray-200 text-center">
                        <h3 className="text-lg font-semibold mb-4" style={{ color: "#14213D" }}>
                            Need help with your bookings?
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all">
                                <span>📞</span>
                                <span>Contact Support</span>
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all">
                                <span>❓</span>
                                <span>FAQ</span>
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all">
                                <span>📄</span>
                                <span>Booking Policy</span>
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}