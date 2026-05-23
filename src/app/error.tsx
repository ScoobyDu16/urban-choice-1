'use client';

import React from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-20">
      <div className="max-w-md text-center">
        <AlertTriangle className="text-destructive/60 mx-auto h-16 w-16" aria-hidden="true" />
        <h1 className="mt-4 text-3xl font-bold">Something Went Wrong</h1>
        <p className="text-muted-foreground mt-4">
          We encountered an unexpected error. This has been logged and our team will look into it.
        </p>
        {error.digest && (
          <p className="text-muted-foreground mt-2 font-mono text-xs">Error ID: {error.digest}</p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button onClick={reset}>
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
          <Button asChild variant="outline">
            <Link href="/">
              <Home className="h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
