import { Shield, Bell, Key, LogOut, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <div className="max-w-[1400px] mx-auto p-6 md:p-8 animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Account Settings</h2>
        <p className="text-[15px] text-gray-500 dark:text-[#a1a1a1]">Manage your security preferences and account details.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Security & Notifications */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Security */}
          <div className="bg-white dark:bg-[#0c0c0c] rounded-xl border border-gray-200/80 dark:border-[#1e1e1e] transition-all duration-200 hover:border-gray-300 dark:hover:border-[#2a2a2a] overflow-hidden">
            <div className="p-5 border-b border-gray-100 dark:border-[#1e1e1e] flex items-center gap-3">
              <Shield className="w-5 h-5 text-gray-500" />
              <h3 className="text-[16px] font-semibold text-gray-900 dark:text-white">Security</h3>
            </div>
            <div className="p-6 space-y-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-[14px] font-medium text-gray-900 dark:text-white mb-1">Two-Factor Authentication</h4>
                  <p className="text-[13px] text-gray-500">Add an extra layer of security to your account.</p>
                </div>
                <button 
                  onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${twoFactorEnabled ? 'bg-[#171717] dark:bg-white' : 'bg-gray-200 dark:bg-[#333333]'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-[#0a0a0a] transition-transform ${twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              
              <div className="h-[1px] bg-black/5 dark:bg-white/5 w-full"></div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-[14px] font-medium text-gray-900 dark:text-white mb-1">Password</h4>
                  <p className="text-[13px] text-gray-500">Last changed 3 months ago.</p>
                </div>
                <button className="flex items-center gap-2 bg-transparent border border-gray-200/80 dark:border-[#1e1e1e] text-gray-900 dark:text-white px-4 py-2 rounded-lg text-[13px] font-medium hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">
                  <Key className="w-3.5 h-3.5" />
                  Change Password
                </button>
              </div>

            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white dark:bg-[#0c0c0c] rounded-xl border border-gray-200/80 dark:border-[#1e1e1e] transition-all duration-200 hover:border-gray-300 dark:hover:border-[#2a2a2a] overflow-hidden">
            <div className="p-5 border-b border-gray-100 dark:border-[#1e1e1e] flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-500" />
              <h3 className="text-[16px] font-semibold text-gray-900 dark:text-white">Notifications</h3>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-[14px] font-medium text-gray-900 dark:text-white mb-1">Email Notifications</h4>
                  <p className="text-[13px] text-gray-500">Receive updates about your portfolio performance.</p>
                </div>
                <button 
                  onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notificationsEnabled ? 'bg-[#171717] dark:bg-white' : 'bg-gray-200 dark:bg-[#333333]'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-[#0a0a0a] transition-transform ${notificationsEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column - Danger Zone & Sessions */}
        <div className="space-y-8">
          
          <div className="bg-white dark:bg-[#0c0c0c] rounded-xl border border-red-200 dark:border-red-900/30 transition-all duration-200 hover:border-red-300 dark:hover:border-red-800/50 overflow-hidden">
            <div className="p-5 border-b border-red-100 dark:border-red-900/20 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <h3 className="text-[16px] font-semibold text-red-600 dark:text-red-500">Danger Zone</h3>
            </div>
            <div className="p-6">
              <p className="text-[13px] text-gray-600 dark:text-gray-400 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
              <button className="w-full bg-red-50 dark:bg-red-900/20 text-red-600 border border-red-200 dark:border-red-900/50 px-4 py-2 rounded-lg text-[13px] font-medium hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors">
                Delete Account
              </button>
            </div>
          </div>

          <div className="bg-[#fafafa] dark:bg-[#0c0c0c] rounded-xl border border-gray-200/80 dark:border-[#1e1e1e] p-6 flex flex-col items-center justify-center text-center">
             <div className="w-12 h-12 bg-white dark:bg-[#0c0c0c] rounded-full flex items-center justify-center shadow-sm border border-gray-100 dark:border-[#1e1e1e] mb-4">
               <LogOut className="w-5 h-5 text-gray-500" />
             </div>
             <h4 className="text-[14px] font-medium text-gray-900 dark:text-white mb-1">Sign out of Credens</h4>
             <p className="text-[12px] text-gray-500 mb-4">You will be securely logged out of this device.</p>
             <button onClick={() => window.location.href = '/'} className="bg-[#171717] dark:bg-white text-white dark:text-[#0a0a0a] px-6 py-2 rounded-lg text-[13px] font-medium hover:opacity-90 transition-opacity">
               Sign Out
             </button>
          </div>

        </div>

      </div>
    </div>
  );
}
