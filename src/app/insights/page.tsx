"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Globe2, 
  ArrowUpRight, 
  ChevronRight,
  Sparkles,
  Zap,
  CheckCircle2,
  Lock
} from 'lucide-react';

const insights = [
  { 
    title: 'Kigali Urban Expansion 2024', 
    category: 'Infrastructure', 
    trend: '+12% annually',
    desc: 'Analysis of satellite imagery and registry data showing Kigali\'s rapid density shift.',
    color: '#00A1DE'
  },
  { 
    title: 'Healthcare Accessibility Index', 
    category: 'Public Health', 
    trend: '94% coverage',
    desc: 'Impact of decentralized health services on rural community outcomes.',
    color: '#00A859'
  },
  { 
    title: 'Digital Literacy Growth', 
    category: 'Education', 
    trend: 'High velocity',
    desc: 'Tracking the adoption of digital tools across schools in the Eastern Province.',
    color: '#FAD201'
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen pb-40">
      
      {/* Header */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00A1DE]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAD201]/10 rounded-full border border-[#FAD201]/20 text-slate-800 mb-8 font-black text-[10px] uppercase tracking-[0.3em]">
                 <TrendingUp className="w-4 h-4 text-[#00A859]" /> Intelligence & Trends
              </div>
              <h1 className="text-6xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-none mb-10">
                Data <span className="text-[#00A1DE]">Insights.</span>
              </h1>
              <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed">
                 Transforming raw institutional data into actionable intelligence for the Republic of Rwanda's future.
              </p>
           </motion.div>
        </div>
      </section>

      {/* Hero Card */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
         <div className="p-12 lg:p-24 bg-slate-900 rounded-[4rem] relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00A1DE]/20 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
               <div>
                  <div className="flex items-center gap-3 mb-8">
                     <span className="w-12 h-1px bg-[#00A859]"></span>
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00A859]">Flagship Report 2024</span>
                  </div>
                  <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-8">The State of <br/><span className="text-[#00A1DE]">Agriculture</span> 4.0</h2>
                  <p className="text-xl text-slate-400 font-bold leading-relaxed mb-10">Discover how IoT and sensor data are revolutionizing crop yield predictability in the Northern Province.</p>
                  <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-sm hover:bg-[#00A1DE] hover:text-white transition-all transform hover:scale-105 shadow-2xl shadow-slate-900/50">
                     Read Full Analysis
                  </button>
               </div>
               
               <div className="p-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] group-hover:scale-[1.02] transition-transform duration-700">
                  <div className="flex items-center justify-between mb-12">
                     <PieChart className="w-8 h-8 text-[#00A859]" />
                     <div className="px-5 py-2 bg-white/5 rounded-2xl border border-white/10 text-[10px] font-black text-white uppercase tracking-widest">Live Telemetry</div>
                  </div>
                  <div className="space-y-6">
                     {[82, 64, 45].map((val, i) => (
                       <div key={i} className="space-y-2">
                          <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                             <span>Domain {i+1}</span>
                             <span>{val}% Efficiency</span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                             <motion.div initial={{ width: 0 }} animate={{ width: `${val}%` }} transition={{ duration: 1, delay: i*0.2 }} className="h-full bg-[#00A1DE]" />
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Insights Grid */}
      <section className="max-w-7xl mx-auto px-6">
         <div className="flex items-center justify-between mb-12 px-6">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Latest Case Studies</h3>
            <Link href="#" className="text-[10px] font-black uppercase text-[#00A1DE] tracking-widest hover:underline">Explore Portfolio</Link>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {insights.map((item, i) => (
               <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-10 bg-white border border-slate-100 rounded-[4rem] hover:border-[#0089bd] hover:shadow-2xl hover:shadow-[#00A1DE]/10 transition-all duration-700 cursor-pointer relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-12 h-12 rounded-2xl mb-8 flex items-center justify-center text-white shadow-xl shadow-slate-900/10 group-hover:scale-110 transition-all duration-500" style={{ backgroundColor: item.color }}>
                     <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-[#00A1DE] transition-transform">{item.title}</h3>
                  <div className="flex items-center gap-3 mb-6">
                     <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.category}</span>
                     <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                     <span className="text-[10px] font-bold text-[#00A859]">{item.trend}</span>
                  </div>
                  <p className="text-sm font-medium text-slate-400 leading-relaxed group-hover:text-slate-600 transition-colors">{item.desc}</p>
               </motion.div>
            ))}
         </div>
      </section>

      {/* CTA */}
      <section className="mt-40 text-center px-6">
         <div className="max-w-4xl mx-auto p-16 bg-slate-50 border border-slate-100 rounded-[5rem] group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FAD201]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Lock className="w-12 h-12 text-slate-200 mx-auto mb-10 group-hover:text-[#FAD201] transition-colors" />
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-6 underline decoration-[#00A1DE] decoration-4 underline-offset-8">Insight Governance.</h2>
            <p className="text-lg text-slate-500 font-bold max-w-sm mx-auto mb-10 leading-relaxed">Want to publish your own findings? Apply for an Insight Publisher license today.</p>
            <button className="px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#00A1DE] transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/10 flex items-center gap-3 mx-auto">
               Apply for License <ChevronRight className="w-5 h-5" />
            </button>
         </div>
      </section>

    </div>
  );
}
