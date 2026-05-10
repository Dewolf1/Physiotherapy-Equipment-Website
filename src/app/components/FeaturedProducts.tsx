import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../../data/products';
import { ProductCard } from './ProductCard';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('All');
  
  // Get main categories for tabs
  const categories = ['All', 'Electrotherapy Equipment', 'Physiotherapy & Rehabilitation Furniture', 'Hydrotherapy & Hot/Cold Therapy'];

  // Filter products based on tab
  const filteredProducts = activeTab === 'All' 
    ? products.slice(0, 6) 
    : products.filter(p => p.category === activeTab).slice(0, 6);

  return (
    <section id="featured-products" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block bg-royal-600/10 text-royal-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              Featured Collection
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-navy-950">
              Top Rated <span className="text-royal-600">Equipment</span>
            </h2>
          </div>
          <Link 
            to="/products"
            className="flex items-center gap-2 text-royal-600 font-bold hover:text-navy-950 transition-colors group whitespace-nowrap"
          >
            View Full Catalogue
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all ${
                activeTab === cat 
                  ? 'bg-navy-950 text-white shadow-xl shadow-navy-950/20' 
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-navy-950'
              }`}
            >
              {cat.replace(/Equipment|Furniture|Tools/g, '').trim()}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
