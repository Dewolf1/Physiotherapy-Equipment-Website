import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import { useState } from 'react';

// Embedded Google Map for Hospimedico, Old Mustafabad, Delhi
function GoogleMap() {
  return (
    <div className="w-full h-72 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      <iframe
        title="Hospimedico Location"
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'invert(90%) hue-rotate(200deg) saturate(0.6) brightness(0.8)' }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.043!2d77.2789!3d28.7041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sOld%20Mustafabad%2C%20Delhi%2C%20110094!5e0!3m2!1sen!2sin!4v1234567890"
      />
    </div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    await new Promise(resolve => setTimeout(resolve, 1800));
    setIsSending(false);
    toast.success('Inquiry Sent Successfully!', {
      description: 'Our team at Hospimedico will respond within 24 hours.',
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-royal-600/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-navy-950 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy-950 mb-6">
            Partner with <span className="text-royal-600">Hospimedico</span>
          </h2>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
            Based in Delhi. Available worldwide. Our experts are ready to help you find the right equipment for your clinic or hospital.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info + Map */}
          <div className="lg:col-span-1 space-y-5">
            {[
              { icon: MapPin, title: 'Our Office', detail: 'E-247, Street No. 24, Old Mustafabad, Delhi-110094' },
              { icon: Phone, title: 'Call / WhatsApp', detail: '+91 82878 45289  |  +91 99100 08540' },
              { icon: Mail, title: 'Email Us', detail: 'hospimedicoo@gmail.com' },
              { icon: Clock, title: 'Business Hours', detail: 'Mon–Sat: 9:00 AM – 6:00 PM IST' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg flex gap-4 items-start"
              >
                <div className="w-11 h-11 rounded-xl bg-royal-600/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-royal-600" size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{item.title}</h4>
                  <p className="text-navy-950 font-bold text-sm leading-snug">{item.detail}</p>
                </div>
              </motion.div>
            ))}

            <GoogleMap />
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-navy-950 rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-royal-600/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-2">Send an Inquiry</h3>
              <p className="text-gray-400 text-sm mb-8">Fill in your details and we'll get back to you with a competitive quote.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Full Name *</label>
                    <input type="text" required placeholder="Dr. Rajesh Kumar"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:border-royal-600 focus:bg-white/10 transition-all outline-none text-sm placeholder-gray-600"
                      value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Email Address *</label>
                    <input type="email" required placeholder="doctor@clinic.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:border-royal-600 focus:bg-white/10 transition-all outline-none text-sm placeholder-gray-600"
                      value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Phone / WhatsApp *</label>
                    <input type="tel" required placeholder="+91 98XXX XXXXX"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:border-royal-600 focus:bg-white/10 transition-all outline-none text-sm placeholder-gray-600"
                      value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Subject *</label>
                    <input type="text" required placeholder="Product Enquiry / Quotation"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:border-royal-600 focus:bg-white/10 transition-all outline-none text-sm placeholder-gray-600"
                      value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-2">Message *</label>
                  <textarea rows={5} required placeholder="Tell us about your requirements — equipment needed, clinic type, quantity..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:border-royal-600 focus:bg-white/10 transition-all outline-none resize-none text-sm placeholder-gray-600"
                    value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>

                <button type="submit" disabled={isSending}
                  className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl group ${
                    isSending ? 'bg-gray-700 cursor-not-allowed' : 'bg-royal-600 hover:bg-blue-700 shadow-royal-600/30'
                  }`}
                >
                  {isSending ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                      <Send size={18} />
                    </motion.div>
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
