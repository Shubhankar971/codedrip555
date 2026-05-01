import { Outlet, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="fixed top-0 w-full z-50 bg-ink/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter">
            CODE<span className="text-primary">DRIP</span>555
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/about" className="hover:text-primary transition-colors">ABOUT</Link>
            <Link to="/services" className="hover:text-primary transition-colors">SERVICES</Link>
            <Link to="/portfolio" className="hover:text-primary transition-colors">PORTFOLIO</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">CONTACT</Link>
            <Link to="/contact" className="bg-white text-ink px-5 py-2.5 rounded-full hover:bg-primary hover:text-white transition-all font-bold flex items-center gap-2">
              START PROJECT <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-ink pt-24 px-6 flex flex-col gap-6 text-2xl font-display font-bold md:hidden"
          >
            <Link to="/about">ABOUT</Link>
            <Link to="/services">SERVICES</Link>
            <Link to="/portfolio">PORTFOLIO</Link>
            <Link to="/contact">CONTACT</Link>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.4 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/10 mt-24 py-12 text-center text-white/50 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} CodeDrip555. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/portfolio" className="hover:text-white transition-colors">Work</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
