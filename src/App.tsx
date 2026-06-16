import { 
  MessageCircle, 
  ChevronDown, 
  Check, 
  ArrowRight, 
  Menu, 
  X,
  Leaf,
  Feather,
  Heart,
  Sun
} from 'lucide-react';
import { DetailedPrivacyPolicy } from './components/DetailedPrivacyPolicy.tsx';

// --- Components ---

const Navbar = () => {
  const navLinks = [
    { name: 'Benefits', href: '#benefits' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="bg-cream py-6 w-full border-b border-earth/5 relative z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center bg-cream relative z-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center">
            <Leaf className="text-cream w-5 h-5" />
          </div>
          <span className="font-serif text-xl md:text-2xl tracking-tight text-earth">Feel Light Again</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-sage transition-colors text-earth/80">
              {link.name}
            </a>
          ))}
          <a onClick={trackWhatsAppClick} href="https://api.whatsapp.com/message/AGK67AWBJTFRD1?autoload=1&app_absent=0" className="bg-sage text-cream px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-sage-dark transition-all shadow-md hover:shadow-lg active:scale-95">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Mobile Menu - Pure CSS */}
      <details className="md:hidden group absolute top-0 right-0 w-full z-10 [&_summary::-webkit-details-marker]:hidden">
        <summary className="absolute top-6 right-6 p-2 z-30 cursor-pointer list-none flex items-center justify-center">
          <Menu className="w-6 h-6 text-earth block group-open:hidden" />
          <X className="w-6 h-6 text-earth hidden group-open:block" />
        </summary>
        
        <div className="bg-cream border-t border-earth/10 p-6 pt-24 shadow-xl w-full">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-serif text-earth"
              >
                {link.name}
              </a>
            ))}
            <a onClick={trackWhatsAppClick} href="https://api.whatsapp.com/message/AGK67AWBJTFRD1?autoload=1&app_absent=0" className="bg-sage text-cream w-full py-4 rounded-full font-semibold flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Start Conversation
            </a>
          </div>
        </div>
      </details>
    </nav>
  );
};

const FAQEntry = ({ question, answer }: { question: string; answer: string; key?: string | number }) => {
  return (
    <div className="w-full">
      {/* Mobile/Tablet Version (Collapsible) */}
      <details className="w-full lg:hidden print:hidden group [&_summary::-webkit-details-marker]:hidden">
        <summary className="w-full py-6 flex justify-between items-center text-left hover:opacity-80 transition-opacity cursor-pointer list-none">
          <span className="text-lg md:text-xl font-serif text-[#5F544E]">{question}</span>
          <ChevronDown className="w-5 h-5 text-[#5F544E] transition-transform duration-300 group-open:rotate-180" />
        </summary>
        <div className="overflow-hidden pb-6">
          <p className="text-[#5F544E]/80 leading-relaxed font-sans text-lg max-w-2xl">
            {answer}
          </p>
        </div>
      </details>

      {/* Desktop & Print Version (Always Open) */}
      <div className="hidden lg:block print:block w-full">
        <div className="w-full py-6 flex justify-between items-center text-left">
          <span className="text-xl font-serif text-[#5F544E]">{question}</span>
        </div>
        <div className="pb-6">
          <p className="text-[#5F544E]/80 leading-relaxed font-sans text-lg max-w-2xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const trackWhatsAppClick = (e: any) => {
  e.preventDefault();
  const url = e.currentTarget.href;

  if (typeof window !== 'undefined') {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }
    // Note: Clarity tracks clicks automatically based on DOM events.
    window.location.href = url;
  }
};

export default function App() {
  return (
    <div className="selection:bg-sage/20 bg-cream text-earth">
      <Navbar />

      <main>
        {/* SECTION 1 — HERO */}
        <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 flex items-center overflow-hidden bg-cream border-b-0">
          {/* Subtle warm beige gradient background effect */}
          <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-beige/30 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-dusty-rose/10 rounded-full blur-3xl -z-10" />
          
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div  className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-dusty-rose/10 text-dusty-rose-dark rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-dusty-rose/20">
                YOU’RE NOT ALONE ♡
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-earth leading-[1.1] mb-6">
                Tired of feeling <span className="text-dusty-rose-dark">bloated, heavy, and uncomfortable</span> after every meal?
              </h1>
              <p className="text-lg md:text-xl text-earth/70 leading-relaxed mb-8 font-sans">
                You eat a normal meal… and suddenly your stomach feels swollen, tight, or uncomfortable. It’s exhausting.
              </p>
              
              <ul className="mb-10 space-y-4">
                {[
                  "Bloating that won’t go away",
                  "Feeling heavy and uncomfortable",
                  "Low energy after eating",
                  "Avoiding clothes you used to love",
                  "Frustrated, tired, and not feeling like yourself"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-earth/80">
                    <div className="w-6 h-6 rounded-full bg-dusty-rose/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-dusty-rose-dark stroke-[3]" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a onClick={trackWhatsAppClick} href="https://api.whatsapp.com/message/AGK67AWBJTFRD1?autoload=1&app_absent=0" className="bg-sage text-cream px-10 py-5 rounded-full font-semibold text-lg hover:bg-sage-dark transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto animate-subtle-pulse">
                  Talk to Us on WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-sm text-earth/50 font-medium px-4 font-serif italic text-center w-full sm:w-auto">
                  No pressure. Just real support.
                </p>
              </div>
            </div>
            
            <div                className="relative w-full max-w-lg mx-auto lg:max-w-none"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl bg-beige">
                <img 
                  src="/images/hero.webp" 
                  fetchPriority="high"
                  alt="Woman touching her stomach after eating, experiencing discomfort" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — BENEFITS */}
        <section id="benefits" className="pt-0 pb-6 relative overflow-hidden bg-gradient-to-b from-cream via-soft-cream to-cream">
          {/* Subtle noise/texture overlay */}
          <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply bg-[radial-gradient(#8C847E_1px,transparent_1px)] [background-size:24px_24px]" />
          
          {/* Delicate botanical lines - Left */}
          <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 opacity-30 pointer-events-none w-64 h-96 flex items-center">
            <svg viewBox="0 0 100 200" className="w-full h-full stroke-earth/40" fill="none" strokeWidth="0.5">
              <path d="M50 200 C40 150, 30 100, 50 0 M50 150 C30 140, 20 120, 10 100 M45 100 C25 90, 15 70, 5 50" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          
          {/* Delicate botanical lines - Right */}
          <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-30 pointer-events-none w-64 h-96 flex items-center scale-x-[-1]">
             <svg viewBox="0 0 100 200" className="w-full h-full stroke-earth/40" fill="none" strokeWidth="0.5">
              <path d="M50 200 C40 150, 30 100, 50 0 M50 150 C30 140, 20 120, 10 100 M45 100 C25 90, 15 70, 5 50" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-0 border-y border-earth/30 py-10 relative">
              {/* Subtle background highlight behind the whole row */}
              <div className="absolute inset-x-0 -inset-y-4 bg-white/40 blur-2xl -z-10" />

              {[
                { 
                  label: "REDUCE BLOATING", 
                  desc: "Feel lighter after meals", 
                  icon: Feather, 
                  color: "text-sage-dark" 
                },
                { 
                  label: "SUPPORT DIGESTION", 
                  desc: "Help your body digest better", 
                  icon: Leaf, 
                  color: "text-olive-dark"
                },
                { 
                  label: "MORE COMFORT EVERY DAY", 
                  desc: "Feel good in your body again", 
                  icon: Heart, 
                  color: "text-dusty-rose-dark" 
                },
                { 
                  label: "MORE ENERGY NATURALLY", 
                  desc: "When your gut feels better, you feel better", 
                  icon: Sun, 
                  color: "text-earth" 
                }
              ].map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                <div key={benefit.label} className="w-full lg:w-1/4 flex flex-col items-center text-center group relative lg:px-10">
                  {/* Divider for desktop */}
                  {i !== 0 && (
                    <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-earth/30" />
                  )}
                  {/* Divider for mobile */}
                  {i !== 0 && (
                    <div className="lg:hidden absolute top-[-32px] left-1/2 -translate-x-1/2 w-24 h-[1px] bg-earth/30" />
                  )}
                  
                  <div                     className="flex flex-col items-center max-w-[260px]"
                  >
                    <div className="w-20 h-20 rounded-full border-[1.5px] border-earth/30 bg-white/60 shadow-sm flex items-center justify-center mb-8 group-hover:border-earth/50 group-hover:bg-white/90 transition-all duration-500 hover:scale-105">
                      <Icon className={`w-8 h-8 ${benefit.color} stroke-[2]`} />
                    </div>
                    <h3 className="font-sans font-extrabold tracking-[0.15em] text-[#4A433E] text-xs sm:text-sm mb-4">{benefit.label}</h3>
                    <p className="font-serif italic text-[#4A433E] text-xl md:text-2xl leading-snug">{benefit.desc}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 2.25 — COMPARISON */}
        <section className="py-20 md:py-24 bg-[#F7F3EF] relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div  className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#5F544E] mb-6 leading-[1.2]">
                A simpler approach to feeling lighter
              </h2>
              <p className="text-lg md:text-xl text-[#5F544E]/80 font-serif leading-relaxed max-w-3xl mx-auto">
                Feel Light Again was created for people who are tired of feeling uncomfortable after meals and overwhelmed by complicated wellness advice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
              {/* Left Card */}
              <div                 className="bg-[#FDFBF7] p-10 md:p-12 rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#5F544E]/5"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-dusty-rose/15 flex items-center justify-center shrink-0">
                    <X className="w-5 h-5 text-dusty-rose-dark stroke-[2.5]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#5F544E]">You’re Tired Of</h3>
                </div>
                <ul className="space-y-5 flex-1">
                  {[
                    "Complicated wellness routines",
                    "Harsh detox programs",
                    "Products that overpromise everything",
                    "Guessing what your body needs"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-[#5F544E]/80 font-sans text-lg">
                      <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-dusty-rose/50 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Card */}
              <div                 className="bg-[#97B095] p-10 md:p-12 rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#97B095]"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-[#2C382A] stroke-[2.5]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1E281C]">Our Approach Focuses On</h3>
                </div>
                <ul className="space-y-5 flex-1">
                  {[
                    "Gentle digestive support",
                    "Feeling lighter after meals",
                    "Simple daily wellness habits",
                    "A routine that feels realistic"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-[#1E281C]/90 font-sans text-lg font-medium">
                      <div className="w-1.5 h-1.5 mt-2.5 rounded-full bg-[#1E281C]/40 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div  className="text-center">
              <p className="font-serif italic text-2xl md:text-3xl text-[#5F544E]/90 leading-snug">
                "Digestive wellness should feel simple, supportive, and realistic."
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2.3 — SYMPTOM IDENTIFICATION */}
        <section className="py-20 md:py-24 bg-[#EEF4EC] relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div  className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#5F544E] mb-6 leading-[1.2]">
                What people are looking for support with
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {[
                "Feeling bloated after meals",
                "Feeling heavy, tight, or uncomfortable",
                "Low energy after eating",
                "Digestive discomfort that affects confidence",
                "Wanting a simple routine that feels doable"
              ].map((item, idx) => (
                <div
                  key={idx}                   className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-[24px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white flex items-center gap-6"
                >
                  <div className="w-12 h-12 rounded-full bg-[#97B095]/20 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-[#586149] stroke-[2.5]" />
                  </div>
                  <p className="text-[#5F544E] font-sans text-lg md:text-xl font-medium tracking-wide">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — SIMPLE PROCESS */}
        <section id="process" className="section-padding bg-cream relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div  className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-earth mb-6">A supportive wellness process.</h2>
              <p className="text-xl text-earth/60 font-serif italic max-w-2xl mx-auto">
                Because feeling better shouldn't be complicated.
              </p>
            </div>

            <div className="relative z-10 mt-12 md:mt-16">
              {/* Elegant visual connector line between steps (Desktop) */}
              <div className="hidden md:block absolute top-[32px] left-[16.66%] right-[16.66%] h-[1px] bg-gradient-to-r from-transparent via-[#5F544E]/20 to-transparent z-0" />
              
              <div className="grid md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 relative z-10">
                {[
                  {
                    step: "01",
                    title: "Prepare",
                    desc: "Gentle habits to help your body approach meals without feeling overwhelmed.",
                    color: "bg-[#F8F6F3]",
                    hoverColor: "hover:bg-[#F4EFEA]",
                    icon: Sun,
                    image: "/images/prepare.webp"
                  },
                  {
                    step: "02",
                    title: "Support",
                    desc: "Natural, realistic support to help reduce heaviness and discomfort after eating.",
                    color: "bg-[#EEF4EC]",
                    hoverColor: "hover:bg-[#E4EFE2]",
                    icon: Leaf,
                    image: "/images/support.webp"
                  },
                  {
                    step: "03",
                    title: "Replenish",
                    desc: "Daily nourishment that brings back your energy so you feel like yourself again.",
                    color: "bg-[#F4F0F1]",
                    hoverColor: "hover:bg-[#EBE4E6]",
                    icon: Feather,
                    image: "/images/replenish.webp"
                  }
                ].map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.step}                       className="relative flex flex-col items-center group"
                    >
                      {/* Floating Step Number */}
                      <div className="w-16 h-16 rounded-full bg-white shadow-[0_8px_24px_rgb(0,0,0,0.06)] border border-[#5F544E]/5 flex items-center justify-center mb-8 relative z-10 group-hover:-translate-y-1 group-hover:shadow-[0_12px_32px_rgb(0,0,0,0.08)] transition-all duration-500">
                        <span className="font-serif italic text-2xl text-[#5F544E]">{card.step}</span>
                      </div>

                      {/* Card Body */}
                      <div className={`w-full ${card.color} ${card.hoverColor} p-6 lg:p-8 rounded-[40px] shadow-[0_4px_24px_rgb(0,0,0,0.02)] group-hover:shadow-[0_16px_48px_rgb(0,0,0,0.06)] group-hover:-translate-y-1 transition-all duration-500 flex flex-col`}>
                        
                        {/* Enlarged Image Area */}
                        <div className="relative aspect-[4/3] md:aspect-[5/4] w-full rounded-[28px] overflow-hidden mb-8 shadow-sm">
                          <img 
                            src={card.image} 
                            loading="lazy"
                            decoding="async"
                            alt={card.title}
                            className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-[#5F544E]/5 mix-blend-overlay" />
                          
                          {/* Floating Icon intersecting bottom right */}
                          <div className="absolute -bottom-6 right-6 w-14 h-14 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-[0_8px_24px_rgb(0,0,0,0.1)] transform group-hover:-translate-y-1 transition-transform duration-500">
                            <Icon className="w-6 h-6 text-[#5F544E]" />
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="px-2 pb-4 text-center md:text-left">
                          <h3 className="text-3xl font-serif text-[#5F544E] mb-4">{card.title}</h3>
                          <p className="text-[#5F544E]/80 leading-relaxed text-lg">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2.4 — EMOTIONAL TRANSFORMATION */}
        <section className="py-20 md:py-24 bg-cream relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Image */}
              <div                 className="order-1"
              >
                <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.06)] bg-warm-beige/30">
                  <img 
                    src="/images/transformation.webp" 
                    loading="lazy"
                    decoding="async"
                    alt="Woman walking outdoors peacefully in golden hour" 
                    className="w-full h-full object-cover object-center opacity-95 hover:opacity-100 transition-opacity duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle warm overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-earth/10 via-transparent to-transparent mix-blend-multiply" />
                  <div className="absolute inset-0 bg-sage/5 mix-blend-overlay" />
                </div>
              </div>

              {/* Right Column: Editorial Text */}
              <div                 className="max-w-lg mx-auto lg:mx-0 order-2"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#5F544E] leading-[1.2] mb-8">
                  When your digestion feels better, your whole day feels different
                </h2>
                
                <div className="space-y-6 text-[#5F544E]/90 text-lg md:text-xl font-sans leading-relaxed">
                  <p>
                    When you constantly feel uncomfortable after eating, it can affect your mood, energy, confidence, and daily life.
                  </p>
                  
                  <p className="font-serif italic text-xl md:text-2xl text-[#5F544E]">
                    Feeling comfortable in your body again may seem small, but for many people, it changes everything.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2.5 — EMOTIONAL RELATABILITY */}
        <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-cream relative overflow-hidden">
          {/* Subtle Background Gradients */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-warm-beige/50 rounded-full blur-[100px] opacity-70 -z-10 translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-dusty-rose/10 rounded-full blur-[80px] -z-10 -translate-x-1/3 translate-y-1/3" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Left Column: Editorial Text */}
              <div                 className="max-w-xl mx-auto lg:mx-0 order-2 lg:order-1"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-dusty-rose-dark/40" />
                  <span className="text-earth/60 font-sans text-sm font-bold tracking-[0.2em] uppercase">Daily Reality</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-earth leading-[1.1] mb-10 text-[#3A3532]">
                  It’s exhausting to feel bloated all the time.
                </h2>
                
                <div className="space-y-6 text-xl text-earth/80 font-serif leading-relaxed">
                  <p>
                    You eat a normal meal… and suddenly your stomach feels heavy, tight, uncomfortable, or swollen.
                  </p>
                  
                  <div className="w-8 h-[1px] bg-sage/40 my-8" />
                  
                  <p>
                    Your clothes feel tighter. Your energy drops. You start avoiding certain foods or wondering why your body reacts this way.
                  </p>
                  
                  <p className="text-dusty-rose-dark font-medium italic">
                    And the worst part? It slowly starts feeling normal.
                  </p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-earth/10">
                  <p className="font-serif italic text-2xl md:text-3xl text-earth/90 text-[#3A3532]">
                    But your body may be asking for support.
                  </p>
                </div>
              </div>

              {/* Right Column: Lifestyle Image */}
              <div                 className="relative order-1 lg:order-2"
              >
                <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[48px] overflow-hidden shadow-[0_12px_48px_rgb(0,0,0,0.08)] bg-warm-beige/30">
                  <img 
                    src="/images/relatable.webp" 
                    loading="lazy"
                    decoding="async"
                    alt="Woman sitting quietly, feeling soft emotional discomfort" 
                    className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  {/* Internal image gradient for warmth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-earth/20 via-transparent to-transparent mix-blend-multiply" />
                  <div className="absolute inset-0 bg-sage/10 mix-blend-overlay" />
                </div>

                {/* Floating Quote Card Overlay */}
                <div                   className="absolute -bottom-10 lg:-bottom-12 -right-4 lg:-right-8 bg-cream/95 backdrop-blur-md p-8 lg:p-10 rounded-[32px] shadow-[0_12px_40px_rgb(0,0,0,0.08)] border border-white/60 max-w-[320px] md:max-w-sm"
                >
                  <div className="flex gap-4">
                    <Heart className="w-6 h-6 text-dusty-rose-dark shrink-0" />
                    <p className="font-serif text-earth text-xl md:text-2xl leading-snug">
                      "You deserve to feel comfortable in your body again."
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4 — TESTIMONIALS */}
        <section id="testimonials" className="section-padding bg-warm-off-white">
          <div className="max-w-7xl mx-auto">
            <div  className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl text-earth mb-6">You are not alone in this.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { text: "I stopped feeling bloated after every meal. The relief is just incredible." },
                { text: "I finally feel lighter during the day. It’s gentle, simple, and exactly what I needed." },
                { text: "I feel more like myself again. My energy is back, and my clothes fit comfortably." }
              ].map((testimonial, i) => (
                <div 
                  key={i}                   className="bg-white p-10 rounded-[40px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-earth/5"
                >
                  <div className="mb-6 flex gap-1">
                    {[1,2,3,4,5].map(star => (
                      <svg key={star} className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xl text-earth/80 font-serif italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — FAQ */}
        <section id="faq" className="py-24 md:py-32 bg-cream">
          <div  className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#5F544E] mb-6">Your Questions Answered</h2>
              <div className="w-16 h-[1px] bg-[#97B095] mx-auto" />
            </div>
            
            <div className="space-y-2">
              {[
                {
                  q: "Is this a medical treatment?",
                  a: "No, Feel Light Again focuses on everyday wellness and gentle digestive support. Our products are designed to comfort and nourish, not to replace professional medical advice."
                },
                {
                  q: "Is this only for women?",
                  a: "While our community is largely women, our comfortable approach to digestive wellness is beneficial for anyone looking to feel lighter after meals."
                },
                {
                  q: "How long does it take to notice changes?",
                  a: "Many people feel a gentle difference in how their stomach settles within the first week, while deeper, more lasting comfort builds steadily over a month of daily support."
                },
                {
                  q: "Do I need a complicated routine?",
                  a: "Not at all. We believe feeling better should be simple, not stressful. Our wellness habits are designed to easily fit into even the busiest days without feeling like a chore."
                },
                {
                  q: "How do I get started?",
                  a: "The best way is to start a conversation with us on WhatsApp. We’ll listen to your concerns and gently help you identify the best path forward."
                },
                {
                  q: "Is this a harsh detox?",
                  a: "Absolutely not. We avoid harsh cleanses or restrictive detox programs entirely. Our approach is gentle, supportive, and focused on natural balance and daily comfort."
                },
                {
                  q: "Do I need to completely change my diet?",
                  a: "No. We believe in adding supportive habits rather than creating restrictive rules. You'll learn slowly what helps your body thrive without feeling deprived."
                },
                {
                  q: "Can I still eat normally?",
                  a: "Yes. Our goal is to expand your comfort space, helping your body process normal, everyday meals with less heaviness and more ease."
                },
                {
                  q: "What makes this different from other wellness products?",
                  a: "We prioritize gentle, realistic support over aggressive empty promises. We also offer 1-on-1 human guidance to ensure you feel supported through your entire journey."
                }
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-[#5F544E]/10 last:border-0 relative">
                  <FAQEntry question={faq.q} answer={faq.a} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — FINAL CTA */}
        <section className="section-padding bg-[#7B8569] text-cream"> {/* Muted Olive Background */}
          <div             className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-cream">Not sure where to start?</h2>
            <p className="text-xl md:text-2xl text-cream/90 leading-relaxed mb-12 font-serif italic">
              We’ll help you understand what may be contributing to your digestive discomfort and what kind of support may fit your lifestyle.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <a onClick={trackWhatsAppClick} href="https://api.whatsapp.com/message/AGK67AWBJTFRD1?autoload=1&app_absent=0" className="bg-cream text-[#7B8569] px-12 py-6 rounded-full font-bold text-xl hover:bg-white transition-all shadow-xl flex items-center gap-4 group animate-subtle-pulse">
                <MessageCircle className="w-6 h-6" />
                Message Us on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center">
                <Leaf className="text-cream w-4 h-4" />
              </div>
              <span className="font-serif text-xl text-earth">Feel Light Again</span>
            </div>
            <p className="text-earth/60 text-sm leading-relaxed">
              Supporting everyday digestive wellness with simplicity, warmth, and natural care. You deserve to feel comfortable in your body.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-earth/40 mb-6 font-sans">Brand</h4>
              <ul className="space-y-3 text-earth/70">
                <li><a href="#benefits" className="hover:text-sage transition-colors">Benefits</a></li>
                <li><a href="#process" className="hover:text-sage transition-colors">Our Process</a></li>
                <li><a onClick={trackWhatsAppClick} href="https://api.whatsapp.com/message/AGK67AWBJTFRD1?autoload=1&app_absent=0" className="hover:text-sage transition-colors cursor-pointer">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-earth/40 mb-6 font-sans">Support</h4>
              <ul className="space-y-3 text-earth/70">
                <li><a href="#faq" className="hover:text-sage transition-colors">FAQ</a></li>
                <li><a href="#privacy" className="hover:text-sage transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-sage transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Legal Sections as Details */}
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-earth/10">
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            <details id="privacy" className="text-left group opacity-70 hover:opacity-100 transition-opacity">
              <summary className="cursor-pointer text-sm font-serif font-bold text-earth outline-none">
                Privacy Policy
              </summary>
              <div className="pt-6 pb-12 cursor-auto text-sm text-earth/80">
                <DetailedPrivacyPolicy />
              </div>
            </details>

            <details id="terms" className="text-left group opacity-70 hover:opacity-100 transition-opacity">
              <summary className="cursor-pointer text-sm font-serif font-bold text-earth outline-none">
                Terms of Service
              </summary>
              <div className="pt-6 pb-12 cursor-auto text-sm text-earth/80 space-y-6">
                <p>By using our services, you agree to the following simple terms:</p>
                <section>
                  <h4 className="text-earth font-bold text-lg mb-2 font-serif">Not Medical Advice</h4>
                  <p>The content provided by Feel Light Again is for informational purposes only. We are not medical professionals, and our advice should not replace that of a doctor or healthcare provider.</p>
                </section>
                <section>
                  <h4 className="text-earth font-bold text-lg mb-2 font-serif">Personal Responsibility</h4>
                  <p>Wellness habits and digestive support suggestions are implemented at your own discretion. Always listen to your body and consult a professional before making significant changes to your diet or routine.</p>
                </section>
                <section>
                  <h4 className="text-earth font-bold text-lg mb-2 font-serif">Age Requirement</h4>
                  <p>You must be at least 18 years old to use our services and participate in wellness conversations.</p>
                </section>
              </div>
            </details>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-10 border-t border-earth/10 flex flex-col items-center text-center">
          <div className="max-w-3xl mb-8">
            <p className="text-earth/40 text-[11px] md:text-xs leading-loose uppercase tracking-wide">
              DISCLAIMER: THIS CONTENT IS FOR INFORMATIONAL PURPOSES ONLY. IT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE, OR PREVENT ANY DISEASE. ALWAYS CONSULT YOUR HEALTHCARE PROVIDER. RESULTS AND EXPERIENCES MAY VARY.
            </p>
          </div>
          <p className="text-earth/30 text-xs font-medium">
            © {new Date().getFullYear()} Feel Light Again. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
