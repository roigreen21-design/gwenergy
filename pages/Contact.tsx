
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, AlertCircle, ChevronRight } from 'lucide-react';
import { storageService } from '../services/storageService';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // 1. Formspree로 데이터 전송
      const response = await fetch("https://formspree.io/f/mykdzaao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          _subject: `[관우에너지] 새로운 고객 문의: ${form.name}님`
        })
      });

      if (response.ok) {
        // 2. 내부 관리자 대시보드용 로컬 스토리지 저장 (백업)
        storageService.addMessage(form);
        
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        const data = await response.json();
        throw new Error(data.error || "메시지 전송에 실패했습니다.");
      }
    } catch (err: any) {
      console.error("Formspree Error:", err);
      setError("죄송합니다. 서버 통신 중 오류가 발생했습니다. 잠시 후 다시 시도해주시거나 대표 번호로 연락 부탁드립니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Page Header Area */}
      <div className="pt-40 pb-20 bg-zinc-950 border-b border-white/5">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-medium">
            <span>Home</span>
            <ChevronRight size={14} />
            <span className="text-[#007BFF]">문의하기</span>
          </nav>
          <div className="max-w-4xl">
            <h1 className="text-6xl font-black text-white mb-8 tracking-tighter">문의하기 <span className="text-[#007BFF]">.</span></h1>
            <p className="text-xl text-gray-400 mb-0 leading-relaxed break-keep">
              관우에너지는 고객님의 성공적인 에너지 비즈니스를 위해 항상 열려있습니다. 
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed break-keep">
              프로젝트 제안, 시공 문의, 사업성 분석 등 궁금한 점이 있으시다면 언제든 문의 남겨주세요. 전문 상담원이 상세히 안내해 드립니다.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 p-6 glass rounded-2xl border-white/5">
                <div className="w-14 h-14 bg-[#007BFF]/10 rounded-full flex items-center justify-center text-[#007BFF]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">대표 번호</h4>
                  <p className="text-gray-400">1844-2294</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 glass rounded-2xl border-white/5">
                <div className="w-14 h-14 bg-[#007BFF]/10 rounded-full flex items-center justify-center text-[#007BFF]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">이메일</h4>
                  <p className="text-gray-400">gwenergy@naver.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 glass rounded-2xl border-white/5">
                <div className="w-14 h-14 bg-[#007BFF]/10 rounded-full flex items-center justify-center text-[#007BFF]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">본사 위치</h4>
                  <p className="text-gray-400 break-keep">세종특별자치시 집현중앙7로 6 대명벨리온 A동 602호</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-10 md:p-16 rounded-[40px] border-white/10 relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-20 animate-fade-in">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                  <Send className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 break-keep">문의가 성공적으로 전달되었습니다!</h3>
                <p className="text-gray-400 mb-10 leading-relaxed break-keep">전문 상담원이 확인 후 빠른 시일 내에 이메일 혹은 전화로 답변 드리겠습니다.</p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="px-10 py-4 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-all border border-white/10"
                >
                  추가 문의하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl flex items-start gap-3 text-red-500 animate-shake">
                    <AlertCircle size={20} className="shrink-0 mt-0.5" />
                    <p className="text-sm break-keep">{error}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2 font-medium">성함 <span className="text-red-500">*</span></label>
                    <input 
                      type="text" required
                      name="name"
                      value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#007BFF] transition-all"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2 font-medium">연락처 <span className="text-red-500">*</span></label>
                    <input 
                      type="tel" required
                      name="phone"
                      value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#007BFF] transition-all"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-medium">이메일 주소 <span className="text-red-500">*</span></label>
                  <input 
                    type="email" required
                    name="email"
                    value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#007BFF] transition-all"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-medium">문의 및 상담 내용 <span className="text-red-500">*</span></label>
                  <textarea 
                    rows={5} required
                    name="message"
                    value={form.message} onChange={(e) => setForm({...form, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#007BFF] transition-all resize-none"
                    placeholder="태양광 발전 용량, 부지 위치 등 구체적인 내용을 입력해주시면 더 정확한 상담이 가능합니다."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-5 bg-[#007BFF] hover:bg-[#0056b3] text-white font-black text-xl rounded-xl transition-all shadow-xl shadow-[#007BFF]/20 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={24} />
                      문의 전송 중...
                    </>
                  ) : (
                    <>
                      상담 신청하기 <Send size={20} />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-gray-500 break-keep">
                  문의 전송 시 개인정보 수집 및 이용에 동의하는 것으로 간주됩니다.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Map Section - Enhanced Vertical Centering for Text */}
        <div className="mt-32 h-[600px] rounded-[40px] overflow-hidden glass border-white/5 relative group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-40 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-1000" />
          
          {/* Centered Content Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-12 relative z-10 h-full w-full">
            <div className="w-20 h-20 bg-[#007BFF] rounded-full flex items-center justify-center mb-8 animate-bounce shadow-[0_0_50px_rgba(0,123,255,0.7)]">
              <MapPin className="text-white" size={40} />
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 break-keep drop-shadow-2xl">관우에너지 세종 본사</h3>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl leading-relaxed font-light break-keep drop-shadow-lg">
              세종특별자치시 집현중앙7로 6 <br />
              대명벨리온 A동 602호
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
