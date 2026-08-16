import { ExternalLink, Check } from 'lucide-react';
import { useState } from 'react';

export default function TopNav() {
  const [published, setPublished] = useState(false);

  const handlePublish = () => {
    setPublished(true);
    setTimeout(() => setPublished(false), 2000);
  };

  return (
    <header className="h-16 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between px-6">
      <div className="flex items-center">
        <h1 className="text-[16px] font-semibold text-gray-900 dark:text-white">Portfolio Editor</h1>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 bg-transparent border border-black/10 dark:border-white/10 text-gray-700 dark:text-[#f4f4f5] px-4 py-2 rounded-md text-[13px] font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <ExternalLink className="w-3.5 h-3.5" />
          Preview
        </button>
        <button 
          onClick={handlePublish}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-[13px] font-medium transition-colors ${
            published 
              ? 'bg-green-600 text-white' 
              : 'bg-black dark:bg-[#f4f4f5] text-white dark:text-black hover:opacity-90'
          }`}
        >
          {published ? (
            <>
              <Check className="w-3.5 h-3.5" /> Published
            </>
          ) : (
            'Publish'
          )}
        </button>
      </div>
    </header>
  );
}
