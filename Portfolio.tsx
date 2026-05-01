import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, LayoutDashboard, ShoppingCart, Globe } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      id: "saas",
      title: "SaaS Analytics Dashboard",
      category: "Full Stack Application",
      icon: <LayoutDashboard className="w-6 h-6" />,
      color: "from-blue-500/20 to-purple-500/20",
      problem: "The client needed a powerful, real-time user analytics system to replace their scattered spreadsheets.",
      solution: "Built a robust MERN-based dashboard with responsive charts, dynamic filtering, and role-based access control.",
      result: "Improved data tracking efficiency by 300% and reduced reporting errors to near zero.",
      imagePlaceholder: "bg-zinc-800"
    },
    {
      id: "ecommerce",
      title: "High-Volume E-Commerce Platform",
      category: "Web & Backend Development",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "from-emerald-500/20 to-teal-500/20",
      problem: "A retail brand was losing sales due to extremely slow page loads and a clunky checkout flow.",
      solution: "Developed a modern, headless e-commerce store with an intuitive admin panel and seamless Stripe integration.",
      result: "Increased mobile conversion rates by 45% and reduced cart abandonment significantly.",
      imagePlaceholder: "bg-zinc-800"
    },
    {
      id: "corporate",
      title: "Corporate SEO-Optimized Website",
      category: "Business Website & UI/UX",
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-500/20 to-red-500/20",
      problem: "An established B2B company had zero digital presence and an outdated brand identity.",
      solution: "Designed and built a blazingly fast, SEO-ready corporate site optimized for lead generation.",
      result: "Ranked page 1 for their primary keywords within 3 months, doubling inbound leads.",
      imagePlaceholder: "bg-zinc-800"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div className="max-w-2xl">
          <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-semibold tracking-wider uppercase mb-6">
            Our Work
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 relative">
            PROVEN <span className="text-primary italic">RESULTS.</span>
            <div className="absolute -bottom-4 left-0 w-32 h-1 bg-primary" />
          </h1>
          <p className="text-xl text-white/60 font-light mt-10">
            We don't build vanity metrics. We build robust systems that solve expensive problems.
          </p>
        </div>
        <Link to="/contact" className="shrink-0 bg-white text-ink px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all">
          Start Your Project <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Project Image/Demo Placeholder */}
            <div className={`order-2 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className={`aspect-[4/3] rounded-3xl p-1 bg-gradient-to-br ${project.color} border border-white/10 overflow-hidden relative group`}>
                <div className="absolute inset-0 bg-ink opacity-40 group-hover:opacity-20 transition-opacity z-10" />
                <div className="w-full h-full bg-ink rounded-[20px] overflow-hidden flex flex-col">
                  {/* Fake Browser Chrome */}
                  <div className="flex gap-2 p-4 border-b border-white/5 bg-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  {/* Mock Content inside "Browser" */}
                  <div className="p-8 flex-grow flex items-center justify-center relative overflow-hidden bg-zinc-900/50">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent" />
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary blur-sm absolute">
                      {project.icon}
                    </div>
                    <div className="relative z-10 text-white/30 font-display text-2xl font-bold tracking-widest text-center">
                      [ PROJECT DEMO / SCREENSHOT ]<br/>
                      <span className="text-sm font-sans font-normal opacity-50 mt-2 block">Will be replaced with actual high-res image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className={`order-1 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="flex items-center gap-3 text-primary mb-4 font-bold uppercase tracking-wider text-sm">
                {project.icon} {project.category}
              </div>
              <h2 className="text-4xl font-display font-bold mb-8">{project.title}</h2>
              
              <div className="space-y-8">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-white/40 uppercase tracking-widest text-xs font-bold font-sans mb-2">The Problem</h3>
                  <p className="text-lg text-white/80 leading-relaxed font-light">{project.problem}</p>
                </div>
                
                <div className="pl-6 border-l-2 border-primary/30">
                  <h3 className="text-white/40 uppercase tracking-widest text-xs font-bold font-sans mb-2">The Solution</h3>
                  <p className="text-lg text-white/80 leading-relaxed font-light mb-8">{project.solution}</p>
                  
                  <h3 className="text-primary uppercase tracking-widest text-xs font-bold font-sans mb-2">The Result</h3>
                  <p className="text-xl font-medium leading-relaxed">{project.result}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-40 text-center"
      >
        <p className="text-2xl text-white/60 mb-8">Ready to be our next success story?</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-ink px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-all shadow-[0_0_30px_rgba(255,78,0,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
          Discuss Your Project <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
}
