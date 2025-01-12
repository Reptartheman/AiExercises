import { jazzMusicians } from '../musicians.js';

export const findYoungestMusician = (arr) => {
  const year = new Date().getFullYear();
  const namesAndBorn = arr.map(musician => ({ name: musician.name, born: new Date(musician.born).getFullYear()}));
  const namesAndAge = namesAndBorn.map(musician => ({ name: musician.name, age: (year - musician.born)}));
  return namesAndAge.reduce((acc, curr) => {
    if (curr.age < acc.age) {
      return acc = curr;
    }
    return curr.age < acc.age ? curr : acc;
  }, namesAndAge[0]);
  
}

findYoungestMusician(jazzMusicians);