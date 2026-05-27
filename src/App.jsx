import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Building2, ChevronRight, ArrowRight, LineChart, Globe } from 'lucide-react';
import './index.css';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-alabaster)] text-[var(--color-charcoal)] font-sans">
      
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'nav-blur py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded flex items-center justify-center ${scrolled ? 'bg-[var(--color-forest-900)]' : 'bg-white'}`}>
              <span className={`font-serif font-bold text-lg ${scrolled ? 'text-white' : 'text-[var(--color-forest-900)]'}`}>A</span>
            </div>
            <span className={`font-serif text-xl tracking-wide font-medium ${scrolled ? 'text-[var(--color-forest-900)]' : 'text-white'}`}>
              Aurelian
            </span>
          </div>
          
          <div className={`hidden md:flex gap-8 text-sm font-medium ${scrolled ? 'text-[var(--color-charcoal)]' : 'text-white/90'}`}>
            <a href="#" className="hover:text-[var(--color-copper)] transition-colors">Philosophy</a>
            <a href="#" className="hover:text-[var(--color-copper)] transition-colors">Private Syndicates</a>
            <a href="#" className="hover:text-[var(--color-copper)] transition-colors">Sovereignty</a>
            <a href="#" className="hover:text-[var(--color-copper)] transition-colors">Insights</a>
          </div>

          <button className={`px-6 py-2.5 text-sm font-medium rounded transition-all ${scrolled ? 'bg-[var(--color-copper)] text-white hover:bg-[var(--color-copper-hover)]' : 'bg-white text-[var(--color-forest-900)] hover:bg-white/90'}`}>
            Client Portal
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative hero-gradient pt-32 pb-48 lg:pt-48 lg:pb-64 px-6 lg:px-8 overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(var(--color-alabaster) 1px, transparent 1px), linear-gradient(90deg, var(--color-alabaster) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[var(--color-copper)] text-sm tracking-widest uppercase font-medium mb-6 block">
              Institutional Wealth Management
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white max-w-4xl mx-auto leading-tight mb-8">
              Capital, Architected for Generations.
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              We merge institutional-grade infrastructure with algorithmic precision to architect, protect, and scale legacy wealth for the world's most discerning families.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[var(--color-copper)] hover:bg-[var(--color-copper-hover)] text-white px-8 py-3.5 rounded font-medium transition-colors flex items-center gap-2">
                Request Private Access <ArrowRight size={18} />
              </button>
              <button className="text-white hover:text-[var(--color-copper)] px-8 py-3.5 font-medium transition-colors">
                Explore Our Philosophy
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERLAPPING VALUE CARDS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 -mt-24 lg:-mt-32 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <ValueCard 
            delay={0.1}
            icon={<TrendingUp size={28} className="text-[var(--color-copper)]" />}
            title="Algorithmic Yield"
            description="Proprietary quantitative forecasting and alternative asset syndication designed to outpace market volatility."
          />
          <ValueCard 
            delay={0.2}
            icon={<ShieldCheck size={28} className="text-[var(--color-copper)]" />}
            title="Cryptographic Custody"
            description="Military-grade cold storage and multi-signature enclave protocols ensuring absolute capital sovereignty."
          />
          <ValueCard 
            delay={0.3}
            icon={<Globe size={28} className="text-[var(--color-copper)]" />}
            title="Global Sovereignty"
            description="Real-time jurisdictional arbitrage and stateless wealth architecture for borderless legacy preservation."
          />
          
        </div>
      </section>

      {/* OUR FINANCIAL SOLUTIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-forest-900)] mb-4">Strategic Frameworks</h2>
            <p className="text-[var(--color-gray-text)] max-w-2xl mx-auto text-lg">
              Comprehensive institutional infrastructure tailored for visionary capital and complex family offices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SolutionCard 
              image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
              icon={<Building2 size={24} className="text-white" />}
              title="Family Office Structuring"
              desc="Comprehensive multi-generational governance, tax harmonization, and philanthropic vehicle establishment."
            />
            <SolutionCard 
              image="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800"
              icon={<LineChart size={24} className="text-white" />}
              title="Private Market Syndication"
              desc="Exclusive access to late-stage venture, pre-IPO liquidity, and sovereign debt instruments."
            />
            <SolutionCard 
              image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
              icon={<ShieldCheck size={24} className="text-white" />}
              title="Digital Asset Sovereignty"
              desc="Institutional curation and cryptographic custody for high-conviction digital asset portfolios."
            />
          </div>
        </div>
      </section>

      {/* BOTTOM CTA / CONTACT */}
      <section className="py-24 bg-[var(--color-forest-900)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-forest-800)] skew-x-[-15deg] translate-x-32 hidden lg:block pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-[var(--color-copper)] text-sm tracking-widest uppercase font-medium mb-4 block">
              Initiate Dialogue
            </span>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
              Secure Your Generational Vault.
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-md">
              Our syndicates operate strictly by invitation or qualified application. Request a private briefing with our quantitative directors to discuss your capital objectives.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[var(--color-forest-800)] flex items-center justify-center shrink-0 mt-1 text-[var(--color-copper)] text-sm font-bold">1</div>
                <div>
                  <h4 className="text-xl font-serif mb-1">Confidential Qualification</h4>
                  <p className="text-white/60 text-sm">Initial assessment of capital sovereignty requirements.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[var(--color-forest-800)] flex items-center justify-center shrink-0 mt-1 text-[var(--color-copper)] text-sm font-bold">2</div>
                <div>
                  <h4 className="text-xl font-serif mb-1">Architectural Proposal</h4>
                  <p className="text-white/60 text-sm">Custom algorithmic and custody framework design.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 lg:p-10 card-shadow text-[var(--color-charcoal)]">
            <h3 className="text-2xl font-serif mb-6 text-[var(--color-forest-900)]">Request Private Briefing</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[var(--color-gray-text)] mb-1.5">First Name</label>
                  <input type="text" className="w-full bg-[var(--color-gray-soft)] border-none rounded px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--color-copper)] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--color-gray-text)] mb-1.5">Last Name</label>
                  <input type="text" className="w-full bg-[var(--color-gray-soft)] border-none rounded px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--color-copper)] outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-gray-text)] mb-1.5">Corporate Email</label>
                <input type="email" className="w-full bg-[var(--color-gray-soft)] border-none rounded px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--color-copper)] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-gray-text)] mb-1.5">Capital Objective (Optional)</label>
                <textarea rows="3" className="w-full bg-[var(--color-gray-soft)] border-none rounded px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--color-copper)] outline-none resize-none"></textarea>
              </div>
              <button className="w-full bg-[var(--color-forest-900)] hover:bg-[var(--color-forest-800)] text-white py-3.5 rounded font-medium transition-colors mt-2">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A1A17] text-white/50 py-12 text-center text-sm">
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
    transition={{ duration: 0.6, delay }}
    className="bg-white p-8 rounded-xl card-shadow border border-[var(--color-gray-soft)] hover:-translate-y-1 transition-transform duration-300"
  >
    <div className="w-14 h-14 bg-[var(--color-alabaster)] rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-serif text-[var(--color-forest-900)] mb-3">{title}</h3>
    <p className="text-[var(--color-gray-text)] text-sm leading-relaxed mb-6">
      {description}
    </p>
    <a href="#" className="inline-flex items-center gap-2 text-[var(--color-copper)] font-medium text-sm group">
      Discover More <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </a>
  </motion.div>
);

const SolutionCard = ({ image, icon, title, desc }) => (
  <div className="bg-[var(--color-alabaster)] rounded-xl overflow-hidden border border-[var(--color-gray-soft)] group">
    <div className="h-48 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute -bottom-6 right-6 w-12 h-12 bg-[var(--color-copper)] rounded-full flex items-center justify-center shadow-lg">
        {icon}
      </div>
    </div>
    <div className="p-8 pt-10">
      <h3 className="text-2xl font-serif text-[var(--color-forest-900)] mb-3">{title}</h3>
      <p className="text-[var(--color-gray-text)] text-sm leading-relaxed mb-6">
        {desc}
      </p>
      <button className="bg-[var(--color-copper)]/10 text-[var(--color-copper)] hover:bg-[var(--color-copper)] hover:text-white px-5 py-2 rounded text-sm font-medium transition-colors">
        Learn More
      </button>
    </div>
  </div>
);
