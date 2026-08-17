import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from 'react';
import { 
  Plus, Trash2, Edit2, LayoutDashboard, Award, Briefcase, 
  GraduationCap, Star, Check, X, ExternalLink, ShieldCheck, 
  Clock, Zap
} from 'lucide-react';

type Project = { id: string, title: string, description: string, url: string };
type Certificate = { id: string, title: string, issuer: string, year: string };
type Experience = { id: string, role: string, company: string, period: string, description: string };
type Education = { id: string, degree: string, school: string, year: string };
type Other = { id: string, name: string, type: 'skill' | 'award' };

export default function ManageCredentials() {
  const inputClasses = "flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50";
  const [activeSection, setActiveSection] = useState<'projects' | 'certificates' | 'experience' | 'education' | 'other'>('projects');

  // --- State ---
  const [projects, setProjects] = useState<Project[]>([
    { id: '1', title: 'UniMind App', description: 'Peer-to-peer study mobile application built with React Native.', url: 'https://unimind.app' },
    { id: '2', title: 'E-Commerce Platform', description: 'Next.js based online store with Stripe integration and CMS.', url: 'https://demo-store.com' },
    { id: '3', title: 'AI Content Generator', description: 'OpenAI powered SaaS for generating marketing copy.', url: 'https://ai-copy.app' }
  ]);
  const [certificates, setCertificates] = useState<Certificate[]>([
    { id: '1', title: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2024' },
    { id: '2', title: 'Google UX Design Professional', issuer: 'Coursera', year: '2023' }
  ]);
  const [experiences, setExperiences] = useState<Experience[]>([
    { id: '1', role: 'Senior Software Engineer', company: 'Tech Innovators Inc.', period: '2023 - Present', description: 'Led frontend team in building scalable React applications and design systems.' },
    { id: '2', role: 'Web Developer', company: 'Creative Solutions', period: '2020 - 2023', description: 'Developed custom web applications and e-commerce platforms for enterprise clients.' }
  ]);
  const [educations, setEducations] = useState<Education[]>([
    { id: '1', degree: 'BS Information Technology', school: 'Tech University', year: '2016 - 2020' }
  ]);
  const [others, setOthers] = useState<Other[]>([
    { id: '1', name: 'React.js', type: 'skill' },
    { id: '2', name: 'TypeScript', type: 'skill' },
    { id: '3', name: 'Node.js', type: 'skill' },
    { id: '4', name: 'Figma', type: 'skill' },
    { id: '5', name: 'Best UI Design - Awwwards', type: 'award' }
  ]);

  // --- UI Control State ---
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});

  const sections = [
    { id: 'projects', label: 'Projects', icon: LayoutDashboard, count: projects.length },
    { id: 'experience', label: 'Experience', icon: Briefcase, count: experiences.length },
    { id: 'certificates', label: 'Certificates', icon: Award, count: certificates.length },
    { id: 'education', label: 'Education', icon: GraduationCap, count: educations.length },
    { id: 'other', label: 'Skills & Awards', icon: Star, count: others.length },
  ] as const;

  // --- Handlers ---
  const startAdd = () => { setFormData({}); setEditingId(null); setIsAdding(true); };
  const startEdit = (item: any) => { setFormData({ ...item }); setIsAdding(false); setEditingId(item.id); };
  const cancelForm = () => { setIsAdding(false); setEditingId(null); setFormData({}); };

  const handleSave = () => {
    const newItem = { ...formData, id: formData.id || Date.now().toString() };
    switch (activeSection) {
      case 'projects': editingId ? setProjects(projects.map(p => p.id === editingId ? newItem : p)) : setProjects([newItem, ...projects]); break;
      case 'certificates': editingId ? setCertificates(certificates.map(c => c.id === editingId ? newItem : c)) : setCertificates([newItem, ...certificates]); break;
      case 'experience': editingId ? setExperiences(experiences.map(e => e.id === editingId ? newItem : e)) : setExperiences([newItem, ...experiences]); break;
      case 'education': editingId ? setEducations(educations.map(e => e.id === editingId ? newItem : e)) : setEducations([newItem, ...educations]); break;
      case 'other': editingId ? setOthers(others.map(o => o.id === editingId ? newItem : o)) : setOthers([{ ...newItem, type: newItem.type || 'skill' }, ...others]); break;
    }
    cancelForm();
  };

  const handleDelete = (id: string, section: string) => {
    switch (section) {
      case 'projects': setProjects(projects.filter(p => p.id !== id)); break;
      case 'certificates': setCertificates(certificates.filter(c => c.id !== id)); break;
      case 'experience': setExperiences(experiences.filter(e => e.id !== id)); break;
      case 'education': setEducations(educations.filter(e => e.id !== id)); break;
      case 'other': setOthers(others.filter(o => o.id !== id)); break;
    }
  };

  

  return (
    <div className="max-w-[1400px] mx-auto p-6 md:p-8 animate-in fade-in duration-500 pb-24">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            Credentials Portfolio
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">Curate your professional journey, projects, and achievements to display on your digital card.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* --- Left Sidebar --- */}
        <div className="w-full lg:w-72 flex-shrink-0 space-y-6">
          
          {/* Navigation Menu */}
          <Card className="p-2 transition-all duration-200 flex flex-col gap-1 relative overflow-hidden">
            {sections.map(section => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => { setActiveSection(section.id); cancelForm(); }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-primary text-primary-foreground shadow-md scale-[1.02]'
                      : 'text-gray-600 dark:text-[#a1a1a1] hover:bg-gray-50 dark:hover:bg-[#161616] hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white/20 dark:bg-black/10' : 'bg-gray-100 dark:bg-[#1a1a1a]'}`}>
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white dark:text-black' : 'text-gray-500 dark:text-gray-400'}`} />
                    </div>
                    {section.label}
                  </div>
                  <span className={`text-[12px] font-bold px-2 py-0.5 rounded-full ${isActive ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-gray-100 dark:bg-[#1a1a1a] text-gray-500'}`}>
                    {section.count}
                  </span>
                </button>
              );
            })}
          </Card>

          {/* Profile Strength Widget - Monochrome */}
          <Card className="p-6 relative overflow-hidden transition-all duration-200">
             <h4 className="text-gray-900 dark:text-white font-bold mb-4 flex items-center gap-2">
               <ShieldCheck className="w-4 h-4 text-gray-900 dark:text-white" />
               Profile Strength
             </h4>
             <div className="w-full h-2 bg-gray-100 dark:bg-[#1a1a1a] rounded-full mb-3 overflow-hidden">
               <div className="h-full bg-[#171717] dark:bg-white rounded-full w-[85%] relative"></div>
             </div>
             <p className="text-[12px] text-gray-500 dark:text-[#a1a1a1]">Your portfolio is looking great! Add more projects to reach 100%.</p>
          </Card>
        </div>

        {/* --- Main Content Area --- */}
        <div className="flex-1">
          <Card className="transition-all duration-200 min-h-[600px] flex flex-col relative overflow-hidden">
            
            {/* Header */}
            <div className="px-8 py-6 border-b border-gray-200/80 dark:border-[#1e1e1e] flex justify-between items-center bg-white/50 dark:bg-[#111111]/50 backdrop-blur-md sticky top-0 z-10">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white capitalize flex items-center gap-2">
                  {activeSection === 'other' ? 'Skills & Awards' : activeSection}
                </h3>
                <p className="text-[13px] text-gray-500 mt-1">Manage and organize your entries.</p>
              </div>
              {!isAdding && !editingId && (
                <Button onClick={startAdd}><Plus className="w-4 h-4 mr-2" /> Add New Entry</Button>
              )}
            </div>
            
            <div className="p-8 flex-1">
              
              {/* --- The Form (Add or Edit) --- */}
              {(isAdding || editingId) && (
                <div className="mb-8 p-6 bg-white dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#1e1e1e] rounded-xl transition-all duration-200 hover:border-gray-300 dark:hover:border-[#2a2a2a] animate-in slide-in-from-top-4 duration-300 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-[16px] font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Edit2 className="w-4 h-4" />
                      {isAdding ? 'Create New Entry' : 'Update Entry'}
                    </h4>
                    <button onClick={cancelForm} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#161616] text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"><X className="w-4 h-4" /></button>
                  </div>
                  
                  <div className="space-y-5">
                    {activeSection === 'projects' && (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <input className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Project Title" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} />
                          <input className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Project URL (https://...)" value={formData.url || ''} onChange={e => setFormData({...formData, url: e.target.value})} />
                        </div>
                        <textarea className={`${inputClasses} h-28 resize-none`} placeholder="Detailed description of the project, tech stack used, and your role..." value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} />
                      </>
                    )}

                    {activeSection === 'experience' && (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <input className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Job Title / Role" value={formData.role || ''} onChange={e => setFormData({...formData, role: e.target.value})} />
                          <input className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Company Name" value={formData.company || ''} onChange={e => setFormData({...formData, company: e.target.value})} />
                        </div>
                        <input className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Time Period (e.g. Jan 2020 - Present)" value={formData.period || ''} onChange={e => setFormData({...formData, period: e.target.value})} />
                        <textarea className={`${inputClasses} h-28 resize-none`} placeholder="Describe your responsibilities and major achievements..." value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} />
                      </>
                    )}

                    {activeSection === 'certificates' && (
                      <>
                        <input className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Certificate Name" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <input className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Issuing Organization" value={formData.issuer || ''} onChange={e => setFormData({...formData, issuer: e.target.value})} />
                          <input className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Year Issued (e.g. 2024)" value={formData.year || ''} onChange={e => setFormData({...formData, year: e.target.value})} />
                        </div>
                      </>
                    )}

                    {activeSection === 'education' && (
                      <>
                        <input className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Degree / Program" value={formData.degree || ''} onChange={e => setFormData({...formData, degree: e.target.value})} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <input className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="School / University" value={formData.school || ''} onChange={e => setFormData({...formData, school: e.target.value})} />
                          <input className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="Years Attended (e.g. 2016 - 2020)" value={formData.year || ''} onChange={e => setFormData({...formData, year: e.target.value})} />
                        </div>
                      </>
                    )}

                    {activeSection === 'other' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <select className={`${inputClasses} md:col-span-1`} value={formData.type || 'skill'} onChange={e => setFormData({...formData, type: e.target.value})}>
                          <option value="skill">Skill / Technology</option>
                          <option value="award">Award / Honor</option>
                        </select>
                        <input className={`${inputClasses} md:col-span-2`} placeholder="Name (e.g. React.js, Top Developer Award)" value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} />
                      </div>
                    )}
                    
                    <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-white/5">
                      <Button variant="ghost" onClick={cancelForm}>Cancel</Button>
                      <Button onClick={handleSave}><Check className="w-4 h-4 mr-2" /> Save Entry</Button>
                    </div>
                  </div>
                </div>
              )}

              {/* --- Lists --- */}
              <div className="space-y-6">
                
                {/* Projects Grid View */}
                {activeSection === 'projects' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((proj) => (
                      <div key={proj.id} className={`group relative flex flex-col p-6 rounded-xl bg-white dark:bg-[#0c0c0c] border transition-all duration-200 ${editingId === proj.id ? 'opacity-50 pointer-events-none' : 'border-gray-200/80 dark:border-[#1e1e1e] hover:border-gray-300 dark:hover:border-[#2a2a2a]'}`}>
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-10 h-10 rounded-xl bg-[#fafafa] dark:bg-[#0c0c0c] flex items-center justify-center text-gray-900 dark:text-white border border-gray-200/80 dark:border-[#2a2a2a]">
                            <LayoutDashboard className="w-4 h-4" />
                          </div>
                          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-black/90 backdrop-blur-sm p-1 rounded-lg border border-gray-100 dark:border-[#2a2a2a] shadow-sm absolute top-4 right-4">
                            <Button variant="ghost" size="icon" onClick={() => startEdit(proj)} className="h-8 w-8 text-gray-500 hover:text-foreground"><Edit2 className="w-3.5 h-3.5" /></Button>
                            <Button variant="ghost" size="icon" onClick={() => handleDelete(proj.id, 'projects')} className="h-8 w-8 text-gray-500 hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></Button>
                          </div>
                        </div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1.5">{proj.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">{proj.description}</p>
                        <a href={proj.url} className="flex items-center gap-1.5 text-[12px] font-bold text-gray-900 dark:text-white hover:opacity-70 w-fit">
                          <ExternalLink className="w-3.5 h-3.5" /> View Project
                        </a>
                      </div>
                    ))}
                  </div>
                )}

                {/* Experience Timeline View */}
                {activeSection === 'experience' && (
                  <div className="relative border-l border-gray-200/80 dark:border-[#2a2a2a] ml-4 space-y-6 py-4">
                    {experiences.map((exp) => (
                      <div key={exp.id} className={`relative pl-8 transition-all ${editingId === exp.id ? 'opacity-50 pointer-events-none' : 'group'}`}>
                        <div className="absolute w-3 h-3 bg-white dark:bg-[#0a0a0a] border-2 border-gray-400 dark:border-gray-500 rounded-full -left-[6px] top-2 group-hover:border-black dark:group-hover:border-white transition-colors"></div>
                        <div className="bg-white dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#1e1e1e] p-6 rounded-xl hover:border-gray-300 dark:hover:border-[#2a2a2a] transition-all duration-200 relative">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white tracking-tight">{exp.role}</span>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button variant="ghost" size="icon" onClick={() => startEdit(exp)} className="h-8 w-8 text-gray-400 hover:text-foreground"><Edit2 className="w-4 h-4" /></Button>
                              <Button variant="ghost" size="icon" onClick={() => handleDelete(exp.id, 'experience')} className="h-8 w-8 text-gray-400 hover:text-destructive"><Trash2 className="w-4 h-4" /></Button>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 mb-4 flex-wrap">
                            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> {exp.company}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-[#444444]"></span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {exp.period}</span>
                          </div>
                          <p className="text-[13px] text-gray-600 dark:text-[#a1a1a1] leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Certificates Grid View */}
                {activeSection === 'certificates' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((cert) => (
                      <div key={cert.id} className={`group relative flex items-center gap-4 p-5 rounded-xl bg-white dark:bg-[#0c0c0c] border transition-all duration-200 ${editingId === cert.id ? 'opacity-50 pointer-events-none' : 'border-gray-200/80 dark:border-[#1e1e1e] hover:border-gray-300 dark:hover:border-[#2a2a2a]'}`}>
                        <div className="w-10 h-10 rounded-xl bg-[#fafafa] dark:bg-[#0c0c0c] flex items-center justify-center text-gray-900 dark:text-white border border-gray-200/80 dark:border-[#2a2a2a] flex-shrink-0">
                          <Award className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate mb-0.5 tracking-tight">{cert.title}</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{cert.issuer} • <span className="text-gray-400">{cert.year}</span></p>
                        </div>
                        <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="ghost" size="icon" onClick={() => startEdit(cert)} className="h-8 w-8 text-gray-400 hover:text-foreground"><Edit2 className="w-3.5 h-3.5" /></Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDelete(cert.id, 'certificates')} className="h-8 w-8 text-gray-400 hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Education List View */}
                {activeSection === 'education' && (
                  <div className="space-y-4">
                    {educations.map((edu) => (
                      <div key={edu.id} className={`group relative flex items-center gap-5 p-6 rounded-xl bg-white dark:bg-[#0c0c0c] border transition-all duration-200 ${editingId === edu.id ? 'opacity-50 pointer-events-none' : 'border-gray-200/80 dark:border-[#1e1e1e] hover:border-gray-300 dark:hover:border-[#2a2a2a]'}`}>
                        <div className="w-12 h-12 rounded-xl bg-[#fafafa] dark:bg-[#0c0c0c] flex items-center justify-center text-gray-900 dark:text-white border border-gray-200/80 dark:border-[#2a2a2a] flex-shrink-0">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1 tracking-tight">{edu.degree}</h4>
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-xs text-gray-500 dark:text-gray-400">{edu.school}</span>
                            <span className="text-[11px] font-medium text-gray-500 bg-gray-100 dark:bg-[#1a1a1a] px-2 py-0.5 rounded-md">{edu.year}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-50 dark:bg-[#1a1a1a] p-1 rounded-lg border border-gray-200/80 dark:border-[#2a2a2a]">
                          <Button variant="ghost" size="icon" onClick={() => startEdit(edu)} className="h-8 w-8 text-gray-500 hover:text-foreground"><Edit2 className="w-4 h-4" /></Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDelete(edu.id, 'education')} className="h-8 w-8 text-gray-500 hover:text-destructive"><Trash2 className="w-4 h-4" /></Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Other (Skills & Awards) Bento Grid */}
                {activeSection === 'other' && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {others.map((item) => (
                      <div key={item.id} className={`group relative flex flex-col items-center justify-center text-center p-6 rounded-xl bg-white dark:bg-[#0c0c0c] border transition-all duration-200 ${editingId === item.id ? 'opacity-50 pointer-events-none' : 'border-gray-200/80 dark:border-[#1e1e1e] hover:border-gray-300 dark:hover:border-[#2a2a2a]'}`}>
                        <div className="w-10 h-10 rounded-xl bg-[#fafafa] dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#2a2a2a] flex items-center justify-center text-gray-900 dark:text-white mb-3">
                           {item.type === 'skill' ? <Zap className="w-4 h-4" /> : <Star className="w-4 h-4" />}
                        </div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white leading-tight tracking-tight">{item.name}</span>
                        <span className="text-[11px] font-bold uppercase text-gray-400 tracking-wider mt-2">{item.type}</span>
                        
                        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="ghost" size="icon" onClick={() => startEdit(item)} className="h-8 w-8 text-gray-400 hover:text-foreground"><Edit2 className="w-3.5 h-3.5" /></Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id, 'other')} className="h-8 w-8 text-gray-400 hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Empty State */}
                {!isAdding && (
                  (activeSection === 'projects' && projects.length === 0) ||
                  (activeSection === 'certificates' && certificates.length === 0) ||
                  (activeSection === 'experience' && experiences.length === 0) ||
                  (activeSection === 'education' && educations.length === 0) ||
                  (activeSection === 'other' && others.length === 0)
                ) && (
                  <div className="text-center py-24 px-6 border border-dashed border-gray-300 dark:border-[#2a2a2a] rounded-2xl bg-gray-50/50 dark:bg-[#0c0c0c]">
                    <div className="w-12 h-12 bg-white dark:bg-white/5 border border-gray-200/80 dark:border-[#2a2a2a] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                      <LayoutDashboard className="w-5 h-5 text-gray-400" />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">No entries found</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">Get started by creating your first entry in this section.</p>
                    <Button onClick={startAdd}>Add New Entry</Button>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
