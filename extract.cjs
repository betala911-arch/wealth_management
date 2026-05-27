const fs = require('fs');
const content = fs.readFileSync('converted.jsx', 'utf-8');

function extract(id) {
  const start = content.indexOf('<section id="' + id + '"');
  if(start === -1) return '';
  const end = content.indexOf('</section>', start) + 10;
  return content.substring(start, end);
}

const services = extract('solutions');
fs.writeFileSync('src/components/ServicesGrid.jsx', 'export default function ServicesGrid() { return (<>\n' + services + '\n</>); }');

const insights = extract('insights');
fs.writeFileSync('src/components/AppsAndTools.jsx', 'export default function AppsAndTools() { return (<>\n' + insights + '\n</>); }');

const about = extract('about');
fs.writeFileSync('src/components/WhyChooseUs.jsx', 'export default function WhyChooseUs() { return (<>\n' + about + '\n</>); }');

const testStart = content.indexOf('<section', content.indexOf('Success Stories') - 200);
const testEnd = content.indexOf('</section>', testStart) + 10;
fs.writeFileSync('src/components/Testimonials.jsx', 'export default function Testimonials() { return (<>\n' + content.substring(testStart, testEnd) + '\n</>); }');

const compStart = content.indexOf('<section', content.indexOf('The Power of Compounding') - 200);
const compEnd = content.indexOf('</section>', compStart) + 10;
fs.writeFileSync('src/components/InvestmentBenefits.jsx', 'export default function InvestmentBenefits() { return (<>\n' + content.substring(compStart, compEnd) + '\n</>); }');

const marketStart = content.indexOf('<section', content.indexOf('Market Insights') - 200);
const marketEnd = content.indexOf('</section>', marketStart) + 10;
fs.writeFileSync('src/components/MarketInsights.jsx', 'export default function MarketInsights() { return (<>\n' + content.substring(marketStart, marketEnd) + '\n</>); }');
