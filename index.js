import { Lucid, Blockfrost } from "lucid-cardano";
import React, { useState } from 'react';
import { Landmark, Wallet, Search, Cpu, ShieldCheck } from 'lucide-react';

export default function Home() {
  const [address, setAddress] = useState("");

  const connect = async () => {
    try {
      const bfKey = process.env.NEXT_PUBLIC_BLOCKFROST_KEY;
      const lucid = await Lucid.new(
        new Blockfrost("https://cardano-mainnet.blockfrost.io/api/v0", bfKey),
        "Mainnet"
      );
      const api = await window.cardano.nami.enable();
      lucid.selectWallet(api);
      setAddress(await lucid.wallet.address());
    } catch (e) {
      alert("Mainnet wallet not found.");
    }
  };

  return (
    <div style={{ backgroundColor: '#020408', color: 'white', minHeight: '100vh', padding: '50px', fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '100px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ backgroundColor: '#2563eb', padding: '15px', borderRadius: '15px' }}><Landmark size={30} /></div>
          <div>
            <span style={{ fontSize: '28px', fontWeight: '900', display: 'block' }}>PropertySolutions</span>
            <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#64748b', letterSpacing: '3px' }}>HASKELL POWERED</span>
          </div>
        </div>
        <button onClick={connect} style={{ backgroundColor: 'white', border: 'none', padding: '15px 40px', borderRadius: '20px', fontWeight: '900', cursor: 'pointer' }}>
          {address ? address.slice(0, 12) + "..." : "Connect Mainnet"}
        </button>
      </nav>

      <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '100px', fontWeight: '900', lineHeight: '0.9', margin: '0 0 40px 0' }}>Haskell <br/> <span style={{ color: '#2563eb' }}>Equity.</span></h1>
          <p style={{ fontSize: '22px', color: '#64748b', marginBottom: '50px' }}>The world's first property tokenization engine where majority logic is verified on-chain via Haskell Plutus contracts.</p>
          <div style={{ display: 'flex', background: '#0f172a', padding: '10px', borderRadius: '30px' }}>
            <input style={{ background: 'transparent', border: 'none', color: 'white', padding: '20px', flex: 1, outline: 'none', fontSize: '18px' }} placeholder="Search Property Assets..." />
          </div>
        </div>

        <div style={{ background: '#0f172a', padding: '60px', borderRadius: '50px', border: '1px solid #1e293b' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
             <Cpu color="#2563eb" size={40} />
             <div style={{ color: '#10b981', background: '#10b98122', padding: '5px 15px', borderRadius: '50px', fontSize: '10px', fontWeight: '900' }}>MINTING ACTIVE</div>
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: '900', marginBottom: '30px' }}>Austin Tech Hub</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
             <div style={{ background: '#020408', padding: '30px', borderRadius: '30px' }}>
                <p style={{ fontSize: '10px', color: '#64748b', margin: '0 0 10px 0' }}>ROI</p>
                <p style={{ fontSize: '30px', fontWeight: '900', color: '#2563eb' }}>+12.4%</p>
             </div>
             <div style={{ background: '#020408', padding: '30px', borderRadius: '30px' }}>
                <p style={{ fontSize: '10px', color: '#64748b', margin: '0 0 10px 0' }}>PRICE</p>
                <p style={{ fontSize: '30px', fontWeight: '900' }}>55 ₳</p>
             </div>
          </div>
          <button style={{ width: '100%', padding: '25px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '25px', fontSize: '20px', fontWeight: '900', cursor: 'pointer' }}>
            Invest In Property
          </button>
        </div>
      </main>
    </div>
  );
}