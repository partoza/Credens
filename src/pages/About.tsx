import { useEffect } from 'react';
import { ArrowRight, Briefcase, Globe, Smartphone, Sparkles, Zap, Users, Shield, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col items-center pt-10 md:pt-16 px-6 md:px-12 w-full max-w-7xl mx-auto relative min-h-screen">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-[10%] w-[500px] h-[500px] bg-gray-200/60 dark:bg-white/5 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-normal opacity-70 pointer-events-none"></div>
      <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-gray-100/80 dark:bg-white/[0.03] rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-normal opacity-70 pointer-events-none"></div>

      {/* Hero Section */}
      <div className="w-full flex flex-col items-center text-center mt-12 mb-24 md:mb-32 relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 text-[13px] font-semibold text-gray-600 dark:text-[#8a8f98] mb-8 shadow-sm backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-gray-900 dark:text-white" />
          <span>Our Mission</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gray-900 dark:text-white mb-6 max-w-4xl leading-[1.1]">
          Redefining professional <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-900 dark:from-gray-400 dark:to-white">identity for the digital era.</span>
        </h1>
        <p className="text-[17px] md:text-[20px] text-gray-500 dark:text-[#8a8f98] font-medium leading-relaxed max-w-2xl mt-4">
          Credens is a SaaS platform dedicated to helping non-technical professionals and freelancers easily build stunning, interactive digital portfolios without writing a single line of code.
        </p>
      </div>

      {/* Grid Features */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24 md:mb-32 relative z-10">
        
        {/* Card 1: Zero Code */}
        <div className="group bg-white/60 dark:bg-[#111111]/80 backdrop-blur-md border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/20 rounded-[2rem] p-8 md:p-12 flex flex-col items-start text-left transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-sm border border-black/5 dark:border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
            <Zap className="w-6 h-6 text-gray-900 dark:text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight mb-4">Zero Coding Required</h3>
          <p className="text-[16px] text-gray-500 dark:text-[#8a8f98] leading-relaxed font-medium">
            We built Credens specifically for freelancers, creatives, and non-IT professionals who need a premium online presence. You don't need to learn HTML, CSS, or hire expensive web developers. Our intuitive visual builder does the heavy lifting for you.
          </p>
        </div>

        {/* Card 2: Physical Cards */}
        <div className="group bg-white/60 dark:bg-[#111111]/80 backdrop-blur-md border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/20 rounded-[2rem] p-8 md:p-12 flex flex-col items-start text-left transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-sm border border-black/5 dark:border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
            <Smartphone className="w-6 h-6 text-gray-900 dark:text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight mb-4">The End of Paper Cards</h3>
          <p className="text-[16px] text-gray-500 dark:text-[#8a8f98] leading-relaxed font-medium">
            Solve modern networking problems instantly. Never worry about running out of physical business cards or discarding outdated ones. With our customized NFC cards, a single tap instantly shares your entire, beautifully structured portfolio to any smartphone.
          </p>
        </div>

        {/* Card 3: Global Reach */}
        <div className="group bg-white/60 dark:bg-[#111111]/80 backdrop-blur-md border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/20 rounded-[2rem] p-8 md:p-12 flex flex-col items-start text-left transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-sm border border-black/5 dark:border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
            <Globe className="w-6 h-6 text-gray-900 dark:text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight mb-4">Your Digital Footprint</h3>
          <p className="text-[16px] text-gray-500 dark:text-[#8a8f98] leading-relaxed font-medium">
            Aggregate your projects, testimonials, skills, and links into one centralized hub. Credens acts as the single source of truth for your professional journey, easily shareable via a clean, personalized link that looks great on any device.
          </p>
        </div>

        {/* Card 4: For Freelancers */}
        <div className="group bg-white/60 dark:bg-[#111111]/80 backdrop-blur-md border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/20 rounded-[2rem] p-8 md:p-12 flex flex-col items-start text-left transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1a1a1a] shadow-sm border border-black/5 dark:border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
            <Briefcase className="w-6 h-6 text-gray-900 dark:text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight mb-4">Designed for Freelancers</h3>
          <p className="text-[16px] text-gray-500 dark:text-[#8a8f98] leading-relaxed font-medium">
            Stand out in a crowded market. Whether you're a designer, consultant, or marketer, Credens gives you an agency-quality portfolio structure out of the box, helping you land more clients with a highly professional aesthetic.
          </p>
        </div>

      </div>

      {/* Trust/Stats Section (New) */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between border-y border-black/5 dark:border-white/5 py-12 md:py-20 mb-24 md:mb-32 gap-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 mb-4">
            <Users className="w-5 h-5 text-gray-900 dark:text-white" />
          </div>
          <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">10k+</h4>
          <p className="text-sm font-medium text-gray-500 dark:text-[#8a8f98]">Active Professionals</p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 mb-4">
            <Target className="w-5 h-5 text-gray-900 dark:text-white" />
          </div>
          <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">2M+</h4>
          <p className="text-sm font-medium text-gray-500 dark:text-[#8a8f98]">Connections Made</p>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 mb-4">
            <Shield className="w-5 h-5 text-gray-900 dark:text-white" />
          </div>
          <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100%</h4>
          <p className="text-sm font-medium text-gray-500 dark:text-[#8a8f98]">Secure & Reliable</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full flex flex-col items-center text-center bg-gray-900 dark:bg-white rounded-[2.5rem] py-24 px-6 md:px-12 mb-20 relative overflow-hidden shadow-2xl">
        <div className="absolute top-[-50%] left-[-10%] w-[300px] h-[300px] bg-white/10 dark:bg-black/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-50%] right-[-10%] w-[300px] h-[300px] bg-white/10 dark:bg-black/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white dark:text-gray-900 mb-6 max-w-2xl">
            Ready to upgrade your professional identity?
          </h2>
          <p className="text-gray-400 dark:text-gray-500 text-[18px] mb-10 max-w-xl font-medium">
            Join thousands of professionals seamlessly sharing their portfolios with a single tap.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/" className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg">
              Get Started for Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </main>
  );
}
