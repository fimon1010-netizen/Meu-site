import * as React from 'react';

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Speech bubble */}
      <path 
        d="M10 10 H90 V70 H60 L50 90 L40 70 H10 V10 Z"
        fill="hsl(var(--background))"
        stroke="url(#logoGradient)"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Pencil/Trace */}
      <path 
        d="M30 40 Q 50 25, 70 40 T 75 50"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
