import { motion } from 'motion/react';
import { Link } from 'react-router';
import { MapPin, ArrowRight } from 'lucide-react';

export function MapSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-royal-600/10 border border-royal-600/30 px-4 py-1 rounded-full text-royal-600 text-[10px] font-black uppercase tracking-widest mb-6">
              <MapPin size={12} />
              Find Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-navy-950 mb-6">
              Visit Our <span className="text-royal-600">Delhi</span> Office
            </h2>
            <p className="text-gray-500 text-lg font-medium mb-8 leading-relaxed">
              We welcome clinic directors, hospital procurement officers, and individual practitioners to visit our showroom and experience our equipment firsthand.
            </p>
            <div className="space-y-3 mb-10">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="text-royal-600 flex-shrink-0 mt-0.5" size={18} />
                <p className="text-navy-950 font-bold">E-247, Street No. 24, Old Mustafabad, Delhi-110094</p>
              </div>
              <div className="flex gap-4 text-sm text-gray-600 font-medium pl-7">
                <span>📞 +91 82878 45289</span>
                <span>📞 +91 99100 08540</span>
              </div>
              <div className="text-sm text-gray-600 font-medium pl-7">
                ✉️ hospimedicoo@gmail.com
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-navy-950 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-royal-600 transition-all shadow-xl shadow-navy-950/20 group"
            >
              Get Directions & Contact
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-300/40 border border-gray-200 h-96"
          >
            <iframe
              title="Hospimedico Delhi"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=E-247,+Old+Mustafabad,+Delhi-110094&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
