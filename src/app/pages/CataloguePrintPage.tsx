import { useEffect } from 'react';
import { products } from '../../data/products';
import { HospimedicoLogo } from '../components/HospimedicoLogo';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function CataloguePrintPage() {
  useEffect(() => {
    // Automatically trigger print dialog when this page loads
    // We add a small delay to ensure images have started loading
    const timer = setTimeout(() => {
      window.print();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="bg-white text-black min-h-screen p-8 max-w-5xl mx-auto print:p-0 print:max-w-full print:m-0">
      {/* Cover Page Header */}
      <div className="border-b-4 border-royal-600 pb-8 mb-12 flex justify-between items-end print:break-after-avoid">
        <div>
          <HospimedicoLogo className="w-48 h-auto mb-6" isDark={true} />
          <h1 className="text-4xl font-black text-navy-950 uppercase tracking-widest mb-2">Product Catalogue</h1>
          <p className="text-gray-500 font-bold">Premium Physiotherapy & Rehabilitation Equipment</p>
        </div>
        <div className="text-right text-sm text-gray-600 space-y-1">
          <p className="font-bold text-navy-950">Hospimedico</p>
          <p className="flex items-center justify-end gap-2"><MapPin size={12}/> E-247, Old Mustafabad, Delhi-94</p>
          <p className="flex items-center justify-end gap-2"><Phone size={12}/> +91 82878 45289</p>
          <p className="flex items-center justify-end gap-2"><Mail size={12}/> hospimedicoo@gmail.com</p>
        </div>
      </div>

      {/* Catalogue Content */}
      <div className="space-y-16">
        {categories.map(category => (
          <div key={category} className="print:break-inside-avoid print:mb-8">
            <h2 className="text-2xl font-black text-navy-950 bg-gray-100 p-4 rounded-xl mb-6 uppercase tracking-wider border-l-4 border-royal-600">
              {category}
            </h2>
            
            <div className="grid grid-cols-2 gap-8 print:gap-6">
              {products.filter(p => p.category === category).map(product => (
                <div key={product.id} className="border border-gray-200 rounded-2xl p-6 flex flex-col print:break-inside-avoid">
                  <div className="flex gap-4 mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-24 h-24 object-cover rounded-xl border border-gray-100"
                    />
                    <div>
                      <h3 className="font-bold text-lg text-navy-950 leading-tight mb-1">{product.name}</h3>
                      <p className="text-royal-600 font-black">{product.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
                      {product.features.slice(0, 3).map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-200 text-center text-sm text-gray-500 print:break-before-auto">
        <p className="font-bold mb-1">Hospimedico — Healthcare Engineering Excellence</p>
        <p>Visit www.hospimedico.com for our complete range and detailed specifications.</p>
      </div>
    </div>
  );
}
