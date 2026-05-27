import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, ShieldCheck, Globe, ArrowRight, ArrowUpRight } from 'lucide-react';
import './index.css';

// ---------------------------------------------------------------------------
// ANIMATION COMPONENTS (FLAWLESS & UNBREAKABLE)
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

const ImageReveal = ({ src, alt, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <div ref={ref} className={`relative overflow-hidden lux-border ${className}`}>
      <motion.div
        initial={{ y: 0 }}
        animate={isInView ? { y: "100%" } : { y: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 bg-[var(--color-obsidian)] z-10 origin-top"
      />
      <motion.img
        initial={{ scale: 1.1 }}
        animate={isInView ? { scale: 1 } : { scale: 1.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
      />
    </div>
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
    <div className="min-h-screen bg-[var(--color-obsidian)] text-[var(--color-ivory)] selection:bg-[var(--color-gold)] selection:text-black relative">
      
      {/* GLOBAL NOISE OVERLAY */}
      <div className="absolute inset-0 noise-bg pointer-events-none z-0"></div>

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center relative z-10">
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 flex items-center justify-center border border-[var(--color-gold)]/30 rounded-sm bg-[var(--color-surface)]">
              <span className="font-serif font-bold text-lg text-[var(--color-gold)]">A</span>
            </div>
            <span className="font-serif text-2xl tracking-widest font-medium text-[var(--color-ivory)] uppercase">
              Aurelian
            </span>
          </div>
          
          <div className="hidden md:flex gap-10 text-[11px] tracking-[0.2em] uppercase font-medium text-[var(--color-muted)]">
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Philosophy</a>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Syndicates</a>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Sovereignty</a>
          </div>

          <button className="px-6 py-2.5 text-xs tracking-widest uppercase font-medium rounded-sm border border-[var(--color-gold)]/40 text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black hover:border-[var(--color-gold)] transition-all duration-300">
            Client Portal
          </button>
        </div>
      </nav>

      {/* HERO SECTION - FLAWLESS PADDING & CENTERING */}
      <section className="relative hero-glow min-h-screen flex flex-col justify-center items-center pt-[120px] pb-24 px-6 lg:px-12 z-10">
        <div className="max-w-5xl mx-auto text-center w-full">
          <FadeUp delay={0.1}>
            <span className="text-[var(--color-gold)] text-[10px] tracking-[0.4em] uppercase font-bold mb-10 block">
              Institutional Wealth Management
            </span>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            {/* Break text naturally or use manual breaks, but no overflow-hidden spans */}
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-serif text-[var(--color-ivory)] leading-[1.05] mb-12 tracking-tight">
              Capital, Architected <br className="hidden md:block" /> for Generations.
            </h1>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <p className="text-[var(--color-muted)] text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed tracking-wide">
              We merge institutional-grade infrastructure with algorithmic precision to protect and scale legacy wealth for the world's most discerning families.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button className="w-full sm:w-auto bg-[var(--color-gold)] hover:bg-[var(--color-gold-hover)] text-black px-10 py-4 rounded-sm font-medium transition-colors flex items-center justify-center gap-3 text-sm tracking-widest uppercase">
                Request Access <ArrowRight size={16} />
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* VALUE PROPOSITIONS - ULTRA MINIMALIST (NO CARDS) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          
          <ValueBlock 
            delay={0.1}
            icon={<TrendingUp size={24} className="text-[var(--color-gold)]" />}
            title="Algorithmic Yield"
            description="Proprietary quantitative forecasting and alternative asset syndication designed to dynamically outpace market volatility."
          />
          <ValueBlock 
            delay={0.2}
            icon={<ShieldCheck size={24} className="text-[var(--color-gold)]" />}
            title="Cryptographic Custody"
            description="Military-grade cold storage and multi-signature enclave protocols ensuring absolute, immutable capital sovereignty."
          />
          <ValueBlock 
            delay={0.3}
            icon={<Globe size={24} className="text-[var(--color-gold)]" />}
            title="Global Sovereignty"
            description="Real-time jurisdictional arbitrage and stateless wealth architecture for borderless legacy preservation."
          />
          
        </div>
      </section>

      {/* STRATEGIC FRAMEWORKS - PERFECT SPACING */}
      <section className="py-40 relative z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-32">
            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-ivory)] mb-8 tracking-tight">Strategic Frameworks</h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[var(--color-muted)] max-w-2xl mx-auto text-lg leading-relaxed tracking-wide">
                Comprehensive institutional infrastructure tailored for visionary capital and complex family offices.
              </p>
            </FadeUp>
          </div>

          <div className="space-y-40">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <ImageReveal 
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop" 
                alt="Dark Abstract Architecture" 
                className="h-[500px] lg:h-[700px] rounded-sm" 
              />
              <FadeUp delay={0.3}>
                <div className="w-12 h-12 rounded-sm bg-transparent border border-[var(--color-gold)]/20 flex items-center justify-center mb-10">
                  <span className="text-[var(--color-gold)] font-serif font-bold text-sm">01</span>
                </div>
                <h3 className="text-3xl lg:text-5xl font-serif text-[var(--color-ivory)] mb-8 leading-tight">Family Office Structuring</h3>
                <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-10 font-light tracking-wide">
                  We architect comprehensive multi-generational governance models. Our systems ensure seamless tax harmonization, philanthropic vehicle establishment, and frictionless generational transfer.
                </p>
                <a href="#" className="inline-flex items-center gap-3 text-[var(--color-gold)] font-medium text-xs group uppercase tracking-widest">
                  View Framework <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </FadeUp>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <FadeUp delay={0.3} className="order-2 lg:order-1">
                <div className="w-12 h-12 rounded-sm bg-transparent border border-[var(--color-gold)]/20 flex items-center justify-center mb-10">
                  <span className="text-[var(--color-gold)] font-serif font-bold text-sm">02</span>
                </div>
                <h3 className="text-3xl lg:text-5xl font-serif text-[var(--color-ivory)] mb-8 leading-tight">Private Market Syndication</h3>
                <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-10 font-light tracking-wide">
                  Exclusive access to late-stage venture, pre-IPO liquidity, and sovereign debt instruments. Our network bypasses traditional gatekeepers to secure asymmetric upside.
                </p>
                <a href="#" className="inline-flex items-center gap-3 text-[var(--color-gold)] font-medium text-xs group uppercase tracking-widest">
                  Explore Syndicates <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </FadeUp>
              <div className="order-1 lg:order-2">
                <ImageReveal 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" 
                  alt="Dark Minimalist Texture" 
                  className="h-[500px] lg:h-[700px] rounded-sm" 
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA & FORM - REFINED SPACING */}
      <section className="py-40 relative z-20 border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          <div className="pr-0 lg:pr-12">
            <FadeUp delay={0.1}>
              <span className="text-[var(--color-gold)] text-[10px] tracking-[0.4em] uppercase font-bold mb-8 block">
                Initiate Dialogue
              </span>
              <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-[1.1] text-[var(--color-ivory)] text-left tracking-tight">
                Secure Your <br/> Generational Vault.
              </h2>
              <p className="text-[var(--color-muted)] text-lg mb-16 leading-relaxed font-light tracking-wide">
                Our syndicates operate strictly by invitation or qualified application. Request a private briefing with our quantitative directors to discuss your capital objectives.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.3}>
              <div className="space-y-12">
                <div className="flex gap-8 items-start">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0 text-[var(--color-gold)] font-serif font-bold text-lg mt-1">I</div>
                  <div>
                    <h4 className="text-xl font-serif mb-3 text-[var(--color-ivory)]">Confidential Qualification</h4>
                    <p className="text-[var(--color-muted)] text-base leading-relaxed font-light">Initial cryptographic assessment of capital sovereignty requirements and deployment scale.</p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0 text-[var(--color-gold)] font-serif font-bold text-lg mt-1">II</div>
                  <div>
                    <h4 className="text-xl font-serif mb-3 text-[var(--color-ivory)]">Architectural Proposal</h4>
                    <p className="text-[var(--color-muted)] text-base leading-relaxed font-light">Custom algorithmic and custody framework design tailored to your specific tax jurisdiction.</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.4} className="bg-transparent border border-white/10 rounded-sm p-8 lg:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl -z-10"></div>
            <h3 className="text-2xl font-serif mb-10 text-[var(--color-ivory)]">Request Private Briefing</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-[9px] font-bold text-[var(--color-muted)] uppercase tracking-[0.2em] mb-3">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-base text-[var(--color-ivory)] focus:border-[var(--color-gold)] outline-none transition-all placeholder-transparent" />
                </div>
                <div>
                  <label className="block text-[9px] font-bold text-[var(--color-muted)] uppercase tracking-[0.2em] mb-3">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-base text-[var(--color-ivory)] focus:border-[var(--color-gold)] outline-none transition-all placeholder-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-[9px] font-bold text-[var(--color-muted)] uppercase tracking-[0.2em] mb-3">Corporate Email</label>
                <input type="email" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-base text-[var(--color-ivory)] focus:border-[var(--color-gold)] outline-none transition-all placeholder-transparent" />
              </div>
              <button className="w-full bg-[var(--color-gold)] hover:bg-[var(--color-gold-hover)] text-black py-5 rounded-sm font-bold transition-colors mt-8 tracking-widest uppercase text-xs">
                Submit Inquiry
              </button>
            </form>
          </FadeUp>

        </div>
      </section>

    </div>
  );
}

// ---------------------------------------------------------------------------
// HELPER COMPONENTS
// ---------------------------------------------------------------------------

const ValueBlock = ({ icon, title, description, delay }) => {
  return (
    <FadeUp delay={delay} className="flex flex-col h-full group">
      <div className="w-12 h-12 flex items-center justify-center mb-8 border-b border-[var(--color-gold)]/30 pb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-serif text-[var(--color-ivory)] mb-6">{title}</h3>
      <p className="text-[var(--color-muted)] text-base leading-relaxed mb-10 flex-grow font-light tracking-wide">
        {description}
      </p>
      <a href="#" className="inline-flex items-center gap-3 text-[var(--color-gold)] font-medium text-xs group uppercase tracking-widest mt-auto">
        Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </FadeUp>
  );
};
