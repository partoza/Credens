import { Link } from 'react-router-dom';

const inputClasses = "block w-full px-4 py-3 bg-gray-50/50 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-xl text-[15px] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:ring-1 focus:ring-black/20 dark:focus:ring-white/20 focus:border-black/20 dark:focus:border-white/20 transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] dark:shadow-none outline-none";

export default function GetStarted() {
  return (
    <>
      <div className="mb-10">
        <h2 className="text-3xl font-medium tracking-tighter text-gray-900 dark:text-[#f4f4f5] mb-3">
          Ready to get started?
        </h2>
        <p className="text-[15px] font-medium text-gray-500 dark:text-[#8a8f98]">
          Choose a plan to create your Credens profile and NFC card, or try a live demo first — no account needed.
        </p>
      </div>

      <Link
        to="/pricing"
        className="w-full bg-black dark:bg-[#f4f4f5] text-white dark:text-black py-4 rounded-2xl text-[15px] font-semibold hover:opacity-90 hover:scale-[0.98] active:scale-95 cursor-pointer transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mb-4"
      >
        View Pricing Plans
      </Link>

      <Link
        to="/"
        className="w-full bg-transparent border border-black/10 dark:border-white/10 text-gray-900 dark:text-[#f4f4f5] py-4 rounded-2xl text-[15px] font-medium hover:bg-black/5 dark:hover:bg-white/5 hover:scale-[0.98] active:scale-95 cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 mb-10"
      >
        Try Demo
      </Link>

      <div className="relative flex items-center w-full mb-8">
        <div className="flex-grow border-t border-black/5 dark:border-white/10"></div>
      </div>

      <p className="text-[14px] font-medium text-gray-500 dark:text-[#8a8f98] text-center w-full">
        Already have an account?{' '}
        <Link to="/signin" className="font-semibold text-black dark:text-white hover:underline transition-all">
          Sign in
        </Link>
      </p>
    </>
  );
}
