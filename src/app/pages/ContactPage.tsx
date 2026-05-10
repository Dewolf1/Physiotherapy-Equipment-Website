import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { useState } from 'react';
import { Link } from 'react-router';

function GoogleMapLarge() {
  return (
    <div className="w-full h-96 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
      <iframe
        title="Hospimedico Delhi Office Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://maps.google.com/maps?q=E-247,+Old+Mustafabad,+Delhi-110094&t=&z=15&ie=UTF8&iwloc=&output=embed"
      />
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', subject: '', quantity: '1', message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSending(false);
    toast.success('Message Sent!', {
      description: 'Hospimedico team will contact you within 24 business hours.',
    });
    setFormData({ name: '', email: '', phone: '', company: '', subject: '', quantity: '1', message: '' });
  };

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
            Contact Hospimedico
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Let's Equip Your <span className="text-royal-600">Clinic</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            Reach out to our Delhi-based team for product inquiries, bulk orders, custom requirements, or technical support.
          </p>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: MapPin, label: 'Address', value: 'E-247, Old Mustafabad, Delhi-110094', href: 'https://maps.google.com' },
            { icon: Phone, label: 'Primary', value: '+91 82878 45289', href: 'tel:+918287845289' },
            { icon: Phone, label: 'Alternate', value: '+91 99100 08540', href: 'tel:+919910008540' },
            { icon: Mail, label: 'Email', value: 'hospimedicoo@gmail.com', href: 'mailto:hospimedicoo@gmail.com' },
          ].map((card, idx) => (
            <motion.a
              key={idx}
              href={card.href}
              target={card.icon === MapPin ? '_blank' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-xl border border-gray-100 hover:shadow-2xl hover:border-royal-600/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-royal-600/10 flex items-center justify-center mb-3 group-hover:bg-royal-600 transition-colors">
                <card.icon className="text-royal-600 group-hover:text-white transition-colors" size={18} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{card.label}</p>
              <p className="text-navy-950 font-bold text-sm leading-snug">{card.value}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Main Content: Form + Map */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy-950 rounded-[2.5rem] p-10 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-navy-950/20"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-royal-600/15 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-2">Send Us a Message</h2>
              <p className="text-gray-400 text-sm mb-8">We respond to all inquiries within 24 business hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2 mb-1 block">Full Name *</label>
                    <input type="text" required placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-royal-600 outline-none text-sm placeholder-gray-600 transition-colors"
                      value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2 mb-1 block">Phone / WhatsApp *</label>
                    <input type="tel" required placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-royal-600 outline-none text-sm placeholder-gray-600 transition-colors"
                      value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2 mb-1 block">Email *</label>
                    <input type="email" required placeholder="you@clinic.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-royal-600 outline-none text-sm placeholder-gray-600 transition-colors"
                      value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2 mb-1 block">Hospital / Clinic</label>
                    <input type="text" placeholder="Your Organization"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-royal-600 outline-none text-sm placeholder-gray-600 transition-colors"
                      value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2 mb-1 block">Subject *</label>
                    <input type="text" required placeholder="Product / Quote / Support"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-royal-600 outline-none text-sm placeholder-gray-600 transition-colors"
                      value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2 mb-1 block">Quantity</label>
                    <input type="number" min="1" placeholder="1"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-royal-600 outline-none text-sm placeholder-gray-600 transition-colors"
                      value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2 mb-1 block">Message *</label>
                  <textarea rows={4} required placeholder="Describe your requirements in detail..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-royal-600 outline-none text-sm placeholder-gray-600 resize-none transition-colors"
                    value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>

                <button type="submit" disabled={isSending}
                  className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl group ${
                    isSending ? 'bg-gray-700 cursor-not-allowed' : 'bg-royal-600 hover:bg-blue-700 shadow-royal-600/30'
                  }`}
                >
                  {isSending ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                      <Send size={18} />
                    </motion.div>
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Map + Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-black text-navy-950 mb-2">Visit Our Office</h2>
              <p className="text-gray-500 font-medium">
                E-247, Street No. 24, Old Mustafabad, Delhi-110094, India
              </p>
            </div>

            <GoogleMapLarge />

            <div className="bg-gray-50 rounded-3xl p-8 space-y-4 border border-gray-100">
              <h3 className="font-black text-navy-950 text-lg">Business Hours</h3>
              {[
                { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM IST' },
                { day: 'Saturday', hours: '9:00 AM – 4:00 PM IST' },
                { day: 'Sunday', hours: 'Closed' },
              ].map(row => (
                <div key={row.day} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                  <span className="text-gray-600 font-bold text-sm">{row.day}</span>
                  <span className={`font-black text-sm ${row.hours === 'Closed' ? 'text-red-500' : 'text-navy-950'}`}>{row.hours}</span>
                </div>
              ))}
            </div>

            <div className="bg-royal-600 rounded-3xl p-8 text-white">
              <h3 className="font-black text-xl mb-2">Need Immediate Assistance?</h3>
              <p className="text-blue-100 text-sm mb-5">WhatsApp us directly for the fastest response on quotes and product queries.</p>
              <a
                href="https://wa.me/918287845289?text=Hi%2C%20I%27m%20interested%20in%20Hospimedico%20physiotherapy%20equipment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-navy-950 px-6 py-3 rounded-2xl font-black text-sm hover:bg-gray-100 transition-colors"
              >
                Chat on WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Company Overview Strip */}
      <div className="bg-gray-50 py-14 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-3">Hospimedico</p>
          <p className="text-2xl font-black text-navy-950 max-w-3xl mx-auto mb-4">
            Manufacturers • Importers • Exporters
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm font-medium leading-relaxed">
            Hospital Goods · Medical Goods · Customization · Equipment — Physiotherapy, Occupational Therapy &amp; Rehabilitation Series
          </p>
          <div className="mt-6">
            <Link to="/products" className="inline-flex items-center gap-2 text-royal-600 font-black text-sm uppercase tracking-widest hover:text-navy-950 transition-colors">
              Browse Our Catalogue <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
