/* 
Exercise 3: Every Other Musician (starting at index 1)
Write a function called getEveryOtherMusicianName that:

Accepts the jazzMusicians array.
Returns an array of musician names at odd indices only (1, 3, 5, ...).

Requirements:
Use a helper function to check if an index is odd.
Use a loop or .filter() + .map() — your choice.
*/

import { jazzMusicians } from "../../music.js";
const logger = (message) => console.log(message);

const getOdds = (index) => index % 3 === 1;


const getEveryOtherMusicianName = (jazzMusicians) => {
  let result = [];

  for (let i = 0; i < jazzMusicians.length; i++) {
    if (getOdds(i)) {
      result.push(jazzMusicians[i].name);
    }
  }

  return result;
}


const result = getEveryOtherMusicianName(jazzMusicians);

logger(result);