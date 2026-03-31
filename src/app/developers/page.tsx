"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Search, 
  Terminal, 
  Code2, 
  Globe2, 
  ShieldCheck, 
  ChevronRight,
  ArrowUpRight,
  Copy,
  Check,
  Zap,
  BookOpen,
  Github
} from 'lucide-react';

const endpoints = [
  { 
    name: 'Package Search', 
    method: 'GET', 
    url: '/api/3/action/package_search', 
    desc: 'Perform complex queries across all metadata.',
    params: ['q', 'rows', 'start']
  },
  { 
    name: 'Organization List', 
    method: 'GET', 
    url: '/api/3/action/organization_list', 
    desc: 'Retrieve all governing institutions.',
    params: ['all_fields']
  },
  { 
    name: 'Resource View', 
    method: 'GET', 
    url: '/api/3/action/resource_show', 
    desc: 'Get detailed metadata for a specific data file.',
    params: ['id']
  },
];

export default function DevelopersPage() {
  const [activeCode, setActiveCode] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('https://rwanda-data-portal.gov.rw/api/3/action/');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pb-40">
      
      {/* Hero / Header */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#00A1DE]/5 to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-3xl"
           >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00A1DE]/10 rounded-full border border-[#00A1DE]/20 text-[#00A1DE] mb-8 font-black text-[10px] uppercase tracking-[0.3em]">
                 <Cpu className="w-3.5 h-3.5" /> High-Performance API Hub
              </div>
              <h1 className="text-6xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-10">
                Code for the <br/>
                <span className="text-[#00A1DE]">Future.</span>
              </h1>
              <p className="text-xl text-slate-500 font-bold leading-relaxed mb-12">
                 Integrate Rwanda's national statistics directly into your applications, pipelines, and research notebooks with our world-class API.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                 <button 
                   onClick={handleCopy}
                   className="px-10 py-5 bg-slate-900 text-white rounded-[1.5rem] font-black text-sm flex items-center gap-4 hover:scale-[1.05] transition-all shadow-2xl shadow-slate-900/40 relative overflow-hidden group"
                 >
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#00A1DE]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative z-10 flex items-center gap-3">
                       {copied ? <Check className="w-5 h-5 text-[#00A859]" /> : <Terminal className="w-5 h-5 text-[#00A1DE]" />}
                       {copied ? 'Endpoint Copied' : 'Copy API Endpoint'}
                    </span>
                 </button>
                 <Link href="/dashboard?tab=api" className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-[1.5rem] font-black text-sm flex items-center gap-3 hover:bg-slate-50 transition-all shadow-xl shadow-slate-200/40">
                    Get Access Token <ArrowUpRight className="w-5 h-5 text-slate-400" />
                 </Link>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Docs Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
         
         {/* Sidebar / List */}
         <div className="lg:col-span-4 space-y-12">
            <div>
               <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-10 border-b border-slate-100 pb-4">Core Documentation</h3>
               <div className="space-y-4">
                  {[
                    { name: 'Introduction', icon: BookOpen, active: true },
                    { name: 'Authentication', icon: ShieldCheck, active: false },
                    { name: 'Rate Limiting', icon: Zap, active: false },
                    { name: 'SDKs & Libraries', icon: Github, active: false },
                  ].map((doc) => (
                    <button key={doc.name} className={`w-full flex items-center gap-4 p-5 rounded-2xl font-bold text-sm transition-all ${doc.active ? 'bg-[#00A1DE] text-white shadow-xl shadow-[#00A1DE]/20' : 'bg-white border border-slate-100 text-slate-600 hover:bg-slate-50'}`}>
                       <doc.icon className={`w-5 h-5 ${doc.active ? 'text-white' : 'text-slate-300'}`} />
                       {doc.name}
                    </button>
                  ))}
               </div>
            </div>

            <div>
               <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-10 border-b border-slate-100 pb-4">Popular Actions</h3>
               <div className="space-y-4">
                  {endpoints.map((ep) => (
                    <div key={ep.name} className="p-6 bg-white border border-slate-100 rounded-[2rem] hover:shadow-xl transition-all group cursor-pointer">
                       <div className="flex items-center justify-between mb-4">
                          <code className="text-xs font-black text-[#00A859] bg-[#00A859]/10 px-3 py-1 rounded-full">{ep.method}</code>
                          <ChevronRight className="w-4 h-4 text-slate-200 group-hover:text-[#00A1DE] transition-colors" />
                       </div>
                       <h4 className="text-sm font-black text-slate-800 mb-2">{ep.name}</h4>
                       <p className="text-xs text-slate-400 font-bold leading-relaxed">{ep.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Code Playground / Terminal */}
         <div className="lg:col-span-8 bg-slate-900 rounded-[3rem] p-12 lg:p-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A1DE]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
            
            <div className="relative z-10">
               <div className="flex items-center justify-between mb-12">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                     <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                     <div className="w-3 h-3 rounded-full bg-[#00A859]"></div>
                  </div>
                  <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/5">
                     {['javascript', 'python', 'curl'].map((lang) => (
                       <button 
                         key={lang} 
                         onClick={() => setActiveCode(lang)}
                         className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeCode === lang ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-white'}`}
                       >
                         {lang === 'javascript' ? 'Node.js' : lang}
                       </button>
                     ))}
                  </div>
               </div>

               <div className="p-8 bg-black/40 rounded-[2rem] border border-white/5 font-mono text-sm leading-relaxed overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCode}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                       {activeCode === 'javascript' && (
                         <pre className="text-slate-300">
                            <span className="text-[#00A1DE]">const</span> res = <span className="text-[#00A1DE]">await</span> fetch(<span className="text-[#FAD201]">'https://data.gov.rw/api/3/action/package_search'</span>);<br/>
                            <span className="text-[#00A1DE]">const</span> data = <span className="text-[#00A1DE]">await</span> res.json();<br/><br/>
                            console.log(<span className="text-[#FAD201]">'Total datasets found:'</span>, data.result.count);
                         </pre>
                       )}
                       {activeCode === 'python' && (
                         <pre className="text-slate-300">
                            <span className="text-[#00A1DE]">import</span> requests<br/><br/>
                            url = <span className="text-[#FAD201]">'https://data.gov.rw/api/3/action/package_search'</span><br/>
                            response = requests.get(url)<br/>
                            data = response.json()<br/><br/>
                            print(<span className="text-[#FAD201]">f"Success: {'{'}data['success']{'}'}"</span>)
                         </pre>
                       )}
                       {activeCode === 'curl' && (
                         <pre className="text-slate-300">
                            curl -X GET <span className="text-[#FAD201]">'https://data.gov.rw/api/3/action/package_search'</span> \<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;-H <span className="text-[#FAD201]">'Authorization: YOUR_TOKEN_HERE'</span>
                         </pre>
                       )}
                    </motion.div>
                  </AnimatePresence>
               </div>
               
               <div className="mt-12 flex items-center justify-between p-8 bg-white/5 rounded-[2rem] border border-white/5">
                  <div className="flex items-center gap-6">
                     <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-900 border-2 border-slate-50">
                        <Code2 className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-sm font-black text-white">Interactive Console</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Connect to live production cluster</p>
                     </div>
                  </div>
                  <button className="px-8 py-3 bg-[#00A1DE] text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#0089bd] transition-all">Launch Console</button>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
