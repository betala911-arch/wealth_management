import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Globe, ArrowRight, ArrowUpRight } from 'lucide-react';
import './index.css';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-obsidian)] text-[var(--color-ivory)] selection:bg-[var(--color-gold)] selection:text-black">
      
      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center border border-[var(--color-gold)] rounded-sm bg-[var(--color-surface)]">
              <span className="font-serif font-bold text-lg text-[var(--color-gold)]">A</span>
            </div>
            <span className="font-serif text-2xl tracking-wide font-medium text-[var(--color-ivory)]">
              Aurelian
            </span>
          </div>
          
          {/* Links */}
          <div className="hidden md:flex gap-8 text-[13px] tracking-wide uppercase font-medium text-[var(--color-muted)]">
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Philosophy</a>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Syndicates</a>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Sovereignty</a>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Insights</a>
          </div>

          {/* CTA */}
          <button className="px-6 py-2.5 text-sm font-medium rounded-sm border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black transition-all">
            Client Portal
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative hero-glow min-h-[90vh] flex flex-col justify-center pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[var(--color-gold)] text-[11px] tracking-[0.3em] uppercase font-semibold mb-8 block">
              Institutional Wealth Management
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[var(--color-ivory)] leading-[1.1] mb-8">
              Capital, Architected for Generations.
            </h1>
            
            <p className="text-[var(--color-muted)] text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              We merge institutional-grade infrastructure with algorithmic precision to protect and scale legacy wealth for the world's most discerning families.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-[var(--color-gold)] hover:bg-[var(--color-gold-hover)] text-black px-8 py-4 rounded-sm font-medium transition-colors flex items-center justify-center gap-3">
                Request Private Access <ArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto text-[var(--color-muted)] hover:text-[var(--color-gold)] px-8 py-4 font-medium transition-colors flex items-center justify-center gap-3">
                Explore Philosophy
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3-COLUMN VALUE CARDS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          <ValueCard 
            delay={0.2}
            icon={<TrendingUp size={24} className="text-[var(--color-gold)]" />}
            title="Algorithmic Yield"
            description="Proprietary quantitative forecasting and alternative asset syndication designed to dynamically outpace market volatility."
          />
          <ValueCard 
            delay={0.4}
            icon={<ShieldCheck size={24} className="text-[var(--color-gold)]" />}
            title="Cryptographic Custody"
            description="Military-grade cold storage and multi-signature enclave protocols ensuring absolute, immutable capital sovereignty."
          />
          <ValueCard 
            delay={0.6}
            icon={<Globe size={24} className="text-[var(--color-gold)]" />}
            title="Global Sovereignty"
            description="Real-time jurisdictional arbitrage and stateless wealth architecture for borderless legacy preservation."
          />
          
        </div>
      </section>

      {/* STRATEGIC FRAMEWORKS (ZIG-ZAG LAYOUT) */}
      <section className="py-32 bg-[var(--color-obsidian)] border-t border-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-ivory)] mb-6">Strategic Frameworks</h2>
            <p className="text-[var(--color-muted)] max-w-2xl mx-auto text-lg leading-relaxed">
              Comprehensive institutional infrastructure tailored for visionary capital and complex family offices.
            </p>
          </div>

          <div className="space-y-32">
            {/* Feature 1: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="h-[400px] lg:h-[500px] rounded-sm overflow-hidden gold-border-subtle relative group">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" alt="Architecture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div>
                <div className="w-12 h-12 rounded-sm bg-[var(--color-surface)] border border-[var(--color-gold)]/20 flex items-center justify-center mb-8">
                  <span className="text-[var(--color-gold)] font-serif font-bold">01</span>
                </div>
                <h3 className="text-3xl font-serif text-[var(--color-ivory)] mb-6">Family Office Structuring</h3>
                <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-8">
                  We architect comprehensive multi-generational governance models. Our systems ensure seamless tax harmonization, philanthropic vehicle establishment, and frictionless generational transfer.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-[var(--color-gold)] font-medium text-sm group uppercase tracking-widest">
                  View Framework <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Feature 2: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="order-2 lg:order-1">
                <div className="w-12 h-12 rounded-sm bg-[var(--color-surface)] border border-[var(--color-gold)]/20 flex items-center justify-center mb-8">
                  <span className="text-[var(--color-gold)] font-serif font-bold">02</span>
                </div>
                <h3 className="text-3xl font-serif text-[var(--color-ivory)] mb-6">Private Market Syndication</h3>
                <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-8">
                  Exclusive access to late-stage venture, pre-IPO liquidity, and sovereign debt instruments. Our network bypasses traditional gatekeepers to secure asymmetric upside.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-[var(--color-gold)] font-medium text-sm group uppercase tracking-widest">
                  Explore Syndicates <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
              <div className="order-1 lg:order-2 h-[400px] lg:h-[500px] rounded-sm overflow-hidden gold-border-subtle relative group">
                <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200" alt="Markets" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA & FORM */}
      <section className="py-32 bg-[var(--color-surface)] border-t border-[var(--color-gold)]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div className="pr-0 lg:pr-12">
            <span className="text-[var(--color-gold)] text-[11px] tracking-[0.3em] uppercase font-semibold mb-6 block">
              Initiate Dialogue
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-[var(--color-ivory)]">
              Secure Your Generational Vault.
            </h2>
            <p className="text-[var(--color-muted)] text-lg mb-12">
              Our syndicates operate strictly by invitation or qualified application. Request a private briefing with our quantitative directors to discuss your capital objectives.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-sm bg-[var(--color-obsidian)] border border-[var(--color-gold)]/20 flex items-center justify-center shrink-0 text-[var(--color-gold)] font-serif font-bold">I</div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-[var(--color-ivory)]">Confidential Qualification</h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">Initial cryptographic assessment of capital sovereignty requirements and deployment scale.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-sm bg-[var(--color-obsidian)] border border-[var(--color-gold)]/20 flex items-center justify-center shrink-0 text-[var(--color-gold)] font-serif font-bold">II</div>
                <div>
                  <h4 className="text-xl font-serif mb-2 text-[var(--color-ivory)]">Architectural Proposal</h4>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">Custom algorithmic and custody framework design tailored to your specific tax jurisdiction.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-obsidian)] rounded-sm p-8 lg:p-12 gold-border-subtle">
            <h3 className="text-2xl font-serif mb-8 text-[var(--color-ivory)]">Request Private Briefing</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" className="w-full bg-[var(--color-surface)] border border-[var(--color-surface-hover)] rounded-sm px-4 py-3 text-sm text-[var(--color-ivory)] focus:ring-1 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" className="w-full bg-[var(--color-surface)] border border-[var(--color-surface-hover)] rounded-sm px-4 py-3 text-sm text-[var(--color-ivory)] focus:ring-1 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider mb-2">Corporate Email</label>
                <input type="email" className="w-full bg-[var(--color-surface)] border border-[var(--color-surface-hover)] rounded-sm px-4 py-3 text-sm text-[var(--color-ivory)] focus:ring-1 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-medium text-[var(--color-muted)] uppercase tracking-wider mb-2">Capital Objective (Optional)</label>
                <textarea rows="4" className="w-full bg-[var(--color-surface)] border border-[var(--color-surface-hover)] rounded-sm px-4 py-3 text-sm text-[var(--color-ivory)] focus:ring-1 focus:ring-[var(--color-gold)] focus:border-[var(--color-gold)] outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-[var(--color-gold)] hover:bg-[var(--color-gold-hover)] text-black py-4 rounded-sm font-medium transition-colors mt-4 tracking-wide">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--color-obsidian)] border-t border-[var(--color-surface)] text-[var(--color-muted)] py-12 text-center text-xs tracking-widest uppercase">
        <p>© 2026 Aurelian Quantitative Wealth. Strict Confidentiality Maintained.</p>
      </footer>
    </div>
  );
}

// ---------------------------------------------------------------------------
// HELPER COMPONENTS
// ---------------------------------------------------------------------------

const ValueCard = ({ icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className="bg-[var(--color-surface)] p-10 rounded-sm gold-border-subtle hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
  >
    <div className="w-12 h-12 bg-[var(--color-obsidian)] rounded-sm border border-[var(--color-gold)]/20 flex items-center justify-center mb-8">
      {icon}
    </div>
    <h3 className="text-xl font-serif text-[var(--color-ivory)] mb-4">{title}</h3>
    <p className="text-[var(--color-muted)] text-[15px] leading-relaxed mb-8 flex-grow">
      {description}
    </p>
    <a href="#" className="inline-flex items-center gap-2 text-[var(--color-gold)] font-medium text-sm group uppercase tracking-widest mt-auto">
      Explore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </a>
  </motion.div>
);
