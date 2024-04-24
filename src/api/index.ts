import axios from 'axios';

export async function getCountries() {
  const FIELDS = ['flags', 'name', 'population', 'area', 'region'];
  const URL = `https://restcountries.com/v3.1/all?fields=${FIELDS.join(',')}`;

  const { data } = await axios.get<ICountry[]>(URL);

  return data;
}

export async function getCountry(name: string) {
  const URL = `https://restcountries.com/v3.1/name/${name}`;

  const { data } = await axios.get<ICountry>(URL);

  return data;
}
