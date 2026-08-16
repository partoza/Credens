import { Database, HardDrive, File, Image as ImageIcon, Video, Trash2, Download, Search } from 'lucide-react';

export default function StorageManagement() {
  const storageAssets = [
    { id: 1, name: 'hero-banner-v2.jpg', type: 'image/jpeg', size: '2.4 MB', date: 'Oct 15, 2026', icon: ImageIcon },
    { id: 2, name: 'resume-2026-final.pdf', type: 'application/pdf', size: '1.1 MB', date: 'Oct 14, 2026', icon: File },
    { id: 3, name: 'portfolio-demo-reel.mp4', type: 'video/mp4', size: '45.8 MB', date: 'Oct 10, 2026', icon: Video },
    { id: 4, name: 'avatar-highres.png', type: 'image/png', size: '3.2 MB', date: 'Oct 8, 2026', icon: ImageIcon },
    { id: 5, name: 'project-thumbnails.zip', type: 'application/zip', size: '12.5 MB', date: 'Oct 1, 2026', icon: File }
  ];

  const totalUsed = 2.4;
  const totalCapacity = 5.0;
  const percentage = (totalUsed / totalCapacity) * 100;

  return (
    <div className="max-w-[1400px] mx-auto p-6 md:p-8 animate-in fade-in duration-500 cursor-default pb-24 text-gray-900 dark:text-[#ededed]">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2 flex items-center gap-3">
          <Database className="w-8 h-8" />
          Storage Management
        </h1>
        <p className="text-[14px] font-medium text-gray-500 dark:text-gray-400">
          Manage your uploaded assets, files, and monitor your total storage capacity.
        </p>
      </div>

      {/* Capacity Overview */}
      <div className="bg-white dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#1e1e1e] rounded-xl p-6 md:p-8 mb-8 transition-all duration-200 hover:border-gray-300 dark:hover:border-[#2a2a2a]">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gray-100 dark:bg-[#1a1a1a] rounded-lg text-gray-900 dark:text-white">
            <HardDrive className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-[16px] font-bold text-gray-900 dark:text-white">Storage Capacity</h3>
            <p className="text-[13px] text-gray-500 dark:text-gray-400">Pro Plan includes up to 5 GB of secure cloud storage.</p>
          </div>
        </div>
        
        <div className="mb-3 flex justify-between items-end">
          <div>
            <span className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{totalUsed} GB</span>
            <span className="text-[13px] font-medium text-gray-500 dark:text-gray-400 ml-2">used of {totalCapacity} GB</span>
          </div>
          <span className="text-[13px] font-bold text-gray-900 dark:text-white">{percentage.toFixed(1)}%</span>
        </div>
        
        <div className="w-full h-3 bg-gray-100 dark:bg-[#1a1a1a] rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#171717] dark:bg-white rounded-full transition-all duration-1000"
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        <div className="mt-4 flex gap-4 text-[12px] font-medium text-gray-500">
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-[#171717] dark:bg-white"></div> Images (1.2 GB)</div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-gray-400"></div> Videos (0.8 GB)</div>
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-white/20"></div> Documents (0.4 GB)</div>
        </div>
      </div>

      {/* Asset Manager */}
      <div className="bg-white dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#1e1e1e] rounded-xl transition-all duration-200 hover:border-gray-300 dark:hover:border-[#2a2a2a] overflow-hidden">
        <div className="p-6 border-b border-gray-200/80 dark:border-[#2a2a2a] flex flex-col sm:flex-row justify-between items-center gap-4">
          <h3 className="text-[16px] font-bold text-gray-900 dark:text-white">Uploaded Assets</h3>
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search files..." 
              className="w-full pl-9 pr-4 py-2 bg-[#fafafa] dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#2a2a2a] rounded-lg text-[13px] text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-[#333333] transition-all placeholder:text-gray-400"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#fafafa] dark:bg-[#0c0c0c] border-b border-gray-200/80 dark:border-[#2a2a2a]">
                <th className="px-6 py-4 text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">File Name</th>
                <th className="px-6 py-4 text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Size</th>
                <th className="px-6 py-4 text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date Added</th>
                <th className="px-6 py-4 text-[12px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-[#1e1e1e]">
              {storageAssets.map((asset) => {
                const Icon = asset.icon;
                return (
                  <tr key={asset.id} className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 dark:bg-[#1a1a1a] rounded-md text-gray-600 dark:text-gray-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[14px] font-medium text-gray-900 dark:text-white">{asset.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[13px] text-gray-500 dark:text-gray-400">
                      {asset.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[13px] text-gray-500 dark:text-gray-400">
                      {asset.size}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-[13px] text-gray-500 dark:text-gray-400">
                      {asset.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-[13px] font-medium">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#161616] rounded-md transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-md transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
