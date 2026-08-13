import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ComputerDesktopIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(
    (localStorage.getItem('theme') as 'light' | 'dark' | 'system') || 'system'
  );
  const [isDark, setIsDark] = useState(false);

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

  const inputClasses = "block w-full px-4 py-3 bg-gray-50/50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-xl text-[15px] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:ring-1 focus:ring-black/20 dark:focus:ring-white/20 focus:border-black/20 dark:focus:border-white/20 transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] dark:shadow-none outline-none";

  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-[#0a0a0a] flex flex-col md:flex-row overflow-y-auto overflow-x-hidden font-sans">

      <Link to="/signin" className="md:hidden absolute top-6 left-6 z-10 flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>

      {/* Left Panel */}
      <div className="hidden md:flex flex-col justify-between w-1/2 bg-[#050505] dark:bg-gray-50 text-white dark:text-black p-12 lg:p-16 relative overflow-hidden min-h-screen fixed top-0 left-0 transition-colors duration-300">
        <div className="hidden min-[1440px]:block absolute xl:-top-[200px] xl:-right-[350px] w-[1000px] h-[1000px] pointer-events-none animate-[swing-logo_20s_ease-in-out_infinite]">
          <img src={isDark ? "/logo/logo-black.png" : "/logo/logo.png"} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/5 dark:bg-black/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-white/5 dark:bg-black/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
            <img src={isDark ? "/logo/logo2-black.png" : "/logo/logo2-white.png"} alt="Credens" className="h-8 w-auto object-contain" />
          </Link>
        </div>

        <div className="relative z-10 max-w-lg mt-20">
          <h1 className="text-5xl lg:text-[64px] font-medium tracking-tighter text-white dark:text-black mb-6 leading-[1.1]">
            Recover your<br />account access.
          </h1>
          <p className="text-[17px] text-white/60 dark:text-gray-600 font-medium leading-relaxed max-w-md mb-8">
            Enter the email address associated with your Credens account and we'll send you a secure reset link.
          </p>
          <Link to="/signin" className="group inline-flex items-center gap-2 py-2 text-[14px] font-medium text-white/80 hover:text-white dark:text-gray-600 dark:hover:text-black transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Sign in
          </Link>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col items-start gap-2">
            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">THEME</span>
            <div className="flex items-center bg-white/5 dark:bg-gray-200/50 rounded-full p-1 border border-white/10 dark:border-gray-200">
              {[{ value: 'system', Icon: ComputerDesktopIcon, label: 'System' }, { value: 'light', Icon: SunIcon, label: 'Light' }, { value: 'dark', Icon: MoonIcon, label: 'Dark' }].map(({ value, Icon, label }) => (
                <div key={value} className="relative group flex items-center justify-center">
                  <button onClick={() => setTheme(value as 'light' | 'dark' | 'system')} className={`p-1.5 rounded-full transition-all cursor-pointer ${theme === value ? 'bg-white/10 dark:bg-white dark:shadow-sm text-white dark:text-black' : 'text-white/40 hover:text-white/80 dark:text-gray-500 dark:hover:text-gray-900'}`}>
                    <Icon className="w-4 h-4" />
                  </button>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white dark:bg-black text-black dark:text-white text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">{label}</div>
                </div>
              ))}
            </div>
            <div className="text-[13px] text-white/40 dark:text-gray-500 font-medium mt-2">© {new Date().getFullYear()} Credens. All rights reserved.</div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 md:ml-auto flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16 relative bg-white dark:bg-[#0a0a0a] min-h-screen">
        <div className="md:hidden absolute top-6 right-6 z-10">
          <Link to="/"><img src={isDark ? "/logo/logo2-white.png" : "/logo/logo2-black.png"} alt="Credens" className="h-6 w-auto object-contain" /></Link>
        </div>

        <div className="w-full max-w-[420px] pt-12 md:pt-0">
          {sent ? (
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-3xl font-medium tracking-tighter text-gray-900 dark:text-[#f4f4f5]">Check your email</h2>
              <p className="text-[15px] font-medium text-gray-500 dark:text-[#8a8f98] max-w-sm">
                We sent a password reset link to <span className="text-black dark:text-white font-semibold">{email}</span>. Check your inbox and follow the instructions.
              </p>
              <Link to="/signin" className="mt-6 text-[14px] font-medium text-black dark:text-white hover:underline">
                Back to Sign in
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <h2 className="text-3xl font-medium tracking-tighter text-gray-900 dark:text-[#f4f4f5] mb-3">Reset your password</h2>
                <p className="text-[15px] font-medium text-gray-500 dark:text-[#8a8f98]">Enter your email address and we'll send you a link to reset your password.</p>
              </div>

              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Email Address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClasses} placeholder="name@company.com" required />
                </div>

                <button type="submit" className="w-full bg-black dark:bg-[#f4f4f5] text-white dark:text-black py-3.5 rounded-xl text-[15px] font-semibold hover:opacity-90 hover:scale-[0.98] active:scale-95 transition-all duration-300 shadow-md mt-2 flex justify-center items-center cursor-pointer">
                  Send reset link
                </button>
              </form>

              <div className="relative flex items-center w-full my-8">
                <div className="flex-grow border-t border-black/5 dark:border-white/10"></div>
              </div>

              <p className="text-[14px] font-medium text-gray-500 dark:text-[#8a8f98] text-center">
                Remember your password?{' '}
                <Link to="/signin" className="font-semibold text-black dark:text-white hover:underline transition-all">Sign in</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
