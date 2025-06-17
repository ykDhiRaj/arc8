"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">

      <main className="container mx-auto px-6 py-20 relative z-10 max-w-6xl">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 text-sm font-medium border border-blue-500/30 shadow-lg rounded-full">
              Premium Activity Planning
            </div>
          </div>

          <h1 className="mb-8 text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            ARC8
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-300 mb-6 font-medium">
            Professional Activity Management Platform
          </h2>

          <div className="inline-block border border-slate-700 bg-slate-800/50 p-8 mb-10 shadow-xl rounded-xl backdrop-blur-sm">
            <p className="text-slate-200 text-lg md:text-xl font-medium">
              Streamline Your Event Planning Experience
            </p>
            <p className="text-slate-400 text-sm md:text-base mt-2">
              Comprehensive solutions for modern activity coordination
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-800/60 border border-slate-700 p-8 rounded-xl shadow-xl backdrop-blur-sm">
              <blockquote className="text-slate-300 text-base md:text-lg italic">
                &quot;Elevating activity planning through innovative technology and seamless user experience.&quot;
              </blockquote>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-24 text-center">
          <div className="bg-slate-800/60 border border-slate-700 p-10 rounded-xl max-w-4xl mx-auto shadow-xl backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-200 mb-6">
              Our Mission
            </h2>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
              We provide comprehensive activity planning solutions designed to enhance your experience through cutting-edge technology and professional service excellence.
            </p>
            <div className="flex justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">1</span>
                </div>
                <span className="text-slate-400 text-sm">Plan</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">2</span>
                </div>
                <span className="text-slate-400 text-sm">Book</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">3</span>
                </div>
                <span className="text-slate-400 text-sm">Enjoy</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text mb-4">
              Our Services
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Choose from our curated selection of premium entertainment experiences
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl backdrop-blur-sm rounded-xl h-full">
                <div className="w-12 h-12 bg-blue-600 border border-blue-500 flex items-center justify-center rounded-lg shadow-md mb-4">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-3">
                  Gaming Centers
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  State-of-the-art gaming facilities with the latest arcade games and retro classics for an immersive entertainment experience.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl backdrop-blur-sm rounded-xl h-full">
                <h3 className="text-lg font-semibold text-slate-200 mb-3">
                  Virtual Reality
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Cutting-edge VR experiences that transport you to new worlds with premium equipment and guided sessions.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl backdrop-blur-sm rounded-xl h-full">
                <h3 className="text-lg font-semibold text-slate-200 mb-3">
                  Tactical Games
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Professional-grade laser tag and tactical gaming experiences with advanced equipment and custom arenas.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl backdrop-blur-sm rounded-xl h-full">
                <h3 className="text-lg font-semibold text-slate-200 mb-3">
                  Strategy Gaming
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Premium board game collections and strategic gaming experiences in comfortable, professionally designed environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-24">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-md opacity-30"></div>
            <Link
              href="/book"
              className="relative text-lg font-semibold px-12 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border border-blue-500/30 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl block"
            >
              Schedule Your Experience
            </Link>
          </div>
          <p className="text-slate-400 text-base mt-6">
            Join thousands of satisfied customers who trust ARC8 for their entertainment needs.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center border-t border-slate-700 pt-10 pb-16">
          <div className="text-slate-400 text-sm">
            <p>© 2025 ARC8 Activity Management Platform</p>
            <p className="mt-2">Professional entertainment solutions you can trust.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}