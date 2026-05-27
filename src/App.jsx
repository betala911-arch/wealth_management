import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import './index.css';

// ---------------------------------------------------------------------------
// ANIMATION COMPONENTS
// ---------------------------------------------------------------------------

const FadeUp = ({ children, delay = 0, duration = 1.5, className = "", yOffset = 30 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const DustParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 8}s`,
      animationDuration: `${6 + Math.random() * 6}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-80">
      {particles.map((p) => (
        <div
          key={p.id}
          className="dust-particle"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
          }}
        />
      ))}
    </div>
  );
};

// ---------------------------------------------------------------------------
// MAIN APP
// ---------------------------------------------------------------------------

export default function App() {
  const [ritualStep, setRitualStep] = useState(1);
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 1000], [0, 40]);

  return (
    <div className="bg-obsidian-deep font-sans relative selection:bg-champagne-accent selection:text-obsidian-deep">

      {/* Act I: The Monolith */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 mix-blend-difference"
      >
        <div className="flex justify-between items-center w-full container mx-auto px-6 md:px-12 lg:px-24 py-4">
          <div className="font-display-lg text-headline-lg md:text-display-lg text-platinum-white tracking-tighter">AURELIAN</div>
          <div className="hidden md:flex gap-12">
            {['MANIFESTO', 'CURATION', 'NARRATIVE'].map((item, i) => (
              <motion.a 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 + (i * 0.2), ease: [0.16, 1, 0.3, 1] }}
                className="font-data-mono text-data-mono text-on-surface-variant hover:text-champagne-accent transition-colors duration-500" 
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="breath-button font-data-mono text-data-mono text-platinum-white border-[0.5px] border-hairline-stroke px-6 py-2 hover:text-champagne-accent hover:border-champagne-accent transition-all duration-700"
          >
            Request Access
          </motion.button>
        </div>
      </motion.header>

      <main>
        {/* Act I Hero */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-obsidian-deep">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <motion.img 
                style={{ y: heroParallax }}
                alt="Aurelian Mechanical Precision" 
                className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale brightness-[0.4] animate-mechanical scale-105" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uik0Ut0de0iOItD4rAE2sNZpk_XpmrcSNXZgxisDxFxeDRGyaBB4DBEo6JjsI0b0OmGvqCMds8iSRI1x1235k2ICFAGp5EK7QXXmy9u5kKH-Hm4bxeVb2i3v0DzxRlWNJzNqHX06aiy7KelwLCDDydtxn7K5wLkxEay1c0x6gmFyztx3ruQlBgIFyhwJcUJnx4qmywWr6i2WAk9E05VTDiVkBB-DbAd8yhDM4y3V4u4nNYmLq33dHmOxGx9"
              />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none opacity-20 mix-blend-screen">
                <svg className="gear-slow absolute inset-0 w-full h-full text-champagne-accent fill-current" viewBox="0 0 100 100">
                  <path d="M50 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 26c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11zm38.1-13.4l-6.8-1.2c-.3-1.2-.7-2.4-1.2-3.5l4-5.6c.4-.6.3-1.4-.2-1.9l-4.2-4.2c-.5-.5-1.3-.6-1.9-.2l-5.6 4c-1.1-.5-2.3-.9-3.5-1.2l-1.2-6.8c-.1-.7-.8-1.2-1.5-1.2h-6c-.7 0-1.4.5-1.5 1.2l-1.2 6.8c-1.2.3-2.4.7-3.5 1.2l-5.6-4c-.6-.4-1.4-.3-1.9.2l-4.2 4.2c-.5.5-.6 1.3-.2 1.9l4 5.6c-.5 1.1-.9 2.3-1.2 3.5l-6.8 1.2c-.7.1-1.2.8-1.2 1.5v6c0 .7.5 1.4 1.2 1.5l6.8 1.2c.3 1.2.7 2.4 1.2 3.5l-4 5.6c-.4.6-.3 1.4.2 1.9l4.2 4.2c.5.5 1.3.6 1.9.2l5.6-4c1.1.5 2.3.9 3.5 1.2l1.2 6.8c.1.7.8 1.2 1.5 1.2h6c.7 0 1.4-.5 1.5-1.2l1.2-6.8c1.2-.3 2.4-.7 3.5-1.2l5.6 4c.6.4 1.4.3 1.9-.2l4.2-4.2c.5-.5.6-1.3.2-1.9l-4-5.6c.5-1.1.9-2.3 1.2-3.5l6.8-1.2c.7-.1 1.2-.8 1.2-1.5v-6c0-.7-.5-1.4-1.2-1.5z"></path>
                </svg>
              </div>

              <DustParticles />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep via-transparent to-obsidian-deep pointer-events-none"></div>
          </div>
          
          <div className="relative z-10 text-center space-y-12 mt-12 px-6">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display-lg text-6xl md:text-8xl lg:text-9xl text-platinum-white leading-none tracking-[0.2em]"
            >
              AURELIAN
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 2 }}
              className="font-data-mono text-data-mono text-champagne-accent tracking-[0.4em]"
            >
              PERMANENCE GUARANTEED
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 2, delay: 3 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.span 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="material-symbols-outlined text-platinum-white font-light text-2xl block"
            >
              ↓
            </motion.span>
          </motion.div>
        </section>

        {/* Act II: The Manifesto */}
        <section id="manifesto" className="min-h-screen flex flex-col justify-center py-48 md:py-64 relative z-10">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <div className="max-w-5xl mx-auto space-y-24 md:space-y-32 text-center md:text-left">
              <FadeUp delay={0.1} duration={2}>
                <p className="font-headline-lg text-3xl md:text-5xl text-platinum-white leading-[1.3] md:leading-relaxed">
                  India's sovereign trajectory is the emergence of a new global anchor. We transform this velocity into 'Generational Custody' for the modern Bharat.
                </p>
              </FadeUp>
              <FadeUp delay={0.3} duration={2}>
                <p className="font-headline-lg text-3xl md:text-5xl text-platinum-white leading-[1.3] md:leading-relaxed">
                  Aurelian exists at the silent intersection of civilizational legacy and institutional scale. We preserve the silence required for the accumulation of true Indian wealth.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Act III: The Curation */}
        <section id="curation" className="py-32 md:py-48 relative z-10">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">
            <FadeUp delay={0.1}>
              <div className="font-label-caps text-label-caps text-champagne-accent mb-20 tracking-widest text-center md:text-left">THE THREE PILLARS</div>
            </FadeUp>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 items-start">
              {/* Pillar 1 */}
              <FadeUp delay={0.2} yOffset={40} className="md:col-span-4 group border-t border-hairline-stroke pt-12 space-y-8 hover:bg-charcoal-core/50 transition-colors duration-1000 p-6 md:p-8 rounded-sm">
                <div className="font-data-mono text-data-mono text-on-tertiary-container">01 // ALPHA</div>
                <h3 className="font-headline-lg text-4xl text-platinum-white">Sovereign Alpha</h3>
                <p className="font-body-md text-body-md text-on-surface-variant opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-1000 leading-relaxed">
                  Navigating the structural transition from emerging market volatility to the stability of a sovereign creditor nation.
                </p>
                <div className="h-[350px] w-full overflow-hidden bg-charcoal-core mt-8">
                  <img alt="High-quality asset texture" className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 group-hover:brightness-100 transition-all duration-[1500ms] ease-out" src="https://lh3.googleusercontent.com/aida/ADBb0ujlew-Ygc1phI9WAUjX9YRF4EsA9qEcTrM7IpsGkoMoq2008sOkSnxwQgTlsrlTMjr9lUNAeds4FlZmL9xSV26ebFCPUb8AaEg0YjzbKGZHUcSaDMYRNfinmWsrlCuV3AilegCDkxTXbwtzH5KLCpSjK7A1h050ou3AvEn6Dq8aRsu2Ei-J_olzyQvOIuu1yH3iSeOMot-x-gp_aGkkAvfGYpgOSwlXIwGOh8kzqDd1VVEMyRBjqWhKAEOx" />
                </div>
              </FadeUp>

              {/* Pillar 2 */}
              <FadeUp delay={0.4} yOffset={40} className="md:col-span-4 md:mt-32 group border-t border-hairline-stroke pt-12 space-y-8 hover:bg-charcoal-core/50 transition-colors duration-1000 p-6 md:p-8 rounded-sm">
                <div className="font-data-mono text-data-mono text-on-tertiary-container">02 // TRUST</div>
                <h3 className="font-headline-lg text-4xl text-platinum-white">Legacy Custody</h3>
                <p className="font-body-md text-body-md text-on-surface-variant opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-1000 leading-relaxed">
                  Bespoke legal and digital frameworks designed for the hundred-year preservation of Indian family capital.
                </p>
                <div className="h-[450px] w-full overflow-hidden bg-charcoal-core mt-8">
                  <img alt="Vault mechanism precision" className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 group-hover:brightness-100 transition-all duration-[1500ms] ease-out" src="https://lh3.googleusercontent.com/aida/ADBb0uho6ewnOjhWiZ6YNmoP1tvbQxue57QJlUAUJ9nyiNwSIMAS9mJFtV290xxPeY6aKC3E_8LCs8VO6wxrjLL-eXoxqny6ce120Yc7yKL-Csyte6ONULQJ2ytWUyXnTD7jhq3Vtj1EwOr75zdZyOEtATsF30hihf0nVp5ZVkE0ejFaFhyuLnJKVP9DAE9AZM5Js5u78W_zzO4kWY46ls1XYAhI7ouN87UzP1RUo_IP-dy41Db07SgN-sR_Be0" />
                </div>
              </FadeUp>

              {/* Pillar 3 */}
              <FadeUp delay={0.6} yOffset={40} className="md:col-span-4 group border-t border-hairline-stroke pt-12 space-y-8 hover:bg-charcoal-core/50 transition-colors duration-1000 p-6 md:p-8 rounded-sm">
                <div className="font-data-mono text-data-mono text-on-tertiary-container">03 // GROWTH</div>
                <h3 className="font-headline-lg text-4xl text-platinum-white">Strategic Alpha</h3>
                <p className="font-body-md text-body-md text-on-surface-variant opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-1000 leading-relaxed">
                  India's current trajectory signals a transition from a capital-importing growth market to a major sovereign creditor. True wealth preservation requires navigating this Civilizational Premium.
                </p>
                <div className="h-[400px] w-full overflow-hidden bg-charcoal-core mt-8">
                  <img alt="Macro gold watch" className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 group-hover:brightness-100 transition-all duration-[1500ms] ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsu7kp6kheq4GAE0cz7V3NDdRYVY7gCPUYem_5oxVBIQZYdETDdGK6RaT0ZPeSYGQkGYR2KJQplGRpPaqVUOkcBZYScRHzpdIkcmlrZgXiMHFNqtbomKKtZgSnSumbc4oulPeY56W4x9DOGJjyPEW0yVs5G2p2s1S0jA9wfxpxjc0bDUi2rmzRpfd-pxnjq2JpoNLsfVcsVy3KqbxbkVsR5aloUWy6EM6G-pCVcKbyyPr0gku5-pEuVDu6KrdqANeZZ8eroP_qz8dK" />
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Act IV: Sovereign Narrative */}
        <section id="narrative" className="bg-charcoal-core py-32 md:py-64 relative overflow-hidden">
          <div className="absolute inset-0 terminal-grid opacity-20 pointer-events-none"></div>
          
          <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
            <FadeUp delay={0.1} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
              <div className="space-y-6 max-w-3xl">
                <div className="font-label-caps text-label-caps text-champagne-accent">SOVEREIGN NARRATIVE // BHARAT_ASCENT</div>
                <h2 className="font-headline-lg text-4xl md:text-6xl text-platinum-white leading-tight">The Emergence of Permanent Capital</h2>
                <p className="font-body-md text-lg text-on-surface-variant max-w-2xl">Beyond the noise of trade cycles, a fundamental re-architecture of the global financial order is underway.</p>
              </div>
              <div className="font-data-mono text-data-mono text-on-tertiary-container hidden md:block border border-hairline-stroke px-4 py-2 rounded-sm bg-obsidian-deep/30">EPOCH: S_04_IND</div>
            </FadeUp>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <FadeUp delay={0.3} className="space-y-16">
                <div className="group border-l-2 border-hairline-stroke pl-8 hover:border-champagne-accent transition-colors duration-700">
                  <div className="font-data-mono text-[10px] text-champagne-accent mb-4 tracking-widest">ARCHIVE REF: 72-A-92</div>
                  <h4 className="font-headline-lg text-3xl text-platinum-white mb-6 group-hover:text-champagne-accent transition-colors duration-1000">The Sovereign Creditor Shift</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed opacity-80">India's current trajectory signals a transition from a capital-importing growth market to a major sovereign creditor. By 2030, the domestic institutional base will exceed $4T, creating a permanent liquidity anchor that decouples Indian yield from global volatility.</p>
                </div>
                <div className="group border-l-2 border-hairline-stroke pl-8 hover:border-champagne-accent transition-colors duration-700">
                  <div className="font-data-mono text-[10px] text-champagne-accent mb-4 tracking-widest">ARCHIVE REF: 18-B-LEG</div>
                  <h4 className="font-headline-lg text-3xl text-platinum-white mb-6 group-hover:text-champagne-accent transition-colors duration-1000">The Civilizational Premium</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed opacity-80">True wealth preservation in Bharat requires navigating the 'Civilizational Premium'—the value locked in land, legacy, and lineage that standard Western financial models fail to capture or protect.</p>
                </div>
              </FadeUp>
              
              <FadeUp delay={0.5} className="border-[0.5px] border-hairline-stroke p-10 md:p-16 bg-obsidian-deep/50 space-y-12 backdrop-blur-md rounded-sm hover:bg-obsidian-deep/70 hover:border-champagne-accent/30 transition-all duration-1000">
                <div>
                  <div className="font-label-caps text-label-caps text-on-tertiary-container mb-12">SOVEREIGN INSIGHTS // Q4 PROJECTION</div>
                  <div className="space-y-10">
                    <div className="flex justify-between items-center border-b border-hairline-stroke pb-8 hover:border-champagne-accent/50 transition-colors duration-700">
                      <div className="space-y-2">
                        <div className="font-data-mono text-data-mono text-platinum-white">GIFT CITY LIQUIDITY</div>
                        <div className="font-body-md text-sm text-on-tertiary-container opacity-70">Projected Institutional Inflow</div>
                      </div>
                      <div className="font-data-mono text-3xl text-champagne-accent tracking-wider">+142%</div>
                    </div>
                    <div className="flex justify-between items-center border-b border-hairline-stroke pb-8 hover:border-champagne-accent/50 transition-colors duration-700">
                      <div className="space-y-2">
                        <div className="font-data-mono text-data-mono text-platinum-white">G-SEC REBALANCING</div>
                        <div className="font-body-md text-sm text-on-tertiary-container opacity-70">Sovereign Benchmark Shift</div>
                      </div>
                      <div className="font-data-mono text-2xl text-champagne-accent tracking-wider">OPTIMIZED</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="space-y-2">
                        <div className="font-data-mono text-data-mono text-platinum-white">LEGACY BUFFER</div>
                        <div className="font-body-md text-sm text-on-tertiary-container opacity-70">Generational Retention Rate</div>
                      </div>
                      <div className="font-data-mono text-3xl text-champagne-accent tracking-wider">99.8%</div>
                    </div>
                  </div>
                </div>
                <div className="font-body-md text-sm text-on-tertiary-container italic border-l-2 border-champagne-accent pl-6 opacity-80 mt-12">
                  "The next century is not defined by who grows the fastest, but by who preserves the longest." — Aurelian Protocol
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Act V: The Gates */}
        <section className="min-h-screen flex items-center justify-center bg-obsidian-deep py-32 relative z-10">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-center">
            <div className="max-w-2xl w-full text-center space-y-20">
              <FadeUp delay={0.1} className="space-y-6">
                <div className="font-label-caps text-label-caps text-champagne-accent tracking-[0.2em]">INITIATE INQUIRY</div>
                <h2 className="font-headline-lg text-5xl md:text-7xl text-platinum-white">Entry is a Ritual.</h2>
                <p className="font-body-md text-lg text-on-surface-variant opacity-80">We do not accept applications. We honor introductions.</p>
              </FadeUp>

              <AnimatePresence mode="wait">
                {ritualStep === 1 && (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-10 bg-charcoal-core/30 p-10 rounded-sm border border-hairline-stroke"
                  >
                    <div className="border-b border-hairline-stroke pb-4 text-left group">
                      <label className="font-label-caps text-on-tertiary-container group-focus-within:text-champagne-accent block mb-4 transition-colors duration-500">IDENTIFIER</label>
                      <input className="bg-transparent border-none w-full font-headline-lg text-3xl text-platinum-white placeholder-white/20 focus:ring-0 outline-none" placeholder="Full Legal Name" type="text" />
                    </div>
                    <button 
                      onClick={() => setRitualStep(2)}
                      className="breath-button w-full py-6 font-data-mono text-data-mono text-platinum-white border-[0.5px] border-hairline-stroke hover:bg-platinum-white hover:text-obsidian-deep transition-all duration-700 tracking-widest uppercase"
                    >
                      PROCEED
                    </button>
                  </motion.div>
                )}

                {ritualStep === 2 && (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-10 bg-charcoal-core/30 p-10 rounded-sm border border-hairline-stroke"
                  >
                    <div className="border-b border-hairline-stroke pb-4 text-left group">
                      <label className="font-label-caps text-on-tertiary-container group-focus-within:text-champagne-accent block mb-4 transition-colors duration-500">DOMAIN</label>
                      <select className="bg-transparent border-none w-full font-headline-lg text-3xl text-platinum-white focus:ring-0 outline-none appearance-none cursor-pointer">
                        <option className="bg-obsidian-deep">Private Office</option>
                        <option className="bg-obsidian-deep">Sovereign Entity</option>
                        <option className="bg-obsidian-deep">Institutional Trust</option>
                      </select>
                    </div>
                    <button 
                      className="w-full py-6 font-data-mono text-data-mono bg-platinum-white text-obsidian-deep hover:bg-champagne-accent transition-all duration-700 tracking-widest uppercase"
                    >
                      SUBMIT PETITION
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-obsidian-deep border-t border-hairline-stroke relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16 flex flex-col md:flex-row justify-between gap-12">
          <div className="space-y-6">
            <div className="font-label-caps text-label-caps text-platinum-white tracking-widest">AURELIAN ASSET MANAGEMENT</div>
            <div className="font-data-mono text-[10px] text-on-tertiary-container tracking-widest">© MMXXIV PERMANENCE GUARANTEED.</div>
          </div>
          
          <div className="grid grid-cols-2 md:flex gap-16">
            <div className="flex flex-col gap-4">
              <span className="font-label-caps text-[10px] text-on-tertiary-container tracking-widest mb-2">PROTOCOL</span>
              <a className="font-data-mono text-data-mono text-on-surface-variant hover:text-champagne-accent transition-colors duration-500" href="#">VAULT</a>
              <a className="font-data-mono text-data-mono text-on-surface-variant hover:text-champagne-accent transition-colors duration-500" href="#">LEDGER</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-label-caps text-[10px] text-on-tertiary-container tracking-widest mb-2">GOVERNANCE</span>
              <a className="font-data-mono text-data-mono text-on-surface-variant hover:text-champagne-accent transition-colors duration-500" href="#">LEGAL</a>
              <a className="font-data-mono text-data-mono text-on-surface-variant hover:text-champagne-accent transition-colors duration-500" href="#">PRIVACY</a>
            </div>
          </div>
          
          <div className="text-left md:text-right">
            <div className="font-label-caps text-platinum-white tracking-widest">CHENNAI</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
