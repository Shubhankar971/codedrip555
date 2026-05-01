import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Target, Users, Zap } from "lucide-react";

export function About() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 min-h-[90vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mb-24"
      >
        <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-semibold tracking-wider uppercase mb-6">
          About Us
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8 leading-tight">
          WE BUILD DIGITAL PRODUCTS THAT <span className="text-primary italic">DRIVE REAL BUSINESS RESULTS.</span>
        </h1>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-3xl font-display font-bold mb-4 flex items-center gap-3">
               Who We Are
            </h2>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              CodeDrip555 is a Mumbai-based agency focused on all kinds of development and design. We build high-performance websites, applications, and software that move the needle.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold mb-4 flex items-center gap-3">
               Who We Work With
            </h2>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              We work with growing brands and established businesses that are tired of generic solutions. If you want digital products that actually support your goals—whether that’s increasing visibility, building trust, or generating measurable growth—you're in the right place.
            </p>
          </div>
          
          <div className="pt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-ink px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105">
              👉 Let's Work Together
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="grid gap-6"
        >
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
             <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary mb-6">
               <Target className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold mb-2">Goal-Oriented Design</h3>
             <p className="text-white/60">Every pixel serves a purpose. We don't just make it look good; we make it convert.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
             <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary mb-6">
               <Zap className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold mb-2">High Performance</h3>
             <p className="text-white/60">Speed is a feature. We engineer our products to be lightning-fast and scalable.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
             <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary mb-6">
               <Users className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold mb-2">Local & Reliable</h3>
             <p className="text-white/60">Based in Mumbai, we understand business needs and communicate clearly throughout the project.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
