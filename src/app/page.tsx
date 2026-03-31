"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Search, 
  ChevronRight, 
  ArrowUpRight, 
  Globe2, 
  ShieldCheck, 
  Users2, 
  Cpu, 
  BarChart3,
  Database,
  Users,
  Building,
  HeartPulse,
  Landmark,
  Microscope,
  Leaf
} from 'lucide-react';

const categories = [
  { name: 'National Accounts', icon: Landmark, count: 48, color: '#00A1DE' },
  { name: 'Health & Nutrition', icon: HeartPulse, count: 156, color: '#00A859' },
  { name: 'Agriculture', icon: Leaf, count: 92, color: '#00A859' },
  { name: 'Education', icon: Microscope, count: 64, color: '#00A1DE' },
  { name: 'Infrastructure', icon: Building, count: 42, color: '#FAD201' },
  { name: 'Demographics', icon: Users, count: 112, color: '#FAD201' },
];

const featuredAgencies = [
  { name: "NISR Central", image: "/logo.png", datasets: 450 },
  { name: "Ministry of Health", image: "https://www.statistics.gov.rw/sites/default/files/styles/medium/public/partners/Moh.png", datasets: 120 },
  { name: "Min. of Agriculture", image: "https://www.statistics.gov.rw/sites/default/files/styles/medium/public/partners/minagri.png", datasets: 85 },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-40 lg:pt-32 lg:pb-60 bg-white overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00A1DE]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00A859]/5 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#00A1DE]/10 rounded-2xl border border-[#00A1DE]/20 text-[#00A1DE] mb-8 group cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A1DE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00A1DE]"></span>
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Official Repository 2024</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10">
              The Home of <span className="text-[#00A1DE]">Verified</span> <span className="italic font-serif">Data.</span>
            </h1>
            
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-xl">
              Access the Republic of Rwanda's most trusted public datasets. Powering research, policy making, and innovation through transparency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/dataset" className="px-10 py-5 bg-[#00A1DE] text-white font-black text-sm rounded-[1.5rem] shadow-2xl shadow-[#00A1DE]/40 hover:bg-[#0089bd] transform hover:-translate-y-1 transition-all group overflow-hidden relative">
                <span className="relative z-10 flex items-center gap-3">
                  Explore Repository <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
              <Link href="/signup" className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-black text-sm rounded-[1.5rem] hover:bg-slate-50 hover:border-[#00A1DE]/20 transform hover:-translate-y-1 transition-all shadow-xl shadow-slate-200/40">
                Join Network
              </Link>
            </div>
            
            <div className="mt-20 flex items-center gap-12 border-t border-slate-100 pt-12">
               <div className="text-center md:text-left">
                  <p className="text-3xl font-black text-slate-900">12,450+</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Total Datasets</p>
               </div>
               <div className="h-10 w-px bg-slate-100 hidden md:block"></div>
               <div className="text-center md:text-left">
                  <p className="text-3xl font-black text-slate-900">48</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Official Agencies</p>
               </div>
               <div className="h-10 w-px bg-slate-100 hidden md:block"></div>
               <div className="text-center md:text-left">
                  <p className="text-3xl font-black text-slate-900">24/7</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">API Reliability</p>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
             {/* Floating UI Elements */}
             <div className="relative z-10 p-12 bg-white/40 backdrop-blur-3xl rounded-[4rem] border border-white/60 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00A1DE]/5 via-transparent to-[#00A859]/5"></div>
                <div className="relative">
                   <div className="flex items-center justify-between mb-12">
                      <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] border-b-2 border-[#00A1DE] pb-2">Latest Insights</h3>
                      <BarChart3 className="w-5 h-5 text-slate-400" />
                   </div>
                   <div className="space-y-6">
                      {[1,2,3].map(i => (
                        <div key={i} className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer group">
                           <div className="flex items-center justify-between mb-2">
                              <span className="text-[9px] font-black text-[#00A859] uppercase tracking-widest">Healthcare</span>
                              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#00A1DE]" />
                           </div>
                           <p className="text-xs font-black text-slate-800 tracking-tight">Kigali Medical Registry Quarterly Update 2024</p>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
             
             {/* Abstract Geometric Decorations */}
             <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FAD201]/10 rounded-[3rem] -rotate-12 blur-2xl"></div>
             <div className="absolute -bottom-20 -left-12 w-64 h-64 bg-[#00A859]/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
             <div className="max-w-2xl">
                <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">Expert <span className="text-[#00A859]">Classifications.</span></h2>
                <p className="text-lg text-slate-500 font-bold leading-relaxed">Systematically curated to help you discover the specific domains governing the Republic of Rwanda's statistics.</p>
             </div>
             <Link href="/dataset" className="flex items-center gap-2 text-xs font-black uppercase text-[#00A1DE] tracking-[0.3em] hover:opacity-70 transition-opacity">
                All Domains <ArrowUpRight className="w-4 h-4" />
             </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {categories.map((cat, i) => (
                <motion.div 
                   key={cat.name}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   viewport={{ once: true }}
                   className="group p-10 bg-white rounded-[3rem] border border-slate-100 hover:border-[#00A1DE]/20 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative"
                >
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A1DE]/5 blur-3xl rounded-full translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="w-16 h-16 rounded-3xl mb-8 flex items-center justify-center transition-transform group-hover:scale-110 duration-500" style={{ backgroundColor: `${cat.color}15` }}>
                      <cat.icon className="w-8 h-8" style={{ color: cat.color }} />
                   </div>
                   <h3 className="text-xl font-black text-slate-800 mb-2 tracking-tight">{cat.name}</h3>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{cat.count} VERIFIED DATASETS</p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Agency Section */}
      <section className="py-32 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-24">
               <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#00A1DE] mb-6">Institutional Strength</span>
               <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-10">Empowering <span className="italic font-serif">Agencies.</span></h2>
               <p className="text-xl text-slate-500 font-bold max-w-2xl leading-relaxed">Join 48+ government institutions in publishing, managing, and governing high-impact data assets.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {featuredAgencies.map((agency, i) => (
                 <div key={agency.name} className="flex flex-col items-center p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-[#00A1DE]/40 hover:bg-white hover:shadow-2xl transition-all duration-700 group cursor-pointer text-center">
                    <div className="w-32 h-32 mb-10 p-6 bg-white rounded-full shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-700 border-2 border-slate-50">
                       <img src={agency.image} alt={agency.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                    <h4 className="text-lg font-black text-slate-900 mb-2">{agency.name}</h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{agency.datasets} DATASETS PUBLISHED</p>
                 </div>
               ))}
            </div>
            
            <div className="mt-20 text-center">
               <Link href="/agencies" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-[1.2rem] font-bold text-sm shadow-xl hover:shadow-slate-900/20 transition-all hover:-translate-y-1">
                  View Full Directory <ChevronRight className="w-4 h-4" />
               </Link>
            </div>
         </div>
      </section>

      {/* Newsletter / Call to Action */}
      <section className="py-20 bg-white px-6">
         <div className="max-w-7xl mx-auto p-12 lg:p-24 bg-slate-900 rounded-[4rem] relative overflow-hidden group shadow-[0_50px_100px_-15px_rgba(0,0,0,0.3)]">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00A1DE]/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00A859]/20 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/2"></div>
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-16 relative z-10">
               <div className="max-w-xl">
                  <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-none mb-8">Ready to <br/><span className="text-[#00A1DE]">Integrate?</span></h2>
                  <p className="text-xl text-slate-400 font-bold leading-relaxed mb-10">Experience the world-class Rwanda API Hub. Direct, programmatic access for developers and researchers.</p>
                  <Link href="/developers" className="inline-flex items-center gap-3 px-10 py-5 bg-[#00A1DE] text-white font-black text-sm rounded-2xl shadow-2xl shadow-[#00A1DE]/20 hover:bg-[#0089bd] transition-all transform hover:scale-105 active:scale-95">
                     API Hub Access <ChevronRight className="w-5 h-5" />
                  </Link>
               </div>
               
               <div className="p-12 lg:p-16 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] w-full max-w-md">
                  <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-10">Join the Data Loop</h3>
                  <div className="space-y-4">
                     <p className="text-[10px] font-black text-[#00A1DE] uppercase tracking-[0.3em]">Monthly Newsletter</p>
                     <input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="w-full px-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-bold placeholder:text-slate-600 focus:outline-none focus:border-[#0089bd] transition-colors"
                     />
                     <button className="w-full py-5 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all">
                        Subscribe
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
