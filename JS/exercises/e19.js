/* 
Exercise 4: Normalize Effect Index
Write a function that takes a track object and an index, 
and returns the effect at the normalized index. 
If the effects array is empty, return null.
*/

import { tracks } from "../../music.js";



function normalizeEffectIndex(object, index) {
  const targetArray = object.effects;
  const wrappedIndex = ((index % targetArray.length) + targetArray.length) % targetArray.length;
  const ourEffect = targetArray ? targetArray[wrappedIndex] : null;
  return ourEffect;

  
}




const result = normalizeEffectIndex(tracks[3], -1);
console.log(result);

/* 
"delay" // Last effect in the "Happy Hour" track
*/