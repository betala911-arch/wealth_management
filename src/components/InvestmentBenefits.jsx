export default function InvestmentBenefits() { return (<>
<section className="py-section-gap px-margin-desktop bg-surface" id="insights">
<div className="max-w-container-max mx-auto">
<div className="mb-16">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Intelligence at Your Fingertips</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Sophisticated tools for the modern investor.</p>
</div>
<div className="bento-grid">
<div className="col-span-12 lg:col-span-4 bg-surface-container-low p-10 rounded-lg border border-outline-variant group hover:border-primary transition-colors">
<span className="material-symbols-outlined text-primary text-5xl mb-8" data-icon="dashboard_customize">dashboard_customize</span>
<h3 className="font-headline-md text-headline-md mb-4">Portfolio Tracker</h3>
<p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">Real-time monitoring of all your assets in one unified interface with deep analytical breakdowns.</p>
<button className="border border-primary text-primary px-6 py-2 rounded-lg font-label-md flex items-center gap-2 group-hover:bg-primary group-hover:text-on-primary transition-all">
                            Launch Tracker <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="col-span-12 lg:col-span-4 bg-surface-container-low p-10 rounded-lg border border-outline-variant group hover:border-primary transition-colors">
<span className="material-symbols-outlined text-primary text-5xl mb-8" data-icon="calculate">calculate</span>
<h3 className="font-headline-md text-headline-md mb-4">SIP Calculator</h3>
<p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">Estimate your future wealth based on monthly commitments and expected CAGR projections.</p>
<button className="border border-primary text-primary px-6 py-2 rounded-lg font-label-md flex items-center gap-2 group-hover:bg-primary group-hover:text-on-primary transition-all">
                            Open Calculator <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="col-span-12 lg:col-span-4 row-span-2 bg-surface-container-high border border-outline-variant p-10 rounded-lg flex flex-col justify-between overflow-hidden relative group">
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Aurelian Mobile</h3>
<p className="text-on-surface-variant mb-10 leading-relaxed">Experience private banking levels of control from your smartphone, anytime, anywhere.</p>
<div className="space-y-4">
<button className="bg-primary text-on-primary w-full py-4 rounded-lg flex items-center justify-center gap-3 font-label-md font-bold uppercase tracking-wider">
<span className="material-symbols-outlined" data-icon="apple">apple</span> App Store
                                </button>
<button className="bg-surface w-full py-4 rounded-lg border border-outline-variant flex items-center justify-center gap-3 font-label-md font-bold text-on-surface uppercase tracking-wider hover:border-primary transition-all">
<span className="material-symbols-outlined" data-icon="play_arrow">play_arrow</span> Play Store
                                </button>
</div>
</div>
<div className="absolute -bottom-16 -right-16 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[240px] text-primary" data-icon="smartphone">smartphone</span>
</div>
</div>
<div className="col-span-12 lg:col-span-8 bg-surface-container-low p-12 rounded-lg border border-outline-variant flex flex-col md:flex-row items-center gap-12">
<div className="md:w-3/5">
<h3 className="font-headline-md text-headline-md mb-4">Secure Client Portal</h3>
<p className="font-body-md text-on-surface-variant mb-10 leading-relaxed">Existing clients can access detailed institutional reports, tax statements, and advanced rebalancing tools within our encrypted ecosystem.</p>
<button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label-md font-bold uppercase tracking-wider shadow-lg">Client Login</button>
</div>
<div className="md:w-2/5 relative">
<div className="absolute inset-0 bg-primary/10 rounded-lg mix-blend-multiply pointer-events-none"></div>
<img alt="Security" className="rounded-lg shadow-2xl border border-outline-variant opacity-80 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWB9FhhaPzVhiI68DhM-MzgtYhztW8qXh4EeAeTkYvMEoG3-ckvfPS_GDYzEMBDCAMk5p0zlyOqEg5qioe2hO9mPnsOxAIIz2IkC2jtKZTaRofxFbMUiF-J5GHxFrmf7EdQ-A8G1aOqS4hkK0h_EkDpK76NXbBazMCoLpSLIk468QQ4c0JjGmNZ3RfZQq-X5kzksQ_gKJGKflw_g-UTDn_yx5JtDTFth8lW_v_yNzvwraoPKsvV3JXBMeWgxkYhA0S2znsO0dnGkQP"/>
</div>
</div>
</div>
</div>
</section>
</>); }