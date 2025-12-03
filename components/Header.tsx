import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'خانه', href: '#hero' },
    { name: 'مهارت‌ها', href: '#skills' },
    { name: 'نمونه کارها', href: '#portfolio' },
    { name: 'تماس با من', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 max-w-7xl mx-auto`}
    >
      <div 
        className={`
          flex items-center justify-between px-6 py-4 rounded-3xl
          transition-all duration-300
          ${isScrolled ? 'glass-panel bg-black/40' : 'bg-transparent border border-transparent'}
        `}
      >
        {/* Logo/Name */}
        <div className="text-xl md:text-2xl font-bold tracking-tighter">
          <span className="text-white">متین</span>
          <span className="text-blue-400 ml-1">.عزیزی</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-reverse space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a 
          href="#contact"
          className="hidden md:block glass-button px-6 py-2 rounded-full text-sm font-semibold text-white hover:bg-white/20"
        >
          همکاری با من
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 p-4 rounded-2xl glass-panel flex flex-col space-y-4 md:hidden animate-fade-in bg-black/90 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-gray-200 hover:text-white text-center py-2 border-b border-white/5 last:border-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;