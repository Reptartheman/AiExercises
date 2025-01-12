/* Instructions: Write a function named keysContainingString that takes an object and a string as arguments and returns an array of all keys in the object that contain the string within the key's name. */

import { objectOfStuff } from '../practice.js';

export const keysContainingString = (object, string) => {
  const keys = Object.keys(object);
  const result = keys.filter(key => key.includes(string))
    .map(elem => elem);
  
    return result;
  
}

console.log(keysContainingString(objectOfStuff, 'thing'));