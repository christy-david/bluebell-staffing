import React from "react";
import { 
  HeartPulse, Users, ChefHat, Syringe, Sparkles, ShieldCheck, 
  Clock, CalendarCheck, TrendingUp, BadgeCheck, PhoneCall, 
  ArrowRight, Star, FileCheck, GraduationCap, UserRoundSearch,
  Hospital, ClipboardList, Briefcase, Menu, Moon, Award,
  CheckCircle, Coffee, Activity, DollarSign, MapPin,
  Mail, Clock3, Facebook, Twitter, Linkedin, Instagram,
  ChevronRight, BookOpen, Target, Trophy, ThumbsUp,
  HeadphonesIcon, HelpCircle, Download, FileText,
  Home, Building, Calendar, UserCheck, Stethoscope,
  Pill, Smile, Heart, AlertCircle
} from "lucide-react";

const BluebellStaffingPage = () => {
  return (
    <div className="bg-white text-gray-600 font-sans antialiased">
      {/* STICKY HEADER - elegant, glassmorphism */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/80">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-between flex-wrap gap-4 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-violet-600" strokeWidth={1.8} />
              </div>
              <div className="text-xl font-medium tracking-tight">
                BLUEBELL <span className="font-light text-gray-500">STAFFING</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#" className="text-gray-500 hover:text-violet-600 transition font-medium">Home</a>
              <a href="#" className="text-gray-500 hover:text-violet-600 transition font-medium">For Care Homes</a>
              <a href="#" className="text-gray-500 hover:text-violet-600 transition font-medium">For Candidates</a>
              <a href="#" className="text-gray-500 hover:text-violet-600 transition font-medium">Compliance</a>
              <a href="#" className="text-gray-500 hover:text-violet-600 transition font-medium">Resources</a>
              <a href="#" className="text-gray-500 hover:text-violet-600 transition font-medium">Contact</a>
              <a
                href="#"
                className="bg-violet-600 text-white px-5 py-2.5 rounded-lg font-medium shadow-sm hover:bg-violet-700 transition flex items-center gap-2 text-sm"
              >
                <PhoneCall className="w-4 h-4" /> Request Staff
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-600 w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
              <Menu className="w-5 h-5" />
            </button>
          </nav>
        </div>
      </header>

      {/* HERO - soft violet gradient, lighter typography */}
      <section className="relative bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 text-gray-900 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* HERO CONTENT */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 lg:py-20">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 bg-violet-100/50 px-4 py-2 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                <span className="text-xs font-medium text-violet-700 uppercase tracking-wider">UK's leading care staffing agency</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.2] tracking-tight text-gray-900">
                Reliable care staff,
                <span className="font-medium text-violet-600 block mt-1 sm:mt-2"> exactly when you need them</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-500 max-w-lg leading-relaxed font-light">
                Supplying fully vetted Healthcare Assistants, Senior Carers, Registered Nurses and Kitchen Assistants to care homes across the UK.
              </p>
              
              {/* Stats - responsive grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-10 pt-2 max-w-md">
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-gray-900">500+</div>
                  <div className="text-xs text-gray-500 tracking-wide mt-1">Care Homes</div>
                </div>
                <div className="w-px h-8 bg-gray-200 mx-auto hidden sm:block"></div>
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-gray-900">2.5k+</div>
                  <div className="text-xs text-gray-500 tracking-wide mt-1">Qualified Staff</div>
                </div>
                <div className="w-px h-8 bg-gray-200 mx-auto hidden sm:block"></div>
                <div>
                  <div className="text-xl sm:text-2xl font-semibold text-gray-900">24/7</div>
                  <div className="text-xs text-gray-500 tracking-wide mt-1">Availability</div>
                </div>
              </div>

              {/* CTA Buttons - stack on mobile */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
                <a
                  href="#"
                  className="bg-violet-600 text-white px-6 sm:px-7 py-3.5 rounded-lg font-medium shadow-sm hover:bg-violet-700 transition flex items-center justify-center gap-2 text-sm"
                >
                  Request Staff <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="bg-white text-gray-700 px-6 sm:px-7 py-3.5 rounded-lg font-medium border border-gray-200 hover:border-violet-200 hover:bg-violet-50/30 transition text-sm shadow-sm flex items-center justify-center"
                >
                  Apply for work
                </a>
              </div>

              {/* Trust badges - wrap on mobile */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-gray-300" strokeWidth={1.5} /> DBS Checked
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gray-300" strokeWidth={1.5} /> Fully Vetted
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gray-300" strokeWidth={1.5} /> 24/7 Support
                </div>
              </div>
            </div>

            {/* Right column - responsive image card */}
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -top-10 -right-10 w-48 sm:w-64 h-48 sm:h-64 bg-fuchsia-100 rounded-full blur-3xl opacity-30"></div>
              <div className="relative z-10">
                {/* Main image */}
                <div className="rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Nurse consulting with elderly patient"
                    className="w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover"
                  />
                </div>
                
                {/* Floating card - responsive positioning */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-xl shadow-lg shadow-gray-200/50 p-4 sm:p-5 w-[calc(100%-2rem)] sm:w-64 border border-gray-50">
                  <h3 className="text-gray-900 font-medium text-sm mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-violet-500" strokeWidth={1.8} />
                    <span>Available roles</span>
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <HeartPulse className="w-3.5 h-3.5 text-violet-400" strokeWidth={1.8} />
                      <span className="text-xs">HCA</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Users className="w-3.5 h-3.5 text-violet-400" strokeWidth={1.8} />
                      <span className="text-xs">Senior Carer</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Syringe className="w-3.5 h-3.5 text-violet-400" strokeWidth={1.8} />
                      <span className="text-xs">RGN</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <ChefHat className="w-3.5 h-3.5 text-violet-400" strokeWidth={1.8} />
                      <span className="text-xs">Kitchen Asst.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="py-10 sm:py-14 bg-gray-50/50 border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400 mb-6 sm:mb-8 font-medium">Trusted by leading UK care providers</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 gap-y-6 text-gray-400">
            {["Care UK", "HC-One", "Four Seasons", "Barchester", "Priory", "Bupa"].map((name) => (
              <span key={name} className="text-xs sm:text-sm font-medium text-gray-500/70 tracking-wide">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-violet-50 px-4 py-2 rounded-full mb-4 sm:mb-5">
              <Briefcase className="w-3.5 h-3.5 text-violet-600" strokeWidth={1.8} />
              <span className="text-xs font-medium text-violet-700 uppercase tracking-wider">What we offer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-5 tracking-tight">
              Staffing support you can 
              <span className="font-medium text-violet-600 block mt-1"> depend on</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light px-4">
              From emergency cover to long-term partnerships — we've got your staffing needs covered, 365 days a year.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: Clock, title: "Last‑minute cover", desc: "Same-day placements for unexpected absences", color: "bg-amber-50 text-amber-700" },
              { icon: PhoneCall, title: "Emergency staffing", desc: "24/7 rapid response team", color: "bg-red-50 text-red-700" },
              { icon: CalendarCheck, title: "Block bookings", desc: "Guaranteed staff for recurring shifts", color: "bg-blue-50 text-blue-700" },
              { icon: Moon, title: "Night & weekend", desc: "Full rota coverage, any time", color: "bg-indigo-50 text-indigo-700" },
              { icon: TrendingUp, title: "Long-term placements", desc: "Permanent and fixed-term contracts", color: "bg-green-50 text-green-700" },
              { icon: Sparkles, title: "Flexible scheduling", desc: "Tailored rotas to suit your home", color: "bg-purple-50 text-purple-700" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="group bg-gray-50/70 rounded-xl p-5 sm:p-6 hover:bg-white hover:shadow-md hover:shadow-gray-200/50 transition-all duration-300 border border-gray-100/50">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 ${item.color} rounded-lg flex items-center justify-center mb-3 sm:mb-4`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-gray-900 font-medium text-sm sm:text-base mb-1.5 sm:mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Medical imagery - responsive grid */}
          <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative rounded-xl overflow-hidden h-48 sm:h-56 group shadow-sm">
              <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Nurse with tablet" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent flex items-end p-4 sm:p-5">
                <span className="text-white text-xs font-medium tracking-wide">Dedicated RGNs</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-48 sm:h-56 group shadow-sm">
              <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Elderly care" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent flex items-end p-4 sm:p-5">
                <span className="text-white text-xs font-medium tracking-wide">Compassionate carers</span>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-48 sm:h-56 group shadow-sm sm:col-span-2 lg:col-span-1">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Medical equipment" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent flex items-end p-4 sm:p-5">
                <span className="text-white text-xs font-medium tracking-wide">Modern facilities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - NEW SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-violet-50/30 to-fuchsia-50/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-full">
                <Target className="w-3.5 h-3.5 text-violet-600" strokeWidth={1.8} />
                <span className="text-xs font-medium text-violet-700 uppercase tracking-wider">Why choose us</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                More than just a 
                <span className="font-medium text-violet-600 block mt-1">staffing agency</span>
              </h2>
              
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">
                We partner with care homes to deliver consistently excellent care through rigorous vetting, continuous training, and genuine compassion.
              </p>
              
              <div className="space-y-4 sm:space-y-5 pt-2">
                {[
                  { icon: Trophy, title: "97% retention rate", desc: "Our staff stay with us for years" },
                  { icon: Clock, title: "15-minute response", desc: "Average emergency response time" },
                  { icon: Users, title: "Specialist matching", desc: "Right skills for every resident" },
                  { icon: Heart, title: "Values-driven", desc: "Compassion at our core" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-violet-600" strokeWidth={1.6} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm sm:text-base">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 rounded-3xl blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-100">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                      <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" strokeWidth={1.6} />
                    </div>
                    <div className="text-lg sm:text-xl font-semibold text-gray-900">2,500+</div>
                    <p className="text-xs text-gray-500 mt-0.5">Qualified nurses</p>
                  </div>
                  <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-100">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-fuchsia-100 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                      <Building className="w-5 h-5 sm:w-6 sm:h-6 text-fuchsia-600" strokeWidth={1.6} />
                    </div>
                    <div className="text-lg sm:text-xl font-semibold text-gray-900">500+</div>
                    <p className="text-xs text-gray-500 mt-0.5">Partner homes</p>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                  <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-100">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" strokeWidth={1.6} />
                    </div>
                    <div className="text-lg sm:text-xl font-semibold text-gray-900">98%</div>
                    <p className="text-xs text-gray-500 mt-0.5">Compliance rate</p>
                  </div>
                  <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-100">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                      <ThumbsUp className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" strokeWidth={1.6} />
                    </div>
                    <div className="text-lg sm:text-xl font-semibold text-gray-900">4.9★</div>
                    <p className="text-xs text-gray-500 mt-0.5">Client rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-violet-50 px-4 py-2 rounded-full mb-4 sm:mb-5">
              <ClipboardList className="w-3.5 h-3.5 text-violet-600" strokeWidth={1.8} />
              <span className="text-xs font-medium text-violet-700 uppercase tracking-wider">Simple process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-5 tracking-tight">
              How it <span className="font-medium text-violet-600">works</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light px-4">
              From request to shift completion — we've streamlined every step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative">
            {[
              { icon: PhoneCall, title: "Request", desc: "Call, email or portal", detail: "15-min response" },
              { icon: UserRoundSearch, title: "Match", desc: "AI-powered matching", detail: "Skills-based" },
              { icon: BadgeCheck, title: "Confirm", desc: "Instant booking", detail: "SMS/email" },
              { icon: HeartPulse, title: "Deliver", desc: "Quality care", detail: "Fully managed" },
              { icon: FileCheck, title: "Bill", desc: "Simple invoice", detail: "Weekly summary" },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative">
                  <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-gray-100/80 h-full text-center hover:shadow-md transition">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-violet-50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" strokeWidth={1.6} />
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-violet-600 uppercase tracking-wider mb-1 sm:mb-2">Step 0{i+1}</div>
                    <h3 className="font-medium text-gray-900 text-sm sm:text-base mb-1">{step.title}</h3>
                    <p className="text-gray-500 text-xs mb-1">{step.desc}</p>
                    <p className="text-[10px] sm:text-xs text-violet-400 font-medium">{step.detail}</p>
                  </div>
                  {i < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 text-gray-300">
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile step indicator */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {[1,2,3,4,5].map((step) => (
              <div key={step} className="w-2 h-2 rounded-full bg-gray-200"></div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 bg-violet-500/10 px-4 py-2 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-violet-300" strokeWidth={1.8} />
                <span className="text-xs font-medium text-violet-300 uppercase tracking-wider">CQC compliant</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
                Compliance & safety
                <span className="font-medium text-violet-300 block mt-1">guaranteed</span>
              </h2>
              
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light max-w-lg">
                Every candidate undergoes rigorous checks before they step foot in your care home. No exceptions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
                {[
                  { icon: FileCheck, title: "Right to Work", desc: "Documents verified" },
                  { icon: BadgeCheck, title: "DBS Verified", desc: "Enhanced check" },
                  { icon: GraduationCap, title: "Training", desc: "Up-to-date certificates" },
                  { icon: ClipboardList, title: "References", desc: "2 professional" },
                  { icon: ShieldCheck, title: "Monitoring", desc: "Quarterly audits" },
                  { icon: Hospital, title: "Immunisations", desc: "Fully up-to-date" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-gray-800 rounded-lg flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-400" strokeWidth={1.6} />
                      </div>
                      <div>
                        <h4 className="font-medium text-white text-xs sm:text-sm">{item.title}</h4>
                        <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 sm:p-6">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Doctor reviewing compliance documents"
                  className="rounded-lg mb-4 sm:mb-5 w-full h-48 sm:h-56 object-cover"
                />
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-500/10 p-2.5 rounded-lg">
                    <Award className="w-5 h-5 text-emerald-400" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">100% compliance rate</p>
                    <p className="text-gray-500 text-xs mt-0.5">Across all active staff members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROLES WE FILL - NEW SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-violet-50 px-4 py-2 rounded-full mb-4 sm:mb-5">
              <Users className="w-3.5 h-3.5 text-violet-600" strokeWidth={1.8} />
              <span className="text-xs font-medium text-violet-700 uppercase tracking-wider">Specialist roles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-5 tracking-tight">
              Every care role, 
              <span className="font-medium text-violet-600 block mt-1">covered</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light px-4">
              From clinical to domestic – we supply qualified professionals across all care home departments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: HeartPulse, title: "Healthcare Assistants", count: "1,200+", desc: "Trained in dementia, palliative, personal care" },
              { icon: Users, title: "Senior Carers", count: "450+", desc: "Medication, assessments, supervision" },
              { icon: Syringe, title: "Registered Nurses", count: "380+", desc: "RGN, RMN, RNLD – all specialisms" },
              { icon: ChefHat, title: "Kitchen Assistants", count: "280+", desc: "Food hygiene, special diets" },
              { icon: Activity, title: "Activities Coordinators", count: "120+", desc: "Engagement, wellbeing" },
              { icon: Building, title: "Housekeeping", count: "200+", desc: "Infection control" },
              { icon: ClipboardList, title: "Administrators", count: "90+", desc: "Care planning, compliance" },
              { icon: Coffee, title: "Domestic Staff", count: "150+", desc: "Cleaning, laundry" },
            ].map((role, idx) => {
              const Icon = role.icon;
              return (
                <div key={idx} className="bg-gray-50/70 rounded-xl p-5 sm:p-6 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-violet-600" strokeWidth={1.6} />
                    </div>
                    <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-2 py-1 rounded">{role.count}</span>
                  </div>
                  <h3 className="font-medium text-gray-900 text-sm sm:text-base mb-1.5">{role.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{role.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <a href="#" className="inline-flex items-center gap-2 text-violet-600 font-medium text-sm hover:text-violet-700 transition">
              View all roles <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-violet-50/30 to-fuchsia-50/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-full mb-4 sm:mb-5">
              <Star className="w-3.5 h-3.5 text-violet-600" strokeWidth={1.8} />
              <span className="text-xs font-medium text-violet-700 uppercase tracking-wider">5 star reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-5 tracking-tight">
              Trusted by <span className="font-medium text-violet-600">care home managers</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: "Sarah Mitchell", role: "Care Home Manager, Manchester", quote: "Bluebell have been a lifesaver. Their nurses are always high quality and they fill shifts within hours.", rating: 5, initial: "SM" },
              { name: "David Thompson", role: "Operations Director, Leeds", quote: "We use them for all our temp staffing. Compliance is spotless and the online portal makes booking effortless.", rating: 5, initial: "DT" },
              { name: "Patricia Green", role: "Clinical Lead, Birmingham", quote: "The kitchen assistants they send are trained and reliable. Best agency we've worked with.", rating: 5, initial: "PG" },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-7 border border-gray-100/80 hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-0.5 text-amber-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" strokeWidth={1.5} />
                  ))}
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 font-light">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-violet-100 rounded-full flex items-center justify-center text-violet-700 font-medium text-xs sm:text-sm">
                    {testimonial.initial}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-xs sm:text-sm">{testimonial.name}</h4>
                    <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trustpilot style rating */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" strokeWidth={1.5} />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">4.9 out of 5</span>
            </div>
            <div className="h-4 w-px bg-gray-200 hidden sm:block"></div>
            <span className="text-xs text-gray-500">Based on 450+ reviews on CareSourcer</span>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - NEW */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-violet-50 px-4 py-2 rounded-full mb-4 sm:mb-5">
              <HelpCircle className="w-3.5 h-3.5 text-violet-600" strokeWidth={1.8} />
              <span className="text-xs font-medium text-violet-700 uppercase tracking-wider">FAQs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4 sm:mb-5 tracking-tight">
              Frequently asked 
              <span className="font-medium text-violet-600 block mt-1">questions</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How quickly can you provide staff?",
                a: "We guarantee same-day cover for emergency shifts. Most requests are filled within 2 hours, and our average response time is 15 minutes."
              },
              {
                q: "What checks do you perform on staff?",
                a: "All staff have enhanced DBS checks, right to work verification, 2 professional references, up-to-date mandatory training, and occupational health clearance."
              },
              {
                q: "Do you offer block booking discounts?",
                a: "Yes, we offer significant savings for regular shift bookings and long-term contracts. Contact our team for a custom quote."
              },
              {
                q: "How does billing work?",
                a: "We invoice weekly with a detailed breakdown of shifts, staff names, and hours. Payment terms are flexible – BACS, direct debit, or monthly summary."
              },
              {
                q: "Are your nurses trained in dementia care?",
                a: "Yes, all our nurses and carers complete specialist dementia training. We also offer palliative care, end-of-life, and complex care specialists."
              },
              {
                q: "What areas do you cover?",
                a: "We supply staff across the whole UK, with particular coverage in West Midlands, North West, Yorkshire, and South East. No location is too remote."
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50/70 rounded-xl p-5 sm:p-6 border border-gray-100 hover:bg-white hover:shadow-sm transition">
                <h3 className="text-gray-900 font-medium text-sm sm:text-base mb-2 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" strokeWidth={1.6} />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <a href="#" className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-violet-700 transition shadow-sm">
              View all FAQs <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gray-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 px-4 py-2 rounded-full mb-4 sm:mb-5">
              <PhoneCall className="w-3.5 h-3.5 text-violet-300" strokeWidth={1.8} />
              <span className="text-xs font-medium text-violet-300 uppercase tracking-wider">Emergency? We're here 24/7</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-3 sm:mb-4 tracking-tight">
              Need staff <span className="font-medium text-violet-300">urgently?</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-lg mx-auto font-light">
              Same-day cover available. Our team responds within 15 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#"
                className="bg-violet-600 hover:bg-violet-700 text-white px-6 sm:px-7 py-3.5 rounded-lg font-medium text-sm shadow-sm transition flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Call Now: 01782 123456
              </a>
              <a
                href="#"
                className="bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-6 sm:px-7 py-3.5 rounded-lg font-medium text-sm border border-white/10 transition flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" /> Request callback
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - all Lucide icons, no glyphicons */}
      <footer className="bg-gray-950 text-gray-400 pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand column */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-violet-600/20 rounded-lg flex items-center justify-center">
                  <HeartPulse className="w-4 h-4 text-violet-400" strokeWidth={1.8} />
                </div>
                <div className="text-lg font-medium text-white">BLUEBELL <span className="font-light text-gray-500">STAFFING</span></div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xs">
                Supplying trusted care professionals to UK care homes since 2010. CQC compliant, NHS approved.
              </p>
              <div className="flex gap-3 pt-2">
                <a href="#" className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-violet-600 transition">
                  <Facebook className="w-4 h-4 text-gray-400" strokeWidth={1.6} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-violet-600 transition">
                  <Twitter className="w-4 h-4 text-gray-400" strokeWidth={1.6} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-violet-600 transition">
                  <Linkedin className="w-4 h-4 text-gray-400" strokeWidth={1.6} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-violet-600 transition">
                  <Instagram className="w-4 h-4 text-gray-400" strokeWidth={1.6} />
                </a>
              </div>
            </div>
            
            {/* For Clients */}
            <div className="lg:col-span-2">
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">For Clients</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-xs sm:text-sm flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />Request Staff</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-xs sm:text-sm flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />Services</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-xs sm:text-sm flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />Compliance</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-xs sm:text-sm flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />Pricing</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-xs sm:text-sm flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />FAQs</a></li>
              </ul>
            </div>
            
            {/* For Candidates */}
            <div className="lg:col-span-2">
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">For Candidates</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-xs sm:text-sm flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />Apply Now</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-xs sm:text-sm flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />Available Roles</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-xs sm:text-sm flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />Training</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-xs sm:text-sm flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />Candidate Portal</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-xs sm:text-sm flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />Refer a Friend</a></li>
              </ul>
            </div>
            
            {/* Resources */}
            <div className="lg:col-span-2">
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-xs sm:text-sm flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />Blog</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-xs sm:text-sm flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />Guides</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-xs sm:text-sm flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />Compliance Updates</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-xs sm:text-sm flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />Case Studies</a></li>
                <li><a href="#" className="text-gray-500 hover:text-violet-400 transition text-xs sm:text-sm flex items-center gap-1.5"><ChevronRight className="w-3 h-3" />Downloads</a></li>
              </ul>
            </div>
            
            {/* Contact - all Lucide icons */}
            <div className="lg:col-span-2">
              <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Contact</h4>
              <address className="not-italic text-xs sm:text-sm text-gray-500 space-y-2">
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gray-600 flex-shrink-0 mt-0.5" strokeWidth={1.6} />
                  <span>33 Pinfold Avenue, Stoke-on-Trent, ST6 8EH</span>
                </p>
                <p className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-gray-600" strokeWidth={1.6} />
                  <span>01782 123456</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gray-600" strokeWidth={1.6} />
                  <span>hello@bluebellstaffing.co.uk</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock3 className="w-3.5 h-3.5 text-gray-600" strokeWidth={1.6} />
                  <span>Mon-Sun: 24/7</span>
                </p>
              </address>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="border-t border-gray-800/50 mt-10 sm:mt-14 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-[10px] sm:text-xs text-gray-600">
              © {new Date().getFullYear()} Bluebell Staffing. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-[10px] sm:text-xs text-gray-600">
              <a href="#" className="hover:text-violet-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-violet-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-violet-400 transition">Cookie Policy</a>
              <a href="#" className="hover:text-violet-400 transition">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BluebellStaffingPage;