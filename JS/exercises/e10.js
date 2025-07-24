/* 
  Exercise 10: Get Jazz Musicians’ Famous Works
Write a function that takes a musician’s name and the jazzMusicians array, and returns their famous works.
*/

import { jazzMusicians } from '../../music.js';


function getFamousWorks(musicianName, jazzMusicians) {
  const musician = jazzMusicians.find(musician => musician.name === musicianName);
  return musician?.famousWorks;
}

const works = getFamousWorks('Ella Fitzgerald', jazzMusicians);

console.log(works);
