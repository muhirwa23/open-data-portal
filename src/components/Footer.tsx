import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe2,
  Lock,
  Globe,
  Briefcase
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate-200/60 pt-24 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-slate-50 to-white -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        
        {/* About NISR */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-4 group">
            <img src="/logo.png" alt="NISR Logo" className="h-10 w-auto transition-transform duration-500 group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="font-black text-lg text-slate-800 tracking-tighter leading-none uppercase">NISR DATA</span>
              <span className="text-[10px] font-bold text-[#00A1DE] uppercase tracking-[0.2em] mt-0.5 opacity-80">Republic of Rwanda</span>
            </div>
          </Link>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            The National Institute of Statistics of Rwanda (NISR) Open Data Portal is the official source for high-quality, verified public data, driving innovation and transparency across the Republic of Rwanda.
          </p>
          <div className="flex gap-4">
             <Link href="https://twitter.com/statisticsRW" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#00A1DE] hover:text-white transition-all transform hover:scale-110 rotate-3 hover:rotate-0 shadow-sm border border-slate-100">
                <Globe2 className="w-5 h-5" />
             </Link>
             <Link href="mailto:info@statistics.gov.rw" className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#FAD201] hover:text-slate-900 transition-all transform hover:scale-110 -rotate-3 hover:rotate-0 shadow-sm border border-slate-100">
                <Mail className="w-5 h-5" />
             </Link>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-8 border-b border-slate-100 pb-4">Resources</h4>
          <ul className="space-y-4">
            <li><Link href="/dataset" className="text-sm font-bold text-slate-500 hover:text-[#00A1DE] flex items-center gap-2 group transition-all"><div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#00A1DE] transition-colors" />Dataset Explorer</Link></li>
            <li><Link href="/agencies" className="text-sm font-bold text-slate-500 hover:text-[#00A1DE] flex items-center gap-2 group transition-all"><div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#00A1DE] transition-colors" />Agency Directory</Link></li>
            <li><Link href="/insights" className="text-sm font-bold text-slate-500 hover:text-[#00A1DE] flex items-center gap-2 group transition-all"><div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#00A1DE] transition-colors" />Data Insights</Link></li>
            <li><Link href="/developers" className="text-sm font-bold text-slate-500 hover:text-[#00A1DE] flex items-center gap-2 group transition-all"><div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#00A1DE] transition-colors" />API Documentation</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-8 border-b border-slate-100 pb-4">Portal Governance</h4>
          <ul className="space-y-4">
            <li><Link href="#" className="text-sm font-bold text-slate-500 hover:text-[#00A859] flex items-center gap-2 group transition-all"><div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#00A859] transition-colors" />Terms of Use</Link></li>
            <li><Link href="#" className="text-sm font-bold text-slate-500 hover:text-[#00A859] flex items-center gap-2 group transition-all"><div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#00A859] transition-colors" />API License Terms</Link></li>
            <li><Link href="#" className="text-sm font-bold text-slate-500 hover:text-[#00A859] flex items-center gap-2 group transition-all"><div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#00A859] transition-colors" />Data Privacy</Link></li>
            <li><Link href="#" className="text-sm font-bold text-slate-500 hover:text-[#00A859] flex items-center gap-2 group transition-all"><div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#00A859] transition-colors" />Help Center</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="bg-slate-900 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A1DE]/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
           <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4">Contact HQ</h4>
           <div className="space-y-6">
              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00A1DE]">
                    <MapPin className="w-5 h-5 shadow-sm" />
                 </div>
                 <p className="text-[11px] font-bold text-slate-300 leading-relaxed uppercase tracking-widest">Avenue de la Justice, Kigali PO Box: 6139, Rwanda</p>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00A1DE]">
                    <Phone className="w-5 h-5 shadow-sm" />
                 </div>
                 <p className="text-xs font-black text-white">(+250) 252 571 035</p>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00A1DE]">
                    <Mail className="w-5 h-5 shadow-sm" />
                 </div>
                 <p className="text-xs font-bold text-slate-300">info@statistics.gov.rw</p>
              </div>
           </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em]">
          &copy; 2026 NISR Rwanda. All Rights Reserved.
        </p>
        <div className="flex items-center gap-8">
           <Link href="https://www.gov.rw" className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100">
              <span className="text-[10px] font-black text-slate-600">Official Portal of Rwanda</span>
           </Link>
           <div className="h-4 w-px bg-slate-200"></div>
           <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Version 1.2.4 Production</p>
        </div>
      </div>
    </footer>
  );
}
