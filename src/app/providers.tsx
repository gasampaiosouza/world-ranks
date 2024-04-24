'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FilterContextProvider } from '@/contexts/FilterContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 60 * 1000 } },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <FilterContextProvider>{children}</FilterContextProvider>
    </QueryClientProvider>
  );
}
