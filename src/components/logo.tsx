import * as React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className, width = 100, height = 100 }: LogoProps) {
  return (
    <Image
      src="https://i.postimg.cc/1XnHBPBD/Inserir-um-titulo.png"
      alt="Fala & Traça Logo"
      width={width}
      height={height}
      className={className}
    />
  );
}
