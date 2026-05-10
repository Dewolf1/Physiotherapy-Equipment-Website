import { Activity, Zap, Heart, Stethoscope, Wind, Droplets, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const categories = [
  {
    icon: Activity,
    name: 'Exercise Equipment',
    count: 120,
    color: 'text-blue-600',
    bgColor: 'bg-blue-600/10'
  },
  {
    icon: Zap,
    name: 'Electrotherapy',
    count: 85,
    color: 'text-purple-600',
    bgColor: 'bg-purple-600/10'
  },
  {
    icon: Heart,
    name: 'Therapeutic Aids',
    count: 95,
    color: 'text-red-600',
    bgColor: 'bg-red-600/10'
  },
  {
    icon: Stethoscope,
    name: 'Diagnostic Tools',
    count: 65,
    color: 'text-green-600',
    bgColor: 'bg-green-600/10'
  },
  {
    icon: Wind,
    name: 'Mobility Aids',
    count: 110,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-600/10'
  },
  {
    icon: Droplets,
    name: 'Hydrotherapy',
    count: 45,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-600/10'
  }
];

export function Categories() {
  return (
    <section id="categories" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-navy-950 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Explore Categories
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy-950 mb-6">
            Specialized <span className="text-royal-600">Solutions</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-xl mx-auto">
            Precision tools tailored to your specialty — from electrotherapy to full rehabilitation systems.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link to="/products" className="block p-5 sm:p-8 bg-white rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-royal-600/10 transition-all duration-500 hover:-translate-y-2">
                  <div className={`${category.bgColor} ${category.color} w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 hover:bg-royal-600 hover:text-white transition-all duration-500`}>
                    <Icon size={24} className="sm:hidden" />
                    <Icon size={32} className="hidden sm:block" />
                  </div>
                  <h3 className="text-sm sm:text-xl font-black text-navy-950 mb-1 sm:mb-2 leading-tight">{category.name}</h3>
                  <p className="text-gray-400 font-bold text-[10px] sm:text-xs uppercase tracking-widest flex items-center justify-between">
                    <span>{category.count} Products</span>
                    <ChevronRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all hidden sm:block" size={16} />
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
