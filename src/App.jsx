import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import './index.css';

// ---------------------------------------------------------------------------
// ANIMATION COMPONENTS
// ---------------------------------------------------------------------------

const WordsPullUp = ({ text, className, showAsterisk = false }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            delay: i * 0.08,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="mr-[0.25em] relative inline-block"
        >
          {word}
          {showAsterisk && i === words.length - 1 && (
            <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
          )}
        </motion.span>
      ))}
    </div>
  );
};

const WordsPullUpMultiStyle = ({ segments }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  let globalWordIndex = 0;

  return (
    <div ref={containerRef} className="inline-flex flex-wrap justify-center text-center">
      {segments.map((segment, segIdx) => {
        const words = segment.text.split(" ");
        return (
          <React.Fragment key={segIdx}>
            {words.map((word, wordIdx) => {
              const currentDelay = globalWordIndex * 0.08;
              globalWordIndex++;
              return (
                <motion.span
                  key={`${segIdx}-${wordIdx}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{
                    delay: currentDelay,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className={`mr-[0.25em] inline-block ${segment.className || ''}`}
                >
                  {word}
                </motion.span>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const AnimatedLetter = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
};

// ---------------------------------------------------------------------------
// MAIN APP COMPONENT
// ---------------------------------------------------------------------------

export default function App() {
  const aboutText = "Over the last seven years, we have built the algorithmic architecture for private wealth syndicates, family offices, and sovereign wealth funds globally. Together, we have crafted systems that manage billions, setting the institutional standard for digital sovereignty and retention.";
  const aboutChars = aboutText.split("");
  
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start 0.8", "end 0.2"]
  });

  return (
    <div className="bg-black min-h-screen text-[#DEDBC8] selection:bg-[#DEDBC8] selection:text-black">
      
      {/* SECTION 1: HERO */}
      <section className="h-screen p-4 md:p-6 w-full flex flex-col relative">
        <div className="flex-1 w-full relative rounded-2xl md:rounded-[2rem] overflow-hidden">
          
          {/* Background Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          />
          
          {/* Noise & Gradient Overlays */}
          <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none"></div>
          
          {/* Navbar (Absolute Top Center) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 z-50">
            <nav className="flex items-center justify-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {['Our story', 'Collective', 'Workshops', 'Programs', 'Inquiries'].map((item) => (
                <a key={item} href="#" className="text-[10px] sm:text-xs md:text-sm transition-colors duration-300" style={{ color: 'rgba(225, 224, 204, 0.8)' }} onMouseOver={e => e.currentTarget.style.color = '#E1E0CC'} onMouseOut={e => e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)'}>
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Hero Content (Absolute Bottom) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 pb-8 md:pb-16 z-20">
            <div className="grid grid-cols-12 gap-6 items-end">
              {/* Left Column (Heading) */}
              <div className="col-span-12 md:col-span-8">
                <WordsPullUp 
                  text="Aurelian" 
                  showAsterisk={true} 
                  className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]" 
                />
              </div>
              
              {/* Right Column (Text + CTA) */}
              <div className="col-span-12 md:col-span-4 flex flex-col items-start md:items-end md:text-right gap-6 pb-2 md:pb-6">
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2] max-w-sm"
                >
                  Aurelian is an elite private wealth suite bound not by geography or tradition, but by a hunger to unlock generational potential through algorithmic precision.
                </motion.p>
                
                <motion.button 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-primary text-black rounded-full pl-6 pr-2 py-2 flex items-center gap-4 hover:gap-6 transition-all duration-300 font-medium text-sm sm:text-base"
                >
                  Join the syndicate
                  <div className="bg-black text-[#DEDBC8] rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight size={18} />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="bg-black py-24 md:py-32 px-4 md:px-8 w-full flex justify-center items-center relative z-10">
        <div className="bg-[#101010] w-full max-w-6xl rounded-[2rem] p-8 md:p-16 lg:p-24 flex flex-col items-center justify-center border border-white/5 shadow-2xl">
          
          <div className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-12">
            The Architecture
          </div>
          
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9]">
            <WordsPullUpMultiStyle 
              segments={[
                { text: "We are Aurelian, ", className: "font-normal" },
                { text: "an elite private suite. ", className: "font-serif italic" },
                { text: "We specialize in algorithmic allocation and digital sovereignty.", className: "font-normal" }
              ]}
            />
          </div>

          <div className="mt-16 sm:mt-24 max-w-2xl mx-auto text-center" ref={aboutRef}>
            <p className="text-xs sm:text-sm md:text-base text-[#DEDBC8] leading-relaxed">
              {aboutChars.map((char, index) => {
                const charProgress = index / aboutChars.length;
                return (
                  <AnimatedLetter 
                    key={index} 
                    char={char} 
                    progress={scrollYProgress} 
                    range={[charProgress - 0.1, charProgress + 0.05]} 
                  />
                );
              })}
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: FEATURES */}
      <section className="bg-black min-h-screen relative py-20 px-4 md:px-8 z-0">
        <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none"></div>
        
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="mb-16">
            <WordsPullUpMultiStyle 
              segments={[
                { text: "Institutional workflows for visionary capital. ", className: "text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal block mb-2" },
                { text: "Built for pure sovereignty. Powered by algorithms.", className: "text-gray-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal block" }
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
            
            {/* Card 1: Video */}
            <FeatureCard delay={0}>
              <div className="absolute inset-0">
                <video 
                  autoPlay loop muted playsInline 
                  className="w-full h-full object-cover"
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-6 left-6 text-[#E1E0CC] font-serif italic text-2xl">
                Your sovereign canvas.
              </div>
            </FeatureCard>

            {/* Card 2: Market Simulator */}
            <FeatureCard delay={0.15}>
              <div className="bg-[#212121] w-full h-full rounded-2xl md:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85" alt="Icon" className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover mb-6" />
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-gray-500 text-sm font-mono">(01)</span>
                    <h3 className="text-xl text-primary font-medium">Algorithmic Simulator.</h3>
                  </div>
                  <ul className="space-y-4">
                    <CheckListItem text="Real-time macro backtesting" />
                    <CheckListItem text="Predictive yield modeling" />
                    <CheckListItem text="Volatility impact analysis" />
                    <CheckListItem text="Automated rebalancing triggers" />
                  </ul>
                </div>
                <LearnMoreButton />
              </div>
            </FeatureCard>

            {/* Card 3: Cryptographic Security */}
            <FeatureCard delay={0.3}>
              <div className="bg-[#212121] w-full h-full rounded-2xl md:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85" alt="Icon" className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover mb-6" />
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-gray-500 text-sm font-mono">(02)</span>
                    <h3 className="text-xl text-primary font-medium">Cryptographic Custody.</h3>
                  </div>
                  <ul className="space-y-4">
                    <CheckListItem text="Hardware-backed key generation" />
                    <CheckListItem text="Multi-party computation (MPC)" />
                    <CheckListItem text="Instant on-chain settlement" />
                  </ul>
                </div>
                <LearnMoreButton />
              </div>
            </FeatureCard>

            {/* Card 4: Global Jurisdictions */}
            <FeatureCard delay={0.45}>
              <div className="bg-[#212121] w-full h-full rounded-2xl md:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85" alt="Icon" className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover mb-6" />
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-gray-500 text-sm font-mono">(03)</span>
                    <h3 className="text-xl text-primary font-medium">Border-less Capital.</h3>
                  </div>
                  <ul className="space-y-4">
                    <CheckListItem text="Tax harmonization AI" />
                    <CheckListItem text="Global compliance tracking" />
                    <CheckListItem text="Multi-currency neural routing" />
                  </ul>
                </div>
                <LearnMoreButton />
              </div>
            </FeatureCard>

          </div>
        </div>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// HELPER COMPONENTS FOR FEATURES SECTION
// ---------------------------------------------------------------------------

const FeatureCard = ({ children, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl md:rounded-[2rem] overflow-hidden w-full h-[350px] md:h-[400px] lg:h-full"
    >
      {children}
    </motion.div>
  );
};

const CheckListItem = ({ text }) => (
  <li className="flex items-start gap-3">
    <Check size={18} className="text-primary shrink-0 mt-0.5" />
    <span className="text-gray-400 text-sm leading-snug">{text}</span>
  </li>
);

const LearnMoreButton = () => (
  <button className="flex items-center gap-2 text-primary font-medium text-sm group mt-6">
    Learn more
    <ArrowRight size={16} className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
  </button>
);
