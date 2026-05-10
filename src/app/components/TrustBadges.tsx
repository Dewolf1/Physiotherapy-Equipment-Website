import { ShieldCheck, Truck, Clock, Headphones, Activity, Heart, Star, Award, CheckCircle } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, title: 'ISO 13485 Certified', desc: 'Medical Grade' },
  { icon: Award, title: 'CE Marked', desc: 'European Standard' },
  { icon: Heart, title: 'FDA Compliant', desc: 'Global Safety' },
  { icon: Activity, title: 'WHO GMP', desc: 'Quality Manufacturing' },
  { icon: CheckCircle, title: 'AERB Approved', desc: 'Radiation Safety' },
  { icon: Star, title: 'Premium Build', desc: 'Export Quality' },
  { icon: Truck, title: 'Global Export', desc: 'Worldwide Network' },
  { icon: Headphones, title: '24/7 Support', desc: 'Technical Assistance' },
];

export function TrustBadges() {
  // Duplicate array to create seamless loop
  const duplicatedBadges = [...badges, ...badges];

  return (
    <div className="bg-navy-950 py-12 border-y border-white/10 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-navy-950 to-transparent z-10" />
      
      {/* Row 1 */}
      <div className="flex w-[200%] animate-marquee mb-8">
        {duplicatedBadges.map((badge, index) => (
          <div key={`row1-${index}`} className="flex flex-col items-center justify-center min-w-[200px] px-8 border-r border-white/5">
            <div className="flex items-center gap-3 text-white/80">
              <badge.icon className="text-royal-600" size={32} />
              <div className="text-left">
                <div className="font-bold whitespace-nowrap">{badge.title}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">{badge.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 (Reverse) */}
      <div className="flex w-[200%] animate-marquee-reverse">
        {duplicatedBadges.reverse().map((badge, index) => (
          <div key={`row2-${index}`} className="flex flex-col items-center justify-center min-w-[200px] px-8 border-r border-white/5">
            <div className="flex items-center gap-3 text-white/80">
              <badge.icon className="text-ice-blue" size={32} />
              <div className="text-left">
                <div className="font-bold whitespace-nowrap">{badge.title}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">{badge.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
