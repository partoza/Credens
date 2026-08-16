import { CloudUpload, ExternalLink, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export default function PublishedLogs() {
  const publishHistory = [
    { id: 1, version: 'v2.4.1', date: 'Oct 15, 2026, 14:30 PM', status: 'Live', changes: 'Updated profile picture and added new Direct Connect links.', author: 'Juan Dela Cruz' },
    { id: 2, version: 'v2.4.0', date: 'Oct 10, 2026, 09:15 AM', status: 'Previous', changes: 'Changed template to DevPro and updated biography text.', author: 'Juan Dela Cruz' },
    { id: 3, version: 'v2.3.5', date: 'Sep 28, 2026, 16:45 PM', status: 'Previous', changes: 'Fixed broken link in portfolio credentials.', author: 'System Admin' },
    { id: 4, version: 'v2.3.0', date: 'Sep 15, 2026, 11:20 AM', status: 'Previous', changes: 'Initial portfolio publication to public URL.', author: 'Juan Dela Cruz' },
  ];

  return (
    <div className="max-w-[1400px] mx-auto p-6 md:p-8 animate-in fade-in duration-500 cursor-default pb-24 text-gray-900 dark:text-[#ededed]">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2 flex items-center gap-3">
            <CloudUpload className="w-8 h-8" />
            Published Logs
          </h1>
          <p className="text-[14px] font-medium text-gray-500 dark:text-gray-400">
            View the deployment history of your public portfolio and digital business card.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#171717] dark:bg-white text-white dark:text-[#0a0a0a] px-4 py-2 rounded-md text-[13px] font-semibold hover:opacity-90 transition-opacity shadow-sm">
          <ExternalLink className="w-4 h-4" /> View Live Site
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-white dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#1e1e1e] rounded-xl transition-all duration-200 hover:border-gray-300 dark:hover:border-[#2a2a2a] p-6 md:p-8">
        
        <div className="relative">
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gray-200 dark:bg-[#1a1a1a] hidden md:block"></div>
          
          <div className="space-y-8 relative z-10">
            {publishHistory.map((log) => (
              <div key={log.id} className="flex flex-col md:flex-row gap-4 md:gap-8 group">
                <div className="md:w-32 flex-shrink-0 pt-1">
                  <div className="text-[13px] font-bold text-gray-900 dark:text-white">{log.date.split(',')[0]}</div>
                  <div className="text-[11px] font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3" /> {log.date.split(',')[1]}
                  </div>
                </div>
                
                <div className="flex-1 bg-[#fafafa] dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#2a2a2a] rounded-xl p-5 hover:border-black/20 dark:hover:border-white/20 transition-colors relative">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[45px] top-6 w-4 h-4 rounded-full border-2 border-white dark:border-[#0a0a0a] hidden md:block ${log.status === 'Live' ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-[#444444]'}`}></div>
                  
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[15px] font-bold text-gray-900 dark:text-white">{log.version}</span>
                      {log.status === 'Live' ? (
                        <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-emerald-200 dark:border-emerald-500/20 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Current Live
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider rounded-full border border-gray-200/80 dark:border-[#2a2a2a]">
                          Previous
                        </span>
                      )}
                    </div>
                    {log.status !== 'Live' && (
                      <button className="text-[12px] font-bold text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-1">
                        Rollback <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                  
                  <p className="text-[13px] text-gray-600 dark:text-gray-300 font-medium leading-relaxed mb-4">
                    {log.changes}
                  </p>
                  
                  <div className="flex items-center gap-2 pt-4 border-t border-gray-200/80 dark:border-[#2a2a2a]">
                    <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-[#1a1a1a] flex items-center justify-center text-[10px] font-bold text-gray-600 dark:text-gray-300">
                      {log.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
                      Published by <span className="font-bold text-gray-900 dark:text-white">{log.author}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
