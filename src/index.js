import './css/styles.css';

import Notiflix from 'notiflix';

var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;


const inputForm = document.querySelector('#search-box');
console.log(inputForm);
console.log(inputForm.textContent)