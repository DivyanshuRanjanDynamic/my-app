import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Triangle, Heart, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
   
  return (
    <div className="z-20 flex flex-col items-center justify-start min-h-screen py-2 mt-10">
      
      {/* Hero Section with Animation */}
      <div className="flex flex-col justify-center items-center my-5 animate-fade-in">
        <div className="animate-float">
          <Image 
            src={"/hero.svg"} 
            alt="Hero-Section" 
            height={500} 
            width={500}
            className="transition-transform duration-700 hover:scale-110 hover:rotate-3"
          />
        </div>
        
        <h1
  className="z-20 mt-6 text-4xl text-center font-[cursive] italic tracking-tight leading-[1.2] 
  bg-clip-text text-transparent 
  bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 
  dark:from-pink-400 dark:via-rose-400 dark:to-red-400 
  animate-gradient-x animate-slide-up drop-shadow-lg"
>
  Crafting Code with Elegance ✨
  <div className="text-sm text-gray-500 dark:text-gray-400">VibeCode Editor</div>
</h1>

      </div>

      {/* App Icons Bar with Hover Effects */}
      <div className="w-full max-w-4xl px-4 mb-8 animate-fade-in-delay">
        <div className="bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 dark:border-black/30 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
          <div className="flex items-center justify-center gap-8 md:gap-12">
            {/* v0 Icon */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-800 hover:shadow-lg cursor-pointer group-hover:animate-bounce">
                <Triangle className="w-8 h-8 text-white fill-white transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-rose-500 dark:group-hover:text-rose-400">v0</span>
            </div>

            {/* Superwhisper Icon */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-800 hover:shadow-lg cursor-pointer group-hover:animate-bounce">
                <div className="w-8 h-8 border-2 border-gray-300 rounded-sm transform rotate-45 transition-all duration-300 group-hover:border-rose-400 group-hover:scale-110"></div>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-rose-500 dark:group-hover:text-rose-400">Superwhisper</span>
            </div>

            {/* Cursor Icon */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-800 hover:shadow-lg cursor-pointer group-hover:animate-bounce">
                <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 transform rotate-45 transition-all duration-300 group-hover:from-red-400 group-hover:to-gray-900"></div>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-rose-500 dark:group-hover:text-rose-400">Cursor</span>
            </div>

            {/* Bolt Icon */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-800 hover:shadow-lg cursor-pointer group-hover:animate-bounce">
                <Zap className="w-8 h-8 text-white transition-all duration-300 group-hover:text-yellow-400 group-hover:scale-125" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-rose-500 dark:group-hover:text-rose-400">Bolt</span>
            </div>

            {/* Lovable Icon */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-gray-800 hover:shadow-lg cursor-pointer group-hover:animate-bounce">
                <Heart className="w-8 h-8 text-pink-400 fill-pink-400 transition-all duration-300 group-hover:text-red-500 group-hover:fill-red-500 group-hover:scale-125" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-rose-500 dark:group-hover:text-rose-400">Lovable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description with Animation */}
      <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400 px-5 py-10 max-w-2xl animate-fade-in-delay-2 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"> VibeCode Editor is a powerful and intelligent code editor that enhances your coding experience with advanced features and seamless integration. It is designed to help you write, debug, and optimize your code efficiently. </p>



      
      {/* Button with Enhanced Hover Effects */}
      <Link href={"/dashboard"} className="animate-fade-in-delay-3">
        <Button 
          variant={"brand"} 
          className="mb-4 group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl" 
          size={"lg"}
        >
          <span className="relative z-10 transition-all duration-300 group-hover:text-white">
            Get Started
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-2 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </Button>
      </Link>
    </div>
  );
}