import React from 'react';
import { Cpu, ShieldCheck } from "lucide-react";

export const Cybox = ({ title, status, children }) => {
  return (
    <div className="relative p-1.5 rounded-[55px] bg-gradient-to-br from-blue-600/30 via-slate-800 to-purple-600/30">
        <div className="bg-[#0b0e14]/90 rounded-[50px] p-12 border border-white/5 backdrop-blur-3xl h-full shadow-inner">
            <div className="flex justify-between items-start mb-10">
                <div className="p-5 bg-blue-600/10 rounded-2xl border border-blue-600/20 text-blue-500">
                    <Cpu size={32} />
                </div>
                <div className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{status}</span>
                </div>
            </div>
            
            <h3 className="text-4xl font-black mb-6 tracking-tighter text-white uppercase italic">{title}</h3>
            
            {children}

            <div className="mt-14 pt-10 border-t border-white/5 flex items-center justify-between opacity-30">
                <div className="flex items-center gap-2">
                    <ShieldCheck size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Haskell Script Policy Verified</span>
                </div>
            </div>
        </div>
    </div>
  );
};