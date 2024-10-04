import { jazzMusicians } from "../musicians";

//Count how many musicians were born after 1930

export const bornAfter1930 = (array) => {
  const newArray = array.filter(musician => {
    const birthYear = new Date(musician.born).getFullYear();
    return birthYear > 1930;
  })
  return newArray.length;
}

bornAfter1930(jazzMusicians);