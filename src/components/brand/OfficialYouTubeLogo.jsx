import React from 'react';

const COLORS = {
  red: { shape: '#FF0000', play: '#FFFFFF' },
  black: { shape: '#000000', play: '#FFFFFF' },
  white: { shape: '#FFFFFF', play: '#000000' },
};

export default function OfficialYouTubeLogo({ variant = 'red', className = '' }) {
  const colors = COLORS[variant] || COLORS.red;

  return (
    <svg
      width="34"
      height="24"
      viewBox="0 0 68 48"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="YouTube"
      className={className}
      style={{ width: '34px', height: '24px', minWidth: '34px', minHeight: '24px', display: 'block', flexShrink: 0 }}
    >
      <path
        d="M66.52 7.74c-.78-2.93-3.09-5.24-6.02-6.02C55.18.3 34 0 34 0S12.82.3 7.5 1.72C4.57 2.5 2.26 4.81 1.48 7.74.06 13.06 0 24 0 24s.06 10.94 1.48 16.26c.78 2.93 3.09 5.24 6.02 6.02C12.82 47.7 34 48 34 48s21.18-.3 26.5-1.72c2.93-.78 5.24-3.09 6.02-6.02C67.94 34.94 68 24 68 24s-.06-10.94-1.48-16.26z"
        fill={colors.shape}
      />
      <path d="M27 34V14l18 10-18 10z" fill={colors.play} />
    </svg>
  );
}