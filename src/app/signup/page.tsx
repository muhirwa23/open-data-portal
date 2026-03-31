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
  User,
  ShieldCheck,
  CheckCircle2,
  Globe2
} from 'lucide-react';
import { useAuth } from '@/components/AuthProvider';
import { toast } from 'react-hot-toast';

export default function SignupPage() {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await register(name, email, password);
      toast.success('Membership Request Submitted');
    } catch (err: any) {
      toast.error(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 lg:p-20 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#00A1DE]/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
         
         <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
         >
            <div className="mb-12 inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-slate-100 text-[#00A859] font-black text-[10px] uppercase tracking-[0.3em] shadow-sm">
               <Globe2 className="w-4 h-4" /> Collaborative Data Network
            </div>
            <h1 className="text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-10">
              Join the <span className="text-[#00A1DE]">Vision.</span>
            </h1>
            <p className="text-xl text-slate-500 font-bold leading-relaxed mb-12 max-w-md">
               Become an official contributor to the Rwanda Open Data ecosystem. Manage datasets, govern APIs, and drive innovation.
            </p>
            
            <div className="space-y-6">
               {[
                 'Institutional verified identity',
                 'Direct publishing to Data Portal',
                 'Secure API key management',
                 'Agency-wide analytics access'
               ].map((benefit) => (
                 <div key={benefit} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#00A1DE] transition-all">
                       <CheckCircle2 className="w-5 h-5 text-[#00A859] group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-sm font-black text-slate-800 tracking-tight">{benefit}</p>
                 </div>
               ))}
            </div>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-12 lg:p-20 bg-white/70 backdrop-blur-3xl border border-white rounded-[4rem] shadow-2xl relative group"
         >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A1DE]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <Link href="/login" className="absolute top-10 right-12 text-[10px] font-black text-[#00A1DE] uppercase tracking-widest hover:underline">Already a Member?</Link>
            
            <form onSubmit={handleSubmit} className="space-y-8">
               <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Official Name</label>
                  <div className="relative group/input">
                     <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/input:text-[#00A1DE] transition-colors" />
                     <input 
                        type="text" 
                        required
                        placeholder="e.g. John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-16 pr-8 py-4 bg-white/80 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#00A1DE]/5 focus:border-[#0089bd] transition-all font-bold text-slate-800 text-sm"
                     />
                  </div>
               </div>

               <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Institutional Email</label>
                  <div className="relative group/input">
                     <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/input:text-[#00A1DE] transition-colors" />
                     <input 
                        type="email" 
                        required
                        placeholder="j.doe@statistics.gov.rw"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-16 pr-8 py-4 bg-white/80 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#00A1DE]/5 focus:border-[#0089bd] transition-all font-bold text-slate-800 text-sm"
                     />
                  </div>
               </div>

               <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Security Password</label>
                  <div className="relative group/input">
                     <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within/input:text-[#00A1DE] transition-colors" />
                     <input 
                        type="password" 
                        required
                        placeholder="••••••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-16 pr-8 py-4 bg-white/80 border border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#00A1DE]/5 focus:border-[#0089bd] transition-all font-bold text-slate-800 text-sm"
                     />
                  </div>
               </div>

               <button 
                 type="submit" 
                 disabled={loading}
                 className="w-full py-6 bg-slate-900 text-white rounded-3xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-slate-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3 group"
               >
                  {loading ? 'Processing membership...' : (
                    <>
                       Request Access <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#00A1DE] transition-all" />
                    </>
                  )}
               </button>
            </form>

            <div className="mt-12 p-8 bg-[#00A1DE]/5 rounded-[2rem] border border-[#00A1DE]/10">
               <div className="flex items-start gap-4">
                  <ShieldCheck className="w-5 h-5 text-[#00A1DE] mt-0.5" />
                  <p className="text-[10px] font-bold text-slate-500 leading-relaxed tracking-tight">Your request will be vetted by the NISR governance board. Institutional email verification is mandatory.</p>
               </div>
            </div>
         </motion.div>

      </div>
    </div>
  );
}
