
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '회사소개', path: '/about' },
    { name: '주요사업', path: '/services' },
    { name: '시공사례', path: '/portfolio' },
    { name: '문의하기', path: '/contact' },
  ];

  // 서브페이지이거나 스크롤 시 배경 적용
  const showBackground = !isHomePage || isScrolled;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showBackground ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-5 group">
          <div className="w-12 h-12 bg-[#007BFF] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#007BFF]/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
            < Zap size={28} fill="currentColor" />
          </div>
          <span className="text-3xl font-black tracking-tighter text-white">관우에너지</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xl font-bold transition-all hover:text-[#007BFF] hover:scale-105 ${location.pathname === link.path ? 'text-[#007BFF]' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-10 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="w-24 h-24 bg-[#007BFF] rounded-[30px] flex items-center justify-center text-white mb-6">
          <Zap size={56} fill="currentColor" />
        </div>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className="text-4xl font-black text-white hover:text-[#007BFF]"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
