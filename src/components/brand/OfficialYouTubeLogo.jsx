import React from 'react';

const ICONS = {
  red: 'https://www.gstatic.com/marketing-cms/assets/images/96/ff/14b02dc0467e8875e062e9565cbd/external-icon-core-1.png=n-w1860-h1047-fcrop64=1,00000000ffffffff-rw',
  black: 'https://www.gstatic.com/marketing-cms/assets/images/ea/e7/e186f61e4aff9e1e17d3aacfe77f/external-icon-mono-1.png=n-w1860-h1047-fcrop64=1,00000000ffffffff-rw',
  white: 'https://www.gstatic.com/marketing-cms/assets/images/24/4d/5e2470bb4d379193179c7002918c/external-icon-mono-3.png=n-w908-h511-fcrop64=1,00000000ffffffff-rw',
};

export default function OfficialYouTubeLogo({ variant = 'red', className = '' }) {
  return (
    <img
      src={ICONS[variant] || ICONS.red}
      alt="YouTube"
      className={className}
      style={{ width: '43px', height: '24px', minWidth: '43px', minHeight: '24px', objectFit: 'contain', display: 'block', flexShrink: 0 }}
    />
  );
}