/* 
1. Reverse Track Titles
Write a function that takes the tracks array and returns a new array of track titles reversed.
*/

import { tracks } from "../../music.js";

function reverseTrackTitles(tracks) {
  const trackNames = tracks.map(track => track.title.split('').reverse().join(''));
  return trackNames;
}



const result = reverseTrackTitles(tracks);
console.log(result);

/* 
["mehtnA cipE", "maJ htooJ htoomS", "yaD ynnuS", "ruoH yppaH", ...]
*/