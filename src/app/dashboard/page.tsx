"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Archive, 
  Users2, 
  Building2, 
  Cpu, 
  Settings, 
  LogOut, 
  Search, 
  Bell, 
  Download, 
  ChevronRight, 
  Clock, 
  Plus,
  ArrowUpRight,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  Sparkles,
  Link as LinkIcon,
  X
} from 'lucide-react';
import { useAuth } from '@/components/AuthProvider';
import { packageApi, organizationApi } from '@/lib/ckan';
import { toast } from 'react-hot-toast';

// --- Dashboard Sub-components ---

function DashboardPolygons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-50">
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#00A1DE]/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00A859]/5 blur-[100px] rounded-full"></div>
    </div>
  );
}

// --- TABS: Overview ---
function OverviewTab() {
  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
           <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-1px bg-[#00A1DE]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00A1DE]">Daily Operations</span>
           </div>
           <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Your <span className="italic font-serif">Workspace.</span></h2>
        </div>
        <div className="flex gap-4">
           <button className="px-8 py-4 bg-white border border-slate-100 rounded-2xl font-bold text-xs uppercase tracking-widest text-slate-600 hover:text-slate-900 transition-all shadow-sm">Export Report</button>
           <button className="px-8 py-4 bg-[#00A1DE] text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#00A1DE]/20 hover:scale-[1.03] transition-all">Quick Publish</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         {[
           { label: 'Published Datasets', value: '12', trend: '+2 this month', icon: Globe2, color: '#00A1DE' },
           { label: 'Total Downloads', value: '1,452', trend: 'High velocity', icon: Download, color: '#00A859' },
           { label: 'API Hits (24h)', value: '8.2k', trend: 'Stable latency', icon: Cpu, color: '#FAD201' },
           { label: 'Followers', value: '64', trend: 'Growing community', icon: Users2, color: '#00A1DE' },
         ].map((stat, i) => (
            <motion.div 
               key={stat.label}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="p-10 bg-white/70 backdrop-blur-xl border border-white/20 rounded-[3rem] shadow-xl shadow-slate-900/[0.02] group hover:scale-[1.02] transition-all cursor-pointer"
            >
               <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-8 shadow-inner" style={{ backgroundColor: `${stat.color}15` }}>
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
               </div>
               <p className="text-4xl font-black text-slate-900 tracking-tighter mb-1">{stat.value}</p>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{stat.label}</p>
               <span className="text-[9px] font-bold text-[#00A859] bg-[#00A859]/10 px-3 py-1 rounded-full uppercase tracking-widest">{stat.trend}</span>
            </motion.div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 bg-white rounded-[3rem] p-12 shadow-xl shadow-slate-900/[0.02] border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A1DE]/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="flex items-center justify-between mb-12 relative z-10">
               <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em]">Activity Stream</h3>
               <Link href="#" className="text-[10px] font-black uppercase text-[#00A1DE] tracking-widest hover:underline transition-all">View All logs</Link>
            </div>
            <div className="space-y-8 relative z-10">
               {[
                 { action: 'Updated metadata', target: 'Health Logistics 2024', time: '2h ago', icon: Clock },
                 { action: 'New version published', target: 'Agri-Stats Quarterly', time: '5h ago', icon: Globe2 },
                 { action: 'API Token generated', target: 'Internal Scraper', time: '1d ago', icon: ShieldCheck },
               ].map((log, i) => (
                 <div key={i} className="flex gap-6 items-start group">
                    <div className="mt-1 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#00A1DE]/10 group-hover:text-[#00A1DE] transition-all">
                       <log.icon className="w-5 h-5" />
                    </div>
                    <div>
                       <p className="text-sm font-black text-slate-800 tracking-tight">{log.action}</p>
                       <p className="text-xs font-medium text-slate-400">{log.target}</p>
                       <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-2 block">{log.time}</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
         
         <div className="bg-slate-900 rounded-[3rem] p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A1DE]/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-12 relative z-10">Health Check</h3>
            <div className="space-y-8 relative z-10">
               <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                  <p className="text-xs font-black text-white mb-2 uppercase tracking-widest">Storage Efficiency</p>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                     <motion.div initial={{ width: 0 }} animate={{ width: '64%' }} transition={{ duration: 1 }} className="h-full bg-[#00A1DE] rounded-full" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 mt-2 text-right">0.8 TB / 1.2 TB</p>
               </div>
               <div className="flex items-center gap-4 p-6 bg-[#00A859]/10 border border-[#00A859]/20 rounded-3xl">
                  <CheckCircle2 className="w-6 h-6 text-[#00A859]" />
                  <div>
                     <p className="text-xs font-black text-[#00A859] uppercase tracking-widest">Systems Nominal</p>
                     <p className="text-[10px] font-bold text-slate-400 mt-1">Global latency: 42ms</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

// --- TABS: API Hub ---
function ApiHubTab() {
  const [keys, setKeys] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [newTokenName, setNewTokenName] = useState('');
  const [createdToken, setCreatedToken] = useState<string | null>(null);

  const fetchKeys = async () => {
    try {
      const res = await fetch('/api/user/get_api_keys');
      const data = await res.json();
      setKeys(data.keys || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKeys();
  }, []);

  const handleCreateToken = async () => {
    try {
      setCreating(true);
      const res = await fetch('/api/user/generate_api_key', {
         method: 'POST',
         body: JSON.stringify({ name: newTokenName }),
         headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      if (data.apikey) {
         setCreatedToken(data.apikey);
         fetchKeys();
      }
    } catch (err) {
      toast.error('Failed to generate key');
    } finally {
      setCreating(false);
    }
  };

  const handleRevoke = async (kId: string) => {
    if (!confirm('Are you sure you want to revoke this secure token?')) return;
    try {
       await fetch('/api/user/revoke_api_key', {
          method: 'POST',
          body: JSON.stringify({ key_id: kId }),
          headers: { 'Content-Type': 'application/json' }
       });
       toast.success('Token revoked');
       fetchKeys();
    } catch (err) {
       toast.error('Revoke failed');
    }
  };

  return (
    <div className="space-y-12">
      <div className="max-w-2xl">
         <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-6">API Command <span className="text-[#00A1DE]">Center.</span></h2>
         <p className="text-lg text-slate-500 font-bold leading-relaxed">Securely manage authenticated tokens for programmatic access to the Rwanda Open Data repository.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
         <div className="lg:col-span-2 space-y-8">
            <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-900/[0.02]">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Active Personal Tokens</h3>
                  <div className="px-4 py-1.5 bg-[#00A1DE]/10 text-[#00A1DE] rounded-full text-[10px] font-black uppercase tracking-widest">{keys.length} Active</div>
               </div>
               
               <div className="space-y-4">
                  {loading ? (
                    <div className="animate-pulse space-y-4">
                       <div className="h-20 bg-slate-50 rounded-2xl w-full"></div>
                       <div className="h-20 bg-slate-50 rounded-2xl w-full"></div>
                    </div>
                  ) : keys.length === 0 ? (
                    <div className="text-center py-10 opacity-40 italic font-bold text-sm">No active tokens found.</div>
                  ) : (
                    keys.map((k) => (
                      <div key={k.id} className="flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-[1.5rem] group hover:bg-white hover:shadow-xl transition-all duration-500">
                         <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#00A1DE] group-hover:scale-110 transition-transform">
                               <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                               <p className="text-sm font-black text-slate-800 tracking-tight">{k.name || 'Personal Token'}</p>
                               <p className="text-[10px] font-bold text-slate-400 tracking-widest">{k.created_at || 'Recently Created'}</p>
                            </div>
                         </div>
                         <button onClick={() => handleRevoke(k.id)} className="px-6 py-2.5 rounded-xl bg-rose-50 text-rose-500 text-[10px] font-black uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all shadow-sm">Revoke</button>
                      </div>
                    ))
                  )}
               </div>
            </div>
         </div>

         <div className="space-y-8">
           <div className="p-10 bg-slate-900 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A1DE]/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8 relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FAD201]" /> Provision Token
              </h3>

              {createdToken ? (
                <div className="space-y-6 relative z-10">
                   <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                      <p className="text-[9px] font-black text-[#00A1DE] uppercase tracking-[0.3em] mb-4">Your Secret Key (Copy it now!)</p>
                      <p className="text-lg font-mono font-black text-white break-all select-all leading-relaxed">{createdToken}</p>
                   </div>
                   <p className="text-[9px] text-amber-500 font-bold uppercase tracking-widest text-center mt-6">Warning: This will never be shown again.</p>
                   <button onClick={() => setCreatedToken(null)} className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#00A1DE] hover:text-white transition-all duration-500">I have Copy/Pasted it</button>
                </div>
              ) : (
                <div className="space-y-6 relative z-10">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Purpose / Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Health Analytics App"
                        value={newTokenName}
                        onChange={(e) => setNewTokenName(e.target.value)}
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold placeholder:text-slate-700 focus:outline-none focus:border-[#0089bd] transition-all"
                      />
                   </div>
                   <button 
                     disabled={!newTokenName || creating}
                     onClick={handleCreateToken}
                     className="w-full py-4 bg-[#00A1DE] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-[#00A1DE]/20 hover:scale-[1.03] active:scale-95 disabled:bg-slate-800 disabled:text-slate-600 transition-all"
                   >
                     {creating ? 'Authenticating...' : 'Generate Secure Key'}
                   </button>
                </div>
              )}
           </div>

           <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-xl shadow-slate-900/[0.02] group">
              <h4 className="text-xs font-black text-slate-900 mb-2">Integration Guide</h4>
              <p className="text-xs text-slate-400 font-bold leading-relaxed mb-8">Access our 1,450+ datasets directly via Python, R, or JS using Header Bearer attributes.</p>
              <button className="flex items-center gap-2 text-[10px] font-black uppercase text-[#00A1DE] tracking-widest hover:underline transition-all">
                API Docs Explorer <ArrowUpRight className="w-4 h-4" />
              </button>
           </div>
         </div>
      </div>
    </div>
  );
}

// --- MAIN DASHBOARD COMPONENT ---
function DashboardContent() {
  const searchParams = useSearchParams();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      setActiveTab(tabParam.charAt(0).toUpperCase() + tabParam.slice(1));
    }
  }, [searchParams]);

  const menuItems = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'My Datasets', icon: Archive },
    { name: 'Following', icon: Users2 },
    { name: 'Agency Explorer', icon: Building2 },
    { name: 'API Hub', icon: Cpu },
  ];

  return (
    <div className="flex h-screen bg-slate-50 relative overflow-hidden">
      
      <DashboardPolygons />

      {/* Sidebar */}
      <aside className="w-[280px] bg-white border-r border-slate-200/60 hidden lg:flex flex-col relative z-20 shadow-[10px_0_50px_rgba(0,0,0,0.02)]">
         <div className="p-10 pb-12">
            <Link href="/" className="flex items-center gap-3 group">
               <img src="/logo.png" alt="NISR logo" className="h-8 w-auto object-contain group-hover:scale-110 transition-transform" />
               <div className="flex flex-col">
                  <span className="font-black text-sm text-slate-800 tracking-tighter leading-none">NISR DATA</span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Workspace</span>
               </div>
            </Link>
         </div>

         <nav className="flex-1 px-6 space-y-2 overflow-y-auto">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300 relative group ${
                  activeTab === item.name 
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/10 scale-[1.02]' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <item.icon className={`w-5 h-5 transition-colors ${activeTab === item.name ? 'text-[#00A1DE]' : 'group-hover:text-[#00A1DE]'}`} />
                {item.name}
                {activeTab === item.name && (
                  <div className="absolute top-0 right-0 w-8 h-8 bg-[#00A1DE]/20 blur-xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                )}
              </button>
            ))}
         </nav>

         <div className="p-8 border-t border-slate-100">
            <button onClick={logout} className="w-full flex items-center gap-4 px-6 py-4 rounded-xl font-bold text-sm text-rose-500 hover:bg-rose-50 transition-all group">
               <LogOut className="w-5 h-5 text-rose-300 group-hover:text-rose-500" />
               Sign Out
            </button>
         </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative backdrop-blur-sm shadow-[inset_10px_0_50px_rgba(0,0,0,0.01)]">
         
         <header className="h-[100px] bg-white/60 backdrop-blur-3xl border-b border-slate-200/50 px-12 flex items-center justify-between sticky top-0 z-30">
            <div className="flex-1 max-w-xl">
               <div className="relative group">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#00A1DE] transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search your datasets..." 
                    className="w-full pl-12 pr-6 py-3.5 bg-white/80 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#00A1DE]/5 focus:border-[#0089bd] transition-all font-bold text-xs"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-50 px-2 py-1 rounded text-[9px] font-black text-slate-300 border border-slate-100 pointer-events-none">⌘K</div>
               </div>
            </div>
            
            <div className="flex items-center gap-8">
               <button className="relative p-3.5 rounded-2xl bg-white border border-slate-100 hover:bg-slate-50 transition-all group">
                  <Bell className="w-5 h-5 text-slate-400 group-hover:rotate-12 transition-transform" />
                  <span className="absolute top-0 right-0 w-3 h-3 bg-[#00A859] border-2 border-white rounded-full translate-x-1 -translate-y-1"></span>
               </button>
               <div className="flex items-center gap-4 pl-4 border-l border-slate-100 cursor-pointer group" onClick={() => setActiveTab('Settings')}>
                  <div className="text-right hidden sm:block">
                     <p className="text-xs font-black text-slate-900 leading-tight">{user?.name || 'User'}</p>
                     <p className="text-[9px] font-bold text-[#00A1DE] uppercase tracking-[0.2em] opacity-80 mt-1 uppercase">Workspace Control</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black transition-transform group-hover:scale-105 duration-500 shadow-xl shadow-slate-900/10 border-2 border-white">
                     {user?.name?.[0].toUpperCase() || 'U'}
                  </div>
               </div>
            </div>
         </header>

         <div className="flex-1 p-12 lg:p-16 overflow-y-auto custom-scrollbar relative">
            <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                 className="h-full"
               >
                  {activeTab === 'Overview' && <OverviewTab />}
                  {activeTab === 'API Hub' && <ApiHubTab />}
                  {activeTab !== 'Overview' && activeTab !== 'API Hub' && (
                    <div className="h-[600px] flex flex-col items-center justify-center text-center p-20 bg-white/40 backdrop-blur-md border border-slate-200 rounded-[4rem] shadow-xl shadow-slate-900/10">
                       <div className="w-24 h-24 rounded-[3rem] bg-white shadow-xl flex items-center justify-center mb-10 group overflow-hidden border border-slate-100">
                          <Plus className="w-10 h-10 text-slate-200 group-hover:text-[#00A1DE] group-hover:rotate-90 transition-all duration-700" />
                       </div>
                       <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">{activeTab} Logic</h2>
                       <p className="text-slate-500 font-bold max-w-sm leading-relaxed">Designing the premium {activeTab} experience for the Republic of Rwanda.</p>
                       <div className="mt-12 flex gap-4">
                          <div className="w-3 h-3 rounded-full bg-[#00A1DE]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#00A859] opacity-40"></div>
                          <div className="w-3 h-3 rounded-full bg-[#FAD201] opacity-40"></div>
                       </div>
                    </div>
                  )}
               </motion.div>
            </AnimatePresence>
         </div>

      </main>

      {/* Global CSS Inject for Scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 20px; }
      `}} />
    </div>
  );
}

// Default export uses the Page wrapper to ensure Suspense layout provided by layout.tsx is consistent, 
// though the actual Suspense is handled by src/app/dashboard/layout.tsx
export default function DashboardPage() {
  return <DashboardContent />;
}
