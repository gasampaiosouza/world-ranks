'use client';

import { getCountries } from '@/api';
import { useQuery } from '@tanstack/react-query';
import Searchbar from './Searchbar';
import FilterCountries from './FilterCountries';
import ListCountries from './ListCountries';

const CountryList = () => {
  const { data } = useQuery({ queryKey: ['countries'], queryFn: getCountries });

  return (
    <main className="bg-[#1B1D1F] border border-[#282B30] max-w-[1240px] m-auto relative -top-[150px] p-5 text-[#D2D5DA] rounded-lg">
      <div className="flex justify-between">
        <h3 className="text-[#6C727F]">Found {data?.length || 0} countries</h3>

        <Searchbar />
      </div>

      <div className="flex gap-5">
        <FilterCountries />
        <ListCountries />
      </div>
    </main>
  );
};

export default CountryList;
