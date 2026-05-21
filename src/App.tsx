/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  ChevronDown, 
  Check, 
  ArrowRight, 
  Menu, 
  X,
  Heart,
  Sparkles,
  Leaf
} from 'lucide-react';
import { LegalOverlay } from './components/LegalOverlay.tsx';
import { DetailedPrivacyPolicy } from './components/DetailedPrivacyPolicy.tsx';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
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
          <a href="https://api.whatsapp.com/message/AGK67AWBJTFRD1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="bg-sage text-cream px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-sage-dark transition-all shadow-md hover:shadow-lg active:scale-95 animate-subtle-pulse">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-earth" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-cream border-t border-earth/10 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif text-earth"
                >
                  {link.name}
                </a>
              ))}
              <a href="https://api.whatsapp.com/message/AGK67AWBJTFRD1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="bg-sage text-cream w-full py-4 rounded-full font-semibold flex items-center justify-center gap-2 animate-subtle-pulse">
                <MessageCircle className="w-5 h-5" />
                Start Conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FAQEntry = ({ question, answer }: { question: string; answer: string; key?: string | number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-earth/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-sage-light transition-colors group"
      >
        <span className="text-lg md:text-xl font-serif text-earth group-hover:translate-x-1 transition-transform">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-earth/70 leading-relaxed font-sans max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [legalView, setLegalView] = useState<'privacy' | 'terms' | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen selection:bg-sage/20">
      <Navbar />

      <main>
        {/* SECTION 1 — HERO */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-beige/50 -z-10 rounded-l-[100px] hidden lg:block" />
          
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-24 md:pt-0">
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sage/10 text-sage rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3 h-3" />
                Modern Wellness
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-earth leading-[1.1] mb-8">
                Feel Comfortable In Your Body <span className="italic">Again</span>
              </h1>
              <p className="text-lg md:text-xl text-earth/70 leading-relaxed max-w-xl mb-10">
                Feeling bloated, heavy, or uncomfortable after eating can affect your entire day. 
                Feel Light Again helps support everyday digestion in a simpler, more natural way 
                — without extreme routines or complicated wellness advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a href="https://api.whatsapp.com/message/AGK67AWBJTFRD1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="bg-sage text-cream px-10 py-5 rounded-full font-semibold text-lg hover:bg-sage/90 transition-all shadow-lg hover:shadow-sage/20 hover:-translate-y-1 active:scale-95 flex items-center gap-3 group animate-subtle-pulse">
                  Find Your Best Wellness Routine
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-earth/50 font-medium px-4">
                  Simple support for everyday digestive discomfort.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[4/5] md:aspect-auto md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img 
                key="hero-img-sage-green-v4"
                src="https://i.postimg.cc/htvhBhxf/hero-section-image.jpg" 
                alt="Feel Light Again - Serene woman in a sage green sweater sitting on a comfortable sofa holding a mug with both hands, looking out a bright window in a peaceful kitchen" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/20 to-transparent p-8 flex flex-col justify-end">
                <div className="bg-cream/40 backdrop-blur-xl p-4 rounded-2xl inline-flex items-center gap-3 w-fit border border-white/20">
                  <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center">
                    <Heart className="text-cream w-5 h-5" />
                  </div>
                  <span className="text-earth font-medium pr-4">You deserve to feel good.</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — EMOTIONAL PAIN */}
        <section className="section-padding bg-soft-cream flex flex-col items-center text-center">
          <motion.div {...fadeIn} className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-earth mb-12">
              It’s exhausting to feel bloated all the time.
            </h2>
            <div className="space-y-8 text-xl md:text-2xl text-earth/60 leading-relaxed font-sans">
              <p>“You eat a normal meal… and suddenly your stomach feels heavy, tight, uncomfortable, or swollen.”</p>
              <p>“Your clothes feel tighter. Your energy drops. You start avoiding certain foods or wondering why your body reacts this way.”</p>
              <p>“And the worst part? It starts feeling ‘normal.’”</p>
            </div>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-px bg-sage/20 w-32 mx-auto my-12" 
            />

            <h3 className="text-2xl md:text-3xl text-sage font-serif italic mb-6">
              But it doesn’t have to be.
            </h3>
            <p className="text-xl md:text-2xl text-earth/80">
              You deserve to feel comfortable in your body again.
            </p>
          </motion.div>
        </section>

        {/* SECTION 3 — A SIMPLER APPROACH */}
        <section id="how-it-works" className="section-padding bg-warm-beige">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-earth mb-6">A simpler approach to feeling lighter</h2>
            <p className="text-lg text-earth/60 max-w-2xl mx-auto">
              Feel Light Again was created for people who are tired of feeling uncomfortable after meals 
              and overwhelmed by complicated wellness advice.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Left Card */}
            <motion.div 
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.1 }}
              className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-earth/5 hover:shadow-xl transition-all group"
            >
              <h3 className="text-2xl font-serif text-earth/40 uppercase tracking-widest text-center mb-10 group-hover:text-earth transition-colors">You’re Tired Of</h3>
              <ul className="space-y-6">
                {[
                  "Complicated wellness routines",
                  "Harsh detox programs",
                  "Products that overpromise everything",
                  "Guessing what your body needs"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-earth/60 text-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-earth/20" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Card */}
            <motion.div 
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              className="bg-sage rounded-[40px] p-8 md:p-12 shadow-xl hover:shadow-sage/20 transition-all text-cream"
            >
              <h3 className="text-2xl font-serif text-cream/70 uppercase tracking-widest text-center mb-10">Our Approach Focuses On</h3>
              <ul className="space-y-6">
                {[
                  "Gentle digestive support",
                  "Feeling lighter after meals",
                  "Simple daily wellness habits",
                  "A routine that feels realistic"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-cream/90 text-lg">
                    <Check className="w-6 h-6 text-cream" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <p className="text-center mt-12 text-earth/50 italic text-lg font-serif">
            “Digestive wellness should feel simple, supportive, and realistic.”
          </p>
        </section>

        {/* SECTION 4 — WHAT PEOPLE NEED SUPPORT WITH */}
        <section id="benefits" className="section-padding bg-light-sage">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <motion.div {...fadeIn} className="text-center w-full">
              <h2 className="text-4xl md:text-5xl text-earth mb-12 leading-tight">
                What people are looking for support with
              </h2>
              <div className="space-y-4 text-left">
                {[
                  "Feeling bloated after meals",
                  "Feeling heavy, tight, or uncomfortable",
                  "Low energy after eating",
                  "Digestive discomfort that affects confidence",
                  "Wanting a simple routine that feels doable"
                ].map((text) => (
                  <motion.div 
                    key={text}
                    whileHover={{ x: 10 }}
                    className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl flex items-center gap-5 border border-earth/5 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-sage" />
                    </div>
                    <span className="text-lg text-earth font-medium">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 — SIMPLE ROUTINE */}
        <section id="simple-routine" className="section-padding bg-warm-off-white overflow-hidden relative">
          {/* Decorative Circle */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-sage/5 rounded-full blur-3xl -z-10" />
          
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-earth mb-6">A simple routine designed to support digestive comfort</h2>
            <p className="text-lg text-earth/60 max-w-2xl mx-auto">
              Our approach focuses on three simple areas of everyday digestive wellness.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Prepare", 
                num: "01", 
                text: "Support your body with simple habits that help your digestion feel less overwhelmed.",
                color: "bg-sage/10"
              },
              { 
                title: "Support", 
                num: "02", 
                text: "Help your body feel more balanced and comfortable after meals.",
                color: "bg-sage/20"
              },
              { 
                title: "Replenish", 
                num: "03", 
                text: "Create daily support that helps you feel lighter, more energized, and more like yourself.",
                color: "bg-sage/30"
              }
            ].map((card, i) => (
              <motion.div 
                key={card.title}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: i * 0.2 }}
                className="bg-white rounded-[40px] p-10 shadow-sm border border-earth/5 hover:-translate-y-2 transition-all"
              >
                <div className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8`}>
                  <span className="text-sage font-serif text-2xl font-bold">{card.num}</span>
                </div>
                <h3 className="text-3xl text-earth mb-4">{card.title}</h3>
                <p className="text-earth/60 leading-relaxed text-lg">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 6 — EMOTIONAL TRANSFORMATION */}
        <section className="section-padding bg-cream relative">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              {...fadeIn}
              className="order-2 lg:order-1 relative w-full max-w-[280px] md:max-w-[340px] lg:max-w-[400px] mx-auto"
            >
              <div className="absolute -inset-4 bg-beige/50 rounded-[40px] -z-10 rotate-3" />
              <img 
                src="https://i.postimg.cc/cCNCfmrz/6a91af9ea18ea695ace78bef7994b1a95b4762b1b718de662340d3873847f65e.png" 
                alt="A woman walking peacefully outdoors in warm natural light" 
                className="w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] max-h-[420px] lg:max-h-[480px] object-cover object-center rounded-[40px] shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div {...fadeIn} className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl text-earth mb-8 leading-tight">
                When your digestion feels better, your whole day feels different
              </h2>
              <div className="space-y-6 text-xl text-earth/70 leading-relaxed">
                <p>
                  When you constantly feel uncomfortable after eating, it can affect your mood, energy, confidence, and daily life.
                </p>
                <p>
                  Feeling comfortable in your body again may seem small, but for many people, it changes everything.
                </p>
              </div>
              <div className="mt-10 h-1 w-20 bg-sage rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* NEW SECTION — TESTIMONIALS */}
        <section className="section-padding bg-warm-beige">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-earth mb-6">Real experiences</h2>
            <p className="text-lg text-earth/60 max-w-2xl mx-auto italic font-serif">
              “Small changes made a big difference in how I feel every day.”
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                quote: "I stopped feeling uncomfortable after every meal. It's such a relief to just feel normal again.",
                initial: "S"
              },
              {
                name: "Elena R.",
                quote: "I finally feel lighter during the day. This is the first routine that actually feels realistic for me.",
                initial: "E"
              },
              {
                name: "Jessica L.",
                quote: "I didn't realize how much my digestive discomfort was affecting my mood. I feel more like myself now.",
                initial: "J"
              }
            ].map((t, i) => (
              <motion.div 
                key={t.name}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: i * 0.1 }}
                className="bg-white p-10 rounded-[40px] shadow-sm border border-earth/5 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <p className="text-xl text-earth/80 font-serif italic leading-relaxed mb-8">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage font-bold font-serif">
                    {t.initial}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-earth/60">{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 7 — WHATSAPP CTA */}
        <section id="contact" className="section-padding bg-sage-muted text-cream text-center overflow-hidden relative">
          {/* Subtle Blobs */}
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-sage/10 rounded-full blur-3xl" />
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-sage/10 rounded-full blur-3xl" />

          <motion.div {...fadeIn} className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl mb-8">Not sure where to start?</h2>
            <p className="text-xl text-cream/70 leading-relaxed mb-6">
              We’ll help you understand what may be contributing to your everyday digestive discomfort 
              and what kind of support may fit your lifestyle.
            </p>
            <p className="text-lg text-cream/50 mb-12 italic">
              No pressure. No complicated process. Just a simple conversation.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <a href="https://api.whatsapp.com/message/AGK67AWBJTFRD1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="bg-sage text-cream px-12 py-6 rounded-full font-bold text-xl hover:bg-sage-light transition-all shadow-2xl flex items-center gap-4 group animate-subtle-pulse">
                <MessageCircle className="w-8 h-8" />
                Message Us on WhatsApp
              </a>
              <p className="text-sm text-cream/40 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                We typically reply within a few minutes.
              </p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 8 — FAQ */}
        <section id="faq" className="section-padding bg-cream">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl text-earth text-center mb-16 underline underline-offset-8 decoration-sage/30">Your Questions Answered</h2>
            
            <div className="space-y-2">
              {[
                {
                  q: "Is this a medical treatment?",
                  a: "No, Feel Light Again focuses on everyday wellness and digestive support through natural habits and gentle routines. It is not intended to replace professional medical advice or treat specific diseases."
                },
                {
                  q: "Is this only for women?",
                  a: "While our community and approach often resonate with women, anyone looking for gentle, simple digestive support can benefit from our wellness routines."
                },
                {
                  q: "How long does it take to notice changes?",
                  a: "Many people notice a feeling of lightness within just a few days of focusing on our simple routines, but since every body is different, we focus on sustainable habits for long-term comfort."
                },
                {
                  q: "Do I need a complicated routine?",
                  a: "Not at all. We believe wellness should fit into your life, not take it over. Our focus is on 1-3 simple daily changes."
                },
                {
                  q: "How do I get started?",
                  a: "The best way is to start a conversation with us on WhatsApp. We’ll listen to your concerns and help you identify the best gentle path forward."
                },
                {
                  q: "Is this a harsh detox?",
                  a: "Absolutely not. We avoid harsh cleanses or restrictive detoxes. Our approach is gentle, supportive, and focused on natural balance."
                },
                {
                  q: "Do I need to completely change my diet?",
                  a: "We advocate for small, meaningful shifts rather than sudden, extreme eliminations. We help you find a way to eat normally while feeling better."
                },
                {
                  q: "Can I still eat normally?",
                  a: "Yes! Our goal is to help you feel comfortable after regular meals, not to limit your life to juices and supplements."
                },
                {
                  q: "What makes this different from other wellness products?",
                  a: "We prioritize emotional well-being and simplicity. We don't push aggressive sales funnels or complicated systems—just honest support and simple habits."
                }
              ].map((faq, idx) => (
                <FAQEntry key={idx} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* SECTION 9 — FINAL CTA */}
        <section className="section-padding bg-soft-cream">
          <motion.div 
            {...fadeIn}
            className="max-w-5xl mx-auto rounded-[60px] bg-white p-12 md:p-20 shadow-2xl text-center border border-earth/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-sage" />
            <h2 className="text-4xl md:text-6xl text-earth mb-6">You deserve to feel good after eating again.</h2>
            <p className="text-xl text-earth/60 mb-12 max-w-2xl mx-auto font-sans">
              Feeling lighter, more comfortable, and more confident starts with simple daily support.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <a href="https://api.whatsapp.com/message/AGK67AWBJTFRD1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="bg-earth text-cream px-12 py-6 rounded-full font-bold text-xl hover:bg-earth/90 transition-all flex items-center gap-4 group animate-subtle-pulse">
                Start Your WhatsApp Conversation
                <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </a>
              <p className="text-earth/40 text-sm italic">
                Modern wellness support for everyday digestive comfort.
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-20 px-6 bg-cream border-t border-earth/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center">
                <Leaf className="text-cream w-4 h-4" />
              </div>
              <span className="font-serif text-xl text-earth">Feel Light Again</span>
            </div>
            <p className="text-earth/60 text-sm leading-relaxed">
              Supporting everyday digestive wellness with simplicity, warmth, and natural care.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-earth/40 mb-6 font-sans">Brand</h4>
              <ul className="space-y-3 text-earth/70">
                <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-sage transition-colors">Our Philosophy</a></li>
                <li><a href="#simple-routine" onClick={(e) => { e.preventDefault(); document.getElementById('simple-routine')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-sage transition-colors">Why Simplicity?</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-sage transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-earth/40 mb-6 font-sans">Support</h4>
              <ul className="space-y-3 text-earth/70">
                <li><a href="#faq" className="hover:text-sage transition-colors">FAQ</a></li>
                <li><button onClick={() => setLegalView('privacy')} className="hover:text-sage transition-colors cursor-pointer">Privacy Policy</button></li>
                <li><button onClick={() => setLegalView('terms')} className="hover:text-sage transition-colors cursor-pointer">Terms of Service</button></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-earth/10 flex flex-col items-center text-center">
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
      <LegalOverlay 
        isOpen={legalView === 'privacy'} 
        onClose={() => setLegalView(null)} 
        title="Privacy Policy"
      >
        <DetailedPrivacyPolicy />
      </LegalOverlay>

      <LegalOverlay 
        isOpen={legalView === 'terms'} 
        onClose={() => setLegalView(null)} 
        title="Terms of Service"
      >
        <p>By using our services, you agree to the following simple terms:</p>
        <section>
          <h4 className="text-earth font-bold text-lg mb-2">Not Medical Advice</h4>
          <p>The content provided by Feel Light Again is for informational purposes only. We are not medical professionals, and our advice should not replace that of a doctor or healthcare provider.</p>
        </section>
        <section>
          <h4 className="text-earth font-bold text-lg mb-2">Personal Responsibility</h4>
          <p>Wellness habits and digestive support suggestions are implemented at your own discretion. Always listen to your body and consult a professional before making significant changes to your diet or routine.</p>
        </section>
        <section>
          <h4 className="text-earth font-bold text-lg mb-2">Age Requirement</h4>
          <p>You must be at least 18 years old to use our services and participate in wellness conversations.</p>
        </section>
      </LegalOverlay>
    </div>
  );
}
