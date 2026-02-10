
import React, { useState, useEffect } from 'react';
import { Settings, FileText, Image as ImageIcon, MessageSquare, Save, Trash2, Plus, LayoutDashboard, LogOut } from 'lucide-react';
import { SiteSettings, Post, Project, ContactMessage } from '../types';
import { storageService } from '../services/storageService';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'settings' | 'posts' | 'projects' | 'messages'>('settings');
  const [settings, setSettings] = useState<SiteSettings>(storageService.getSettings());
  const [posts, setPosts] = useState<Post[]>(storageService.getPosts());
  const [projects, setProjects] = useState<Project[]>(storageService.getProjects());
  const [messages, setMessages] = useState<ContactMessage[]>(storageService.getMessages());
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Check local storage for previous session
    if (localStorage.getItem('admin_session') === 'true') {
      setIsAuthorized(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin1234') { // Mock password
      setIsAuthorized(true);
      localStorage.setItem('admin_session', 'true');
    } else {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  const handleLogout = () => {
    setIsAuthorized(false);
    localStorage.removeItem('admin_session');
  };

  const saveAll = () => {
    storageService.saveSettings(settings);
    storageService.savePosts(posts);
    storageService.saveProjects(projects);
    alert('모든 설정이 저장되었습니다.');
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="glass p-12 rounded-3xl w-full max-w-md text-center">
          <h2 className="text-3xl font-black text-white mb-8">관리자 로그인</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              placeholder="관리자 비밀번호"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#007BFF]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full py-4 bg-[#007BFF] text-white font-bold rounded-xl">로그인</button>
          </form>
          <p className="mt-8 text-gray-500 text-xs">초기 비밀번호: admin1234</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex pt-24">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/10 bg-black flex flex-col p-6 hidden md:flex">
        <h2 className="text-xl font-black text-[#007BFF] mb-12 flex items-center gap-2">
          <LayoutDashboard size={20} /> 관리 센터
        </h2>
        <nav className="flex-1 space-y-2">
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'settings' ? 'bg-[#007BFF] text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <Settings size={18} /> 사이트 설정
          </button>
          <button 
            onClick={() => setActiveTab('posts')}
            className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'posts' ? 'bg-[#007BFF] text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <FileText size={18} /> 블로그 관리
          </button>
          <button 
            onClick={() => setActiveTab('projects')}
            className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'projects' ? 'bg-[#007BFF] text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <ImageIcon size={18} /> 시공 사례 관리
          </button>
          <button 
            onClick={() => setActiveTab('messages')}
            className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 transition-colors ${activeTab === 'messages' ? 'bg-[#007BFF] text-white' : 'text-gray-400 hover:bg-white/5'}`}
          >
            <MessageSquare size={18} /> 수신된 문의
          </button>
        </nav>
        <button onClick={handleLogout} className="mt-auto px-4 py-3 text-gray-500 hover:text-white flex items-center gap-2">
          <LogOut size={18} /> 로그아웃
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-10 overflow-y-auto h-[calc(100vh-6rem)]">
        <div className="flex justify-between items-center mb-12">
          <h3 className="text-3xl font-black text-white capitalize">{activeTab}</h3>
          <button onClick={saveAll} className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center gap-2 font-bold">
            <Save size={18} /> 변경사항 저장
          </button>
        </div>

        {activeTab === 'settings' && (
          <div className="space-y-8 max-w-2xl">
            <div className="glass p-8 rounded-2xl space-y-6">
              <h4 className="text-lg font-bold text-white border-b border-white/10 pb-4 mb-4">기본 정보</h4>
              <div>
                <label className="block text-gray-400 text-sm mb-2">사이트 제목</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                  value={settings.title}
                  onChange={(e) => setSettings({...settings, title: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">사이트 설명</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white h-24"
                  value={settings.description}
                  onChange={(e) => setSettings({...settings, description: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">브랜드 컬러</label>
                <div className="flex gap-4 items-center">
                  <input 
                    type="color" 
                    className="w-12 h-12 bg-transparent border-none"
                    value={settings.primaryColor}
                    onChange={(e) => setSettings({...settings, primaryColor: e.target.value})}
                  />
                  <span className="text-gray-400 font-mono uppercase">{settings.primaryColor}</span>
                </div>
              </div>
            </div>
            
            <div className="glass p-8 rounded-2xl space-y-6">
              <h4 className="text-lg font-bold text-white border-b border-white/10 pb-4 mb-4">소셜 미디어 링크</h4>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Instagram</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                  value={settings.socialLinks.instagram}
                  onChange={(e) => setSettings({...settings, socialLinks: {...settings.socialLinks, instagram: e.target.value}})}
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Facebook</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
                  value={settings.socialLinks.facebook}
                  onChange={(e) => setSettings({...settings, socialLinks: {...settings.socialLinks, facebook: e.target.value}})}
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'posts' && (
          <div className="space-y-6">
            <button 
              onClick={() => {
                const newPost: Post = {
                  id: Date.now().toString(),
                  title: '새로운 게시물',
                  excerpt: '요약 내용을 입력하세요.',
                  content: '본문 내용을 입력하세요.',
                  category: '일반',
                  imageUrl: 'https://picsum.photos/800/600',
                  date: new Date().toISOString().split('T')[0]
                };
                setPosts([newPost, ...posts]);
              }}
              className="flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            >
              <Plus size={18} /> 게시물 추가
            </button>
            <div className="grid grid-cols-1 gap-4">
              {posts.map((post) => (
                <div key={post.id} className="glass p-6 rounded-2xl flex gap-6 items-center">
                  <img src={post.imageUrl} className="w-24 h-24 object-cover rounded-lg" />
                  <div className="flex-1">
                    <input 
                      className="w-full bg-transparent text-xl font-bold text-white mb-2"
                      value={post.title}
                      onChange={(e) => {
                        const newPosts = posts.map(p => p.id === post.id ? {...p, title: e.target.value} : p);
                        setPosts(newPosts);
                      }}
                    />
                    <p className="text-gray-500 text-sm">{post.date} | {post.category}</p>
                  </div>
                  <button 
                    onClick={() => setPosts(posts.filter(p => p.id !== post.id))}
                    className="p-3 text-red-500 hover:bg-red-500/10 rounded-full transition-all"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-6">
            <button 
              onClick={() => {
                const newP: Project = {
                  id: Date.now().toString(),
                  title: '새 프로젝트',
                  location: '위치 정보',
                  capacity: '000kW',
                  imageUrl: 'https://picsum.photos/800/600',
                  year: '2024'
                };
                setProjects([newP, ...projects]);
              }}
              className="flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            >
              <Plus size={18} /> 시공 사례 추가
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <div key={p.id} className="glass rounded-2xl overflow-hidden group">
                  <div className="h-40 relative">
                    <img src={p.imageUrl} className="w-full h-full object-cover" />
                    <button 
                      onClick={() => setProjects(projects.filter(proj => proj.id !== p.id))}
                      className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="p-4 space-y-3">
                    <input 
                      className="w-full bg-white/5 border border-white/5 rounded px-2 py-1 text-white text-sm"
                      value={p.title}
                      onChange={(e) => {
                        setProjects(projects.map(proj => proj.id === p.id ? {...proj, title: e.target.value} : proj));
                      }}
                    />
                    <input 
                      className="w-full bg-white/5 border border-white/5 rounded px-2 py-1 text-gray-400 text-xs"
                      value={p.capacity}
                      onChange={(e) => {
                        setProjects(projects.map(proj => proj.id === p.id ? {...proj, capacity: e.target.value} : proj));
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="space-y-4">
            {messages.length === 0 ? (
              <div className="text-center py-20 text-gray-500">수신된 문의가 없습니다.</div>
            ) : (
              messages.map((m) => (
                <div key={m.id} className="glass p-8 rounded-2xl">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-white">{m.name} <span className="text-sm font-normal text-gray-500 ml-2">{m.email}</span></h4>
                      <p className="text-sm text-[#007BFF]">{m.phone}</p>
                    </div>
                    <span className="text-xs text-gray-600">{new Date(m.date).toLocaleString()}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed bg-white/5 p-4 rounded-xl">{m.message}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
