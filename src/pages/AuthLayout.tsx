import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ComputerDesktopIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'motion/react';

export default function AuthLayout() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(
    (localStorage.getItem('theme') as 'light' | 'dark' | 'system') || 'system'
  );
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = () => {
      const isDarkMode = theme === 'system' ? mediaQuery.matches : theme === 'dark';
      root.classList.toggle('dark', isDarkMode);
      setIsDark(isDarkMode);
    };
    updateTheme();
    localStorage.setItem('theme', theme);
    if (theme === 'system') {
      mediaQuery.addEventListener('change', updateTheme);
      return () => mediaQuery.removeEventListener('change', updateTheme);
    }
  }, [theme]);

  // Left panel content varies slightly per route
  const leftContent: Record<string, { heading: string; sub: string; back: string; backTo: string }> = {
    '/getstarted': {
      heading: 'Your professional\nidentity, verified.',
      sub: 'Get your personalized Credens NFC Card and digital portfolio. Choose a plan to get started, or explore a demo first.',
      back: 'Back to Home',
      backTo: '/',
    },
    '/signin': {
      heading: 'Your professional\nidentity, verified.',
      sub: 'Sign in to your Credens workspace to manage your digital portfolio, update your professional details, and track your NFC card.',
      back: 'Back to Home',
      backTo: '/',
    },
    '/forgot-password': {
      heading: 'Recover your\naccount access.',
      sub: 'Enter the email address associated with your Credens account and we\'ll send you a secure reset link.',
      back: 'Back to Sign in',
      backTo: '/signin',
    },
  };

  const content = leftContent[location.pathname] ?? leftContent['/getstarted'];

  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-[#0a0a0a] flex flex-col md:flex-row overflow-hidden font-sans">

      {/* Mobile Back */}
      <Link to={content.backTo} className="md:hidden absolute top-6 left-6 z-20 flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
        <ArrowLeft className="w-4 h-4" /> {content.back}
      </Link>

      {/* ── LEFT PANEL (never re-renders) ── */}
      <div className="hidden md:flex flex-col justify-between w-1/2 bg-[#050505] dark:bg-gray-50 p-12 lg:p-16 relative overflow-hidden min-h-screen shrink-0 transition-colors duration-300">
        <div className="hidden min-[1440px]:block absolute xl:-top-[200px] xl:-right-[350px] w-[1000px] h-[1000px] pointer-events-none animate-[swing-logo_20s_ease-in-out_infinite]">
          <img src={isDark ? '/logo/logo-black.png' : '/logo/logo.png'} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/5 dark:bg-black/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-white/5 dark:bg-black/5 rounded-full blur-3xl pointer-events-none" />

        {/* Logo */}
        <div className="relative z-10">
          <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
            <img src={isDark ? '/logo/logo2-black.png' : '/logo/logo2-white.png'} alt="Credens" className="h-8 w-auto object-contain" />
          </Link>
        </div>

        {/* Animated text content */}
        <div className="relative z-10 max-w-lg mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <h1 className="text-5xl lg:text-[64px] font-medium tracking-tighter text-white dark:text-black mb-6 leading-[1.1] whitespace-pre-line">
                {content.heading}
              </h1>
              <p className="text-[17px] text-white/60 dark:text-gray-600 font-medium leading-relaxed max-w-md mb-8">
                {content.sub}
              </p>
              <Link to={content.backTo} className="group inline-flex items-center gap-2 py-2 text-[14px] font-medium text-white/80 hover:text-white dark:text-gray-600 dark:hover:text-black transition-all duration-200 cursor-pointer">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                {content.back}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Theme + copyright */}
        <div className="relative z-10">
          <div className="flex flex-col items-start gap-2">
            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">THEME</span>
            <div className="flex items-center bg-white/5 dark:bg-gray-200/50 rounded-full p-1 border border-white/10 dark:border-gray-200">
              {[
                { value: 'system', Icon: ComputerDesktopIcon, label: 'System' },
                { value: 'light', Icon: SunIcon, label: 'Light' },
                { value: 'dark', Icon: MoonIcon, label: 'Dark' },
              ].map(({ value, Icon, label }) => (
                <div key={value} className="relative group flex items-center justify-center">
                  <button
                    onClick={() => setTheme(value as 'light' | 'dark' | 'system')}
                    className={`p-1.5 rounded-full transition-all cursor-pointer ${theme === value ? 'bg-white/10 dark:bg-white dark:shadow-sm text-white dark:text-black' : 'text-white/40 hover:text-white/80 dark:text-gray-500 dark:hover:text-gray-900'}`}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white dark:bg-black text-black dark:text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">{label}</div>
                </div>
              ))}
            </div>
            <div className="text-[13px] text-white/40 dark:text-gray-500 font-medium mt-2">
              © {new Date().getFullYear()} Credens. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL (only this animates) ── */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center relative bg-white dark:bg-[#0a0a0a] min-h-screen overflow-y-auto">
        {/* Mobile logo */}
        <div className="md:hidden absolute top-6 right-6 z-10">
          <Link to="/">
            <img src={isDark ? '/logo/logo2-white.png' : '/logo/logo2-black.png'} alt="Credens" className="h-6 w-auto object-contain" />
          </Link>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full max-w-[420px] px-8 py-16 md:py-0"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
