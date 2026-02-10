
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface PortfolioProps {
  projects: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', '인천', '경기', '강원', '충청', '경상', '전라'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.location.includes(filter));

  return (
    <div className="min-h-screen bg-black">
      {/* Page Header Area */}
      <div className="pt-40 pb-20 bg-zinc-950 border-b border-white/5">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
            <span>Home</span>
            <ChevronRight size={14} />
            <span className="text-[#007BFF]">시공사례</span>
          </nav>
          <div className="mb-4">
            <h1 className="text-6xl font-black text-white mb-6 tracking-tighter">시공사례 <span className="text-[#007BFF]">.</span></h1>
            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed break-keep">관우에너지의 신뢰와 기술력을 증명하는 수많은 성공 프로젝트들을 확인해보세요.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 bg-black">
        {/* Filters */}
        <div className="flex gap-3 mb-16 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((c) => (
            <button 
              key={c}
              onClick={() => setFilter(c)}
              className={`px-8 py-3 rounded-xl border transition-all text-sm font-bold whitespace-nowrap ${filter === c ? 'bg-[#007BFF] border-[#007BFF] text-white shadow-lg shadow-[#007BFF]/20' : 'border-white/10 text-gray-500 hover:border-white/30'}`}
            >
              {c === 'all' ? '전체보기' : c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((p) => (
            <div key={p.id} className="glass rounded-[32px] overflow-hidden group border-white/5 hover:border-[#007BFF]/30 transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={p.imageUrl} 
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-6">
                   <span className="px-3 py-1 bg-[#007BFF] text-white text-[10px] font-black rounded-md uppercase tracking-tighter">
                    {p.capacity}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#007BFF] transition-colors break-keep">{p.title}</h3>
                <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-gray-700 rounded-full" />
                    {p.location}
                  </span>
                  <span>{p.year} 완공</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-40">
            <p className="text-gray-500 text-xl">해당 지역의 시공 사례가 아직 등록되지 않았습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
