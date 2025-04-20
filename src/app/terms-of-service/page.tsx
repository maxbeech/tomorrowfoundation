'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TermsOfServiceRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/legal/terms');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Redirecting to Terms of Service...</p>
    </div>
  );
} 