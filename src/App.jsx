import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Lock, Hexagon, Fingerprint, Shield } from 'lucide-react';
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
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
    <div className="min-h-screen bg-[var(--color-obsidian)] text-[var(--color-ivory)] selection:bg-[var(--color-gold)] selection:text-black relative font-sans">
      
      <div className="absolute inset-0 noise-bg pointer-events-none z-0"></div>

      {/* NAVBAR - SOLID BLACK WHEN SCROLLED TO PREVENT OVERLAP */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'solid-nav py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center relative z-10">
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 flex items-center justify-center border border-[var(--color-gold)]/40 bg-[#000000]">
              <span className="font-serif font-bold text-lg text-[var(--color-gold)]">A</span>
            </div>
            <span className="font-serif text-2xl tracking-[0.25em] font-medium text-[var(--color-ivory)] uppercase">
              Aurelian
            </span>
          </div>
          
          <div className="hidden md:flex gap-12 text-[10px] tracking-[0.25em] uppercase font-bold text-[var(--color-muted)]">
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Philosophy</a>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Syndicates</a>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Sovereignty</a>
          </div>

          <button className="px-8 py-3 text-[10px] tracking-[0.25em] uppercase font-bold border border-[var(--color-gold)]/40 text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black transition-all duration-300">
            Client Portal
          </button>
        </div>
      </nav>

      {/* HERO SECTION - MASSIVE PADDING */}
      <section className="relative hero-glow min-h-screen flex flex-col justify-center items-center pt-[180px] pb-32 px-6 lg:px-12 z-10">
        <div className="max-w-6xl mx-auto text-center w-full">
          <FadeUp delay={0.1}>
            <span className="text-[var(--color-gold)] text-[11px] tracking-[0.4em] uppercase font-bold mb-12 block flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-[var(--color-gold)]/50"></span>
              Institutional Wealth Management
              <span className="w-8 h-[1px] bg-[var(--color-gold)]/50"></span>
            </span>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-[110px] font-serif text-[var(--color-ivory)] leading-[1.0] mb-12 tracking-tight">
              CAPITAL, ARCHITECTED <br className="hidden md:block" /> FOR GENERATIONS.
            </h1>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <p className="text-[var(--color-muted)] text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed tracking-wide">
              We merge institutional-grade infrastructure with algorithmic precision to protect and scale legacy wealth for the world's most discerning families.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.5}>
            <button className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-hover)] text-black px-12 py-5 font-bold transition-colors inline-flex items-center justify-center gap-4 text-xs tracking-[0.25em] uppercase">
              Request Private Access <ArrowRight size={16} />
            </button>
          </FadeUp>
        </div>
      </section>

      {/* VALUE PROPOSITIONS - NO BOXES, PURE TYPOGRAPHY */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 py-32 border-t border-[var(--color-gold)]/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          
          <FadeUp delay={0.1} className="flex flex-col group">
            <div className="mb-8">
              <Hexagon size={32} className="text-[var(--color-gold)]" strokeWidth={1} />
            </div>
            <h3 className="text-2xl font-serif text-[var(--color-ivory)] mb-6 uppercase tracking-wider">Algorithmic Yield</h3>
            <p className="text-[var(--color-muted)] text-base leading-relaxed mb-8 font-light tracking-wide flex-grow">
              Proprietary quantitative forecasting and alternative asset syndication designed to dynamically outpace market volatility.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.2} className="flex flex-col group">
            <div className="mb-8">
              <Lock size={32} className="text-[var(--color-gold)]" strokeWidth={1} />
            </div>
            <h3 className="text-2xl font-serif text-[var(--color-ivory)] mb-6 uppercase tracking-wider">Cryptographic Custody</h3>
            <p className="text-[var(--color-muted)] text-base leading-relaxed mb-8 font-light tracking-wide flex-grow">
              Military-grade cold storage and multi-signature enclave protocols ensuring absolute, immutable capital sovereignty.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.3} className="flex flex-col group">
            <div className="mb-8">
              <Shield size={32} className="text-[var(--color-gold)]" strokeWidth={1} />
            </div>
            <h3 className="text-2xl font-serif text-[var(--color-ivory)] mb-6 uppercase tracking-wider">Global Sovereignty</h3>
            <p className="text-[var(--color-muted)] text-base leading-relaxed mb-8 font-light tracking-wide flex-grow">
              Real-time jurisdictional arbitrage and stateless wealth architecture for borderless legacy preservation.
            </p>
          </FadeUp>
          
        </div>
      </section>

      {/* STRATEGIC FRAMEWORKS - PURE CSS GRAPHICS */}
      <section className="py-40 relative z-20 border-t border-[var(--color-gold)]/10 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-40">
            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-7xl font-serif text-[var(--color-ivory)] mb-10 tracking-tight uppercase">Strategic Frameworks</h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[var(--color-muted)] max-w-2xl mx-auto text-xl leading-relaxed tracking-wide font-light">
                Comprehensive institutional infrastructure tailored for visionary capital and complex family offices.
              </p>
            </FadeUp>
          </div>

          <div className="space-y-48">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              <div className="h-[500px] w-full lux-border bg-[#050505] css-graphic-grid flex items-center justify-center">
                {/* Abstract graphic */}
                <div className="w-48 h-48 border border-[var(--color-gold)]/30 rotate-45 flex items-center justify-center">
                  <div className="w-32 h-32 border border-[var(--color-gold)]/20 -rotate-45"></div>
                </div>
              </div>
              <FadeUp delay={0.3}>
                <div className="mb-8">
                  <span className="text-[var(--color-gold)] font-serif font-bold text-lg">01.</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-serif text-[var(--color-ivory)] mb-8 leading-tight">Family Office Structuring</h3>
                <p className="text-[var(--color-muted)] text-xl leading-relaxed mb-12 font-light tracking-wide">
                  We architect comprehensive multi-generational governance models. Our systems ensure seamless tax harmonization, philanthropic vehicle establishment, and frictionless generational transfer.
                </p>
                <a href="#" className="inline-flex items-center gap-3 text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors font-bold text-[11px] uppercase tracking-[0.25em]">
                  View Framework <ArrowRight size={16} />
                </a>
              </FadeUp>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              <FadeUp delay={0.3} className="order-2 lg:order-1">
                <div className="mb-8">
                  <span className="text-[var(--color-gold)] font-serif font-bold text-lg">02.</span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-serif text-[var(--color-ivory)] mb-8 leading-tight">Private Market Syndication</h3>
                <p className="text-[var(--color-muted)] text-xl leading-relaxed mb-12 font-light tracking-wide">
                  Exclusive access to late-stage venture, pre-IPO liquidity, and sovereign debt instruments. Our network bypasses traditional gatekeepers to secure asymmetric upside.
                </p>
                <a href="#" className="inline-flex items-center gap-3 text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors font-bold text-[11px] uppercase tracking-[0.25em]">
                  Explore Syndicates <ArrowRight size={16} />
                </a>
              </FadeUp>
              <div className="order-1 lg:order-2 h-[500px] w-full lux-border bg-[#050505] css-graphic-orb flex items-center justify-center">
                 {/* Abstract orb handled by css pseudo elements */}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA - CENTERED TERMINAL COMMAND */}
      <section className="py-40 relative z-20 border-t border-[var(--color-gold)]/20 bg-[#000000]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          
          <FadeUp delay={0.1}>
            <Fingerprint size={48} className="text-[var(--color-gold)] mx-auto mb-10" strokeWidth={1} />
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-[1.1] text-[var(--color-ivory)] uppercase tracking-tight">
              Initiate Dialogue
            </h2>
            <p className="text-[var(--color-muted)] text-xl mb-16 leading-relaxed font-light tracking-wide max-w-2xl mx-auto">
              Our syndicates operate strictly by invitation. Request a private cryptographic briefing with our quantitative directors.
            </p>
          </FadeUp>

          <FadeUp delay={0.3} className="bg-[#050505] border border-white/10 p-10 lg:p-16 text-left">
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="block text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-[0.25em] mb-4">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-lg text-[var(--color-ivory)] focus:border-[var(--color-gold)] outline-none transition-all placeholder-transparent" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-[0.25em] mb-4">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-lg text-[var(--color-ivory)] focus:border-[var(--color-gold)] outline-none transition-all placeholder-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-[0.25em] mb-4">Corporate Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-lg text-[var(--color-ivory)] focus:border-[var(--color-gold)] outline-none transition-all placeholder-transparent" />
              </div>
              <div className="pt-8 text-center">
                <button className="w-full md:w-auto bg-[var(--color-gold)] hover:bg-[var(--color-gold-hover)] text-black px-16 py-5 font-bold transition-colors tracking-[0.25em] uppercase text-xs">
                  Submit Encrypted Inquiry
                </button>
              </div>
            </form>
          </FadeUp>

        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="bg-[#000000] border-t border-[var(--color-gold)]/10 text-center py-12">
        <p className="text-[var(--color-muted)] text-[10px] tracking-[0.3em] uppercase">© 2026 Aurelian Quantitative Wealth. Strict Confidentiality.</p>
      </footer>

    </div>
  );
}
