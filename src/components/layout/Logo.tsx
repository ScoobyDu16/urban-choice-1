import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  /** Show just the image mark without the wordmark */
  markOnly?: boolean;
  /** Override text size class */
  textSize?: string;
  className?: string;
  href?: string;
  /** Height of the logo image in px (default 40) */
  height?: number;
  /** Use light (white) wordmark for dark/coloured backgrounds */
  light?: boolean;
}

export function Logo({
  markOnly = false,
  textSize = 'text-xl',
  className,
  href = '/',
  height = 40,
  light = false,
}: LogoProps) {
  const content = (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="flex items-center justify-center overflow-hidden rounded-lg bg-white p-0.5">
        <Image
          src="/logo.png"
          alt="Urban Choice Building Materials"
          height={height}
          width={height}
          className="object-contain"
          priority
        />
      </span>
      {!markOnly && (
        <span
          className={cn(
            'leading-tight font-bold tracking-tight',
            textSize,
            light ? 'text-white' : 'text-foreground',
          )}
        >
          Urban <span className={light ? 'text-white/90' : 'text-primary'}>Choice</span>
        </span>
      )}
    </span>
  );

  if (!href) return content;
  return (
    <Link
      href={href}
      className="transition-opacity duration-200 hover:opacity-85"
      aria-label="Urban Choice Building Materials — Home"
    >
      {content}
    </Link>
  );
}

/** Alias: just the logo image mark */
export function LogoMark({ size = 36, className }: { size?: number; className?: string }) {
  return (
    <span className="flex items-center justify-center overflow-hidden rounded-lg bg-white p-0.5">
      <Image
        src="/logo.png"
        alt="Urban Choice"
        height={size}
        width={size}
        className={cn('object-contain', className)}
        priority
      />
    </span>
  );
}

export default Logo;
