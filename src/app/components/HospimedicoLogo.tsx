export function HospimedicoLogo({ className = "w-32", isDark = false }: { className?: string, isDark?: boolean }) {
  const textColor = isDark ? '#ffffff' : '#0096D6';
  
  return (
    <svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 'H' Left Pillar (Black) */}
      <path d="M75 35 L60 115 L80 115 L95 35 Z" fill="#1F2225" />
      
      {/* 'H' Top Blue / Crossbar */}
      <path d="M125 35 L110 55 L105 55 L120 35 Z" fill="#0096D6" />
      <path d="M50 65 L115 65 C135 65 140 75 135 90 L125 115 L145 115 L155 85 C160 60 145 50 120 50 L55 50 Z" fill="#0096D6" />
      
      {/* 'H' Bottom Blue Part */}
      <path d="M90 90 L85 115 L105 115 L110 90 Z" fill="#0096D6" />

      {/* 'M' Parts */}
      <path d="M150 65 L140 115 L160 115 L170 65 Z" fill="#1F2225" />
      <path d="M170 65 L160 115 L180 115 L190 65 Z" fill="#0096D6" />

      {/* Text */}
      <text x="120" y="135" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="24" fill={textColor} textAnchor="middle" letterSpacing="4">
        HOSPIMEDICO
      </text>
    </svg>
  );
}
