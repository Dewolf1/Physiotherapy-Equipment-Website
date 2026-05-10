import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

export function About() {
  const stats = [
    { value: 15, suffix: '+', label: 'Years Experience' },
    { value: 5000, suffix: '+', label: 'Clients Served' },
    { value: 500, suffix: '+', label: 'Products' },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-royal-600/10 text-royal-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
              About Hospimedico
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-navy-950 mb-6 leading-tight">
              Delhi's Leading <span className="text-royal-600">Physio &amp; Rehab</span> Equipment Company
            </h2>
            <p className="text-gray-500 font-medium mb-8 leading-relaxed">
              Hospimedico is Delhi-based manufacturer, importer &amp; exporter of professional physiotherapy and rehabilitation equipment — trusted by hospitals, clinics, and practitioners across India and worldwide.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                'Manufacturers, Importers & Exporters',
                'ISO Certified Equipment',
                'Expert Installation & Training',
                'Bulk Orders Welcome',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-royal-600/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-royal-600" size={13} />
                  </div>
                  <span className="text-navy-950 font-bold text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 p-8 bg-navy-950 rounded-[2.5rem]">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-royal-600 mb-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-5 pt-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=500&fit=crop"
                  alt="Physiotherapy clinic"
                  className="rounded-[2rem] shadow-2xl grayscale-[30%] hover:grayscale-0 transition-all duration-700 h-56 w-full object-cover"
                />
                <div className="bg-royal-600 p-6 rounded-[1.5rem] text-white shadow-2xl shadow-royal-600/30">
                  <p className="font-bold italic text-sm leading-relaxed">"Empowering healthcare providers to deliver better patient outcomes — less to MORE."</p>
                  <p className="text-blue-200 text-[10px] font-black uppercase tracking-widest mt-3">— Hospimedico Mission</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=500&fit=crop"
                  alt="Treatment equipment"
                  className="rounded-[2rem] shadow-2xl grayscale-[30%] hover:grayscale-0 transition-all duration-700 h-56 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop"
                  alt="Professional care"
                  className="rounded-[2rem] shadow-2xl grayscale-[30%] hover:grayscale-0 transition-all duration-700 h-56 w-full object-cover"
                />
              </motion.div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-royal-600/5 blur-[100px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
