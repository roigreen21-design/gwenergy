
import React from 'react';
import { Zap } from 'lucide-react';
import { SiteSettings } from '../types';

interface FooterProps {
  settings: SiteSettings;
}

const Footer: React.FC<FooterProps> = ({ settings }) => {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* 기업 정보 (왼쪽 배치) */}
          <div className="flex-grow">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-[#007BFF] rounded-lg flex items-center justify-center text-white">
                <Zap size={22} fill="currentColor" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">{settings.title}</span>
            </div>
            
            <div className="space-y-2 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                상호명 : 관우에너지 주식회사 | 대표이사 : 황순구 | 사업자번호 : 417-81-54080
              </p>
              <p>
                주소 : 세종특별자치시 집현중앙7로 6 대명벨리온 A동 602호
              </p>
              <p>
                대표번호 : 1844-2294 | FAX : 02-2179-9989
              </p>
              <p>
                개인정보보호책임자 : 박민아
              </p>
              <p className="mt-6 font-medium text-gray-500">
                Copyright© Guan Woo Energy Co., Ltd. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* 주요 서비스 (오른쪽 배치) */}
          <div className="min-w-[200px]">
            <h4 className="text-white text-xl font-bold mb-8">주요 서비스</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#/services" className="hover:text-[#007BFF] transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#007BFF] rounded-full" />
                  태양광 컨설팅
                </a>
              </li>
              <li>
                <a href="#/services" className="hover:text-[#007BFF] transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#007BFF] rounded-full" />
                  EPC 설계 및 시공
                </a>
              </li>
              <li>
                <a href="#/services" className="hover:text-[#007BFF] transition-colors flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#007BFF] rounded-full" />
                  발전소 유지보수(O&M)
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex justify-end">
          <div className="flex gap-8 text-xs text-gray-600 font-medium">
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
