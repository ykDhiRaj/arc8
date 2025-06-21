import SignOutButton from "@/components/sign-out-button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { 
  CalendarDays, 
  MapPin, 
  User2, 
  Gamepad2, 
  Trophy, 
  Users,
  Clock,
  Star,
  Settings,
  Crown,
  Zap,
  Target,
  Calendar,
  CreditCard
} from "lucide-react";

export default async function Profile() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Mock data for gaming venue booking platform
  const gamerStats = {
    totalBookings: 28,
    upcomingSessions: 5,
    hoursPlayed: 156,
    favoriteGenres: ["FPS", "MOBA", "Battle Royale"],
    gamerLevel: "Pro",
    memberSince: "Jan 2024",
    totalSpent: 1840,
    winRate: 68,
    tournaments: 12
  };

  const recentBookings = [
    {
      id: 1,
      venueName: "GameZone Arena",
      date: "2024-07-15",
      time: "19:00 - 22:00",
      game: "Valorant",
      players: 5,
      status: "confirmed",
      amount: 75
    },
    {
      id: 2,
      venueName: "Pixel Palace",
      date: "2024-06-28",
      time: "15:00 - 18:00",
      game: "League of Legends",
      players: 5,
      status: "completed",
      amount: 60
    },
    {
      id: 3,  
      venueName: "Cyber Café Pro",
      date: "2024-06-20",
      time: "20:00 - 23:00",
      game: "CS2",
      players: 10,
      status: "completed",
      amount: 90
    }
  ];

  const achievements = [
    { name: "Tournament Winner", icon: "🏆", date: "Jun 2024" },
    { name: "100 Hours Milestone", icon: "⏰", date: "May 2024" },
    { name: "Team Captain", icon: "👑", date: "Apr 2024" },
    { name: "Venue Explorer", icon: "🗺️", date: "Mar 2024" }
  ];

  const favoriteVenues = [
    { name: "GameZone Arena", rating: 4.9, visits: 8, specialty: "FPS Games" },
    { name: "Pixel Palace", rating: 4.7, visits: 6, specialty: "MOBA" },
    { name: "Cyber Café Pro", rating: 4.8, visits: 5, specialty: "Tournaments" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gamer Profile
              </h1>
              <p className="text-gray-600 mt-1">Your gaming journey and venue bookings</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-gray-200">
                <Settings className="w-5 h-5" />
              </button>
              <SignOutButton />
            </div>
          </div>
        </div>

        {session ? (
          <>
            {/* User Info & Gaming Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              
              {/* User Profile Card */}
              <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <div className="text-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 ring-4 ring-blue-200">
                      {session.user.name?.charAt(0)}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      {gamerStats.gamerLevel}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-900 mt-4">{session.user.name}</h2>
                  <p className="text-gray-600 mb-4">{session.user.email}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <CalendarDays className="w-4 h-4" />
                      <span>Gaming since {gamerStats.memberSince}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>Location: Not specified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gaming Stats Grid */}
              <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 text-center">
                  <Gamepad2 className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{gamerStats.totalBookings}</div>
                  <div className="text-xs text-gray-500">Total Sessions</div>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 text-center">
                  <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{gamerStats.hoursPlayed}h</div>
                  <div className="text-xs text-gray-500">Hours Played</div>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 text-center">
                  <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{gamerStats.winRate}%</div>
                  <div className="text-xs text-gray-500">Win Rate</div>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 text-center">
                  <Target className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{gamerStats.tournaments}</div>
                  <div className="text-xs text-gray-500">Tournaments</div>
                </div>
              </div>
            </div>

            {/* Recent Bookings & Achievements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Recent Gaming Sessions */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    Recent Gaming Sessions
                  </h3>
                  <button className="text-blue-500 hover:text-blue-600 text-sm">View All</button>
                </div>
                
                <div className="space-y-3">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium text-gray-900">{booking.venueName}</h4>
                          <p className="text-sm text-gray-600">{booking.game} • {booking.players} players</p>
                        </div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          booking.status === 'confirmed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {booking.status}
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">{booking.date} • {booking.time}</span>
                        <span className="text-blue-600 font-medium">${booking.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    Achievements
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100 text-center">
                      <div className="text-2xl mb-2">{achievement.icon}</div>
                      <h4 className="font-medium text-gray-900 text-sm">{achievement.name}</h4>
                      <p className="text-xs text-gray-500">{achievement.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Favorite Venues & Gaming Preferences */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Favorite Gaming Venues */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  Favorite Gaming Venues
                </h3>
                
                <div className="space-y-4">
                  {favoriteVenues.map((venue, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">{venue.name}</h4>
                          <p className="text-sm text-gray-600">{venue.specialty}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-gray-700">{venue.rating}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-600">{venue.visits}</div>
                          <div className="text-xs text-gray-500">visits</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gaming Preferences */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-500/20 p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-400" />
                  Gaming Preferences
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Favorite Game Genres</label>
                    <div className="flex flex-wrap gap-2">
                      {gamerStats.favoriteGenres.map((genre, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                      <Users className="w-5 h-5 text-blue-400 mb-2" />
                      <div className="text-sm text-gray-400">Preferred Team Size</div>
                      <div className="text-lg font-bold text-white">5 Players</div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                      <CreditCard className="w-5 h-5 text-green-400 mb-2" />
                      <div className="text-sm text-gray-400">Total Spent</div>
                      <div className="text-lg font-bold text-white">${gamerStats.totalSpent}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </>
        ) : (
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-xl border border-red-500/20 p-8 text-center">
            <Gamepad2 className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <div className="text-red-400 text-xl font-semibold">
              Please log in to access your gaming profile
            </div>
            <p className="text-gray-400 mt-2">Sign in to view your gaming sessions, achievements, and venue bookings</p>
          </div>
        )}
      </div>
    </div>
  );
}