/* 
Exercise 6: Sort Jazz Musicians by Birth Year
Write a function that sorts the jazzMusicians array 
by their birth year in ascending order.
*/

import { jazzMusicians } from '../../music.js';

function sortMusiciansByBirthYear(jazzMusicians) {
  return jazzMusicians.sort((a, b) => {
    const dateA = new Date(a.born);
    const dateB = new Date(b.born);
    return dateA - dateB;
  })
}

const date = sortMusiciansByBirthYear(jazzMusicians);

console.log(date);

