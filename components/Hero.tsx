import React from 'react';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
        
        <div className="inline-block px-4 py-1.5 rounded-full glass-panel mb-6 border-blue-500/30">
          <span className="text-blue-300 text-xs md:text-sm font-medium tracking-wide">خلاقیت + تکنولوژی</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          من <span className="gradient-text">متین عزیزی</span> هستم
        </h1>

        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          متخصص هوش مصنوعی، طراح و استراتژیست دیجیتال.
          <br className="hidden md:block" />
          من ایده‌های پیچیده را به واقعیت‌های دیجیتال تبدیل می‌کنم.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-16">
          <a href="#portfolio" className="glass-button px-8 py-4 rounded-full text-white font-bold text-lg w-full md:w-auto hover:bg-white/20 transition-all">
            دیدن نمونه کارها
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white transition-all w-full md:w-auto">
            تماس با من
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mb-12">
          <a href="#" className="p-3 glass-panel rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
            <Github size={24} />
          </a>
          <a href="#" className="p-3 glass-panel rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-blue-400">
            <Linkedin size={24} />
          </a>
          <a href="#" className="p-3 glass-panel rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-pink-500">
            <Instagram size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <a href="#skills" className="text-gray-500 hover:text-white transition-colors">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;