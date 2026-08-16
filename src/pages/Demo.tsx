import { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import Sidebar from '../components/demo/Sidebar';
import Dashboard from '../components/demo/Dashboard';
import ManageCredentials from '../components/demo/ManageCredentials';
import EditProfile from '../components/demo/EditProfile';
import EditPortfolio from '../components/demo/EditPortfolio';
import Subscription from '../components/demo/Subscription';
import TicketsOrders from '../components/demo/TicketsOrders';
import Settings from '../components/demo/Settings';
import StorageManagement from '../components/demo/StorageManagement';
import PublishedLogs from '../components/demo/PublishedLogs';
import AuditLogs from '../components/demo/AuditLogs';

export default function Demo() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const user = {
    firstName: "Juan",
    lastName: "Dela Cruz",
    name: "Juan Dela Cruz",
    role: "Full Stack Developer & UI/UX Designer",
    initials: "JD",
    accountNo: "8921341238123"
  };

  // Theme state is synced but we don't need to read it directly here

  useEffect(() => {
    // Keep theme in sync with App.tsx if possible, though App.tsx manages root classes
    const updateTheme = () => {
      const theme = localStorage.getItem('theme') || 'system';
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else if (theme === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemDark) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
      }
    };
    
    updateTheme();
    window.addEventListener('storage', updateTheme);
    return () => window.removeEventListener('storage', updateTheme);
  }, []);

  return (
    <div className="flex h-screen bg-[#fafafa] dark:bg-[#0a0a0a] overflow-hidden font-sans selection:bg-black/10 dark:selection:bg-white/10 text-gray-900 dark:text-[#ededed] transition-colors duration-300">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-end px-6 border-b border-gray-200/60 dark:border-[#1e1e1e] bg-[#fafafa] dark:bg-[#0a0a0a] shrink-0">
          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-[#fafafa] dark:border-[#0a0a0a]">6</span>
            </button>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="flex flex-col items-end">
                <span className="text-[13px] font-medium tracking-tight text-gray-900 dark:text-white leading-none mb-1.5">{user.name}</span>
                <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-[#1a1a1a] px-1.5 py-0.5 rounded-sm leading-none">{user.role}</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-900 dark:text-white font-medium text-lg border border-gray-200/80 dark:border-[#2a2a2a]">
                {user.initials}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          {activeTab === 'dashboard' && <Dashboard user={user} />}
          {activeTab === 'profile' && <EditProfile user={user} />}
          {activeTab === 'credentials' && <ManageCredentials />}
          {activeTab === 'portfolio' && <EditPortfolio />}
          {activeTab === 'subscription' && <Subscription />}
          {activeTab === 'tickets' && <TicketsOrders />}
          {activeTab === 'settings' && <Settings />}
          {activeTab === 'storage' && <StorageManagement />}
          {activeTab === 'published_logs' && <PublishedLogs />}
          {activeTab === 'audit_logs' && <AuditLogs />}
        </main>
      </div>
    </div>
  );
}
