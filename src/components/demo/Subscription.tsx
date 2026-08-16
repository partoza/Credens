import { Zap } from 'lucide-react';

export default function Subscription() {
  const plans = [
    { name: 'Free', price: '$0', desc: 'Basic digital portfolio.' },
    { name: 'Pro', price: '$12/mo', desc: 'Custom domain, analytics, and NFC card.', active: true },
    { name: 'Team', price: '$49/mo', desc: 'Manage portfolios for your entire team.' }
  ];

  return (
    <div className="max-w-[1400px] mx-auto p-6 md:p-8 animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Subscription & Billing</h2>
        <p className="text-[15px] text-gray-500 dark:text-[#a1a1a1]">Manage your plan, billing cycle, and payment methods.</p>
      </div>

      <div className="bg-white dark:bg-[#0c0c0c] rounded-xl border border-gray-200/80 dark:border-[#1e1e1e] transition-all duration-200 hover:border-gray-300 dark:hover:border-[#2a2a2a] overflow-hidden mb-8">
        <div className="p-5 border-b border-gray-100 dark:border-[#1e1e1e] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-yellow-500" />
            <h3 className="text-[16px] font-semibold text-gray-900 dark:text-white">Current Plan: Pro</h3>
          </div>
          <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[12px] font-bold px-2.5 py-1 rounded-full">Active</span>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <p className="text-[14px] text-gray-700 dark:text-gray-300 font-medium mb-1">Your next billing date is <strong className="text-gray-900 dark:text-white">September 14, 2026</strong>.</p>
              <p className="text-[13px] text-gray-500 dark:text-[#a1a1a1]">You will be charged $12.00 on your Visa ending in 4242.</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-transparent border border-gray-200/80 dark:border-[#1e1e1e] text-gray-900 dark:text-white px-4 py-2 rounded-lg text-[13px] font-medium hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors">
                Cancel Plan
              </button>
              <button className="bg-[#171717] dark:bg-white text-white dark:text-[#0a0a0a] px-4 py-2 rounded-lg text-[13px] font-medium hover:opacity-90 transition-all">
                Update Payment
              </button>
            </div>
          </div>

          <div className="border border-gray-100 dark:border-[#1e1e1e] rounded-lg p-4 flex items-center gap-4 bg-[#fafafa] dark:bg-[#0c0c0c]">
             <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-[10px] font-bold italic tracking-wider">VISA</div>
             <div>
               <div className="text-[14px] font-semibold text-gray-900 dark:text-white">•••• •••• •••• 4242</div>
               <div className="text-[12px] text-gray-500">Expires 12/28</div>
             </div>
          </div>
        </div>
      </div>

      <h3 className="text-[18px] font-semibold text-gray-900 dark:text-white mb-4">Available Plans</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className={`bg-white dark:bg-[#0c0c0c] rounded-xl border p-6 flex flex-col ${plan.active ? 'border-[#171717] dark:border-white shadow-md relative' : 'border-gray-200/80 dark:border-[#1e1e1e] transition-all duration-200 hover:border-gray-300 dark:hover:border-[#2a2a2a]'}`}>
            {plan.active && (
              <div className="absolute top-0 right-4 -translate-y-1/2 bg-[#171717] dark:bg-white text-white dark:text-[#0a0a0a] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Current</div>
            )}
            <h4 className="text-[16px] font-bold text-gray-900 dark:text-white mb-1">{plan.name}</h4>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{plan.price}</div>
            <p className="text-[13px] text-gray-500 dark:text-[#a1a1a1] mb-6 flex-1">{plan.desc}</p>
            <button className={`w-full py-2 rounded-lg text-[13px] font-medium transition-colors ${
              plan.active 
                ? 'bg-black/5 dark:bg-[#1a1a1a] text-gray-500 cursor-default' 
                : 'bg-[#171717] dark:bg-white text-white dark:text-[#0a0a0a] hover:opacity-90'
            }`}>
              {plan.active ? 'Current Plan' : 'Upgrade'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
