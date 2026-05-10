import { Phone, Mail, Menu, X, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { HospimedicoLogo } from './HospimedicoLogo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isDarkHeroPage = location.pathname === '/' || location.pathname === '/contact' || location.pathname === '/about';
  const shouldHaveDarkText = isScrolled || !isDarkHeroPage;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      shouldHaveDarkText ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100/50' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className={`bg-navy-950 text-white py-1.5 transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row gap-2 justify-between items-center text-[10px] uppercase tracking-widest font-bold">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
            <a href="tel:+918287845289" className="flex items-center gap-2 hover:text-ice-blue transition-colors">
              <Phone size={11} />
              <span>+91 82878 45289</span>
            </a>
            <a href="mailto:hospimedicoo@gmail.com" className="flex items-center gap-2 hover:text-ice-blue transition-colors">
              <Mail size={11} />
              <span>hospimedicoo@gmail.com</span>
            </a>
          </div>
          <div className="hidden sm:block text-gray-400">E-247, Street No. 24, Old Mustafabad, Delhi-110094</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <HospimedicoLogo className="w-24 md:w-32 h-auto" isDark={!shouldHaveDarkText} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-royal-600 relative group ${
                  location.pathname === link.path
                    ? 'text-royal-600'
                    : shouldHaveDarkText ? 'text-navy-950' : 'text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-royal-600 transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : 'w-0'
                }`} />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div className="relative hidden sm:flex items-center">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.input
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    type="text"
                    placeholder="Search 500+ products..."
                    className={`absolute right-10 py-2 px-4 rounded-full text-sm outline-none transition-colors ${
                      shouldHaveDarkText 
                        ? 'bg-gray-100 text-navy-950 placeholder-gray-500' 
                        : 'bg-white/10 backdrop-blur-md text-white placeholder-white/60 border border-white/20'
                    }`}
                    autoFocus
                  />
                )}
              </AnimatePresence>
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-full transition-colors z-10 ${
                  shouldHaveDarkText ? 'text-navy-950 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                <Search size={20} />
              </button>
            </div>

            <Link
              to="/contact"
              className={`hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest transition-all shadow-lg ${
                shouldHaveDarkText
                  ? 'bg-navy-950 text-white hover:bg-royal-600'
                  : 'bg-royal-600 text-white hover:bg-blue-700 shadow-royal-600/30'
              }`}
            >
              Get Quote
            </Link>

            <button
              className={`md:hidden ${shouldHaveDarkText ? 'text-navy-950' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-xl font-bold text-navy-950 hover:text-royal-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-royal-600 text-white py-4 rounded-2xl font-bold text-center hover:bg-blue-700 transition-colors"
              >
                Get a Quote
              </Link>
              <div className="border-t border-gray-100 pt-4 space-y-2 text-sm text-gray-500">
                <p>📞 +91 82878 45289</p>
                <p>✉️ hospimedicoo@gmail.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
