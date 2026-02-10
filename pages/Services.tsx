
import React from 'react';
import { LayoutGrid, Factory, TrendingUp, SearchCheck, Zap, ShieldCheck, ArrowRight, CheckCircle2, Wallet, Wrench, Coins, Construction, Phone, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Page Header Area - Improved distinction */}
      <div className="pt-40 pb-24 bg-zinc-950 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(0,123,255,0.05)_0%,_transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
            <span>Home</span>
            <ChevronRight size={14} />
            <span className="text-[#007BFF]">주요사업</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black text-white mb-8 tracking-tighter">
              주요사업 <span className="text-[#007BFF]">.</span>
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed font-light break-keep">
              관우에너지는 최첨단 기술력과 정직한 솔루션을 바탕으로 <br className="hidden md:block" />
              에너지 전환 시대를 선도하는 신재생에너지 전문 파트너입니다.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-32 space-y-40 bg-black">
        {/* 1. 태양광 RPS 사업 */}
        <section id="rps" className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 text-[#007BFF] font-black tracking-widest uppercase mb-6">
              <TrendingUp size={24} />
              <span>Solar RPS Business</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight break-keep">
              태양광 RPS 사업 <br />
              <span className="text-gray-500">지속 가능한 수익의 실현</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10 break-keep">
              <p>
                <strong className="text-white">RPS(Renewable Portfolio Standard)</strong> 제도는 일정 규모 이상의 발전사업자에게 총 발전량의 일정 비율 이상을 신재생에너지로 공급하도록 의무화한 제도입니다.
              </p>
              <p>
                관우에너지는 발전사업자가 생산한 전력을 계통한계가격(SMP)으로 판매하고, 동시에 신재생에너지 공급인증서(REC)를 발급받아 의무 공급자에게 판매함으로써 <span className="text-white font-bold">이중 수익 구조</span>를 창출할 수 있도록 돕습니다.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "20년 장기 고정가격 계약을 통한 수익 안정성 확보",
                  "SMP와 REC 가격 변동 리스크 최소화 전략 제공",
                  "최신 금융 솔루션 연계를 통한 초기 자본 부담 완화"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#007BFF] mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-[#007BFF]/20 blur-2xl rounded-[40px] opacity-50" />
            <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop" alt="RPS Business" className="relative rounded-[40px] w-full h-[500px] object-cover border border-white/10" />
          </div>
        </section>

        {/* 2. 태양광 지붕임대 사업 */}
        <section id="roof-rental" className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#22C55E]/20 blur-2xl rounded-[40px] opacity-50" />
            <img src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=2070&auto=format&fit=crop" alt="Factory Roof Solar" className="relative rounded-[40px] w-full h-[500px] object-cover border border-white/10" />
          </div>
          <div>
            <div className="flex items-center gap-3 text-[#22C55E] font-black tracking-widest uppercase mb-6">
              <Factory size={24} />
              <span>Solar Roof Rental</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight break-keep">
              태양광 지붕임대 사업 <br />
              <span className="text-gray-500">유휴 공간의 가치 창출</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10 break-keep">
              <p>
                사용하지 않는 <strong className="text-white">공장, 창고, 축사 등의 지붕</strong>을 관우에너지에 임대하고, 매월 안정적인 임대료 수익을 얻으실 수 있는 사업 모델입니다.
              </p>
              <p>
                건물주는 투자비 0원으로 수익을 창출할 수 있으며, 관우에너지가 인허가부터 시공, 유지관리까지 모든 과정을 전담하여 책임집니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                {[
                  { 
                    icon: <Coins className="text-[#007BFF]" size={24} />, 
                    title: "안정적 수익", 
                    desc: "20년 장기 고정 임대료 보장" 
                  },
                  { 
                    icon: <Wallet className="text-[#22C55E]" size={24} />, 
                    title: "비용 부담 제로", 
                    desc: "시공 및 유지보수비 전액 부담" 
                  },
                  { 
                    icon: <ShieldCheck className="text-[#007BFF]" size={24} />, 
                    title: "지붕 보호", 
                    desc: "패널 설치로 인한 지붕 단열 효과" 
                  },
                  { 
                    icon: <Construction className="text-[#22C55E]" size={24} />, 
                    title: "구조 보강", 
                    desc: "안전 진단을 통한 노후 지붕 보강" 
                  }
                ].map((item, i) => (
                  <div key={i} className="glass p-6 rounded-2xl border-white/5 flex items-start gap-5 hover:bg-white/5 transition-colors">
                    <div className="mt-1 shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-bold mb-1 text-lg">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. 태양광 컨설팅 & EPC */}
        <section id="consulting" className="relative">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#007BFF]/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 text-[#007BFF] font-black tracking-widest uppercase mb-6">
              <SearchCheck size={24} />
              <span>Engineering, Procurement & Construction</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 break-keep">컨설팅 & EPC 솔루션</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light break-keep">
              관우에너지는 단순한 시공을 넘어, 데이터 기반의 정밀 분석을 통해 <br className="hidden md:block" />
              발전소의 생애 주기 전체를 관리하는 프리미엄 솔루션을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <SearchCheck className="text-[#007BFF]" size={40} />,
                title: "사업성 분석 및 컨설팅",
                list: ["현장 입지 정밀 분석", "인허가 가능 여부 검토", "경제성 분석 및 수익 시뮬레이션"]
              },
              {
                icon: <Zap className="text-[#22C55E]" size={40} />,
                title: "고효율 EPC 시공",
                list: ["최적화된 시스템 설계", "고품질 기자재 수급", "숙련된 전문 엔지니어링 시공"]
              },
              {
                icon: <ShieldCheck className="text-[#007BFF]" size={40} />,
                title: "스마트 유지관리(O&M)",
                list: ["24시간 실시간 모니터링", "정기 정검 및 긴급 출동 서비스", "발전량 분석 및 보고서 제공"]
              }
            ].map((step, idx) => (
              <div key={idx} className="glass p-12 rounded-[40px] border-white/10 hover:border-white/20 transition-all group relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] -mr-16 -mt-16 ${idx % 2 === 0 ? 'bg-[#007BFF]/10' : 'bg-[#22C55E]/10'}`} />
                <div className="mb-8">{step.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-8 break-keep">{step.title}</h3>
                <ul className="space-y-4 break-keep">
                  {step.list.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400">
                      <div className={`w-1.5 h-1.5 rounded-full ${idx % 2 === 0 ? 'bg-[#007BFF]' : 'bg-[#22C55E]'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="glass rounded-[50px] p-12 md:p-20 border-white/10 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/5 to-[#22C55E]/5 opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight break-keep">
              성공적인 태양광 비즈니스, <br className="hidden md:block" />
              관우에너지가 함께합니다.
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              <div className="flex items-center gap-4 text-[#007BFF] bg-black/40 px-10 py-5 rounded-[24px] border border-[#007BFF]/30 backdrop-blur-md shadow-2xl">
                <Phone size={28} className="animate-pulse" />
                <span className="text-3xl md:text-4xl font-black tracking-tighter">1844-2294</span>
              </div>
              
              <a href="#/contact" className="px-10 py-6 bg-[#007BFF] hover:bg-[#0056b3] text-white font-black text-xl rounded-[24px] flex items-center gap-4 transition-all shadow-2xl shadow-[#007BFF]/30 hover:-translate-y-1 break-keep">
                맞춤형 무료 컨설팅 신청 <ArrowRight size={24} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
