
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, BarChart3, Globe2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project, Post } from '../types';

interface HomeProps {
  projects: Project[];
  posts: Post[];
}

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1509391366360-fe5bb584850a?q=80&w=2070&auto=format&fit=crop",
    slogan: "Leading the Renewable Future",
    title: "빛에서 미래로, 관우에너지",
    desc: "차세대 태양광 기술과 고도화된 컨설팅을 통해\n지속 가능한 에너지 솔루션을 제공합니다."
  },
  {
    image: "https://images.unsplash.com/photo-1466611653911-95282fc3656d?q=80&w=2070&auto=format&fit=crop",
    slogan: "Precision & Technology",
    title: "기술력이 만드는 압도적 효율",
    desc: "입지 분석부터 정밀 시공까지, 업계 최고의\n엔지니어링으로 발전 수익을 극대화합니다."
  },
  {
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format&fit=crop",
    slogan: "Innovation in Energy",
    title: "지구와 상생하는 스마트 에너지",
    desc: "환경을 생각하는 혁신적인 시공 공법으로\n탄소 중립 시대를 선도하는 파트너가 되겠습니다."
  },
  {
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=2070&auto=format&fit=crop",
    slogan: "Smart Operation & Maintenance",
    title: "끊임없는 관리, 완벽한 운영",
    desc: "24시간 실시간 모니터링과 유지보수 시스템으로\n안정적인 전력 생산을 보장합니다."
  }
];

const Home: React.FC<HomeProps> = ({ projects, posts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      setAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
      setAnimating(false);
    }, 500);
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-black/20 z-5" />
              <img 
                src={slide.image} 
                alt={`Slide ${idx}`} 
                className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${
                  idx === currentSlide ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-5xl">
            <div className={`transition-all duration-700 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#007BFF]/40 bg-[#007BFF]/10 text-[#007BFF] text-sm font-black tracking-widest mb-10 uppercase">
                <span className="w-2 h-2 bg-[#007BFF] rounded-full animate-pulse" />
                {HERO_SLIDES[currentSlide].slogan}
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-white mb-10 leading-[1.1] tracking-tighter break-keep">
                {HERO_SLIDES[currentSlide].title.split(', ').map((text, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {text}
                  </React.Fragment>
                ))}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light whitespace-pre-line break-keep">
                {HERO_SLIDES[currentSlide].desc}
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="px-10 py-5 bg-[#007BFF] text-white font-black text-lg rounded-xl flex items-center gap-3 hover:bg-[#0056b3] transition-all shadow-2xl shadow-[#007BFF]/30 hover:-translate-y-1">
                  무료 컨설팅 신청 <ArrowRight size={22} />
                </Link>
                <Link to="/services" className="px-10 py-5 glass text-white font-black text-lg rounded-xl flex items-center gap-3 hover:bg-white/10 transition-all border-white/20">
                  사업 영역 보기
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-12 right-12 z-30 flex items-center gap-6">
          <div className="flex gap-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentSlide ? 'w-12 bg-[#007BFF]' : 'w-3 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button onClick={handlePrev} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all">
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNext} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "총 시공 용량", value: "350MW+", icon: <Zap /> },
              { label: "프로젝트 수행", value: "1,200+", icon: <BarChart3 /> },
              { label: "연간 탄소 절감", value: "180k Ton", icon: <Globe2 /> },
              { label: "사후 관리 보장", value: "100%", icon: <ShieldCheck /> },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#007BFF] mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5">
                  {stat.icon}
                </div>
                <h4 className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">{stat.label}</h4>
                <p className="text-5xl font-black text-white tracking-tighter">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">시공사례</h2>
              <p className="text-xl text-gray-400 font-light">관우에너지가 증명한 신뢰의 결과물입니다.</p>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center gap-3 text-[#007BFF] font-bold hover:gap-5 transition-all">
              전체 보기 <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="group relative rounded-[40px] overflow-hidden aspect-[4/5] bg-zinc-900 border border-white/5">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <span className="text-[#007BFF] font-black text-sm uppercase tracking-widest mb-4">{project.capacity}</span>
                  <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 container mx-auto px-6">
        <div className="glass rounded-[60px] p-20 text-center relative overflow-hidden border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#007BFF]/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">
              에너지의 새로운 기준, <br /> 관우에너지와 시작하세요.
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
              전문 엔지니어의 맞춤형 컨설팅을 통해 최적의 태양광 발전 솔루션을 제안해 드립니다.
            </p>
            <Link to="/contact" className="inline-flex px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-[#007BFF] hover:text-white transition-all shadow-2xl">
              지금 상담 받기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
