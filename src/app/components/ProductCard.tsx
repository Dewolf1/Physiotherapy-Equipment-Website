import { ShoppingCart, FileText, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  buyType?: 'amazon' | 'quote';
  category: string;
}

export function ProductCard({
  id,
  name,
  description,
  price,
  image,
  rating,
  buyType = 'quote',
  category
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-royal-600/10 transition-all duration-500"
    >
      <Link to={`/products/${id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-navy-950 shadow-sm">
            {category}
          </div>
          
          <div className="absolute top-4 right-4 bg-navy-950 text-white px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-xl">
            {buyType === 'amazon' ? (
              <><ShoppingCart size={12} className="text-[#FF9900]" /> Amazon</>
            ) : (
              <><FileText size={12} className="text-gold-accent" /> Quote</>
            )}
          </div>
        </div>
      </Link>

      <div className="p-8">
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < rating ? 'fill-gold-accent text-gold-accent' : 'text-gray-200'}
            />
          ))}
          <span className="text-[10px] font-bold text-gray-400 ml-2 uppercase tracking-tighter">({rating}.0 Rating)</span>
        </div>

        <Link to={`/products/${id}`}>
          <h3 className="font-black text-xl text-navy-950 mb-3 group-hover:text-royal-600 transition-colors line-clamp-1">{name}</h3>
        </Link>
        
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Starting at</span>
            <span className="text-xl font-black text-navy-950">{price}</span>
          </div>
          
          <Link
            to={`/products/${id}`}
            className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-navy-950 hover:bg-royal-600 hover:text-white transition-all shadow-sm"
          >
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
