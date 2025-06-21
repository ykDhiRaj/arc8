"use client";
import { useSession } from "@/lib/auth-client";
import {
    Activity,
    AlertCircle,
    ArrowDownRight,
    ArrowUpRight,
    Award,
    BarChart3,
    Bell,
    Calendar,
    CheckCircle,
    Clock,
    DollarSign,
    Eye,
    FileText,
    Headphones,
    MapPin,
    Plus,
    Settings,
    Shield,
    Star,
    TrendingDown,
    TrendingUp,
    Users,
    Zap
} from "lucide-react";
import { useState } from "react";

export default function AdminDashboard() {
    const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");
    const [activeTab, setActiveTab] = useState("overview");

    const { data: session } = useSession();
    if (!session || session.user.role !== "ADMIN") {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
                    <p className="text-gray-600">You must be unauthorized to view this page.</p>
                </div>
            </div>
        );
    }
    const stats = [
        {
            title: "Total Users",
            value: "1,245",
            change: "+12%",
            trend: "up",
            icon: Users,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
            description: "active users",
            subValue: "+23 today"
        },
        {
            title: "Total Venues",
            value: "48",
            change: "+3",
            trend: "up",
            icon: MapPin,
            color: "text-slate-600",
            bgColor: "bg-slate-50",
            description: "active venues",
            subValue: "5 pending approval"
        },
        {
            title: "Total Revenue",
            value: "₹4,50,000",
            change: "+18%",
            trend: "up",
            icon: DollarSign,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
            description: "this month",
            subValue: "₹15,000 today"
        },
        {
            title: "Support Tickets",
            value: "5",
            change: "-2",
            trend: "down",
            icon: Headphones,
            color: "text-slate-600",
            bgColor: "bg-slate-50",
            description: "open tickets",
            subValue: "2 high priority"
        }
    ];


    const recentActivities = [
        {
            type: "venue_registration",
            title: "New Venue Registration",
            description: "GameZone Arcade registered in Downtown area",
            time: "2 hours ago",
            icon: MapPin,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
            priority: "high"
        },
        {
            type: "booking",
            title: "High Value Booking",
            description: "₹15,000 booking for corporate event at VR Universe",
            time: "4 hours ago",
            icon: Calendar,
            color: "text-slate-600",
            bgColor: "bg-slate-50",
            priority: "medium"
        },
        {
            type: "user_registration",
            title: "User Registration Surge",
            description: "25 new users registered in the last hour",
            time: "6 hours ago",
            icon: Users,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
            priority: "medium"
        },
        {
            type: "support",
            title: "Support Ticket Resolved",
            description: "Payment issue resolved for Pixel Palace",
            time: "8 hours ago",
            icon: CheckCircle,
            color: "text-slate-600",
            bgColor: "bg-slate-50",
            priority: "low"
        },
        {
            type: "alert",
            title: "System Performance Alert",
            description: "Server response time increased by 15%",
            time: "10 hours ago",
            icon: AlertCircle,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
            priority: "high"
        }
    ];

    const quickActions = [
        {
            title: "Manage Venues",
            description: "View, edit, and approve venues",
            icon: MapPin,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
            href: "/admin/venues",
            count: "48 active"
        },
        {
            title: "Manage Users",
            description: "User accounts and permissions",
            icon: Users,
            color: "text-slate-600",
            bgColor: "bg-slate-50",
            href: "/admin/users",
            count: "1,245 users"
        },
        {
            title: "View Bookings",
            description: "All booking records and analytics",
            icon: Calendar,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
            href: "/admin/bookings",
            count: "156 this week"
        },
        {
            title: "Analytics Dashboard",
            description: "Revenue and usage analytics",
            icon: BarChart3,
            color: "text-slate-600",
            bgColor: "bg-slate-50",
            href: "/admin/analytics",
            count: "Live data"
        },
        {
            title: "Financial Reports",
            description: "Generate detailed reports",
            icon: FileText,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
            href: "/admin/reports",
            count: "Monthly ready"
        },
        {
            title: "System Settings",
            description: "Platform configuration",
            icon: Settings,
            color: "text-slate-600",
            bgColor: "bg-slate-50",
            href: "/admin/settings",
            count: "5 updates"
        }
    ];

    const topVenues = [
        { name: "VR Universe", revenue: "₹85,000", bookings: 45, rating: 4.9, growth: "+12%" },
        { name: "Pixel Palace", revenue: "₹72,000", bookings: 38, rating: 4.8, growth: "+8%" },
        { name: "Board Game Café", revenue: "₹56,000", bookings: 52, rating: 4.6, growth: "+15%" },
        { name: "Escape Reality", revenue: "₹48,000", bookings: 29, rating: 4.8, growth: "+5%" }
    ];

    const performanceMetrics = [
        { label: "Avg. Session Time", value: "2.5 hrs", change: "+0.3", trend: "up" },
        { label: "Customer Satisfaction", value: "4.7", change: "+0.1", trend: "up" },
        { label: "Booking Conversion", value: "68%", change: "+5%", trend: "up" },
        { label: "System Uptime", value: "99.8%", change: "-0.1%", trend: "down" }
    ];


    return (
        <div className="min-h-screen">
            <header>
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between mt-16">
                        <div>
                            <h1 className="text-3xl font-bold mb-2 ">🎮 Admin Command Center</h1>
                            <p>Real-time platform management and insights</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex rounded-lg p-1 border-2">
                                {["overview", "analytics", "management"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all capitalize ${activeTab === tab
                                            ? "bg-orange-500 text-white shadow-md"
                                            : " hover:text-white hover:bg-slate-700"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            <select
                                value={selectedTimeRange}
                                onChange={(e) => setSelectedTimeRange(e.target.value)}
                                className="px-4 py-2  border border-slate-700 rounded-lg  text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                <option>This Week</option>
                                <option>This Month</option>
                                <option>This Quarter</option>
                            </select>
                            <button className="p-3 text-slate-300 hover:text-white relative bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1 right-1 w-3 h-3 bg-orange-500 rounded-full flex items-center justify-center">
                                    <span className="text-xs text-white font-bold">3</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                {/* Enhanced Overview Stats */}
                <section className="mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`p-4 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform`}>
                                            <IconComponent className={`w-7 h-7 ${stat.color}`} />
                                        </div>
                                        <div className={`flex items-center text-sm font-bold px-3 py-1 rounded-full ${stat.trend === "up"
                                            ? "text-orange-700 bg-orange-100"
                                            : "text-slate-700 bg-slate-100"
                                            }`}>
                                            {stat.trend === "up" ? (
                                                <ArrowUpRight className="w-4 h-4 mr-1" />
                                            ) : (
                                                <ArrowDownRight className="w-4 h-4 mr-1" />
                                            )}
                                            {stat.change}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</h3>
                                        <p className="text-slate-600 font-medium mb-1">{stat.title}</p>
                                        <p className="text-slate-500 text-sm">{stat.subValue}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Performance Metrics Bar */}
                <section className="mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">⚡ Performance Metrics</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {performanceMetrics.map((metric, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</div>
                                    <div className="text-sm text-slate-600 mb-2">{metric.label}</div>
                                    <div className={`text-xs font-medium flex items-center justify-center ${metric.trend === "up" ? "text-orange-600" : "text-slate-600"
                                        }`}>
                                        {metric.trend === "up" ? (
                                            <TrendingUp className="w-3 h-3 mr-1" />
                                        ) : (
                                            <TrendingDown className="w-3 h-3 mr-1" />
                                        )}
                                        {metric.change}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* Enhanced Recent Activity */}
                    <section className="xl:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 h-fit">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-slate-900 flex items-center">
                                        <Activity className="w-5 h-5 mr-2 text-orange-500" />
                                        Live Activity Feed
                                    </h2>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
                                            <span className="text-sm text-slate-600">Live</span>
                                        </div>
                                        <button className="text-orange-600 hover:text-orange-800 text-sm font-medium flex items-center">
                                            <Eye className="w-4 h-4 mr-1" />
                                            View All
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    {recentActivities.map((activity, index) => {
                                        const IconComponent = activity.icon;
                                        return (
                                            <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border-l-4 border-l-transparent hover:border-l-orange-500 group">
                                                <div className={`p-3 rounded-xl ${activity.bgColor} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                                    <IconComponent className={`w-5 h-5 ${activity.color}`} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="font-semibold text-slate-900">{activity.title}</h3>
                                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${activity.priority === "high"
                                                            ? "bg-orange-100 text-orange-700"
                                                            : activity.priority === "medium"
                                                                ? "bg-slate-100 text-slate-700"
                                                                : "bg-gray-100 text-gray-600"
                                                            }`}>
                                                            {activity.priority}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-slate-600 mb-2">{activity.description}</p>
                                                    <div className="flex items-center text-xs text-slate-500">
                                                        <Clock className="w-3 h-3 mr-1" />
                                                        {activity.time}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Right Sidebar */}
                    <section className="space-y-6">
                        {/* Top Performing Venues */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-xl font-bold text-slate-900 flex items-center">
                                    <Award className="w-5 h-5 mr-2 text-orange-500" />
                                    Top Venues
                                </h2>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    {topVenues.map((venue, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                                                    <span className="text-orange-600 font-bold">#{index + 1}</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 text-sm">{venue.name}</h4>
                                                    <div className="flex items-center text-xs text-slate-500">
                                                        <Star className="w-3 h-3 text-orange-400 fill-current mr-1" />
                                                        {venue.rating} • {venue.bookings} bookings
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold text-slate-900 text-sm">{venue.revenue}</div>
                                                <div className="text-xs text-orange-600 font-medium">{venue.growth}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* System Status */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
                            <div className="p-6 border-b border-gray-200">
                                <h2 className="text-xl font-bold text-slate-900 flex items-center">
                                    <Shield className="w-5 h-5 mr-2 text-orange-500" />
                                    System Status
                                </h2>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-slate-600">API Status</span>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                                            <span className="text-sm font-medium text-slate-900">Operational</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-slate-600">Database</span>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                                            <span className="text-sm font-medium text-slate-900">Healthy</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-slate-600">Payment Gateway</span>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                                            <span className="text-sm font-medium text-slate-900">Active</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-slate-600">Backup Status</span>
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-slate-400 rounded-full mr-2"></div>
                                            <span className="text-sm font-medium text-slate-600">Scheduled</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Enhanced Management Actions */}
                <section className="mt-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                            <Zap className="w-6 h-6 mr-2 text-orange-500" />
                            Quick Management
                        </h2>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                            <Plus className="w-4 h-4 mr-2" />
                            Add New
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {quickActions.map((action, index) => {
                            const IconComponent = action.icon;
                            return (
                                <a
                                    key={index}
                                    href={action.href}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:border-orange-200 transition-all duration-300 group hover:scale-105"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`p-4 rounded-xl ${action.bgColor} group-hover:scale-110 transition-transform`}>
                                            <IconComponent className={`w-6 h-6 ${action.color}`} />
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2 text-lg">{action.title}</h3>
                                    <p className="text-sm text-slate-600 mb-3">{action.description}</p>
                                    <div className="text-xs text-slate-500 font-medium">{action.count}</div>
                                </a>
                            );
                        })}
                    </div>
                </section>
            </main>
        </div>
    );
}