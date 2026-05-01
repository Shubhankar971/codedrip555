import { motion } from "motion/react";
import { Phone, Send, ArrowRight, Mail } from "lucide-react";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export function Contact() {
  const [searchParams] = useSearchParams();
  const defaultService = searchParams.get("service") || "";
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 min-h-[90vh]">
      <div className="grid lg:grid-cols-5 gap-16">
        
        {/* Left Column - Copy & WhatsApp */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-6 leading-tight">
              LET'S BUILD SOMETHING THAT <span className="text-primary italic">WORKS</span> FOR YOUR BUSINESS.
            </h1>
            <p className="text-xl text-white/60 font-light leading-relaxed mb-12">
              Fill out the form to get a free, no-obligation technical consultation. We'll reply within 24 hours.
            </p>

            <div className="space-y-6">
              <a 
                href="https://wa.me/919930713658" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(37,211,102,0.4)]">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-lg mb-1">WhatsApp Us: +91 99307 13658</div>
                  <div className="text-white/60 text-sm">Need answers faster? Chat with us directly!</div>
                </div>
                <ArrowRight className="ml-auto w-5 h-5 text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-white/40 text-sm uppercase tracking-widest font-bold space-y-3"
          >
            <p>Mumbai-Based Development Services</p>
            <p className="flex items-center gap-2">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 text-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              +91 99307 13658
            </p>
            <p className="flex items-center gap-2 lowercase tracking-normal font-medium"><Mail className="w-4 h-4" /> <a href="mailto:mshubh555@gmail.com" className="hover:text-primary transition-colors">mshubh555@gmail.com</a></p>
          </motion.div>
        </div>

        {/* Right Column - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-3"
        >
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 min-h-[500px]">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Request Received!</h3>
                <p className="text-white/60 text-lg">We'll review your details and get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-white/70">Name</label>
                    <input required type="text" className="w-full bg-ink border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-white" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-white/70">Email</label>
                    <input required type="email" className="w-full bg-ink border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-white" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-white/70">Phone</label>
                    <input required type="tel" className="w-full bg-ink border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-white" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-white/70">Budget</label>
                    <select required className="w-full bg-ink border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-white appearance-none">
                      <option value="" disabled selected>Select Budget Range</option>
                      <option value="under_2k">Under ₹2k (Basic)</option>
                      <option value="2k_5k">₹2k - ₹5k (Standard)</option>
                      <option value="5k_10k">₹5k - ₹10k (Advanced)</option>
                      <option value="10k_plus">₹10k+ (Enterprise)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-white/70">Project Type</label>
                  <select required defaultValue={defaultService} className="w-full bg-ink border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-white appearance-none">
                    <option value="" disabled>What do you need built?</option>
                    <option value="fullstack">Full Stack Application</option>
                    <option value="web">Business Website</option>
                    <option value="software">Custom Software / Internal Tool</option>
                    <option value="design">UI/UX Design</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-white/70">Message</label>
                  <textarea required rows={4} className="w-full bg-ink border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-white resize-none" placeholder="Tell us a bit about your goals and current challenges..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-ink px-8 py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-2 hover:bg-white transition-all disabled:opacity-70 mt-4"
                >
                  {isSubmitting ? "Sending..." : "👉 Get Free Consultation"}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
