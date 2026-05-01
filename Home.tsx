import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Zap, Shield, TrendingUp, Monitor, Server, Cog, Palette } from "lucide-react";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 max-w-7xl mx-auto relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="max-w-4xl pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Taking on new projects
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[100px] leading-[0.9] font-display font-bold tracking-tighter mb-8"
          >
            BUILD DIGITAL PRODUCTS THAT ACTUALLY <br className="hidden md:block" />
            <span className="text-primary italic pr-4">GROW</span> YOUR BUSINESS.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed font-light"
          >
            We design and develop high-performance websites, applications, and software that help startups and businesses increase visibility, build trust, and generate real results.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="bg-primary text-ink px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white transition-all transform hover:scale-105">
              👉 Get Free Consultation
            </Link>
            <Link to="/portfolio" className="border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              👉 View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-y border-white/10 bg-white/5 backdrop-blur-sm py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-around items-center gap-8 text-sm md:text-base font-medium text-white/80 uppercase tracking-widest">
          <div className="flex items-center gap-2"><Zap className="text-primary w-5 h-5" /> Fast Delivery (5–14 Days)</div>
          <div className="flex items-center gap-2"><Shield className="text-primary w-5 h-5" /> Modern Tech Stack</div>
          <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center"><div className="w-2 h-2 bg-primary rounded-full" /></div> Mumbai-Based Services</div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4">WHAT WE BUILD</h2>
          <p className="text-white/50 text-lg">We don't just write code. We build growth engines.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: <Monitor className="w-8 h-8" />, title: "Business Websites", desc: "High-converting, fast, and SEO-ready websites designed to turn visitors into customers." },
            { icon: <Server className="w-8 h-8" />, title: "Full Stack Applications", desc: "Custom web apps built with scalable architecture and modern technologies." },
            { icon: <Cog className="w-8 h-8" />, title: "Software Solutions", desc: "Tailored systems that automate workflows and improve business efficiency." },
            { icon: <Palette className="w-8 h-8" />, title: "UI/UX Design", desc: "Clean, user-focused design that improves engagement and conversions." }
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-6 bg-primary text-ink">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-black tracking-tighter mb-6 leading-[1.1]">
              WE FOCUS ON <br/>OUTCOMES, NOT <br/>JUST CODE
            </h2>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-ink text-white px-6 py-3 rounded-full font-bold hover:gap-4 transition-all">
              Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 font-medium text-lg leading-tight">
            <div className="flex gap-4">
              <div className="text-white font-bold text-3xl">01</div>
              <p>Better customer engagement</p>
            </div>
            <div className="flex gap-4">
              <div className="text-white font-bold text-3xl">02</div>
              <p>Higher conversion rates</p>
            </div>
            <div className="flex gap-4">
              <div className="text-white font-bold text-3xl">03</div>
              <p>Faster website performance</p>
            </div>
            <div className="flex gap-4">
              <div className="text-white font-bold text-3xl">04</div>
              <p>Scalable systems for growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-16 text-center">DON'T JUST TAKE OUR WORD</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl relative">
             <div className="text-6xl text-primary font-serif absolute top-6 left-6 opacity-20">"</div>
             <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 relative z-10">CodeDrip555 delivered exactly what we needed. Fast, reliable, and professional. The new system saves us hours every week.</p>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-white/20" />
               <div>
                 <div className="font-bold">Startup Founder</div>
                 <div className="text-sm text-white/50">Tech SaaS</div>
               </div>
             </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl relative">
             <div className="text-6xl text-primary font-serif absolute top-6 left-6 opacity-20">"</div>
             <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 relative z-10">Our online presence improved significantly after working with them. Conversion rates are up by 40% since the redesign.</p>
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-white/20" />
               <div>
                 <div className="font-bold">Business Owner</div>
                 <div className="text-sm text-white/50">E-Commerce Brand</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6text-center border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">READY TO BUILD SOMETHING THAT WORKS?</h2>
          <p className="text-xl text-white/50 mb-10 font-light">Limited slots available this month. Get a free consultation before you decide.</p>
          <Link to="/contact" className="bg-white text-ink px-10 py-5 rounded-full font-bold text-xl flex items-center gap-2 hover:bg-primary hover:text-white transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            👉 Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
}
