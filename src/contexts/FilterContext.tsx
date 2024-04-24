'use client';

import { AVAILABLE_REGIONS, DEFAULT_SORT_BY } from '@/constants';
import { SortBy } from '@/typings/country';
import {
  createContext,
  ReactNode,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

type IFilterContext = {
  appliedFilters: IAppliedFilters;
  setAppliedFilters: Dispatch<SetStateAction<IAppliedFilters>>;
};

export const FilterContext = createContext({} as IFilterContext);

type IFilterContextProvider = {
  children: ReactNode;
};

interface IAppliedFilters {
  region: string[];
  status: string;
  sortBy: SortBy;
  searchTerm: string;
}

export function FilterContextProvider({ children }: IFilterContextProvider) {
  const [appliedFilters, setAppliedFilters] = useState({
    region: AVAILABLE_REGIONS,
    sortBy: DEFAULT_SORT_BY,
    status: '',
    searchTerm: '',
  } as IAppliedFilters);

  console.log({ appliedFilters });

  return (
    <FilterContext.Provider value={{ appliedFilters, setAppliedFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => useContext(FilterContext);
