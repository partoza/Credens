import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { UserCircle, Upload, Save, Globe, Smartphone, Mail, Link as LinkIcon, Plus, Trash2, Fingerprint, MapPin, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

// Interfaces for Country API
interface CountryData {
  country: string;
  cities: string[];
}

export default function EditProfile({ user }: { user?: any }) {
  const [isSaved, setIsSaved] = useState(false);
  const currentUser = user || {
    firstName: "Juan",
    lastName: "Dela Cruz",
    role: "Senior Software Developer",
    accountNo: "CRD-8392-4910",
    initials: "JD"
  };
  const accountNumber = currentUser.accountNo;

  // --- Location API State ---
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [selectedCountry, setSelectedCountry] = useState('Philippines');
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState('Manila');
  const [isLoadingCountries, setIsLoadingCountries] = useState(true);

  // --- Age Calculation State ---
  const [dob, setDob] = useState('1995-05-15');
  const [age, setAge] = useState<number | null>(null);

  // --- Social Media State ---
  const availablePlatforms = [
    { id: 'linkedin', name: 'LinkedIn' },
    { id: 'twitter', name: 'Twitter / X' },
    { id: 'github', name: 'GitHub' },
    { id: 'instagram', name: 'Instagram' },
    { id: 'youtube', name: 'YouTube' },
    { id: 'dribbble', name: 'Dribbble' },
  ];
  const [socialLinks, setSocialLinks] = useState([
    { id: '1', platform: 'linkedin', url: 'https://linkedin.com/in/juandelacruz' },
    { id: '2', platform: 'github', url: 'https://github.com/juandelacruz' }
  ]);

  // --- Effects ---

  // Fetch Countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries');
        const result = await response.json();
        if (result && !result.error) {
          setCountries(result.data);
          // Set initial cities based on default country
          const ph = result.data.find((c: CountryData) => c.country === 'Philippines');
          if (ph) setCities(ph.cities);
        }
      } catch (error) {
        console.error("Failed to fetch countries", error);
      } finally {
        setIsLoadingCountries(false);
      }
    };
    fetchCountries();
  }, []);

  // Update Cities when Country changes
  useEffect(() => {
    if (countries.length > 0) {
      const countryData = countries.find(c => c.country === selectedCountry);
      if (countryData) {
        setCities(countryData.cities);
        // If the current city isn't in the new list, reset it
        if (!countryData.cities.includes(selectedCity)) {
          setSelectedCity(countryData.cities[0] || '');
        }
      } else {
        setCities([]);
        setSelectedCity('');
      }
    }
  }, [selectedCountry, countries]);

  // Calculate Age
  useEffect(() => {
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      setAge(calculatedAge);
    } else {
      setAge(null);
    }
  }, [dob]);


  // --- Handlers ---
  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { id: Date.now().toString(), platform: 'linkedin', url: '' }]);
  };

  const updateSocialLink = (id: string, field: 'platform' | 'url', value: string) => {
    setSocialLinks(socialLinks.map(link => link.id === id ? { ...link, [field]: value } : link));
  };

  const removeSocialLink = (id: string) => {
    setSocialLinks(socialLinks.filter(link => link.id !== id));
  };

    const cardClasses = "bg-white dark:bg-[#0c0c0c] rounded-xl border border-gray-200/80 dark:border-[#1e1e1e] transition-all duration-200 hover:border-gray-300 dark:hover:border-[#2a2a2a] overflow-hidden";

  return (
    <div className="max-w-[1400px] mx-auto p-6 md:p-8 animate-in fade-in duration-500 pb-20">
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-gray-900 dark:text-white mb-3">Edit Profile</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">Manage your personal information, contact details, and account identity.</p>
        </div>
        <button 
          onClick={handleSave}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm ${
            isSaved ? 'bg-green-600 text-white' : 'bg-[#171717] dark:bg-white text-white dark:text-[#0a0a0a] hover:opacity-90 hover:shadow'
          }`}
        >
          <Save className="w-4 h-4" />
          {isSaved ? 'Saved Successfully!' : 'Save Changes'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Main Form) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Basic Information */}
          <div className={cardClasses}>
            <div className="p-5 border-b border-gray-100 dark:border-[#1e1e1e] flex items-center justify-between bg-[#fafafa] dark:bg-[#0c0c0c]">
              <div className="flex items-center gap-3">
                <UserCircle className="w-5 h-5 text-primary" />
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Basic Information</h3>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 pb-8 border-b border-gray-100 dark:border-[#1e1e1e]">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center text-white font-bold text-3xl shadow-inner flex-shrink-0 ring-4 ring-white dark:ring-[#111111]">
                  {currentUser.initials}
                </div>
                <div className="text-center sm:text-left">
                  <button className="flex items-center justify-center gap-2 bg-white dark:bg-[#0c0c0c] border border-gray-200/80 dark:border-[#1e1e1e] text-gray-900 dark:text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-50 dark:hover:bg-[#161616] transition-colors mb-2 shadow-sm w-full sm:w-auto">
                    <Upload className="w-4 h-4" />
                    Upload New Avatar
                  </button>
                  <p className="text-xs text-gray-500">Recommended size: 400x400px (JPG, PNG)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="mb-1.5 block">First Name</Label>
                  <input type="text" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" defaultValue={currentUser.firstName} />
                </div>
                <div>
                  <Label className="mb-1.5 block">Last Name</Label>
                  <input type="text" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" defaultValue={currentUser.lastName} />
                </div>
                <div className="md:col-span-2">
                  <Label className="mb-1.5 block">Professional Title</Label>
                  <input type="text" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" defaultValue={currentUser.role} />
                </div>
                
                {/* Location with API Dropdowns */}
                <div>
                  <Label className="mb-1.5 block"><MapPin className="w-3.5 h-3.5 text-gray-400"/> Country</Label>
                  <select 
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    disabled={isLoadingCountries}
                  >
                    {isLoadingCountries ? (
                      <option>Loading countries...</option>
                    ) : (
                      countries.map((c) => (
                        <option key={c.country} value={c.country}>{c.country}</option>
                      ))
                    )}
                  </select>
                </div>
                <div>
                  <Label className="mb-1.5 block">City / State</Label>
                  <select 
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    disabled={cities.length === 0}
                  >
                    {cities.length === 0 ? (
                      <option>Select country first</option>
                    ) : (
                      cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))
                    )}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <Label className="mb-1.5 block">
                    <Calendar className="w-3.5 h-3.5 text-gray-400"/> 
                    Date of Birth 
                    {age !== null && <span className="ml-2 font-normal text-blue-600 dark:text-blue-400">({age} years old)</span>}
                  </Label>
                  <input 
                    type="date" 
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" 
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>

                <div className="md:col-span-2">
                  <Label className="mb-1.5 block">Bio</Label>
                  <textarea className={`${inputClasses} min-h-[120px] resize-y`} defaultValue="Passionate software developer with a knack for building user-friendly and robust web applications. Always learning and exploring new technologies." />
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className={cardClasses}>
            <div className="p-5 border-b border-gray-100 dark:border-[#1e1e1e] flex items-center justify-between bg-[#fafafa] dark:bg-[#0c0c0c]">
              <div className="flex items-center gap-3">
                <LinkIcon className="w-5 h-5 text-primary" />
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Social Links</h3>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4 mb-6">
                {socialLinks.map((link) => (
                  <div key={link.id} className="flex flex-col sm:flex-row gap-3">
                    <div className="w-full sm:w-1/3">
                      <select 
                        value={link.platform}
                        onChange={(e) => updateSocialLink(link.id, 'platform', e.target.value)}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {availablePlatforms.map(p => (
                          <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="w-full sm:w-2/3 relative">
                      <input 
                        type="url" 
                        placeholder="https://..."
                        value={link.url}
                        onChange={(e) => updateSocialLink(link.id, 'url', e.target.value)}
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      />
                      <button 
                        onClick={() => removeSocialLink(link.id)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={addSocialLink}
                className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors px-2 py-1 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                <Plus className="w-4 h-4" /> Add Social Link
              </button>
            </div>
          </div>

        </div>

        {/* Right Column (Side Cards) */}
        <div className="space-y-8">
          
          {/* Digital Identity / QR Code */}
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-xl overflow-hidden relative border border-gray-800">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
             
             <div className="p-6 relative z-10 flex flex-col items-center">
               <div className="w-full flex items-center gap-2 text-gray-400 mb-6">
                 <Fingerprint className="w-4 h-4" />
                 <span className="text-[11px] font-bold uppercase tracking-widest">Digital Identity</span>
               </div>
               
               <div className="bg-white p-4 rounded-xl shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
                 <QRCodeSVG 
                    value={`https://credens.app/card/${accountNumber}`} 
                    size={160}
                    level="H"
                    includeMargin={false}
                    fgColor="#000000"
                    bgColor="#ffffff"
                 />
               </div>
               
               <div className="text-center w-full">
                 <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-1">Account Number</p>
                 <div className="bg-gray-800/50 rounded-lg py-2.5 px-4 font-mono text-lg text-white border border-gray-700/50 shadow-inner">
                   {accountNumber}
                 </div>
                 <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                   Scan this QR code to instantly view your digital profile on any device.
                 </p>
               </div>
             </div>
          </div>

          {/* Contact Details */}
          <div className={cardClasses}>
            <div className="p-5 border-b border-gray-100 dark:border-[#1e1e1e] flex items-center justify-between bg-[#fafafa] dark:bg-[#0c0c0c]">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Contact Info</h3>
              </div>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <Label className="mb-1.5 block"><Mail className="w-3.5 h-3.5 text-gray-400"/> Email Address</Label>
                <input type="email" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" defaultValue="juan.delacruz@example.com" />
              </div>
              <div>
                <Label className="mb-1.5 block"><Smartphone className="w-3.5 h-3.5 text-gray-400"/> Phone Number</Label>
                <input type="tel" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" defaultValue="+63 912 345 6789" />
              </div>
              <div>
                <Label className="mb-1.5 block"><Globe className="w-3.5 h-3.5 text-gray-400"/> Personal Website</Label>
                <input type="url" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" defaultValue="https://juan.dev" />
              </div>
            </div>
          </div>

        </div>

        </div>
    </div>
  );
}
