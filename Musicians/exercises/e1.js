import { jazzMusicians } from '../musicians.js'

// Return the names of all jazz musicians.
export const allMusicians = (array) => {
  return array.map(musician => musician.name);
}

allMusicians(jazzMusicians);