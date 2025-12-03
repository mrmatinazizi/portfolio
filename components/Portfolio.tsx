import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { SkillCategory, Project } from '../types';
import { ExternalLink, ZoomIn, X, Calendar, User, Wrench } from 'lucide-react';
import { createPortal } from 'react-dom';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>(SkillCategory.ALL);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === SkillCategory.ALL
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  const filters = [
    { label: 'همه', value: SkillCategory.ALL },
    { label: 'هوش مصنوعی', value: SkillCategory.AI },
    { label: 'طراحی وب', value: SkillCategory.WEB },
    { label: 'گرافیک', value: SkillCategory.GRAPHIC },
    { label: 'مارکتینگ', value: SkillCategory.MARKETING },
  ];

  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section id="portfolio" className="py-24 bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-2">نمونه کارها</h2>
            <p className="text-gray-400">۲۰ پروژه برتر در دسته‌بندی‌های مختلف</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl glass-panel bg-white/5">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveCategory(filter.value)}
                className={`
                  px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  ${activeCategory === filter.value 
                    ? 'bg-white text-black shadow-lg shadow-white/10' 
                    : 'text-gray-400 hover:text-white hover:bg-white/10'}
                `}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer border border-white/5 hover:border-blue-400/30 transition-colors"
            >
              {/* Image */}
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {project.category.replace(/_/g, ' ')}
                </span>
                <h3 className="text-white text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-xs line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  <button className="p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition-colors backdrop-blur-sm">
                    <ZoomIn size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProject && createPortal(
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={handleCloseModal}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-modal-in max-h-[90vh] flex flex-col md:flex-row">
            
            {/* Close Button */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 left-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Image Section (Top on mobile, Left on desktop) */}
            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent md:bg-gradient-to-r md:from-[#111]"></div>
            </div>

            {/* Details Section */}
            <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 text-xs font-bold text-blue-900 bg-blue-200 rounded-full">
                  {selectedProject.category.replace(/_/g, ' ')}
                </span>
                {selectedProject.year && (
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar size={12} /> {selectedProject.year}
                  </span>
                )}
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm text-gray-500 mb-2 uppercase tracking-wider font-semibold">توضیحات پروژه</h4>
                  <p className="text-gray-300 leading-relaxed text-justify">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {selectedProject.client && (
                   <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                     <div className="p-2 bg-blue-500/10 rounded-full text-blue-400">
                        <User size={18} />
                     </div>
                     <div>
                       <span className="text-xs text-gray-500 block">کارفرما</span>
                       <span className="text-sm font-medium text-white">{selectedProject.client}</span>
                     </div>
                   </div>
                )}

                {selectedProject.tools && selectedProject.tools.length > 0 && (
                  <div>
                    <h4 className="text-sm text-gray-500 mb-3 flex items-center gap-2 uppercase tracking-wider font-semibold">
                       <Wrench size={14} /> تکنولوژی‌های استفاده شده
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1.5 text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-300 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="pt-4 border-t border-white/10">
                    <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-white transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2">
                        مشاهده آنلاین پروژه <ExternalLink size={18} />
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Portfolio;