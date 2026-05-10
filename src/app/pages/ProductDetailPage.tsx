import { useParams, Link } from 'react-router';
import { products } from '../../data/products';
import { useState } from 'react';
import { ShoppingCart, FileText, CheckCircle, ArrowLeft, Star, Package, Shield, Globe, Send } from 'lucide-react';
import { toast } from 'sonner';
import { ProductCard } from '../components/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isSending, setIsSending] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-navy-900 mb-4">Product Not Found</h2>
        <Link to="/products" className="text-royal-600 font-medium flex items-center gap-2 hover:underline">
          <ArrowLeft size={20} /> Back to Products
        </Link>
      </div>
    );
  }

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate an API call for "silent" sending
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSending(false);
    toast.success('Quotation Request Sent!', {
      description: `Your request for ${product.name} has been received.`,
    });
    setShowQuoteForm(false);
  };

  return (
    <div className="bg-white pb-20 pt-28">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-royal-600">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-royal-600">Products</Link>
          <span>/</span>
          <span className="text-navy-900 font-medium truncate">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === idx ? 'border-royal-600' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="inline-block bg-royal-600/10 text-royal-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              {product.category}
            </div>
            <h1 className="text-4xl font-bold text-navy-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < product.rating ? 'fill-gold-accent text-gold-accent' : 'text-gray-300'} />
                ))}
              </div>
              <span className="text-gray-500 text-sm">({product.reviewCount} Professional Reviews)</span>
            </div>

            <div className="text-3xl font-bold text-royal-600 mb-6">
              {product.price}
              {product.buyType === 'amazon' && <span className="text-gray-400 text-lg font-normal ml-2">USD</span>}
            </div>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {product.longDescription}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50 p-4 rounded-xl">
                <Shield className="text-royal-600" size={20} />
                <span>2-Year Warranty</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 bg-gray-50 p-4 rounded-xl">
                <Globe className="text-royal-600" size={20} />
                <span>Worldwide Delivery</span>
              </div>
            </div>

            {product.buyType === 'amazon' ? (
              <a
                href={product.amazonLink!}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FF9900] text-navy-950 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#F28B00] transition-all shadow-xl shadow-orange-500/20"
              >
                <ShoppingCart size={24} />
                Buy with Amazon
              </a>
            ) : (
              <button
                onClick={() => setShowQuoteForm(true)}
                className="w-full bg-royal-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-royal-700 transition-all shadow-xl shadow-royal-600/20"
              >
                <FileText size={24} />
                Request Custom Quotation
              </button>
            )}
          </div>
        </div>

        {/* Technical Specs */}
        <div className="grid md:grid-cols-2 gap-12 border-t border-gray-200 pt-16">
          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2">
              <CheckCircle className="text-royal-600" size={24} /> Key Features
            </h3>
            <ul className="space-y-4">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-royal-600 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2">
              <Package className="text-royal-600" size={24} /> Technical Specifications
            </h3>
            <div className="bg-gray-50 rounded-2xl p-6">
              <dl className="space-y-4">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="flex justify-between border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                    <dt className="text-gray-500 font-medium">{key}</dt>
                    <dd className="text-navy-900 font-bold">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-xl p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-navy-900">Get a Professional Quote</h3>
              <button onClick={() => setShowQuoteForm(false)} className="text-gray-400 hover:text-navy-900">
                <ArrowLeft className="rotate-90" />
              </button>
            </div>
            
            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input required name="name" type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-royal-600 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input required name="email" type="email" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-royal-600 focus:outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input required name="phone" type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-royal-600 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company/Clinic</label>
                  <input name="company" type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-royal-600 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quantity Needed</label>
                <input required name="quantity" type="number" min="1" defaultValue="1" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-royal-600 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Requirements</label>
                <textarea name="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-royal-600 focus:outline-none" placeholder="Tell us more about your needs..."></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSending}
                className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                  isSending ? 'bg-gray-700 cursor-not-allowed' : 'bg-royal-600 text-white hover:bg-royal-700'
                }`}
              >
                {isSending ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Send size={18} />
                  </motion.div>
                ) : 'Send Request'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Related Products */}
      {products.filter(p => p.category === product.category && p.id !== product.id).length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mt-24 border-t border-gray-200 pt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-navy-950">You May Also Need</h2>
            <Link to="/products" className="text-royal-600 font-bold hover:text-navy-950 transition-colors">
              View All {product.category}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <ProductCard key={relatedProduct.id} {...relatedProduct} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
