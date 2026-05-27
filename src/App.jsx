import { useState, useEffect } from 'react'
import './index.css'
import InvestmentBenefits from './components/InvestmentBenefits'

const ASSET_PROFILES = {
  equities: { yieldExpectation: 0.112, volatility: 0.145 },
  fixedIncome: { yieldExpectation: 0.048, volatility: 0.035 },
  alternatives: { yieldExpectation: 0.145, volatility: 0.192 }
};

function App() {
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

  const radius = 140;
  const circumference = 2 * Math.PI * radius;
  
  const equitiesStroke = (allocation.equities / 100) * circumference;
  const fixedStroke = (allocation.fixedIncome / 100) * circumference;
  const altStroke = (allocation.alternatives / 100) * circumference;
  
  const equitiesOffset = 0;
  const fixedOffset = -equitiesStroke;
  const altOffset = fixedOffset - fixedStroke;

  const displayYield = (metrics.expectedYield * 100).toFixed(1);

  return (
    <>
      <div className="container">
        <nav className="navbar reveal-animate">
          <div className="logo">Aurelian.</div>
          <div>
            <button className="btn-secondary">Client Portal</button>
          </div>
        </nav>
      </div>

      <section className="hero">
        <div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <span className="eyebrow reveal-animate delay-100">Exclusivity Defined</span>
          <h1 className="title-main reveal-animate delay-200">
            Command Your Legacy.<br/>The Private Wealth Suite.
          </h1>
          <p className="subtitle reveal-animate delay-300">
            Aurelian engineers bespoke capital allocations, private market access, and advanced risk structures strictly for ultra-high-net-worth individuals and single-family offices.
          </p>
          <div className="reveal-animate delay-300">
            <button className="btn-primary">Apply for Private Access</button>
          </div>
        </div>
      </section>

      <section className="social-proof">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item reveal-animate delay-100">
              <span className="stat-value">$2.4B</span>
              <span className="stat-label">Assets Under Advisement</span>
            </div>
            <div className="stat-item reveal-animate delay-200">
              <span className="stat-value">98.4%</span>
              <span className="stat-label">Generational Retention</span>
            </div>
            <div className="stat-item reveal-animate delay-300">
              <span className="stat-value">Strictly</span>
              <span className="stat-label">Institutional Architecture</span>
            </div>
          </div>
        </div>
      </section>

      <section className="simulator-section">
        <div className="simulator-card luxury-surface reveal-animate delay-100">
          <h2 className="simulator-title">Algorithmic Wealth Allocation</h2>
          
          <div className="simulator-content-centered">
            
            <div className="donut-chart-wrapper">
              
              <div className="donut-label label-alt">Alternatives {allocation.alternatives}%</div>
              <div className="donut-label label-fixed">Fixed Income {allocation.fixedIncome}%</div>
              <div className="donut-label label-eq">Equities {allocation.equities}%</div>
              
              <svg className="donut-svg" viewBox="0 0 340 340">
                <circle cx="170" cy="170" r={radius} fill="transparent" stroke="var(--color-obsidian-900)" strokeWidth="16" />
                <circle 
                  cx="170" cy="170" r={radius} 
                  className="donut-segment donut-alt"
                  strokeDasharray={`${altStroke} ${circumference}`}
                  strokeDashoffset={altOffset}
                />
                <circle 
                  cx="170" cy="170" r={radius} 
                  className="donut-segment donut-fixed"
                  strokeDasharray={`${fixedStroke} ${circumference}`}
                  strokeDashoffset={fixedOffset}
                />
                <circle 
                  cx="170" cy="170" r={radius} 
                  className="donut-segment donut-equities"
                  strokeDasharray={`${equitiesStroke} ${circumference}`}
                  strokeDashoffset={equitiesOffset}
                />
              </svg>
              <div className="chart-center-text">
                <div className="chart-center-yield" id="yield-display">{displayYield}%</div>
                <div className="chart-center-label">Projected Yield</div>
              </div>
            </div>
            
            <hr className="sim-divider" />

            <div className="sliders-grid">
              
              <div className="slider-row-item">
                <span className="slider-label">Equities</span>
                <div className="slider-track-wrap">
                  <input 
                    type="range" min="0" max="100" 
                    value={allocation.equities}
                    onChange={(e) => updateAllocation('equities', e.target.value)}
                    className="slider-input custom-slider"
                    style={{'--val': `${allocation.equities}%`}}
                  />
                </div>
                <div className="slider-value-box">{allocation.equities}%</div>
              </div>

              <div className="slider-row-item">
                <span className="slider-label">Fixed Income</span>
                <div className="slider-track-wrap">
                  <input 
                    type="range" min="0" max="100" 
                    value={allocation.fixedIncome}
                    onChange={(e) => updateAllocation('fixedIncome', e.target.value)}
                    className="slider-input custom-slider"
                    style={{'--val': `${allocation.fixedIncome}%`}}
                  />
                </div>
                <div className="slider-value-box">{allocation.fixedIncome}%</div>
              </div>

              <div className="slider-row-item">
                <span className="slider-label">Alternatives</span>
                <div className="slider-track-wrap">
                  <input 
                    type="range" min="0" max="100" 
                    value={allocation.alternatives}
                    onChange={(e) => updateAllocation('alternatives', e.target.value)}
                    className="slider-input custom-slider"
                    style={{'--val': `${allocation.alternatives}%`}}
                  />
                </div>
                <div className="slider-value-box">{allocation.alternatives}%</div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <InvestmentBenefits />
    </>
  )
}

export default App
