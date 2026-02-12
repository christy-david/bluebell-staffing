"use client";

import React, { useEffect, useRef } from "react";
import { 
  HeartPulse, Users, ChefHat, Syringe, ShieldCheck, 
  Clock, PhoneCall, ArrowRight, Star, BadgeCheck,
  MapPin, Mail, ChevronRight, Menu, Award, CheckCircle,
  ChevronDown
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// shadcn-style Accordion component
const Accordion = ({ items }: { items: { question: string; answer: string }[] }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200/80 rounded-2xl bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition"
          >
            <span className="font-medium text-gray-900 text-base sm:text-lg">{item.question}</span>
            <ChevronDown 
              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
              strokeWidth={1.8}
            />
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-6 pt-0 text-gray-600 text-base leading-relaxed border-t border-gray-100">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// shadcn-style Card component
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-2xl border border-gray-100/80 shadow-lg shadow-gray-200/10 hover:shadow-xl hover:shadow-violet-200/20 transition-all duration-500 ${className}`}>
    {children}
  </div>
);

const BluebellStaffingPage = () => {
  // Refs for GSAP animations
  const headerRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroTextRef = useRef<HTMLParagraphElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const servicesRef = useRef<HTMLDivElement>(null);
  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rolesRef = useRef<HTMLDivElement>(null);
  const roleCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const complianceContentRef = useRef<HTMLDivElement>(null);
  const complianceImageRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const testimonialCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const floatingCardRef = useRef<HTMLDivElement>(null);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header scroll effect - change to violet on sticky with type safety
      if (headerRef.current) {
        ScrollTrigger.create({
          start: "top -80px",
          end: "bottom top",
          onEnter: () => {
            gsap.to(headerRef.current, {
              backgroundColor: "#7c3aed",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              duration: 0.3,
              ease: "power2.out"
            });
            
            const navTexts = headerRef.current?.querySelectorAll('.nav-text');
            const logoTexts = headerRef.current?.querySelectorAll('.logo-text');
            const navIcons = headerRef.current?.querySelectorAll('.nav-icon');
            
            if (navTexts?.length) gsap.to(navTexts, { color: "#ffffff", duration: 0.3, ease: "power2.out" });
            if (logoTexts?.length) gsap.to(logoTexts, { color: "#ffffff", duration: 0.3, ease: "power2.out" });
            if (navIcons?.length) gsap.to(navIcons, { color: "#ffffff", stroke: "#ffffff", duration: 0.3, ease: "power2.out" });
          },
          onLeaveBack: () => {
            gsap.to(headerRef.current, {
              backgroundColor: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(229,231,235,0.8)",
              duration: 0.3,
              ease: "power2.out"
            });
            
            const navTexts = headerRef.current?.querySelectorAll('.nav-text');
            const logoTexts = headerRef.current?.querySelectorAll('.logo-text');
            const logoHighlights = headerRef.current?.querySelectorAll('.logo-highlight');
            const navIcons = headerRef.current?.querySelectorAll('.nav-icon');
            
            if (navTexts?.length) gsap.to(navTexts, { color: "#6b7280", duration: 0.3, ease: "power2.out" });
            if (logoTexts?.length) gsap.to(logoTexts, { color: "#1f2937", duration: 0.3, ease: "power2.out" });
            if (logoHighlights?.length) gsap.to(logoHighlights, { color: "#6b7280", duration: 0.3, ease: "power2.out" });
            if (navIcons?.length) gsap.to(navIcons, { color: "#7c3aed", stroke: "#7c3aed", duration: 0.3, ease: "power2.out" });
          }
        });
      }

      // Hero animations
      if (heroTitleRef.current) {
        gsap.from(heroTitleRef.current, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      }
      
      if (heroTextRef.current) {
        gsap.from(heroTextRef.current, {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out"
        });
      }

      if (heroImageRef.current) {
        gsap.from(heroImageRef.current, {
          scale: 0.95,
          opacity: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out"
        });
      }

      // Stats counter animation
      if (statsRef.current) {
        gsap.from(statsItemsRef.current.filter(Boolean), {
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out"
        });
      }

      // Services cards staggered
      if (servicesRef.current) {
        gsap.from(serviceCardsRef.current.filter(Boolean), {
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.2)"
        });
      }

      // Roles cards
      if (rolesRef.current) {
        gsap.from(roleCardsRef.current.filter(Boolean), {
          scrollTrigger: {
            trigger: rolesRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out"
        });
      }

      // Compliance section
      if (complianceContentRef.current) {
        gsap.from(complianceContentRef.current, {
          scrollTrigger: {
            trigger: complianceContentRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          },
          x: -30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      }

      if (complianceImageRef.current) {
        gsap.from(complianceImageRef.current, {
          scrollTrigger: {
            trigger: complianceImageRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          },
          x: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      }

      // Testimonials
      if (testimonialRef.current) {
        gsap.from(testimonialCardsRef.current.filter(Boolean), {
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          },
          scale: 0.95,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out"
        });
      }

      // FAQ
      if (faqRef.current) {
        gsap.from(faqRef.current, {
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      }

      // CTA
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          scale: 0.98,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      }

      // Floating card animation
      if (floatingCardRef.current) {
        gsap.to(floatingCardRef.current, {
          y: -8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }

    }, [headerRef, heroTitleRef, heroTextRef, heroImageRef, statsRef, servicesRef, rolesRef, complianceContentRef, complianceImageRef, testimonialRef, faqRef, ctaRef, floatingCardRef]);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white text-gray-700 font-sans antialiased">
      {/* STICKY HEADER - transforms to violet on scroll */}
      <header 
        ref={headerRef}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/80 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-between flex-wrap gap-4 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center nav-icon">
                <HeartPulse className="w-5 h-5 text-violet-600" strokeWidth={1.8} />
              </div>
              <div className="text-xl font-medium tracking-tight">
                <span className="logo-text text-gray-900">BLUEBELL</span>{' '}
                <span className="logo-highlight font-light text-gray-500">STAFFING</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10 text-base">
              <a href="#" className="nav-text text-gray-600 hover:text-violet-600 transition font-medium">Home</a>
              <a href="#" className="nav-text text-gray-600 hover:text-violet-600 transition font-medium">For Care Homes</a>
              <a href="#" className="nav-text text-gray-600 hover:text-violet-600 transition font-medium">For Candidates</a>
              <a href="#" className="nav-text text-gray-600 hover:text-violet-600 transition font-medium">Compliance</a>
              <a href="#" className="nav-text text-gray-600 hover:text-violet-600 transition font-medium">Contact</a>
              <a
                href="#"
                className="bg-violet-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-violet-700 transition flex items-center gap-2 text-base"
              >
                <PhoneCall className="w-4 h-4" /> Request Staff
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-600 w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
              <Menu className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* HERO - premium spacing, larger text */}
      <section className="relative bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 text-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center py-16 lg:py-20">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-violet-100/80 px-4 py-2 rounded-full">
                <HeartPulse className="w-4 h-4 text-violet-600" />
                <span className="text-sm font-semibold text-violet-700 uppercase tracking-wider">UK's leading care staffing</span>
              </div>
              
              <h1 ref={heroTitleRef} className="text-4xl sm:text-5xl lg:text-5xl font-light leading-[1.15] tracking-tight text-gray-900">
                Reliable care staff,
                <span className="font-medium text-violet-600 block mt-2"> exactly when you need them</span>
              </h1>
              
              <p ref={heroTextRef} className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Supplying fully vetted Healthcare Assistants, Senior Carers, Registered Nurses and Kitchen Assistants to care homes across the UK.
              </p>
              
              {/* Stats - larger text */}
              <div ref={statsRef} className="flex items-center gap-8 pt-2">
                <div ref={(el) => { statsItemsRef.current[0] = el; }} className="stat-item">
                  <div className="text-2xl font-semibold text-gray-900">500+</div>
                  <div className="text-sm text-gray-500 tracking-wide mt-1">Care Homes</div>
                </div>
                <div className="w-px h-8 bg-gray-200"></div>
                <div ref={(el) => { statsItemsRef.current[1] = el; }} className="stat-item">
                  <div className="text-2xl font-semibold text-gray-900">2.5k+</div>
                  <div className="text-sm text-gray-500 tracking-wide mt-1">Qualified Staff</div>
                </div>
                <div className="w-px h-8 bg-gray-200"></div>
                <div ref={(el) => { statsItemsRef.current[2] = el; }} className="stat-item">
                  <div className="text-2xl font-semibold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-500 tracking-wide mt-1">Availability</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#"
                  className="bg-violet-600 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:bg-violet-700 transition flex items-center gap-2 text-base"
                >
                  Request Staff <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
                <a
                  href="#"
                  className="bg-white text-gray-700 px-8 py-4 rounded-xl font-medium border border-gray-200 hover:border-violet-200 hover:bg-violet-50/30 transition text-base shadow-sm"
                >
                  Apply for work
                </a>
              </div>

              {/* Trust badges - larger text */}
              <div className="flex items-center gap-6 pt-2 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-gray-400" strokeWidth={1.5} /> DBS Checked
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gray-400" strokeWidth={1.5} /> Fully Vetted
                </div>
              </div>
            </div>

            {/* Right column - premium care home imagery */}
            <div ref={heroImageRef} className="relative mt-8 lg:mt-0">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-fuchsia-100 rounded-full blur-3xl opacity-30"></div>
              <div className="relative z-10">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-gray-300/20">
                  <img 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Elderly care home resident with compassionate nurse"
                    className="w-full h-[440px] object-cover"
                  />
                </div>
                
                {/* Floating card - premium animation */}
                <div 
                  ref={floatingCardRef}
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl shadow-gray-300/30 p-5 w-64 border border-gray-100"
                >
                  <h3 className="text-gray-900 font-medium text-base mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-violet-500" strokeWidth={1.8} />
                    <span>Available roles</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <HeartPulse className="w-3.5 h-3.5 text-violet-400" strokeWidth={1.8} />
                      <span className="text-sm">HCA</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Users className="w-3.5 h-3.5 text-violet-400" strokeWidth={1.8} />
                      <span className="text-sm">Senior Carer</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Syringe className="w-3.5 h-3.5 text-violet-400" strokeWidth={1.8} />
                      <span className="text-sm">RGN</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <ChefHat className="w-3.5 h-3.5 text-violet-400" strokeWidth={1.8} />
                      <span className="text-sm">Kitchen Asst.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS - premium */}
      <section className="py-12 bg-gray-50/80 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-center text-sm uppercase tracking-[0.2em] text-gray-400 mb-6 font-medium">Trusted by leading UK care providers</p>
          <div className="flex flex-wrap justify-center items-center gap-16 gap-y-6 text-gray-400">
            {["Care UK", "HC-One", "Four Seasons", "Barchester", "Priory"].map((name) => (
              <span key={name} className="text-base font-medium text-gray-600/80 tracking-wide">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES - premium cards, larger text */}
      <section ref={servicesRef} className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-violet-50 px-4 py-2 rounded-full mb-4">
              <ShieldCheck className="w-4 h-4 text-violet-600" strokeWidth={1.8} />
              <span className="text-sm font-semibold text-violet-700 uppercase tracking-wider">What we offer</span>
            </div>
            <h2 className="text-4xl sm:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Staffing support you can 
              <span className="font-medium text-violet-600 block mt-2"> depend on</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              From emergency cover to long-term partnerships — 365 days a year, we deliver qualified professionals when you need them most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Last‑minute cover", desc: "Same-day placements for unexpected absences. Average response time under 15 minutes.", color: "bg-amber-50 text-amber-700" },
              { icon: PhoneCall, title: "Emergency staffing", desc: "24/7 rapid response team. Available 365 days including nights and bank holidays.", color: "bg-red-50 text-red-700" },
              { icon: Users, title: "Block bookings", desc: "Guaranteed staff for recurring shifts. Significant savings on long-term contracts.", color: "bg-blue-50 text-blue-700" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx}>
                  <div 
                    ref={(el) => { serviceCardsRef.current[idx] = el; }}
                    className="service-card p-8"
                  >
                    <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center mb-5`}>
                      <Icon className="w-6 h-6" strokeWidth={1.6} />
                    </div>
                    <h3 className="text-gray-900 font-semibold text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Premium care home imagery row */}
          <div className="mt-20 grid md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden h-64 group shadow-xl">
              <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Elderly woman with carer" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-base font-medium tracking-wide">Compassionate dementia care</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64 group shadow-xl">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Nurse with elderly patient" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-base font-medium tracking-wide">Skilled nursing support</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-64 group shadow-xl">
              <img src="https://images.unsplash.com/photo-1559831746-5b53cfa0a66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Care home kitchen staff" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-base font-medium tracking-wide">Professional kitchen assistants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROLES WE FILL - premium cards with role-specific imagery */}
      <section ref={rolesRef} className="py-24 bg-gradient-to-br from-violet-50/40 to-fuchsia-50/40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4 text-violet-600" strokeWidth={1.8} />
              <span className="text-sm font-semibold text-violet-700 uppercase tracking-wider">Specialist roles</span>
            </div>
            <h2 className="text-4xl sm:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Every care role, 
              <span className="font-medium text-violet-600 block mt-2">covered by qualified professionals</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Fully vetted, trained and ready to make a difference in your care home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: HeartPulse, 
                title: "Healthcare Assistants", 
                desc: "Trained in dementia, palliative care, personal care, and mobility support. All with NVQ Level 2/3.",
                image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              { 
                icon: Users, 
                title: "Senior Carers", 
                desc: "Medication administration, care assessments, supervision, and complex care planning.",
                image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              { 
                icon: Syringe, 
                title: "Registered Nurses", 
                desc: "RGN, RMN, RNLD – all specialisms including wound care, palliative, and clinical lead.",
                image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              { 
                icon: ChefHat, 
                title: "Kitchen Assistants", 
                desc: "Food hygiene level 2, special diets, infection control, and catering support.",
                image: "https://images.unsplash.com/photo-1559831746-5b53cfa0a66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
            ].map((role, idx) => {
              const Icon = role.icon;
              return (
                <Card key={idx}>
                  <div 
                    ref={(el) => { roleCardsRef.current[idx] = el; }}
                    className="role-card overflow-hidden"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={role.image} 
                        alt={role.title}
                        className="w-full h-full object-cover hover:scale-110 transition duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-violet-600" strokeWidth={1.6} />
                        </div>
                        <h3 className="font-semibold text-gray-900 text-lg">{role.title}</h3>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed">{role.desc}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPLIANCE - premium dark section */}
      <section ref={complianceContentRef} className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-violet-500/10 px-4 py-2 rounded-full">
                <ShieldCheck className="w-4 h-4 text-violet-300" strokeWidth={1.8} />
                <span className="text-sm font-semibold text-violet-300 uppercase tracking-wider">CQC compliant</span>
              </div>
              
              <h2 className="text-4xl sm:text-4xl font-light text-white tracking-tight">
                Compliance & safety
                <span className="font-medium text-violet-300 block mt-2">guaranteed</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Every candidate undergoes rigorous checks before they step foot in your care home. No exceptions, no compromises.
              </p>
              
              <div className="grid grid-cols-2 gap-5 pt-4">
                {[
                  { icon: BadgeCheck, title: "DBS Verified", desc: "Enhanced check with update service" },
                  { icon: ShieldCheck, title: "Right to Work", desc: "Original documents verified" },
                  { icon: Award, title: "Mandatory Training", desc: "All up-to-date certificates" },
                  { icon: Users, title: "References", desc: "Minimum 2 professional" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-3">
                      <div className="flex-shrink-0 w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-violet-400" strokeWidth={1.6} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-base">{item.title}</h4>
                        <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div ref={complianceImageRef} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Nurse reviewing compliance documents in care home"
                  className="rounded-xl mb-5 w-full h-56 object-cover"
                />
                {/* <div className="flex items-center gap-4">
                  <div className="bg-emerald-500/10 p-3 rounded-xl">
                    <Award className="w-6 h-6 text-emerald-400" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-white text-lg font-semibold">100% compliance rate</p>
                    <p className="text-gray-400 text-base mt-1">Across all active staff members</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - premium cards */}
      <section ref={testimonialRef} className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-violet-50 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-violet-600" strokeWidth={1.8} />
              <span className="text-sm font-semibold text-violet-700 uppercase tracking-wider">5 star reviews</span>
            </div>
            <h2 className="text-4xl sm:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Trusted by <span className="font-medium text-violet-600">care home managers</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Don't just take our word for it — hear from the care homes we partner with every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                name: "Sarah Mitchell", 
                role: "Care Home Manager, Manchester", 
                quote: "Bluebell have been a lifesaver. Their nurses are always high quality and they fill shifts within hours. The compliance team is exceptional.",
                rating: 5, 
                initial: "SM",
                image: "https://images.unsplash.com/photo-1559831746-5b53cfa0a66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              },
              { 
                name: "David Thompson", 
                role: "Operations Director, Leeds", 
                quote: "We use them for all our temp staffing across 8 homes. Compliance is spotless and the online portal makes booking effortless. Highly recommended.",
                rating: 5, 
                initial: "DT",
                image: "https://images.unsplash.com/photo-1559831746-5b53cfa0a66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              },
              { 
                name: "Patricia Green", 
                role: "Clinical Lead, Birmingham", 
                quote: "The kitchen assistants they send are trained in infection control and special diets. Reliable, punctual, and professional. Best agency we've worked with.",
                rating: 5, 
                initial: "PG",
                image: "https://images.unsplash.com/photo-1559831746-5b53cfa0a66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              },
            ].map((testimonial, idx) => (
              <Card key={idx}>
                <div 
                  ref={(el) => { testimonialCardsRef.current[idx] = el; }}
                  className="testimonial-card p-8"
                >
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" strokeWidth={1.5} />
                    ))}
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-violet-100">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-base">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Rating summary - premium */}
          <div className="flex items-center justify-center gap-6 mt-16">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" strokeWidth={1.5} />
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" strokeWidth={1.5} />
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" strokeWidth={1.5} />
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" strokeWidth={1.5} />
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" strokeWidth={1.5} />
            </div>
            <span className="text-lg font-semibold text-gray-900">4.9 out of 5</span>
            <span className="text-base text-gray-500">based on 450+ reviews on CareSourcer</span>
          </div>
        </div>
      </section>

      {/* FAQ - premium shadcn-style accordion */}
      <section ref={faqRef} className="py-24 bg-gradient-to-br from-violet-50/40 to-fuchsia-50/40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4 text-violet-600" strokeWidth={1.8} />
              <span className="text-sm font-semibold text-violet-700 uppercase tracking-wider">FAQs</span>
            </div>
            <h2 className="text-4xl sm:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Frequently asked 
              <span className="font-medium text-violet-600 block mt-2">questions</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Everything you need to know about working with Bluebell Staffing.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion items={[
              {
                question: "How quickly can you provide staff for emergency cover?",
                answer: "We guarantee same-day cover for emergency shifts. Our average response time is under 15 minutes, and most requests are filled within 2 hours. Our 24/7 team is always on standby."
              },
              {
                question: "What vetting and compliance checks do you perform?",
                answer: "All staff undergo enhanced DBS checks (with update service), right to work verification, minimum 2 professional references, up-to-date mandatory training certificates, occupational health clearance, and immunisation records. We also conduct quarterly compliance audits."
              },
              {
                question: "Do you offer discounted rates for block bookings?",
                answer: "Yes, we offer significant savings for regular shift bookings and long-term contracts. Our block booking packages include dedicated account management, priority booking, and fixed preferential rates. Contact our team for a custom quote."
              },
              {
                question: "Are your nurses and carers trained in dementia care?",
                answer: "Absolutely. All our healthcare assistants and nurses complete specialist dementia training. We also have practitioners trained in palliative care, end-of-life support, Parkinson's, and complex care needs. Just let us know your requirements."
              }
            ]} />
          </div>
        </div>
      </section>

      {/* CTA - premium dark */}
      <section ref={ctaRef} className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 px-4 py-2 rounded-full mb-5">
              <PhoneCall className="w-4 h-4 text-violet-300" strokeWidth={1.8} />
              <span className="text-sm font-semibold text-violet-300 uppercase tracking-wider">Emergency? 24/7 support</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light text-white mb-4 tracking-tight">
              Need staff <span className="font-medium text-violet-300">urgently?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
              Same-day cover available. Our team responds within 15 minutes, 365 days a year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-5 rounded-xl font-semibold shadow-xl transition flex items-center justify-center gap-3"
              >
                <PhoneCall className="w-5 h-5" /> Call Now: 01782 123456
              </a>
              <a
                href="#"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-5 py-5 rounded-xl font-semibold border border-white/20 transition flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" /> Request callback
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - premium, all Lucide icons */}
      <footer className="bg-gray-950 text-gray-400 pt-16 pb-8 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Brand */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-violet-600/20 rounded-xl flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-violet-400" strokeWidth={1.8} />
                </div>
                <div className="text-xl font-medium text-white">BLUEBELL <span className="font-light text-gray-500">STAFFING</span></div>
              </div>
              <p className="text-base text-gray-500 leading-relaxed max-w-xs">
                Supplying trusted care professionals to UK care homes since 2010. CQC compliant, NHS approved.
              </p>
            </div>
            
            {/* For Clients */}
            <div className="lg:col-span-2">
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Clients</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-base flex items-center gap-1.5"><ChevronRight className="w-4 h-4" />Request Staff</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-base flex items-center gap-1.5"><ChevronRight className="w-4 h-4" />Services</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-base flex items-center gap-1.5"><ChevronRight className="w-4 h-4" />Compliance</a></li>
              </ul>
            </div>
            
            {/* For Candidates */}
            <div className="lg:col-span-2">
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Candidates</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-base flex items-center gap-1.5"><ChevronRight className="w-4 h-4" />Apply Now</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-base flex items-center gap-1.5"><ChevronRight className="w-4 h-4" />Available Roles</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-base flex items-center gap-1.5"><ChevronRight className="w-4 h-4" />Training</a></li>
              </ul>
            </div>
            
            {/* Contact - all Lucide */}
            <div className="lg:col-span-4">
              <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
              <address className="not-italic text-base text-gray-500 space-y-2">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" strokeWidth={1.6} />
                  <span>33 Pinfold Avenue, Stoke-on-Trent, ST6 8EH</span>
                </p>
                <p className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-gray-600" strokeWidth={1.6} />
                  <span>01782 123456</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-600" strokeWidth={1.6} />
                  <span>hello@bluebellstaffing.co.uk</span>
                </p>
              </address>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Bluebell Staffing. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-violet-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-violet-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-violet-400 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BluebellStaffingPage;