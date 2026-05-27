export default function InvestmentBenefits() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="reveal-animate delay-100" style={{ marginBottom: '4rem' }}>
          <span className="eyebrow">Digital Sovereignty</span>
          <h2 className="title-main" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
            Intelligence at Your Fingertips.
          </h2>
          <p className="subtitle">
            Sophisticated algorithmic tools and secure institutional portals, engineered exclusively for the modern ultra-high-net-worth investor.
          </p>
        </div>

        <div className="editorial-grid">
          
          {/* Tracking */}
          <div className="col-span-12 lg:col-span-4 luxury-surface reveal-animate delay-200" style={{ padding: '3rem' }}>
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', border: '1px solid var(--border-accent)', borderRadius: '50%', color: 'var(--accent-primary)' }}>
              <span className="material-symbols-outlined">query_stats</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Real-Time Portfolio Tracking</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              Monitor your global assets across multiple jurisdictions in one unified, cryptographically secure interface.
            </p>
            <a href="#" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500 }}>
              Launch Tracker &rarr;
            </a>
          </div>

          {/* Mobile App */}
          <div className="col-span-12 lg:col-span-4 row-span-2 luxury-surface reveal-animate delay-300" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
            <div style={{ zIndex: 10, position: 'relative' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>The Aurelian App</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1rem' }}>
                Private banking levels of control from your smartphone. Authorize wire transfers, review tax harvesting, and communicate with your dedicated fiduciary.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button className="btn-primary" style={{ width: '100%' }}>Download for iOS</button>
                <button className="btn-secondary" style={{ width: '100%' }}>Download for Android</button>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', opacity: 0.05, transform: 'rotate(-15deg)', pointerEvents: 'none' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '300px', color: 'var(--text-primary)' }}>smartphone</span>
            </div>
          </div>

          {/* Forecasting */}
          <div className="col-span-12 lg:col-span-4 luxury-surface reveal-animate delay-100" style={{ padding: '3rem' }}>
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', border: '1px solid var(--border-accent)', borderRadius: '50%', color: 'var(--accent-primary)' }}>
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Generational Forecasting</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              Run Monte Carlo simulations to project trust and estate values decades into the future across varying macro environments.
            </p>
            <a href="#" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500 }}>
              Open Forecaster &rarr;
            </a>
          </div>

          {/* Secure Portal */}
          <div className="col-span-12 lg:col-span-8 luxury-surface reveal-animate delay-200" style={{ padding: '4rem', display: 'flex', alignItems: 'center', gap: '3rem' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>The Institutional Portal</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1rem' }}>
                Access detailed K-1s, capital call schedules for private equity commitments, and direct messaging with your portfolio manager via our end-to-end encrypted ecosystem.
              </p>
              <button className="btn-secondary">Access Portal</button>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%', height: '200px', border: '1px solid var(--border-subtle)', background: 'radial-gradient(circle at center, rgba(197, 160, 89, 0.1) 0%, transparent 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: 'var(--accent-primary)', opacity: 0.8 }}>lock</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}