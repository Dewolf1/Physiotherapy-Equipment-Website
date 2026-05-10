import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do you offer bulk or institutional discounts?",
    answer: "Yes, we provide special pricing and customized packages for hospitals, clinics, and educational institutions ordering in bulk. Please request a custom quotation through our contact page or directly from the product page."
  },
  {
    question: "What is the standard delivery timeline?",
    answer: "For orders within Delhi NCR, delivery typically takes 2-3 business days. For other parts of India, it takes 5-7 business days. International export orders depend on the destination and shipping method, usually ranging from 2-4 weeks."
  },
  {
    question: "Do you offer installation and training for the equipment?",
    answer: "Absolutely. We provide comprehensive installation services and staff training for all complex electrotherapy and rehabilitation equipment to ensure your team can operate them safely and effectively."
  },
  {
    question: "What kind of warranty is provided?",
    answer: "All our medical-grade equipment comes with a standard 1-year or 2-year manufacturer's warranty covering parts and labor. We also offer extended warranty and annual maintenance contracts (AMC)."
  },
  {
    question: "Can equipment be customized to our clinic's specifications?",
    answer: "Yes, certain products like treatment couches, traction tables, and hydrotherapy tanks can be customized in terms of dimensions, upholstery colors, and specific add-ons. Contact our team to discuss your exact requirements."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-royal-600/10 text-royal-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Common Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy-950 mb-6">
            Frequently Asked <span className="text-royal-600">Questions</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Everything you need to know about our products, ordering process, and post-sales support.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-navy-950 pr-8">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === index ? 'bg-royal-600 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-gray-500 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
