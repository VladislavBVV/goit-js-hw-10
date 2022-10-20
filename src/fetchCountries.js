// export const countries = [
//   {
//     country: 'USA',
//     description: 'Cool',
//     population: '350K',
//   },
//   {
//     country: 'Germany',
//     description: 'Not Bad',
//     population: '40K',
//   },
//   {
//     country: 'Italy',
//     description: 'Beautiful',
//     population: '30K',
//   },
//   {
//     country: 'France',
//     description: 'Tasty',
//     population: '50K',
//   },
// ];



export function fetchCountries(name) {
  const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}