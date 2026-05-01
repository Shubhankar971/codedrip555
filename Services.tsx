import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Monitor, Server, Cog, Palette, Zap } from "lucide-react";

export function Services() {
  const services = [
    {
      id: "fullstack",
      icon: <Server className="w-10 h-10" />,
      title: "Full Stack Development",
      desc: "We build complete applications from frontend to backend with scalable architecture. Perfect for complex SaaS, marketplaces, and internal tools.",
      price: "Starting from ₹2k - ₹3k",
      popular: true
    },
    {
      id: "web",
      icon: <Monitor className="w-10 h-10" />,
      title: "Web Development",
      desc: "Modern, responsive websites built for performance and conversion. Optimize your brand's digital footprint.",
      price: "Starting from ₹2k",
      popular: false
    },
    {
      id: "software",
      icon: <Cog className="w-10 h-10" />,
      title: "Software Development",
      desc: "Custom systems designed to automate and optimize your business workflows. Stop relying on unlinked spreadsheets.",
      price: "Custom Pricing",
      popular: false
    },
    {
      id: "design",
      icon: <Palette className="w-10 h-10" />,
      title: "UI/UX Design",
      desc: "Designs that improve user experience and increase engagement. We focus on how it works, not just how it looks.",
      price: "Starting from ₹1.5k",
      popular: false
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-24"
      >
        <div className="inline-block px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-semibold tracking-wider uppercase mb-6">
          Our Services
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6">
          ENGINEERED FOR <span className="text-primary">CONVERSION.</span>
        </h1>
        <p className="text-xl text-white/60 font-light leading-relaxed">
          We strip away the fat and focus on what matters: building fast, scalable, and beautiful digital products that turn visitors into paying customers.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-10 rounded-3xl border relative overflow-hidden flex flex-col ${
              service.popular 
                ? 'bg-primary/5 border-primary/30' 
                : 'bg-white/5 border-white/10 hover:bg-white/10 transition-colors'
            }`}
          >
            {service.popular && (
              <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-primary text-ink text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                <Zap className="w-3 h-3" /> Most requested
              </div>
            )}
            
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${service.popular ? 'bg-primary text-ink' : 'bg-white/10 text-primary'}`}>
              {service.icon}
            </div>
            
            <h2 className="text-3xl font-display font-bold mb-4">{service.title}</h2>
            <p className="text-lg text-white/60 leading-relaxed mb-auto pb-10">
              {service.desc}
            </p>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="font-display text-xl font-bold">{service.price}</div>
              <Link 
                to={`/contact?service=${service.id}`}
                className={`px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all w-full sm:w-auto justify-center ${
                  service.popular
                    ? 'bg-primary text-ink hover:bg-white'
                    : 'bg-white text-ink hover:bg-primary hover:text-white'
                }`}
              >
                Get Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 p-12 bg-white/5 border border-white/10 rounded-3xl text-center max-w-4xl mx-auto"
      >
        <h3 className="text-3xl font-display font-bold mb-4">Not sure what you need?</h3>
        <p className="text-white/60 mb-8 max-w-xl mx-auto">Book a free 15-minute discovery call where we'll diagnose your business needs and map out a technical strategy.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
          Free Consultation
        </Link>
      </motion.div>
    </div>
  );
}
