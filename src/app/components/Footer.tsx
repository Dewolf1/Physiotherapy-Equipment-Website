import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowUp, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { HospimedicoLogo } from './HospimedicoLogo';

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-navy-950 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-royal-600 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group inline-block">
              <HospimedicoLogo className="w-24 md:w-32 h-auto" isDark={true} />
            </Link>
            <p className="text-gray-400 font-medium text-sm leading-relaxed">
              India's trusted manufacturer, importer &amp; exporter of premium physiotherapy, occupational therapy and rehabilitation equipment.
            </p>
            <div className="space-y-2 text-xs text-gray-500 font-medium">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-royal-600 mt-0.5 flex-shrink-0" />
                E-247, Street No. 24, Old Mustafabad, Delhi-110094
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-royal-600 flex-shrink-0" />
                +91 82878 45289 | +91 99100 08540
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-royal-600 flex-shrink-0" />
                hospimedicoo@gmail.com
              </div>
            </div>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-royal-600 hover:border-royal-600 transition-all group">
                  <Icon size={16} className="text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-white">Equipment Series</h4>
            <ul className="space-y-3">
              {['Hi-Lo Tables', 'Traction Tables', 'Electrotherapy', 'Hydrotherapy', 'Exercise Equipment', 'Occupational Therapy'].map(link => (
                <li key={link}>
                  <Link to="/products" className="text-gray-400 hover:text-royal-600 font-bold text-sm transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'All Products', path: '/products' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Get a Quote', path: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-royal-600 font-bold text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">Stay Updated</h4>
            <p className="text-gray-400 text-sm font-medium">Get notified about new products, catalogues, and offers.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:border-royal-600 outline-none text-sm transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-royal-600 text-white px-4 rounded-xl hover:bg-blue-700 transition-all">
                <Mail size={16} />
              </button>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Website</p>
              <a href="https://www.hospimedico.com" target="_blank" rel="noopener noreferrer"
                className="text-royal-600 font-bold text-sm hover:text-ice-blue transition-colors">
                www.hospimedico.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
            &copy; 2026 Hospimedico. All rights reserved. Delhi, India.
          </p>

          <button onClick={scrollToTop} className="group flex items-center gap-3 text-gray-500 hover:text-white transition-colors">
            <span className="text-xs font-black uppercase tracking-widest">Back to Top</span>
            <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-royal-600 group-hover:border-royal-600 transition-all">
              <ArrowUp size={16} />
            </div>
          </button>

          <div className="flex gap-6 text-gray-500 text-[10px] font-black uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
