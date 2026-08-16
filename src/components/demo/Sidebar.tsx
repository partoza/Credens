import { 
  LayoutDashboard, UserCircle, Settings, ChevronRight, Box, FolderKanban, LogOut, Monitor, Sun, Moon, Database, CloudUpload, Activity, Server
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Sidebar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    builder: true,
    account: false,
    system: false
  });
  
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(
    (localStorage.getItem('theme') as any) || 'system'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleExpand = (key: string) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="w-64 flex-shrink-0 border-r border-gray-200/60 dark:border-[#1e1e1e] bg-[#fafafa] dark:bg-[#0a0a0a] hidden md:flex flex-col min-h-screen relative z-10 font-sans selection:bg-black/10 dark:selection:bg-white/10">
      
      {/* Top Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200/60 dark:border-[#1e1e1e]">
        <div className="flex items-center gap-2">
          <img src="/logo/logo2-black.png" alt="Credens" className="h-8 w-auto dark:hidden" />
          <img src="/logo/logo2-white.png" alt="Credens" className="h-8 w-auto hidden dark:block" />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4 py-6">
        <div className="mb-6">
          <p className="px-2 text-[12px] font-medium text-gray-400 dark:text-[#666666] mb-2">Platform</p>
          
          <div className="space-y-0.5">
            {/* Standard Item */}
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center justify-between px-2 py-2 rounded-md text-[13px] font-medium transition-colors duration-150 ${
                activeTab === 'dashboard'
                  ? 'bg-gray-100 dark:bg-[#161616] text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#161616]'
              }`}
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard className="w-4 h-4" />
                <span>Overview</span>
              </div>
            </button>

            {/* Collapsible Group: Builder */}
            <div>
              <button
                onClick={() => toggleExpand('builder')}
                className="w-full flex items-center justify-between px-2 py-2 rounded-md text-[13px] font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#161616] transition-colors duration-150"
              >
                <div className="flex items-center gap-3">
                  <Box className="w-4 h-4" />
                  <span>Builder</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${expanded.builder ? 'rotate-90' : ''}`} />
              </button>
              
              {/* Children */}
              <div className={`overflow-hidden transition-all duration-200 ${expanded.builder ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="ml-4 pl-3 border-l border-gray-200/60 dark:border-[#1e1e1e] mt-1 flex flex-col gap-0.5">
                  <button
                    onClick={() => setActiveTab('portfolio')}
                    className={`w-full text-left px-2 py-1.5 rounded-md text-[13px] transition-colors duration-150 ${
                      activeTab === 'portfolio' ? 'text-gray-900 dark:text-white font-medium bg-gray-100 dark:bg-[#161616]' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    Design Canvas
                  </button>
                  <button
                    onClick={() => setActiveTab('credentials')}
                    className={`w-full text-left px-2 py-1.5 rounded-md text-[13px] transition-colors duration-150 ${
                      activeTab === 'credentials' ? 'text-gray-900 dark:text-white font-medium bg-gray-100 dark:bg-[#161616]' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    Manage Data
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="px-2 text-[12px] font-medium text-gray-400 dark:text-[#666666] mb-2">System & Logs</p>
          
          <div className="space-y-0.5">
            {/* Collapsible Group: System & Logs */}
            <div>
              <button
                onClick={() => toggleExpand('system')}
                className="w-full flex items-center justify-between px-2 py-2 rounded-md text-[13px] font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#161616] transition-colors duration-150"
              >
                <div className="flex items-center gap-3">
                  <Server className="w-4 h-4" />
                  <span>Activity & Data</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${expanded.system ? 'rotate-90' : ''}`} />
              </button>
              
              {/* Children */}
              <div className={`overflow-hidden transition-all duration-200 ${expanded.system ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="ml-4 pl-3 border-l border-gray-200/60 dark:border-[#1e1e1e] mt-1 flex flex-col gap-0.5">
                  <button
                    onClick={() => setActiveTab('storage')}
                    className={`w-full flex items-center gap-2 text-left px-2 py-1.5 rounded-md text-[13px] transition-colors duration-150 ${
                      activeTab === 'storage' ? 'text-gray-900 dark:text-white font-medium bg-gray-100 dark:bg-[#161616]' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <Database className="w-3.5 h-3.5" />
                    Storage Management
                  </button>
                  <button
                    onClick={() => setActiveTab('published_logs')}
                    className={`w-full flex items-center gap-2 text-left px-2 py-1.5 rounded-md text-[13px] transition-colors duration-150 ${
                      activeTab === 'published_logs' ? 'text-gray-900 dark:text-white font-medium bg-gray-100 dark:bg-[#161616]' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <CloudUpload className="w-3.5 h-3.5" />
                    Published Logs
                  </button>
                  <button
                    onClick={() => setActiveTab('audit_logs')}
                    className={`w-full flex items-center gap-2 text-left px-2 py-1.5 rounded-md text-[13px] transition-colors duration-150 ${
                      activeTab === 'audit_logs' ? 'text-gray-900 dark:text-white font-medium bg-gray-100 dark:bg-[#161616]' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <Activity className="w-3.5 h-3.5" />
                    Audit Logs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="px-2 text-[12px] font-medium text-gray-400 dark:text-[#666666] mb-2">Account</p>
          
          <div className="space-y-0.5">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center justify-between px-2 py-2 rounded-md text-[13px] font-medium transition-colors duration-150 ${
                activeTab === 'profile'
                  ? 'bg-gray-100 dark:bg-[#161616] text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#161616]'
              }`}
            >
              <div className="flex items-center gap-3">
                <UserCircle className="w-4 h-4" />
                <span>Edit Profile</span>
              </div>
            </button>

            {/* Collapsible Group: Billing & Support */}
            <div>
              <button
                onClick={() => toggleExpand('account')}
                className="w-full flex items-center justify-between px-2 py-2 rounded-md text-[13px] font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#161616] transition-colors duration-150"
              >
                <div className="flex items-center gap-3">
                  <FolderKanban className="w-4 h-4" />
                  <span>Billing & Support</span>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${expanded.account ? 'rotate-90' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-200 ${expanded.account ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="ml-4 pl-3 border-l border-gray-200/60 dark:border-[#1e1e1e] mt-1 flex flex-col gap-0.5">
                  <button
                    onClick={() => setActiveTab('subscription')}
                    className={`w-full text-left px-2 py-1.5 rounded-md text-[13px] transition-colors duration-150 ${
                      activeTab === 'subscription' ? 'text-gray-900 dark:text-white font-medium bg-gray-100 dark:bg-[#161616]' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    Subscription
                  </button>
                  <button
                    onClick={() => setActiveTab('tickets')}
                    className={`w-full text-left px-2 py-1.5 rounded-md text-[13px] transition-colors duration-150 ${
                      activeTab === 'tickets' ? 'text-gray-900 dark:text-white font-medium bg-gray-100 dark:bg-[#161616]' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    Tickets & Orders
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center justify-between px-2 py-2 rounded-md text-[13px] font-medium transition-colors duration-150 ${
                activeTab === 'settings'
                  ? 'bg-gray-100 dark:bg-[#161616] text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#161616]'
              }`}
            >
              <div className="flex items-center gap-3">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Theme & Footer Area */}
      <div className="p-4 border-t border-gray-200/60 dark:border-[#1e1e1e] space-y-4">
        {/* Theme Switcher */}
        <div className="px-2">
          <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500 mb-2">Theme</p>
          <div className="inline-flex items-center gap-1 p-0.5 bg-transparent rounded-full border border-gray-200 dark:border-[#2a2a2a]">
            <button 
              onClick={() => setTheme('system')}
              className={`w-8 h-8 flex justify-center items-center rounded-full transition-all duration-150 ${theme === 'system' ? 'bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
            >
              <Monitor className="w-[15px] h-[15px]" />
            </button>
            <button 
              onClick={() => setTheme('light')}
              className={`w-8 h-8 flex justify-center items-center rounded-full transition-all duration-150 ${theme === 'light' ? 'bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
            >
              <Sun className="w-[15px] h-[15px]" />
            </button>
            <button 
              onClick={() => setTheme('dark')}
              className={`w-8 h-8 flex justify-center items-center rounded-full transition-all duration-150 ${theme === 'dark' ? 'bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
            >
              <Moon className="w-[15px] h-[15px]" />
            </button>
          </div>
        </div>
        
        <div className="h-px bg-gray-100 dark:bg-[#1e1e1e] w-full"></div>

        {/* Footer Links & Logout */}
        <div className="px-2 space-y-3">
          <button className="w-full flex items-center justify-start gap-2 text-[13px] font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#161616] px-2 py-2 rounded-lg transition-colors duration-150">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
          <div className="flex flex-col gap-1 text-left px-2">
            <a href="#" className="text-[11px] text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Terms & Conditions</a>
            <a href="#" className="text-[11px] text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span className="text-[11px] text-gray-400 mt-1 flex flex-col">
              <span>Need help?</span>
              <a href="mailto:support@credens.com" className="text-gray-600 dark:text-gray-300 hover:underline">support@credens.com</a>
            </span>
          </div>
        </div>
      </div>

    </aside>
  );
}
