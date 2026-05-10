import { MessageCircle, Phone, FileDown } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export function StickyButtons() {
  return (
    <div className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 flex flex-col gap-3 sm:gap-4 z-[100]">
      <motion.a
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.12, x: -4 }}
        href="https://wa.me/918287845289?text=Hi%2C%20I%27m%20interested%20in%20Hospimedico%20physiotherapy%20equipment."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/30 group relative"
        aria-label="WhatsApp Hospimedico"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="absolute right-16 bg-navy-950 text-white px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/10">
          WhatsApp Us
        </span>
      </motion.a>

      <motion.Link
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55 }}
        whileHover={{ scale: 1.12, x: -4 }}
        to="/catalogue/print"
        target="_blank"
        className="bg-navy-950 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-2xl shadow-navy-950/30 group relative"
        aria-label="Download Catalogue"
      >
        <FileDown className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="absolute right-16 bg-navy-950 text-white px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/10">
          Print Catalogue
        </span>
      </motion.Link>

      <motion.a
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.65 }}
        whileHover={{ scale: 1.12, x: -4 }}
        href="tel:+918287845289"
        className="bg-royal-600 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-2xl shadow-royal-600/30 group relative"
        aria-label="Call Hospimedico"
      >
        <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="absolute right-16 bg-navy-950 text-white px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/10">
          Call Now
        </span>
      </motion.a>
    </div>
  );
}
