import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { ComputerDesktopIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Theme State
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(
    (localStorage.getItem('theme') as 'light' | 'dark' | 'system') || 'system'
  );
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateTheme = () => {
      let isDarkMode = false;
      if (theme === 'system') {
        isDarkMode = mediaQuery.matches;
      } else {
        isDarkMode = theme === 'dark';
      }
      
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
      
      {/* Mobile Back Button */}
      <Link to="/" className="md:hidden absolute top-6 left-6 z-10 flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Left Panel (Branding / Visual) */}
      <div className="hidden md:flex flex-col justify-between w-1/2 bg-[#050505] dark:bg-gray-50 text-white dark:text-black p-12 lg:p-16 relative overflow-hidden min-h-screen fixed top-0 left-0 transition-colors duration-300">
        
        {/* Large Decorative Icon / Illustration (Rotating) */}
        <div className="hidden min-[1440px]:block absolute -top-[50px] -right-[100px] md:-top-[30px] md:-right-[60px] lg:-top-[50px] lg:-right-[100px] xl:-top-[200px] xl:-right-[350px] w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[1000px] xl:h-[1000px] pointer-events-none animate-[swing-logo_20s_ease-in-out_infinite]">
          <img src={isDark ? "/logo/logo-black.png" : "/logo/logo.png"} alt="Credens Background Logo" className="w-full h-full object-contain" />
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/5 dark:bg-black/5 rounded-full blur-3xl pointer-events-none transition-colors duration-300"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-white/5 dark:bg-black/5 rounded-full blur-3xl pointer-events-none transition-colors duration-300"></div>

        <div className="relative z-10">
          <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
            <img src={isDark ? "/logo/logo2-black.png" : "/logo/logo2-white.png"} alt="Credens" className="h-8 w-auto object-contain" />
          </Link>
        </div>

        <div className="relative z-10 max-w-lg mt-20">
          <h1 className="text-5xl lg:text-[64px] font-medium tracking-tighter text-white dark:text-black mb-6 leading-[1.1] transition-colors duration-300">
            Your professional<br />identity, verified.
          </h1>
          <p className="text-[17px] text-white/60 dark:text-gray-600 font-medium leading-relaxed max-w-md mb-8 transition-colors duration-300">
            Sign in to your Credens workspace to manage your digital portfolio, update your professional details, and track your NFC card interactions.
          </p>
          
          <Link to="/" className="group inline-flex items-center gap-2 py-2 text-[14px] font-medium text-white/80 hover:text-white dark:text-gray-600 dark:hover:text-black transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col items-start gap-4">
            {/* Theme Toggle */}
            <div className="flex flex-col items-start gap-2">
              <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase">THEME</span>
              <div className="flex items-center bg-white/5 dark:bg-gray-200/50 rounded-full p-1 border border-white/10 dark:border-gray-200 transition-colors duration-300">
                <button
                  onClick={() => setTheme('system')}
                  className={`p-1.5 rounded-full transition-all cursor-pointer ${theme === 'system' ? 'bg-white/10 dark:bg-white dark:shadow-sm text-white dark:text-black' : 'text-white/40 hover:text-white/80 dark:text-gray-500 dark:hover:text-gray-900'}`}
                  title="System Theme"
                >
                  <ComputerDesktopIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setTheme('light')}
                  className={`p-1.5 rounded-full transition-all cursor-pointer ${theme === 'light' ? 'bg-white/10 dark:bg-white dark:shadow-sm text-white dark:text-black' : 'text-white/40 hover:text-white/80 dark:text-gray-500 dark:hover:text-gray-900'}`}
                  title="Light Theme"
                >
                  <SunIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`p-1.5 rounded-full transition-all cursor-pointer ${theme === 'dark' ? 'bg-white/10 dark:bg-white dark:shadow-sm text-white dark:text-black' : 'text-white/40 hover:text-white/80 dark:text-gray-500 dark:hover:text-gray-900'}`}
                  title="Dark Theme"
                >
                  <MoonIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="text-[13px] text-white/40 dark:text-gray-500 font-medium transition-colors duration-300">
              © {new Date().getFullYear()} Credens. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel (Form) */}
      <div className="w-full md:w-1/2 md:ml-auto flex flex-col justify-center items-center p-8 sm:p-12 lg:p-16 relative bg-white dark:bg-[#0a0a0a] min-h-screen overflow-hidden">
        
        {/* Mobile Logo */}
        <div className="md:hidden absolute top-6 right-6 z-10">
          <Link to="/">
            <img src={isDark ? "/logo/logo2-white.png" : "/logo/logo2-black.png"} alt="Credens" className="h-6 w-auto object-contain" />
          </Link>
        </div>

        <div className="w-full max-w-[420px]">
          
          {isForgotPassword ? (
            <>
              <div className="mb-10 text-center md:text-left pt-12 md:pt-0">
                <h2 className="text-3xl font-medium tracking-tighter text-gray-900 dark:text-white mb-3">
                  Reset your password
                </h2>
                <p className="text-[15px] font-medium text-gray-500 dark:text-[#8a8f98]">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClasses}
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-xl text-[15px] font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-md mt-6 flex justify-center items-center active:scale-[0.98] cursor-pointer"
                >
                  Send reset link
                </button>
              </form>

              <div className="mt-8 text-center md:text-left">
                <p className="text-[14px] font-medium text-gray-500 dark:text-[#8a8f98]">
                  Remember your password?{' '}
                  <button 
                    onClick={() => setIsForgotPassword(false)} 
                    className="font-medium text-black dark:text-white hover:underline transition-all cursor-pointer"
                  >
                    Back to Sign in
                  </button>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="mb-10 text-center md:text-left pt-12 md:pt-0">
                <h2 className="text-3xl font-medium tracking-tighter text-gray-900 dark:text-white mb-3">
                  {isSignUp ? 'Create an account' : 'Welcome back'}
                </h2>
                <p className="text-[15px] font-medium text-gray-500 dark:text-[#8a8f98]">
                  {isSignUp ? 'Start building your digital professional presence.' : 'Sign in to your account to continue managing your digital presence.'}
                </p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                
                {isSignUp && (
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div className="space-y-1.5 w-full">
                      <label className="text-[12px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={inputClasses}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-1.5 w-full">
                      <label className="text-[12px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={inputClasses}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-[12px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClasses}
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`${inputClasses} pr-12`}
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      title={showPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors cursor-pointer"
                    >
                      {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {isSignUp && (
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`${inputClasses} pr-12`}
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        title={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors cursor-pointer"
                      >
                        {showConfirmPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                )}

                {!isSignUp && (
                  <div className="flex items-center justify-end pt-1">
                    <button 
                      type="button"
                      onClick={() => setIsForgotPassword(true)}
                      className="text-[13px] font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-xl text-[15px] font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-md mt-6 flex justify-center items-center active:scale-[0.98] cursor-pointer"
                >
                  {isSignUp ? 'Create account' : 'Sign in'}
                </button>
              </form>

              <div className="relative flex items-center my-8">
                <div className="flex-grow border-t border-black/5 dark:border-white/10"></div>
                <span className="flex-shrink-0 mx-4 text-gray-400 dark:text-gray-500 text-[11px] font-medium uppercase tracking-widest">or</span>
                <div className="flex-grow border-t border-black/5 dark:border-white/10"></div>
              </div>

              <button type="button" className="w-full flex items-center justify-center gap-3 bg-white dark:bg-[#111111] border border-black/5 dark:border-white/10 text-gray-700 dark:text-white py-3 rounded-xl text-[14px] font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 shadow-sm hover:shadow mb-6 active:scale-[0.98] cursor-pointer">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>

              <div className="mt-8 text-center md:text-left">
                <p className="text-[14px] font-medium text-gray-500 dark:text-[#8a8f98]">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                  <button 
                    onClick={() => setIsSignUp(!isSignUp)} 
                    className="font-medium text-black dark:text-white hover:underline transition-all cursor-pointer"
                  >
                    {isSignUp ? 'Sign in' : 'Sign up'}
                  </button>
                </p>
              </div>
            </>
          )}

        </div>
      </div>

    </div>
  );
}
