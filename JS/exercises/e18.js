/* 
Exercise 3: Find Musician by Normalized Index
Write a function that takes the jazzMusicians array and an index, 
and returns the musician at the normalized index.
*/

import { jazzMusicians } from "../../music.js";


function findMusicianByNormalizedIndex(arr, index) {
  const names = arr.map(musician => musician.name);
  const wrappedIndex = ((index % arr.length) + arr.length) % arr.length;
  return names[wrappedIndex];
}





const result = findMusicianByNormalizedIndex(jazzMusicians, -2);
console.log(result);


/* 
"Dizzy Gillespie" // Second to last musician
*/