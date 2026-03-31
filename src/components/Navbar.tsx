"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Search, 
  Menu, 
  X, 
  User, 
  Globe2, 
  ShieldCheck,
  ChevronDown,
  LayoutDashboard,
  LogOut,
  AppWindow,
  Cpu
} from 'lucide-react';
import { useAuth } from './AuthProvider';

const navItems = [
  { name: 'Datasets', path: '/dataset', icon: Globe2 },
  { name: 'Agencies', path: '/agencies', icon: Building2 },
  { name: 'Insights', path: '/insights', icon: ShieldCheck },
  { name: 'Developers', path: '/developers', icon: Cpu },
];

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout, isAuthenticated } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
      isScrolled 
        ? 'py-3' 
        : 'py-6 px-4'
    }`}>
      <div className={`max-w-7xl mx-auto px-6 py-4 rounded-[2rem] transition-all duration-700 border border-white/20 relative overflow-hidden ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-3xl shadow-2xl shadow-slate-900/10' 
          : 'bg-white/40 backdrop-blur-xl'
      }`}>
        <div className="flex items-center justify-between relative z-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
               <img src="/logo.png" alt="NISR logo" className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
               <div className="absolute inset-0 bg-white/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg text-slate-800 tracking-tighter leading-none">NISR DATA</span>
              <span className="text-[10px] font-bold text-[#00A1DE] uppercase tracking-[0.2em] mt-0.5 opacity-80">Republic of Rwanda</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/5 p-1.5 rounded-2xl border border-slate-900/5">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-500 group overflow-hidden ${
                  pathname === item.path 
                    ? 'text-white' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {pathname === item.path && (
                  <motion.div 
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-slate-900 rounded-xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                   <item.icon className={`w-4 h-4 ${pathname === item.path ? 'text-[#00A1DE]' : 'group-hover:text-[#00A1DE] transition-colors'}`} />
                   {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
               <div className="relative">
                  <button 
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-3 pl-3 pr-2 py-2 rounded-2xl bg-white border border-slate-200 hover:border-[#0089bd] transition-all hover:shadow-lg shadow-slate-200/40 group"
                  >
                     <div className="text-right hidden sm:block">
                        <p className="text-xs font-black text-slate-800 leading-tight">{user?.name}</p>
                        <p className="text-[9px] font-bold text-[#00A1DE] uppercase tracking-widest">{user?.organization || 'User'}</p>
                     </div>
                     <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black relative overflow-hidden group-hover:scale-105 transition-transform border-2 border-white">
                        {user?.name?.[0].toUpperCase() || 'U'}
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00A1DE]"></div>
                     </div>
                     <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-500 ${isProfileOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                     {isProfileOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute right-0 mt-4 w-64 bg-white/90 backdrop-blur-3xl border border-slate-200 p-3 rounded-[2rem] shadow-2xl shadow-slate-900/10"
                        >
                           <Link href="/dashboard" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                              <div className="w-10 h-10 rounded-xl bg-[#00A1DE]/10 text-[#00A1DE] flex items-center justify-center">
                                 <LayoutDashboard className="w-5 h-5" />
                              </div>
                              <div>
                                 <p className="text-xs font-black text-slate-800">Workspace</p>
                                 <p className="text-[10px] font-bold text-slate-400 tracking-tight">Manage Datasets</p>
                              </div>
                           </Link>
                           <hr className="my-2 border-slate-100" />
                           <button onClick={logout} className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-rose-50 transition-colors group">
                              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
                                 <LogOut className="w-5 h-5" />
                              </div>
                              <div className="text-left">
                                 <p className="text-xs font-black text-rose-600">Sign Out</p>
                                 <p className="text-[10px] font-bold text-rose-300 tracking-tight">End Session</p>
                              </div>
                           </button>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            ) : (
               <div className="flex gap-2">
                 <Link href="/login" className="hidden sm:flex px-6 py-3 rounded-2xl font-bold text-sm text-slate-600 hover:text-slate-900 hover:bg-white/60 transition-all">
                    Sign In
                 </Link>
                 <Link href="/signup" className="flex px-6 py-3 bg-[#00A1DE] text-white font-bold text-sm rounded-2xl shadow-xl shadow-[#00A1DE]/20 hover:bg-[#0089bd] transform hover:scale-[1.05] transition-all">
                    Join Portal
                 </Link>
               </div>
            )}
            
            <button className="lg:hidden p-3 rounded-2xl bg-[#00A1DE]/10 text-[#00A1DE]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
