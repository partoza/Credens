import { useState, useEffect, useMemo, useRef } from 'react';
import { LayoutDashboard, Paintbrush, Briefcase, Nfc, ChevronRight, Mail, Quote, Code, Camera, Play, Trophy } from 'lucide-react';
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';

function useIntersectionObserver() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return [ref, isIntersecting] as const;
}

const FadeIn = ({ children, delay = 0, className = "" }: any) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div ref={ref} className={`transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const HoloCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;
    
    setTilt({ x: normX * 15, y: normY * -15 });
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.8 });
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlare({ opacity: 0, x: 50, y: 50 });
  };
  
  const rotY = (isFlipped ? 180 : 0) + (isFlipped ? -tilt.x : tilt.x);

  return (
    <div 
      ref={cardRef}
      className="relative w-full max-w-[460px] aspect-[16/10] cursor-pointer"
      style={{ perspective: '1200px' }}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={handlePointerLeave}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className="w-full h-full relative transition-all ease-out"
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: `rotateX(${tilt.y}deg) rotateY(${rotY}deg)`,
          transitionDuration: isHovered ? '50ms' : '500ms'
        }}
      >
        {/* Front Face */}
        <div 
           className="absolute inset-0 w-full h-full rounded-[20px] overflow-hidden border border-black/10 dark:border-white/20 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.4)] dark:shadow-none"
           style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <img src="/card/front.png" className="w-full h-full object-cover pointer-events-none" alt="Card Front" />
          
          {/* Holo Shine Layer */}
          <div 
             className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
             style={{
               opacity: glare.opacity,
               background: `linear-gradient(${135 + tilt.x * 2 + tilt.y * 2}deg, transparent 20%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.4) 60%, transparent 80%)`,
               backgroundPosition: `${50 + tilt.x * 2}% ${50 + tilt.y * 2}%`,
               backgroundSize: '300% 300%'
             }}
          />
          
          {/* Glare Layer */}
          <div 
             className="absolute inset-0 pointer-events-none transition-opacity duration-300"
             style={{
               opacity: glare.opacity,
               background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
             }}
          />
        </div>

        {/* Back Face */}
        <div 
           className="absolute inset-0 w-full h-full rounded-[20px] overflow-hidden border border-black/10 dark:border-white/20 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.4)] dark:shadow-none"
           style={{ 
             backfaceVisibility: 'hidden', 
             WebkitBackfaceVisibility: 'hidden',
             transform: 'rotateY(180deg)'
           }}
        >
          <img src="/card/back.png" className="w-full h-full object-cover pointer-events-none" alt="Card Back" />
          
          {/* Holo Shine Layer (Flipped X) */}
          <div 
             className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
             style={{
               opacity: glare.opacity,
               background: `linear-gradient(${135 - tilt.x * 2 + tilt.y * 2}deg, transparent 20%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.4) 60%, transparent 80%)`,
               backgroundPosition: `${50 - tilt.x * 2}% ${50 + tilt.y * 2}%`,
               backgroundSize: '300% 300%'
             }}
          />
          
          {/* Glare Layer */}
          <div 
             className="absolute inset-0 pointer-events-none transition-opacity duration-300"
             style={{
               opacity: glare.opacity,
               background: `radial-gradient(circle at ${100 - glare.x}% ${glare.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
             }}
          />
        </div>
      </div>
    </div>
  );
};

const FeatureKey = ({ icon, title, desc, width = "w-[240px]", delay = 0 }: any) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div 
      ref={ref}
      className={`${width} h-[110px] relative rounded-[14px] border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#0a0a0a] p-5 flex flex-col justify-between overflow-hidden group cursor-pointer hover:border-black/20 dark:hover:border-white/20 shadow-sm dark:shadow-none hover:shadow-md flex-shrink-0 transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="text-gray-500 dark:text-[#8a8f98] relative z-10 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div className="relative z-10 leading-snug">
        <div className="text-[14px] font-semibold text-black dark:text-[#f4f4f5]">{title}</div>
        <div className="text-[13px] text-gray-500 dark:text-[#8a8f98]">{desc}</div>
      </div>
    </div>
  );
}

const WidgetWrapper = ({ children, delay = 0, width = "w-[240px]" }: any) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div 
      ref={ref}
      className={`${width} flex-shrink-0 transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-[0.25] translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const TestimonialWidget = () => (
  <div className="bg-white dark:bg-[#111111] rounded-[14px] p-4 border border-black/10 dark:border-white/10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-none flex flex-col hover:border-black/20 transition-colors">
    <Quote className="w-5 h-5 text-gray-200 dark:text-gray-800 mb-2 fill-current" />
    <p className="text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed mb-3 flex-1 font-medium">
      Juan was exceptional in developing our software solution. He grasped the complex requirements instantly and delivered a reliable, highly optimized product. I highly recommend him for any software development needs.
    </p>
    <div className="border-t border-gray-100 dark:border-gray-800 pt-3 flex items-center gap-2.5">
      <div className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[9px] font-bold text-gray-600 dark:text-gray-300">JD</div>
      <div>
        <div className="text-[11px] font-bold text-black dark:text-white leading-tight mb-0.5">John Doe</div>
        <div className="text-[9px] text-gray-500 font-mono">Software Developer</div>
      </div>
    </div>
  </div>
);

const ProjectWidget = () => (
  <div className="bg-white dark:bg-[#111111] rounded-[14px] p-4 border border-black/10 dark:border-white/10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-none flex flex-col h-full hover:border-black/20 transition-colors">
    <div className="flex justify-between items-center text-[8px] font-bold text-gray-400 tracking-wider mb-3 uppercase">
      <span>Mobile Application</span>
      <span>2025</span>
    </div>
    <div className="flex items-center gap-2 mb-2">
      <div className="w-8 h-8 bg-red-50 dark:bg-red-900/20 rounded-lg flex items-center justify-center text-red-600 border border-red-100 dark:border-red-900/30">
        <LayoutDashboard className="w-4 h-4" />
      </div>
      <h3 className="text-lg font-bold text-black dark:text-white tracking-tight">UniMind</h3>
    </div>
    <p className="text-[11px] text-gray-600 dark:text-gray-400 mb-4 leading-relaxed font-medium">
      A peer-to-peer study mobile application designed to connect learners across university.
    </p>
    <div className="flex justify-between items-center mt-auto">
      <div className="text-[9px] font-medium text-gray-800 dark:text-gray-300 font-mono">
        Flutter Firebase
      </div>
      <div className="w-5 h-5 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center">
        <ChevronRight className="w-3 h-3 text-gray-400" />
      </div>
    </div>
  </div>
);

const CertificateWidget = () => (
  <div className="bg-white dark:bg-[#111111] rounded-[14px] p-4 border border-black/10 dark:border-white/10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-none flex flex-col hover:border-black/20 transition-colors">
    <div className="w-full aspect-[4/3] rounded-md mb-3 relative overflow-hidden flex items-center justify-center border border-black/5 dark:border-white/5 bg-gray-100 dark:bg-black/50">
       <img src="/cert-sample.jpg" alt="Certificate" className="w-full h-full object-cover dark:hidden" />
       <img src="/cer-sample-dark.png" alt="Certificate Dark" className="w-full h-full object-cover hidden dark:block" />
    </div>
    <div>
      <h3 className="text-[12px] font-bold text-black dark:text-white leading-tight mb-1">
        IT Specialist
      </h3>
      <div className="text-[8px] font-bold text-gray-400 tracking-wider uppercase leading-snug">
        PEARSON VUE / CERTNEXUS
      </div>
    </div>
  </div>
);

const SkillsWidget = () => (
  <div className="flex flex-wrap gap-1.5">
    {['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind', 'Photoshop', 'Canva', 'Figma'].map(skill => (
      <div key={skill} className="bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-sm">
        <div className="w-2.5 h-2.5 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
        <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300">{skill}</span>
      </div>
    ))}
  </div>
);

const LinksWidget = () => (
  <div className="bg-white dark:bg-[#111111] rounded-[14px] p-4 border border-black/10 dark:border-white/10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-none flex flex-col hover:border-black/20 transition-colors">
    <div className="text-[9px] font-bold text-gray-400 tracking-wider mb-3 uppercase">Direct Connect</div>
    <div className="grid grid-cols-2 gap-1.5">
      {[
        { icon: Mail, text: "Email Rex" },
        { icon: Briefcase, text: "LinkedIn" },
        { icon: Code, text: "GitHub" },
        { icon: Camera, text: "Instagram" }
      ].map((link, i) => (
        <div key={i} className="bg-gray-50 dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 rounded-md p-2 flex items-center gap-1.5">
          <link.icon className="w-3 h-3 text-black dark:text-white" />
          <span className="text-[10px] font-semibold text-black dark:text-white flex-1">{link.text}</span>
        </div>
      ))}
    </div>
  </div>
);

const ExperienceWidget = () => (
  <div className="bg-white dark:bg-[#111111] rounded-[14px] p-4 border border-black/10 dark:border-white/10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-none flex flex-col hover:border-black/20 transition-colors h-full justify-center">
    <div className="flex justify-between items-start mb-3">
      <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30">
        <Briefcase className="w-4 h-4" />
      </div>
      <div className="text-[9px] font-bold text-gray-500 dark:text-gray-400 tracking-wider uppercase bg-gray-50 dark:bg-white/5 px-2 py-1 rounded-md border border-black/5 dark:border-white/5">
        2023 - Present
      </div>
    </div>
    <h3 className="text-[13px] font-bold text-black dark:text-white leading-tight mb-1">
      Senior Software Engineer
    </h3>
    <div className="text-[10px] font-medium text-blue-600 dark:text-blue-400 mb-2">
      Tech Innovators Inc.
    </div>
    <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed">
      Led the frontend development team in building highly scalable React applications and design systems.
    </p>
  </div>
);

const AwardWidget = () => (
  <div className="bg-white dark:bg-[#111111] rounded-[14px] p-4 border border-black/10 dark:border-white/10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-none flex flex-col h-full hover:border-black/20 transition-colors justify-center">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-full bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-600 border border-yellow-100 dark:border-yellow-900/30">
        <Trophy className="w-4 h-4" />
      </div>
      <div>
        <div className="text-[11px] font-bold text-black dark:text-white">Best UI Design</div>
        <div className="text-[9px] text-gray-500">Awwwards 2024</div>
      </div>
    </div>
  </div>
);

function App() {
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'system');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isSystemDark, setIsSystemDark] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsSystemDark(mediaQuery.matches);
    const handler = (e: any) => setIsSystemDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const isDark = theme === 'dark' || (theme === 'system' && isSystemDark);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const baseFeatures = [
    "For modern professionals",
    "To ship digital portfolios",
    "With zero code required"
  ];
  
  const features = useMemo(() => Array(100).fill(baseFeatures).flat(), [baseFeatures]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white selection:bg-black/10 dark:selection:bg-white/30 font-sans pb-16 transition-colors duration-300">
      
      {/* Navigation (super minimal) */}
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5">
        <nav className="flex items-center justify-between px-6 py-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src={isDark ? "/logo/logo2-white.png" : "/logo/logo2-black.png"} alt="Credens" className="h-7 w-auto object-contain" />
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-500 dark:text-[#8a8f98] font-medium">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">FAQ's</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          {/* Theme Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-[#8a8f98] hover:text-black dark:hover:text-[#f4f4f5] transition-colors"
            >
              {theme === 'dark' ? <MoonIcon className="w-4 h-4" /> : theme === 'light' ? <SunIcon className="w-4 h-4" /> : <ComputerDesktopIcon className="w-4 h-4" />}
              <span className="hidden sm:inline capitalize">{theme}</span>
            </button>
            
            {themeDropdownOpen && (
              <div className="absolute top-full right-0 mt-3 w-32 bg-white dark:bg-[#161616] border border-black/10 dark:border-white/10 rounded-lg shadow-2xl py-1 z-50">
                <button onClick={() => { setTheme('light'); setThemeDropdownOpen(false); }} className="w-full flex items-center gap-2.5 px-3 py-1.5 text-[13px] text-gray-600 dark:text-[#8a8f98] hover:text-black dark:hover:text-[#f4f4f5] hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-left">
                  <SunIcon className="w-3.5 h-3.5" /> Light
                </button>
                <button onClick={() => { setTheme('dark'); setThemeDropdownOpen(false); }} className="w-full flex items-center gap-2.5 px-3 py-1.5 text-[13px] text-gray-600 dark:text-[#8a8f98] hover:text-black dark:hover:text-[#f4f4f5] hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-left">
                  <MoonIcon className="w-3.5 h-3.5" /> Dark
                </button>
                <button onClick={() => { setTheme('system'); setThemeDropdownOpen(false); }} className="w-full flex items-center gap-2.5 px-3 py-1.5 text-[13px] text-gray-600 dark:text-[#8a8f98] hover:text-black dark:hover:text-[#f4f4f5] hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-left">
                  <ComputerDesktopIcon className="w-3.5 h-3.5" /> System
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 pl-2 border-l border-black/10 dark:border-white/10">
            <a href="#" className="text-[14px] font-medium bg-gray-100 dark:bg-white border border-gray-200 text-black px-4 py-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-50 transition-colors hidden sm:block shadow-sm">Log In</a>
            <a href="#" className="text-[14px] font-medium bg-black dark:bg-[#111111] text-white border border-black/10 dark:border-white/10 px-4 py-1.5 rounded-md hover:bg-gray-800 dark:hover:bg-[#1a1a1a] transition-colors shadow-sm">Sign Up</a>
          </div>
        </div>
      </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center pt-16 md:pt-24 px-6 md:px-12">
        <div className="w-full max-w-7xl">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 w-full items-center mb-24 mt-8">
            {/* Left: Heading & Buttons */}
            <div className="flex flex-col md:col-span-7">
              <h1 className="text-5xl md:text-[4.5rem] leading-[1.05] font-medium tracking-tighter text-gray-900 dark:text-[#f4f4f5] mb-5">
                Your professional<br />identity, verified.
              </h1>
              <p className="text-[17px] md:text-[19px] text-gray-500 dark:text-[#8a8f98] font-medium leading-snug mb-8 max-w-xl">
                Credens is a professional identity platform where users can create and manage a digital portfolio with a personalized NFC Card
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="bg-black dark:bg-[#f4f4f5] text-white dark:text-black px-5 py-2.5 rounded-full text-[13px] font-semibold hover:bg-gray-800 dark:hover:bg-white transition-colors">Get Started</a>
                <a href="#" className="bg-transparent border border-black/20 dark:border-white/20 text-gray-900 dark:text-[#f4f4f5] px-5 py-2.5 rounded-full text-[13px] font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors">View Demo</a>
              </div>
            </div>

            {/* Center: Empty Space */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Right: Rolling Feature List */}
            <div 
              className="relative h-[144px] w-full overflow-hidden text-[16px] md:text-[18px] md:col-span-4 font-medium mt-2"
              style={{ maskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)' }}
            >
              <div 
                className="transition-transform duration-700 ease-in-out absolute left-0 md:left-auto md:right-0" 
                style={{ top: '48px', transform: `translateY(-${activeFeature * 48}px)`, whiteSpace: 'nowrap' }}
              >
                {features.map((feature, index) => {
                  const isActive = activeFeature === index;
                  const distance = Math.abs(index - activeFeature);
                  
                  if (distance > 2) return <div key={index} className="h-[48px]"></div>;
                  
                  return (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 h-[48px] transition-all duration-700 ease-in-out"
                      style={{ 
                         opacity: isActive ? 1 : distance === 1 ? 0.35 : 0,
                         transform: `scale(${isActive ? 1 : 0.95})`,
                         transformOrigin: 'right center',
                         pointerEvents: isActive ? 'auto' : 'none'
                      }}
                    >
                      <div className="relative flex items-center justify-center w-3.5 h-3.5 flex-shrink-0">
                        {/* Outer Ring */}
                        <div className={`absolute inset-0 rounded-full border transition-colors duration-700 ease-in-out ${isActive ? 'border-black/50 dark:border-white/50' : 'border-black/20 dark:border-white/20'}`}></div>
                        {/* Inner Dot */}
                        <div className={`w-2 h-2 rounded-full transition-all duration-500 ease-out ${isActive ? 'bg-black dark:bg-[#f4f4f5] scale-100 opacity-100' : 'bg-gray-400 dark:bg-white scale-50 opacity-0'}`}></div>
                      </div>
                      <p className={`transition-colors duration-700 ease-in-out ${isActive ? 'text-black dark:text-[#f4f4f5]' : 'text-gray-500 dark:text-[#8a8f98]'}`}>
                        {feature}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* App Mockup Section */}
          <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-0 py-16 mt-8 overflow-hidden border-t border-black/5 dark:border-white/5">
            
            {/* Left Content (Text - visually on right) */}
            <div className="w-full lg:w-4/12 flex flex-col items-start lg:items-end text-left lg:text-right z-10">
              <FadeIn delay={100}>
                <h2 className="text-[32px] md:text-[40px] leading-tight font-medium tracking-tight text-black dark:text-white mb-3">
                  Effortless, no-code portfolio.
                </h2>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-[17px] md:text-[19px] text-gray-500 dark:text-[#8a8f98] font-medium leading-snug mb-10">
                  Build a stunning digital portfolio with zero code required. Our user-friendly platform makes it effortless to look perfect on any device.
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <button className="flex items-center gap-2.5 bg-black dark:bg-[#f4f4f5] text-white dark:text-black px-6 py-3 rounded-xl text-[14px] font-semibold hover:bg-gray-800 dark:hover:bg-white transition-colors shadow-sm">
                  <Play className="w-4 h-4 fill-current" />
                  Try Demo
                </button>
              </FadeIn>
            </div>

            {/* Right Content (Mockup - visually on left) */}
            <div className="w-full lg:w-7/12 relative flex justify-center lg:justify-start">
              <FadeIn delay={200} className="w-full">
                <div className="w-full bg-black/5 dark:bg-white/5 backdrop-blur-xl rounded-[20px] border border-gray-300 dark:border-white/20 p-2 aspect-video flex items-center justify-center transition-all duration-700 ease-out">
                  <div className="w-full h-full rounded-xl border border-gray-200 dark:border-white/20 overflow-hidden flex flex-col relative bg-white dark:bg-[#0a0a0a]">
                     {/* Glass Reflection */}
                     <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-white/10 pointer-events-none z-10"></div>
                     
                     {/* Window Controls */}
                     <div className="w-full h-10 border-b border-black/5 dark:border-white/5 bg-gray-100 dark:bg-white/[0.02] flex items-center px-4 gap-2 z-10">
                       <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                       <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                       <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                     </div>
                     
                     {/* Preview Image */}
                     <div className="flex-1 w-full overflow-hidden">
                       <img src="/app-preview.png" alt="App Preview" className="w-full h-full object-cover object-top" />
                     </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

            {/* Digital Card Section */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 py-16 mt-8 overflow-hidden border-t border-black/5 dark:border-white/5">
              
              {/* Left Content (Text) */}
              <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
                <FadeIn delay={100}>
                  <h2 className="text-[32px] md:text-[40px] leading-tight font-medium tracking-tight text-black dark:text-white mb-3">
                    Your Digital Card
                  </h2>
                </FadeIn>
                <FadeIn delay={200}>
                  <p className="text-[17px] md:text-[19px] text-gray-500 dark:text-[#8a8f98] font-medium leading-snug mb-10">
                    Share your contact details, portfolio, and social links instantly with a single tap. Designed to impress with a stunning holographic effect.
                  </p>
                </FadeIn>
                <FadeIn delay={300}>
                  <button className="flex items-center gap-2.5 bg-black dark:bg-[#f4f4f5] text-white dark:text-black px-6 py-3 rounded-xl text-[14px] font-semibold hover:bg-gray-800 dark:hover:bg-white transition-colors shadow-sm">
                    <Nfc className="w-4 h-4" />
                    Get Card
                  </button>
                </FadeIn>
              </div>

              {/* Right Content (Holo Card) */}
              <div className="w-full lg:w-1/2 relative flex justify-center py-10">
                <FadeIn delay={200} className="w-full flex justify-center">
                  <HoloCard />
                </FadeIn>
              </div>
            </div>

          {/* Keyboard Feature Section */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16 py-16 border-t border-black/5 dark:border-white/5 mt-16 overflow-hidden">
            
            {/* Left Content */}
            <div className="w-full lg:w-5/12 flex flex-col items-start">
              <FadeIn delay={100}>
                <h2 className="text-[32px] md:text-[40px] leading-tight font-medium tracking-tight text-black dark:text-white mb-3">
                  Your career,<br />beautifully presented.
                </h2>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-[17px] md:text-[19px] text-gray-500 dark:text-[#8a8f98] font-medium leading-snug mb-10">
                  Credens gives you the tools to ship a stunning professional portfolio in minutes, without touching any code.
                </p>
              </FadeIn>
              {/* Try Demo button removed per request */}
            </div>

            {/* Right Keyboard Grid */}
            <div className="w-full lg:w-7/12 relative flex lg:justify-end py-4" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 85%, transparent 100%)' }}>
              <div className="flex flex-row gap-4 min-w-[1200px] relative right-[-150px] lg:right-[-250px]">
                
                {/* Column 1 (Left Background) */}
                <div className="flex flex-col gap-4 pt-[80px]">
                  <WidgetWrapper delay={50} width="w-[280px]">
                    <TestimonialWidget />
                  </WidgetWrapper>
                  <WidgetWrapper delay={150} width="w-[280px]">
                    <ExperienceWidget />
                  </WidgetWrapper>
                </div>

                {/* Column 2 (Center Left - Contains Feature Keys 1 & 3) */}
                <div className="flex flex-col gap-4 pt-[0px]">
                  <WidgetWrapper delay={100} width="w-[240px]">
                    <CertificateWidget />
                  </WidgetWrapper>
                  <FeatureKey delay={250} icon={<LayoutDashboard className="w-5 h-5" />} title="No-Code." desc="Zero coding required." />
                  <FeatureKey delay={300} icon={<Briefcase className="w-5 h-5" />} title="Ergonomic." desc="Professional design." />
                  <WidgetWrapper delay={200} width="w-[240px]">
                    <AwardWidget />
                  </WidgetWrapper>
                </div>

                {/* Column 3 (Center Right - Contains Feature Keys 2 & 4) */}
                <div className="flex flex-col gap-4 pt-[60px]">
                  <WidgetWrapper delay={150} width="w-[240px]">
                    <SkillsWidget />
                  </WidgetWrapper>
                  <FeatureKey delay={350} icon={<Paintbrush className="w-5 h-5" />} title="Custom." desc="Design & content only." />
                  <FeatureKey delay={400} icon={<Nfc className="w-5 h-5" />} title="NFC Ready." desc="Tap to share." />
                  <WidgetWrapper delay={350} width="w-[240px]">
                    <ProjectWidget />
                  </WidgetWrapper>
                </div>

                {/* Column 4 (Right Background) */}
                <div className="flex flex-col gap-4 pt-[120px]">
                  <WidgetWrapper delay={200} width="w-[240px]">
                    <ProjectWidget />
                  </WidgetWrapper>
                  <WidgetWrapper delay={450} width="w-[280px]">
                    <TestimonialWidget />
                  </WidgetWrapper>
                  <WidgetWrapper delay={500} width="w-[240px]">
                    <LinksWidget />
                  </WidgetWrapper>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 mt-12 md:mt-20 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[14px] font-medium text-gray-500 dark:text-[#8a8f98]">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
           <img src={isDark ? "/logo/logo2-white.png" : "/logo/logo2-black.png"} alt="Credens" className="h-5 w-auto object-contain opacity-70" />
           <span>© {new Date().getFullYear()} Credens. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-5">
          <div className="hidden sm:flex items-center gap-6 mr-4">
            <a href="#" className="hover:text-black dark:hover:text-[#f4f4f5] transition-colors">About</a>
            <a href="#" className="hover:text-black dark:hover:text-[#f4f4f5] transition-colors">FAQ's</a>
            <a href="#" className="hover:text-black dark:hover:text-[#f4f4f5] transition-colors">Pricing</a>
            <a href="#" className="hover:text-black dark:hover:text-[#f4f4f5] transition-colors">Contact</a>
          </div>
          <a href="#" className="hover:text-black dark:hover:text-[#f4f4f5] transition-colors"><svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg></a>
          <a href="#" className="hover:text-black dark:hover:text-[#f4f4f5] transition-colors"><svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
          <a href="#" className="hover:text-black dark:hover:text-[#f4f4f5] transition-colors"><Mail className="w-[18px] h-[18px] fill-current" /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
