export function HospimedicoLogo({ className = "w-40", isDark = false }: { className?: string, isDark?: boolean }) {
  const wordmarkColor = isDark ? '#ffffff' : '#0f172a';
  const taglineColor = isDark ? 'rgba(255,255,255,0.55)' : 'rgba(15,23,42,0.45)';

  return (
    // Horizontal lockup: icon mark | wordmark
    // ViewBox: 320 wide × 72 tall — stays short, never overlaps content
    <svg viewBox="0 0 320 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>

      {/* ── Icon mark (left column, 72×72) ── */}

      {/* 'H' Left Pillar */}
      <path d="M17 10 L8 62 L21 62 L30 10 Z" fill="#1F2225" />

      {/* 'H' Crossbar + right arm (blue) */}
      <path d="M50 10 L43 22 L40 22 L47 10 Z" fill="#0096D6" />
      <path d="M5 32 L44 32 C56 32 59 38 56 48 L49 62 L62 62 L69 44 C72 28 62 22 44 22 L12 22 Z" fill="#0096D6" />

      {/* 'H' Bottom blue fill */}
      <path d="M25 48 L22 62 L35 62 L38 48 Z" fill="#0096D6" />

      {/* 'M' dark pillar */}
      <path d="M58 32 L52 62 L65 62 L71 32 Z" fill="#1F2225" />
      {/* 'M' blue pillar */}
      <path d="M71 32 L65 62 L78 62 L84 32 Z" fill="#0096D6" />

      {/* ── Divider line ── */}
      <line x1="97" y1="14" x2="97" y2="58" stroke="#0096D6" strokeWidth="1.5" strokeOpacity="0.4" />

      {/* ── Wordmark (right of divider, x=108) ── */}
      {/* Main company name */}
      <text
        x="108"
        y="40"
        fontFamily="'Arial Black', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="22"
        fill={wordmarkColor}
        letterSpacing="2.5"
      >
        HOSPIMEDICO
      </text>

      {/* Tagline / sub-label */}
      <text
        x="110"
        y="58"
        fontFamily="'Arial', sans-serif"
        fontWeight="700"
        fontSize="10.5"
        fill="#0096D6"
        letterSpacing="3"
      >
        GLOBALLY TRUSTED
      </text>

    </svg>
  );
}
