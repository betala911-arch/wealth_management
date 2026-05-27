import React, { useRef } from 'react';
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
  return (
    <div className="min-h-screen bg-[#000000] text-[#EAE8E3] selection:bg-[#B59A70] selection:text-[#000000] font-sans">
      
      <div className="fixed inset-0 noise-bg pointer-events-none z-0"></div>

      {/* NAVBAR - HARDCODED SOLID BLACK - WILL NEVER OVERLAP */}
      <nav className="fixed top-0 w-full z-50 bg-[#000000] border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center relative z-10">
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 flex items-center justify-center border border-[#B59A70]/40">
              <span className="font-serif font-bold text-lg text-[#B59A70]">A</span>
            </div>
            <span className="font-serif text-xl tracking-[0.3em] text-[#EAE8E3] uppercase">
              Aurelian
            </span>
          </div>
          
          <div className="hidden md:flex gap-16 text-[10px] tracking-[0.3em] uppercase font-bold text-[#888888]">
            <a href="#philosophy" className="hover:text-[#B59A70] transition-colors">Philosophy</a>
            <a href="#frameworks" className="hover:text-[#B59A70] transition-colors">Frameworks</a>
            <a href="#inquiry" className="hover:text-[#B59A70] transition-colors">Initiate</a>
          </div>
          
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="philosophy" className="relative flex flex-col justify-center items-center pt-[200px] pb-32 px-6 lg:px-12 z-10 text-center">
        <div className="max-w-5xl mx-auto w-full">
          <FadeUp delay={0.1}>
            <span className="text-[#B59A70] text-[10px] tracking-[0.5em] uppercase font-bold mb-12 block flex items-center justify-center gap-6">
              <span className="w-8 h-[1px] bg-[#B59A70]/30"></span>
              Institutional Wealth Architecture
              <span className="w-8 h-[1px] bg-[#B59A70]/30"></span>
            </span>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-serif text-[#EAE8E3] leading-[0.95] mb-12 tracking-tight">
              CAPITAL, ARCHITECTED <br /> FOR GENERATIONS.
            </h1>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <p className="text-[#888888] text-xl leading-relaxed tracking-wide font-light mb-12 max-w-2xl mx-auto">
              We merge institutional-grade infrastructure with algorithmic precision to protect and scale legacy wealth for the world's most discerning families.
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <a href="#inquiry" className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-bold text-[#B59A70] hover:text-[#EAE8E3] transition-colors border border-[#B59A70]/30 px-8 py-4 rounded-full">
              Request Private Access <ArrowRight size={14} />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* VALUE PROPOSITIONS - STRUCTURED BENTO CARDS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <FadeUp delay={0.1} className="bg-[#0A0A0A] border border-white/5 p-10 rounded-2xl hover:border-[#B59A70]/30 transition-colors flex flex-col">
            <div className="mb-10 text-[#B59A70]">
              <Hexagon size={28} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-serif text-[#EAE8E3] mb-6 uppercase tracking-[0.1em]">Algorithmic Yield</h3>
            <p className="text-[#888888] text-sm leading-relaxed font-light tracking-wide flex-grow">
              Proprietary quantitative forecasting and alternative asset syndication designed to dynamically outpace market volatility.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.2} className="bg-[#0A0A0A] border border-white/5 p-10 rounded-2xl hover:border-[#B59A70]/30 transition-colors flex flex-col">
            <div className="mb-10 text-[#B59A70]">
              <Lock size={28} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-serif text-[#EAE8E3] mb-6 uppercase tracking-[0.1em]">Cryptographic Custody</h3>
            <p className="text-[#888888] text-sm leading-relaxed font-light tracking-wide flex-grow">
              Military-grade cold storage and multi-signature enclave protocols ensuring absolute, immutable capital sovereignty.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.3} className="bg-[#0A0A0A] border border-white/5 p-10 rounded-2xl hover:border-[#B59A70]/30 transition-colors flex flex-col">
            <div className="mb-10 text-[#B59A70]">
              <Shield size={28} strokeWidth={1} />
            </div>
            <h3 className="text-xl font-serif text-[#EAE8E3] mb-6 uppercase tracking-[0.1em]">Global Sovereignty</h3>
            <p className="text-[#888888] text-sm leading-relaxed font-light tracking-wide flex-grow">
              Real-time jurisdictional arbitrage and stateless wealth architecture for borderless legacy preservation.
            </p>
          </FadeUp>
          
        </div>
      </section>

      {/* STRATEGIC FRAMEWORKS - STRUCTURED FLEX COLUMN */}
      <section id="frameworks" className="py-40 relative z-20 border-t border-white/5 bg-[#050505]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          
          <div className="mb-32 text-center">
            <FadeUp delay={0.1}>
              <span className="text-[#B59A70] text-[10px] tracking-[0.5em] uppercase font-bold mb-6 block">Methodology</span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#EAE8E3] tracking-tight">Strategic Frameworks</h2>
            </FadeUp>
          </div>

          <div className="flex flex-col gap-24">
            
            {/* Framework 01 Card */}
            <FadeUp delay={0.2} className="bg-[#0A0A0A] border border-white/5 p-12 md:p-16 rounded-2xl flex flex-col md:flex-row gap-12 items-start md:items-center justify-between">
              <div className="flex-1">
                <span className="text-[#B59A70] font-serif text-2xl font-bold mb-4 block">01.</span>
                <h3 className="text-3xl md:text-5xl font-serif text-[#EAE8E3] mb-6 leading-tight">Family Office Structuring</h3>
                <p className="text-[#888888] text-lg leading-relaxed mb-8 font-light tracking-wide">
                  We architect comprehensive multi-generational governance models. Our systems ensure seamless tax harmonization, philanthropic vehicle establishment, and frictionless generational transfer.
                </p>
                <a href="#inquiry" className="inline-flex items-center gap-3 text-[#EAE8E3] hover:text-[#B59A70] transition-colors font-bold text-[10px] uppercase tracking-[0.3em]">
                  Discuss Structure <ArrowRight size={14} />
                </a>
              </div>
            </FadeUp>

            {/* Framework 02 Card */}
            <FadeUp delay={0.2} className="bg-[#0A0A0A] border border-white/5 p-12 md:p-16 rounded-2xl flex flex-col md:flex-row gap-12 items-start md:items-center justify-between">
              <div className="flex-1">
                <span className="text-[#B59A70] font-serif text-2xl font-bold mb-4 block">02.</span>
                <h3 className="text-3xl md:text-5xl font-serif text-[#EAE8E3] mb-6 leading-tight">Private Market Syndication</h3>
                <p className="text-[#888888] text-lg leading-relaxed mb-8 font-light tracking-wide">
                  Exclusive access to late-stage venture, pre-IPO liquidity, and sovereign debt instruments. Our network bypasses traditional gatekeepers to secure asymmetric upside.
                </p>
                <a href="#inquiry" className="inline-flex items-center gap-3 text-[#EAE8E3] hover:text-[#B59A70] transition-colors font-bold text-[10px] uppercase tracking-[0.3em]">
                  Explore Syndicates <ArrowRight size={14} />
                </a>
              </div>
            </FadeUp>

          </div>

        </div>
      </section>

      {/* BOTTOM CTA - COMMAND TERMINAL CARD */}
      <section id="inquiry" className="py-40 relative z-20 border-t border-[#B59A70]/10 bg-[#000000]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          
          <FadeUp delay={0.1}>
            <Fingerprint size={40} className="text-[#B59A70] mx-auto mb-10" strokeWidth={1} />
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#EAE8E3] tracking-tight">
              Initiate Dialogue
            </h2>
            <p className="text-[#888888] text-lg mb-16 leading-relaxed font-light tracking-wide max-w-xl mx-auto">
              Our syndicates operate strictly by invitation. Request a private cryptographic briefing with our quantitative directors.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="bg-[#0A0A0A] border border-white/10 p-10 md:p-16 rounded-2xl text-left shadow-2xl">
              <form className="flex flex-col gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <label className="block text-[9px] font-bold text-[#B59A70] uppercase tracking-[0.3em] mb-3">First Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-lg text-[#EAE8E3] focus:border-[#B59A70] outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-[#B59A70] uppercase tracking-[0.3em] mb-3">Last Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-lg text-[#EAE8E3] focus:border-[#B59A70] outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[9px] font-bold text-[#B59A70] uppercase tracking-[0.3em] mb-3">Corporate Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-lg text-[#EAE8E3] focus:border-[#B59A70] outline-none transition-colors" />
                </div>
                <div className="pt-8 text-center">
                  <button className="w-full bg-[#B59A70] hover:bg-[#D0B385] text-[#000000] px-12 py-5 rounded-lg font-bold transition-colors tracking-[0.3em] uppercase text-[10px]">
                    Submit Encrypted Inquiry
                  </button>
                </div>
              </form>
            </div>
          </FadeUp>

        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-white/5 text-center py-12">
        <p className="text-[#888888] text-[9px] tracking-[0.4em] uppercase font-bold">© 2026 Aurelian Quantitative Wealth. Strict Confidentiality.</p>
      </footer>

    </div>
  );
}
