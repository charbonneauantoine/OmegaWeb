import React, { useState, createContext, useContext } from 'react';
import { Menu, X, ArrowRight, CheckCircle2, ChevronRight, Globe, TrendingUp, Search } from 'lucide-react';
import { LangOption, translations } from './translations';

const LangContext = createContext<{
  lang: LangOption;
  setLang: (l: LangOption) => void;
  t: typeof translations.fr;
}>({
  lang: 'fr',
  setLang: () => {},
  t: translations.fr,
});

const useTranslation = () => useContext(LangContext);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useTranslation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img id="logo" src="/logo.png" alt="OmegaWeb" className="h-8 w-auto grayscale brightness-200" />
            <span className="font-display text-xl font-bold tracking-tight text-[#FF5A23] uppercase">OMEGAWEB</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-sm font-medium text-white/70">
              <a href="#services" className="hover:text-[#FF5A23] transition-colors">{t.nav.services}</a>
              <a href="#realisations" className="hover:text-[#FF5A23] transition-colors">{t.nav.realisations}</a>
              <a href="#tarifs" className="hover:text-[#FF5A23] transition-colors">{t.nav.tarifs}</a>
              <a href="#contact" className="hover:text-[#FF5A23] transition-colors">{t.nav.contact}</a>
            </div>
            
            <div className="flex items-center gap-2 text-sm font-bold">
              <button 
                onClick={() => setLang('fr')} 
                className={`transition-colors ${lang === 'fr' ? 'text-[#FF5A23] underline underline-offset-4' : 'text-white/50 hover:text-white/100'}`}
              >
                FR
              </button>
              <span className="text-white/20">|</span>
              <button 
                onClick={() => setLang('en')} 
                className={`transition-colors ${lang === 'en' ? 'text-[#FF5A23] underline underline-offset-4' : 'text-white/50 hover:text-white/100'}`}
              >
                EN
              </button>
            </div>

            <a href="#contact" className="bg-[#FF5A23] hover:bg-[#FF8A5C] text-black font-bold py-2.5 px-6 rounded-full text-sm uppercase tracking-wide transition-colors">
              {t.nav.cta}
            </a>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-bold">
              <button 
                onClick={() => setLang('fr')} 
                className={`transition-colors ${lang === 'fr' ? 'text-[#FF5A23] underline underline-offset-4' : 'text-white/50 hover:text-white/100'}`}
              >
                FR
              </button>
              <span className="text-white/20">|</span>
              <button 
                onClick={() => setLang('en')} 
                className={`transition-colors ${lang === 'en' ? 'text-[#FF5A23] underline underline-offset-4' : 'text-white/50 hover:text-white/100'}`}
              >
                EN
              </button>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white/70 hover:text-[#FF5A23]">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/5">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white/70 hover:text-[#FF5A23] font-medium uppercase text-sm tracking-wide">{t.nav.services}</a>
            <a href="#realisations" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white/70 hover:text-[#FF5A23] font-medium uppercase text-sm tracking-wide">{t.nav.realisations}</a>
            <a href="#tarifs" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white/70 hover:text-[#FF5A23] font-medium uppercase text-sm tracking-wide">{t.nav.tarifs}</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-white/70 hover:text-[#FF5A23] font-medium uppercase text-sm tracking-wide">{t.nav.contact}</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 bg-[#FF5A23] text-black font-bold py-4 px-6 rounded-lg uppercase tracking-wide text-sm">
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#0a0a0a_100%)] -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10 flex flex-col items-center">
        <h1 className="font-display text-5xl md:text-[80px] font-black leading-[0.9] tracking-tighter mb-6 uppercase" style={{ fontFamily: "'Arial Black', sans-serif" }}>
           {t.hero.title1}<br />
          <span className="text-[#FF5A23] inline-block">{t.hero.title2}</span> {t.hero.title3}
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full">
          <a href="#tarifs" className="w-full sm:w-auto bg-[#FF5A23] hover:bg-[#FF8A5C] text-black font-extrabold py-4 px-10 rounded-lg text-lg transition-all flex items-center justify-center">
            {t.hero.btnPrimary}
          </a>
          <a href="#realisations" className="w-full sm:w-auto border-2 border-[#FF5A23] text-[#FF5A23] hover:bg-[#FF5A23] hover:text-black font-extrabold py-4 px-10 rounded-lg text-lg transition-all flex items-center justify-center">
            {t.hero.btnSecondary}
          </a>
        </div>
        
        <div className="text-xs uppercase tracking-[0.3em] font-bold text-white/30">
          {t.hero.agency}
        </div>
      </div>
    </section>
  );
}

function TrustBand() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#F5F0EC] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-black/10">
          <div className="pt-4 md:pt-0 flex flex-col items-center px-6">
            <span className="font-display text-4xl font-black text-black leading-none mb-1">{t.trust.days}</span>
            <span className="font-bold text-[11px] text-black/50 uppercase tracking-wider">{t.trust.daysSub}</span>
          </div>
          <div className="pt-4 md:pt-0 flex flex-col items-center px-6">
            <span className="font-display text-4xl font-black text-black leading-none mb-1">{t.trust.clients}</span>
            <span className="font-bold text-[11px] text-black/50 uppercase tracking-wider">{t.trust.clientsSub}</span>
          </div>
          <div className="pt-4 md:pt-0 flex flex-col items-center px-6">
            <span className="font-display text-4xl font-black text-black leading-none mb-1">{t.trust.support}</span>
            <span className="font-bold text-[11px] text-black/50 uppercase tracking-wider">{t.trust.supportSub}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#0A0A0A] py-16 md:py-24 border-t border-white/5 relative z-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 text-left">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 uppercase leading-none italic text-[#F5F0EC]">
            {t.problem.title1} <br className="hidden md:block"/>
            <span className="text-[#FF8A5C]">{t.problem.title2}</span>
          </h2>
          <p className="text-white/40 text-sm md:text-lg mb-8 md:mb-0">
            {t.problem.subtitle}
          </p>
        </div>
        
        <div className="w-full md:w-5/12 flex flex-col gap-6">
          <div className="bg-white/5 p-6 border-l-4 border-[#FF5A23]">
            <p className="text-xs uppercase tracking-widest font-bold opacity-50 mb-3 text-red-400 flex items-center">
              <X className="h-4 w-4 mr-2" /> {t.problem.oldApproach}
            </p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>{t.problem.old1}</li>
              <li>{t.problem.old2}</li>
              <li>{t.problem.old3}</li>
              <li>{t.problem.old4}</li>
            </ul>
          </div>
          
          <div className="bg-white/5 p-6 border-l-4 border-[#FF5A23]">
            <p className="text-xs uppercase tracking-widest font-bold opacity-50 mb-3 text-[#FF5A23] flex items-center">
              <CheckCircle2 className="h-4 w-4 mr-2" /> {t.problem.newApproach}
            </p>
            <ul className="space-y-3 text-sm text-[#F5F0EC]">
              <li>{t.problem.new1}</li>
              <li>{t.problem.new2}</li>
              <li>{t.problem.new3}</li>
              <li>{t.problem.new4}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useTranslation();
  const services = [
    {
      title: t.services.s1Title,
      description: t.services.s1Desc,
      icon: <Globe className="h-8 w-8 text-[#FF5A23]" />
    },
    {
      title: t.services.s2Title,
      description: t.services.s2Desc,
      icon: <Search className="h-8 w-8 text-[#FF5A23]" />
    },
    {
      title: t.services.s3Title,
      description: t.services.s3Desc,
      icon: <TrendingUp className="h-8 w-8 text-[#FF5A23]" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0A0A0A] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase italic leading-none mb-6">{t.services.title} <span className="text-[#FF8A5C]">{t.services.titleHighlight}</span></h2>
          <p className="text-white/40 text-lg">{t.services.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white/5 p-8 border-l-4 border-[#FF5A23] hover:bg-white/10 transition-colors">
              <div className="mb-6 opacity-80">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display uppercase">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const { t } = useTranslation();
  return (
    <section id="realisations" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase italic leading-none mb-4">{t.portfolio.title} <span className="text-[#FF8A5C]">{t.portfolio.titleHighlight}</span></h2>
            <p className="text-white/40 text-lg">{t.portfolio.subtitle}</p>
          </div>
          <a href="#contact" className="text-[#FF5A23] font-bold flex items-center hover:text-[#FF8A5C] uppercase tracking-wide text-sm">
             {t.portfolio.startProj} <ChevronRight className="ml-1 h-5 w-5" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <div key={item} className="group relative overflow-hidden bg-white/5 border-l-4 border-[#FF5A23] aspect-video flex flex-col justify-end p-8 hover:bg-white/10 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent"></div>
              
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-block px-3 py-1 bg-[#FF5A23]/20 text-[#FF5A23] text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md border border-[#FF5A23]/20">{t.portfolio.projTag}{item}</div>
                <h3 className="text-2xl font-bold font-display mb-2 uppercase">{t.portfolio.projName}</h3>
                <p className="text-white/60 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {t.portfolio.projDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const { t } = useTranslation();
  return (
    <section id="tarifs" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase italic leading-none mb-6">{t.pricing.title} <br/>{t.pricing.titleNo} <span className="text-[#FF5A23]">{t.pricing.titleHighlight}</span></h2>
          <p className="text-white/40 text-lg">{t.pricing.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plan 1 */}
          <div className="bg-white/5 p-8 border-t-4 border-white/20 flex flex-col hover:bg-white/10 transition-colors">
            <h3 className="font-display text-2xl font-bold mb-2 uppercase">{t.pricing.plan1Name}</h3>
            <p className="text-white/40 text-sm mb-6 uppercase tracking-wider font-bold">{t.pricing.plan1Tag}</p>
            <div className="mb-8">
              <span className="text-5xl font-display font-black tracking-tighter">{t.pricing.plan1Price}</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-white/50 shrink-0 mr-3"/><span className="text-white/70 text-sm font-medium">{t.pricing.p1f1}</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-white/50 shrink-0 mr-3"/><span className="text-white/70 text-sm font-medium">{t.pricing.p1f2}</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-white/50 shrink-0 mr-3"/><span className="text-white/70 text-sm font-medium">{t.pricing.p1f3}</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-white/50 shrink-0 mr-3"/><span className="text-white/70 text-sm font-medium">{t.pricing.p1f4}</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-white/50 shrink-0 mr-3"/><span className="text-white/70 text-sm font-medium">{t.pricing.p1f5}</span></li>
            </ul>
            <a href="#contact" className="w-full text-center block bg-white/10 hover:bg-white/20 text-white font-extrabold py-4 px-6 uppercase tracking-wide text-sm transition-colors">
              {t.pricing.select}
            </a>
          </div>

          {/* Plan 2 */}
          <div className="bg-[#1a1a1a] p-8 border-t-4 border-[#FF5A23] relative flex flex-col transform md:-translate-y-4 shadow-2xl shadow-[#FF5A23]/5">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF5A23] text-black px-4 py-1 font-black uppercase text-[10px] tracking-widest">
              {t.pricing.plan2Pop}
            </div>
            <h3 className="font-display text-2xl font-bold mb-2 uppercase text-[#FF5A23]">{t.pricing.plan2Name}</h3>
            <p className="text-white/40 text-sm mb-6 uppercase tracking-wider font-bold">{t.pricing.plan2Tag}</p>
            <div className="mb-8">
              <span className="text-5xl font-display font-black tracking-tighter text-white">{t.pricing.plan2Price}</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#FF5A23] shrink-0 mr-3"/><span className="text-white/90 text-sm font-medium">{t.pricing.p2f1}</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#FF5A23] shrink-0 mr-3"/><span className="text-white/90 text-sm font-medium">{t.pricing.p2f2}</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#FF5A23] shrink-0 mr-3"/><span className="text-white/90 text-sm font-medium">{t.pricing.p2f3}</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#FF5A23] shrink-0 mr-3"/><span className="text-white/90 text-sm font-medium">{t.pricing.p2f4}</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#FF5A23] shrink-0 mr-3"/><span className="text-white/90 text-sm font-medium">{t.pricing.p2f5}</span></li>
            </ul>
            <a href="#contact" className="w-full text-center block bg-[#FF5A23] hover:bg-[#FF8A5C] text-black font-extrabold py-4 px-6 uppercase tracking-wide text-sm transition-all">
              {t.pricing.select}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <footer id="contact" className="bg-[#0A0A0A] pt-24 pb-12 border-t border-white/5 relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase italic leading-none mb-6">{t.footer.title} <br/><span className="text-[#FF8A5C]">{t.footer.titleHighlight}</span></h2>
            <p className="text-white/40 text-sm md:text-lg mb-8 max-w-md">
              {t.footer.subtitle}
            </p>
            <div className="flex items-center text-white/50 mt-12 gap-3">
              <img src="/logo.png" className="h-6 w-auto grayscale brightness-200" alt="Logo" />
              <span className="font-display text-xl font-bold tracking-tight uppercase">OMEGAWEB</span>
            </div>
            <p className="text-white/30 tracking-widest uppercase text-xs font-bold mt-4">{t.footer.agency}</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-white/50 mb-2">{t.footer.formName}</label>
                  <input type="text" className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 focus:outline-none focus:border-[#FF5A23] text-white transition-colors" placeholder={t.footer.formNamePlaceholder} required />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-white/50 mb-2">{t.footer.formCompany}</label>
                  <input type="text" className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 focus:outline-none focus:border-[#FF5A23] text-white transition-colors" placeholder={t.footer.formCompanyPlaceholder} />
                </div>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-white/50 mb-2">{t.footer.formEmail}</label>
                <input type="email" className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 focus:outline-none focus:border-[#FF5A23] text-white transition-colors" placeholder={t.footer.formEmailPlaceholder} required />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold text-white/50 mb-2">{t.footer.formNeeds}</label>
                <textarea rows={4} className="w-full bg-[#0A0A0A] border border-white/10 px-4 py-3 focus:outline-none focus:border-[#FF5A23] text-white transition-colors resize-none" placeholder={t.footer.formNeedsPlaceholder}></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#FF5A23] hover:bg-[#FF8A5C] text-black font-extrabold py-4 px-8 uppercase tracking-wide text-sm transition-all">
                {t.footer.formSubmit}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-bold uppercase tracking-wider">{t.footer.copyright}</p>
          <div className="flex space-x-6 text-xs font-bold uppercase tracking-wider text-white/30">
            <a href="#" className="hover:text-white/70 transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white/70 transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState<LangOption>('fr');

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      <div className="min-h-screen bg-[#0A0A0A] text-[#F5F0EC] font-sans selection:bg-[#FF5A23] selection:text-black overflow-x-hidden">
          <Navbar />
          <main>
             <Hero />
             <TrustBand />
             <Problem />
             <Services />
             <Portfolio />
             <Pricing />
          </main>
          <Footer />
      </div>
    </LangContext.Provider>
  );
}
