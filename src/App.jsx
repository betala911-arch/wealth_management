import { useState, useEffect } from 'react'
import './index.css'

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

  // SVG Donut calculations
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  
  const equitiesStroke = (allocation.equities / 100) * circumference;
  const fixedStroke = (allocation.fixedIncome / 100) * circumference;
  const altStroke = (allocation.alternatives / 100) * circumference;
  
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

  return (
    <>
      <div className="container">
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
        <div className="container">
          <div className="simulator-header">
            <h2>Wealth Allocation Simulator</h2>
          </div>
          
          <div className="simulator-grid">
            <div className="chart-container">
              <div className="donut-chart-wrapper">
                <svg className="donut-svg" viewBox="0 0 240 240">
                  <circle cx="120" cy="120" r={radius} fill="transparent" stroke="#1c1d21" strokeWidth="16" />
                  
                  <circle 
                    cx="120" cy="120" r={radius} 
                    className="donut-segment donut-alt"
                    strokeDasharray={`${altStroke} ${circumference}`}
                    strokeDashoffset={altOffset}
                  />

                  <circle 
                    cx="120" cy="120" r={radius} 
                    className="donut-segment donut-fixed"
                    strokeDasharray={`${fixedStroke} ${circumference}`}
                    strokeDashoffset={fixedOffset}
                  />

                  <circle 
                    cx="120" cy="120" r={radius} 
                    className="donut-segment donut-equities"
                    strokeDasharray={`${equitiesStroke} ${circumference}`}
                    strokeDashoffset={equitiesOffset}
                  />
                </svg>
                <div className="chart-center-text">
                  <div className="chart-center-yield" id="yield-display">{(metrics.expectedYield * 100).toFixed(1)}%</div>
                  <div className="chart-center-label">EST. ANNUAL YIELD</div>
                </div>
              </div>

              <div className="metrics-readouts">
                <div className="metric-box">
                  <div className="metric-box-label">Projected Yield</div>
                  <div className="metric-box-value">{(metrics.expectedYield * 100).toFixed(2)}%</div>
                </div>
                <div className="metric-box">
                  <div className="metric-box-label">Volatility Index</div>
                  <div className="metric-box-value" id="volatility-display">{(metrics.portfolioVolatility * 100).toFixed(2)}%</div>
                </div>
              </div>
            </div>

            <div className="sliders-container">
              <div className="slider-group">
                <div className="slider-label-row">
                  <span>Equities (%)</span>
                </div>
                <div className="slider-track-container">
                  <input 
                    type="range" min="0" max="100" 
                    value={allocation.equities}
                    onChange={(e) => updateAllocation('equities', e.target.value)}
                    className="slider-input"
                  />
                  <div className="slider-value-box">{allocation.equities}</div>
                </div>
              </div>

              <div className="slider-group">
                <div className="slider-label-row">
                  <span>Fixed Income (%)</span>
                </div>
                <div className="slider-track-container">
                  <input 
                    type="range" min="0" max="100" 
                    value={allocation.fixedIncome}
                    onChange={(e) => updateAllocation('fixedIncome', e.target.value)}
                    className="slider-input"
                  />
                  <div className="slider-value-box">{allocation.fixedIncome}</div>
                </div>
              </div>

              <div className="slider-group">
                <div className="slider-label-row">
                  <span>Alternatives (%)</span>
                </div>
                <div className="slider-track-container">
                  <input 
                    type="range" min="0" max="100" 
                    value={allocation.alternatives}
                    onChange={(e) => updateAllocation('alternatives', e.target.value)}
                    className="slider-input"
                  />
                  <div className="slider-value-box">{allocation.alternatives}</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <div className="container">
        <section className="app-section">
          <svg className="app-icon" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="135" height="40" rx="8" fill="#000" stroke="#fff" strokeWidth="1"/>
            <text fill="#fff" x="40" y="16" fontSize="8" fontFamily="Inter">Download on the</text>
            <text fill="#fff" x="40" y="30" fontSize="14" fontFamily="Inter" fontWeight="600">App Store</text>
            <path d="M25 15C25 19 21 21 21 21C21 21 22 25 20 27C19 28 17 28 16 28C14 28 12 28 11 28C10 28 8 28 7 27C5 25 6 21 6 21C6 21 2 19 2 15C2 12 5 10 7 10C8 10 10 11 11 11C12 11 14 10 15 10C17 10 20 12 21 15C21 15 18 16 18 18C18 20 20 22 22 22C23 22 25 21 25 21ZM15 7C15 5 14 3 13 2C12 1 10 1 10 1C10 1 9 4 11 6C13 8 15 8 15 7Z" fill="#fff"/>
          </svg>

          <svg className="app-icon" viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="135" height="40" rx="8" fill="#000" stroke="#fff" strokeWidth="1"/>
            <text fill="#fff" x="40" y="16" fontSize="8" fontFamily="Inter">GET IT ON</text>
            <text fill="#fff" x="40" y="30" fontSize="14" fontFamily="Inter" fontWeight="600">Google Play</text>
            <path d="M7 6L23 16L7 26L13 16L7 6Z" fill="#fff"/>
            <path d="M7 6L23 16L13 16L7 6Z" fill="#ccc"/>
          </svg>
        </section>
      </div>
    </>
  )
}

export default App
