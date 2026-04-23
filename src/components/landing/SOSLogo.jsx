import React from 'react';

// Logo oficial SOS Barcelona — círculo azul con ícono y texto
export default function SOSLogo({ size = 48, className = "" }) {
  return (
    <img
      src="https://media.base44.com/images/public/69ea6ca06c4574e55a2de28d/af3f9eee4_WhatsAppImage2026-04-23at212110.jpg"
      alt="SOS Barcelona Logo"
      style={{ width: size, height: size }}
      className={`rounded-full object-cover ${className}`}
    />
  );
}