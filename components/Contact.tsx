import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">شروع یک همکاری فوق‌العاده</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  آماده‌اید تا پروژه بعدی خود را به سطح بالاتری ببرید؟ 
                  من برای مشاوره در زمینه هوش مصنوعی، طراحی سایت و مارکتینگ در دسترس هستم.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">ایمیل</p>
                    <p className="text-lg font-medium">mrmatinazizi@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-purple-400">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">تلفن</p>
                    <p className="text-lg font-medium" dir="ltr">0914 166 7797</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-emerald-400">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">موقعیت</p>
                    <p className="text-lg font-medium">ایران، ارومیه</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm text-gray-400 mb-2">نام و نام خانوادگی</label>
                <input 
                  type="text" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="مثال: علی رضایی"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">ایمیل</label>
                <input 
                  type="email" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white"
                  placeholder="ali@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">پیام شما</label>
                <textarea 
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white resize-none"
                  placeholder="در مورد پروژه خود بنویسید..."
                ></textarea>
              </div>
              <button className="w-full glass-button bg-blue-600/20 hover:bg-blue-600/40 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2">
                ارسال پیام <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;