import { About } from '../components/About';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <div className="bg-navy-950 pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-royal-600/20 blur-[120px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-sapphire-800/20 blur-[100px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-royal-600/10 border border-royal-600/30 px-4 py-1 rounded-full text-royal-600 text-[10px] font-black uppercase tracking-widest mb-6">
            About Our Company
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Pioneering <span className="text-royal-600">Rehabilitation</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            Discover our journey, mission, and the comprehensive manufacturing standards that make Hospimedico a globally trusted brand.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <About />

      {/* Footer CTA */}
      <div className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-navy-950 mb-4">Ready to Partner With Us?</h2>
          <p className="text-gray-500 font-medium mb-8">
            Whether you are equipping a new hospital wing or upgrading a single clinic, our team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest bg-navy-950 text-white hover:bg-royal-600 transition-all shadow-xl"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest bg-white text-navy-950 border border-gray-200 hover:border-royal-600 hover:text-royal-600 transition-all shadow-xl flex items-center justify-center gap-2 group"
            >
              Contact Team
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
