"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      {/* Navbar space */}
      <div className="h-20 bg-white  border-gray-200"></div>

      <main className="container mx-auto px-6 py-16 relative z-10 max-w-6xl">
        {/* Hero Section */}
        <section className={`mb-24 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="mb-8">
            <div className="inline-block bg-gradient-to-r from-blue-900 to-orange-400 text-white px-8 py-3 text-sm font-medium shadow-lg rounded-full transform hover:scale-105 transition-transform duration-300">
              🎯 Premium Activity Planning
            </div>
          </div>

          <h1 className="mb-8 text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-900 via-orange-400 to-blue-900 bg-clip-text text-transparent">
            ARC8
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            Professional Activity Management Platform
          </h2>

          <div className="inline-block border-2 border-orange-400 bg-white p-8 mb-12 shadow-2xl rounded-2xl transform hover:scale-105 transition-all duration-300">
            <p className="text-blue-900 text-lg md:text-xl font-bold">
              🚀 Streamline Your Event Planning Experience
            </p>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              Comprehensive solutions for modern activity coordination
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-900/5 to-orange-400/5 border-2 border-gray-200 p-8 rounded-2xl shadow-xl">
              <blockquote className="text-gray-700 text-base md:text-lg font-medium">
                ✨ Elevating activity planning through innovative technology and seamless user experience.
              </blockquote>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-28 text-center">
          <div className="bg-white border-2 border-orange-400 p-12 rounded-2xl max-w-4xl mx-auto shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
              🎯 Our Mission
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10">
              We provide comprehensive activity planning solutions designed to enhance your experience through cutting-edge technology and professional service excellence.
            </p>
            <div className="flex justify-center space-x-12 mt-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <span className="text-gray-600 font-medium">Plan</span>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <span className="text-gray-600 font-medium">Book</span>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <span className="text-gray-600 font-medium">Enjoy</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="mb-28">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-900 to-orange-400 bg-clip-text mb-6">
              🎮 Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our curated selection of premium entertainment experiences
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 bg-white border-2 border-blue-900 hover:border-orange-400 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl rounded-2xl h-full group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-orange-400 flex items-center justify-center rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🎮</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Gaming Centers
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  State-of-the-art gaming facilities with the latest arcade games and retro classics for an immersive entertainment experience.
                </p>
              </div>

              <div className="p-8 bg-white border-2 border-orange-400 hover:border-blue-900 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl rounded-2xl h-full group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-blue-900 flex items-center justify-center rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🥽</span>
                </div>
                <h3 className="text-xl font-bold text-orange-400 mb-4">
                  Virtual Reality
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Cutting-edge VR experiences that transport you to new worlds with premium equipment and guided sessions.
                </p>
              </div>

              <div className="p-8 bg-white border-2 border-gray-300 hover:border-orange-400 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl rounded-2xl h-full group">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-300 to-orange-400 flex items-center justify-center rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-4">
                  Tactical Games
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional-grade laser tag and tactical gaming experiences with advanced equipment and custom arenas.
                </p>
              </div>

              <div className="p-8 bg-white border-2 border-blue-900 hover:border-orange-400 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl rounded-2xl h-full group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-gray-300 flex items-center justify-center rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🎲</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Strategy Gaming
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Premium board game collections and strategic gaming experiences in comfortable, professionally designed environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-28">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-orange-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <Link
              href="/book"
              className="relative text-xl font-bold px-16 py-5 bg-gradient-to-r from-blue-900 to-orange-400 text-white rounded-2xl hover:from-orange-400 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl block"
            >
              🎪 Schedule Your Experience
            </Link>
          </div>
          <p className="text-gray-600 text-lg mt-8 font-medium">
            Join thousands of satisfied customers who trust ARC8 for their entertainment needs.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-28">
          <div className="bg-gradient-to-r from-blue-900/5 to-orange-400/5 p-12 rounded-2xl border-2 border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  10K+
                </div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-gray-600 font-medium">Gaming Locations</div>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-bold text-gray-700 mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-gray-600 font-medium">Customer Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center border-t-2 border-gray-200 pt-12 pb-16">
          <div className="text-gray-600">
            <p className="text-lg font-medium">© 2025 ARC8 Activity Management Platform</p>
            <p className="mt-3 text-base">Professional entertainment solutions you can trust. 🎯</p>
          </div>
        </footer>
      </main>
    </div>
  );
}