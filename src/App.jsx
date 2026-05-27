import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './index.css';

// ---------------------------------------------------------------------------
// ANIMATION COMPONENTS
// ---------------------------------------------------------------------------

const FadeUp = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-2 h-2 bg-[var(--color-champagne-accent)] rounded-full pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: position.x - 4,
        y: position.y - 4,
        scale: isHovering ? 5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    />
  );
};

const DustParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 8}s`,
      animationDuration: `${5 + Math.random() * 5}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
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
  const y1 = useTransform(scrollY, [0, 1000], [0, 30]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 50]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 40]);

  return (
    <div className="bg-[var(--color-obsidian-deep)] font-sans relative">
      <CustomCursor />

      {/* Act I: The Monolith */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex justify-between items-center w-full px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-[var(--spacing-unit)] max-w-[var(--spacing-max-width)] mx-auto">
          <div className="font-serif text-3xl md:text-[80px] text-[var(--color-platinum-white)] tracking-tighter leading-none">AURELIAN</div>
          <div className="hidden md:flex gap-[var(--spacing-gutter)]">
            <a className="font-mono text-[14px] text-[var(--color-on-surface-variant)] hover:text-[var(--color-champagne-accent)] transition-colors duration-500 tracking-[0.1em]" href="#manifesto">MANIFESTO</a>
            <a className="font-mono text-[14px] text-[var(--color-on-surface-variant)] hover:text-[var(--color-champagne-accent)] transition-colors duration-500 tracking-[0.1em]" href="#curation">CURATION</a>
            <a className="font-mono text-[14px] text-[var(--color-on-surface-variant)] hover:text-[var(--color-champagne-accent)] transition-colors duration-500 tracking-[0.1em]" href="#narrative">NARRATIVE</a>
          </div>
          <button className="breath-button font-mono text-[14px] text-[var(--color-platinum-white)] border-[0.5px] border-[var(--color-hairline-stroke)] px-6 py-2 hover:text-[var(--color-champagne-accent)] hover:border-[var(--color-champagne-accent)] transition-all duration-700 tracking-[0.1em]">
            Request Access
          </button>
        </div>
      </header>

      <main>
        {/* Act I Hero */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-[var(--color-obsidian-deep)]">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <motion.img 
                style={{ y: y1 }}
                alt="Aurelian Mechanical Precision" 
                className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale brightness-[0.4] animate-mechanical scale-105" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uik0Ut0de0iOItD4rAE2sNZpk_XpmrcSNXZgxisDxFxeDRGyaBB4DBEo6JjsI0b0OmGvqCMds8iSRI1x1235k2ICFAGp5EK7QXXmy9u5kKH-Hm4bxeVb2i3v0DzxRlWNJzNqHX06aiy7KelwLCDDydtxn7K5wLkxEay1c0x6gmFyztx3ruQlBgIFyhwJcUJnx4qmywWr6i2WAk9E05VTDiVkBB-DbAd8yhDM4y3V4u4nNYmLq33dHmOxGx9"
              />
              
              {/* Simulated Gear Mechanism Overlays */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none opacity-20 mix-blend-screen">
                <svg className="gear-slow absolute inset-0 w-full h-full text-[var(--color-champagne-accent)] fill-current" viewBox="0 0 100 100">
                  <path d="M50 35c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 26c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11zm38.1-13.4l-6.8-1.2c-.3-1.2-.7-2.4-1.2-3.5l4-5.6c.4-.6.3-1.4-.2-1.9l-4.2-4.2c-.5-.5-1.3-.6-1.9-.2l-5.6 4c-1.1-.5-2.3-.9-3.5-1.2l-1.2-6.8c-.1-.7-.8-1.2-1.5-1.2h-6c-.7 0-1.4.5-1.5 1.2l-1.2 6.8c-1.2.3-2.4.7-3.5 1.2l-5.6-4c-.6-.4-1.4-.3-1.9.2l-4.2 4.2c-.5.5-.6 1.3-.2 1.9l4 5.6c-.5 1.1-.9 2.3-1.2 3.5l-6.8 1.2c-.7.1-1.2.8-1.2 1.5v6c0 .7.5 1.4 1.2 1.5l6.8 1.2c.3 1.2.7 2.4 1.2 3.5l-4 5.6c-.4.6-.3 1.4.2 1.9l4.2 4.2c.5.5 1.3.6 1.9.2l5.6-4c1.1.5 2.3.9 3.5 1.2l1.2 6.8c.1.7.8 1.2 1.5 1.2h6c.7 0 1.4-.5 1.5-1.2l1.2-6.8c1.2-.3 2.4-.7 3.5-1.2l5.6 4c.6.4 1.4.3 1.9-.2l4.2-4.2c.5-.5.6-1.3.2-1.9l-4-5.6c.5-1.1.9-2.3 1.2-3.5l6.8-1.2c.7-.1 1.2-.8 1.2-1.5v-6c0-.7-.5-1.4-1.2-1.5z"></path>
                </svg>
              </div>

              <DustParticles />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-obsidian-deep)] via-transparent to-[var(--color-obsidian-deep)] pointer-events-none"></div>
          </div>
          
          <div className="relative z-10 text-center space-y-12 mt-12">
            <motion.h1 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[12vw] md:text-[14vw] text-[var(--color-platinum-white)] leading-none tracking-[0.2em]"
            >
              AURELIAN
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 1.5 }}
              className="font-mono text-[14px] text-[var(--color-champagne-accent)] tracking-[0.4em]"
            >
              PERMANENCE GUARANTEED
            </motion.div>
          </div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <span className="text-[var(--color-platinum-white)]/30 font-light opacity-50 text-2xl">↓</span>
          </motion.div>
        </section>

        {/* Act II: The Manifesto */}
        <section id="manifesto" className="min-h-screen flex flex-col justify-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-64 max-w-[var(--spacing-max-width)] mx-auto">
          <div className="max-w-4xl space-y-32">
            <FadeUp delay={0.1}>
              <p className="font-serif text-3xl md:text-[48px] text-[var(--color-platinum-white)] leading-[1.2] tracking-[0.05em]">
                India's sovereign trajectory is the emergence of a new global anchor. We transform this velocity into 'Generational Custody' for the modern Bharat.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-serif text-3xl md:text-[48px] text-[var(--color-platinum-white)] leading-[1.2] tracking-[0.05em]">
                Aurelian exists at the silent intersection of civilizational legacy and institutional scale. We preserve the silence required for the accumulation of true Indian wealth.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Act III: The Curation */}
        <section id="curation" className="py-32 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-max-width)] mx-auto">
          <div className="font-sans font-bold text-[12px] text-[var(--color-champagne-accent)] mb-16 tracking-[0.15em] uppercase">THE THREE PILLARS</div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)] items-start">
            {/* Pillar 1 */}
            <div className="md:col-span-4 group border-t border-[var(--color-hairline-stroke)] pt-12 space-y-8 hover:bg-[var(--color-charcoal-core)]/50 transition-all duration-700 p-6">
              <div className="font-mono text-[14px] text-[var(--color-on-tertiary-container)] tracking-[0.1em]">01 // ALPHA</div>
              <h3 className="font-serif text-4xl text-[var(--color-platinum-white)] tracking-[0.05em]">Sovereign Alpha</h3>
              <p className="font-sans text-[16px] text-[var(--color-on-surface-variant)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 font-light leading-[24px]">
                Navigating the structural transition from emerging market volatility to the stability of a sovereign creditor nation.
              </p>
              <div className="h-[300px] w-full overflow-hidden bg-[var(--color-charcoal-core)]">
                <img alt="High-quality asset texture" className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 group-hover:brightness-100 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida/ADBb0ujlew-Ygc1phI9WAUjX9YRF4EsA9qEcTrM7IpsGkoMoq2008sOkSnxwQgTlsrlTMjr9lUNAeds4FlZmL9xSV26ebFCPUb8AaEg0YjzbKGZHUcSaDMYRNfinmWsrlCuV3AilegCDkxTXbwtzH5KLCpSjK7A1h050ou3AvEn6Dq8aRsu2Ei-J_olzyQvOIuu1yH3iSeOMot-x-gp_aGkkAvfGYpgOSwlXIwGOh8kzqDd1VVEMyRBjqWhKAEOx" />
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="md:col-span-4 md:mt-32 group border-t border-[var(--color-hairline-stroke)] pt-12 space-y-8 hover:bg-[var(--color-charcoal-core)]/50 transition-all duration-700 p-6">
              <div className="font-mono text-[14px] text-[var(--color-on-tertiary-container)] tracking-[0.1em]">02 // TRUST</div>
              <h3 className="font-serif text-4xl text-[var(--color-platinum-white)] tracking-[0.05em]">Legacy Custody</h3>
              <p className="font-sans text-[16px] text-[var(--color-on-surface-variant)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 font-light leading-[24px]">
                Bespoke legal and digital frameworks designed for the hundred-year preservation of Indian family capital.
              </p>
              <div className="h-[400px] w-full overflow-hidden bg-[var(--color-charcoal-core)]">
                <img alt="Vault mechanism precision" className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 group-hover:brightness-100 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida/ADBb0uho6ewnOjhWiZ6YNmoP1tvbQxue57QJlUAUJ9nyiNwSIMAS9mJFtV290xxPeY6aKC3E_8LCs8VO6wxrjLL-eXoxqny6ce120Yc7yKL-Csyte6ONULQJ2ytWUyXnTD7jhq3Vtj1EwOr75zdZyOEtATsF30hihf0nVp5ZVkE0ejFaFhyuLnJKVP9DAE9AZM5Js5u78W_zzO4kWY46ls1XYAhI7ouN87UzP1RUo_IP-dy41Db07SgN-sR_Be0" />
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="md:col-span-4 group border-t border-[var(--color-hairline-stroke)] pt-12 space-y-8 hover:bg-[var(--color-charcoal-core)]/50 transition-all duration-700 p-6">
              <div className="font-mono text-[14px] text-[var(--color-on-tertiary-container)] tracking-[0.1em]">03 // GROWTH</div>
              <h3 className="font-serif text-4xl text-[var(--color-platinum-white)] tracking-[0.05em]">Strategic Alpha</h3>
              <p className="font-sans text-[16px] text-[var(--color-on-surface-variant)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 font-light leading-[24px]">
                India's current trajectory signals a transition from a capital-importing growth market to a major sovereign creditor. By 2030, the domestic institutional base will exceed $4T, creating a permanent liquidity anchor. True wealth preservation in Bharat requires navigating the Civilizational Premium—the value locked in land, legacy, and lineage that standard Western financial models fail to capture.
              </p>
              <div className="h-[350px] w-full overflow-hidden bg-[var(--color-charcoal-core)]">
                <img alt="Macro gold watch" className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 group-hover:brightness-100 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsu7kp6kheq4GAE0cz7V3NDdRYVY7gCPUYem_5oxVBIQZYdETDdGK6RaT0ZPeSYGQkGYR2KJQplGRpPaqVUOkcBZYScRHzpdIkcmlrZgXiMHFNqtbomKKtZgSnSumbc4oulPeY56W4x9DOGJjyPEW0yVs5G2p2s1S0jA9wfxpxjc0bDUi2rmzRpfd-pxnjq2JpoNLsfVcsVy3KqbxbkVsR5aloUWy6EM6G-pCVcKbyyPr0gku5-pEuVDu6KrdqANeZZ8eroP_qz8dK" />
              </div>
            </div>
          </div>
        </section>

        {/* Act IV: Sovereign Narrative */}
        <section id="narrative" className="bg-[var(--color-charcoal-core)] py-64 relative overflow-hidden">
          <div className="absolute inset-0 terminal-grid opacity-20 pointer-events-none"></div>
          
          <div className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-max-width)] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24">
              <div className="space-y-4 max-w-2xl">
                <div className="font-sans font-bold text-[12px] text-[var(--color-champagne-accent)] tracking-[0.15em] uppercase">SOVEREIGN NARRATIVE // BHARAT_ASCENT</div>
                <h2 className="font-serif text-5xl text-[var(--color-platinum-white)] tracking-[0.05em] leading-[1.1]">The Emergence of Permanent Capital</h2>
                <p className="font-sans text-[16px] text-[var(--color-on-surface-variant)] font-light">Beyond the noise of trade cycles, a fundamental re-architecture of the global financial order is underway.</p>
              </div>
              <div className="font-mono text-[14px] tracking-[0.1em] text-[var(--color-on-tertiary-container)] hidden md:block">EPOCH: S_04_IND</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <FadeUp delay={0.1} className="space-y-12">
                <div className="group">
                  <div className="font-mono text-[10px] text-[var(--color-champagne-accent)] mb-2 tracking-[0.1em]">ARCHIVE REF: 72-A-92</div>
                  <h4 className="font-serif text-3xl text-[var(--color-platinum-white)] mb-4 tracking-[0.05em]">The Sovereign Creditor Shift</h4>
                  <p className="font-sans text-[16px] text-[var(--color-on-surface-variant)] leading-[24px] font-light">India's current trajectory signals a transition from a capital-importing growth market to a major sovereign creditor. By 2030, the domestic institutional base will exceed $4T, creating a permanent liquidity anchor that decouples Indian yield from global volatility.</p>
                </div>
                <div className="group">
                  <div className="font-mono text-[10px] text-[var(--color-champagne-accent)] mb-2 tracking-[0.1em]">ARCHIVE REF: 18-B-LEG</div>
                  <h4 className="font-serif text-3xl text-[var(--color-platinum-white)] mb-4 tracking-[0.05em]">The Civilizational Premium</h4>
                  <p className="font-sans text-[16px] text-[var(--color-on-surface-variant)] leading-[24px] font-light">True wealth preservation in Bharat requires navigating the 'Civilizational Premium'—the value locked in land, legacy, and lineage that standard Western financial models fail to capture or protect.</p>
                </div>
              </FadeUp>
              
              <FadeUp delay={0.3} className="border-[0.5px] border-[var(--color-hairline-stroke)] p-12 bg-[var(--color-obsidian-deep)]/50 space-y-12 backdrop-blur-sm">
                <div>
                  <div className="font-sans font-bold text-[12px] text-[var(--color-on-tertiary-container)] mb-8 tracking-[0.15em] uppercase">SOVEREIGN INSIGHTS // Q4 PROJECTION</div>
                  <div className="space-y-8">
                    <div className="flex justify-between items-start border-b border-[var(--color-hairline-stroke)] pb-6">
                      <div className="space-y-1">
                        <div className="font-mono text-[14px] text-[var(--color-platinum-white)] tracking-[0.1em]">GIFT CITY LIQUIDITY</div>
                        <div className="font-sans text-[12px] text-[var(--color-on-tertiary-container)] font-light">Projected Institutional Inflow</div>
                      </div>
                      <div className="font-mono text-2xl text-[var(--color-champagne-accent)] tracking-[0.1em]">+142%</div>
                    </div>
                    <div className="flex justify-between items-start border-b border-[var(--color-hairline-stroke)] pb-6">
                      <div className="space-y-1">
                        <div className="font-mono text-[14px] text-[var(--color-platinum-white)] tracking-[0.1em]">G-SEC REBALANCING</div>
                        <div className="font-sans text-[12px] text-[var(--color-on-tertiary-container)] font-light">Sovereign Benchmark Shift</div>
                      </div>
                      <div className="font-mono text-2xl text-[var(--color-champagne-accent)] tracking-[0.1em]">OPTIMIZED</div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="font-mono text-[14px] text-[var(--color-platinum-white)] tracking-[0.1em]">LEGACY BUFFER</div>
                        <div className="font-sans text-[12px] text-[var(--color-on-tertiary-container)] font-light">Generational Retention Rate</div>
                      </div>
                      <div className="font-mono text-2xl text-[var(--color-champagne-accent)] tracking-[0.1em]">99.8%</div>
                    </div>
                  </div>
                </div>
                <div className="font-sans text-[14px] text-[var(--color-on-tertiary-container)] italic border-l-[0.5px] border-[var(--color-champagne-accent)] pl-6 font-light">
                  "The next century is not defined by who grows the fastest, but by who preserves the longest." — Aurelian Protocol
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Act V: The Gates */}
        <section className="min-h-screen flex items-center justify-center bg-[var(--color-obsidian-deep)] px-[var(--spacing-margin-mobile)]">
          <div className="max-w-xl w-full text-center space-y-16">
            <FadeUp delay={0.1} className="space-y-4">
              <div className="font-sans font-bold text-[12px] text-[var(--color-champagne-accent)] tracking-[0.15em] uppercase">INITIATE INQUIRY</div>
              <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-platinum-white)] tracking-[0.05em]">Entry is a Ritual.</h2>
              <p className="font-sans text-[16px] text-[var(--color-on-surface-variant)] font-light">We do not accept applications. We honor introductions.</p>
            </FadeUp>

            {ritualStep === 1 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                <div className="border-b border-[var(--color-hairline-stroke)] py-4 text-left">
                  <label className="font-sans font-bold text-[12px] text-[var(--color-on-tertiary-container)] block mb-2 tracking-[0.15em] uppercase">IDENTIFIER</label>
                  <input className="bg-transparent border-none w-full font-serif text-3xl text-[var(--color-platinum-white)] placeholder-[var(--color-platinum-white)]/20 focus:ring-0 outline-none" placeholder="Full Legal Name" type="text" />
                </div>
                <button 
                  onClick={() => setRitualStep(2)}
                  className="breath-button w-full py-6 font-mono text-[14px] tracking-[0.1em] text-[var(--color-platinum-white)] border-[0.5px] border-[var(--color-hairline-stroke)] hover:bg-[var(--color-platinum-white)] hover:text-[var(--color-obsidian-deep)] transition-all duration-700 uppercase"
                >
                  PROCEED
                </button>
              </motion.div>
            )}

            {ritualStep === 2 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                <div className="border-b border-[var(--color-hairline-stroke)] py-4 text-left">
                  <label className="font-sans font-bold text-[12px] text-[var(--color-on-tertiary-container)] block mb-2 tracking-[0.15em] uppercase">DOMAIN</label>
                  <select className="bg-transparent border-none w-full font-serif text-3xl text-[var(--color-platinum-white)] focus:ring-0 appearance-none cursor-none outline-none">
                    <option className="bg-[var(--color-obsidian-deep)]">Private Office</option>
                    <option className="bg-[var(--color-obsidian-deep)]">Sovereign Entity</option>
                    <option className="bg-[var(--color-obsidian-deep)]">Institutional Trust</option>
                  </select>
                </div>
                <button 
                  className="w-full py-6 font-mono text-[14px] tracking-[0.1em] bg-[var(--color-platinum-white)] text-[var(--color-obsidian-deep)] hover:bg-[var(--color-champagne-accent)] transition-all duration-700 uppercase"
                >
                  SUBMIT PETITION
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-[var(--color-obsidian-deep)] border-t border-[var(--color-hairline-stroke)]">
        <div className="w-full px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-12 max-w-[var(--spacing-max-width)] mx-auto flex flex-col md:flex-row justify-between gap-[var(--spacing-gutter)]">
          <div className="space-y-4">
            <div className="font-sans font-bold text-[12px] text-[var(--color-platinum-white)] tracking-[0.15em] uppercase">AURELIAN ASSET MANAGEMENT</div>
            <div className="font-mono text-[10px] text-[var(--color-on-tertiary-container)] tracking-[0.1em]">© MMXXIV PERMANENCE GUARANTEED.</div>
          </div>
          
          <div className="grid grid-cols-2 md:flex gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-sans font-bold text-[10px] text-[var(--color-on-tertiary-container)] tracking-[0.15em] uppercase">PROTOCOL</span>
              <a className="font-mono text-[14px] tracking-[0.1em] text-[var(--color-on-surface-variant)] hover:text-[var(--color-champagne-accent)] transition-colors" href="#">VAULT</a>
              <a className="font-mono text-[14px] tracking-[0.1em] text-[var(--color-on-surface-variant)] hover:text-[var(--color-champagne-accent)] transition-colors" href="#">LEDGER</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-sans font-bold text-[10px] text-[var(--color-on-tertiary-container)] tracking-[0.15em] uppercase">GOVERNANCE</span>
              <a className="font-mono text-[14px] tracking-[0.1em] text-[var(--color-on-surface-variant)] hover:text-[var(--color-champagne-accent)] transition-colors" href="#">LEGAL</a>
              <a className="font-mono text-[14px] tracking-[0.1em] text-[var(--color-on-surface-variant)] hover:text-[var(--color-champagne-accent)] transition-colors" href="#">PRIVACY</a>
            </div>
          </div>
          
          <div className="text-right">
            <div className="font-sans font-bold text-[12px] text-[var(--color-platinum-white)] tracking-[0.15em] uppercase">CHENNAI</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
