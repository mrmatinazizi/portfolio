import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-black text-center relative z-10">
      <div className="container mx-auto px-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} تمام حقوق محفوظ است. طراحی و توسعه توسط <span className="text-white">متین عزیزی</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;