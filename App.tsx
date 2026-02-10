
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import AdminDashboard from './pages/AdminDashboard';
import { storageService } from './services/storageService';
import { Post, Project, SiteSettings } from './types';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [settings] = useState<SiteSettings>(storageService.getSettings());
  const [posts] = useState<Post[]>(storageService.getPosts());
  const [projects] = useState<Project[]>(storageService.getProjects());

  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden bg-black">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home projects={projects} posts={posts} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio projects={projects} />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer settings={settings} />
      </div>
    </Router>
  );
};

export default App;
