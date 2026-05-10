import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

export function CTABanner() {
  return (
    <section className="py-24 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto rounded-[3rem] bg-navy-950 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-navy-950/20"
      >
        {/* Animated background patterns */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-royal-600/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-sapphire-800/10 blur-[80px] rounded-full" />
        
        <div className="relative z-10">
          <div className="inline-block bg-white/5 border border-white/10 px-6 py-2 rounded-full text-ice-blue text-xs font-black uppercase tracking-[0.3em] mb-10">
            Professional Equipment
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight max-w-4xl mx-auto">
            Ready to Upgrade Your <span className="text-royal-600">Clinical Workflow?</span>
          </h2>
          
          <p className="text-xl text-gray-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of premier clinics that trust PhysioEquip for their rehabilitation needs. Get professional advice today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/products"
              className="bg-royal-600 text-white px-12 py-6 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-royal-700 transition-all shadow-xl shadow-royal-600/30 group"
            >
              Explore Full Catalog
              <ArrowRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
            <Link 
              to="/#contact"
              className="bg-white/5 border border-white/10 text-white px-12 py-6 rounded-[2rem] font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Consult an Expert
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
