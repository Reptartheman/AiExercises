/* 
Exercise 22: Even Index Logger (Jazz Edition)
Write a function called logEvenJazzMusicians that:
Accepts the jazzMusicians array.
Logs the name of every musician who is at an even index (0, 2, 4, etc.).

Hints:
Use a loop.
Focus only on even indices, not even values.
Access the .name property when logging.

*/


import { jazzMusicians } from "../../music.js";
const logger = (message) => console.log(message);

const getEvens = (index) => index % 2 === 0;



const logEvenJazzMusicians = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const evens = getEvens(i)
    if (evens) {
      result.push(array[i].name);
    }
  }
  return result;
}


const result = logEvenJazzMusicians(jazzMusicians);
logger(result);



