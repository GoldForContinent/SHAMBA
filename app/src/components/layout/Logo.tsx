import { useId } from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'icon';
  light?: boolean;
  className?: string;
}

export default function Logo({ variant = 'compact', light = false, className = '' }: LogoProps) {
  const uid = useId().replace(/:/g, '');

  const textColor = light ? '#FFFFFF' : '#1F3D1F';
  const taglineColor = light ? 'rgba(255,255,255,0.6)' : '#5E6B5E';

  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="AgroWorldHub"
      >
        <defs>
          <linearGradient id={`${uid}leafGrad`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#37B24D" />
            <stop offset="100%" stopColor="#1E7E34" />
          </linearGradient>
          <linearGradient id={`${uid}goldGrad`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F8D24A" />
            <stop offset="100%" stopColor="#C99A16" />
          </linearGradient>
          <linearGradient id={`${uid}earthGrad`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8C6239" />
            <stop offset="100%" stopColor="#5A3B1F" />
          </linearGradient>
        </defs>

        <circle cx="80" cy="80" r="72" fill="white" stroke={`url(#${uid}goldGrad)`} strokeWidth="5" />
        <circle cx="80" cy="80" r="46" fill="#F5FBF5" stroke="#2E7D32" strokeWidth="2" />
        <ellipse cx="80" cy="80" rx="16" ry="46" stroke="#8BC34A" strokeWidth="1.5" />
        <ellipse cx="80" cy="80" rx="32" ry="46" stroke="#8BC34A" strokeWidth="1.5" />
        <path d="M34 80H126" stroke="#8BC34A" strokeWidth="1.5" />
        <path d="M40 63C52 68 108 68 120 63" stroke="#8BC34A" strokeWidth="1.5" fill="none" />
        <path d="M40 97C52 92 108 92 120 97" stroke="#8BC34A" strokeWidth="1.5" fill="none" />

        <g transform="translate(80 98)">
          <path d="M0 0V36" stroke={`url(#${uid}earthGrad)`} strokeWidth="3" strokeLinecap="round" />
          <path d="M0 4C-10 0 -13 -8 -8 -14C-4 -10 -1 -4 0 4Z" fill={`url(#${uid}goldGrad)`} />
          <path d="M0 12C-10 8 -13 0 -8 -6C-4 -2 -1 4 0 12Z" fill={`url(#${uid}goldGrad)`} />
          <path d="M0 20C-10 16 -13 8 -8 2C-4 6 -1 12 0 20Z" fill={`url(#${uid}goldGrad)`} />
          <path d="M0 4C10 0 13 -8 8 -14C4 -10 1 -4 0 4Z" fill={`url(#${uid}goldGrad)`} />
          <path d="M0 12C10 8 13 0 8 -6C4 -2 1 4 0 12Z" fill={`url(#${uid}goldGrad)`} />
          <path d="M0 20C10 16 13 8 8 2C4 6 1 12 0 20Z" fill={`url(#${uid}goldGrad)`} />
        </g>

        <path d="M80 42C104 46 118 66 112 90C91 87 76 70 80 42Z" fill={`url(#${uid}leafGrad)`} />
        <path d="M85 47C92 58 94 70 92 83" stroke="#E9FFE9" strokeWidth="2" fill="none" />
      </svg>
    );
  }

  if (variant === 'compact') {
    return (
      <svg
        viewBox="0 0 640 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="AgroWorldHub"
      >
        <defs>
          <linearGradient id={`${uid}leafGrad`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#37B24D" />
            <stop offset="100%" stopColor="#1E7E34" />
          </linearGradient>
          <linearGradient id={`${uid}goldGrad`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F8D24A" />
            <stop offset="100%" stopColor="#C99A16" />
          </linearGradient>
          <linearGradient id={`${uid}earthGrad`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8C6239" />
            <stop offset="100%" stopColor="#5A3B1F" />
          </linearGradient>
        </defs>

        {/* Symbol */}
        <g transform="translate(10,5)">
          <circle cx="55" cy="55" r="50" fill="white" stroke={`url(#${uid}goldGrad)`} strokeWidth="4" />
          <circle cx="55" cy="55" r="32" fill="#F5FBF5" stroke="#2E7D32" strokeWidth="1.5" />
          <ellipse cx="55" cy="55" rx="11" ry="32" stroke="#8BC34A" strokeWidth="1.2" />
          <ellipse cx="55" cy="55" rx="22" ry="32" stroke="#8BC34A" strokeWidth="1.2" />
          <path d="M23 55H87" stroke="#8BC34A" strokeWidth="1.2" />
          <path d="M27 44C35 47 75 47 83 44" stroke="#8BC34A" strokeWidth="1.2" fill="none" />
          <path d="M27 66C35 63 75 63 83 66" stroke="#8BC34A" strokeWidth="1.2" fill="none" />

          <g transform="translate(55 68)">
            <path d="M0 0V26" stroke={`url(#${uid}earthGrad)`} strokeWidth="2.5" strokeLinecap="round" />
            <path d="M0 3C-7 0 -9 -6 -5 -10C-3 -7 -1 -3 0 3Z" fill={`url(#${uid}goldGrad)`} />
            <path d="M0 8C-7 5 -9 0 -5 -4C-3 -1 -1 3 0 8Z" fill={`url(#${uid}goldGrad)`} />
            <path d="M0 13C-7 10 -9 5 -5 1C-3 3 -1 7 0 13Z" fill={`url(#${uid}goldGrad)`} />
            <path d="M0 3C7 0 9 -6 5 -10C3 -7 1 -3 0 3Z" fill={`url(#${uid}goldGrad)`} />
            <path d="M0 8C7 5 9 0 5 -4C3 -1 1 3 0 8Z" fill={`url(#${uid}goldGrad)`} />
            <path d="M0 13C7 10 9 5 5 1C3 3 1 7 0 13Z" fill={`url(#${uid}goldGrad)`} />
          </g>

          <path d="M55 30C72 33 82 46 78 62C63 60 52 49 55 30Z" fill={`url(#${uid}leafGrad)`} />
          <path d="M59 34C64 42 65 50 64 58" stroke="#E9FFE9" strokeWidth="1.5" fill="none" />
        </g>

        {/* Brand name */}
        <text
          x="130"
          y="48"
          fontSize="42"
          fontFamily="Montserrat, Poppins, Arial, sans-serif"
          fontWeight="700"
          fill={textColor}
          letterSpacing="0.5"
        >
          AgroWorld
        </text>
        <text
          x="383"
          y="48"
          fontSize="42"
          fontFamily="Montserrat, Poppins, Arial, sans-serif"
          fontWeight="700"
          fill="#C99A16"
        >
          Hub
        </text>

        {/* Tagline */}
        <text
          x="132"
          y="78"
          fontSize="11"
          fontFamily="Inter, Arial, sans-serif"
          letterSpacing="2.5"
          fill={taglineColor}
        >
          CONNECTING FARMERS  •  MARKETS  •  OPPORTUNITIES
        </text>
      </svg>
    );
  }

  // Full variant — symbol + text + tagline + accent line
  return (
    <svg
      viewBox="0 0 760 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AgroWorldHub"
    >
      <defs>
        <linearGradient id={`${uid}leafGrad`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#37B24D" />
          <stop offset="100%" stopColor="#1E7E34" />
        </linearGradient>
        <linearGradient id={`${uid}goldGrad`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F8D24A" />
          <stop offset="100%" stopColor="#C99A16" />
        </linearGradient>
        <linearGradient id={`${uid}earthGrad`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8C6239" />
          <stop offset="100%" stopColor="#5A3B1F" />
        </linearGradient>
      </defs>

      {/* Symbol */}
      <g transform="translate(10,10)">
        <circle cx="70" cy="70" r="62" fill="white" stroke={`url(#${uid}goldGrad)`} strokeWidth="4.5" />
        <circle cx="70" cy="70" r="40" fill="#F5FBF5" stroke="#2E7D32" strokeWidth="1.5" />
        <ellipse cx="70" cy="70" rx="14" ry="40" stroke="#8BC34A" strokeWidth="1.2" />
        <ellipse cx="70" cy="70" rx="28" ry="40" stroke="#8BC34A" strokeWidth="1.2" />
        <path d="M30 70H110" stroke="#8BC34A" strokeWidth="1.2" />
        <path d="M34 56C46 60 94 60 106 56" stroke="#8BC34A" strokeWidth="1.2" fill="none" />
        <path d="M34 84C46 80 94 80 106 84" stroke="#8BC34A" strokeWidth="1.2" fill="none" />

        <g transform="translate(70 86)">
          <path d="M0 0V32" stroke={`url(#${uid}earthGrad)`} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M0 4C-9 0 -12 -7 -7 -12C-4 -8 -1 -3 0 4Z" fill={`url(#${uid}goldGrad)`} />
          <path d="M0 11C-9 7 -12 0 -7 -5C-3 -1 -1 4 0 11Z" fill={`url(#${uid}goldGrad)`} />
          <path d="M0 18C-9 14 -12 7 -7 2C-3 5 -1 10 0 18Z" fill={`url(#${uid}goldGrad)`} />
          <path d="M0 4C9 0 12 -7 7 -12C4 -8 1 -3 0 4Z" fill={`url(#${uid}goldGrad)`} />
          <path d="M0 11C9 7 12 0 7 -5C3 -1 1 4 0 11Z" fill={`url(#${uid}goldGrad)`} />
          <path d="M0 18C9 14 12 7 7 2C3 5 1 10 0 18Z" fill={`url(#${uid}goldGrad)`} />
        </g>

        <path d="M70 38C92 41 104 57 99 76C81 73 66 60 70 38Z" fill={`url(#${uid}leafGrad)`} />
        <path d="M75 42C82 52 83 62 82 72" stroke="#E9FFE9" strokeWidth="1.5" fill="none" />
      </g>

      {/* Brand name */}
      <text
        x="170"
        y="78"
        fontSize="48"
        fontFamily="Montserrat, Poppins, Arial, sans-serif"
        fontWeight="700"
        fill={textColor}
        letterSpacing="0.5"
      >
        AgroWorld
      </text>
      <text
        x="460"
        y="78"
        fontSize="48"
        fontFamily="Montserrat, Poppins, Arial, sans-serif"
        fontWeight="700"
        fill="#C99A16"
      >
        Hub
      </text>

      {/* Tagline */}
      <text
        x="172"
        y="112"
        fontSize="14"
        fontFamily="Inter, Arial, sans-serif"
        letterSpacing="3"
        fill={taglineColor}
      >
        CONNECTING FARMERS  •  MARKETS  •  OPPORTUNITIES
      </text>

      {/* Accent line */}
      <rect x="172" y="124" width="420" height="2.5" rx="2" fill={`url(#${uid}goldGrad)`} />
    </svg>
  );
}
