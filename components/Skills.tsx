import React from 'react';
import { SKILLS_DATA } from '../constants';
import { Bot, Layout, Palette, TrendingUp } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  'Bot': <Bot size={40} className="text-emerald-400" />,
  'Layout': <Layout size={40} className="text-blue-400" />,
  'Palette': <Palette size={40} className="text-pink-400" />,
  'TrendingUp': <TrendingUp size={40} className="text-orange-400" />,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">تخصص‌ها و مهارت‌ها</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ترکیبی از خلاقیت هنری و قدرت تکنولوژی برای ارائه بهترین نتایج.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILLS_DATA.map((skill) => (
            <div 
              key={skill.id}
              className="glass-panel p-8 rounded-3xl group hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-white/20"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-500">
                {iconMap[skill.iconName]}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                {skill.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6 text-justify">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;