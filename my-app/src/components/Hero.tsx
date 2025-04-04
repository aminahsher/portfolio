import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat px-6 sm:px-12 lg:px-24 py-24 bg-left bg-cover rounded-xl shadow-2xl bg-gradient-to-r from-blue-950/90 via-purple-900/80 to-transparent relative overflow-hidden"
    >
      <Navbar />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-purple-800/30 rounded-full blur-3xl animate-pulse -top-16 -left-16"></div>
        <div className="absolute w-96 h-96 bg-blue-800/30 rounded-full blur-3xl animate-pulse -bottom-16 -right-16"></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 h-[calc(100vh-80px)] relative z-10">
        {/* Image Section */}
        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 animate-tilt"></div>
            <div className="w-80 h-80 relative rounded-full overflow-hidden">
              <Image
                src="/me.png"
                alt="Aminah Ali"
                width={320}
                height={320}
                priority
                className="w-80 h-80 object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-center lg:items-start space-y-6">
          <div className="text-[60px] sm:text-[100px] font-bold leading-tight text-center lg:text-left">
            <div className="transform hover:scale-105 transition-all duration-500">
              <p className="animate-fadeIn bg-gradient-to-r from-purple-300 to-blue-400 bg-clip-text text-transparent hover:from-purple-200 hover:to-blue-300">
                Hello, I&apos;m
              </p>
              <p className="animate-slideIn bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:from-blue-400 hover:to-purple-400">
                Aminah Ali
              </p>
              <div className="text-2xl font-bold mt-6 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
                AI Engineer | Full Stack Developer
              </div>
            </div>
            <div className="text-lg text-gray-300 mt-10 max-w-lg animate-fadeIn opacity-80 leading-relaxed backdrop-blur-sm bg-white/5 p-8 rounded-xl border border-purple-300/20 hover:border-purple-500/50 transition-all duration-300">
              Passionate AI Engineer and Full Stack Developer focused on building intelligent, scalable, and user-friendly applications. I transform complex ideas into seamless digital experiences. Let&apos;s innovate together!
            </div>
            <a href="#projects">
              <button className="mt-10 px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xl rounded-full hover:from-purple-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/40">
                View My Work
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
