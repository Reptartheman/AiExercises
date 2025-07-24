/* 
  Exercise 4: Wrap Around Musician
Write a function called getWrappedMusicianName that:

Takes two arguments: 
an index (which can be negative or too large) 
and the jazzMusicians array.

Returns the .name of the musician at the normalized index, using modulo logic.
Use a helper function to handle the index normalization.
*/



import { jazzMusicians } from "../../music.js";
const logger = (message) => console.log(message);




const getWrappedMusicianName = (index, array) => {
  const wrappedItem = ((index % array.length) + array.length) % array.length;
  return array[wrappedItem].name;

}


const result = getWrappedMusicianName(34, jazzMusicians);
logger(result);
