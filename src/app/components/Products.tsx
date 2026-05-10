import { ProductCard } from './ProductCard';
import { products } from '../../data/products';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

interface ProductsProps {
  isFeatured?: boolean;
}

export function Products({ isFeatured = false }: ProductsProps) {
  const displayProducts = isFeatured ? products.slice(0, 6) : products;

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-royal-600/5 blur-[80px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-sapphire-800/5 blur-[80px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block bg-royal-600/10 text-royal-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Premium Selection
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-navy-950 mb-6">
              Featured <span className="text-royal-600">Innovation</span>
            </h2>
            <p className="text-lg text-gray-500 font-medium">
              Explore our most sought-after medical equipment, designed for clinicians who refuse to compromise on quality and precision.
            </p>
          </div>
          
          {isFeatured && (
            <Link 
              to="/products" 
              className="flex items-center gap-3 text-navy-950 font-black text-sm uppercase tracking-widest hover:text-royal-600 transition-all group"
            >
              View Full Collection
              <div className="w-10 h-10 rounded-full border-2 border-navy-950 flex items-center justify-center group-hover:bg-navy-950 group-hover:text-white transition-all">
                <ArrowRight size={18} />
              </div>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
