import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Activity, Globe, Lock, Shield, Cpu } from 'lucide-react';
import './index.css';

const ASSET_PROFILES = {
  equities: { yieldExpectation: 0.112, volatility: 0.145 },
  fixedIncome: { yieldExpectation: 0.048, volatility: 0.035 },
  alternatives: { yieldExpectation: 0.145, volatility: 0.192 }
};

export default function App() {
  const [allocation, setAllocation] = useState({
    equities: 60,
    fixedIncome: 30,
    alternatives: 10
  });
  
  const [metrics, setMetrics] = useState({
    expectedYield: 0,
    portfolioVolatility: 0
  });

  const updateAllocation = (changedAsset, newValueStr) => {
    let newValue = parseInt(newValueStr, 10);
    if (isNaN(newValue)) newValue = 0;
    
    let newAlloc = { ...allocation };
    const oldValue = newAlloc[changedAsset];
    const delta = newValue - oldValue;
    newAlloc[changedAsset] = newValue;
    
    const otherAssets = Object.keys(newAlloc).filter(k => k !== changedAsset);
    const sumOthers = otherAssets.reduce((sum, k) => sum + newAlloc[k], 0);
    
    if (sumOthers > 0) {
      otherAssets.forEach(k => {
        newAlloc[k] -= delta * (newAlloc[k] / sumOthers);
        if (newAlloc[k] < 0) newAlloc[k] = 0;
        if (newAlloc[k] > 100) newAlloc[k] = 100;
      });
    } else {
      otherAssets.forEach(k => { 
        newAlloc[k] = (100 - newValue) / otherAssets.length; 
      });
    }
    
    const total = Object.values(newAlloc).reduce((a, b) => a + b, 0);
    if (Math.abs(total - 100) > 0.01) {
      const diff = 100 - total;
      let maxAsset = otherAssets[0];
      if (newAlloc[otherAssets[1]] > newAlloc[otherAssets[0]]) {
        maxAsset = otherAssets[1];
      }
      newAlloc[maxAsset] += diff;
    }

    setAllocation({
      equities: Math.round(newAlloc.equities),
      fixedIncome: Math.round(newAlloc.fixedIncome),
      alternatives: Math.round(newAlloc.alternatives)
    });
  };

  useEffect(() => {
    const wEq = allocation.equities / 100;
    const wFi = allocation.fixedIncome / 100;
    const wAlt = allocation.alternatives / 100;
    
    const expectedYield = (wEq * ASSET_PROFILES.equities.yieldExpectation) +
                          (wFi * ASSET_PROFILES.fixedIncome.yieldExpectation) +
                          (wAlt * ASSET_PROFILES.alternatives.yieldExpectation);
                          
    const variance = Math.pow(wEq * ASSET_PROFILES.equities.volatility, 2) +
                     Math.pow(wFi * ASSET_PROFILES.fixedIncome.volatility, 2) +
                     Math.pow(wAlt * ASSET_PROFILES.alternatives.volatility, 2) +
                     (2 * wEq * wFi * 0.002) + 
                     (2 * wEq * wAlt * 0.045);
                     
    const portfolioVolatility = Math.sqrt(variance);

    setMetrics({
      expectedYield,
      portfolioVolatility
    });
  }, [allocation]);

  const radius = 140;
  const circumference = 2 * Math.PI * radius;
  
  const equitiesStroke = (allocation.equities / 100) * circumference;
  const fixedStroke = (allocation.fixedIncome / 100) * circumference;
  const altStroke = (allocation.alternatives / 100) * circumference;
  
  const equitiesOffset = 0;
  const fixedOffset = -equitiesStroke;
  const altOffset = fixedOffset - fixedStroke;

  const displayYield = (metrics.expectedYield * 100).toFixed(1);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <div className="snap-container">
      
      {/* Absolute Navbar */}
      <nav className="navbar-floating">
        <div className="logo-bold">AURELIAN</div>
        <div className="flex gap-4">
          <button className="text-white uppercase tracking-widest text-xs font-bold mr-6 hover:text-yellow-400 transition-colors">Client Login</button>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:border-yellow-400 transition-colors">
            <Lock size={16} color="white" />
          </div>
        </div>
      </nav>

      {/* Screen 1: Cinematic Hero */}
      <section className="snap-section">
        <div className="hero-bg"></div>
        <div className="hero-mesh"></div>
        
        <motion.div 
          className="z-10 flex flex-col items-center justify-center text-center px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.span variants={itemVariants} className="eyebrow">
            Sovereign Architecture
          </motion.span>
          <motion.h1 variants={itemVariants} className="title-giant text-glow">
            Command Your Legacy.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-slate-400 max-w-2xl text-lg mt-6 mb-12 leading-relaxed font-light">
            Algorithmic capital allocation, private market access, and secure institutional infrastructure crafted exclusively for the 1%.
          </motion.p>
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Apply for Access <ArrowRight size={20} className="ml-2" />
          </motion.button>
        </motion.div>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Screen 2: Gamified Social Proof */}
      <section className="snap-section bg-obsidian-900 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

        <motion.div 
          className="w-full max-w-7xl mx-auto px-8 z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.h2 variants={itemVariants} className="title-section text-center mb-24">The Architecture of Trust.</motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <span className="font-serif text-8xl font-medium text-white mb-4 tracking-tighter text-glow">$2.4<span className="text-5xl text-yellow-500">B</span></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Assets Under Advisement</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <span className="font-serif text-8xl font-medium text-white mb-4 tracking-tighter text-glow">98.4<span className="text-5xl text-yellow-500">%</span></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Generational Retention</span>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <span className="font-serif text-8xl font-medium text-white mb-4 tracking-tighter text-glow">250<span className="text-5xl text-yellow-500">+</span></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Private Syndiates</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Screen 3: The Wealth Simulator */}
      <section className="snap-section bg-obsidian-950">
        <motion.div 
          className="w-full max-w-6xl mx-auto px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Chart */}
            <motion.div variants={itemVariants} className="w-full lg:w-1/2 flex justify-center relative">
              <div className="absolute inset-0 bg-yellow-500/5 blur-3xl rounded-full"></div>
              <div className="relative w-[400px] h-[400px] flex justify-center items-center">
                
                <div className="absolute top-[10%] left-[30%] -translate-x-1/2 font-mono text-xs uppercase tracking-widest text-slate-400">Alternatives {allocation.alternatives}%</div>
                <div className="absolute top-[40%] -left-[5%] font-mono text-xs uppercase tracking-widest text-slate-400">Fixed {allocation.fixedIncome}%</div>
                <div className="absolute top-[50%] -right-[15%] font-mono text-xs uppercase tracking-widest text-slate-400">Equities {allocation.equities}%</div>
                
                <svg className="transform -rotate-90 w-[340px] h-[340px]" viewBox="0 0 340 340">
                  <circle cx="170" cy="170" r={radius} fill="transparent" stroke="#121316" strokeWidth="16" />
                  
                  <motion.circle 
                    cx="170" cy="170" r={radius} 
                    fill="transparent"
                    stroke="#6b7280"
                    strokeWidth="16"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: `0 ${circumference}` }}
                    animate={{ strokeDasharray: `${altStroke} ${circumference}` }}
                    strokeDashoffset={altOffset}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                  <motion.circle 
                    cx="170" cy="170" r={radius} 
                    fill="transparent"
                    stroke="#1a1b20"
                    strokeWidth="16"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: `0 ${circumference}` }}
                    animate={{ strokeDasharray: `${fixedStroke} ${circumference}` }}
                    strokeDashoffset={fixedOffset}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                  <motion.circle 
                    cx="170" cy="170" r={radius} 
                    fill="transparent"
                    stroke="#c5a059"
                    strokeWidth="16"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: `0 ${circumference}` }}
                    animate={{ strokeDasharray: `${equitiesStroke} ${circumference}` }}
                    strokeDashoffset={equitiesOffset}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </svg>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-serif text-5xl text-white">{displayYield}%</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 mt-2">Projected Yield</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Controls */}
            <motion.div variants={itemVariants} className="w-full lg:w-1/2">
              <h2 className="title-section mb-2">Algorithmic Allocation</h2>
              <p className="text-slate-400 mb-12 text-lg font-light">Dial into institutional-grade asset distributions. Observe macro-variance impacts in real-time.</p>
              
              <div className="space-y-10 p-10 glass-panel rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
                
                <div className="space-y-4">
                  <div className="flex justify-between font-mono text-sm uppercase tracking-widest text-slate-300">
                    <span>Equities</span>
                    <span className="text-yellow-500">{allocation.equities}%</span>
                  </div>
                  <input 
                    type="range" min="0" max="100" 
                    value={allocation.equities}
                    onChange={(e) => updateAllocation('equities', e.target.value)}
                    className="custom-slider-neon"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between font-mono text-sm uppercase tracking-widest text-slate-300">
                    <span>Fixed Income</span>
                    <span className="text-yellow-500">{allocation.fixedIncome}%</span>
                  </div>
                  <input 
                    type="range" min="0" max="100" 
                    value={allocation.fixedIncome}
                    onChange={(e) => updateAllocation('fixedIncome', e.target.value)}
                    className="custom-slider-neon"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between font-mono text-sm uppercase tracking-widest text-slate-300">
                    <span>Alternatives</span>
                    <span className="text-yellow-500">{allocation.alternatives}%</span>
                  </div>
                  <input 
                    type="range" min="0" max="100" 
                    value={allocation.alternatives}
                    onChange={(e) => updateAllocation('alternatives', e.target.value)}
                    className="custom-slider-neon"
                  />
                </div>
                
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* Screen 4: Digital Sovereignty (Features) */}
      <section className="snap-section bg-obsidian-900 border-t border-white/5">
        <motion.div 
          className="w-full max-w-7xl mx-auto px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="text-center mb-20">
            <motion.span variants={itemVariants} className="eyebrow">The Ecosystem</motion.span>
            <motion.h2 variants={itemVariants} className="title-section">Digital Sovereignty.</motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="glass-panel p-10 rounded-2xl group hover:border-yellow-500/30 transition-colors">
              <Activity className="text-yellow-500 mb-8" size={40} strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-white mb-4">Cryptographic Security</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Hardware-backed key generation and multi-party computation protocols ensure absolute sovereignty over your assets.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="glass-panel p-10 rounded-2xl group hover:border-yellow-500/30 transition-colors relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl"></div>
              <Globe className="text-yellow-500 mb-8" size={40} strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-white mb-4">Global Jurisdictions</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Seamlessly maneuver capital across borders with real-time tax harmonization and compliance analytics.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-panel p-10 rounded-2xl group hover:border-yellow-500/30 transition-colors">
              <Cpu className="text-yellow-500 mb-8" size={40} strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-white mb-4">Neural Execution</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Our proprietary AI models analyze macro events in milliseconds, executing predictive portfolio rebalancing instantly.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
