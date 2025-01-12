import { jazzMusicians } from "../musicians"; 

export const getTotalNumberOfWorks = (array) => {
  return array.map(musician => musician.famousWorks.length).
  reduce((acc, curr) => {
    return acc + curr;
  },0);
}


getTotalNumberOfWorks(jazzMusicians);