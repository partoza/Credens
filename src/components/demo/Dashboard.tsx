import { ServerStackIcon, CreditCardIcon, CloudArrowUpIcon, InboxStackIcon, ClockIcon, CalendarIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Dashboard({ user }: { user?: any }) {
  const currentUser = user || {
    name: "John Rex T. Partoza",
    role: "Full Stack Developer & UI/UX Designer",
    accountNo: "8921341238123"
  };
  const stats = [
    { label: 'Storage Used', value: '2.4 GB', sub: 'of 5.0 GB available', icon: ServerStackIcon, type: 'storage', percent: 48 },
    { label: 'Subscription', value: 'Pro Plan', sub: 'Expires: Nov 15, 2026', icon: CreditCardIcon },
    { label: 'Last Published', value: 'Oct 1, 2026', sub: '14:30 PM (v2.4.1)', icon: CloudArrowUpIcon },
    { label: 'Upcoming Orders', value: '1 Pending', sub: 'Details: Matte Black Card', icon: InboxStackIcon },
  ];

  const systemLogs = [
    { id: 1, action: 'Published Portfolio updates to live server', time: '2 hours ago', icon: CloudArrowUpIcon },
    { id: 2, action: 'Ordered Credens Smart NFC Card (Matte Black)', time: 'Yesterday', icon: InboxStackIcon },
    { id: 3, action: 'Upgraded to Pro Subscription Plan', time: 'Oct 15, 2026', icon: CreditCardIcon },
    { id: 4, action: 'Uploaded 4 new project assets to storage', time: 'Oct 12, 2026', icon: ServerStackIcon }
  ];

  const chartData = [
    { date: 'Oct 1', visitors: 420 },
    { date: 'Oct 8', visitors: 680 },
    { date: 'Oct 15', visitors: 1100 },
    { date: 'Oct 22', visitors: 950 },
    { date: 'Today', visitors: 1450 }
  ];

  return (
    <div className="max-w-[1400px] mx-auto p-6 md:p-8 animate-in fade-in duration-500 cursor-default pb-24 text-gray-900 dark:text-[#ededed]">
      
      {/* Vercel-style Welcome Banner */}
      <Card className="p-8 mb-6 transition-all duration-200 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 dark:bg-[#1a1a1a] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tighter mb-3">Hello, Juan 👋</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
            Your platform is running smoothly. You have <span className="font-semibold text-gray-900 dark:text-white">2.4 GB</span> of active storage and your subscription is <span className="font-semibold text-gray-900 dark:text-white">active</span>. Here's your daily overview.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="default">View Portfolio</Button>
            <Button variant="outline">Manage Credentials</Button>
          </div>
        </div>
      </Card>

      {/* Date Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 py-4 border-y border-gray-200/80 dark:border-[#2a2a2a] gap-4">
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center border border-gray-200/80 dark:border-[#2a2a2a] rounded-md bg-white dark:bg-[#0c0c0c] px-3 py-2 shadow-sm">
            <CalendarIcon className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Oct 1, 2026</span>
          </div>
          <span className="text-sm font-medium text-gray-400">to</span>
          <div className="flex items-center border border-gray-200/80 dark:border-[#2a2a2a] rounded-md bg-white dark:bg-[#0c0c0c] px-3 py-2 shadow-sm">
            <CalendarIcon className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Oct 31, 2026</span>
          </div>
          <button className="bg-[#171717] dark:bg-white text-white dark:text-[#0a0a0a] px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm whitespace-nowrap">
            Apply Filter
          </button>
        </div>
        <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-white dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#2a2a2a] text-gray-900 dark:text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors shadow-sm">
          <DocumentArrowDownIcon className="w-4 h-4" /> Generate PDF
        </button>
      </div>

      {/* --- Top Stats Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i} className="p-5 transition-all duration-200 flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-md bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white">
                  <Icon className="w-5 h-5" />
                </div>
                {stat.type === 'storage' && (
                  <div className="relative w-9 h-9 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="none" className="stroke-gray-200 dark:stroke-[#2a2a2a]" strokeWidth="4" />
                      <circle cx="18" cy="18" r="16" fill="none" className="stroke-[#171717] dark:stroke-white" strokeWidth="4" strokeDasharray="100" strokeDashoffset={100 - (stat.percent || 0)} strokeLinecap="round" />
                    </svg>
                    <span className="absolute text-[10px] font-bold text-gray-900 dark:text-white">{stat.percent}%</span>
                  </div>
                )}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white tracking-tight leading-none mb-2">{stat.value}</h3>
                <p className="text-[11px] font-medium text-gray-400 dark:text-gray-500">{stat.sub}</p>
              </div>
              
              <div className="mt-3 flex items-center justify-between border-t border-gray-100 dark:border-white/5 pt-3">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 w-full text-center hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors">
                  View details
                </p>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* --- Main Content (Graph) --- */}
        <div className="lg:col-span-2 h-full">
          
          {/* Site Visits Graph */}
          <div className="bg-white dark:bg-[#0c0c0c] rounded-xl border border-gray-200/80 dark:border-[#1e1e1e] transition-all duration-200 hover:border-gray-300 dark:hover:border-[#2a2a2a] p-6 md:p-8 h-full flex flex-col">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white flex items-center gap-2 mb-1">
                  Site Visitors
                </h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Traffic overview for the last 30 days.</p>
              </div>
              <div className="px-3 py-1 bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white rounded-md text-xs font-bold border border-gray-200/80 dark:border-[#2a2a2a] shadow-sm">
                +14.2% Growth
              </div>
            </div>
            
            {/* Modern Recharts AreaChart */}
            <div className="w-full mt-6 flex-1 min-h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#000000" stopOpacity={0.2} className="dark:stop-color-white" />
                      <stop offset="95%" stopColor="#000000" stopOpacity={0} className="dark:stop-color-white" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-gray-200 dark:text-white/10" />
                  <XAxis 
                    dataKey="date" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#9ca3af', fontSize: 12, fontWeight: 500 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#9ca3af', fontSize: 12, fontWeight: 500 }}
                    tickFormatter={(value) => `${value >= 1000 ? (value/1000).toFixed(1) + 'k' : value}`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      borderRadius: '8px',
                      border: '1px solid rgba(0,0,0,0.1)',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }} 
                    itemStyle={{ color: '#111827', fontWeight: 600 }}
                    labelStyle={{ color: '#6b7280', fontWeight: 500, marginBottom: '4px' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="visitors" 
                    stroke="currentColor" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorVisitors)" 
                    className="text-gray-900 dark:text-white"
                    activeDot={{ r: 6, strokeWidth: 0, fill: "currentColor" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* --- Right Sidebar (System Logs) --- */}
        <div className="h-full">
          <div className="bg-white dark:bg-[#0c0c0c] rounded-xl border border-gray-200/80 dark:border-[#1e1e1e] transition-all duration-200 hover:border-gray-300 dark:hover:border-[#2a2a2a] p-6 md:p-8 h-full flex flex-col">
            <h3 className="text-lg font-medium tracking-tight text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-gray-900 dark:text-white" />
              Activity Log
            </h3>
            
            <div className="relative">
              <div className="absolute left-4 top-4 bottom-4 w-px bg-gray-200 dark:bg-[#1a1a1a]"></div>
              
              <div className="space-y-6 relative z-10">
                {systemLogs.map((log) => {
                  const Icon = log.icon;
                  return (
                    <div key={log.id} className="flex gap-4 group">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white dark:border-[#0a0a0a] bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white z-10">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="pt-0.5 flex-1">
                        <p className="text-[14px] font-medium tracking-tight text-gray-900 dark:text-white leading-snug mb-0.5">
                          {log.action}
                        </p>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                          {log.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <button className="w-full mt-auto pt-6">
              <div className="w-full py-2.5 bg-[#fafafa] dark:bg-[#0c0c0c] hover:bg-gray-100 dark:hover:bg-[#161616] border border-gray-200/80 dark:border-[#2a2a2a] text-gray-900 dark:text-white text-sm font-semibold rounded-md transition-colors shadow-sm">
                View All Logs
              </div>
            </button>
          </div>
        </div>

      </div>

      {/* --- NFC Promo Section --- */}
      <div className="mt-6 bg-white dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#1e1e1e] rounded-xl p-8 md:p-12 transition-all duration-200 hover:border-gray-300 dark:hover:border-[#2a2a2a] flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-100 dark:bg-[#1a1a1a] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none z-0"></div>
        
        {/* Left Content */}
        <div className="flex-1 max-w-lg relative z-10">
          <p className="text-xs font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4">NFC Card</p>
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 dark:text-white leading-tight mb-4 tracking-tighter">Your identity,<br/>in your pocket.</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium mb-8">
            Get your personalized Credens NFC Card — tap to share your verified profile instantly. Available as an add-on.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl font-medium tracking-tighter text-gray-900 dark:text-white">₱350</span>
            <span className="text-sm font-medium text-gray-400">one-time</span>
          </div>
          <button className="bg-[#171717] dark:bg-white text-white dark:text-[#0a0a0a] px-8 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity shadow-sm">
            Order Now
          </button>
        </div>

        {/* Right Content - CSS Mocked Cards */}
        <div className="flex-1 relative h-[250px] md:h-[300px] w-full max-w-[450px] flex items-center justify-center z-10">
           {/* Card 1 (Background) */}
           <div className="absolute w-[280px] h-[170px] rounded-xl shadow-2xl border border-white/10 transform rotate-6 md:rotate-12 translate-x-4 md:translate-x-12 -translate-y-4 bg-cover bg-center bg-no-repeat p-5 flex flex-col justify-end items-end" style={{ backgroundImage: "url('/card/back-id.png')" }}>
             <span className="text-[6px] text-white/80 font-medium tracking-[0.15em] mb-1 mr-1">ACCOUNT NO.</span>
             <span className="text-[10px] text-white font-mono tracking-widest leading-none mr-1">{currentUser.accountNo}</span>
           </div>

           {/* Card 2 (Foreground) */}
           <div className="absolute w-[300px] h-[180px] rounded-xl shadow-2xl border border-white/10 transform -rotate-3 md:-rotate-6 -translate-x-4 md:-translate-x-8 translate-y-8 bg-cover bg-center bg-no-repeat p-6 flex flex-col justify-end" style={{ backgroundImage: "url('/card/front-id.png')" }}>
             <h3 className="text-[14px] font-medium tracking-wide text-white mb-1 drop-shadow-md">{currentUser.name}</h3>
             <p className="text-[8px] text-white/80 font-medium tracking-wide drop-shadow-md">{currentUser.role}</p>
           </div>
        </div>
      </div>
    </div>
  );
}
