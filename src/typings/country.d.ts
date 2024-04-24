interface ICountry {
  flags: Flags;
  name: Name;
  region: string;
  area: number;
  population: number;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  cat: Cat;
}

interface Cat {
  official: string;
  common: string;
}

export enum SortBy {
  Population = 'population',
  Name = 'name',
  Area = 'area',
}
