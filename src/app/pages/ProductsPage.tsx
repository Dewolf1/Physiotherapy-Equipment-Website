import { useState, useEffect } from 'react';
import { products } from '../../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, Filter } from 'lucide-react';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-navy-900 mb-4 text-center">Our Premium Collection</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover our full range of medical-grade physiotherapy equipment designed for clinical excellence and patient recovery.
          </p>
        </div>

        <div className="sticky top-[80px] md:top-[88px] z-40 bg-gray-50/95 backdrop-blur-xl py-4 -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-gray-200/80 mb-8 transition-all shadow-sm">
          {/* Always stacked: search on top, categories below */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-royal-600 focus:outline-none bg-white shadow-sm text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Mobile: single-row horizontal scroll | Desktop: full-width flex-wrap */}
            <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-x-visible hide-scrollbar gap-2 items-center pb-1 md:pb-0">
              <Filter size={16} className="text-gray-400 hidden md:block flex-shrink-0 mr-1" />
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap shrink-0 ${
                    selectedCategory === category
                      ? 'bg-royal-600 text-white shadow-md shadow-royal-600/20'
                      : 'bg-white text-gray-500 border border-gray-200 hover:border-royal-600 hover:text-royal-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-bold text-navy-950">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
          </h2>
          <div className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-500 shadow-sm">
            Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
