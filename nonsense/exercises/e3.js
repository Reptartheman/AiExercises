/* Instructions: Write a function named countBooleans that takes an array and returns the count of boolean values (true and false) in the array. */

import { arrayOfStuff } from '../practice.js';

export const countBooleans = (array) => {
  return array.filter(elem => typeof elem === 'boolean')
    .map(elem => elem).length;
}

console.log(countBooleans(arrayOfStuff));
