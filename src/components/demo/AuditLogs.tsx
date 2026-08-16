import { Activity, ShieldAlert, Key, UserCog, DatabaseBackup, LogIn, Filter, Download } from 'lucide-react';

export default function AuditLogs() {
  const auditLogs = [
    { id: 1, event: 'Successful login via Web', ip: '192.168.1.42', location: 'Davao City, PH', date: 'Oct 15, 2026, 09:12 AM', user: 'Juan Dela Cruz', type: 'auth', icon: LogIn },
    { id: 2, event: 'API Key generated (Production)', ip: '192.168.1.42', location: 'Davao City, PH', date: 'Oct 14, 2026, 14:05 PM', user: 'Juan Dela Cruz', type: 'security', icon: Key },
    { id: 3, event: 'Subscription plan upgraded to Pro', ip: '192.168.1.42', location: 'Davao City, PH', date: 'Oct 12, 2026, 11:30 AM', user: 'Juan Dela Cruz', type: 'system', icon: UserCog },
    { id: 4, event: 'Failed login attempt', ip: '103.45.67.89', location: 'Unknown', date: 'Oct 10, 2026, 02:15 AM', user: 'Unknown', type: 'alert', icon: ShieldAlert },
    { id: 5, event: 'Full portfolio data backup exported', ip: '192.168.1.42', location: 'Davao City, PH', date: 'Oct 8, 2026, 16:20 PM', user: 'Juan Dela Cruz', type: 'system', icon: DatabaseBackup },
  ];

  const getBadgeColor = (type: string) => {
    switch(type) {
      case 'auth': return 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200 dark:border-blue-500/20';
      case 'security': return 'bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400 border-purple-200 dark:border-purple-500/20';
      case 'system': return 'bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400 border-gray-200 dark:border-gray-500/20';
      case 'alert': return 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400 border-red-200 dark:border-red-500/20';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-500/10 dark:text-gray-400 border-gray-200 dark:border-gray-500/20';
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto p-6 md:p-8 animate-in fade-in duration-500 cursor-default pb-24 text-gray-900 dark:text-[#ededed]">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2 flex items-center gap-3">
          <Activity className="w-8 h-8" />
          Audit Logs
        </h1>
        <p className="text-[14px] font-medium text-gray-500 dark:text-gray-400">
          Review system activity, security events, and authentication logs across your account.
        </p>
      </div>

      {/* Main Content */}
      <div className="bg-white dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#1e1e1e] rounded-xl transition-all duration-200 hover:border-gray-300 dark:hover:border-[#2a2a2a] overflow-hidden">
        
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200/80 dark:border-[#2a2a2a] flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#fafafa] dark:bg-[#0c0c0c]">
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex items-center justify-center gap-2 px-3 py-1.5 bg-white dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#2a2a2a] rounded-md text-[12px] font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors shadow-sm w-full sm:w-auto">
              <Filter className="w-3.5 h-3.5" /> Filter by Type
            </button>
            <button className="flex items-center justify-center gap-2 px-3 py-1.5 bg-white dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#2a2a2a] rounded-md text-[12px] font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors shadow-sm w-full sm:w-auto">
              Last 30 Days
            </button>
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-1.5 bg-[#171717] dark:bg-white text-white dark:text-[#0a0a0a] rounded-md text-[12px] font-bold hover:opacity-90 transition-opacity shadow-sm w-full sm:w-auto">
            <Download className="w-3.5 h-3.5" /> Export CSV
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white dark:bg-transparent border-b border-gray-200/80 dark:border-[#2a2a2a]">
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Event Description</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Type</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">User & IP</th>
                <th className="px-6 py-4 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-[#1e1e1e]">
              {auditLogs.map((log) => {
                const Icon = log.icon;
                return (
                  <tr key={log.id} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-md ${log.type === 'alert' ? 'bg-red-50 text-red-500 dark:bg-red-500/10' : 'bg-gray-100 text-gray-600 dark:bg-[#1a1a1a] dark:text-gray-300'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[13px] font-bold text-gray-900 dark:text-white">{log.event}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border ${getBadgeColor(log.type)}`}>
                        {log.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-gray-900 dark:text-white">{log.user}</span>
                        <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">{log.ip} &bull; {log.location}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-[12px] font-medium text-gray-500 dark:text-gray-400">
                      {log.date}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {/* Pagination mock */}
        <div className="p-4 border-t border-gray-200/80 dark:border-[#2a2a2a] flex justify-between items-center bg-[#fafafa] dark:bg-[#0c0c0c]">
          <span className="text-[12px] font-medium text-gray-500 dark:text-gray-400">Showing 1 to 5 of 24 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 bg-white dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#2a2a2a] rounded-md text-[12px] font-bold text-gray-400 cursor-not-allowed">Prev</button>
            <button className="px-3 py-1 bg-[#171717] dark:bg-white border border-[#171717] dark:border-white rounded-md text-[12px] font-bold text-white dark:text-black">1</button>
            <button className="px-3 py-1 bg-white dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#2a2a2a] rounded-md text-[12px] font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#161616]">2</button>
            <button className="px-3 py-1 bg-white dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#2a2a2a] rounded-md text-[12px] font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#161616]">Next</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
