import { arrayOfStuff } from "../practice.js";

const filterStrings = (array) => {
  console.log('Inside filterStrings');
  console.log(array);
  return array.filter(elem => typeof elem === 'string' && elem.length > 5);
};

console.log('Before calling filterStrings');
console.log(filterStrings(arrayOfStuff));
console.log('After calling filterStrings');
