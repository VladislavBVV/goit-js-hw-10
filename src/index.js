import './css/styles.css';

// import Notiflix from 'notiflix';

// Notiflix.Report('wefgrwgfrwegfrwfgwerfg');

import { Notify } from "notiflix";



var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

import {fetchCountries} from './fetchCountries.js';


// console.log(inputFilter);




const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const input = document.querySelector('#search-box');



function countriesList({ flags, name }) {
  return `
    <li class = country-item>
    <img class = 'country-list__flags' src="${flags.svg}" alt="${name.official}" width=50/>
    <h2 class = country-list__name>${name.official}</h2>
    </li>
    `;
    
}

function countryCard({ flags, name, capital, population, languages }) {
  return `
    <div class=" country">
      <img class = "flag" src="${flags.svg}" alt="${
    name.official
  }" width = 100/>
  <h2 class = "title">Country: ${name.official}</h2>
  <p class = "text">Capital: ${capital}</p>
      <p class="text">Population: ${population}</p>
      <p class="text">Languages: ${Object.values(languages)}</p>
    </div>
    `;
}

input.addEventListener('input', debounce(inputFilter, DEBOUNCE_DELAY));
// input.addEventListener('input', ._debounce(inputFilter, 300));


function inputFilter(e) {
    e.preventDefault();
    let search = input.value;
    console.log(search)
    if (search.trim() === "") {
        clearLine()
        return;
    }
    fetchCountries (search.trim()).then(countries => {
        console.log(countries);
        if (countries.length > 10) { 
            Notify.info(
              'Too many matches found. Please enter a more specific name.'
            );
            clearLine()
                return;
        }

        if (countries.length > 1 && countries.length <= 10) {
        const cardList = countries.map(country => countriesList(country));
        countryList.innerHTML = cardList.join('');
        countryInfo.innerHTML = '';
        }
        if (countries.length === 1) { 
            const card = countries.map(country => countryCard(country));
            countryList.innerHTML = '';
            countryInfo.innerHTML = card.join('');
        }
    })
      .catch(error => {
      Notify.failure('Oops, there is no country with that name.');
    clearLine()
      return error;
    });

}

function clearLine() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';

}



// const listCountries = createListCountries(countries);

// function createListCountries(countries) { 
//     return countries
//       .map(item => `<ul>country ${item.country}<div>description ${item.description}</div><div>population ${item.population}</div></ul>`)
//       .join('');
// }

// console.log(listCountries);

// // countryList.innerHTML = listCountries;

// function inputFilter(evt) {
//     const filter = evt.target.value.toLowerCase();
//     const filteredItems = countries.filter(t =>
//         t.country.toLowerCase().includes(filter),
//     );
//     console.log(filteredItems);
//     const listCountries = createListCountries(filteredItems);
//     countryList.innerHTML = listCountries



    
//     console.log(listCountries);

// }