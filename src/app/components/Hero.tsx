import { ArrowRight, ChevronRight, Star, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { AnimatedCounter } from './AnimatedCounter';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-navy-950 pt-24 pb-16">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] bg-royal-600/15 blur-[140px] rounded-full" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[45%] h-[45%] bg-sapphire-800/20 blur-[120px] rounded-full" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {/* Location pill */}
            <div className="inline-flex items-center gap-2 bg-royal-600/10 border border-royal-600/30 px-4 py-2 rounded-full text-royal-600 text-xs font-black uppercase tracking-widest mb-6">
              <MapPin size={12} />
              Delhi, India — Globally Trusted
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white mb-6 leading-[1.05]">
              India's Premier{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice-blue via-royal-600 to-ice-blue bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
                Physio &amp; Rehab
              </span>{' '}
              Equipment
            </h1>

            <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
              Hospimedico — Delhi-based manufacturers, importers &amp; exporters of high-quality Equipments
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="bg-royal-600 text-white px-9 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-2xl shadow-royal-600/40 group"
              >
                Explore Catalogue
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link
                to="/contact"
                className="bg-white/5 backdrop-blur-md border border-white/15 text-white px-9 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
              >
                Get a Quote
                <ChevronRight size={18} />
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[11, 12, 13, 14].map((i) => (
                  <div key={i} className="w-11 h-11 rounded-full border-[3px] border-navy-950 bg-gray-300 overflow-hidden shadow-lg">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-gold-accent text-gold-accent" />
                  ))}
                </div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Trusted by 5,000+ Healthcare Professionals
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Image collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="relative hidden lg:block"
          >
            {/* Main large image */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-navy-950/60 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&h=700&fit=crop"
                alt="Physiotherapy Treatment Table"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              {/* Overlay label */}
              <div className="absolute bottom-6 right-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-3 inline-flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white font-bold text-xs uppercase tracking-widest">ISO Certified Equipment</span>
                </div>
              </div>
            </div>

            {/* Small top-right image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-8 -right-8 z-20 w-44 h-44 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop"
                alt="Physiotherapy care"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating stats: 15+ years */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-8 -left-8 z-20 bg-white/10 backdrop-blur-xl border border-white/20 px-7 py-5 rounded-3xl shadow-2xl"
            >
              <div className="text-4xl font-black text-ice-blue leading-none mb-1">
                <AnimatedCounter value={15} suffix="+" />
              </div>
              <div className="text-[10px] text-white/70 uppercase tracking-widest font-bold">Years of Excellence</div>
            </motion.div>

            {/* Top badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-8 -left-10 z-20 bg-royal-600 px-5 py-3 rounded-2xl shadow-xl shadow-royal-600/40"
            >
              <div className="text-xl font-black text-white leading-none">
                <AnimatedCounter value={500} suffix="+" />
              </div>
              <div className="text-[9px] text-white/80 uppercase tracking-widest font-bold">Products</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
