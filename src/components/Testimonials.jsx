export default function Testimonials() { return (<>
<section className="py-section-gap px-margin-desktop bg-surface">
<div className="max-w-3xl mx-auto">
<h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-16">Frequently Asked Questions</h2>
<div className="space-y-6">
<details className="group bg-surface-container-low rounded-lg border border-outline-variant overflow-hidden hover:border-primary transition-colors">
<summary className="flex justify-between items-center p-8 cursor-pointer list-none font-headline-md text-xl text-on-surface">
                            How do SIPs differ from standard Mutual Fund investments?
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary" data-icon="expand_more">expand_more</span>
</summary>
<div className="p-8 pt-0 text-on-surface-variant font-body-md leading-relaxed border-t border-outline-variant/30 mt-4 pt-4">
                            A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly (monthly/quarterly) into a mutual fund, leveraging Rupee Cost Averaging. Standard lump-sum investments involve a one-time entry into the market.
                        </div>
</details>
<details className="group bg-surface-container-low rounded-lg border border-outline-variant overflow-hidden hover:border-primary transition-colors">
<summary className="flex justify-between items-center p-8 cursor-pointer list-none font-headline-md text-xl text-on-surface">
                            What are the best tax-saving instruments for this financial year?
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary" data-icon="expand_more">expand_more</span>
</summary>
<div className="p-8 pt-0 text-on-surface-variant font-body-md leading-relaxed border-t border-outline-variant/30 mt-4 pt-4">
                            ELSS (Equity Linked Savings Scheme), PPF, and National Pension Scheme (NPS) remain popular choices. However, the best instrument depends on your income bracket and liquidity needs.
                        </div>
</details>
<details className="group bg-surface-container-low rounded-lg border border-outline-variant overflow-hidden hover:border-primary transition-colors">
<summary className="flex justify-between items-center p-8 cursor-pointer list-none font-headline-md text-xl text-on-surface">
                            Is there a minimum net worth requirement for Portfolio Management?
                            <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary" data-icon="expand_more">expand_more</span>
</summary>
<div className="p-8 pt-0 text-on-surface-variant font-body-md leading-relaxed border-t border-outline-variant/30 mt-4 pt-4">
                            Typically, PMS services are designed for high-net-worth individuals with a minimum investible surplus of $500,000. For smaller amounts, we recommend our specialized Mutual Fund advisory.
                        </div>
</details>
</div>
</div>
</section>
</>); }