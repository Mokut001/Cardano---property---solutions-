import { Lucid, Blockfrost } from "lucid-cardano";
import React, { useState, useEffect } from "react";
import { Landmark, Wallet, Search, MapPin, Activity, ShieldCheck, Zap } from "lucide-react";
import { Cybox } from "../components/Cybox";
import { propertyEngine } from "../lib/offchain";

export default function Home() {
    const [addr, setAddr] = useState("");
    
    const handleConnect = async () => {
        try {
            const address = await propertyEngine.connect();
            setAddr(address);
        } catch (e) {
            alert("Please sync with Nami Wallet on Mainnet");
        }
    };

    return (
        <div className="min-h-screen bg-[#010204] text-white selection:bg-blue-600/30">
            {/* Nav */}
            <nav className="max-w-7xl mx-auto flex justify-between items-center p-12 relative z-50">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center font-black rotate-6 shadow-2xl shadow-blue-600/20 text-white">
                        <Landmark size={32} />
                    </div>
                    <div>
                        <span className="text-3xl font-black uppercase tracking-tighter block leading-none">PropertyLabs</span>
                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] mt-1 block">Mainnet Certified</span>
                    </div>
                </div>
                
                <button 
                    onClick={handleConnect}
                    className="bg-white text-black px-10 py-5 rounded-3xl font-black flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 shadow-2xl shadow-white/5"
                >
                    <Wallet size={22} />
                    {addr ? `${addr.slice(0, 10)}...` : "Connect Wallet"}
                </button>
            </nav>

            <main className="max-w-7xl mx-auto px-12 py-20 relative">
                <div className="grid lg:grid-cols-12 gap-24 items-center">
                    
                    <div className="lg:col-span-7 space-y-12">
                        <div className="inline-flex items-center gap-3 bg-blue-600/10 border border-blue-600/20 px-6 py-2.5 rounded-full">
                            <span className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Haskell/JavaScript Hybrid Engine</span>
                        </div>
                        
                        <h1 className="text-9xl font-black leading-[0.85] tracking-tighter italic">
                            Property <br/> <span className="text-blue-600">Fractional.</span>
                        </h1>
                        
                        <p className="text-2xl text-slate-500 font-medium max-w-xl leading-relaxed">
                            Own prime real estate via Haskell-verified smart contracts. Secure, transparent, and ready for Cardano Mainnet.
                        </p>

                        <div className="flex bg-[#0c0d13] border border-white/5 p-4 rounded-[40px] max-w-lg shadow-3xl">
                            <Search className="m-4 text-slate-700" />
                            <input className="bg-transparent flex-1 outline-none font-bold text-xl" placeholder="Search Property Policy ID..." />
                            <button className="bg-white text-black rounded-[30px] px-12 py-5 font-black text-lg">Search</button>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <Cybox title="Azure Tower, NYC" status="Mainnet Live">
                            <div className="space-y-8 mt-6">
                                <div className="flex gap-4 p-5 bg-white/5 rounded-3xl border border-white/5">
                                    <MapPin className="text-blue-500" />
                                    <div>
                                        <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Asset Address</p>
                                        <p className="font-bold text-lg leading-none mt-1">5th Avenue, Manhattan</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                                        <p className="text-[10px] font-black text-slate-600 uppercase mb-2">Annual ROI</p>
                                        <p className="text-3xl font-black text-blue-500">+18.5%</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                                        <p className="text-[10px] font-black text-slate-600 uppercase mb-2">Share Price</p>
                                        <p className="text-3xl font-black italic">120 ₳</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between text-[10px] font-black uppercase text-slate-600">
                                        <span>Mint Progress</span>
                                        <span>94% Verified</span>
                                    </div>
                                    <div className="h-3 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/5">
                                        <div className="h-full bg-blue-600 w-[94%] shadow-[0_0_25px_rgba(37,99,235,0.7)] rounded-full"></div>
                                    </div>
                                </div>

                                <button className="w-full bg-blue-600 py-7 rounded-[32px] font-black text-xl hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-3">
                                   <Zap fill="currentColor" size={20}/> Invest Now
                                </button>
                            </div>
                        </Cybox>
                    </div>
                </div>
            </main>

            <footer className="max-w-7xl mx-auto px-12 py-20 border-t border-white/5 mt-20 flex justify-between items-center opacity-40">
                <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.4em]">
                    <span>Plutus V2 Core</span>
                    <span>Lucid JS SDK</span>
                    <span>Cardano Mainnet</span>
                </div>
                <div className="flex gap-6">
                    <Activity size={18} />
                    <ShieldCheck size={18} />
                </div>
            </footer>
        </div>
    );
}