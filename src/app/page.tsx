import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import Hero from '@/components/Hero';
import CountryList from '@/components/CountryList';
import { getCountries } from '@/api';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
  });

  return (
    <div className="h-full">
      <Hero />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <CountryList />
      </HydrationBoundary>
    </div>
  );
}

// #1B1D1F
// #282B30
// #4E80EE
// #6C727F
// #D2D5DA
