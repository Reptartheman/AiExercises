/* 
Exercise 2: Divisible by 3 — Track Edition
Write a function called getEveryThirdTrackTitle that:

Accepts the tracks array.
Returns an array of track titles where 
the index is divisible by 3 (i.e. index 0, 3, 6...).

Requirements:
Use a loop (or .filter() if you want to challenge yourself).
Use a helper function to check if an index is divisible by 3.
Return an array of .title values that match the condition.
*/

import { tracks } from '../../music.js';
const logger = (message) => console.log(message);
const checkDivisbleByThree = (index) => index % 3 === 0;


const getEveryThirdTrackTitle = (tracks) => {
  return tracks.filter((track, index)=> checkDivisbleByThree(index))
    .map(track => track.title);
}

const result = getEveryThirdTrackTitle(tracks);

logger(result);