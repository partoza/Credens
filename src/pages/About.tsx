import { useEffect, useState } from 'react';
import { FileText, Cloud, MessageCircle, Briefcase, Code, Link2 } from 'lucide-react';
import { MacbookScroll } from '../components/ui/macbook-scroll';

/* -------------------------------------------------------------------------- */
/* UTILITY COMPONENTS                                                         */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/* SECTIONS                                                                   */
/* -------------------------------------------------------------------------- */

// SECTION 1 — HERO (MACBOOK SCROLL)
const HeroSection = () => (
  <section className="relative flex flex-col items-center text-center overflow-hidden w-full">
    {/* Subtle radial gradient to focus the center */}
    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]"></div>
    
    <div className="relative z-10 w-full hidden md:block">
      <MacbookScroll 
        src="/app-preview.png"
        title={
          <span className="text-5xl md:text-7xl font-medium tracking-tighter text-gray-900 dark:text-white drop-shadow-sm">
            Credens is all about...
          </span>
        }
      />
    </div>

    {/* Mobile fallback for the 'Credens is all about' text */}
    <div className="relative z-10 w-full md:hidden flex flex-col items-center justify-center pt-24 pb-12 px-6">
       <span className="text-5xl font-medium tracking-tighter text-gray-900 dark:text-white drop-shadow-sm text-center">
         Credens is all about...
       </span>
    </div>
  </section>
);

// SECTION 1.5 — IDENTITY TEXT
const IdentitySection = () => (
  <section className="relative flex flex-col items-center text-center px-6 py-16 md:py-24">
    <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-6 leading-[1.05] max-w-5xl text-gray-900 dark:text-white drop-shadow-sm">
      Your professional identity,<br className="hidden md:block" /> in one place.
    </h2>
    <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed mt-4 font-light">
      Credens is a professional identity platform that brings your projects, credentials, experience, and recommendations together into a single, cohesive profile you can manage and share everywhere.
    </p>
  </section>
);

// SECTION 2 — EFFICIENCY (BEAMS)
const EfficiencySection = () => (
  <section className="py-16 md:py-24 px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
      
      {/* Left Side: Text */}
      <div className="w-full lg:w-5/12 flex flex-col items-start text-left z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-gray-900 dark:text-white leading-[1.1]">
          Organize less.
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-8">
          One platform for all your scattered data. Bring your documents, cloud files, code, and chat history together into a single, cohesive professional identity.
        </p>
      </div>

      {/* Right Side: Curved Animated Beams */}
      <div className="w-full lg:w-7/12 relative aspect-[4/3] max-w-[600px] flex items-center justify-center scale-90 sm:scale-100 lg:scale-105 xl:scale-110 lg:mr-12">
        <style>{`
          @keyframes beam-flow {
            0% { stroke-dashoffset: 500; }
            100% { stroke-dashoffset: 0; }
          }
          .animate-beam {
            animation: beam-flow 4s linear infinite;
          }
          .animate-beam-delayed {
            animation: beam-flow 4s linear infinite;
            animation-delay: 2s;
          }
          
          /* Interactive node movement */
          @keyframes breathe {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.15); }
          }
          .animate-breathe-1 { animation: breathe 3.5s ease-in-out infinite; }
          .animate-breathe-2 { animation: breathe 4s ease-in-out infinite 1s; }
          .animate-breathe-3 { animation: breathe 4.5s ease-in-out infinite 2s; }
        `}</style>
        
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 450" preserveAspectRatio="none">
          {/* Base Paths (Faded) */}
          <g className="text-gray-200 dark:text-gray-800/80" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M 90 90 C 200 90, 200 225, 300 225" />
            <path d="M 90 225 C 200 225, 200 225, 300 225" />
            <path d="M 90 360 C 200 360, 200 225, 300 225" />
            <path d="M 510 90 C 400 90, 400 225, 300 225" />
            <path d="M 510 225 C 400 225, 400 225, 300 225" />
            <path d="M 510 360 C 400 360, 400 225, 300 225" />
          </g>

          {/* Animated Beams (Seamlessly loops with 500 dash-offset) */}
          <g className="text-gray-900 dark:text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="30 470">
            <path d="M 90 90 C 200 90, 200 225, 300 225" className="animate-beam" />
            <path d="M 90 225 C 200 225, 200 225, 300 225" className="animate-beam-delayed" />
            <path d="M 90 360 C 200 360, 200 225, 300 225" className="animate-beam" />
            <path d="M 510 90 C 400 90, 400 225, 300 225" className="animate-beam-delayed" />
            <path d="M 510 225 C 400 225, 400 225, 300 225" className="animate-beam" />
            <path d="M 510 360 C 400 360, 400 225, 300 225" className="animate-beam-delayed" />
          </g>
        </svg>

        {/* Center Credens Node (Smaller circle, larger logo) */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 bg-white dark:bg-[#050505] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-gray-200 dark:border-gray-800">
          <img src="/logo/logo-black.png" alt="Credens" className="h-10 w-auto max-w-[65%] object-contain block dark:hidden" />
          <img src="/logo/logo.png" alt="Credens" className="h-10 w-auto max-w-[65%] object-contain hidden dark:block" />
        </div>

        {/* Outer Nodes - Left Side */}
        <div className="absolute top-[20%] left-[15%] animate-breathe-1 w-12 h-12 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center shadow-sm z-10">
          <FileText className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <div className="absolute top-[50%] left-[15%] animate-breathe-2 w-12 h-12 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center shadow-sm z-10">
          <Cloud className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <div className="absolute top-[80%] left-[15%] animate-breathe-3 w-12 h-12 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center shadow-sm z-10">
          <MessageCircle className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>

        {/* Outer Nodes - Right Side */}
        <div className="absolute top-[20%] left-[85%] animate-breathe-2 w-12 h-12 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center shadow-sm z-10">
          <Briefcase className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <div className="absolute top-[50%] left-[85%] animate-breathe-3 w-12 h-12 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center shadow-sm z-10">
          <Code className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <div className="absolute top-[80%] left-[85%] animate-breathe-1 w-12 h-12 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center shadow-sm z-10">
          <Link2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
      </div>
    </div>
  </section>
);

// SECTION 2.5 — SOLUTIONS (STACKED CARDS)
const SolutionsSection = () => {
  const [active, setActive] = useState(0);
  
  const solutions = [
    {
      id: 'nfc',
      title: 'Replace the business card.',
      desc: 'Tap your NFC-enabled physical Credens card on any smartphone to instantly share your entire professional identity. No apps required.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800'
    },
    {
      id: 'portfolio',
      title: 'A living portfolio.',
      desc: 'Stop scattering your work across Drive, GitHub, and Figma. Bring it all into one cohesive, interactive showcase that highlights your best achievements.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800'
    },
    {
      id: 'trust',
      title: 'Trust by default.',
      desc: 'Attach cryptographic verification to your certificates and recommendations, so employers and clients know your skills are absolutely legitimate.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800'
    },
    {
      id: 'sync',
      title: 'Always synchronized.',
      desc: 'Update your profile once, and your unique Credens link instantly reflects the latest version of your professional life across the web.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800'
    }
  ];

  const rotations = [-4, 3, -2, 5];

  const handleNext = () => setActive((p) => (p + 1) % solutions.length);
  const handlePrev = () => setActive((p) => (p - 1 + solutions.length) % solutions.length);

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto mb-16 md:mb-24 text-center md:text-right flex flex-col md:items-end">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 dark:text-white leading-[1.1] max-w-3xl">
          How Credens solves your problems.
        </h2>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left Stack */}
        <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] md:h-[450px]">
          {solutions.map((sol, index) => {
            const isActive = index === active;
            const diff = (index - active + solutions.length) % solutions.length;
            
            const zIndex = 50 - diff;
            const scale = isActive ? 1 : 1 - (diff * 0.05);
            const yOffset = isActive ? 0 : diff * 15;
            const rotation = isActive ? 0 : rotations[index % rotations.length];
            const opacity = isActive ? 1 : (diff < 3 ? 1 : 0);

            return (
              <div 
                key={sol.id}
                className="absolute inset-0 top-8 bottom-8 left-8 right-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-white/50 dark:border-gray-800 origin-bottom"
                style={{ 
                  zIndex, 
                  transform: `translateY(${yOffset}px) scale(${scale}) rotate(${rotation}deg)`,
                  opacity
                }}
              >
                <img src={sol.image} alt={sol.title} className="w-full h-full object-cover" />
                {/* Subtle overlay for inactive cards */}
                <div className={`absolute inset-0 bg-black/20 dark:bg-black/50 transition-opacity duration-700 ${isActive ? 'opacity-0' : 'opacity-100'}`} />
              </div>
            );
          })}
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center min-h-[250px]">
          <div className="relative h-[180px] sm:h-[150px]">
            {solutions.map((sol, index) => (
              <div 
                key={sol.id} 
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${index === active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
              >
                <h3 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-white mb-4">{sol.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-lg font-light leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4 mt-6 md:mt-8">
            <button 
              onClick={handlePrev} 
              className="group w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-black flex items-center justify-center hover:opacity-90 hover:scale-[0.98] active:scale-95 cursor-pointer transition-all duration-300 text-gray-900 dark:text-white shadow-sm"
              aria-label="Previous"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </button>
            <button 
              onClick={handleNext} 
              className="group w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-black flex items-center justify-center hover:opacity-90 hover:scale-[0.98] active:scale-95 cursor-pointer transition-all duration-300 text-gray-900 dark:text-white shadow-sm"
              aria-label="Next"
            >
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


// (Final CTA Section and Footer removed as requested)

export default function About() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full selection:bg-gray-200 dark:selection:bg-gray-800">
      <HeroSection />
      <IdentitySection />
      <EfficiencySection />
      <SolutionsSection />
    </main>
  );
}
