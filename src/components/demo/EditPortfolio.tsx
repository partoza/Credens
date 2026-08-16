import { useState } from 'react';
import { 
  Check, LayoutTemplate, Maximize2, Download, QrCode, Share2, Mail, MessageCircle, ArrowUpRight
} from 'lucide-react';
import { 
  IconBrandLinkedin as Linkedin, IconBrandGithub as Github, IconBrandFacebook as Facebook, IconBrandInstagram as Instagram 
} from '@tabler/icons-react';

export default function EditPortfolio() {
  const [activeTab, setActiveTab] = useState<'templates' | 'builder'>('builder');
  const [isSaved, setIsSaved] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState('minimal');

  const templates = [
    { id: 'minimal', name: 'Minimal', desc: 'Clean, typography-focused design.', preview: 'bg-white border-black/10' },
    { id: 'devpro', name: 'DevPro', desc: 'Dark, tech-focused with bento grids.', preview: 'bg-[#0a0a0a] border-white/10' },
    { id: 'sidefolio', name: 'Sidefolio', desc: 'Sidebar navigation, split layout.', preview: 'bg-gray-50 border-black/5' },
    { id: 'creative', name: 'Creative', desc: 'Bold colors, large imagery.', preview: 'bg-blue-50 border-blue-200' }
  ];

  // Form State
  const [profile, setProfile] = useState({
    name: "John Rex T. Partoza",
    role: "Full Stack Developer & UI/UX Designer",
    location: "Davao City, Philippines",
    bio: "BSIT senior at University of Mindanao. Building modern web applications, intelligent agents, and sleek UI/UX design systems.",
    email: "Email Rex",
    linkedin: "LinkedIn",
    github: "GitHub",
    facebook: "Facebook",
    instagram: "Instagram",
    chat: "Chat with Rex"
  });

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const updateProfile = (key: keyof typeof profile, value: string) => {
    setProfile(prev => ({ ...prev, [key]: value }));
  };

  const inputClasses = "w-full px-3 py-2 bg-white dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#2a2a2a] rounded-lg text-[13px] text-gray-900 dark:text-white focus:ring-1 focus:ring-gray-300 dark:focus:ring-[#333333] outline-none transition-all placeholder:text-gray-400";
  const labelClasses = "block text-[12px] font-medium text-gray-700 dark:text-gray-300 mb-1.5";

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex-shrink-0 px-6 py-5 border-b border-gray-200/80 dark:border-[#1e1e1e] flex justify-between items-center bg-white dark:bg-[#0c0c0c] z-10">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">Portfolio Builder</h2>
          <p className="text-[14px] text-gray-500 dark:text-[#a1a1a1]">Customize your public profile appearance.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-gray-100 dark:bg-[#1a1a1a] p-1 rounded-lg">
            <button 
              onClick={() => setActiveTab('templates')}
              className={`px-4 py-1.5 rounded-md text-[13px] font-medium transition-all ${activeTab === 'templates' ? 'bg-transparent text-gray-900 dark:text-white shadow-sm border border-gray-100 dark:border-[#1e1e1e]' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
            >
              Templates
            </button>
            <button 
              onClick={() => setActiveTab('builder')}
              className={`px-4 py-1.5 rounded-md text-[13px] font-medium transition-all ${activeTab === 'builder' ? 'bg-transparent text-gray-900 dark:text-white shadow-sm border border-gray-100 dark:border-[#1e1e1e]' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
            >
              Builder
            </button>
          </div>
          <button 
            onClick={handleSave}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-colors shadow-sm ${
              isSaved ? 'bg-green-600 text-white' : 'bg-[#171717] dark:bg-white text-white dark:text-[#0a0a0a] hover:opacity-90'
            }`}
          >
            {isSaved ? <Check className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            {isSaved ? 'Saved!' : 'Publish'}
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden">
        
        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="h-full overflow-y-auto p-6 md:p-8 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {templates.map(template => (
                <div 
                  key={template.id}
                  onClick={() => setActiveTemplate(template.id)}
                  className={`group relative rounded-2xl border p-2 transition-all cursor-pointer ${
                    activeTemplate === template.id 
                      ? 'border-[#171717] dark:border-white shadow-xl scale-[1.02]' 
                      : 'border-gray-200/80 dark:border-[#1e1e1e] hover:border-black/30 dark:hover:border-white/30 hover:shadow-md'
                  }`}
                >
                  {activeTemplate === template.id && (
                    <div className="absolute top-6 right-6 z-20 bg-[#171717] dark:bg-white text-white dark:text-[#0a0a0a] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      Active
                    </div>
                  )}
                  
                  <div className={`w-full aspect-[16/10] rounded-xl border flex flex-col items-center justify-center overflow-hidden relative ${template.preview}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 dark:to-white/5 pointer-events-none"></div>
                    <LayoutTemplate className={`w-12 h-12 opacity-20 ${activeTemplate === template.id ? 'text-gray-900 dark:text-white opacity-50 scale-110 transition-transform' : 'text-gray-500'}`} />
                  </div>
                  
                  <div className="px-4 py-5">
                    <h3 className="text-[18px] font-bold text-gray-900 dark:text-white mb-1">{template.name}</h3>
                    <p className="text-[14px] text-gray-500 dark:text-[#a1a1a1]">{template.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Builder Tab */}
        {activeTab === 'builder' && (
          <div className="flex h-full w-full bg-gray-50 dark:bg-[#050505]">
            
            {/* Form Editor */}
            <div className="w-80 flex-shrink-0 border-r border-gray-200/80 dark:border-[#1e1e1e] bg-white dark:bg-[#0c0c0c] flex flex-col z-10">
              <div className="p-5 border-b border-gray-100 dark:border-[#1e1e1e]">
                <h3 className="text-[14px] font-bold tracking-tight text-gray-900 dark:text-white uppercase">Profile Data</h3>
              </div>
              <div className="p-5 overflow-y-auto space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className={labelClasses}>Full Name</label>
                    <input type="text" className={inputClasses} value={profile.name} onChange={(e) => updateProfile('name', e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClasses}>Professional Title</label>
                    <input type="text" className={inputClasses} value={profile.role} onChange={(e) => updateProfile('role', e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClasses}>Location</label>
                    <input type="text" className={inputClasses} value={profile.location} onChange={(e) => updateProfile('location', e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClasses}>Biography</label>
                    <textarea rows={4} className={`${inputClasses} resize-none`} value={profile.bio} onChange={(e) => updateProfile('bio', e.target.value)} />
                  </div>
                </div>

                <div className="h-px bg-black/5 dark:bg-white/5 w-full"></div>

                <div className="space-y-4">
                  <h4 className="text-[12px] font-bold tracking-tight text-gray-900 dark:text-white uppercase">Direct Connect</h4>
                  <div>
                    <label className={labelClasses}>Email Label</label>
                    <input type="text" className={inputClasses} value={profile.email} onChange={(e) => updateProfile('email', e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClasses}>LinkedIn Label</label>
                    <input type="text" className={inputClasses} value={profile.linkedin} onChange={(e) => updateProfile('linkedin', e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClasses}>GitHub Label</label>
                    <input type="text" className={inputClasses} value={profile.github} onChange={(e) => updateProfile('github', e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClasses}>Facebook Label</label>
                    <input type="text" className={inputClasses} value={profile.facebook} onChange={(e) => updateProfile('facebook', e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClasses}>Instagram Label</label>
                    <input type="text" className={inputClasses} value={profile.instagram} onChange={(e) => updateProfile('instagram', e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClasses}>Chat Label</label>
                    <input type="text" className={inputClasses} value={profile.chat} onChange={(e) => updateProfile('chat', e.target.value)} />
                  </div>
                </div>
              </div>
            </div>

            {/* Live Preview */}
            <div className="flex-1 overflow-y-auto p-8 lg:p-12 flex items-start justify-center bg-gray-50/50 dark:bg-[#050505] relative">
              <div className="absolute top-6 flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-[#0c0c0c] rounded-full border border-gray-100 dark:border-[#1e1e1e] shadow-sm z-20">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[11px] font-medium text-gray-500 dark:text-gray-400">Live Preview</span>
              </div>
              
              <div className="w-full max-w-[480px] space-y-4 mt-8 pb-12">
                
                {/* Main Identity Card */}
                <div className="bg-white dark:bg-[#0f0f0f] border border-gray-200/80 dark:border-[#1e1e1e] rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
                  
                  {/* Header Row */}
                  <div className="flex gap-5 items-start mb-6">
                    <div className="relative w-[72px] h-[72px] flex-shrink-0">
                      <div className="w-full h-full rounded-full bg-gray-200 dark:bg-[#1a1a1a] border-2 border-white dark:border-[#0f0f0f] overflow-hidden">
                        <img src="/avatar.jpg" alt={profile.name} className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = 'https://i.pravatar.cc/150?u=a042581f4e29026704d'} />
                      </div>
                      <div className="absolute bottom-1 right-1 w-[14px] h-[14px] bg-emerald-500 border-[2.5px] border-white dark:border-[#0f0f0f] rounded-full"></div>
                    </div>
                    <div className="pt-1">
                      <h1 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white tracking-tight leading-tight">{profile.name}</h1>
                      <p className="text-[13px] md:text-[14px] font-medium text-gray-600 dark:text-[#a1a1a1] mt-1">{profile.role}</p>
                      <p className="text-[12px] md:text-[13px] text-gray-400 dark:text-[#666] mt-0.5">{profile.location}</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-[13px] md:text-[14px] leading-relaxed text-gray-600 dark:text-[#a1a1a1] font-medium mb-6">
                    {profile.bio}
                  </p>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button className="w-full bg-[#111111] dark:bg-white text-white dark:text-black py-3 px-4 rounded-xl font-bold text-[13px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                      <Download className="w-[18px] h-[18px]" />
                      Save Contact (.vcf)
                    </button>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white py-3 px-4 rounded-xl font-bold text-[13px] flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
                        <QrCode className="w-[18px] h-[18px]" />
                        View QR Code
                      </button>
                      <button className="flex-1 bg-gray-100 dark:bg-[#1a1a1a] text-gray-900 dark:text-white py-3 px-4 rounded-xl font-bold text-[13px] flex items-center justify-center gap-2 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors">
                        <Share2 className="w-[18px] h-[18px]" />
                        Share Portfolio
                      </button>
                    </div>
                  </div>

                </div>

                {/* Direct Connect Card */}
                <div className="bg-white dark:bg-[#0f0f0f] border border-gray-200/80 dark:border-[#1e1e1e] rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none">
                  <p className="text-[11px] font-bold tracking-[0.1em] text-gray-400 dark:text-[#666] mb-5 uppercase">
                    Direct Connect
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Mail, label: profile.email },
                      { icon: Linkedin, label: profile.linkedin },
                      { icon: Github, label: profile.github },
                      { icon: Facebook, label: profile.facebook },
                      { icon: Instagram, label: profile.instagram },
                      { icon: MessageCircle, label: profile.chat }
                    ].map((link, i) => {
                      const Icon = link.icon;
                      return (
                        <a key={i} href="#" className="flex items-center justify-between p-3 rounded-xl bg-[#fafafa] dark:bg-[#0c0c0c] border border-gray-100 dark:border-[#1e1e1e] hover:border-black/10 dark:hover:border-white/10 hover:bg-gray-100 dark:hover:bg-[#161616] transition-colors group">
                          <div className="flex items-center gap-3">
                            <Icon className="w-4 h-4 text-gray-900 dark:text-white" />
                            <span className="text-[13px] font-semibold text-gray-900 dark:text-white">{link.label}</span>
                          </div>
                          <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                        </a>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
