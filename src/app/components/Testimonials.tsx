import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const testimonials = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Clinical Director, SportMed NY',
    text: 'The Pro-3000 treadmill has revolutionized our gait analysis protocol. The precision of the sensors is unmatched in the industry.',
    image: 'https://i.pravatar.cc/150?u=12'
  },
  {
    name: 'Dr. James Wilson',
    role: 'Head of Physiotherapy, Central Hospital',
    text: 'PhysioEquip is our trusted partner for over a decade. Their support and equipment quality are truly world-class.',
    image: 'https://i.pravatar.cc/150?u=15'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Private Clinic Owner',
    text: 'Switching to their therapeutic ultrasound systems was the best decision for our clinic. Patient recovery times have significantly improved.',
    image: 'https://i.pravatar.cc/150?u=22'
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-royal-600/20 text-royal-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-royal-600/30">
            Professional Endorsements
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Trusted by the <span className="text-royal-600">Experts</span>
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((t, idx) => (
                <div key={idx} className="flex-none w-full md:w-1/2 lg:w-1/3 pl-4 h-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] relative group hover:bg-white/10 transition-all duration-500 h-full flex flex-col"
                  >
                    <Quote className="text-royal-600 mb-6 group-hover:rotate-12 transition-transform shrink-0" size={40} />
                    
                    <div className="flex items-center gap-1 mb-6 shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-gold-accent text-gold-accent" />
                      ))}
                    </div>
                    
                    <p className="text-gray-300 text-lg font-medium leading-relaxed mb-8 italic flex-grow">
                      "{t.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 border-t border-white/10 pt-8 shrink-0">
                      <img src={t.image} alt="" className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all" />
                      <div>
                        <h4 className="text-white font-black text-sm uppercase tracking-widest">{t.name}</h4>
                        <p className="text-royal-600 text-[10px] font-black uppercase tracking-widest">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button 
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-royal-600 hover:border-royal-600 transition-all shadow-xl" 
              onClick={scrollPrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-royal-600 hover:border-royal-600 transition-all shadow-xl" 
              onClick={scrollNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
