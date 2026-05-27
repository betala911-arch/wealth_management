import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Hexagon, Lock, Shield, Fingerprint } from 'lucide-react';
import './index.css';

// ---------------------------------------------------------------------------
// ANIMATION COMPONENTS
// ---------------------------------------------------------------------------

const FadeUp = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Perpetual Breathing Animation for the Watermarks
const BreathingWatermark = ({ text }) => {
  return (
    <motion.div
      animate={{ 
        opacity: [0.02, 0.05, 0.02],
        y: [0, -10, 0]
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute -top-20 -left-10 text-[200px] md:text-[300px] font-serif text-[var(--color-gold)] font-bold pointer-events-none select-none z-0"
    >
      {text}
    </motion.div>
  );
};

// ---------------------------------------------------------------------------
// MAIN APP
// ---------------------------------------------------------------------------

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-obsidian)] text-[var(--color-ivory)] selection:bg-[var(--color-gold)] selection:text-[var(--color-obsidian)] relative font-sans overflow-x-hidden">
      
      <div className="absolute inset-0 noise-bg pointer-events-none z-0"></div>

      {/* NAVBAR - HARDCODED BG ON SCROLL */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0A0A0A] border-b border-[var(--color-gold)]/10 py-5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center relative z-10">
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 flex items-center justify-center border border-[var(--color-gold)]/40">
              <span className="font-serif font-bold text-lg text-[var(--color-gold)]">A</span>
            </div>
            <span className="font-serif text-xl tracking-[0.3em] text-[var(--color-ivory)] uppercase">
              Aurelian
            </span>
          </div>
          
          <div className="hidden md:flex gap-16 text-[10px] tracking-[0.3em] uppercase font-bold text-[var(--color-muted)]">
            <a href="#philosophy" className="hover:text-[var(--color-gold)] transition-colors">Philosophy</a>
            <a href="#frameworks" className="hover:text-[var(--color-gold)] transition-colors">Frameworks</a>
            <a href="#inquiry" className="hover:text-[var(--color-gold)] transition-colors">Initiate</a>
          </div>
          
          {/* Mobile Menu Icon Placeholder */}
          <div className="md:hidden w-6 h-[1px] bg-[var(--color-gold)]/50 relative before:absolute before:w-6 before:h-[1px] before:bg-[var(--color-gold)]/50 before:-top-2 after:absolute after:w-4 after:h-[1px] after:bg-[var(--color-gold)]/50 after:top-2"></div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="philosophy" className="relative hero-glow min-h-screen flex flex-col justify-center pt-[180px] pb-32 px-6 lg:px-12 z-10">
        <div className="max-w-6xl mx-auto w-full">
          <FadeUp delay={0.1}>
            <span className="text-[var(--color-gold)] text-[10px] tracking-[0.5em] uppercase font-bold mb-16 block flex items-center gap-6">
              <span className="w-12 h-[1px] bg-[var(--color-gold)]/30"></span>
              Institutional Wealth
            </span>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-[120px] font-serif text-[var(--color-ivory)] leading-[0.95] mb-16 tracking-tight">
              CAPITAL,<br />
              <span className="text-[var(--color-muted)]">ARCHITECTED</span><br />
              FOR GENERATIONS.
            </h1>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <div className="md:ml-24 max-w-2xl border-l border-[var(--color-gold)]/20 pl-8">
              <p className="text-[var(--color-muted)] text-xl leading-relaxed tracking-wide font-light mb-12">
                We merge institutional-grade infrastructure with algorithmic precision to protect and scale legacy wealth for the world's most discerning families.
              </p>
              <a href="#inquiry" className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-bold text-[var(--color-gold)] hover:text-[var(--color-ivory)] transition-colors">
                Request Private Access <ArrowRight size={14} />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* VALUE PROPOSITIONS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-16">
          
          <FadeUp delay={0.1} className="flex flex-col group border-t border-[var(--color-gold)]/10 pt-12">
            <div className="mb-10 text-[var(--color-gold)]">
              <Hexagon size={24} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-serif text-[var(--color-ivory)] mb-6 uppercase tracking-[0.1em]">Algorithmic Yield</h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed font-light tracking-wide">
              Proprietary quantitative forecasting and alternative asset syndication designed to dynamically outpace market volatility.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.2} className="flex flex-col group border-t border-[var(--color-gold)]/10 pt-12">
            <div className="mb-10 text-[var(--color-gold)]">
              <Lock size={24} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-serif text-[var(--color-ivory)] mb-6 uppercase tracking-[0.1em]">Cryptographic Custody</h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed font-light tracking-wide">
              Military-grade cold storage and multi-signature enclave protocols ensuring absolute, immutable capital sovereignty.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.3} className="flex flex-col group border-t border-[var(--color-gold)]/10 pt-12">
            <div className="mb-10 text-[var(--color-gold)]">
              <Shield size={24} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-serif text-[var(--color-ivory)] mb-6 uppercase tracking-[0.1em]">Global Sovereignty</h3>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed font-light tracking-wide">
              Real-time jurisdictional arbitrage and stateless wealth architecture for borderless legacy preservation.
            </p>
          </FadeUp>
          
        </div>
      </section>

      {/* STRATEGIC FRAMEWORKS - ASYMMETRICAL EDITORIAL LAYOUT */}
      <section id="frameworks" className="py-40 relative z-20 border-t border-white/5 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="mb-40 md:ml-12">
            <FadeUp delay={0.1}>
              <span className="text-[var(--color-gold)] text-[10px] tracking-[0.5em] uppercase font-bold mb-8 block">Methodology</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-ivory)] tracking-tight mb-8">Strategic<br />Frameworks</h2>
            </FadeUp>
          </div>

          <div className="space-y-48">
            {/* Framework 01 */}
            <div className="relative max-w-4xl mx-auto">
              <BreathingWatermark text="01" />
              <div className="relative z-10 md:ml-32 pt-20">
                <FadeUp delay={0.2}>
                  <h3 className="text-3xl md:text-5xl font-serif text-[var(--color-ivory)] mb-10 leading-tight">Family Office Structuring</h3>
                  <div className="md:ml-16 max-w-xl">
                    <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-10 font-light tracking-wide">
                      We architect comprehensive multi-generational governance models. Our systems ensure seamless tax harmonization, philanthropic vehicle establishment, and frictionless generational transfer.
                    </p>
                    <a href="#inquiry" className="inline-flex items-center gap-3 text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors font-bold text-[10px] uppercase tracking-[0.3em]">
                      Discuss Structure <ArrowRight size={14} />
                    </a>
                  </div>
                </FadeUp>
              </div>
            </div>

            {/* Framework 02 */}
            <div className="relative max-w-4xl mx-auto">
              <BreathingWatermark text="02" />
              <div className="relative z-10 md:ml-32 pt-20">
                <FadeUp delay={0.2}>
                  <h3 className="text-3xl md:text-5xl font-serif text-[var(--color-ivory)] mb-10 leading-tight">Private Market Syndication</h3>
                  <div className="md:ml-16 max-w-xl">
                    <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-10 font-light tracking-wide">
                      Exclusive access to late-stage venture, pre-IPO liquidity, and sovereign debt instruments. Our network bypasses traditional gatekeepers to secure asymmetric upside.
                    </p>
                    <a href="#inquiry" className="inline-flex items-center gap-3 text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors font-bold text-[10px] uppercase tracking-[0.3em]">
                      Explore Syndicates <ArrowRight size={14} />
                    </a>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA - COMMAND TERMINAL */}
      <section id="inquiry" className="py-48 relative z-20 border-t border-[var(--color-gold)]/20 bg-[var(--color-obsidian)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          
          <FadeUp delay={0.1}>
            <Fingerprint size={40} className="text-[var(--color-gold)] mx-auto mb-12" strokeWidth={1} />
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[var(--color-ivory)] tracking-tight">
              Initiate Dialogue
            </h2>
            <p className="text-[var(--color-muted)] text-lg mb-20 leading-relaxed font-light tracking-wide mx-auto">
              Our syndicates operate strictly by invitation. Request a private cryptographic briefing with our quantitative directors.
            </p>
          </FadeUp>

          <FadeUp delay={0.3} className="text-left">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <label className="block text-[9px] font-bold text-[var(--color-gold)] uppercase tracking-[0.3em] mb-3">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-lg text-[var(--color-ivory)] focus:border-[var(--color-gold)] outline-none transition-colors placeholder-transparent" />
                </div>
                <div>
                  <label className="block text-[9px] font-bold text-[var(--color-gold)] uppercase tracking-[0.3em] mb-3">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-lg text-[var(--color-ivory)] focus:border-[var(--color-gold)] outline-none transition-colors placeholder-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-[9px] font-bold text-[var(--color-gold)] uppercase tracking-[0.3em] mb-3">Corporate Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-lg text-[var(--color-ivory)] focus:border-[var(--color-gold)] outline-none transition-colors placeholder-transparent" />
              </div>
              <div className="pt-12 text-center">
                <button className="w-full bg-[var(--color-gold)] hover:bg-[var(--color-gold-hover)] text-[var(--color-obsidian)] px-16 py-6 font-bold transition-colors tracking-[0.3em] uppercase text-[10px]">
                  Submit Encrypted Inquiry
                </button>
              </div>
            </form>
          </FadeUp>

        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-white/5 text-center py-16">
        <p className="text-[var(--color-muted)] text-[9px] tracking-[0.4em] uppercase font-bold">© 2026 Aurelian Quantitative Wealth. Strict Confidentiality.</p>
      </footer>

    </div>
  );
}
