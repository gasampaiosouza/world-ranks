import { getCountries } from '@/api';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useQuery } from '@tanstack/react-query';
import { useFilter } from '@/contexts/FilterContext';
import { Skeleton } from './ui/skeleton';

const TABLE_HEADINGS = ['Flag', 'Name', 'Population', 'Area (km²)', 'Region'];
const { format } = new Intl.NumberFormat('en-US');

const ListCountries = () => {
  const { appliedFilters } = useFilter();
  const { data, isLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: getCountries,
  });

  const sortedCountries = data?.sort((a, b) => {
    if (appliedFilters.sortBy == 'name') {
      return a.name.common.localeCompare(b.name.common);
    }

    return b[appliedFilters.sortBy] - a[appliedFilters.sortBy];
  });

  return (
    <Table className="mt-5">
      <TableHeader>
        <TableRow>
          {TABLE_HEADINGS.map((heading) => (
            <TableHead key={heading}>{heading}</TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {isLoading ? (
          <RenderSkeleton />
        ) : (
          sortedCountries?.map((country) => (
            <TableRow key={country.name.common}>
              <TableCell>
                <picture>
                  <source srcSet={country.flags.png} type="image/png" />
                  <img
                    src={country.flags.svg}
                    alt={country.flags.alt}
                    loading="lazy"
                    width={50}
                  />
                </picture>
              </TableCell>
              <TableCell>{country.name.common}</TableCell>
              <TableCell>{format(country.population)}</TableCell>
              <TableCell>{format(country.area)}</TableCell>
              <TableCell>{country.region}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

function RenderSkeleton() {
  const ROWS = Array.from({ length: 20 });

  return ROWS.map((_, i) => (
    <TableRow key={i}>
      <TableCell>
        <Skeleton className="h-10 w-14 rounded-lg" />
      </TableCell>

      <TableCell className="space-y-2">
        <Skeleton className="h-2 w-[420px]" />
      </TableCell>

      <TableCell className="space-y-2">
        <Skeleton className="h-2 w-[120px]" />
      </TableCell>

      <TableCell className="space-y-2">
        <Skeleton className="h-2 w-[120px]" />
      </TableCell>

      <TableCell className="space-y-2">
        <Skeleton className="h-2 w-[120px]" />
      </TableCell>
    </TableRow>
  ));
}

export default ListCountries;
