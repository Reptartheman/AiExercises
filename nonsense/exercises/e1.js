//Write a function named sumOfEvens that takes an array and returns the sum of all even numbers in the array.

import { arrayOfStuff } from '../practice.js';

export const sumOfEvens = (array) => {
  const justNumbers = array.filter(elem => typeof elem === 'number' && elem % 2 === 0);
  return justNumbers.reduce((acc, curr) => {
    return acc + curr;
  })
}

console.log(sumOfEvens(arrayOfStuff));