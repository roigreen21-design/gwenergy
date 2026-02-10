
import React from 'react';
import { Target, Award, Handshake, Leaf, Zap, Globe, ShieldCheck, Cpu, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section - Restored to original grand design */}
      <section className="pt-52 pb-32 bg-zinc-950 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22C55E]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#007BFF]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 text-[#22C55E] text-sm font-black tracking-widest mb-10 uppercase animate-fade-in">
              <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
              Sustainable Future Leader
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[1.1] tracking-tighter">
              모두에게 더 나은 <br />
              미래를 만들어가는 <br />
              <span className="bg-gradient-to-r from-[#007BFF] to-[#22C55E] bg-clip-text text-transparent">신재생에너지 선도기업</span>
            </h1>
            <p className="text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
              기후 위기 대응과 탄소중립 실현은 이제 선택이 아닌 의무입니다. <br />
              관우에너지는 미래 세대를 위한 책임감을 바탕으로 저탄소 녹색에너지로의 전환을 선도합니다.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-black py-40">
        {/* Message Section */}
        <section className="container mx-auto px-6 mb-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#22C55E]/20 to-[#007BFF]/20 blur-2xl rounded-[40px] opacity-70 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=2070&auto=format&fit=crop" 
                alt="Sustainable Green Energy Infrastructure" 
                className="relative rounded-[40px] w-full h-[650px] object-cover border border-white/10 shadow-2xl"
              />
            </div>
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                주식회사 관우에너지는 <br />
                <span className="text-[#22C55E]">지속 가능한 에너지 생태계</span>를 <br />
                조성하고 있습니다.
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  전 세계는 지금 기후 변화 위기 속에서 지속 가능한 미래를 위한 중요한 전환점을 맞이하고 있습니다. 저탄소 녹색에너지로의 전환은 인류 공통의 과제이며 미래 세대를 위한 우리의 책임입니다.
                </p>
                <p>
                  관우에너지는 태양광 발전을 넘어 <span className="text-white font-bold">수소에너지, 풍력, 수력발전</span> 등 다각화된 신재생에너지 솔루션을 통해 탄소중립화 실현을 목표로 합니다. 단순한 에너지 공급을 넘어, 미래 에너지 산업을 선도하는 글로벌 리더로 도약하고자 합니다.
                </p>
                <p>
                  우리는 혁신적인 기술 개발과 차별화된 컨설팅을 제공하며, 신뢰를 바탕으로 고객과 함께 성장해 나가겠습니다. 깨끗한 지구와 지속 가능한 경제 성장을 동시에 이루는 그날까지 관우에너지의 도전은 계속될 것입니다.
                </p>
              </div>
              <div className="pt-8 border-t border-white/10 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#007BFF]/10 border border-[#007BFF]/30 flex items-center justify-center text-[#007BFF] shrink-0">
                  <Globe size={32} />
                </div>
                <div>
                  <p className="text-white font-bold text-xl italic">“미래의 세계 모두가 아름다운 환경을 누리는 그날까지”</p>
                  <p className="text-gray-500 mt-1">주식회사 관우에너지 임직원 일동</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision 2030 Section */}
        <section className="bg-zinc-950 py-40 mb-40 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="container mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-[#22C55E] font-black text-xl tracking-[0.2em] mb-4 uppercase">Vision 2030</h2>
              <h3 className="text-5xl md:text-7xl font-black text-white mb-8">지속 가능한 내일의 기준</h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                관우에너지는 저탄소 녹색에너지를 기반으로 신재생 에너지 산업을 선도하며, <br />
                <span className="text-white font-bold border-b-2 border-[#22C55E]">RE100 실현</span>을 목표로 통합적 친환경 에너지 솔루션을 구축합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Target className="text-[#007BFF]" size={56} />,
                  title: "탄소중립 최적 솔루션",
                  desc: "기후 변화 대응을 위한 탄소중립 실현의 가장 효율적이고 최적화된 에너지 솔루션을 제공합니다."
                },
                {
                  icon: <Handshake className="text-[#007BFF]" size={56} />,
                  title: "상생과 지속가능한 성장",
                  desc: "지역사회와 기업이 함께 발전하며 미래 가치를 공유하는 지속 가능한 성장 모델을 구축합니다."
                },
                {
                  icon: <Globe className="text-[#007BFF]" size={56} />,
                  title: "글로벌 친환경 기업",
                  desc: "국내를 넘어 전 세계 신재생 에너지 시장을 선도하는 글로벌 친환경 전문 리더로 도약합니다."
                },
                {
                  icon: <ShieldCheck className="text-[#007BFF]" size={56} />,
                  title: "사회적 책임 실천",
                  desc: "지속 가능한 에너지 생태계 구축을 통해 기업의 사회적 책임을 다하고 인류 복지에 기여합니다."
                }
              ].map((item, idx) => (
                <div key={idx} className="glass p-12 rounded-[40px] border-white/10 hover:border-[#007BFF]/30 transition-all group overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 blur-[80px] -mr-16 -mt-16 bg-[#007BFF]/10" />
                  <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-6">{item.title}</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-24 gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">핵심 가치</h2>
              <p className="text-2xl font-bold text-[#007BFF] uppercase tracking-wider">CORE VALUES</p>
            </div>
            <div className="w-full lg:w-1/2 h-0.5 bg-gradient-to-r from-[#007BFF] via-[#22C55E] to-transparent hidden lg:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="text-[#007BFF]" size={64} />,
                label: "지속가능성",
                eng: "Sustainability",
                desc: "저탄소 녹색에너지 실현을 위한 혁신적인 신재생 에너지 솔루션을 제공합니다."
              },
              {
                icon: <Cpu className="text-[#007BFF]" size={64} />,
                label: "혁신",
                eng: "Innovation",
                desc: "친환경 에너지 기술 개발과 차별화된 프리미엄 컨설팅 서비스를 선도합니다."
              },
              {
                icon: <Award className="text-[#007BFF]" size={64} />,
                label: "신뢰",
                eng: "Trust",
                desc: "투명한 경영과 최상의 품질을 통해 책임 있는 기업 활동을 실천합니다."
              },
              {
                icon: <TrendingUp className="text-[#007BFF]" size={64} />,
                label: "미래지향",
                eng: "Future Oriented",
                desc: "지속 가능한 에너지 생태계 조성을 위한 글로벌 리더로 앞장서 나갑니다."
              }
            ].map((value, idx) => (
              <div key={idx} className="text-center p-12 glass rounded-[50px] border-white/5 transition-all duration-500 hover:border-[#007BFF]/50">
                <div className="mx-auto w-32 h-32 bg-white/5 rounded-full flex items-center justify-center mb-8 group">
                  {value.icon}
                </div>
                <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-2">{value.eng}</p>
                <h4 className="text-3xl font-black text-white mb-6 tracking-tight">{value.label}</h4>
                <p className="text-gray-400 leading-relaxed font-light">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
