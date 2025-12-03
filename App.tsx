import React from 'react';
import Header from "./components/Header.tsx";
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 selection:text-blue-200">
        
      {/* 3D Background */}
      <Background3D />

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;