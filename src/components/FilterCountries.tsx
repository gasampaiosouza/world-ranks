'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AVAILABLE_REGIONS, DEFAULT_SORT_BY } from '@/constants';
import { useFilter } from '@/contexts/FilterContext';
import { cn } from '@/lib/utils';
import { SortBy } from '@/typings/country';
import { useState } from 'react';

const Label = ({ children }: { children: string }) => (
  <label className="text-xs text-[#6C727F] mb-2 block">{children}</label>
);

const FilterCountries = () => {
  return (
    <aside className="max-w-[220px]">
      <SortBySelect />
      <FilterByRegion />
    </aside>
  );
};

const availableSorts = [
  { label: 'Population', value: 'population', isSelected: true },
  { label: 'Name', value: 'name' },
  { label: 'Area', value: 'area' },
];

function SortBySelect() {
  const { setAppliedFilters } = useFilter();

  function handleChange(value: SortBy) {
    setAppliedFilters((prev) => ({ ...prev, sortBy: value }));
  }

  return (
    <div>
      <Label>Sort by</Label>
      <Select onValueChange={handleChange}>
        <SelectTrigger
          defaultValue={DEFAULT_SORT_BY}
          id="sort-by"
          className="w-full text-xs"
        >
          <SelectValue
            placeholder={
              availableSorts.find((a) => a.value == DEFAULT_SORT_BY)?.label
            }
          />
        </SelectTrigger>

        <SelectContent>
          {availableSorts.map((sort) => (
            <SelectItem
              key={sort.value}
              value={sort.value}
              defaultChecked={!!sort?.isSelected}
            >
              {sort.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function Region({ region }: { region: string }) {
  const [isSelected, setIsSelected] = useState(true);
  const { setAppliedFilters } = useFilter();

  function handleRegionClick() {
    setIsSelected((prev) => !prev);

    setAppliedFilters((prev) => ({
      ...prev,
      region: prev.region.includes(region)
        ? prev.region.filter((r) => r !== region)
        : [...prev.region, region],
    }));
  }

  return (
    <div
      onClick={handleRegionClick}
      key={region}
      className={cn(
        'px-3 py-2 font-medium bg-[#282B30] text-[#D2D5DA] rounded-xl cursor-pointer text-xs',
        {
          'text-[#6C727F] bg-transparent': !isSelected,
        }
      )}
      //
    >
      {region}
    </div>
  );
}

function FilterByRegion() {
  return (
    <div className="mt-10">
      <Label>Region</Label>

      <div className="flex flex-wrap gap-3">
        {AVAILABLE_REGIONS.map((region) => (
          <Region key={region} region={region} />
        ))}
      </div>
    </div>
  );
}

export default FilterCountries;
