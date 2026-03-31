"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Search, 
  ArrowUpRight, 
  Globe2, 
  ShieldCheck, 
  Users2, 
  ChevronRight,
  Filter,
  ExternalLink,
  MapPin,
  Mail,
  Building
} from 'lucide-react';
import { organizationApi } from '@/lib/ckan';

export default function AgenciesPage() {
  const [agencies, setAgencies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    organizationApi.list().then(data => {
      setAgencies(data);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  const filtered = agencies.filter(a => 
    a.display_name?.toLowerCase().includes(search.toLowerCase()) ||
    a.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pb-40">
      
      {/* Header Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A1DE]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/5 rounded-full border border-slate-900/10 text-slate-500 mb-8 font-black text-[10px] uppercase tracking-[0.2em]">
                 <Building2 className="w-3.5 h-3.5 text-[#00A1DE]" /> Institutional Governance
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-10">
                Agency <span className="text-[#00A859]">Explorer.</span>
              </h1>
              <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed">
                 Discover the official government institutions, ministries, and non-profits contributing to the Republic of Rwanda's open data ecosystem.
              </p>
           </motion.div>
        </div>
      </section>

      {/* Control Bar */}
      <section className="sticky top-32 z-40 px-6 -mt-12 mb-20 lg:mb-32">
         <div className="max-w-4xl mx-auto p-6 bg-white/60 backdrop-blur-3xl border border-white/60 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center gap-6">
            <div className="relative flex-1 group">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-[#00A1DE] transition-colors" />
               <input 
                 type="text" 
                 placeholder="Search across 48+ agencies..." 
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 className="w-full pl-14 pr-6 py-4 bg-white/80 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#00A1DE]/5 focus:border-[#0089bd] transition-all font-bold text-sm text-slate-800"
               />
            </div>
            <div className="flex gap-4">
               <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:scale-[1.05] transition-all flex items-center gap-2 shadow-xl shadow-slate-900/20">
                  <Filter className="w-4 h-4" /> Filter
               </button>
            </div>
         </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 relative z-10">
         {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 animate-pulse">
               {[1,2,3,4,5,6].map(i => (
                 <div key={i} className="h-96 bg-white/40 border border-slate-100 rounded-[4rem]"></div>
               ))}
            </div>
         ) : filtered.length === 0 ? (
            <div className="text-center py-40 bg-white/40 border border-slate-100 rounded-[5rem]">
               <Building className="w-20 h-20 text-slate-200 mx-auto mb-10" />
               <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4">No agencies found</h3>
               <p className="text-slate-400 font-bold max-w-sm mx-auto">We couldn't find any agencies matching "{search}". Try a different search term or check all agencies.</p>
            </div>
         ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {filtered.map((agency, i) => (
                  <motion.div 
                     key={agency.id}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ delay: i * 0.05 }}
                     viewport={{ once: true }}
                     className="group p-10 bg-white border border-slate-100 rounded-[4rem] hover:border-[#00A1DE]/30 hover:shadow-2xl hover:shadow-[#00A1DE]/10 transition-all duration-700 cursor-pointer overflow-hidden relative"
                  >
                     {/* Decorative background element */}
                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A1DE]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                     <div className="flex items-start justify-between mb-12">
                        <div className="w-20 h-20 p-4 bg-white shadow-xl rounded-full flex items-center justify-center border border-slate-50 group-hover:scale-110 transition-transform duration-700">
                           <img 
                              src={agency.image_display_url || '/logo.png'} 
                              alt={agency.display_name} 
                              className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700" 
                           />
                        </div>
                        <div className="flex gap-2">
                           <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#0089bd] hover:text-white transition-all transform hover:scale-110">
                              <ExternalLink className="w-4 h-4" />
                           </div>
                        </div>
                     </div>

                     <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-[#00A1DE] transition-colors line-clamp-2">{agency.display_name}</h3>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">{agency.package_count || 0} VERIFIED DATASETS</p>
                     
                     <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex gap-2">
                           <span className="w-2 h-2 rounded-full bg-[#00A1DE]"></span>
                           <span className="w-2 h-2 rounded-full bg-[#00A859]/30"></span>
                           <span className="w-2 h-2 rounded-full bg-[#FAD201]/30"></span>
                        </div>
                        <Link href={`/agencies/${agency.name}`} className="flex items-center gap-2 text-[10px] font-black uppercase text-[#00A1DE] tracking-widest hover:underline">
                           View Profile <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                     </div>
                  </motion.div>
               ))}
            </div>
         )}
      </section>

    </div>
  );
}
