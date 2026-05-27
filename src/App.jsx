import { useState, useEffect } from 'react'
import './index.css'
import ServicesGrid from './components/ServicesGrid'
import InvestmentBenefits from './components/InvestmentBenefits'
import AppsAndTools from './components/AppsAndTools'
import MarketInsights from './components/MarketInsights'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'

const ASSET_PROFILES = {
  equities: { yieldExpectation: 0.112, volatility: 0.145 },
  fixedIncome: { yieldExpectation: 0.048, volatility: 0.035 },
  alternatives: { yieldExpectation: 0.145, volatility: 0.192 }
};

function App() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [allocation, setAllocation] = useState({
    equities: 60,
    fixedIncome: 30,
    alternatives: 10
  });
  
  const [metrics, setMetrics] = useState({
    expectedYield: 0,
    portfolioVolatility: 0
  });

  const updateAllocation = (changedAsset, newValueStr) => {
    let newValue = parseInt(newValueStr, 10);
    if (isNaN(newValue)) newValue = 0;
    
    let newAlloc = { ...allocation };
    const oldValue = newAlloc[changedAsset];
    const delta = newValue - oldValue;
    newAlloc[changedAsset] = newValue;
    
    const otherAssets = Object.keys(newAlloc).filter(k => k !== changedAsset);
    const sumOthers = otherAssets.reduce((sum, k) => sum + newAlloc[k], 0);
    
    if (sumOthers > 0) {
      otherAssets.forEach(k => {
        newAlloc[k] -= delta * (newAlloc[k] / sumOthers);
        if (newAlloc[k] < 0) newAlloc[k] = 0;
        if (newAlloc[k] > 100) newAlloc[k] = 100;
      });
    } else {
      otherAssets.forEach(k => { 
        newAlloc[k] = (100 - newValue) / otherAssets.length; 
      });
    }
    
    // Normalize rounding to ensure exactly 100
    const total = Object.values(newAlloc).reduce((a, b) => a + b, 0);
    if (Math.abs(total - 100) > 0.01) {
      const diff = 100 - total;
      let maxAsset = otherAssets[0];
      if (newAlloc[otherAssets[1]] > newAlloc[otherAssets[0]]) {
        maxAsset = otherAssets[1];
      }
      newAlloc[maxAsset] += diff;
    }

    setAllocation({
      equities: Math.round(newAlloc.equities),
      fixedIncome: Math.round(newAlloc.fixedIncome),
      alternatives: Math.round(newAlloc.alternatives)
    });
  };

  useEffect(() => {
    const wEq = allocation.equities / 100;
    const wFi = allocation.fixedIncome / 100;
    const wAlt = allocation.alternatives / 100;
    
    const expectedYield = (wEq * ASSET_PROFILES.equities.yieldExpectation) +
                          (wFi * ASSET_PROFILES.fixedIncome.yieldExpectation) +
                          (wAlt * ASSET_PROFILES.alternatives.yieldExpectation);
                          
    const variance = Math.pow(wEq * ASSET_PROFILES.equities.volatility, 2) +
                     Math.pow(wFi * ASSET_PROFILES.fixedIncome.volatility, 2) +
                     Math.pow(wAlt * ASSET_PROFILES.alternatives.volatility, 2) +
                     (2 * wEq * wFi * 0.002) + 
                     (2 * wEq * wAlt * 0.045);
                     
    const portfolioVolatility = Math.sqrt(variance);

    setMetrics({
      expectedYield,
      portfolioVolatility
    });
  }, [allocation]);

  // Donut chart logic
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  
  // To match the screenshot: gold (equities) starts roughly on the right, fixed income (slate) left/bottom, alt (white) top left
  // We'll draw them sequentially in a circle.
  
  const equitiesStroke = (allocation.equities / 100) * circumference;
  const fixedStroke = (allocation.fixedIncome / 100) * circumference;
  const altStroke = (allocation.alternatives / 100) * circumference;
  
  // Adjust offsets so they line up correctly without gaps.
  const equitiesOffset = 0;
  const fixedOffset = -equitiesStroke;
  const altOffset = fixedOffset - fixedStroke;

  const accordions = [
    {
      title: "Bespoke Portfolio Management",
      content: "Tailored investment strategies designed to align with your personal risk tolerance, liquidity needs, and multi-generational objectives."
    },
    {
      title: "Institutional Asset Allocation",
      content: "Access to private markets, alternative investments, and complex financial instruments typically reserved for large institutions."
    },
    {
      title: "Generational Wealth Transfer",
      content: "Comprehensive estate planning, trust structuring, and tax-optimized transfer strategies to preserve your legacy."
    }
  ];

  // Using ~6.0% as an example yield based on sliders being 60,30,10.
  // The mathematical formula might differ from 6.0% but we use what the formula calculates.
  const displayYield = (metrics.expectedYield * 100).toFixed(1);

  return (
    <>
      <div className="container hero-container">
        <nav className="navbar">
          <div className="logo">Aurelian</div>
          <div>
            <button className="btn-primary" style={{padding: '0.75rem 1.5rem', background: 'transparent', color: '#fff', border: '1px solid var(--border-gold)'}}>Client Login</button>
          </div>
        </nav>

        <section className="hero">
          <span className="eyebrow">E X C L U S I V I T Y &nbsp; D E F I N E D</span>
          <h1 className="title-main">Institutional Sovereignty<br/>over Generational Wealth.</h1>
          <p className="subtitle">
            Aurelian engineers bespoke capital allocations, private market access, and advanced risk structures for ultra-high-net-worth individuals and single-family offices.
          </p>
          <button className="btn-primary">Become a Client</button>

          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-value">$2.4B</span>
              <span className="stat-label">ASSETS UNDER ADVISEMENT</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">98.4%</span>
              <span className="stat-label">GENERATIONAL CLIENT RETENTION</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">Exclusively</span>
              <span className="stat-label">INSTITUTIONAL ARCHITECTURE</span>
            </div>
          </div>

          <div className="accordion-container">
            {accordions.map((item, index) => (
              <div 
                key={index} 
                className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
                onClick={() => setActiveAccordion(index === activeAccordion ? -1 : index)}
              >
                <div className="accordion-header">
                  <span className="accordion-title">{item.title}</span>
                  <div className="accordion-icon"></div>
                </div>
                <div className="accordion-content">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="simulator-section">
        <div className="simulator-card">
          <h2 className="simulator-title">Wealth Allocation Simulator</h2>
          
          <div className="simulator-content-centered">
            
            <div className="donut-chart-wrapper">
              
              {/* Legend Labels Absolutely Positioned */}
              <div className="donut-label label-alt">Alternatives {allocation.alternatives}%</div>
              <div className="donut-label label-fixed">Fixed Income {allocation.fixedIncome}%</div>
              <div className="donut-label label-eq">Equities {allocation.equities}%</div>
              
              <svg className="donut-svg" viewBox="0 0 320 320">
                {/* Background track */}
                <circle cx="160" cy="160" r={radius} fill="transparent" stroke="#161719" strokeWidth="24" />
                
                {/* Alternative */}
                <circle 
                  cx="160" cy="160" r={radius} 
                  className="donut-segment donut-alt"
                  strokeDasharray={`${altStroke} ${circumference}`}
                  strokeDashoffset={altOffset}
                />
                {/* Fixed Income */}
                <circle 
                  cx="160" cy="160" r={radius} 
                  className="donut-segment donut-fixed"
                  strokeDasharray={`${fixedStroke} ${circumference}`}
                  strokeDashoffset={fixedOffset}
                />
                {/* Equities */}
                <circle 
                  cx="160" cy="160" r={radius} 
                  className="donut-segment donut-equities"
                  strokeDasharray={`${equitiesStroke} ${circumference}`}
                  strokeDashoffset={equitiesOffset}
                />
              </svg>
              <div className="chart-center-text">
                <div className="chart-center-yield" id="yield-display">{displayYield}%</div>
                <div className="chart-center-label">EST. ANNUAL YIELD</div>
              </div>
            </div>

            <hr className="sim-divider" />
            
            <div className="metrics-readouts-centered">
              <div className="metric-box-label">Projected Annual Yield</div>
              <div className="metric-box-value monospace-value">{displayYield}%</div>
            </div>

            <hr className="sim-divider" />

            <div className="sliders-grid">
              
              {/* Row 1, Col 1 */}
              <div className="slider-row-item">
                <span className="slider-label">Equities (%)</span>
                <div className="slider-track-wrap">
                  <input 
                    type="range" min="0" max="100" 
                    value={allocation.equities}
                    onChange={(e) => updateAllocation('equities', e.target.value)}
                    className="slider-input custom-slider"
                    style={{'--val': `${allocation.equities}%`}}
                  />
                </div>
                <div className="slider-value-box">{allocation.equities}</div>
              </div>

              {/* Row 1, Col 2 */}
              <div className="slider-row-item">
                <span className="slider-label">Fixed Income (%)</span>
                <div className="slider-track-wrap">
                  <input 
                    type="range" min="0" max="100" 
                    value={allocation.fixedIncome}
                    onChange={(e) => updateAllocation('fixedIncome', e.target.value)}
                    className="slider-input custom-slider"
                    style={{'--val': `${allocation.fixedIncome}%`}}
                  />
                </div>
                <div className="slider-value-box">{allocation.fixedIncome}</div>
              </div>

              {/* Row 2, Col 1 */}
              <div className="slider-row-item">
                <span className="slider-label">Alternatives (%)</span>
                <div className="slider-track-wrap">
                  <input 
                    type="range" min="0" max="100" 
                    value={allocation.alternatives}
                    onChange={(e) => updateAllocation('alternatives', e.target.value)}
                    className="slider-input custom-slider"
                    style={{'--val': `${allocation.alternatives}%`}}
                  />
                </div>
                <div className="slider-value-box">{allocation.alternatives}</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />
      <InvestmentBenefits />
      <AppsAndTools />
      <MarketInsights />
      <WhyChooseUs />
      <Testimonials />
    </>
  )
}

export default App
