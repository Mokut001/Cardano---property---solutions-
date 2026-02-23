import React from 'react';
import { Shield, Cpu, Zap } from 'lucide-react';

export const Cybox = ({ title, children, status }: any) => {
  return (
    <div className="relative group p-1 rounded-[32px] bg-gradient-to-br from-blue-600/20 to-purple-600/20 hover:from-blue-600/40 transition-all duration-500">
      <div className="bg-[#0c0e14] rounded-[30px] p-8 border border-white/5 backdrop-blur-xl">
        <div className="flex justify-between items-start mb-8">
          <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
            <Cpu className="text-blue-500" size={24} />
          </div>
          <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{status || 'Live Node'}</span>
          </div>
        </div>
        <h3 className="text-2xl font-black mb-4 tracking-tight">{title}</h3>
        {children}
        <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4 opacity-50">
          <Shield size={14} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Mainnet Verified Logic</span>
        </div>
      </div>
    </div>
  );
};