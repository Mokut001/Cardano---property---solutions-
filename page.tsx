'use client';
import { useState } from 'react';
import { propertyEngine } from "@/lib/lucid-logic";
import { Cybox } from "@/components/Cybox";
import { Wallet, Search, MapPin, Building2 } from 'lucide-react';

export default function Home() {
  const [addr, setAddr] = useState("");

  const connect = async () => {
    const a = await propertyEngine.connect();
    setAddr(a);
  };

  return (
    <div className="min-h-screen bg-[#05060b] text-white p-8">
      <nav className="max-w-6xl mx-auto flex justify-between items-center mb-24">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black rotate-12">P</div>
          <span className="text-xl font-black tracking-tighter">PropertySolutions</span>
        </div>
        <button onClick={connect} className="bg-white text-black px-8 py-3 rounded-2xl font-black flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all">
          <Wallet size={18} />
          {addr ? addr.slice(0, 10) + "..." : "Connect Wallet"}
        </button>
      </nav>

      <main className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <h1 className="text-8xl font-black tracking-tighter mb-8 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
              Tokenize <br/> The World.
            </h1>
            <p className="text-xl text-slate-400 font-medium mb-12">Institutional real estate fractionalization on Cardano Mainnet. Secure, legal, and decentralized.</p>
            <div className="flex bg-[#0c0e14] p-2 rounded-2xl border border-white/5 max-w-md">
              <div className="flex-1 flex items-center px-4 gap-3 text-slate-500">
                <Search size={20}/>
                <input placeholder="Property Address..." className="bg-transparent w-full outline-none font-bold" />
              </div>
              <button className="bg-blue-600 px-8 py-4 rounded-xl font-bold">Search</button>
            </div>
          </div>

          <Cybox title="New Property Offering" status="Mainnet Mint Open">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/5" />
                <div>
                  <h4 className="font-bold">Emerald Silicon Hub</h4>
                  <p className="text-xs text-slate-500">Austin, Texas • Commercial</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Total Fractions</p>
                  <p className="text-xl font-bold">1,000,000</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Value / Unit</p>
                  <p className="text-xl font-bold">120 ₳</p>
                </div>
              </div>
              <button className="w-full bg-blue-600 py-4 rounded-2xl font-black text-lg hover:shadow-xl transition-all">Acquire Stake</button>
            </div>
          </Cybox>
        </div>
      </main>
    </div>
  );
}