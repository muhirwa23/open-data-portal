"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Mail, 
  Lock, 
  ChevronRight, 
  ArrowLeft,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useAuth } from '@/components/AuthProvider';
import { toast } from 'react-hot-toast';

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success('Access Granted');
    } catch (err: any) {
      toast.error(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00A1DE]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00A859]/5 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/2"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl p-12 lg:p-20 bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[4rem] shadow-2xl shadow-slate-900/5 relative z-10 overflow-hidden group"
      >
         <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A1DE]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
         
         <div className="relative">
            <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 tracking-widest hover:text-[#00A1DE] transition-colors mb-12">
               <ArrowLeft className="w-3.5 h-3.5" /> Back to Portal
            </Link>
            
            <div className="flex items-center gap-4 mb-10">
               <img src="/logo.png" alt="NISR logo" className="h-10 w-auto" />
               <div className="h-8 w-px bg-slate-100"></div>
               <ShieldCheck className="w-6 h-6 text-[#00A859]" />
            </div>

            <h1 className="text-5xl font-black text-slate-900 tracking-tighter leading-none mb-4">Official <span className="text-[#00A1DE]">Access.</span></h1>
            <p className="text-slate-500 font-bold mb-12">Securely enter the Republic of Rwanda's statistics command center.</p>

            <form onSubmit={handleSubmit} className="space-y-8">
               <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Institutional Email</label>
                  <div className="relative group/input">
                     <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/input:text-[#00A1DE] transition-colors" />
                     <input 
                        type="email" 
                        required
                        placeholder="your@statistics.gov.rw"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-16 pr-8 py-5 bg-white border border-slate-100 rounded-3xl focus:outline-none focus:ring-4 focus:ring-[#00A1DE]/5 focus:border-[#0089bd] transition-all font-bold text-slate-800"
                     />
                  </div>
               </div>

               <div className="space-y-3">
                  <div className="flex items-center justify-between ml-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Secure Password</label>
                     <Link href="#" className="text-[10px] font-black text-[#00A1DE] uppercase tracking-widest hover:underline">Forgot Access?</Link>
                  </div>
                  <div className="relative group/input">
                     <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/input:text-[#00A1DE] transition-colors" />
                     <input 
                        type="password" 
                        required
                        placeholder="••••••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-16 pr-8 py-5 bg-white border border-slate-100 rounded-3xl focus:outline-none focus:ring-4 focus:ring-[#00A1DE]/5 focus:border-[#0089bd] transition-all font-bold text-slate-800"
                     />
                  </div>
               </div>

               <button 
                 type="submit" 
                 disabled={loading}
                 className="w-full py-6 bg-slate-900 text-white rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-slate-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 group"
               >
                  {loading ? 'Authenticating...' : (
                    <>
                       Enter Workspace <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#00A1DE] transition-all" />
                    </>
                  )}
               </button>
            </form>

            <div className="mt-16 text-center">
               <p className="text-xs font-bold text-slate-400">Not Part of the Network? <Link href="/signup" className="text-[#00A859] font-black hover:underline ml-2">Request Agency Access</Link></p>
            </div>
         </div>
      </motion.div>
    </div>
  );
}
